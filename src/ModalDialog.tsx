import { Dialog } from "@headlessui/react";

export function ModalDialog({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  return (
    <Dialog onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative bg-white rounded max-w-sm mx-auto">
          <Dialog.Title>Complete your order</Dialog.Title>

          {/* ... */}
        </div>
      </div>
    </Dialog>
  );
}
