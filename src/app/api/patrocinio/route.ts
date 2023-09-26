import { NextRequest, NextResponse } from "next/server";
import DatoCMS from "@/services/datocms";

const query = `{
    allPatrocinios {
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
) => {
  const result = await DatoCMS.get(query);

  return NextResponse.json(result);
};
