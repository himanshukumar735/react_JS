const mainContainer = document.querySelector('#root')

// How react see the function(jsx) we create
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click here to visit google'
}

function customRender(reactElement, mainContainer) {

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    // domElement.setAttribute('href', reactElement.props.href)

    // domElement.setAttribute('target', reactElement.props.target)

    // using for in loop for setAttribute
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    mainContainer.appendChild(domElement)

}

customRender(reactElement, mainContainer)
