import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FONTS, SIZES, COLORS, icons } from '../../constants'

const CartQuantityButton = ({ containerStyle, iconStyle, quantity, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightOrange2,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image source={icons.cart} style={{ width: 20, height: 20, tintColor: COLORS.black, ...iconStyle }} />

            <View
                style={{
                    position: 'absolute',
                    backgroundColor: COLORS.primary,
                    width: 15,
                    height: 15,
                    borderRadius: SIZES.radius,
                    top: 5,
                    right: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.body5,
                        fontSize: 10,
                        marginTop: -3
                    }}>
                    {quantity}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CartQuantityButton