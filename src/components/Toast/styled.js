import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const StyledToast = styled(ToastContainer)`
	.Toastify__toast-icon {
		display: none;
	}
	.Toastify__toast-theme--colored {
		color: #000;
	}
	.Toastify__toast-theme--colored.Toastify__toast--success {
		background-color: #bcf39a;
		border-left: 20px solid #8bc766;
	}
	.Toastify__toast-theme--colored.Toastify__toast--error {
		background-color: #f47d7d;
		border-left: 20px solid #e05a5a;
	}
	.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success {
		background-color: #8bc766;
	}
	.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
		background-color: #e05a5a;
	}
`
