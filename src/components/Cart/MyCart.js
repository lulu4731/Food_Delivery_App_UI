import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../../constants'
import FoodHeader from '../Food/FoodHeader'
import IconButton from '../Button/IconButton'
import CartQuantityButton from '../Button/CartQuantityButton'
import { SwipeListView } from 'react-native-swipe-list-view'
import StepperInput from '../Item/StepperInput'
import FooterTotal from '../Food/FooterTotal'

const MyCart = ({ navigation }) => {
    const [myListCart, setMyListCart] = useState(dummyData.myCart)
    const [quantity, setQuantity] = useState(1)

    const renderHeader = () => {
        return (
            <FoodHeader
                title="MY CART"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 10
                }}
                leftComponent={
                    <IconButton
                        containerStyle={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderColor: COLORS.gray2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                        icon={icons.back}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2,
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <CartQuantityButton
                        quantity={10}
                    />

                }
            />
        )
    }
    const renderCartList = () => {
        return (
            <SwipeListView
                showsVerticalScrollIndicator={false}
                data={myListCart}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2,
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => {
                    return (
                        <View
                            style={{
                                height: 100,
                                backgroundColor: COLORS.lightGray2,
                                ...styles.cartItemContainer
                            }}
                        >
                            <View style={{
                                width: 90,
                                height: 100,
                                marginLeft: -10
                            }}>
                                <Image
                                    source={data.item.image}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        top: 10,
                                        position: 'absolute'
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ ...FONTS.body3 }}>{data.item.name}</Text>
                                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>${data.item.price}</Text>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-end',

                                }}
                            >
                                <StepperInput
                                    containerStyle={{
                                        height: 50,
                                        width: 125,
                                        backgroundColor: COLORS.white
                                    }}
                                    value={data.item.qty}
                                    onAdd={() => setMyListCart(myListCart.map((item, index) => item.id == data.item.id ? { ...item, qty: item.qty + 1 } : item))}
                                    onMins={() => setMyListCart(myListCart.map((item, index) => item.id == data.item.id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item))}
                                />
                            </View>
                        </View>
                    )
                }}
                renderHiddenItem={(data, rowMap) => (
                    <IconButton
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: COLORS.primary,
                            ...styles.cartItemContainer
                        }}
                        icon={icons.delete_icon}
                        iconStyle={{
                            marginRight: 10
                        }}
                        onPress={() => setMyListCart(myListCart.filter(item => item.id != data.item.id))}
                    />
                )}
            />
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeader()}

            {renderCartList()}

            <FooterTotal
                subTotal={37.97}
                shippingFee={0.00}
                total={37.97}
            />
        </View>
    )
}

export default MyCart

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        marginTop: SIZES.radius,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        paddingHorizontal: SIZES.radius
    }
})