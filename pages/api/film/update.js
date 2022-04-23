import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method == 'POST') {
        const { id, title } = req.body;

        const createdFilm = await prisma.film.update({
            where: {
                id
            },
            data: {
                title,
            }
        })
        await prisma.$disconnect()
        res.status(200).json({ msg: 'Film has been created!', createdFilm })
    }

}