import { useContext, useRef } from "react";
import { context } from "./App";

export default function SearchBar() {
  let {key, setKey} = useContext(context);
  let search = useRef(0);
  const searchImage = () => {
    setKey(search.current.value);
  }
  return (
    <div>
      <div className="flex w-full max-w-96 mt-5 mx-auto border-b-2 py-3 px-1">
        <input  ref={search} placeholder="Search Image Term..."  className="focus:outline-none w-full"/>
        <button onClick={searchImage} className="bg-indigo-400 px-5 py-2 rounded active:bg-indigo-200 text-white active:scale-105 transition-all">Search</button>
      </div>

    </div>
  )
}
