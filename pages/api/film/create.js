import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method == 'POST') {
        const { title } = req.body;

        const createdFilm = await prisma.film.create({
            data: {
                title,
                votes: 0
            }
        })
        res.status(200).json({ msg: 'Film has been created!', createdFilm })
    }

}