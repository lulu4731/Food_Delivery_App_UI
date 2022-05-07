import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, dummyData } from '../../constants'

const Header = ({ containerStyle, title, onPress }) => {
    return (
        <View style={{ flexDirection: 'row', ...containerStyle }}>
            <TouchableOpacity style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: COLORS.gray2,
                borderRadius: SIZES.radius
            }}
                onPress={onPress}
            >
                <Image source={icons.menu} />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ ...FONTS.h3 }}>{title}</Text>
            </View>
            <TouchableOpacity style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius
            }}>
                <Image source={dummyData?.myProfile?.profile_image} style={{ width: 40, height: 40, borderRadius: SIZES.radius }} />
            </TouchableOpacity>
        </View>
    )
}

export default Header