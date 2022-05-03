import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method == 'POST') {
        const { film } = req.body;

        const createdFilm = await prisma.film.update({
            data: {
                title,
                votes: 0
            }
        })
        await prisma.$disconnect()
        res.status(200).json({ msg: 'Film has been created!', createdFilm })
    }

}