import { NextRequest, NextResponse } from "next/server";
import DatoCMS from "@/services/datocms";

const query = `{
    allTickets(first: "100") {
        price
        pago
        id
        cursos {
          category
          title
          id
        }
        client_json
    }
}`;

export const GET = async (req: NextRequest, res: NextResponse) => {
  const headers = req.headers;
  const token = headers.get("token");
  if (!token) {
    return new Response("Token ausente ou inválido", {
      status: 401,
    });
  }
  const now = new Date().getTime();
  const decToken = parseInt(token || "0", 16);
  if (decToken > now) {
    return new Response("Token ausente ou inválido", {
      status: 401,
    });
  }

  const result = await DatoCMS.get(query);

  return NextResponse.json(result.allTickets);
};

export const POST = async (req: NextRequest, res: NextResponse) => {

  const form = await req.formData();

  const coursesList = form.get("courses")?.toString().split(",") || [];
  console.log(coursesList);

  let price = 40 + (coursesList.length - 3) * 5;
  if (price < 40) {
    price = 40;
  }
  const ticket = await DatoCMS.create({
    type: "ticket",
    attributes: {
      pago: false,
      price: price,
      client_json: JSON.stringify({
        name: form.get("nome"),
        email: form.get("email"),
        ra: form.get("ra") || null,
        cpf: form.get("cpf"),
        estado: form.get("estado"),
        cidade: form.get("cidade"),
        logradouro: form.get("logradouro"),
        num: form.get("num"),
        fone: form.get("fone"),
      }),
      client_name: form.get("nome"),
      cursos: coursesList,
    },
    relationships: {
      item_type: {
        data: {
          type: "item_type",
          id: "123",
        },
      },
    },
    status: "published",
  });

  return NextResponse.json({
    ticket: ticket.data,
  });
};
