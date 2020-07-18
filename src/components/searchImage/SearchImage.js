import React, { useEffect, useState } from "react";
import "./SearchImage.scss";
import { searchImageApi } from "../../service/unsplash";

const SearchImage = () => {
  const [loading, setLoading] = useState(false);
  const [photosList, setPhotosList] = useState([]);

  const updateSearchText = (event) => {
    let searchText = event.target.value;
    if (searchText) {
      apiCall(searchText);
    } else {
      apiCall();
    }
  };

  const apiCall = (search) => {
   // let response;
    new Promise((resolve) => {
      searchImageApi(search)
        .then((resp) => {
          setPhotosList(resp);
          setLoading(false);
        })
        .catch((err) => {
          console.log("err", err.message);
        });
    });
  };
  useEffect(() => {
    apiCall();
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
