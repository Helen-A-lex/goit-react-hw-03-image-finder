import { Item, ItemImg } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ item }) => {
    
   return (
  <Item className="gallery-item" key={item.id}>
  <ItemImg src={item.webformatURL} alt={item.tags} />
        </Item>

    )
}