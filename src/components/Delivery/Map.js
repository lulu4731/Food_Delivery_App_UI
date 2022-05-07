import { View, Text, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, constants, dummyData, icons, SIZES } from '../../constants'
import MapViewDirections from 'react-native-maps-directions'
import utils from '../../utils/Utils'

const Map = ({ navigation }) => {
    const mapView = useRef()
    const [region, setRegion] = useState(null)
    const [toLoc, setToLoc] = useState(null)
    const [fromLoc, setFromLoc] = useState(null)
    const [angle, setAngle] = useState(0)
    const [isReady, setIsReady] = useState(false)
    const [duration, setDuration] = useState("")

    useEffect(() => {
        let initialRegion = {
            latitude: 10.848076557704957,
            longitude: 106.78668615542364,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        }

        let destination = {
            latitude: 10.845840300457727,
            longitude: 106.78692329274878,
        }

        setToLoc(destination)
        setFromLoc(dummyData.fromLocs[0])
        setRegion(initialRegion)
    }, [])


    const renderMap = () => {
        return (
            <MapView
                ref={mapView}
                style={{
                    flex: 1
                }}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
            >
                {
                    fromLoc &&
                    <Marker
                        key={'FromLoc'}
                        coordinate={fromLoc}
                        tracksViewChanges={true}
                        icon={icons.navigator1}
                        rotation={angle}
                        anchor={{ x: 0.5, y: 0.5 }}

                    />
                }

                {
                    toLoc &&
                    <Marker
                        key={'ToLoc'}
                        coordinate={toLoc}
                        tracksViewChanges={false}
                        icon={icons.location_pin}
                        anchor={{ x: 0.5, y: 0.5 }}
                    >
                    </Marker>
                }

                <MapViewDirections
                    origin={fromLoc}
                    destination={toLoc}
                    apikey={constants.GOOGLE_MAP_API_KEY}
                    strokeWidth={5}
                    strokeColor={COLORS.primary}
                    optimizeWaypoints={true}
                    onReady={(result) => {
                        setDuration(Math.ceil(result.duration))
                        console.log(`Distance: ${result.distance} km`)
                        console.log(`Duration: ${result.duration} min.`)
                        console.log(result)

                        if (!isReady) {
                            mapView.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: SIZES.width * 0.1,
                                    bottom: 400,
                                    left: SIZES.width * 0.1,
                                    top: SIZES.width * 0.1,
                                }
                            })

                            if (result.coordinates.length >= 2) {
                                let angle = utils.calculateAngle(result.coordinates)

                                setAngle(angle)
                            }

                            setIsReady(true)
                        }
                    }}
                />
            </MapView>
        )
    }
    return (
        <View
            style={{
                flex: 1
            }}
        >
            {renderMap()}
        </View>
    )
}

export default Map