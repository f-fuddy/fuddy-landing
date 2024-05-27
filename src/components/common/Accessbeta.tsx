"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export default function AccessBeta() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button onClick={onOpen} className="btn">
        Unirse
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Muy pronto 😉</ModalHeader>
              <ModalBody>
                <p>
                  Subscríbete a la newsletter y obtén el acceso anticipado a la
                  APP
                </p>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-sm btn-outline" onClick={onClose}>
                  Cerrar
                </button>
                <a
                  data-open="false"
                  className="btn btn-sm"
                  href="/#newsletter"
                  onClick={onClose}
                >
                  Ir ya 👀
                </a>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
