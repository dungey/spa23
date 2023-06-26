import "./App-FFC.css";
////////////////////////////////////////////
//       RUBRIC #6 : React Hooks
////////////////////////////////////////////
import { useState } from "react";

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
pageVisibility["Login"] = "inline-block";
pageVisibility["Fight"] = "none";
pageVisibility["Profile"] = "none";
pageVisibility["Restart"] = "none";

function show(page)   // show a view
{   var key,keyPage,i=0;
    for(key in pageVisibility)
	{
        if (key==page)
			pageVisibility[key] = "inline-block"
		else
			pageVisibility[key] = "none";
		keyPage=key+"Page";
		//console.log("testing.."+ keyPage);
		if (i<4){document.getElementById(keyPage).style.display = pageVisibility[key];}
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
		<ListItem>Fight</ListItem>
		<ListItem>Restart</ListItem>
		<ListItem>Profile</ListItem>
		 </ul>
	User:<div id="userID"></div>
}

		

////////////////////////////////////////////
//       RUBRIC #3 : Form elements with an event 
////////////////////////////////////////////



function ProfileForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("Username").innerHTML= "User: " + inputs.username;
	document.getElementById("Fav").innerHTML= "Favorite Team: " + inputs.fav;
	document.getElementById("Hate").innerHTML= "Hated: " + inputs.hate;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
      <input type="text" name="username" 
        defaultValue={inputs.username || ""} 
        onChange={handleChange}
      /><br /><br />
      </label>
      <label>Enter your favorite team:
        <input type="text" name="fav" 
          defaultValue={inputs.age || ""} 
          onChange={handleChange}
        /><br /><br />
        </label>
	  <label>Enter your hated team:
        <input type="text" name="hate" 
          defaultValue={inputs.hate || ""} 
          onChange={handleChange}
        /><br />
        </label>
        <button type="submit">Save Preferences</button>
    </form>
  )
}


/////////////////// form element //////////////////////
	
function Login(){
	const [inputs2, setInputs2] = useState({});
	const [user, setUser] = useState("Orangeman");
	const [em, setEm] = useState("");
	
  	const handleChange2 = (event) => {
    	const name = event.target.name;
    	const value = event.target.value;
    	setInputs2(values => ({...values, [name]: value}))
	}
	
	const handleSubmit2 = (event) => {
    	event.preventDefault();
    	document.getElementById("Username").innerHTML= "User: " + inputs2.username;
  	}
	
	return <><div id="LoginPage" className="LIcontainer">
	  	<h1>Login</h1>
		<form onSubmit={handleSubmit2}><br />
		  <div>Username:</div>
	      <input type="text" id="username" name="username" defaultValue="Orangemen" onChange={handleChange2}/><br /><br />
		  <div>email address:</div>
		  <input type="text" id="email" name="email" defaultValue="david@email.com" onChange={handleChange2}/><br /><br />
		  <button type="submit" value="Log In" onSubmit={handleSubmit2}>Log In</button>
	  </form><br /><br />
		<div className="description">Welcome to Football Fight Club, where you<br />can talk trash live on video with<br />your “friends” and bet on live games. </div>
		<div id="toolBar"><h4>Tool Bar</h4></div>
	</div></>
}
		
function Home(){
////////////////////////////////////////////
//       RUBRIC #2 : JSX syntax
////////////////////////////////////////////
	return <><div id="FightPage" className="LIcontainer">
	  	<div id="PageTitle">Fight Page!</div>
		<div id="currGame"><h6>Current Game<br />
		NY Giants vs Philadelphia Eagles</h6></div>
		<div id="yourvideo" className="videoBox">
			<h5>Start Your Video<br />
			<img src={image3} width="125px" height="125px" alt=""/></h5>
		</div>
	    <div id="theField">
			<img src={image4} width="100%" height="100%" alt=""/>
		</div>
		<div id="currentPlayer"></div>
		<div id="hatervideo" className="videoBox">
			<h5>Start Hater Video<br />
			<img src={image3} width="125px" height="125px" alt=""/></h5>
		</div>
		<div id="toolBar"><h4>Tool Bar</h4></div>
	</div></>
}
		
function Athlete(){
////////////////////////////////////////////
//       RUBRIC #7 : Route
////////////////////////////////////////////
	return (
		<div id="AthletePage" className="LIcontainer">
	  	<h1>Athlete Stats</h1>
		<div id="Athletestats" className="videoBox">
			<h4>Athlete statistics:</h4>
			<img src={image3} width="125px" height="125px" alt=""/>
		</div>
		<div id="toolBar"><h4>Tool Bar</h4></div>
	</div>
	);
}

////////////////////////////////////////////
//  RUBRIC #5 : Module ... Restart from mymodule.js
////////////////////////////////////////////
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

		<Restart />
		</>
	);
}



export function MyApp()
{
	return <><div id="Username" className="banner0">User: </div><div id="Fav" className="banner1"></div><div id="Hate" className="banner2"></div><br /><Board /> </> 
}
