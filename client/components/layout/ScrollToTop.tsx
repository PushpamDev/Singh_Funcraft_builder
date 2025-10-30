import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This effect will run every time the page (pathname) changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render any visible HTML
};