import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import FoodHeader from '../Food/FoodHeader'
import IconButton from '../Button/IconButton'
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CardItem from './CardItem'
import FormInput from '../Account/FormInput'
import FooterTotal from '../Food/FooterTotal'

const Checkout = ({ navigation, route }) => {
    const [selectedCard, setSelectedCard] = useState(route.params.selectedCard)

    // useEffect(() => {
    //     setSelectedCard(route.params.selectedCard)
    // }, [])

    const renderHeader = () => {
        return (
            <FoodHeader
                title="CHECK OUT"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: SIZES.padding
                }}
                leftComponent={
                    <IconButton
                        containerStyle={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2
                        }}
                        icon={icons.back}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
            />
        )
    }
    const renderMyCard = () => {
        return (
            <View>
                {
                    selectedCard && dummyData.myCards.map((item, index) => {
                        return (
                            <CardItem
                                key={index}
                                item={item}
                                isSelected={selectedCard.id == item.id}
                                onPress={() => {
                                    setSelectedCard(item)
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }
    const renderDeliveryAdd = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        paddingVertical: SIZES.radius,
                        borderWidth: 2,
                        borderColor: COLORS.lightGray2,
                        borderRadius: SIZES.radius
                    }}
                >
                    <Image
                        source={icons.location1}
                        style={{
                            width: 40,
                            height: 40
                        }}

                    />
                    <Text
                        style={{
                            marginLeft: SIZES.radius,
                            width: "85%",
                            ...FONTS.body3
                        }}
                    >97 Man Thiện, Phường Hiệp Phú, Q9, TP. Thủ Đức, TP.HCM</Text>
                </View>
            </View>
        )
    }
    const renderCoupon = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>

                <FormInput
                    containerInputStyle={{
                        backgroundColor: COLORS.white,
                        borderWidth: 2,
                        borderColor: COLORS.lightGray2,
                        overflow: 'hidden',
                        paddingRight: 0
                    }}
                    placeholder="Coupon Code"
                    appendComponent={
                        <View
                            style={{
                                width: 60,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.discount}
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                            />
                        </View>
                    }
                />
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>
            {renderHeader()}

            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                extraScrollHeight={-200}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 20
                }}
                keyboardDismissMode='on-drag'
            >

                {renderMyCard()}

                {renderDeliveryAdd()}

                {renderCoupon()}
            </KeyboardAwareScrollView>

            <FooterTotal
                subTotal={37.97}
                shippingFee={0.00}
                total={37.97}
                onPress={() => navigation.navigate("FoodSuccess")}
            />
        </View>
    )
}

export default Checkout