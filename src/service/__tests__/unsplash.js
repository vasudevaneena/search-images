import axios from "axios";
import { searchImageApi } from "../unsplash";
jest.mock("axios");

describe("fetchData", () => {
  it("fetches successfully data from an API", async () => {
    const response = {
      data: {
        results: ["cat.jpg"],
      },
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await expect(searchImageApi("kittens")).resolves.toEqual(["cat.jpg"]);
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
          query: "kittens",
        },
      }
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  //   it('fetches erroneously data from an API', async () => {
  //     const errorMessage = 'Network Error';

  //     axios.get.mockImplementationOnce(() =>
  //       Promise.reject(new Error(errorMessage)),
  //     );

  //     await expect(fetchData('react')).rejects.toThrow(errorMessage);
  //   });
});
