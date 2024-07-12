import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native"
import { COMPONENT_STRING, ERROR_MESSAGE, REGEX, ROUTES } from "../constants";
import { personalInfoStyle } from "../styles/screens/PersonalInfoStyle";
import CountrySelector from "../components/custom/CountrySelector"
import { addUser, updateUser } from "../redux/actions/Action";
import AppTextInput from "../components/common/AppTextInput";
import AppButton from "../components/common/AppButton";
import { useEffect, useRef, useState } from "react";
import { showErrorMessage } from "../utils";
import { useDispatch } from "react-redux";


export default function PersonalInfo({ navigation, route }) {
    //---------- SET STATES START ----------//
    const user = route.params?.user || undefined
    const [isCountryModalVisible, setCountryModalVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('India');
    const [mobileNumber, setMobileNumber] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const addressRef = useRef(null)
    const mobileRef = useRef(null)
    const emailRef = useRef(null)
    const dispatch = useDispatch()
    //---------- SET STATES END ----------//


    //---------- USE EFFECT START ----------//
    useEffect(() => {
        if (user != undefined) {
            setSelectedCountry(user.selectedCountry)
            setMobileNumber(user.mobileNumber)
            setAddress(user.address)
            setEmail(user.email)
            setName(user.name)
        }
    }, [user]);
    //---------- USE EFFECT END ----------//


    //---------- CUSTOM FUNCTIONS START ----------//
    //For close the country modal
    const onRequestClose = () => {
        setCountryModalVisible(!isCountryModalVisible)
    }

    //For country selection
    const onSelectCountry = (country) => {
        setSelectedCountry(country)
        onRequestClose()
    }

    //For submit and update button
    const onSubmitPress = () => {
        if (name.trim().length == 0) {
            showErrorMessage(ERROR_MESSAGE.blankName)
        } else if (mobileNumber.trim().length == 0) {
            showErrorMessage(ERROR_MESSAGE.blankMobile)
        } else if (!mobileNumber.match(REGEX.mobileRegex)) {
            showErrorMessage(ERROR_MESSAGE.invalidMobile)
        }
        else if (email.trim().length == 0) {
            showErrorMessage(ERROR_MESSAGE.blankEmail)
        }
        else if (!email.match(REGEX.emailRegex)) {
            showErrorMessage(ERROR_MESSAGE.invalidEmail)
        } else if (address.trim().length == 0) {
            showErrorMessage(ERROR_MESSAGE.blankAddress)
        } else {
            if (user == undefined) {
                const user = {
                    id: Date.now().toString(), name, mobileNumber,
                    email, address, selectedCountry
                }
                dispatch(addUser(user))
            } else {
                const updatedUser = {
                    ...user, name, mobileNumber,
                    email, address, selectedCountry
                }
                dispatch(updateUser(updatedUser))
            }
            navigation.navigate(ROUTES.INFO_DETAIL)
            setName('')
            setMobileNumber('')
            setEmail('')
            setAddress('')
        }
    }
    //---------- CUSTOM FUNCTIONS END ----------//

    return (
        <View key={'MainContainer'} style={personalInfoStyle.container}>
            <KeyboardAvoidingView key={'Keyboard'} behavior={Platform.OS == 'ios' ? 'padding' : null} style={{ flex: 1 }}>
                <ScrollView key={'Scroll'} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                    <Text key={'PersonalInfo'} style={personalInfoStyle.personalInfoStyle}>{COMPONENT_STRING.PersonalInfo}</Text>

                    <Text key={'Name'} style={personalInfoStyle.headingText}>{COMPONENT_STRING.Name}</Text>
                    <AppTextInput
                        placeholder={COMPONENT_STRING.DummyName}
                        onChangeText={(text) => setName(text)}
                        autoCapitalize="words"
                        value={name}
                        blurOnSubmit={false}
                        onSubmitEditing={() => mobileRef.current.focus()}
                        maxLength={30}
                    />

                    <Text key={'MobileNumber'} style={personalInfoStyle.headingText}>{COMPONENT_STRING.MobileNumber}</Text>
                    <AppTextInput
                        placeholder={COMPONENT_STRING.DummyMobile}
                        onChangeText={(text) => setMobileNumber(text)}
                        value={mobileNumber}
                        keyboardType="phone-pad"
                        reference={mobileRef}
                        blurOnSubmit={false}
                        onSubmitEditing={() => emailRef.current.focus()}
                        maxLength={13}
                    />

                    <Text key={'Email'} style={personalInfoStyle.headingText}>{COMPONENT_STRING.EmailAddress}</Text>
                    <AppTextInput
                        placeholder={COMPONENT_STRING.DummyEmail}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                        value={email}
                        reference={emailRef}
                        blurOnSubmit={false}
                        onSubmitEditing={() => addressRef.current.focus()}
                        maxLength={50}
                    />

                    <Text key={'AddressInfo'} style={[personalInfoStyle.personalInfoStyle, { marginTop: 15, marginBottom: 8 }]}>{COMPONENT_STRING.AddressInfo}</Text>

                    <Text key={'Address'} style={personalInfoStyle.headingText}>{COMPONENT_STRING.Address}</Text>
                    <AppTextInput
                        placeholder={COMPONENT_STRING.DummyAddress}
                        onChangeText={(text) => setAddress(text)}
                        value={address}
                        reference={addressRef}
                        returnKeyType={'done'}
                        returnKeyLabel={'done'}
                        maxLength={120}
                        onSubmitEditing={() => onSubmitPress()}
                    />

                    <Text key={'Country'} style={personalInfoStyle.headingText}>{COMPONENT_STRING.Country}</Text>
                    <CountrySelector
                        selectedCountry={selectedCountry}
                        isCountryModalVisible={isCountryModalVisible}
                        onRequestClose={onRequestClose}
                        onSelectCountry={onSelectCountry} />
                </ScrollView>
                <AppButton
                    title={user != undefined ? 'Update' : 'Submit'}
                    onPress={onSubmitPress}
                />
            </KeyboardAvoidingView>
        </View>
    )
}