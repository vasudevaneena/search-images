import React, { useEffect, useState } from "react";
import "./SearchImage.scss";
import unsplash from "../../service/unsplash";

const SearchImage = () => {
  const [loading, setLoading] = useState(false);
  const [photosList, setPhotosList] = useState([]);
 
  const updateSearchText = (event) => {
    let searchText = event.target.value;
    if (searchText) {
      apiCall(
        `https://api.unsplash.com/search/photos?query=${searchText}&client_id=`,
        "search"
      );
    } else {
      apiCall("https://api.unsplash.com/photos?client_id=");
    }
  };

  const apiCall = (url, search) => {
    let response;
    new Promise((resolve) => {
      unsplash
        .searchImageApi(url, search)
        .then((resp) => {        
          response = resp;
          setPhotosList(response);
          setLoading(false);
        })
        .catch((err) => {
          console.log("err", err.message);
        });
    });
  };
  useEffect(() => {
    apiCall("https://api.unsplash.com/photos?client_id=");
    
  }, []);

 

  return (
    <>
      <input
        type="text"
        className="col-md-3"
        name="search"
        id="search"
        onChange={updateSearchText}
        placeholder="search photos"
      />
    
      <div className="flowers">
        {loading ? (
          <div>loading...</div>
        ) : (
          photosList &&
          photosList.map((image, index) => (
            <img
              key={index}
              className="col-md-4 col-xs-4"
              src={image.urls.thumb}
              alt="Image"
            />
          ))
        )}
      </div>
    </>
  );
};
export default SearchImage;
