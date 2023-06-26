export const answer = 12;

export  const foo = () => console.log('testing..');

export const Restart = function (){
	
	return <><div id="RestartPage" className="LIcontainer">
	  	<h1>Stats</h1>
	<p>Player '#{answer}'</p>
	<p>API call {foo()}</p>
	</div></>
}