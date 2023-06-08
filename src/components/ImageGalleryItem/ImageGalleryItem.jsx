export const ImageGalleryItem = ({ item }) => {
    console.log(item);
    return (
  <li className="gallery-item" key={item.id}>
  <img src={item.webformatURL} alt={item.tags} />
        </li>

    )
}