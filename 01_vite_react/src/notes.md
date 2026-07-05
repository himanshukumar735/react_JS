Difference between React and React-DOM

React is like a language (lets say programming language) like JS. Just like our JS can work independently without knowing what even web browser means as JS is not build solely to serve the web browser.

Similarly, React is like a language. It is used to manage code, functions, logic and can work independently without even knowing what web browser or web page is. 

Now, to show the logic or UI written with react. We need a connection between the react logic or function and web browser.
To do this, we use the library provided by react itself called React-dom. This build the connection between the react components or logic and the webpage or web browser.

React-dom creates its own virtual dom independent from the og browser dom.

similarly, for mobile apps we use react-native instead of react-dom


Notes from lecture 3 (file structure)

When we build our web app with the help of react or react DOM. we generally build the single page application, means there is only one html file (index.html). and this is the file which is manipulated by the help of react or react DOM. And, thus is callled SPA (Single Page Application).

Doesnt matter either it is contact page, home page, career page or service page. we mainly edit the same index.html file. To the end user, the page looks containing multiple web pages but behind the scene. It is the same single index.html page, which is being manipulated to show different elements on the screen.

<noscript> is used to inform the user via the web screen if any script is not added to render content on the web page.

<noscript> You need to enable JavaScript to run this app. </noscript>

// Always write the function name with the first letter of the function name capital when making component or working with jsx in vite although the file name can start with small letter but keep that also capital to follow best practice and, put the extension name as jsx when working with vite.

To return multiple tag in a component. close them in a tag <>  </> called fragements as jsx accept one tag only at a time

