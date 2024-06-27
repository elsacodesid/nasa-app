import React from "react";

const Main = ({data}) => {
  return (
    <div className="imgContainer">
     {/* {data.media_type === "image" ? (<img src={data.hdurl} alt={data.title || ""} />) : (<iframe src={`https://youtube.com/embed/${data.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>)} */}

     <iframe src={`https://youtube.com/embed/${data.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default Main;
