import Modal from 'react-modal';

const customStyles = {
  content: {
    width: '1000px',
    border: 'none',
    backgroundColor: 'transparent',
    inset: 'auto',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};
Modal.setAppElement('#root');

export const ModalWindow = ({ image, closeModal, isModalOpen }) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src={image.largeImageURL} alt={image.tags} />
      </Modal>
    </div>
  );
};
