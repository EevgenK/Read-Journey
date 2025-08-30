import { ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import clsx from 'clsx';
import closeIcon from '../../../assets/icons/sprite.svg';
import useModal from '../../../utils/hooks/useModal';
import { useSelector } from 'react-redux';
import { selectModalType } from '../../../redux/modal/selectors';
export interface ModalProps {
  children: ReactNode;
}
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }: ModalProps): ReactElement | null => {
  const isMenu = useSelector(selectModalType) === 'menu';
  const { handleClose, isVisible, isOpen, handleOverlayClick } = useModal();

  if (!modalRoot || !isOpen) return null;
  return createPortal(
    <div
      className={clsx(s.overlay, { [s.active]: isVisible })}
      onClick={handleOverlayClick}
    >
      <div
        className={clsx(s.modal, { [s.active]: isVisible }, isMenu && s.menu)}
      >
        <button onClick={handleClose} type="button" aria-label="close">
          <svg
            className={clsx(s.close_btn, isMenu && s.menu_close)}
            role="img"
            aria-label="close button"
            width="32"
            height="32"
          >
            <use href={`${closeIcon}#icon-close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};
export default Modal;
