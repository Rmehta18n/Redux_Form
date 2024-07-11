import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { countrySelectorStyle } from '../../styles/custom_component/CountrySelectorStyle';
import { COMPONENT_STRING } from '../../constants';

const countries = [
    'India', 'USA', 'Canada', 'Australia', 'Germany',
    'France', 'Japan', 'China', 'Brazil', 'South Africa'
];

const CountrySelector = (props) => {

    return (
        <View key={'MainContainer'} style={countrySelectorStyle.container}>
            <TouchableOpacity key={'CountryContainer'} onPress={props.onRequestClose} style={countrySelectorStyle.countryButton}>
                <Text style={countrySelectorStyle.countryText}>{props.selectedCountry}</Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={props.isCountryModalVisible}
                onRequestClose={props.onRequestClose}
                key={'Modal'}
            >
                <View key={'ModalContainer'} style={countrySelectorStyle.modalContainer}>
                    <View key={'CountryContent'} style={countrySelectorStyle.modalContent}>
                        <FlatList
                            data={countries}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => props.onSelectCountry(item)} style={countrySelectorStyle.countryItem}>
                                    <Text style={countrySelectorStyle.countryItemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity key={'CloseContainer'} onPress={props.onRequestClose} style={countrySelectorStyle.closeButton}>
                            <Text style={countrySelectorStyle.closeButtonText}>{COMPONENT_STRING.Close}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


export default CountrySelector;
