import FlashMessage from "./flash_message"

export const showSuccessMessage = (message) => FlashMessage(message, '0')

export const showErrorMessage = (message) => FlashMessage(message, '1')