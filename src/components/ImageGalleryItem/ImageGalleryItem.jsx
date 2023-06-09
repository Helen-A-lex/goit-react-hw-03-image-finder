
import { Component } from "react"
import { Item, ItemImg } from "./ImageGalleryItem.styled";
import { ModalWindow } from "components/Modal/Modal";


export class ImageGalleryItem extends Component{
   state = {
    isModalOpen: false
    }

    openModal = () => {
    this.setState({isModalOpen:true})
    }
    
    closeModal = () => {
        this.setState({ isModalOpen: false })
    }


    render() {
        const {item } = this.props;
        const { isModalOpen } = this.state;
        console.log(isModalOpen);
        return (
            <>
        <Item className="gallery-item" key={item.id} onClick={this.openModal}>
                    <ItemImg src={item.webformatURL} alt={item.tags} />
                    {isModalOpen && (<ModalWindow image={item}  closeModal={this.closeModal} isModalOpen={isModalOpen}/>)}
             
        </Item>
        
           </>
        )
    }
}



