import { View, Text, Image, ImageBackground, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS, FONTS, SIZES, constants, icons, dummyData, images } from '../../constants'
import TextButton from '../Button/TextButton'

const OnBoarding = ({ navigation }) => {
    const scrollX = useRef(new Animated.Value(0)).current
    const flatListRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    const onViewChangeRef = useRef(({ viewableItems, changed }) => {
        setCurrentIndex(viewableItems[0].index)
    })

    const Dots = () => {
        const dotPosition = Animated.divide(scrollX, SIZES.width)
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {
                    constants.onboarding_screens.map((item, index) => {
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
                            extrapolate: 'clamp'
                        })

                        const dotWidth = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={index}
                                style={{
                                    width: dotWidth,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: dotColor,
                                    marginHorizontal: 6
                                }}
                            >
                            </Animated.View>
                        )
                    })
                }
            </View>
        )
    }
    const renderHeaderLogo = () => {
        return (
            <View style={{
                position: 'absolute',
                top: SIZES.height > 800 ? 25 : 25,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={images.logo_02} resizeMode="contain" style={{ width: SIZES.width * 0.5, height: 100 }} />
            </View>
        )
    }
    const renderFooter = () => {
        return (
            <View style={{
                height: 160
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>

                    <Dots />
                </View>

                {
                    currentIndex < constants.onboarding_screens.length - 1 &&

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: SIZES.padding,
                        paddingVertical: SIZES.padding
                    }}>
                        <TextButton label="Skip" buttonContainerStyle={{
                            backgroundColor: null,
                        }}
                            labelStyle={{ color: COLORS.darkGray }}
                            onPress={() => {
                                let index = Math.ceil(Number(scrollX._value / SIZES.width))
                                if (index < constants.onboarding_screens.length - 2) {
                                    flatListRef?.current?.scrollToIndex({
                                        index: index + 2,
                                        animated: true
                                    })
                                } else {
                                    flatListRef?.current?.scrollToIndex({
                                        index: index + 1,
                                        animated: true
                                    })
                                }
                            }}
                        />
                        <TextButton label="Next" buttonContainerStyle={{
                            height: 60,
                            width: 200,
                            borderRadius: SIZES.radius
                        }}

                            onPress={() => {
                                let index = Math.ceil(Number(scrollX._value / SIZES.width))
                                if (index < constants.onboarding_screens.length - 1) {
                                    flatListRef?.current?.scrollToIndex({
                                        index: index + 1,
                                        animated: true
                                    })
                                } else {
                                    navigation.navigate("SignIn")
                                }
                            }}
                        />
                    </View>
                }
                {
                    currentIndex == constants.onboarding_screens.length - 1 &&
                    <View
                        style={{
                            paddingHorizontal: SIZES.padding,
                            paddingVertical: SIZES.padding
                        }}
                    >

                        <TextButton label="Let's Get Started" buttonContainerStyle={{
                            height: 60,
                            borderRadius: SIZES.radius
                        }}

                            onPress={() => {
                                navigation.navigate("SignIn")
                            }}
                        />
                    </View>
                }
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>
            {renderHeaderLogo()}

            <Animated.FlatList
                ref={flatListRef}
                horizontal
                pagingEnabled
                data={constants.onboarding_screens}
                scrollEventThrottle={16}
                snapToAlignment="center"
                onViewableItemsChanged={onViewChangeRef.current}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [
                        { nativeEvent: { contentOffset: { x: scrollX } } }
                    ],
                    { useNativeDriver: false }
                )}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ width: SIZES.width }}>
                            <View style={{ flex: 3 }}>
                                <ImageBackground
                                    source={item.backgroundImage}
                                    style={{
                                        width: '100%',
                                        height: index == 1 ? '87%' : '100%',
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                    }}
                                >

                                    <Image
                                        source={item.bannerImage}
                                        resizeMode='contain'
                                        style={{
                                            width: SIZES.width * 0.8,
                                            height: SIZES.width * 0.8,
                                            marginBottom: -SIZES.padding
                                        }}
                                    />
                                </ImageBackground>
                            </View>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: SIZES.radius,
                                marginTop: 20
                            }}>
                                <Text style={{ ...FONTS.h1, fontSize: 25 }}>{item.title}</Text>
                                <Text style={{
                                    marginTop: SIZES.radius,
                                    textAlign: 'center',
                                    color: COLORS.darkGray,
                                    paddingHorizontal: SIZES.padding,
                                    ...FONTS.h3
                                }}>{item.description}</Text>
                            </View>
                        </View>
                    )
                }}
            />

            {renderFooter()}
        </View>
    )
}

export default OnBoarding