import { config } from 'dotenv';

config({ path : `.env.${process.env.NODE_ENV || 'development'}.local` });

// eslint-disable-next-line no-undef
export const { PORT,NODE_ENV,
     DB_URI,
     JWT_SECRET, JWT_EXPIRES_IN
 } = process.env;

 
