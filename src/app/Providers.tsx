"use client";

import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default Providers;
