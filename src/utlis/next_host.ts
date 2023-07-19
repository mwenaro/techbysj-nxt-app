import { headers } from "next/dist/client/components/headers";

const host = headers().get('host')||''
export const HOST_PATH =   host.includes('localhost')? `{http://${host}/}`: `{https://${host}}`