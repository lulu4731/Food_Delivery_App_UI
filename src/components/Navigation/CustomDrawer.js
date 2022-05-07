import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, useDrawerProgress, useDrawerStatus, } from '@react-navigation/drawer'
import MainLayout from '../Home/MainLayout'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { selectedTabSelector, setSelectedTab } from '../../reducers/tab'

const Drawer = createDrawerNavigator()
const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: SIZES.base,
                height: 40,
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1 : null
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white
                }}
            />

            <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>{label}</Text>
        </TouchableOpacity>
    )
}
const CustomDrawerContent = ({ navigation }) => {
    const progress = useDrawerProgress()
    const status = useDrawerStatus()
    const dispatch = useDispatch()
    const selectedTab = useSelector(selectedTabSelector)

    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{
                flex: 1,
                backgroundColor: COLORS.primary,
            }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.radius
                }}
            >
                <View
                    style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => { navigation.closeDrawer() }}
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={{
                        marginTop: SIZES.radius,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={() => console.log('Profile')}
                >
                    <Image
                        source={dummyData.myProfile?.profile_image}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View style={{ marginLeft: SIZES.radius }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{dummyData.myProfile?.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>View your profile</Text>
                    </View>
                </TouchableOpacity>

                <View style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}>
                    <CustomDrawerItem label={constants.screens.home} icon={icons.home} isFocused={selectedTab == constants.screens.home} onPress={() => { dispatch(setSelectedTab(constants.screens.home)), navigation.navigate("MainLayout") }} />
                    <CustomDrawerItem label={constants.screens.my_wallet} icon={icons.wallet} />
                    <CustomDrawerItem label={constants.screens.notification} icon={icons.notification} isFocused={selectedTab == constants.screens.notification} onPress={() => { dispatch(setSelectedTab(constants.screens.notification)), navigation.navigate("MainLayout") }} />
                    <CustomDrawerItem label={constants.screens.favorites} icon={icons.favourite} isFocused={selectedTab == constants.screens.favorites} onPress={() => { dispatch(setSelectedTab(constants.screens.favorites)), navigation.navigate("MainLayout") }} />

                    <View style={{ height: 1, backgroundColor: COLORS.lightGray1, marginVertical: SIZES.radius, marginLeft: SIZES.radius }}></View>
                    <CustomDrawerItem label='Track Your Order' icon={icons.location} />
                    <CustomDrawerItem label='Coupons' icon={icons.coupon} />
                    <CustomDrawerItem label='Setting' icon={icons.setting} />
                    <CustomDrawerItem label='Invited a Friend' icon={icons.profile} />
                    <CustomDrawerItem label='Help Center' icon={icons.help} />
                </View>

                <View style={{ marginBottom: SIZES.padding }}>
                    <CustomDrawerItem label='Logout' icon={icons.logout} />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}
const CustomDrawer = () => {
    // const [progress, setProgress] = useState(new Animated.Value(0))
    // const scale = Animated.interpolateNode(progress, {
    //     inputRange: [0, 1],
    //     outputRange: [1, 0.8]
    // })
    // const borderRadius = Animated.interpolateNode(progress, {
    //     inputRange: [0, 1],
    //     outputRange: [1, 26]
    // })

    // const animatedStyle = { borderRadius, transform: [{ scale }] }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.primary,
        }}>
            {/* <StatusBar
                backgroundColor={COLORS.primary}
                barStyle="dark-content"
            /> */}
            <Drawer.Navigator
                screenOptions={{
                    // headerStatusBarHeight: 3,
                    // drawerHideStatusBarOnOpen: true,
                    // drawerStatusBarAnimation: 'none',
                    drawerStyle: 'slide',
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: "72%",
                        paddingRight: 20,
                        backgroundColor: 'transparent'
                    },
                    sceneContainerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerShown: false
                }}
                initialRouteName='MainLayout'
                drawerContent={(props) => {
                    return (
                        <CustomDrawerContent navigation={props.navigation} />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer