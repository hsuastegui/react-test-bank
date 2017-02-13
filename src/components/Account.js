import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import 'whatwg-fetch';

class Account extends Component {
	constructor(props){
		super(props);
		this.state = {
			operations: []
		};
	}
	componentDidMount() {
		if(this.props.account.id){
			fetch('/data/transactions.json',{

		    })
		    .then(function(response){
		    	return response.json();
		    })
		    .then(function(data){
		    	this.setState({
		    		operations: data.accounts[0].operations
		    	});
		    }.bind(this));
		}else{
			browserHistory.push('/accounts');
		}
	}
	renderTransactions(){
		return this.state.operations.map((operation, index) => {
			const transactions = operation.transactions.map((transaction, index)=>{
				return(
					<div key={index} className="row transaction">
						<div className="col-xs-6 transaction_detail">{transaction.detail}</div>
						<div className="col-xs-6 transaction_amount">{transaction.amount}</div>
					</div>
				);
			});
			return(
				<div className="row operation" key={index}>
					<div className="operation_heading col-xs-12">{operation.date}</div>
					<div className="col-xs-12">
						<div className="box">
							{transactions}
						</div>
					</div>
				</div>
			);
		});
	}
	render(){
		return(
			<main className="account top">
				<div className="container">
					<h2>Which bank does this account belong to?</h2>
					<p>Track all of your payments by connecting as many bank accounts as you'd like to your Nopa <br/>account and get updates your balance instantly. Plus it's free.</p>
					<section className="summary">
						<table className="summary_table">
							<tbody>
								<tr><td>{this.props.account.bank}</td><td>Current Account</td></tr>
								<tr><td>{this.props.account.surname}</td><td><p>{this.props.account.account_number}</p><p>{this.props.account.sort_code}</p></td></tr>
							</tbody>
						</table>
					</section>
					<section className="transactions">
						<p>Your transactions for the last 30 days</p>
						<div className="transactions_table">
							{this.renderTransactions()}
						</div>
						<button className="button transactions_button">Show More</button>
					</section>
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
export default connect(mapStateToProps)(Account);