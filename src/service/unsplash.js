import axios from "axios";

export const searchImageApi = async (searchImage) => {
  let response;
 
  if (searchImage) {
    response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
        query: searchImage,
      },
    });
  
    return response.data.results;
  } else {
    response = await axios.get("https://api.unsplash.com/photos", {
      params: {
        client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
     
      },
    });
    return response.data;
  }

};
