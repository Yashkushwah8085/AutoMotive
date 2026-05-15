"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteReset({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="min-h-screen flex flex-col">{children}</div>;
}