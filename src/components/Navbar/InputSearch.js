"use client"

import { useRef } from "react"

const InputSearch = () => {
  const inputRef = useRef()
  const handleSearch = (e) => {
    e.preventDefault()
    alert(inputRef.current.value)
  }
  return (
    <div className="relative flex">
      <input type="text" placeholder="cari judul" className="w-full p-2 text-black" ref={inputRef}  />
      <button type="submit" className="aboslute top-2 right-3 p-2 text-white bg-gray-500" onClick={handleSearch}>Search</button>
    </div>
  )
}

export default InputSearch