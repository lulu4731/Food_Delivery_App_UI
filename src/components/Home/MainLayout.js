import { View, Text, StatusBar, TouchableWithoutFeedback, Image, FlatList } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer'
import LinearGradient from 'react-native-linear-gradient'
import Home from '../Home/Home'
import CartTab from '../Cart/CartTab'
import Search from '../Search/Search'
import Notification from '../Notification/Notification'
import Favourite from '../Favourite/Favourite'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { selectedTabSelector, setSelectedTab } from '../../reducers/tab'
import Header from './Header'

const TabButton = ({ label, icons, isFocused, onPress, outerContainerStyle, innerContainerStyle }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[{ justifyContent: 'center', alignItems: 'center' }, outerContainerStyle]}>
                <Animated.View style={[{ flexDirection: 'row', width: "80%", height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }, innerContainerStyle]}>
                    <Image source={icons} style={{ width: 20, height: 20, tintColor: isFocused ? COLORS.white : COLORS.gray }} />
                    {
                        isFocused &&
                        <Text numberOfLines={1} style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h3 }}>
                            {label}
                        </Text>
                    }
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}
const MainLayout = ({ navigation }) => {
    const progress = useDrawerProgress()
    const status = useDrawerStatus() === 'open' ? 1 : 0
    const dispatch = useDispatch()
    const selectedTab = useSelector(selectedTabSelector)
    const flatListRef = useRef()
    console.log(selectedTab)

    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)
    const searchTabFlex = useSharedValue(1)
    const searchTabColor = useSharedValue(COLORS.white)
    const cartTabFlex = useSharedValue(1)
    const cartTabColor = useSharedValue(COLORS.white)
    const favoritesTabFlex = useSharedValue(1)
    const favoritesTabColor = useSharedValue(COLORS.white)
    const notificationTabFlex = useSharedValue(1)
    const notificationTabColor = useSharedValue(COLORS.white)

    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value
        }
    })
    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value
        }
    })

    const searchFlexStyle = useAnimatedStyle(() => {
        return {
            flex: searchTabFlex.value
        }
    })
    const searchColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: searchTabColor.value
        }
    })

    const cartFlexStyle = useAnimatedStyle(() => {
        return {
            flex: cartTabFlex.value
        }
    })
    const cartColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: cartTabColor.value
        }
    })

    const favoritesFlexStyle = useAnimatedStyle(() => {
        return {
            flex: favoritesTabFlex.value
        }
    })
    const favoritesColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: favoritesTabColor.value
        }
    })

    const notificationFlexStyle = useAnimatedStyle(() => {
        return {
            flex: notificationTabFlex.value
        }
    })
    const notificationColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: notificationTabColor.value
        }
    })
    useEffect(() => {
        dispatch(setSelectedTab(constants.screens.home))
    }, [])

    useEffect(() => {
        if (selectedTab == constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index: 0,
                animated: false
            })

            homeTabFlex.value = withTiming(4, { duration: 300 })
            homeTabColor.value = withTiming(COLORS.primary, { duration: 300 })
        } else {
            homeTabFlex.value = withTiming(1, { duration: 300 })
            homeTabColor.value = withTiming(COLORS.white, { duration: 300 })
        }
        if (selectedTab == constants.screens.search) {
            flatListRef?.current?.scrollToIndex({
                index: 1,
                animated: false
            })

            searchTabFlex.value = withTiming(4, { duration: 300 })
            searchTabColor.value = withTiming(COLORS.primary, { duration: 300 })
        } else {
            searchTabFlex.value = withTiming(1, { duration: 300 })
            searchTabColor.value = withTiming(COLORS.white, { duration: 300 })
        }
        if (selectedTab == constants.screens.notification) {
            flatListRef?.current?.scrollToIndex({
                index: 4,
                animated: false
            })

            notificationTabFlex.value = withTiming(4, { duration: 300 })
            notificationTabColor.value = withTiming(COLORS.primary, { duration: 300 })
        } else {
            notificationTabFlex.value = withTiming(1, { duration: 300 })
            notificationTabColor.value = withTiming(COLORS.white, { duration: 300 })
        }
        if (selectedTab == constants.screens.cart) {
            flatListRef?.current?.scrollToIndex({
                index: 2,
                animated: false
            })

            cartTabFlex.value = withTiming(4, { duration: 300 })
            cartTabColor.value = withTiming(COLORS.primary, { duration: 300 })
        } else {
            cartTabFlex.value = withTiming(1, { duration: 300 })
            cartTabColor.value = withTiming(COLORS.white, { duration: 300 })
        }
        if (selectedTab == constants.screens.favorites) {
            flatListRef?.current?.scrollToIndex({
                index: 3,
                animated: false
            })

            favoritesTabFlex.value = withTiming(4, { duration: 300 })
            favoritesTabColor.value = withTiming(COLORS.primary, { duration: 300 })
        } else {
            favoritesTabFlex.value = withTiming(1, { duration: 300 })
            favoritesTabColor.value = withTiming(COLORS.white, { duration: 300 })
        }
    }, [selectedTab])

    const scale = Animated.interpolateNode(status, {
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.9, 0.9],
        extrapolate: "clamp",
    })
    const borderRadius = Animated.interpolateNode(status, {
        inputRange: [0, 1],
        outputRange: [1, 24],
        extrapolate: "clamp",
    })
    const animatedStyle = { borderRadius, transform: [{ scale, translateX: status === 1 ? 285 : 0 }] }

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                ...animatedStyle,
            }}
        >
            {/* <StatusBar
                backgroundColor='white'
                barStyle="dark-content"
            /> */}
            {/* Header */}
            <Header
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 0,
                    alignItems: 'center'
                }}
                title={selectedTab.toUpperCase()}
                onPress={() => navigation.openDrawer()}
            />
            {/* Content */}
            <View style={{ flex: 1 }}>
                <FlatList ref={flatListRef}
                    horizontal
                    scrollEnabled={false}
                    pagingEnabled
                    snapToAlignment='center'
                    snapToInterval={SIZES.width}
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ height: SIZES.height, width: SIZES.width }}>
                                {
                                    item.label == constants.screens.home && <Home />
                                }
                                {
                                    item.label == constants.screens.search && <Search />
                                }
                                {
                                    item.label == constants.screens.cart && <CartTab />
                                }
                                {
                                    item.label == constants.screens.favorites && <Favourite />
                                }
                                {
                                    item.label == constants.screens.notification && <Notification />
                                }
                            </View>
                        )
                    }}

                />
            </View>
            {/* Footer */}
            <View
                style={{
                    height: 100,
                    justifyContent: 'flex-end',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                }}
            >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                    colors={[COLORS.transparent, COLORS.lightGray1]}
                    style={{
                        position: 'absolute',
                        top: -20,
                        left: 0,
                        right: 0,
                        height: 100,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                    }}
                />

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    paddingBottom: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    // borderRadius: 24,
                    backgroundColor: COLORS.white,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                }}>
                    <TabButton
                        label={constants.screens.home}
                        icons={icons.home}
                        outerContainerStyle={homeFlexStyle}
                        innerContainerStyle={homeColorStyle}
                        isFocused={selectedTab == constants.screens.home}
                        onPress={() => dispatch(setSelectedTab(constants.screens.home))}
                    />
                    <TabButton
                        label={constants.screens.search}
                        icons={icons.search}
                        outerContainerStyle={searchFlexStyle}
                        innerContainerStyle={searchColorStyle}
                        isFocused={selectedTab == constants.screens.search}
                        onPress={() => dispatch(setSelectedTab(constants.screens.search))}
                    />
                    <TabButton
                        label={constants.screens.cart}
                        icons={icons.cart}
                        outerContainerStyle={cartFlexStyle}
                        innerContainerStyle={cartColorStyle}
                        isFocused={selectedTab == constants.screens.cart}
                        onPress={() => dispatch(setSelectedTab(constants.screens.cart))}
                    />
                    <TabButton
                        label={constants.screens.favorites}
                        icons={icons.favourite}
                        outerContainerStyle={favoritesFlexStyle}
                        innerContainerStyle={favoritesColorStyle}
                        isFocused={selectedTab == constants.screens.favorites}
                        onPress={() => dispatch(setSelectedTab(constants.screens.favorites))}
                    />
                    <TabButton
                        label={constants.screens.notification}
                        icons={icons.notification}
                        outerContainerStyle={notificationFlexStyle}
                        innerContainerStyle={notificationColorStyle}
                        isFocused={selectedTab == constants.screens.notification}
                        onPress={() => dispatch(setSelectedTab(constants.screens.notification))}
                    />
                </View>
            </View>


        </Animated.View>
    )
}

export default MainLayout