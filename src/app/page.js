'use client'
import { useEffect, useState } from "react"
import IncrementButton from "./Components/IncrementButton";
import Header from "./Components/Header";
import Link from "next/link";
import Modal from "./Components/Modal";
import ItemNotification from "./Components/ItemNotification";

export default function Home() {
  
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("#66BDFF");
  const [checkbox, setCheckbox] = useState(false)
  const [modal, setModal] = useState(false)
  const [deleted, setDeleted] = useState(false)
  
  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("Lists")))
    console.log(list)
    setColor(localStorage.getItem("LastColour"))
  },[])

  const addList = (e) => {
    e.preventDefault();
    const newItem = {
      name: inputValue,
      id: list ? list.at(list.length - 1).id + 1 : 1,
      color: color,
      completed: false
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

    setDeleted(true)
    setTimeout(() => {
      setDeleted(false)
    },2000)
  }


  return (
    <main className="flex flex-col gap-10 bg-neutral-50">
      <Header color={color} list={list} />
      <div className="flex flex-col px-6 md:px-10 sticky top-0 z-30 py-6 bg-neutral-50 max-w-full">
        <IncrementButton inputValue={inputValue} setInputValue={setInputValue} addList={addList} color={color} setColor={setColor} />
      </div>
      {
        list && (
          <div className="flex flex-wrap gap-6 px-6 md:px-10 mb-32 max-w-full justify-evenly lg:justify-start">
            {
              list.map(listItem => {
                return (
                  <div 
                    key={listItem.id}
                    className={`fade-in flex justify-between items-center px-6 py-6 shadow-md rounded-md w-1/4 max-w-md min-w-[300px] h-max gap-4`}
                    style={{backgroundColor: listItem.color}}
                  >
                    <div className="relative">
                      <p 
                        className={`px-4 py-2 rounded bg-neutral-50 shadow-md relative text-base`}>
                        {listItem.name}
                      </p>

                    </div>
                    <button
                      className=" hover:text-red-500 pointer-events-auto bg-neutral-50 hover:bg-neutral-100 hover:shadow-lg hover:scale-105 transition-all duration-200 h-10 aspect-square flex justify-center items-center rounded-full shadow-md"
                      onClick={() => deleteList(listItem.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
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
          <div className=" px-6 md:px-10 max-w-full fade-in mb-20">
            <h3 
              className=" px-6 py-4 rounded-xl bg-neutral-800 text-neutral-50 text-base"
              >
              You&apos;ve not got any items yet, simply type in your items above and choose a colour!
            </h3>
          </div>
        )
      }
      <button 
        className=" fixed bottom-6 left-6 p-2 rounded-full"
        style={{backgroundColor: color}}
        onClick={() => setModal(!modal)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      </button>
      <Modal modal={modal} setModal={setModal} color={color} />
      <ItemNotification deleted={deleted} setDeleted={setDeleted} notification="Item Completed!" />
    </main>
  )
}
