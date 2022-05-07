import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../constants'

const Rating = ({ rating, iconsStyle, activeColor = COLORS.orange, inactiveColor = COLORS.lightOrange3 }) => {
    return (
        <View style={{
            flexDirection: 'row',

        }}>
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 1 ? activeColor : inactiveColor,
                    ...styles.rateIcon,
                    ...iconsStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 2 ? activeColor : inactiveColor,
                    ...styles.rateIcon,
                    ...iconsStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 3 ? activeColor : inactiveColor,
                    ...styles.rateIcon,
                    ...iconsStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 4 ? activeColor : inactiveColor,
                    ...styles.rateIcon,
                    ...iconsStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 5 ? activeColor : inactiveColor,
                    ...styles.rateIcon,
                    ...iconsStyle
                }}
            />
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    rateIcon: {
        width: 15,
        height: 15
    }
})