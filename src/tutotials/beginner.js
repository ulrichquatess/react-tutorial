import React from 'react'
import ReactDom from 'react-dom'

//this part below is where we write our code
// to run on the browser

/** 
*Here we learn how to use variable
* and differnet constant in react
**/
let name = 'Tassa'
let obj = {
	fname: 'Ulrich',
	lname: 'Beauclair'
}

const element = <h1>Welcome {name}</h1>

ReactDom.render(
	<h1>{obj.fname},{obj.lname}</h1>,
	document.getElementById('root')
	);