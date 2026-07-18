import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}[]?><,"

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {

    //optimisation code for the clipboard
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101) // bcs max is set to 100

    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numAllowed, passwordGenerator])

  return (
    <>
      <div className='flex items-center justify-center'>

        <div className='bg-gray-800 rounded-2xl min-h-36 mt-16 w-2xl'>

          <h1 className='text-white text-center font-semibold text-2xl py-4'> Password Generator</h1>

          <div id='inputField' className='flex items-center justify-center text-orange-500 text-base' >

            <input type="text" value={password} readOnly className='bg-gray-200 rounded-l-xl min-h-10 w-2xs 
            font-medium pl-4' ref={passwordRef} />
            <button className='text-white  bg-blue-800 h-10 px-4 rounded-r-xl flex items-center justify-center 
            font-normal text-xl cursor-pointer'
              onClick={() => { alert("Password copied to clipboard"), copyPasswordToClipboard }} >copy</button>

          </div>

          <div className='flex items-center justify-center my-6'>

            <input className='cursor-pointer' type="range" min={6} max={100} value={length}
              onChange={(e) => { setLength(e.target.value) }} />
            <label className='text-orange-500 text-xl pl-2 pr-4 ' > {length}</label>

            <input className='pt-2' type="checkbox" defaultChecked={numAllowed} onChange={
              () => { setNumAllowed((prev) => !prev) }
            } />
            <label className='text-orange-500 text-xl pr-4'
            >Numbers</label>

            <input type="checkbox" defaultChecked={charAllowed}
              onChange={
                () => { setCharAllowed((prev) => !prev) }
              } />
            <label className='text-orange-500 text-xl pr-2'>Characters</label>

          </div>

        </div>

      </div >

    </>
  )
}
export default App
