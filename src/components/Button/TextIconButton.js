import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants'

const TextIconButton = ({ containerStyle, label, labelStyle, icon, iconStyle, iconPosition, onPress }) => {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            ...containerStyle
        }}
            onPress={onPress}
        >
            {
                iconPosition == "LEFT" &&
                <Image source={icon} style={{ ...styles.image, ...iconStyle }} />
            }

            <Text style={{ ...FONTS.body3, ...labelStyle }}>{label}</Text>

            {
                iconPosition == "RIGHT" &&
                <Image source={icon} style={{ ...styles.image, ...iconStyle }} />
            }
        </TouchableOpacity>
    )
}

export default TextIconButton

const styles = StyleSheet.create({
    image: {
        marginLeft: 5,
        width: 20,
        height: 20,
        tintColor: COLORS.black
    }
})