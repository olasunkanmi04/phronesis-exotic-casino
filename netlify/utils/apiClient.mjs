import RebillyAPI from "rebilly-js-sdk";

const api = RebillyAPI({
  apiKey: process.env.VITE_REBILLY_API_KEY,
  organizationId: process.env.VITE_ORGANIZATION_ID,
  sandbox: true,
});

export default api;
