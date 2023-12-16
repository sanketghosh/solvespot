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
import { Star, XSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

import formatDate from "@/utils/date-format";

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
  return (
    <Card className="relative">
      <div className="absolute top-2 right-2">
        <button className="p-1">
          <XSquare size={20} />
        </button>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardContent className="p-0">
          <div className="space-y-4 mt-2">
            <div className="flex items-center justify-between">
              {
                <div className="flex items-center gap-1.5">
                  <Star size={15} fill="black" />
                  <Star size={15} fill="black" />
                  <Star size={15} fill="black" />
                  <Star size={15} fill="black" />
                  <Star size={15} />
                </div>
              }
              <Badge variant={"default"} className="rounded-full select-none">
                {status}
              </Badge>
            </div>
            <Progress value={progressPercentage} />
            <p className="text-xs font-medium select-none">
              {formatDate(dateTime)}
            </p>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
