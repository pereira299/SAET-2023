import { NextRequest, NextResponse } from "next/server";
import DatoCMS from "@/services/datocms";

const query = `{
    allUploads {
        id
        url
        tags
        filename
        alt
    }
  }
`;

export const GET = async (req: NextRequest) => {
  const result = await DatoCMS.get(query);

  return NextResponse.json(result);
};
