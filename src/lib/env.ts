import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    GOOGLE_ID: z.string(),
    GOOGLE_SECRET: z.string(),
  },
  client: {},
  experimental__runtimeEnv: {},
});
