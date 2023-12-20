"use client";

import { useState } from "react";
import useAddTicketModal from "@/hooks/useAddTicketModal";

/* COMPONENTS */
import Modal from "@/components/modals/modal";

import TicketFormBase from "./ticket-form-base";

function Body() {
  // const [] = useState();

  /* 
  <div className="space-y-6 py-5">
      <Input placeholder="Ticket title" />
      <Input placeholder="Ticket description" />
      <RadioGroup
        defaultValue="option-started"
        className="flex items-center gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-started" id="option-started" />
          <Label htmlFor="option-started">Started</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-not-started" id="option-not-started" />
          <Label htmlFor="option-not-started">Not Started</Label>
        </div>
      </RadioGroup>
      <div className="space-y-2.5">
        <span className="flex items-center justify-between text-sm font-medium">
          <p>Importance Rating</p>
          <p>05</p>
        </span>
        <Slider defaultValue={[20]} max={100} step={20} />
      </div>
      <div className="space-y-2.5">
        <span className="flex items-center justify-between text-sm font-medium">
          <p>Progress</p>
          <p>45%</p>
        </span>
        <Slider defaultValue={[45]} max={100} step={1} />
      </div>
    </div>
  
  */

  return (
    <TicketFormBase
      firstInpPlaceholder="Add Title"
      secondInputPlaceholder="Add Description of ticket"
      radioOptOneHtmlAttr="started"
      radioOptionOne="Started"
      radioOptTwoHtmlAttr="not-started"
      radioOptionTwo="Not Started"
      sliderOneText="Importance rating"
      sliderOneValue={4}
      sliderOneDefaultValue={0}
      sliderOneMax={100}
      sliderOneStep={20}
      sliderTwoText="Progress"
      sliderTwoValue={20}
      sliderTwoDefaultValue={5}
      sliderTwoMax={100}
      sliderTwoStep={1}
    />
  );
}

export default function AddTicketModal() {
  function onSubmit() {
    // Add ticket submission logic here
  }

  const addTicketModal = useAddTicketModal();

  return (
    <Modal
      title="Add Ticket"
      description="Fill the details and add your tickets to solve the problem"
      onModalClose={addTicketModal.onClose}
      isModalOpen={addTicketModal.isOpen}
      body={<Body />}
      onSubmit={onSubmit}
      primaryButtonLabel="Add Ticket"
    />
  );
}
