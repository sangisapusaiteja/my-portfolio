"use client";

import { useState } from "react";
import Navigation from "@/components/shared/Navigation";
import CustomCursor from "@/components/shared/CustomCursor";
import VersionHistory from "@/components/shared/VersionHistory";
import Loader from "@/components/shared/Loader";
import SmoothScroll from "@/components/shared/SmoothScroll";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <SmoothScroll>
        <Navigation />
        <CustomCursor />
        <VersionHistory />
        {children}
      </SmoothScroll>
    </>
  );
}
