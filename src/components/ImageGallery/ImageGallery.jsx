import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({items}) => {
    return (<>
        <ul className="gallery">
            {items.map(item =>
            (<ImageGalleryItem key={item.id} item={item} />
            ))}
        </ul>
    </>
        
    )
};