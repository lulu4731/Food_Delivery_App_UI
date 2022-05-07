import { View, Text, Image } from 'react-native'
import React from 'react'
import { FONTS, SIZES, COLORS } from '../../constants'

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
    return (
        <View style={{
            paddingVertical: SIZES.base,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            ...containerStyle,
            flexDirection: 'row'
        }}
        >
            {
                icon && <Image source={icon} style={{
                    width: 20,
                    height: 20,
                    ...iconStyle
                }} />
            }

            <Text style={{
                color: COLORS.white,
                marginLeft: SIZES.base,
                ...FONTS.body3,
                ...labelStyle,
            }}>{label}</Text>
        </View>
    )
}

export default IconLabel