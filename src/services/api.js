import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '35754029-ae2c95690085c71643cf1e4c6';

export const getImages = async searchName => {
  const response = await axios.get(
    `?q=${searchName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log(response.data.hits);
  return response.data.hits;
};
