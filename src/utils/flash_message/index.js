import { showMessage } from 'react-native-flash-message'
import { Platform } from 'react-native'


const FlashMessage = (message, type = '0') => {
    showMessage({
        style: { paddingTop: Platform.OS === 'ios' ? 30 : 10 },
        statusBarHeight: Platform.OS === 'ios' ? 20 : 15,
        type: type == '0' ? 'success' : 'danger',
        titleStyle: { fontWeight: 'bold' },
        textStyle: { fontWeight: '500' },
        message: message,
        description: '',
        duration: 3000,
        icon: 'auto',
    });
}

export default FlashMessage;