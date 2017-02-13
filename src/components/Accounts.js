import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TextInput from './TextInput';
import * as accountActions from '../actions/accountActions';

class Accounts extends Component {
	constructor(props){
		super(props);
		this.state = {
			bank: '',
			connect: false,
			validInputs: [],
			suggestion: ''
		}
		this.handleBank = this.handleBank.bind(this);
		this.handleConnect = this.handleConnect.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleBank(event){
		this.setState({
			bank: event.target.alt,
			suggestion: ''
		});
	}
	handleConnect(){
		if(this.state.bank){
			this.setState({
				connect: true,
				suggestion: ''
			});
		}else{
			this.setState({
				suggestion: 'Please select a bank first'
			});
		}
	}
	handleSubmit(event){
		event.preventDefault();
		const inputs = event.target.elements;
		let valid = true;
		let account = {};
		//Validate ech input
		for (var i = 0; i < inputs.length; i++) {
			const input = inputs[i];
			if(input.type === 'text'){
				if(input.value === ''){
					valid = false;
					break;
				}else if(input.value !== '' && !input.dataset.valid){
					valid = false;
					break;
				}
				//Store input value
				account[input.dataset.id] = input.value;
			}
		}

		if(valid){
			const id = '_' + Math.random().toString(16).substr(2, 4);
			account.id = id;
			account.bank = this.state.bank;
			this.props.actions.setAccount(account);
			browserHistory.push('/account/'+id);

		}else{
			this.setState({
				suggestion: 'Please correct the errors in the form'
			});
			setTimeout(function(){
				this.setState({suggestion: ''});
			}.bind(this), 3000);
			
		}
	}
	renderBanks(){
		const banks = [
			["barclays","images/Barclays.png"],
			["natwest","images/LogoNatwest.png"],
			["lloyds","images/LogoLloyds.png"],
			["hsbc","images/LogoHSBC.png"],
			["tsb","images/LogoTSB.png"],
			["santander","images/LogoSantander.png"]
		];
		const banksImg = banks.map((bank) => {
			return(
				<div className="banks_img" key={bank[0]}>
					<div className={"banks_img_container " + (this.state.bank === bank[0] ? 'banks_img_container--active': '')}>
						<img className="banks_img_img" onClick={this.handleBank} src={bank[1]} alt={bank[0]} />
					</div>
				</div>
			);
		});
		return(
			<section className="banks">
				{banksImg}
				<button className="button banks_button" onClick={this.handleConnect}>Connect</button>
				<p className="suggestion">{this.state.suggestion}</p>
			</section>
		);
	}
	renderForm(){
		const inputs = [
			["Surname", "text", 0, "surname"],
			["Sort Code", "number", 6, "sort_code"],
			["Account Number", "number", 8, "account_number"],
			["Passcode", "number", 0, "passcode"],
			["Memorable Word", "text", 0, "memorable_word"]
		];
		const inputHtml = inputs.map((input, index) => {
			return(
				<TextInput key={index} placeholder={input[0]} type={input[1]} exact={input[2]} id={input[3]} />
			);
		});
		return(
			<section className="accounts">
				<form className="accounts_form" onSubmit={this.handleSubmit}>
					{inputHtml}
					<button className="button" type="submit">Log in & Connect</button>
					<p className="suggestion">{this.state.suggestion}</p>
				</form>
			</section>
		);
	}
	render(){
		return(
			<main className="top">
				<div className="container">
					<h2>Which bank does this account belong to?</h2>
					<p>Track all of your payments by connecting as many bank accounts as you'd like to your Nopa <br/>account and get updates your balance instantly. Plus it's free.</p>
					{(this.state.bank !== '') & (this.state.connect) ? this.renderForm() : this.renderBanks()}
				</div>
			</main>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account: state.account
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(accountActions, dispatch)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
