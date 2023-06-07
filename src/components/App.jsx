import { Component } from "react"
import { ToastContainer } from 'react-toastify';
import * as API from "services/api"

import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    searchName: "",
    images: [],
    isLoading: false,
    error: false

  }
  
  async componentDidMount() {
    try {
     this.setState({ isLoading: true });
     const images = await API.getImages();
      this.setState({ images });
    } catch (error) {
      this.setState({error: true})
      }finally {
      this.setState({ isLoading: false });
    }
     
}

  handleFormSubmit = async (searchName) => {
    try {
      this.setState({ isLoading: true });
      const images = await API.getImages(searchName);
      this.setState({ images });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false })
    }
  
  }


  render() {
    const { images, isLoading, error } = this.state;
    return (
      <>
        {error && <p> Mistakes!!!</p>}
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length > 0 ? <ImageGallery items={images} />: null};
        {isLoading ? "Loading" : <ImageGallery items={images} />}
        
        <ToastContainer autoClose={3000}/>
    </>)
    

  }
    
  
}
