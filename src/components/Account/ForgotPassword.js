import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import TextButton from '../Button/TextButton'
import AuthLayout from './AuthLayout'
import { SIZES, icons, COLORS, FONTS } from '../../constants'
import FormInput from './FormInput'

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const isEnableSign = () => {
        return !(email != "" && emailError == "")
    }

    return (
        <AuthLayout
            title="Password Recovery"
            subTitle="Please enter your email address to recover your password"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2,
                }}>
                <FormInput
                    label="Email"
                    autoCompleteType='email'
                    onChange={(value) => {
                        setEmail(value)
                        utils.validateEmail(value.trim(), setEmailError)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}>
                            <Image source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cross}
                                style={{ height: 20, width: 20, tintColor: email == "" ? COLORS.gray : ((email != "" && emailError == "") ? COLORS.green : COLORS.red) }} />
                        </View>
                    }
                />

                <TextButton
                    label="Send Email"
                    buttonContainerStyle={{
                        height: 55,
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius
                    }}
                    onPress={() => navigation.goBack()}
                />
            </View>
        </AuthLayout>
    )
}

export default ForgotPassword