import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as API from 'services/api';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
export class App extends Component {
  state = {
    searchName: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    isEmpty: false,
    isShownButton: false
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;

    if (prevState.searchName !== searchName || prevState.page !== page) {
      this.loadImages(searchName, page);
    }
    
  }


  loadImages = async (searchName, page) => {
    this.setState({ isLoading: true, error: null });
    try {
      const {hits, total, totalHits} = await API.getImages(searchName, page);
      if (!hits.length) {
        this.setState({ isEmpty: true })
        return;
      }
       this.setState((prevState) => ({
        images: [...prevState.images, ...hits],
        page, isShownButton: page < Math.ceil(total/ totalHits),
      }));
    }
      catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          this.setState({
            error: 'Oops! Something went wrong! Try reloading the page!',
          });
        }
      } finally {
        this.setState({ isLoading: false });
      }
}
  

  handleSearch = searchName => {
    this.setState({ searchName, page: 1 });
  };

  
  handleButtonLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    const { images, isLoading, error,isEmpty} = this.state;
    return (
      <Layout>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleSearch} />
        {isEmpty && <p>Sorry. There are no images ... </p>}
        {isLoading ? (
          <Loader />
        ) : images.length > 0 ? (
          <>
            <ImageGallery items={images} />
           <Button onClick={this.handleButtonLoadMore} />
          </>
        ) : null}
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ToastContainer autoClose={2000} />
      </Layout>
    );
  }
}
