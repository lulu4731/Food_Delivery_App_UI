import { View, Text, Image, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import TextButton from '../Button/TextButton'

const FoodSuccess = ({ navigation }) => {

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })

        return () => backHandler.remove()
    }, [])

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.white
        }}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.success}
                    resizeMode='contain'
                    style={{
                        width: 150,
                        height: 150
                    }}
                />

                <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>Congratulation!</Text>
                <Text style={{ marginTop: SIZES.base, ...FONTS.body3, color: COLORS.darkGray }}>Payment was successfully made!</Text>
            </View>
            <TextButton
                buttonContainerStyle={{
                    height: 55,
                    marginBottom: SIZES.padding,
                    borderRadius: SIZES.radius
                }}
                label="Done"
                onPress={() => { navigation.navigate("DeliveryStatus") }}
            />
        </View>
    )
}

export default FoodSuccess