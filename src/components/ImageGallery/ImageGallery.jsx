import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImgGallery } from "./ImageGallery.styled";
export const ImageGallery = ({items}) => {
    return (<>
        <ImgGallery className="gallery">
            {items.map(item =>
            (<ImageGalleryItem key={item.id} item={item} />
            ))}
        </ImgGallery>
    </>
        
    )
};