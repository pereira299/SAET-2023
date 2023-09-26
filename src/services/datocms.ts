import axios from "axios";
import { buildClient, LogLevel } from '@datocms/cma-client-node';

interface DatoContent {
  itemId?: string;
  type: string;
  attributes: {
    [key: string]: any;
  };
  relationships: {
    item_type: {
      data: {
        id: string;
        type: "item_type"
      }
    };
  };
  status?:  "published" | "draft" | "updated" | null | undefined;
}

const modelId: {
  [key: string]: string;
} = {
  'evento': '2263841',
  'ticket': '2325149',
  'patrocinio': '2263843',
  'person': '2325148',
  'produto': '2263842',
  'present': '2335620'
}

const datoCmsApi = async (
  query: string,
  variables = {},
  includeDrafts = false
) => {
  try {
    const res = await axios.post(
      "https://graphql.datocms.com/",
      JSON.stringify({ query, variables }),
      {
        headers: {
          Authorization: `Bearer ${process.env.DATO_CMS_API_KEY}`,
          ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
        },
      }
    );

    if (res.data.errors) {
      console.error(res.data.errors);
      throw new Error("Failed to fetch API");
    }

    return res.data.data;
  } catch (e) {
    console.log(query);
    console.error(e);
    throw new Error("Failed to fetch API");
  }
};

const datoClient = () => {
  const client = buildClient({
    apiToken: process.env.DATO_CMS_API_KEY as string,
    logLevel: LogLevel.BODY,
    environment: "main"
  })
  return client;
};

const datoCreate = async (data: DatoContent) => {
  const client = datoClient();
  client.fields
  return client.items.create({
    item_type: {
      id: modelId[data.type],
      type: "item_type"
    },
    ...data.attributes,
  })
}

const datoUpdate = async (data: DatoContent) => {
  if(!data.itemId) throw new Error('Missing itemId');
  const client = datoClient();
  return client.items.rawUpdate(data.itemId, {
    data: {
      id: data.itemId,
      type: "item",
      attributes: {
        ...data.attributes,
      },
      relationships: {
        ...data.relationships,
      },
      meta: {
        updated_at: new Date().toISOString(),
        status: data.status || 'updated',
      }
    }
  })
}

const datoDelete = async (id: string) => {
  const client = datoClient();
  return client.items.rawDestroy(id);
}

const datoCms = {
  get: datoCmsApi,
  create: datoCreate,
  update: datoUpdate,
  delete: datoDelete,
};
export default datoCms;