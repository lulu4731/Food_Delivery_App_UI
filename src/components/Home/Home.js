import React, { Children, useEffect, useState } from 'react';
import {
    View,
    Text, TouchableOpacity, Image, TextInput, FlatList
} from 'react-native';
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../../constants'
import HorizontalFoodCard from '../Item/HorizontalFoodCard';
import VerticalFoodCard from '../Item/VerticalFoodCard';
import FilterModal from '../Modal/FilterModal';
const Section = ({ title, onPress, children }) => {
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                marginHorizontal: SIZES.padding,
                marginTop: 30,
                marginBottom: 20
            }}>
                <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>Show all</Text>
                </TouchableOpacity>
            </View>

            {children}
        </View>
    )
}
const Home = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(1)
    const [selectedMenuType, setSelectedMenuType] = useState(1)
    const [menuList, setMenuList] = useState([])
    const [recommends, setRecommends] = useState([])
    const [popular, setPopular] = useState([])
    const [showFilterModal, setShowFilterModal] = useState(false)

    const handleChangeCategory = (categoryId, menuTypeId) => {
        let selectRecommends = dummyData.menu.find(a => a.name == "Recommended")
        setRecommends(selectRecommends?.list.filter(a => a.categories.includes(categoryId)))

        let selectedPopular = dummyData.menu.find(a => a.name == "Popular")
        setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))

        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)
        setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
    }

    useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])


    const renderSearch = () => {
        return (
            <View style={{
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginVertical: SIZES.base,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2
            }}>

                <Image source={icons.search} style={{ width: 20, height: 20, tintColor: COLORS.black }} />
                <TextInput style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }} placeholder="search food ..." />
                <TouchableOpacity onPress={() => setShowFilterModal(true)}>
                    <Image source={icons.filter} style={{ width: 20, height: 20, tintColor: COLORS.black }}></Image>
                </TouchableOpacity>
            </View>
        )
    }
    const renderMenuType = () => {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom: 20
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{
                        marginLeft: SIZES.padding,
                        marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0
                    }}
                        onPress={() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory(selectedCategoryId, item.id)
                        }}
                    >
                        <Text style={{ color: selectedMenuType == item.id ? COLORS.primary : COLORS.black, ...FONTS.h3 }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        )
    }
    const renderRecommendedSection = () => {
        return (
            <Section title="Recommended" onPress={() => console.log('show all commended')}>
                <FlatList
                    horizontal
                    data={recommends}
                    keyExtractor={(item) => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 6,
                        marginBottom: 4
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <HorizontalFoodCard
                                containerStyle={{
                                    height: 160,
                                    width: SIZES.width * 0.87,
                                    marginLeft: index == 0 ? SIZES.padding : 18,
                                    padding: 2,
                                    marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                                    paddingRight: SIZES.radius,
                                    alignItems: 'center'
                                }}
                                imageStyle={{
                                    marginTop: 35,
                                    height: 150,
                                    width: 150
                                }}
                                item={item}
                            />
                        )
                    }}
                />
            </Section>
        )
    }
    const renderPopularSection = () => {
        return (
            <Section title="Popular Near You" onPress={() => console.log("show all popular")}>
                <FlatList
                    data={popular}
                    horizontal
                    keyExtractor={(item) => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <VerticalFoodCard
                                containerStyle={{
                                    height: 270,
                                    marginLeft: index == 0 ? SIZES.padding : 18,
                                    padding: 16,
                                    marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                                }}
                                item={item}
                            />
                        )
                    }}
                />
            </Section>
        )
    }
    const renderFoodCategories = () => {
        return (
            <FlatList
                horizontal
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        height: 55,
                        marginTop: SIZES.padding,
                        marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                        marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,
                        paddingHorizontal: 8,
                        borderRadius: SIZES.radius,
                        backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
                    }}
                        onPress={() => {
                            setSelectedCategoryId(item.id)
                            handleChangeCategory(item.id, selectedMenuType)
                        }}
                    >
                        <Image source={item.icon}
                            style={{
                                marginTop: 5,
                                height: 50,
                                width: 50
                            }}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            marginRight: SIZES.base,
                            color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
                            ...FONTS.h3
                        }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }
    const renderDeliveryTo = () => {
        return (
            <View style={{
                marginTop: SIZES.padding - 8,
                marginHorizontal: SIZES.padding
            }}>
                <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>DELIVERY TO</Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.base
                }}>

                    <Text style={{ ...FONTS.h3 }}>{dummyData?.myProfile?.address}</Text>
                    <Image
                        source={icons.down_arrow}
                        style={{
                            marginLeft: SIZES.base,
                            height: 20,
                            width: 20
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* search */}
            {renderSearch()}

            {showFilterModal &&
                <FilterModal
                    isVisible={showFilterModal}
                    onClose={() => setShowFilterModal(false)}
                    setShowFilterModal={setShowFilterModal}
                    showFilterModal={showFilterModal}
                />
            }

            {/* list */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderDeliveryTo()}

                        {renderFoodCategories()}

                        {renderPopularSection()}

                        {renderRecommendedSection()}

                        {renderMenuType()}
                    </View>
                }
                renderItem={({ item, index }) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius
                            }}
                            imageStyle={{
                                width: 110,
                                height: 110,
                                marginTop: 20
                            }}
                            item={item} />
                    )
                }}
                ListFooterComponent={
                    <View style={{ height: 160 }}></View>
                }
            />
        </View>
    )
}

export default Home;