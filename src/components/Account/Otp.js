import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthLayout from './AuthLayout'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { SIZES, icons, COLORS, FONTS } from '../../constants'
import TextButton from '../Button/TextButton'

const Otp = ({ navigation }) => {
    const [timer, setTimer] = useState(60)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer > 0 ? timer - 1 : timer)
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])
    return (
        <AuthLayout
            title="OTP Authentication"
            subTitle="An authentication code has been sent to gmail"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >

                <OTPInputView
                    style={{
                        width: "100%",
                        height: 50
                    }}
                    pinCount={4}
                    codeInputFieldStyle={{
                        width: 65,
                        height: 65,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => console.log(code)}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Didn't receive code?</Text>
                    <TextButton
                        label={`Resend (${timer})`}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary
                        }}
                        onPress={() => setTimer(60)}
                    >

                    </TextButton>
                </View>
            </View>

            <View style={{
                marginBottom: 20
            }}>
                <TextButton
                    label="Continue"
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => console.log("Continue")}
                />

                <View
                    style={{
                        marginTop: SIZES.padding,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
                        By sign in up, you agree to our.
                    </Text>

                    <TextButton
                        label="Terms and Condition"
                        labelStyle={{
                            color: COLORS.primary
                        }}
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                    />
                </View>
            </View>
        </AuthLayout>
    )
}

export default Otp