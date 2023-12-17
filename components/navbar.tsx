"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import useAddTicketModal from "@/hooks/useAddTicketModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const addTicketModal = useAddTicketModal();
  const registerModal = useRegisterModal();

  return (
    <nav className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 w-full fixed z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-5">
        <div className="w-full flex items-center justify-between">
          <Link href={"/"}>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
              solvespot
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <Button
              className="flex items-center gap-1"
              onClick={addTicketModal.onOpen}
              variant={"outline"}
            >
              <p className="text-sm">Add Ticket</p>
              <PlusCircle size={18} />
            </Button>
            <div
              className="cursor-pointer"
              role="button"
              onClick={registerModal.onOpen}
            >
              <Avatar>
                <AvatarFallback>SG</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
