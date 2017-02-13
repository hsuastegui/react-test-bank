export const setAccount = (account) => {
    return { 
        type: 'SET_ACCOUNT',
        payload: account
    }
};

export const clearAccount = () => {
	return {
		type: 'CLEAR_ACCOUNT',
        payload: {}
	}
}