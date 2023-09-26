import { NextRequest, NextResponse } from 'next/server'
import DatoCMS from '@/services/datocms'

const query = (id: number | string) => `{
    ticket(filter: {id: {eq: ${id}}}) {
        id
        payed
        client {
          id
          name
          photoUrl {
            url
          }
          ra
        }
        cursos {
          id
          title
        }
    }
  }
`

export const GET = async (req: NextRequest, {params}: {params: {id: string}}) => {   
    const {id} = params;
    if(!id) return new Response('Missing id', {
        status: 400,
    })
    if(Array.isArray(id)) return new Response('Invalid id', {
        status: 400,
    })

    const result = await DatoCMS.get(query(id));

    if(!result.ticket) {
        return new Response('ticket not found', {
            status: 404,
        })
    }

    return NextResponse.json({
        id: Number.parseInt(result.ticket.id),
        payed: result.ticket.payed,
        client: {
            id: Number.parseInt(result.ticket.client.id),
            name: result.ticket.client.name,
            photoUrl: result.ticket.client.photoUrl.url,
            ra: result.ticket.client.ra
        },
        cursos: result.ticket.cursos.map((curso: any) => {
            return {
                id: Number.parseInt(curso.id),
                title: curso.title
            }
        })
    });

}