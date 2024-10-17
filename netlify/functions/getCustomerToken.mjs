import api from "../utils/apiClient.mjs";

export async function handler(event, context) {
  currentDateTime = new Date();
  const expiredTime = new Date(currentDateTime.getTime() + 3600000);
  const formatedDateTime = expiredTime.toISOString();
  const loginData = {
    customerId: process.env.VITE_CUSTOMER_ID,
    mode: "passwordless",
    expiredTime: formatedDateTime,
  };
  try {
    const token = await fetch(
      `https://api-sandbox.rebilly.com/organizations/${process.env.VITE_ORGANIZATION_ID}/authentication-tokens`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "REB-APIKEY": process.env.VITE_REBILLY_API_KEY,
        },
        body: JSON.stringify(loginData),
      }
    );
    const data = await token.json();

    const { fields: exchangeToken } =
      await api.customerAuthentication.exchangeToken({
        token: data.token,
        data: {
          acl: [
            {
              scope: {
                organizationId: [process.env.VITE_ORGANIZATION_ID],
              },
              permissions: [
                "PostToken",
                "PostDigitalWalletValidation",
                "StorefrontGetAccount",
                "StorefrontPatchAccount",
                "StorefrontPostPayment",
                "StorefrontGetTransactionCollection",
                "StorefrontGetTransaction",
                "StorefrontGetPaymentInstrumentCollection",
                "StorefrontPostPaymentInstrument",
                "StorefrontGetPaymentInstrument",
                "StorefrontPatchPaymentInstrument",
                "StorefrontPostPaymentInstrumentDeactivation",
                "StorefrontGetWebsite",
                "StorefrontGetInvoiceCollection",
                "StorefrontGetInvoice",
                "StorefrontGetProductCollection",
                "StorefrontGetProduct",
                "StorefrontPostReadyToPay",
                "StorefrontGetPaymentInstrumentSetup",
                "StorefrontPostPaymentInstrumentSetup",
                "StorefrontGetDepositRequest",
                "StorefrontGetDepositStrategy",
                "StorefrontPostDeposit",
              ],
            },
          ],
          customClaims: {
            websiteId: process.env.VITE_WEBSITE_ID,
          },
        },
      });

    return {
      statusCode: 200,
      body: JSON.stringify(exchangeToken),
      headers: {
        "Access-Control-Allow-Origin": "*", // Adjust as necessary for security
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
