import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../../constants'
import FoodHeader from './FoodHeader'
import IconButton from '../Button/IconButton'
import CartQuantityButton from '../Button/CartQuantityButton'
import IconLabel from '../Item/IconLabel'
import TextButton from '../Button/TextButton'
import LineDivider from '../Item/LineDivider'
import Rating from '../Item/Rating'
import StepperInput from '../Item/StepperInput'

const FoodDetail = ({ navigation }) => {
    const [foodItem, setFoodItem] = useState(dummyData.vegBiryani)
    const [selectedSize, setSelectedSize] = useState("")
    const [quantity, setQuantity] = useState(1)

    const renderHeader = () => {
        return (
            <FoodHeader
                title="DETAILS"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 10,
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            alignItem: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray
                        }}
                        iconStyle={{
                            tintColor: COLORS.gray2,
                            width: 20,
                            height: 20,
                            marginLeft: 7
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <CartQuantityButton
                        quantity={3}
                    />
                }
            />
        )
    }
    const renderDetail = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                }}
            >
                <View style={{
                    height: 190,
                    borderRadius: 15,
                    backgroundColor: COLORS.lightGray2,
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.base,
                            justifyContent: 'space-between',
                            paddingHorizontal: SIZES.radius
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <Image source={icons.calories}
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text>{foodItem?.calories} calories</Text>
                        </View>

                        <Image
                            source={icons.love}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                            }}
                        />
                    </View>

                    <Image
                        source={foodItem?.image}
                        resizeMode="contain"
                        style={{
                            width: "100%",
                            height: 170
                        }}
                    />
                </View>

                <View
                    style={{
                        marginTop: SIZES.padding,
                    }}
                >
                    <Text style={{ ...FONTS.h1 }}>{foodItem?.name}</Text>
                    <Text style={{ ...FONTS.body3, marginTop: SIZES.base, color: COLORS.darkGray, textAlign: 'justify' }}>{foodItem?.description}</Text>
                </View>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row',

                    }}
                >
                    <IconLabel
                        containerStyle={{
                            backgroundColor: COLORS.primary,
                        }}
                        label="4.5"
                        icon={icons.star}
                    />
                    <IconLabel
                        containerStyle={{
                            marginLeft: SIZES.radius,
                        }}
                        label="30 Mins"
                        icon={icons.clock}
                        labelStyle={{
                            color: COLORS.black
                        }}
                    />

                    <IconLabel
                        label="Free Shipping"
                        icon={icons.dollar}
                        labelStyle={{
                            color: COLORS.black
                        }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>Sizes: </Text>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginLeft: SIZES.padding,
                    }}>
                        {
                            dummyData.sizes.map((item, index) => (
                                <TextButton
                                    key={index}
                                    buttonContainerStyle={{
                                        width: 55,
                                        height: 55,
                                        margin: SIZES.base,
                                        borderWidth: 1,
                                        borderRadius: SIZES.radius,
                                        borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                                        backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                    }}
                                    label={item.label}
                                    labelStyle={{
                                        color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                        ...FONTS.body2
                                    }}
                                    onPress={() => setSelectedSize(item.id)}
                                />
                            ))
                        }
                    </View>
                </View>
            </View>
        )
    }
    const renderRestaurant = () => {
        return (
            <View style={{
                flexDirection: 'row',
                marginVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                alignItems: 'center'
            }}>
                <Image
                    source={images.profile}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>By Dang Programer</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>1.2 KM away from you</Text>
                </View>

                <Rating
                    rating={4}
                    iconsStyle={{
                        marginLeft: 3
                    }}
                />
            </View>
        )
    }
    const renderFooter = () => {
        return (
            <View style={{
                flexDirection: 'row',
                height: 120,
                alignItems: 'center',
                paddingHorizontal: SIZES.padding,
                paddingBottom: SIZES.radius
            }}>

                <StepperInput
                    value={quantity}
                    onAdd={() => setQuantity(quantity + 1)}
                    onMins={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
                />

                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius
                    }}
                    label="Buy Now"
                    label2="$15.99"
                    onPress={() => navigation.navigate("MyCart")}
                />
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            {renderHeader()}

            <ScrollView>
                {renderDetail()}

                <LineDivider />

                {renderRestaurant()}
            </ScrollView>

            <LineDivider />
            {renderFooter()}
        </View>
    )
}

export default FoodDetail