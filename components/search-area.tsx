"use client";

import { useState } from "react";
import Combobox from "./combobox";
import { Input } from "./ui/input";

export default function SearchArea() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row items-center gap-5">
        <div className="w-full">
          <Input placeholder={`Search for results in ${value}`} />
        </div>
        <div className="w-full md:w-[200px]">
          <Combobox value={value} setValue={setValue} />
        </div>
      </div>
      {/* {value ? (
        <h1 className="py-3 text-lg md:text-xl font-bold text-slate-500 capitalize">
          {value}
        </h1>
      ) : (
        ""
      )} */}
    </div>
  );
}
