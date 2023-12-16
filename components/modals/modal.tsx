"use client";

import { useCallback } from "react";

/* components */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ModalProps = {
  title?: string;
  description?: string;
  body?: React.ReactNode;
  footer?: React.ReactElement;
  disabled?: boolean;
  primaryButtonLabel?: string;
  onSubmit: () => void;
  isModalOpen?: boolean;
  onModalClose: () => void;
};

export default function Modal({
  title,
  description,
  body,
  footer,
  disabled,
  primaryButtonLabel,
  onSubmit,
  isModalOpen,
  onModalClose,
}: ModalProps) {
  /* modal submit function */

  const handleModalSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, []);

  return (
    <Dialog open={isModalOpen}>
      <DialogContent closeDialog={onModalClose}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{body}</div>
        <div>{footer}</div>
        {primaryButtonLabel && (
          <Button onSubmit={handleModalSubmit}>{primaryButtonLabel}</Button>
        )}
      </DialogContent>
    </Dialog>
  );
}
