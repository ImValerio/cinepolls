import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    const films = await prisma.film.findMany();
    await prisma.$disconnect()
    res.status(200).json({ films })
}