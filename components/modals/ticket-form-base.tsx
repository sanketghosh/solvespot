"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import Combobox from "../combobox";
import { useState } from "react";

interface TicketFormBaseProps {
  firstInpPlaceholder?: string;
  secondInputPlaceholder?: string;
  radioOptionOne?: string;
  radioOptOneHtmlAttr?: string;
  radioOptionTwo?: string;
  radioOptTwoHtmlAttr?: string;
  sliderOneText?: string;
  sliderOneValue?: number;
  sliderOneDefaultValue?: number;
  sliderOneMax?: number;
  sliderOneStep?: number;
  sliderTwoText?: string;
  sliderTwoValue?: number;
  sliderTwoDefaultValue?: number;
  sliderTwoMax?: number;
  sliderTwoStep?: number;
}

type RadItemsType = {
  htmlAttr: string | any;
  radText: string | any;
};

type SliderItemsType = {
  sliderText: string | any;
  sliderVal: number | any;
  sliderDefaultVal: number | any;
  sliderMax: number | any;
  sliderStep: number | any;
};

export default function TicketFormBase({
  firstInpPlaceholder,
  secondInputPlaceholder,
  radioOptionOne,
  radioOptionTwo,
  radioOptOneHtmlAttr,
  radioOptTwoHtmlAttr,
  sliderOneText,
  sliderOneValue,
  sliderOneDefaultValue,
  sliderOneMax,
  sliderOneStep,
  sliderTwoText,
  sliderTwoValue,
  sliderTwoDefaultValue,
  sliderTwoMax,
  sliderTwoStep,
}: TicketFormBaseProps) {
  const radioItems: RadItemsType[] = [
    {
      htmlAttr: radioOptOneHtmlAttr,
      radText: radioOptionOne,
    },
    {
      htmlAttr: radioOptTwoHtmlAttr,
      radText: radioOptionTwo,
    },
  ];

  const sliderItems: SliderItemsType[] = [
    {
      sliderText: sliderOneText,
      sliderVal: sliderOneValue,
      sliderDefaultVal: sliderOneDefaultValue,
      sliderMax: sliderOneMax,
      sliderStep: sliderOneStep,
    },
    {
      sliderText: sliderTwoText,
      sliderVal: sliderTwoValue,
      sliderDefaultVal: sliderTwoDefaultValue,
      sliderMax: sliderTwoMax,
      sliderStep: sliderTwoStep,
    },
  ];

  const [value, setValue] = useState<string>("");

  return (
    <div className="space-y-6 py-5">
      <Input placeholder={firstInpPlaceholder} />
      <Input placeholder={secondInputPlaceholder} />
      <div className="flex items-center justify-between">
        <RadioGroup defaultValue="started" className="flex items-center gap-4">
          {radioItems.map((item, idx) => (
            <div className="flex items-center space-x-2" key={idx}>
              <RadioGroupItem value={item.htmlAttr} id={item.htmlAttr} />
              <Label htmlFor={item.htmlAttr}>{item.radText}</Label>
            </div>
          ))}
        </RadioGroup>
        <Combobox value={value} setValue={setValue} />
      </div>
      {sliderItems.map((item) => (
        <div className="space-y-2.5" key={item.sliderText}>
          <span className="flex items-center justify-between text-sm font-medium">
            <p>{item.sliderText}</p>
            <p>{item.sliderVal}</p>
          </span>
          <Slider
            defaultValue={[item.sliderDefaultVal]}
            max={item.sliderMax}
            step={item.sliderStep}
          />
        </div>
      ))}
    </div>
  );
}
