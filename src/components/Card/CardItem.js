import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../constants'

const CardItem = ({ item, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 100,
                alignItems: 'center',
                marginTop: SIZES.radius,
                borderWidth: 2,
                paddingHorizontal: SIZES.padding,
                borderColor: isSelected ? COLORS.primary : COLORS.gray3,
                borderRadius: SIZES.radius
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width: 60,
                    height: 40,
                    borderWidth: 2,
                    borderColor: COLORS.gray3,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.radius,
                }}
            >
                <Image
                    source={item.icon}
                    style={{
                        height: 35,
                        width: 35
                    }}
                    resizeMode="center"
                />
            </View>
            <Text
                style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    ...FONTS.h3
                }}
            >{item.name}</Text>

            <Image
                source={isSelected ? icons.check_on : icons.check_off}
                style={{
                    width: 25,
                    height: 25
                }}
            />
        </TouchableOpacity>
    )
}

export default CardItem