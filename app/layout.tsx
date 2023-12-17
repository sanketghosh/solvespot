import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import ClientOnly from "@/components/client-only";
import AddTicketModal from "@/components/modals/addTicketModal";
import RegisterModal from "@/components/modals/registerModal";

export const metadata: Metadata = {
  title: "solvespot",
  description: "Add tickets and solve your issues.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-onest min-h-screen">
        <ClientOnly>
          {/*     <RegisterModal />
          <AddTicketModal /> */}
          <div>
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-5">
              {children}
            </div>
          </div>
        </ClientOnly>
      </body>
    </html>
  );
}
