onClick={() => bgChanger("blue")}
This syntax means that call the bgChanger function only when the button is clicked and pass the given argument. also onclick expects a function thatswhy we used annonymous arrow function
 
style={{ backgroundColor: color }} is the syntax and to give the value of the color, we dont have to use the ${} bcs
we have already used the dobule curly braces. Also this syntax is used as inline css in jsx.

const [color, setColor] = useState("white")
This syntax means that useState return two entity , the first one is the parameter passed which is "white" here
and the second one is functionToUpdateValue

inshort
[currentValue, functionToUpdateValue]

This is not any new concept of react, it is a concept of JS or Array destructuring, we could also get the result like this

const result = useState("white")
const color = result[0]
const setcolor = result[1]

