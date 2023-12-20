"use client";

import useEditTicketModal from "@/hooks/useEditTicketModal";
import Modal from "./modal";
import TicketFormBase from "./ticket-form-base";

function Body() {
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

export default function EditTicketModal() {
  function onSubmit() {
    // Add ticket submission logic here
  }

  const editTicketModal = useEditTicketModal();

  return (
    <Modal
      title="Edit Ticket"
      description="Edit the fields and save the changes to your ticket"
      onModalClose={editTicketModal.onClose}
      isModalOpen={editTicketModal.isOpen}
      body={<Body />}
      onSubmit={onSubmit}
      primaryButtonLabel="Save Changes"
    />
  );
}
