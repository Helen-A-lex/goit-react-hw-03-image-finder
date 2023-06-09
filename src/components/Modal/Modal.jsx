import { Component } from 'react';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export class ModalWindow extends Component {
    state = {
    isModalOpen: false
    }


    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown )
    }


    componentDidUpdate() {
        window.removeEventListener("keydown",this.handleKeyDown)
    }

    handleKeyDown = evt => {
        if (evt.code === "Escape") {
            this.props.closeModal()
}}
        
    
     

    render(){
        
        const { image, closeModal,isModalOpen} = this.props;
        console.log(isModalOpen);
    return (
      <div>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}>
        <div className="overlay">
        <div className="modal">
        <img src={image.largeImageURL} alt={image.tags}/>
        </div>
        </div>
      </Modal>
    </div>
  );
}
    
    
}