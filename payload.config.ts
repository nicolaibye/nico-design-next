import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { resendAdapter } from "@payloadcms/email-resend";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import { buildConfig } from "payload";
import { Posts } from "./src/collections/Posts.ts";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Posts],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || "" },
  }),
  email: resendAdapter({
    defaultFromAddress: "noreply@yourdomain.com",
    defaultFromName: "Your Site",
    apiKey: process.env.RESEND_API_KEY || "",
  }),
  plugins: [
    formBuilderPlugin({
      fields: { text: true, email: true, textarea: true, select: true },
      // no `upload` — text-only submissions
    }),
  ],
});
