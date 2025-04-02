"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Card, SignInContainer } from "./card";

export default function SignIn() {
  const { data: session } = useSession();

  return (
    <SignInContainer>
      <Card variant="outlined">
        {session ? (
          <>
            <Typography variant="h4">
              Welcome back! {session.user.name}
            </Typography>
            <Typography>You are already signed in.</Typography>
            <Button variant="contained" component={Link} href="/dashboard">
              Go to Dashboard
            </Button>
            <Button
              onClick={() => signOut()}
              type="submit"
              variant="outlined"
              color="error"
            >
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Typography component="h1" variant="h4">
              Sign in
            </Typography>

            <Button
              onClick={() => signIn("google", { redirectTo: "/dashboard" })}
              type="submit"
              variant="contained"
            >
              Sign in with Google
            </Button>
          </>
        )}
      </Card>
    </SignInContainer>
  );
}
