"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components//ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "./ui/command";
import { cn } from "@/lib/utils";
import { problemsTags } from "@/utils";

type ComboboxProps = {
  value: string;
  setValue: (value: string) => void;
};

export default function Combobox({ value, setValue }: ComboboxProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            role="combobox"
            aria-expanded={open}
            className="w-full md:w-[200px] justify-between"
          >
            {value
              ? problemsTags.find((pbTag) => pbTag.value === value)?.label
              : "Select problem..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[340px] md:w-[200px] p-0">
          <Command>
            <CommandGroup>
              {problemsTags.map((pbTag, idx) => (
                <CommandItem
                  className="cursor-pointer"
                  key={pbTag.value}
                  value={pbTag.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "m-2 h-4 w-4",
                      value === pbTag.value ? "opacity-100" : "opacity-0"
                    )}
                  ></Check>
                  {pbTag.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
