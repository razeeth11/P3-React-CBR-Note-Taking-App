import { useLocation } from "react-router-dom";

export function SiteHeader() {
  const location = useLocation();

  const heading =
    location.pathname === "/all-notes" ? "All Notes" : "Archived Notes";

  return (
    <header className="border bg-white sticky top-0 p-5">
      <div>
        <h1 className="text-2xl font-medium">{heading}</h1>
      </div>
    </header>
  );
}
