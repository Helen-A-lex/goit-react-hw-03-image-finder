import { Component } from "react"

import { ToastContainer } from 'react-toastify';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import * as API from "services/api"
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
export class App extends Component {
  state = {
    searchName: "",
    images: [],
    isLoading: false,
    error: false,
    page: 1,
    }
  
  
  async componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;
    console.log(page);
    if(prevState.searchName !== searchName){
      try {
        this.setState({ isLoading: true });
        const images = await API.getImages(searchName, page);
        this.setState({ images, page});
      } catch (error) {
        this.setState({ error: true })
      } finally {
        this.setState({ isLoading: false });
      }}
    }
    

  handleSearch = (searchName) => {
    this.setState({searchName, page: 1})
  }
  

  handleButtonLoadMore = async () => {
    const { searchName, page} = this.state;
    
    try {
      const images = await API.getImages(searchName,page + 1);
      this.setState(prevState => ({ isLoading: true, page: prevState.page + 1, images: [...prevState.images, ...images]}))
    } catch (error) {
      this.setState({ error: true })
      } finally {
      this.setState({ isLoading: false });
    }
  }
  
  

  render() {
    const {images,isLoading} = this.state;
    return (
      <Layout>
        <GlobalStyle/>
        {/* {error && <p> Mistakes!!!</p>} */}
        <Searchbar onSubmit={this.handleSearch} />
       {isLoading ? (
          <Loader />
        ) : images.length > 0 ? (
          <>
            <ImageGallery items={images} />
            <Button onClick={this.handleButtonLoadMore}/>
          </>
        ) : null}
        
      <ToastContainer autoClose={3000}/>
    </Layout>)
    

  }
    
  
}
