// drizzle.config.ts

import type { Config } from "drizzle-kit";

export default {
  dialect: "sqlite",
  schema: "./server/db/schema.ts",
  out: "./server/db/migration",
  dbCredentials: {
    url: "file:./.data/sqlite.db"
  }
} satisfies Config;
