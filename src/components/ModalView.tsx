import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';

export interface Props {
  isOpen: boolean;
  callback: () => void;
  modalContent?: React.ReactNode;
}

export const ModalView = ({ isOpen, callback, modalContent }: Props) => {
  const { onOpenChange, onClose } = useDisclosure();
  const handleClose = () => {
    onClose();
    callback();
  };
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      onClose={handleClose}
      size='sm'
    >
      <ModalContent>{(onClose) => <>{modalContent}</>}</ModalContent>
    </Modal>
  );
};
