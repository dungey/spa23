import "./App-FFC.css";
////////////////////////////////////////////
//       RUBRIC #6 : React Hooks
////////////////////////////////////////////
import { useState } from "react";

import {Routes, Route, Link, useParams } from "react-router-dom";

////////////////////////////////////////////
//       RUBRIC #5 : Module
////////////////////////////////////////////
import { foo, answer, Restart } from "./mymodule.js";

import image1 from './FFC-bkg.png';
import image2 from './FFC-title.png';
import image3 from './play-button-symbols.gif';
import image4 from './FFC-field.png';

const pageVisibility = [];

////////////////////////////////////////////
//     RUBRIC #1 : An Array
///////////////////////////////////////////
pageVisibility["Login"] = "none";
pageVisibility["Home"] = "block";
pageVisibility["Profile"] = "none";
pageVisibility["Restart"] = "none";

function show(page)   // show a view
{   var key,keyPage,i=0;
    //console.log("test: page=" + page + " : vis="+pageVisibility[page]);
 	for(key in pageVisibility)
	{
        if (key==page)
			pageVisibility[key] = "block"
		else
			pageVisibility[key] = "none";
		keyPage=key+"Page";
		//console.log("testing.."+ keyPage);
		//console.log("keyPage("+ keyPage + ") vis: -" + document.getElementById(keyPage).style.display+"-");
		if (i<4){document.getElementById(keyPage).style.display = pageVisibility[key];}
		//console.log("show/hide: key=" + key + " pv[key]="+pageVisibility[key]);
		i++;
	}

}

////////////////////////////////////////////
//       RUBRIC #4 : React Components
////////////////////////////////////////////
function FFC()
{
return <>Football Fight Club</>
}

function Profile()
{
	return 	<><div id="ProfilePage" className="LIcontainer">
	  		<h1>Profile Page</h1>
			<ProfileForm />
		   	//<button className='FFC-button' onClick={ ()=>alert('Hi David')} >Save</button>
			</div></>
}

function ListItem(props)
{
	const speak= (e) =>  {show(e.target.id);}
	return <li><div onClick={speak} id={props.children}>{props.children}</div></li>
}

function TopMenu(props) {

	return <ul>
		<ListItem>Login</ListItem>
		<ListItem>Home</ListItem>
		<ListItem>Restart</ListItem>
		<ListItem>Profile</ListItem>
		 </ul>
}

		
function FormSubmit(props)
{
	const subHandler= (e) =>  {alert('Your Saving Prefs: ' + e.target.id);e.preventDefault();}
	return <button onClick={subHandler} name={props.children}>Save Preferences</button>
}

////////////////////////////////////////////
//       RUBRIC #3 : Form elements with an event 
////////////////////////////////////////////
function FormItems(props)
{
	const [theName, setName] = useState('');
	
	return (
	    <>{props.children} <input type='text' id={props.children} name={props.children} value ={theName} 
		onChange={(e) => setName(e.target.value)} />
		</>
		);
	//return <input type="text" id={props.children} name={props.children} value={props.children} />
}
function ProfileForm(){

	return <>
		<FormItems>Username</FormItems><br />
		<FormItems>Favorite</FormItems><br />
		<FormItems>Hated</FormItems><br />
		<FormSubmit>Submit</FormSubmit><br />
		</>
}
/////////////////// form element //////////////////////
	
function Login(){

	return <><div id="LoginPage" className="LIcontainer">
	  	<h1>Login</h1>
		<form action="/action_page.php"><br />
		  <div>Username:</div>
	      <input type="text" id="username" name="username" value="Orangeman" /><br /><br />
		  <div>email address:</div>
		  <input type="text" id="email" name="email" value="" /><br /><br />
		  <input type="submit" value="Log In" />
	  </form><br /><br />
		Welcome to Football Fight Club, where you<br />can talk trash live on video with<br />your “friends” and bet on live games. 

	</div></>
}
		
function Home(){
////////////////////////////////////////////
//       RUBRIC #2 : JSX syntax
////////////////////////////////////////////
	return <><div id="HomePage" className="LIcontainer">
	  	<h1>Fight Page!</h1>
		<div id="currGame"><h2>Current Game</h2></div>
		<div id="yourvideo" className="videoBox">
			<h4>Start Your Video</h4>
			<img src={image3} width="125px" height="125px" alt=""/>
		</div>
	    <div id="theField">
			<img src={image4} width="100%" height="100%" alt=""/>
		</div>
		<div id="currentPlayer"></div>
		<div id="hatervideo" className="videoBox">
			<h4>Start Hater Video</h4>
			<img src={image3} width="125px" height="125px" alt=""/>
		</div>
		<div id="toolBar"><h2>Tool Bar</h2></div>
	</div></>
}
		
function Athlete(){
////////////////////////////////////////////
//       RUBRIC #7 : Route
////////////////////////////////////////////
	return (
		<div id="Athlete" className="LIcontainer">
	  	<h1>Athlete Stats</h1>
		<div id="Athletestats" className="videoBox">
			<h4>Athlete statistics:</h4>
			<img src={image3} width="125px" height="125px" alt=""/>
		</div>
		<div id="toolBar"><h2>Tool Bar</h2></div>
	</div>
	);
}

	
function Board()
{
	return(
		<><div id="bkg"><img src={image1} width="100%" height="auto" alt=""/></div>
  		<div id="header">
      	<TopMenu />
		<div id="title"><img src={image2} width="65%" height="65%" alt=""/></div>
  		</div>
		<Login />
		<Profile />
		<Home />
////////////////////////////////////////////
//  RUBRIC #5 : Module ... Restart from mymodule.js
////////////////////////////////////////////
		<Restart />
		</>
	);
}



export function MyApp()
{
		return <>
			Football Fight Club<br /> 
				<Routes>
			<Route path="/" element={<Board />} />
			<Route path="/athlete" element={<Athlete />} />

		</Routes>
				
		</> 
}




