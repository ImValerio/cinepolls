import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, Grid, Typography } from "@mui/material";

export const Navbar = () => {
    const { data: session } = useSession();
    return (
        <nav className="w-full bg-grey p-1">
            {!session && (
                <Link
                    href="/api/auth/signin"
                    onClick={(e) => {
                        e.preventDefault();
                        signIn();
                    }}
                >
                    <Typography
                        variant="h5"
                        component="a"
                        fontWeight="500"
                        className="mx-1 c-pointer"
                    >
                        SIGN IN
                    </Typography>
                </Link>
            )}
            {session && (
                <Grid
                    container
                    justifyContent="space-around"
                    alignItems="center"
                    flexDirection="row"
                >
                    <div className="d-flex justify-center items-center">
                        <Avatar
                            alt="User image profile"
                            src={session.user.image}
                        />
                        <Typography
                            variant="h5"
                            component="a"
                            fontWeight="400"
                            marginX={1}
                        >
                            {session.user.name}
                        </Typography>
                    </div>
                    <Link
                        href="/api/auth/signout"
                        onClick={(e) => {
                            e.preventDefault();
                            signOut();
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="a"
                            fontWeight="500"
                            className="c-pointer"
                            marginX={1}
                        >
                            SIGN OUT
                        </Typography>
                    </Link>
                </Grid>
            )}
        </nav>
    );
};
