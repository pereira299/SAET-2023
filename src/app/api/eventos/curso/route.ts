import { NextRequest, NextResponse } from 'next/server'
import DatoCMS from '@/services/datocms'

const query = `{
    allEventos(filter: {category: {eq: "2"}}) {
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

export const GET = async (req: NextRequest, res: NextResponse) => {   
    const result = await DatoCMS.get(query);

    return NextResponse.json(result.allEventos.map((evento: any) => {
        return {
            id: Number.parseInt(evento.id),
            title: evento.title,
            ministrante: {
                id: Number.parseInt(evento.ministranteField.id),
                name: evento.ministranteField.name
            },
            category: Number.parseInt(evento.category),
            datetime: {
                start: evento.datetimeStart,
                end: evento.datetimeEnd
            }
        }
    }));

}

