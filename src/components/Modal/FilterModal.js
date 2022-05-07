import { View, Text, Animated, ScrollView, TouchableWithoutFeedback, Modal } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../../constants'
import IconButton from '../Button/IconButton'
import TwoPointSlider from '../Item/TwoPointSlider'
import TextButton from '../Button/TextButton'

const Section = ({ containerStyle, title, children }) => {
    return (
        <View style={{
            marginTop: SIZES.padding,
            ...containerStyle
        }}>
            <Text style={{ ...FONTS.h3 }}>{title}</Text>

            {children}
        </View>
    )
}
const FilterModal = ({ isVisible, onClose, setShowFilterModal, showFilterModal }) => {
    const modalAnimatedValue = useRef(new Animated.Value(0)).current
    const [deliveryTime, setDeliveryTime] = useState("")
    const [ratings, setRatings] = useState("")
    const [tags, setTags] = useState("")

    useEffect(() => {
        if (isVisible) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start(() => onClose())
        }
    }, [showFilterModal])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 680]
    })

    const renderDistance = () => {
        return (
            <Section title="Distance">
                <View style={{ alignItems: 'center' }}>
                    <TwoPointSlider
                        values={[3, 10]}
                        min={1}
                        max={20}
                        postfix="km"
                        onValuesChange={(value) => {
                            console.log(value)
                        }}
                    />
                </View>
            </Section>
        )
    }
    const renderDeliveryTime = () => {
        return (
            <Section title="Delivery Time" containerStyle={{ marginTop: 40 }}>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: SIZES.radius
                }}>
                    {
                        constants.delivery_time.map((item, index) => {
                            return (
                                <TextButton
                                    key={`${item.id}`}
                                    label={item.label}
                                    labelStyle={{
                                        color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                                        ...FONTS.body3
                                    }}
                                    buttonContainerStyle={{
                                        flex: 1,
                                        height: 50,
                                        margin: 5,
                                        alignItems: 'center',
                                        borderRadius: SIZES.radius,
                                        backgroundColor: item.id == deliveryTime ? COLORS.primary : COLORS.lightGray2
                                    }}
                                    onPress={() => {
                                        setDeliveryTime(item.id)
                                    }}
                                />
                            )
                        })
                    }
                </View>
            </Section>
        )
    }
    const renderPricingRange = () => {
        return (
            <Section title="Pricing Range">
                <View style={{ alignItems: 'center' }}>
                    <TwoPointSlider
                        values={[10, 50]}
                        min={1}
                        max={100}
                        prefix="$"
                        onValuesChange={value => console.log(value)}
                    />
                </View>
            </Section>
        )
    }
    const renderRatings = () => {
        return (
            <Section title="Ratings">
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: SIZES.radius
                }}>
                    {
                        constants.ratings.map((item, index) => {
                            return (
                                <TextButton
                                    key={`${item.id}`}
                                    label={item.label}
                                    labelStyle={{
                                        color: item.id == ratings ? COLORS.white : COLORS.gray,
                                        ...FONTS.body3
                                    }}
                                    buttonContainerStyle={{
                                        flex: 1,
                                        height: 50,
                                        margin: 5,
                                        alignItems: 'center',
                                        borderRadius: SIZES.radius,
                                        backgroundColor: item.id == ratings ? COLORS.primary : COLORS.lightGray2,
                                    }}
                                    icon={icons.star}
                                    iconStyle={{
                                        tintColor: item.id == ratings ? COLORS.white : COLORS.gray
                                    }}
                                    onPress={() => {
                                        setRatings(item.id)
                                    }}
                                />
                            )
                        })
                    }
                </View>
            </Section>
        )
    }
    const renderTags = () => {
        return (
            <Section title="Tags">
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginBottom: -50
                }}>
                    {
                        constants.tags.map((item, index) => {
                            return (
                                <TextButton
                                    key={`${item.id}`}
                                    label={item.label}
                                    labelStyle={{
                                        color: item.id == tags ? COLORS.white : COLORS.gray,
                                        ...FONTS.body3
                                    }}
                                    buttonContainerStyle={{
                                        height: 50,
                                        margin: 5,
                                        alignItems: 'center',
                                        borderRadius: SIZES.base,
                                        backgroundColor: item.id == tags ? COLORS.primary : COLORS.lightGray2,
                                        paddingHorizontal: SIZES.padding
                                    }}
                                    onPress={() => {
                                        setTags(item.id)
                                    }}
                                />
                            )
                        })
                    }
                </View>
            </Section>
        )
    }
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View style={{
                flex: 1,
                backgroundColor: COLORS.transparentBlack7
            }}>
                <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}>

                    </View>
                </TouchableWithoutFeedback>

                <Animated.View style={{
                    position: 'absolute',
                    left: 0,
                    top: modalY,
                    width: '100%',
                    height: '100%',
                    padding: SIZES.padding,
                    borderTopRightRadius: SIZES.padding,
                    borderTopLeftRadius: SIZES.padding,
                    backgroundColor: COLORS.white
                }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 1, fontSize: 18, ...FONTS.h3 }}>Filter Your Search</Text>
                        <IconButton
                            containerStyle={{
                                borderWidth: 2,
                                borderRadius: 10,
                                borderColor: COLORS.gray2
                            }}
                            icon={icons.cross}
                            iconStyle={{
                                tintColor: COLORS.gray2
                            }}
                            onPress={() => {
                                setShowFilterModal(false)
                            }}
                        />
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 250
                        }}
                    >

                        {renderDistance()}

                        {renderDeliveryTime()}

                        {renderPricingRange()}

                        {renderRatings()}

                        {renderTags()}
                    </ScrollView>

                    <View style={{
                        position: 'absolute',
                        bottom: 120,
                        left: 0,
                        right: 0,
                        height: 100,
                        paddingHorizontal: SIZES.padding,
                        paddingVertical: SIZES.radius,
                        backgroundColor: COLORS.white,
                        justifyContent: 'center'
                    }}>
                        <TextButton
                            label="Apply Filter"
                            buttonContainerStyle={{
                                height: 50,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary,
                            }}
                            onPress={() => {
                                console.log("apply filter")
                            }}
                        />
                    </View>
                </Animated.View>
            </View>
        </Modal>
    )
}

export default FilterModal