"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type ProviderProps = { children: ReactNode };

const Provider = ({ children}: ProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
