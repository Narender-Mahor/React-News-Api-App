import axios from "axios";
import React, { useState } from "react";
import News from "./News";

const NewsItem = () => {
    const [newsApi, setNewsApi] = useState()
    // const [count, setCount] = useState(0)
  const handleFetch = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=918212a0eef64d06b9c957494feeb502"
      )
      .then((res) => {
        console.log(res);
        setNewsApi(res.data.articles)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrevButton = ()=> {
    console.log("handlePrevButton");

  }

  const handleNextButton = ()=> {
    console.log("handleNextButton");

  }

  return (
    <>
      <div className="container">
        <div className="btn btn-primary my-3" onClick={handleFetch}>
          Click Fetch News
        </div>
      </div>
      <div className="container">
         <div className="row">
           {
            newsApi?.map((element)=> {
                return(
                    <div className="col-md-3 my-3" key={element.url}>
                    <News Image={element.urlToImage} title={element.title} description={element.description} url={element.url}/>
                  </div>
                )
            })
           }

         </div>
      </div>
      <div className="container d-flex justify-content-between my-3">
            <button className="btn btn-dark" onClick={handlePrevButton}>Previous</button>
            <button className="btn btn-dark" onClick={handleNextButton}>Next</button>
        </div>
    </>
  );
};

export default NewsItem;
