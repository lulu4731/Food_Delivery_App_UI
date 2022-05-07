import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FoodHeader from '../Food/FoodHeader'
import IconButton from '../Button/IconButton'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants'
import FormInput from '../Account/FormInput'
import utils from '../../utils/Utils'
import RadioButton from '../Button/RadioButton'
import TextButton from '../Button/TextButton'

const AddCard = ({ navigation, route }) => {
    const [selectedCard, setSelectedCard] = useState(route.params.selectedCard)
    const [cardNumber, setCardNumber] = useState("")
    const [cardNumberError, setCardNumberError] = useState("")
    const [cardName, setCardName] = useState("")
    const [cardNameError, setCardNameError] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [expiryDateError, setExpiryDateError] = useState("")
    const [cvv, setCvv] = useState("")
    const [cvvError, setCvvError] = useState("")
    const [isRemember, setIsRemember] = useState(false)

    // useState(() => {
    //     setSelectedCard(route.params.selectedCard)
    // }, [])

    const renderHeader = () => {
        return (
            <FoodHeader
                title="ADD NEW CARD"
                containerStyle={{
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding
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
    const renderCard = () => {
        return (
            <ImageBackground
                source={images.card}
                style={{
                    height: 200,
                    width: "100%",
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    overflow: 'hidden'
                }}
            >
                <Image
                    source={selectedCard?.icon}
                    style={{
                        width: 80,
                        height: 40,
                        position: 'absolute',
                        top: 10,
                        right: 20
                    }}
                    resizeMode="contain"
                />

                <View
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 10,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.h3
                    }}
                    >{cardName}</Text>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.h3,
                            flex: 1
                        }}>{cardNumber}</Text>

                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.body3
                        }}>{expiryDate}</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
    const renderForm = () => {
        return (
            <View style={{
                marginTop: SIZES.padding * 2
            }}>
                <FormInput
                    label="Card Number"
                    keyboardType='number-pad'
                    onChange={(value) => {
                        setCardNumber(value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())
                        utils.validateInput(value, 19, setCardNumberError)
                    }}
                    errorMsg={cardNumberError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}>
                            <Image source={cardNumber == "" || (cardNumber != "" && cardNumberError == "") ? icons.correct : icons.cancel}
                                style={{ height: 20, width: 20, tintColor: cardNumber == "" ? COLORS.gray : ((cardNumber != "" && cardNumberError == "") ? COLORS.green : COLORS.red) }} />
                        </View>
                    }
                />

                <FormInput
                    label="Cardholder Name"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        setCardName(value)
                        utils.validateInput(value, 1, setCardNameError)
                    }}
                    errorMsg={cardNameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}>
                            <Image source={cardName == "" || (cardName != "" && cardNameError == "") ? icons.correct : icons.cancel}
                                style={{ height: 20, width: 20, tintColor: cardName == "" ? COLORS.gray : ((cardName != "" && cardNameError == "") ? COLORS.green : COLORS.red) }} />
                        </View>
                    }
                />

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius
                    }}
                >

                    <FormInput
                        label="Expiry Date"
                        placeholder="MM/YY"
                        onChange={(value) => {
                            setExpiryDate(value)
                            utils.validateInput(value, 5, setExpiryDateError)
                        }}
                        containerStyle={{
                            flex: 1
                        }}
                        errorMsg={expiryDateError}
                        appendComponent={
                            <View
                                style={{
                                    justifyContent: 'center'
                                }}>
                                <Image source={expiryDate == "" || (expiryDate != "" && expiryDateError == "") ? icons.correct : icons.cancel}
                                    style={{ height: 20, width: 20, tintColor: expiryDate == "" ? COLORS.gray : ((expiryDate != "" && expiryDateError == "") ? COLORS.green : COLORS.red) }} />
                            </View>
                        }
                    />
                    <FormInput
                        label="CVV"
                        onChange={(value) => {
                            setCvv(value)
                            utils.validateInput(value, 3, setCvvError)
                        }}
                        containerStyle={{
                            flex: 1,
                            marginLeft: SIZES.radius
                        }}
                        errorMsg={cvvError}
                        appendComponent={
                            <View
                                style={{
                                    justifyContent: 'center'
                                }}>
                                <Image source={cvv == "" || (cvv != "" && cvvError == "") ? icons.correct : icons.cancel}
                                    style={{ height: 20, width: 20, tintColor: cvv == "" ? COLORS.gray : ((cvv != "" && cvvError == "") ? COLORS.green : COLORS.red) }} />
                            </View>
                        }
                    />
                </View>

                <View
                    style={{
                        alignItems: 'flex-start',
                        marginTop: SIZES.padding
                    }}
                >
                    <RadioButton
                        label="Remember this card details"
                        isSelected={isRemember}
                        onPress={() => setIsRemember(!isRemember)}
                    />
                </View>
            </View>
        )
    }
    const renderFooter = () => {
        return (
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <TextButton
                    label="Add Card"
                    buttonContainerStyle={{
                        height: 55,
                        borderRadius: SIZES.radius
                    }}
                />
            </View>
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

            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {renderCard()}

                {renderForm()}
            </KeyboardAwareScrollView>

            {renderFooter()}
        </View>
    )
}

export default AddCard