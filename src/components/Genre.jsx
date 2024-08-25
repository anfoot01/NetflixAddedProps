import React from "react";
import "./Genre.scss"
const Genre = () => {
  let genres = ['Drama', 'Thriller', 'Supernatural']
  let genreEl = genres.map((item, index)=> {
    return(
        <p key={index} href="genre"> {item}</p>
    )
  })
  return (
    <div className="genres">
      {genreEl}
    </div>
  );
};

export default Genre;
