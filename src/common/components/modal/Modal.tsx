import { useEffect, useState } from "react";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import {
  ModalCloseIconWrapper,
  ModalContent,
  ModalContentWrapper,
  ModalHeader,
  ModalSection,
  ModalTitle,
  ModalWrapper,
} from "@/common/components/modal/styles";
import { getLanguage } from "@/common/helpers/getLanguage";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const lang = getLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "auto";
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalSection onClick={onClose} tabIndex={-1}>
      <ModalContent onClick={(e) => e.stopPropagation()} $visible={isVisible}>
        <ModalWrapper>
          <ModalContentWrapper>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>

              <ModalCloseIconWrapper>
                <ButtonWithIcon
                  icon="close"
                  title={lang.close}
                  click={onClose}
                />
              </ModalCloseIconWrapper>
            </ModalHeader>
            {children}
          </ModalContentWrapper>
        </ModalWrapper>
      </ModalContent>
    </ModalSection>
  );
};

export default Modal;
