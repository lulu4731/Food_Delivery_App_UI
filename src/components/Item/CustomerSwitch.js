import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const CustomerSwitch = ({ value, setSaveMe }) => {
    return (
        <TouchableOpacity
            onPress={() => setSaveMe(!value)}
        >
            <View style={{ flexDirection: 'row' }}>
                <View
                    style={value ? styles.switchOnContainer : styles.switchOffContainer}
                >
                    <View style={{
                        ...styles.dot,
                        backgroundColor: value ? COLORS.white : COLORS.gray
                    }}>
                    </View>
                </View>

                <Text style={{
                    color: value ? COLORS.primary : COLORS.gray,
                    marginLeft: SIZES.base,
                    ...FONTS.body4
                }}>
                    Save Me
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomerSwitch

const styles = StyleSheet.create({
    switchOnContainer: {
        width: 40,
        height: 20,
        paddingLeft: 24,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10,
        backgroundColor: COLORS.primary
    },
    switchOffContainer: {
        width: 40,
        height: 20,
        paddingLeft: 4,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 10
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6
    }
})