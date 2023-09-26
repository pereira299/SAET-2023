import { NextRequest, NextResponse } from "next/server";
import DatoCMS from "@/services/datocms";

const query = (id: string) => `{
    ticket(filter: {id: {eq: ${id}}}) {
        id
        payment
        price
        client {
            id
            name
            ra
        }
        curso {
            id
            title
        }
        palestra {
            id
            title
        }
        present {
            id
            name
        }
    }
}`;

export const POST = async (req: NextRequest) => {
  let isPenetra = false;
  const { id, name, email, eventId } = await req.json();
  if (name && email) {
    isPenetra = true;
    const client = await DatoCMS.create({
      type: "person",
      attributes: {
        name,
        email,
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
    return addPresent({ id: client.id, name, email, eventId, isPenetra });
  }

  const result = await DatoCMS.get(query(id));

  if (!result.ticket) {
    isPenetra = true;
    return addPresent({ id, name, email, eventId, isPenetra });
  }

  if (!result.ticket.payment) {
    isPenetra = true;
    return addPresent({ id, name, email, eventId, isPenetra });
  }
  return addPresent({ id, name, email, eventId, isPenetra });
};

const addPresent = async ({
  id,
  name,
  email,
  eventId,
  isPenetra,
}: {
  id: string;
  name: string;
  email: string;
  eventId: string;
  isPenetra: boolean;
}) => {
  const present = await DatoCMS.create({
    type: "present",
    attributes: {
      client: id,
      evento: eventId,
      penetra: isPenetra,
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

  return NextResponse.json("Presença comfirmada com sucesso!");
};
