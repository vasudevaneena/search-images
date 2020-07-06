import axios from "axios";

const unsplash = {
  async searchImageApi(url, searchImage) {
    
    const response = await axios.get(`${url}${process.env.REACT_APP_UNSPLASH_TOKEN}`);
    if (searchImage) {
      return response.data.results;
    } else {
      return response.data;
    }
  },
};

export default unsplash;
