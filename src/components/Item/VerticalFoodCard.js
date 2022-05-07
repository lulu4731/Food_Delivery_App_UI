import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../../constants'

const VerticalFoodCard = ({ item, containerStyle }) => {
    return (
        <TouchableOpacity style={{
            width: 210,
            padding: SIZES.padding,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            ...containerStyle
        }}
            onPress={() => console.log(item.id)}
        >

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Image source={icons.calories} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>{item.calories} Calories</Text>
                </View>

                <Image source={icons.favourite} style={{ width: 20, height: 20, tintColor: item.isFavourite ? COLORS.primary : COLORS.gray }} />
            </View>

            <View style={{ width: 150, height: 150, alignContent: 'center', alignItems: 'center' }}>
                <Image source={item.image} style={{ width: "100%", height: "100%" }} />
            </View>

            <View style={{ alignItems: 'center', marginTop: -20, marginBottom: -20 }}>
                <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
                <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>{item.description}</Text>
                <Text style={{ ...FONTS.h2, marginTop: SIZES.base }}>${item.price}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default VerticalFoodCard