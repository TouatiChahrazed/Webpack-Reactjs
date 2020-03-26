import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor (props) {
        super();
    	this.state = {
    		age: props.initialAge
        };
    }
    onClickTest () {
    	this.setState({
    		age: this.state.age + 3
    	});
    }
    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>name: {this.props.name} </p>
                <h2>Hobbies</h2>
                <p>
                	{this.props.hobbies.map((hobby, i) => <li key={i} >{hobby}</li>) }
                </p>
                <hr/>
                {this.props.children}
                <hr/>
                <button onClick={this.onClickTest.bind(this)} className="btn btn-primary">Test d'événement</button>
                <h3> {this.state.age} </h3>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Accès au parent</button>
            </div>
        );
    }
}

Home.propTypes = {
	name: PropTypes.string,
	hobbies: PropTypes.array,
	initialAge: PropTypes.number,
	children: PropTypes.element.isRequired,
	greet: PropTypes.func
};
