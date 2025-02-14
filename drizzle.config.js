/** @type {import ("drizzle-kit").Config }*/
export default {
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_rNkOK79DHvtF@ep-odd-flower-a8566cpc-pooler.eastus2.azure.neon.tech/ai-generator-video?sslmode=require'
  }
};