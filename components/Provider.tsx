"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  session?: any;
}

const Provider = ({ children, session }: Props) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
