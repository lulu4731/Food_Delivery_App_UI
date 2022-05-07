import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AuthLayout from './AuthLayout'
import { SIZES, icons, COLORS, FONTS } from '../../constants'
import FormInput from './FormInput'
import utils from '../../utils/Utils'
import TextButton from '../Button/TextButton'
import TextIconButton from '../Button/TextIconButton'

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [saveMe, setSaveMe] = useState(false)
    const isEnableSignUp = () => {
        return !(email != "" && password != "" && emailError == "" && passwordError == "")
    }

    return (
        <AuthLayout
            title="Getting Started"
            subTitle="Create an account to continue"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding,
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
                <FormInput
                    label="Username"
                    autoCompleteType='email'
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={value => setUsername(value)}
                // appendComponent={
                //     <View
                //         style={{
                //             justifyContent: 'center'
                //         }}>
                //         <Image source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cross}
                //             style={{ height: 20, width: 20, tintColor: email == "" ? COLORS.gray : ((email != "" && emailError == "") ? COLORS.green : COLORS.red) }} />
                //     </View>
                // }
                />
                <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType='password'
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={value => {
                        setPassword(value)
                        utils.validatePassword(value.trim(), setPasswordError)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center', width: 40 }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image source={showPass ? icons.eye : icons.eye_close} style={{ height: 20, width: 20, tintColor: COLORS.gray }} />
                        </TouchableOpacity>
                    }
                />

                <TextButton
                    label="Sign Up"
                    disabled={isEnableSignUp()}
                    buttonContainerStyle={{
                        height: 55,
                        alignItem: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignUp() ? COLORS.transparentPrimary : COLORS.primary
                    }}
                    onPress={() => navigation.navigate("Otp")}
                />


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: SIZES.radius
                }}>
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Already have an account?</Text>

                    <TextButton
                        buttonContainerStyle={{
                            backgroundColor: null,
                            marginLeft: 5
                        }}
                        label="Sign In"
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate("SignIn")}
                    />
                </View>
            </View>
            <View style={{
                marginBottom: 30
            }}>
                <TextIconButton containerStyle={{
                    height: 50,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.blue
                }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label="Continue With Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                />
                <TextIconButton containerStyle={{
                    height: 50,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2,
                    marginTop: SIZES.radius
                }}
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: null
                    }}
                    label="Continue With Google"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                    }}
                />
            </View>
        </AuthLayout>
    )
}

export default SignUp