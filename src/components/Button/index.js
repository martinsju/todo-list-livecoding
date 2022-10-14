import React from 'react'
import * as C from './styled.js'

function Button({ children, addListItem }) {
	return <C.Button onClick={() => addListItem()}>{children}</C.Button>
}

export default Button
