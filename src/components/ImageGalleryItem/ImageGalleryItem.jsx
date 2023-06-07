export const ImageGalleryItem = ({item}) => {
    return (
 <li className="gallery-item">
  <img src={item.webformatURL} alt={item.tags} />
</li>
    )
}