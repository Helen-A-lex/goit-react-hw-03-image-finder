import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


// export class ImageGallery extends Component{
//     state = {
//     images: [],
//     isLoading: false,
//     error: false
// }

//     async componentDidUpdate(prevProps, prevState) {
//         if (prevProps.searchName !== prevState.searchName) {
//       try {
//      this.setState({ isLoading: true });
//           const images = await API.getImages(this.state.searchName);
//           console.log(images);
//       this.setState({ images });
//     } catch (error) {
//       this.setState({error: true})
//       }finally {
//       this.setState({ isLoading: false });
//     }
//     }
// }

//     render() {
//         const { images } = this.state;
//     return (<>
//          <ul className="gallery">
//              {images.map(image =>
//             (<ImageGalleryItem key={image.id} item={image} />
//             ))}
//         </ul>
//     </>)
// }
// }


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