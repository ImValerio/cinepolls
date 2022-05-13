import prisma from "../../../lib/prisma";

export default async (req, res) => {
    if (req.method == 'POST') {
        const { film, pollId: id, email } = req.body;

        const query = {
            where: {
                id
            },
            data: {

            }
        }

        if (film == 1)
            query.data.votesFilm1 = { increment: 1 }

        if (film == 2)
            query.data.votesFilm2 = { increment: 1 }

        await prisma.vote.create({
            data: {
                userEmail: email,
                pollId: id
            }
        })
        const { votesFilm1, votesFilm2 } = await prisma.poll.update(query)

        await prisma.$disconnect()
        res.status(200).json({ msg: 'Added vote to db!', votesFilm1, votesFilm2 })
    }

}