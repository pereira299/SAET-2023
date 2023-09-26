import { NextRequest, NextResponse } from 'next/server'
import DatoCMS from '@/services/datocms'

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { name, email, payment, courses, palestras, price } = await req.json();

    const client = await DatoCMS.create({
        type: 'person',
        attributes: {
            name,
            email,
        },
        relationships: {
            item_type: {
                data: {
                    type: 'item_type',
                    id: '123'
                }
            }
        },
        status: 'published'
    });

    const ticket = await DatoCMS.create({
        type: 'ticket',
        attributes: {
            payment,
            price: price,
            client: client.id,
            palestras: [
                ...palestras.map((palestra: any) => palestra.id)
            ],
            cursos: [
                ...courses.map((curso: any) => curso.id)
            ]
        },
        relationships: {
            item_type: {
                data: {
                    type: 'item_type',
                    id: '123'
                }
            },
        },
        status: 'published'
    })

    return NextResponse.json({
        ticket: ticket.data
    });
}