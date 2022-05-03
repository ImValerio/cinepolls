import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method == 'POST') {
        const { film1, film2 } = req.body;
        console.log(film1, film2)
        const createdPoll = await prisma.poll.create({
            data: {
                film1Id: film1,
                film2Id: film2
            }
        })
        await prisma.$disconnect()
        res.status(200).json({ msg: ' Poll has been created!', createdPoll })
    }

}