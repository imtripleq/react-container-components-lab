import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "qpeiNpmcDvqAio5rjAhGqluHM1wljzju";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: "",
  };

  //   componentDidMount() {
  //     fetchForm = (search) => {
  //       fetch(
  //         `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=qpeiNpmcDvqAio5rjAhGqluHM1wljzju&query=${search}`
  //       )
  //         .then((resp) => resp.json())
  //         .then((data) => {
  //           console.log(data);
  //         });
  //     };
  //   }

  render() {
    return <div className="searchable-movie-reviews"></div>;
  }
}
