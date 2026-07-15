import { useState } from "react"

function App() {

  const [color, setColor] = useState("white")

  function bgChanger(newColor) {
    setColor(newColor)
  }

  return (
    <>
      {/*passed value of color will be applied*/}
      <div className="min-h-screen flex flex-col  justify-end   items-center pb-8 " style={{ backgroundColor: color }}>

        <div id="buttonContainer" className="bg-slate-600 rounded-2xl max-w-4xl flex flex-row items-center justify-center pl-8 pr-8 min-h-10  gap-8">

          <button onClick={() => bgChanger("white")} className="font-medium text-black bg-white cursor-pointer pl-2 pr-2 rounded-3xl">white</button>
          <button onClick={() => bgChanger("green")} className="font-medium text-white bg-green-600 cursor-pointer pl-2 pr-2 rounded-3xl">green</button>

          <button onClick={() => bgChanger("blue")} className="font-medium text-white bg-blue-700 cursor-pointer pl-2 pr-2 rounded-3xl" >blue</button>
          <button onClick={() => bgChanger("olive")} className="font-medium text-white bg-olive-600 cursor-pointer pl-2 pr-2 rounded-3xl ">olive</button>

          <button onClick={() => bgChanger("gray")} className="font-medium text-white bg-gray-700 cursor-pointer pl-2 pr-2 rounded-3xl">gray</button>
          <button onClick={() => bgChanger("yellow")} className="font-medium text-white bg-yellow-500 cursor-pointer pl-2 pr-2 rounded-3xl ">yellow</button>

          <button onClick={() => bgChanger("pink")} className="font-medium text-white bg-pink-700 cursor-pointer  pl-2 pr-2 rounded-3xl">pink</button>
          <button onClick={() => bgChanger("purple")} className="font-medium text-white bg-purple-500 cursor-pointer pl-2 pr-2 rounded-3xl">purple</button>

          <button onClick={() => bgChanger("red")} className="font-medium text-white bg-red-600 cursor-pointer  pl-2 pr-2 rounded-3xl">red</button>
          <button onClick={() => bgChanger("lavender")} className="font-medium text-black bg-violet-200 cursor-pointer  pl-2 pr-2 rounded-3xl">lavender</button>

        </div>

      </div>

    </>
  )
}

export default App
