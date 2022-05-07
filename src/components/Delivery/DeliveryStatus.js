import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, icons, SIZES, FONTS, constants } from '../../constants'
import FoodHeader from '../Food/FoodHeader'
import IconButton from '../Button/IconButton'
import LineDivider from '../Item/LineDivider'
import TextButton from '../Button/TextButton'
import TextIconButton from '../Button/TextIconButton'

const DeliveryStatus = () => {
    const [currentStep, setCurrentStep] = useState(2)

    const renderHeader = () => {
        return (
            <FoodHeader
                title="DELIVERY STATUS"
                containerStyle={{
                    height: 50,
                    marginTop: SIZES.padding
                }}
                titleStyle={{
                    // marginLeft: -32,
                }}
            // leftComponent={
            //     <IconButton
            //         containerStyle={{
            //             width: 40,
            //             height: 40,
            //             borderWidth: 1,
            //             alignItems: 'center',
            //             justifyContent: 'center',
            //             borderRadius: SIZES.radius,
            //             borderColor: COLORS.gray2
            //         }}
            //         icon={icons.back}
            //         iconStyle={{
            //             width: 20,
            //             height: 20,
            //             tintColor: COLORS.gray2
            //         }}
            //         onPress={() => navigation.goBack()}
            //     />
            // }

            />
        )
    }

    const renderInfo = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <Text style={{
                    textAlign: 'center',
                    color: COLORS.gray,
                    ...FONTS.body4
                }}>Estimated Delivery</Text>
                <Text style={{
                    textAlign: 'center',
                    ...FONTS.h2
                }}>21 Sept 2021 / 12:30PM</Text>
            </View>
        )
    }

    const renderTrackOrder = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    borderRadius: SIZES.radius,
                    borderWidth: 2,
                    borderColor: COLORS.lightGray2,
                    backgroundColor: COLORS.white2
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>Track Order</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>NY012345</Text>
                </View>

                <LineDivider />

                <View
                    style={{
                        marginTop: SIZES.padding,
                        paddingHorizontal: SIZES.padding,

                    }}
                >
                    {
                        constants.track_order_status.map((item, index) => {
                            return (
                                <View
                                    key={index}

                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: -5
                                        }}
                                    >
                                        <Image source={icons.check_circle}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                tintColor: index <= currentStep ? COLORS.primary : COLORS.lightGray1
                                            }}
                                        />

                                        <View
                                            style={{ marginLeft: SIZES.radius }}
                                        >
                                            <Text
                                                style={{
                                                    ...FONTS.h3
                                                }}
                                            >{item.title}</Text>
                                            <Text
                                                style={{
                                                    ...FONTS.body4, color: COLORS.gray
                                                }}
                                            >{item.sub_title}</Text>
                                        </View>
                                    </View>
                                    {
                                        index < constants.track_order_status.length - 1 &&
                                        <View>
                                            {
                                                index < currentStep ?
                                                    <View
                                                        style={{
                                                            width: 3,
                                                            height: 50,
                                                            backgroundColor: COLORS.primary,
                                                            zIndex: -1,
                                                            marginLeft: 18
                                                        }}
                                                    /> : <Image
                                                        source={icons.dotted_line}
                                                        style={{
                                                            width: 3,
                                                            height: 50,
                                                            marginLeft: 18,
                                                            zIndex: -1
                                                        }}
                                                    />
                                            }
                                        </View>
                                    }
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
    const renderFooter = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding
                }}
            >
                {currentStep < constants.track_order_status.length - 1 &&
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 55
                        }}
                    >
                        <TextButton
                            buttonContainerStyle={{
                                width: "40%",
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.lightGray2
                            }}
                            label="Cancel"
                            labelStyle={{
                                color: COLORS.primary
                            }}
                        />
                        <TextIconButton
                            containerStyle={{
                                flex: 1,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary,
                                marginLeft: SIZES.radius
                            }}
                            label="MapView"
                            labelStyle={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                            iconPosition="LEFT"
                            icon={icons.map}
                            iconStyle={{
                                width: 25,
                                height: 25,
                                marginRight: SIZES.base,
                                tintColor: COLORS.white
                            }}
                        />
                    </View>
                }
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                paddingHorizontal: SIZES.padding
            }}
        >
            {renderHeader()}

            {renderInfo()}

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {renderTrackOrder()}
            </ScrollView>

            {renderFooter()}
        </View>
    )
}

export default DeliveryStatus