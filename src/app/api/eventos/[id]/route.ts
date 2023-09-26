import { NextRequest, NextResponse } from 'next/server'
import DatoCMS from '@/services/datocms'

const query = (id: number | string) => `{
    evento(filter: {id: {eq: ${id}}}) {
      id
      title
      ministranteField {
        name
        id
      }
      category
      datetimeEnd
      datetimeStart
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

    if(!result.evento) {
        return new Response('Evento not found', {
            status: 404,
        })
    }

    return NextResponse.json({
        id: Number.parseInt(result.evento.id),
        title: result.evento.title,
        ministrante: {
            id: Number.parseInt(result.evento.ministranteField.id),
            name: result.evento.ministranteField.name
        },
        category: Number.parseInt(result.evento.category),
        datetime: {
            start: result.evento.datetimeStart,
            end: result.evento.datetimeEnd
        }
    });

}

