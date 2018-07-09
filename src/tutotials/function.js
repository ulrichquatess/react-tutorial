import React from 'react'
import ReactDom from 'react-dom'

//this part below is where we write our code
// to run on the browser

/** 
*Here we learn how to 
* Build Functions Used in React
**/
 function cartoon(name, show){
 	return <h1>Cartoon name is {name} and it show is {show}</h1>
 }

ReactDom.render(
	cartoon('Quatess', 'Quatess Studio'),
	document.getElementById('root')
	);