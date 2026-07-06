
import Chai from "./Chai"

function App() {

  const userName = "iamhimanshukr"

  return (

    // to return multiple tags, wrap those in a tag bcs jsx accepts one tag only at a time

    <>

      <Chai />

      <h1>Chai aur React with Vite | {userName}</h1>

      <p>Test para</p>

    </>

  )

}

export default App
