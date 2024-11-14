import { useContext, useEffect } from "react";
import { useState } from "react"
import { context } from "./App";

export default function ImageGrid() {
  let [image, setImage] = useState([]);
  let {key, setKey} = useContext(context);
  const fetchData = async () => {
    let response = await fetch(`https://pixabay.com/api/?key=46996682-11d80c3f08839d355c35da773&q=${key}&image_type=photo&pretty=true`);
    let data = await response.json();
    setImage(data.hits);
  }
  useEffect( () => {
    fetchData();
  }, [key])

  return (
    <div className="grid w-full max-w-6xl mx-auto gap-5 mt-9 px-5 md:grid-cols-2 lg:grid-cols-3 mb-7">
      {image.map( (item, index) => {
          return (
            <div className="shadow-lg rounded w-full hover:scale-105 transition-all cursor-pointer" key={index}>
              <img src={item.webformatURL} className="w-full rounded-t"/>
              <div className="mx-5 mt-3">
                <p className="font-bold mb-2 text-purple-400">Photo by {item.user}</p>
                <p><span className="font-bold">Views: </span>{item.views}</p>
                <p><span className="font-bold">Downloads: </span>{item.downloads}</p>
                <p><span className="font-bold">Likes: </span>{item.likes}</p>
              </div>
              <div className="flex flex-wrap mx-5 mb-4 mt-3 gap-1.5 ">
                {(item.tags).split(",").map((item, index) => {
                  return (
                    <button key={index} className="text-1xl bg-zinc-100 rounded-full px-2 mr-2 text-gray-600 font-bold py-1 ">#{item.trim()}</button>
                  )
                })}
              </div>
            </div>
          )
      })}
    </div> 
  )
}
