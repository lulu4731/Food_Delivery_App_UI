import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, constants, icons, dummyData, images } from '../../constants'

const FormInput = ({ containerStyle, label, placeholder, inputStyle, prependComponent, appendComponent, containerInputStyle,
    onChange, secureTextEntry, keyboardType = "default", autoCompleteType = "off", autoCapitalize = "none", errorMsg = "" }) => {
    return (
        <View
            style={{ ...containerStyle }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    height: 55,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.lightGray2,
                    borderRadius: SIZES.radius,
                    ...containerInputStyle
                }}
            >
                {prependComponent}

                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle,
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(e) => onChange(e)}
                />

                {appendComponent}
            </View>
        </View>
    )
}

export default FormInput