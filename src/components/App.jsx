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
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;

    if (prevState.searchName !== searchName) {
      try {
        this.setState({ isLoading: true, error: null });
        const images = await API.getImages(searchName, page);
        this.scrollStuff();
        this.setState({ images, page });
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          this.setState({
            error: 'Oops! Something went wrong! Try reloading the page!',
          });
        }
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  scrollStuff = () => {
    window.scrollBy({
      top: 260 * 2,
      behavior: 'smooth',
    });
  };

  handleSearch = searchName => {
    this.setState({ searchName, page: 1 });
  };

  handleButtonLoadMore = async () => {
    const { searchName, page } = this.state;
    try {
      const images = await API.getImages(searchName, page + 1);
      this.setState(prevState => ({
        isLoading: true,
        page: prevState.page + 1,
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <Layout>
        <GlobalStyle />

        <Searchbar onSubmit={this.handleSearch} />
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
