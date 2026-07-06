// import { Children } from "react"

// alert("js script is enabled")

const mainContainer = document.getElementById("root")

const customImg = {
    type: "img",

    props: {
        src: "https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "demo alt msg",
        width: "600",
        height:"500"
    },

}

// figureCaption object is needed to be declared separately for including the children outside the customImg bcs img is a self closing tag
const figureCaption = {
    type: "figcaption",
    children: "this is the image caption"
}

function renderCaption(figureCaption, mainContainer) {
    const captionDom = document.createElement(figureCaption.type)
    captionDom.innerHTML = figureCaption.children
    mainContainer.appendChild(captionDom)
}

function customRender(customImg, mainContainer) {

    const domElement = document.createElement(customImg.type)

    for (const prop in customImg.props) {
        domElement.setAttribute(prop, customImg.props[prop])
    }

    mainContainer.appendChild(domElement)

}

customRender(customImg, mainContainer)
renderCaption(figureCaption, mainContainer)
