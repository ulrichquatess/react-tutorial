import React from 'react'
import ReactDom from 'react-dom'

//this part below is where we write our code
// to run on the browser

/** 
* Program to display the Present time
**/

// The setInterval function is used to give an interval of an Object

setInterval(function(){
	ReactDom.render(
	  <h2>Time now: {new Date().toLocaleTimeString()}</h2>,
		document.getElementById('root')
	);
},1000);