import api from "../utils/apiClient.mjs";

export async function handler(event, context) {
  try {
    const depositRequest = await api.depositRequests.create({
      data: event.body,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(depositRequest),
      headers: {
        "Access-Control-Allow-Origin": "*", // Adjust as necessary for security
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err }),
    };
  }
}
