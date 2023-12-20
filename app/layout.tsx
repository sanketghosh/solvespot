import type { Metadata } from "next";
import "../styles/globals.css";

/* COMPONENTS */
import Navbar from "@/components/navbar";
import ClientOnly from "@/components/client-only";
import AddTicketModal from "@/components/modals/add-ticket-modal";
import RegisterModal from "@/components/modals/register-modal";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import EditTicketModal from "@/components/modals/edit-ticket-modal";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientOnly>
            <RegisterModal />
            <AddTicketModal />
            <EditTicketModal />
            <div>
              <Navbar />
              <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-5">
                {children}
              </div>
            </div>
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
