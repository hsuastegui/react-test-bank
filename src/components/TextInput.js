import React, { Component } from 'react';
import Validation from '../tools/validation';

class TextInput extends Component {
	constructor(props){
		super(props);
		this.state = {
			valid: true
		};
		this.validate = this.validate.bind(this);
	}
	validate(event){
		const valid = Validation(
			event.target.value,
			event.target.dataset.validation,
			event.target.dataset.exact
		);
		this.setState({valid});
	}
	render(){
		return(
			<div className="input_group">
				<input type="text" 
					onBlur={this.validate}
					className={"input_text " + (this.state.valid ? '':'input_text--invalid')} 
					placeholder={this.props.placeholder}
					data-validation={this.props.type} 
					data-valid={this.state.valid}
					data-id={this.props.id}
					data-exact={this.props.exact} />
				{this.state.valid ? null : <span className="input_validation">Please enter a valid {this.props.type}</span>}
			</div>
		);
	}
}

export default TextInput;