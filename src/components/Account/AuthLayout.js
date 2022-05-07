import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, constants, icons, dummyData, images } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const height = Dimensions.get("window").height
const AuthLayout = ({ title, subTitle, titleContainerStyle, children }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    height: height,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={images.logo_02}
                        style={{
                            height: 100,
                            width: 200
                        }}
                        resizeMode="contain"
                    />

                </View>

                <View
                    style={{
                        marginTop: SIZES.base,
                        ...titleContainerStyle
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            ...FONTS.h2
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS.darkGray,
                            marginTop: SIZES.base,
                            ...FONTS.body3
                        }}
                    >
                        {subTitle}
                    </Text>
                </View>

                <View style={{
                    flex: 1
                }}>
                    {children}
                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}

export default AuthLayout