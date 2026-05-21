import type { ReactNode } from "react";
import { Header } from "../components/header";
import { CardProvider } from "@/contexts/card-context";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CardProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[auto_1fr] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CardProvider>
  );
}
