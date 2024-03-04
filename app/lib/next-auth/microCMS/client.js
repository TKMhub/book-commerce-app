import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: "api-key",
});
