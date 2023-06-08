import { Component } from "react"

import { ToastContainer } from 'react-toastify';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import * as API from "services/api"
export class App extends Component {
  state = {
    searchName: "",
    images: [],
    isLoading: false,
    error: false
    }
  
  
  async componentDidMount(){
       
      try {
     this.setState({ isLoading: true });
          const images = await API.getImages(this.state.searchName);
          console.log(images);
      this.setState({ images });
    } catch (error) {
      this.setState({error: true})
      }finally {
      this.setState({ isLoading: false });
    }
    }



  handleSearch = (searchName) => {
    {this.setState({searchName})}
  }
  

  render() {
    const {images} = this.state;
    return (
      <>
        {/* {error && <p> Mistakes!!!</p>} */}
        <Searchbar onSubmit={this.handleSearch} />
        {/* {images.length > 0 ? <ImageGallery  searchName={this.state.searchName} />: null};
        {isLoading ? "Loading" : <ImageGallery searchName={this.state.searchName}/>}
         */}
        <ImageGallery items={images} searchName={this.state.searchName}/>
        <ToastContainer autoClose={3000}/>
    </>)
    

  }
    
  
}
