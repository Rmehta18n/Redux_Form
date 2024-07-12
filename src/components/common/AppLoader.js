import { View, ImageBackground, Modal, StyleSheet, ActivityIndicator } from 'react-native'
import { appLoaderStyle } from '../../styles/common_component/AppLoaderStyle';
import { COLORS } from '../../constants';
import { _scale } from '../../utils';

export default function AppLoader(props) {
    return (
        <View >
            <Modal
                animationType='fade'
                visible={true}
                transparent={true}>
                <ImageBackground blurRadius={90} style={appLoaderStyle.modalView}>
                    <View style={appLoaderStyle.gifContainer}>
                        <ActivityIndicator size={'large'} color={COLORS.lightBlue} />
                    </View>
                </ImageBackground>
            </Modal>
        </View>
    )
}

