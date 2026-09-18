export default async () => Response.json({
  status: "ok",
  environment: process.env.TEST_CONTEXT ?? "netlify-free-evaluation",
  content: "synthetic-only",
});
