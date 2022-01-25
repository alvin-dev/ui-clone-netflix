import React from "react";
import './style.css'

export default ({title, items}) => {
  return (
    <div className="movieRowWrapper">
      
      
      <div className="movieRowSliderArea">
        <h2>{title}</h2>
        <div className="movieRowlist">
            {items.results.length > 0 && items.results.map((item, key)=>(
              <div className="movieRowitems">
                <img key={key} src={`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`} alt={item.title} />


                <div  className="movieModalItemsWrapper">
                  <div  className="movieModalItems">
                    <ul className="modalItemsButtons">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <div className="genresItems">
                      {item.genre_ids.slice(0, 3).join(', ')}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        
        
      </div>

    </div>
  );
}