import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { PagePlaceholder } from "@/components/sections/page-placeholder";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <PagePlaceholder
      title="Boundary Beyond Reach"
      description="This destination is still being envisioned for Singh FurnCraft. Continue the collaboration to define the next interior experience."
      primaryCta={{ label: "Return Home", href: "/" }}
      secondaryCta={{ label: "Initiate Collaboration", href: "/contact" }}
    />
  );
};

export default NotFound;
