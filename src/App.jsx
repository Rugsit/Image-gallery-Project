import { createContext, useState } from "react";
import ImageGrid from "./ImageGrid";
import SearchBar from "./SearchBar";

export const context = createContext(null);

export default function App() {
  let [key, setKey] = useState("");
  return (
    <>
      <context.Provider value={{
        key, 
        setKey
      }}>
        <p className="w-fit mx-auto text-4xl text-center font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text mt-8">Image gallery by Rugsit</p>
        <SearchBar />
        <ImageGrid />
      </context.Provider>
    </>
  )
}
