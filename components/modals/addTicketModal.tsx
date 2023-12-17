"use client";

import Modal from "@/components/modals/modal";
import useAddTicketModal from "@/hooks/useAddTicketModal";

function Body() {
  return <h1>Add Ticket Modal</h1>;
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
