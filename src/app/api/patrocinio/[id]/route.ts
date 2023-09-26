import { NextRequest, NextResponse } from "next/server";
import DatoCMS from "@/services/datocms";

const query = (id: number | string) => `{
    patrocinio(filter: {id: {eq: ${id}}}) {
        id
        title
        img {
             id
             url
             filename
        }
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
