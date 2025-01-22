import { ModalAnime } from "@/constants/anime";
import useAppStore from "@/store/app";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function WelcomeModal() {
  const { openModal, setOpenModal, appUser } = useAppStore();

  useEffect(() => {
    if (openModal) {
      confetti();
    }
  }, [openModal]);
  return (
    <Modal
      backdrop="opaque"
      isOpen={openModal}
      onOpenChange={() => setOpenModal(!openModal)}
      motionProps={ModalAnime}
    >
      <ModalContent className="bg-card">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-mont bg-card">
              👏 Hi {appUser}
            </ModalHeader>
            <ModalBody className="font-mont bg-card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                et. Culpa deserunt nostrud ad veniam.
              </p>
            </ModalBody>
            <ModalFooter className="bg-card">
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
