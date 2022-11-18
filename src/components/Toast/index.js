import React from 'react'
import * as C from './styled.js'

function Toast() {
	return (
		<C.StyledToast
			autoClose={5000}
			newestOnTop={true}
			closeOnClick
			theme='colored'
		/>
	)
}

export default Toast
