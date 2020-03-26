// our first component
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    onGreet()  {
    	alert('je suis la')
	};
	render() {
		var user = {
			name: "chahrazed",
			hobbies: ["music", "dance", "zumba"]
		};
	
		return (
			<div className="container">
			    <div className="row">
			    	<div className="col-xs-10 col-xs-offset-1">
			    	    <Header/>
			    	</div>
			    </div>
			    <div className="row">
			    	<div className="col-xs-10 col-xs-offset-1">
			    	    <Home name={"Chahra"} initialAge={23} hobbies={["lecture", "movies"]} greet={this.onGreet} >
			    	    	<div>
			    	    		<h1>Test children</h1>
			    	    		Ben 3emi!!!
			    	    	</div>
			    	    </Home>
			    	</div>
			    </div>
			</div>	    
		);
	}
};
render(<App/>, window.document.getElementById("app"));