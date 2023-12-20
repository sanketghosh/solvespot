"use client";

/* IMPORTING COMPONENTS */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PenSquare, Star, XSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

import formatDate from "@/utils/date-format";
import useEditTicketModal from "@/hooks/useEditTicketModal";

type TicketCardProps = {
  title: string;
  description: string;
  rating: number;
  progressPercentage: number;
  status: string;
  dateTime: Date;
};

export default function TicketCard({
  title,
  description,
  rating,
  progressPercentage,
  status,
  dateTime,
}: TicketCardProps) {
  const editTicketModal = useEditTicketModal();

  return (
    <Card className="relative">
      <div className="absolute top-2 right-2 flex items-center">
        <button className="p-1" onClick={editTicketModal.onOpen}>
          <PenSquare size={18} />
        </button>
        <button className="p-1">
          <XSquare size={18} />
        </button>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
        <CardContent className="p-0">
          <div className="space-y-4 mt-2">
            {/* BADGES */}
            <div className="flex items-center gap-1">
              <Badge
                variant={"default"}
                className="rounded-full select-none text-xs font-normal"
              >
                {status}
              </Badge>
              <Badge
                variant={"secondary"}
                className="rounded-full select-none text-xs font-normal"
              >
                hardware problem
              </Badge>
            </div>

            {/* RATING AND PROGRESS */}
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-1">
                <p>5</p>
                <Star size={17} fill="black" />
              </div>
              <div className="w-full flex items-center gap-1">
                <Progress value={progressPercentage} className="w-full" />
                <p>50%</p>
              </div>
            </div>

            <p className="text-xs font-medium select-none">
              {formatDate(dateTime)}
            </p>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
