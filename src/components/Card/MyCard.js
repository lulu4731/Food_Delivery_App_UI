import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FoodHeader from '../Food/FoodHeader'
import IconButton from '../Button/IconButton'
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../../constants'
import CardItem from './CardItem'
import TextButton from '../Button/TextButton'

const MyCard = ({ navigation }) => {
    const [isSelected, setIsSelected] = useState("")
    const [selectedCard, setSelectedCard] = useState(null)

    const renderHeader = () => {
        return (
            <FoodHeader
                title="MY CARDS"
                containerStyle={{
                    alignItems: 'center',
                }}
                leftComponent={
                    <IconButton
                        containerStyle={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderColor: COLORS.gray,
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        icon={icons.back}
                        iconStyle={{
                            tintColor: COLORS.gray2,
                            width: 25,
                            height: 25
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
                    dummyData.myCards.map((item, index) => {
                        return (
                            <CardItem
                                key={index}
                                item={{ ...item, key: 'MyCard' }}
                                isSelected={isSelected == item.id + "myCard"}
                                onPress={() => {
                                    setIsSelected(item.id + "myCard")
                                    setSelectedCard(item)
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }
    const renderAddNewCards = () => {
        return (
            <View
                style={{ marginTop: SIZES.padding }}
            >
                <Text style={{ ...FONTS.h3 }}>Add new card</Text>

                {
                    dummyData.allCards.map((item, index) => (
                        <CardItem
                            key={index}
                            item={{ ...item, key: 'MyCard' }}
                            isSelected={isSelected == item.id + "newCard"}
                            onPress={() => {
                                setIsSelected(item.id + "newCard")
                                setSelectedCard(item)
                            }}
                        />
                    ))
                }
            </View>
        )
    }
    const renderFooter = () => {
        return (
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                }}
            >
                <TextButton
                    disabled={isSelected == "" ? true : false}
                    buttonContainerStyle={{
                        height: 55,
                        borderRadius: SIZES.radius,
                        backgroundColor: isSelected == "" ? COLORS.gray : COLORS.primary
                    }}
                    label={isSelected.includes("newCard") ? "Add" : "Place your order"}
                    onPress={() => {
                        if (isSelected.includes("newCard")) {
                            navigation.navigate("AddCard", {
                                selectedCard: selectedCard
                            })
                        } else {
                            navigation.navigate("Checkout", {
                                selectedCard: selectedCard
                            })
                        }
                    }}
                />
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                marginTop: 10,
                paddingHorizontal: SIZES.padding
            }}
        >
            {renderHeader()}


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1
                }}
            >
                {renderMyCard()}

                {renderAddNewCards()}
            </ScrollView>

            {renderFooter()}
        </View>
    )
}

export default MyCard