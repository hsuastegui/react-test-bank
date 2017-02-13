const validation = (value, type, exact) => {
	let valid = true;

	switch(type){
		case 'text':
			if(!/^[a-zA-Z]{3,}$/.test(value)){
				valid = false;
			}
			break;
		case 'number':
			let regex = /^[\d]{3,}$/;
			if(exact > 0){
				regex = new RegExp('^[\\d]{'+exact+'}$');
			}
			if(!regex.test(value)){
				valid = false;
			}
			break;
		default:
			valid = false;
	}

	return valid;
} 
export default validation;