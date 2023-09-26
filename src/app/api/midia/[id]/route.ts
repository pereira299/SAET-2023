import { NextRequest, NextResponse } from "next/server";
import DatoCMS from "@/services/datocms";

const query = (id: number | string) => `{
    upload(filter: {id: {eq: ${id}}}) {
        id
        url
        filename
        tags
    }
  }
`;

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  if (!id)
    return new Response("Missing id", {
      status: 400,
    });
  if (Array.isArray(id))
    return new Response("Invalid id", {
      status: 400,
    });

  const result = await DatoCMS.get(query(id));
};
