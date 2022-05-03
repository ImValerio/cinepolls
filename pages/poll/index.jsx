import React from "react";
import prisma from "../../lib/prisma";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const index = ({ polls }) => {
    const router = useRouter();

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Film 1</StyledTableCell>
                            <StyledTableCell>Film 2</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {polls.map((row, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell component="th" scope="row">
                                    {row.film1.title}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {row.film2.title}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" onClick={() => router.push("/")}>
                HOME
            </Button>
        </>
    );
};
export const getServerSideProps = async ({ req }) => {
    const polls = await prisma.poll.findMany({
        include: {
            film1: true,
            film2: true,
        },
    });
    await prisma.$disconnect();

    return { props: { polls } };
};

export default index;
