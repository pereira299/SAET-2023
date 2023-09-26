import { NextRequest, NextResponse } from 'next/server'
import DatoCMS from '@/services/datocms'

const query = (id: string) => `{
    ticket(filter: {client: {eq: ${id}}}) {
        id
        payment
        price
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

const queryClient = (email: string) => `{
    person(filter: {email: {eq: "${email}"}}) {
        id
        name
        ra
        email
      }
}`

export const GET = async (req: NextRequest) => {   
    const params = req.nextUrl.searchParams;
    const email = params.get('email');
    if(!email) return new Response('Missing email', {
        status: 400,
    })
    if(Array.isArray(email)) return new Response('Invalid email', {
        status: 400,
    })
    const client = await DatoCMS.get(queryClient(email));
    if(!client.person) {
        return new Response('ticket not found', {
            status: 404,
        })
    }
    const result = await DatoCMS.get(query(client.person.id));

    if(!result.ticket) {
        return new Response('ticket not found', {
            status: 404,
        })
    }

    return NextResponse.json(
        result.ticket
    );
}