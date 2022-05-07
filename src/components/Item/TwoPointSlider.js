import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../../constants'

const TwoPointSlider = ({ values, onValuesChange, postfix, min, max, prefix }) => {
    return (
        <MultiSlider
            values={values}
            sliderLength={SIZES.width - (SIZES.padding * 2) - 40}
            min={min}
            max={max}
            step={1}
            markerOffsetY={20}
            selectedStyle={{
                backgroundColor: COLORS.primary
            }}
            trackStyle={{
                height: 10,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray2
            }}
            minMarkerOverlapDistance={50}
            customMarker={(e) => {
                return (
                    <View style={{
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            height: 25,
                            width: 25,
                            borderRadius: 15,
                            borderWidth: 4,
                            borderColor: COLORS.white,
                            backgroundColor: COLORS.primary,
                            ...styles.shadow
                        }} />


                        <Text style={{ marginTop: 8, color: COLORS.darkGray, ...FONTS.body3, marginLeft: 20, width: 45 }}>
                            {prefix}{e.currentValue} {postfix}
                        </Text>

                    </View>
                )
            }}
            onValuesChange={onValuesChange}
        />
    )
}

export default TwoPointSlider

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 1,
        shadowOpacity: 0.1
    }
})