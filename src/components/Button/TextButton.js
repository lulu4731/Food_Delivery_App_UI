import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants'


const TextButton = ({ label, labelStyle, buttonContainerStyle, onPress, icon, iconStyle, disabled, label2, label2Style }) => {
    return (
        <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            flexDirection: 'row',
            ...buttonContainerStyle,
        }}
            onPress={onPress}
            disabled={disabled}
        >

            <Text style={{
                color: COLORS.white,
                ...FONTS.h3,
                ...labelStyle,
            }}>{label}</Text>

            {
                icon && <Image source={icon} style={{
                    marginLeft: 5,
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black,
                    ...iconStyle
                }} />
            }


            {
                label2 &&
                <Text
                    style={{
                        flex: 1,
                        textAlign: 'right',
                        color: COLORS.white,
                        ...FONTS.h3,
                        ...label2Style
                    }}
                >
                    {label2}
                </Text>
            }
        </TouchableOpacity>
    )
}

export default TextButton