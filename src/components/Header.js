import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import * as accountActions from '../actions/accountActions';

const Header = (props) => {
	const handleButton = () => {
		if(props.account.id){
			props.actions.clearAccount();
		}
		browserHistory.push('/accounts');
	};
	return(
		<header>
			<Link to="/"><img src="/images/Logo_Nopa.svg" alt="Nopa" className="logo" /></Link>
        	<button className="button header_button" onClick={handleButton}>
        		{ props.account.id ? 'Log Out' : 'Log In' }
        	</button> 
        </header>
	);
};

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
export default connect(mapStateToProps, mapDispatchToProps)(Header);
