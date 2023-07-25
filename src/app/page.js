'use client'
import { useEffect, useState } from "react"
import IncrementButton from "./Components/IncrementButton";
import Header from "./Components/Header";
import Link from "next/link";
import Modal from "./Components/Modal";

export default function Home() {
  
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("#66BDFF");
  const [modal, setModal] = useState(false)
  
  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("Lists")))
    setColor(localStorage.getItem("LastColour"))
  },[])

  const addList = (e) => {
    e.preventDefault();
    const newItem = {
      name: inputValue,
      id: list ? list.at(list.length - 1).id + 1 : 1,
      color: color,
      checked: false
    }
    if (list) {
      const newList = [
        ...list,
        newItem
      ]
      console.log(newList)
      setList(newList)
      updateLocalStorage(JSON.stringify(newList))
    } else {
      const newList = [
        newItem
      ]
      console.log(newList)
      setList(newList)
      updateLocalStorage(JSON.stringify(newList))
    }
    setInputValue("")

  }
  const updateLocalStorage = (data) => {
    localStorage.setItem("Lists",data)
    localStorage.setItem("LastColour",color)
  }

  const deleteList = (id) => {
    if (list.length > 1) {
      const newList = list.filter(item => item.id !== id)
      setList(newList)
      updateLocalStorage(JSON.stringify(newList))
    } else {
      setList(null)
      localStorage.removeItem("Lists")
    }
  }


  return (
    <main className="flex flex-col gap-10 bg-neutral-50">
      <Header color={color} />
      <div className="flex flex-col px-6 md:px-10">
        <IncrementButton inputValue={inputValue} setInputValue={setInputValue} addList={addList} color={color} setColor={setColor} />
      </div>
      {
        list && (
          <div className="flex flex-wrap gap-10 px-6 md:px-10 mb-10 max-w-full">
            {
              list.map(listItem => {
                return (
                  <div 
                    key={listItem.id}
                    className={`fade-in flex justify-between items-center px-6 py-6 shadow-md rounded-md w-1/4 max-w-md min-w-[300px] mx-auto h-max gap-4`}
                    style={{backgroundColor: listItem.color}}
                  >
                    <p className=" px-4 py-2 rounded bg-white/80 shadow-md relative text-base">{listItem.name}</p>
                    <button
                      className=" hover:text-red-500 pointer-events-auto bg-white/80 h-10 aspect-square flex justify-center items-center rounded-full shadow-md"
                      onClick={() => deleteList(listItem.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>

                    </button>
                  </div>
                )
              })
            }
          </div>
        )
      }
      {
        !list && (
          <div className=" px-6 md:px-10 max-w-full fade-in mb-10">
            <h3 
              className=" px-6 py-4 rounded-xl bg-neutral-800 text-neutral-50 text-base"
              >
              You&apos;ve not got any items yet, simply type your items in the field above and choose a colour!
            </h3>
          </div>
        )
      }
      <button 
        className=" fixed bottom-6 left-4 p-2 rounded-full"
        style={{backgroundColor: color}}
        onClick={() => setModal(!modal)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      </button>
      <Modal modal={modal} setModal={setModal} color={color} />
    </main>
  )
}
