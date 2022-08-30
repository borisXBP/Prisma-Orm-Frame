import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
db.$connect().catch((err) => console.err(err));

export default db;
