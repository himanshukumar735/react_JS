import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
// import PracticeApp from '../Practice_question/PracticeApp.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
//     // <PracticeApp />
// )


// Code lesson from lecture 04 (Create your own react library and JSX)
// Since, App is a function as we can see in the App.jsx file. so creating a function in this file

function MyApp() {
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = " chai_aur_react"

const ReactElement = React.createElement(       // createElement expect two parameter, the first one is tag like h1, p and the second parameter expected is object
    'a',
    {href:'https://google.com', target : '_blank'},     // writing the code in a way the ReactDOM.render() expect
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp/>        // Syntax of jsx
    // MyApp()           // This too will work bcs we know that MyApp is a function. Although this approach can work but isnt advised 
    // <ReactElement />       // Object is not executed this way
    // ReactElement        // Wont work bcs in earlier (02_customReact), we also wrote the code for custom render
    // anotherElement          // this will work bcs render() converts the anotherElement into object or in short this is the correct way to render on the screen
    ReactElement
    // <App/>
)
