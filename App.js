import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomDrawer from './src/components/Navigation/CustomDrawer'
import { LogBox } from 'react-native';
import store from './src/store'
import { Provider } from 'react-redux'
import OnBoarding from './src/components/OnBoarding/OnBoarding'
import SignIn from './src/components/Account/SignIn'
import ForgotPassword from './src/components/Account/ForgotPassword'
import SignUp from './src/components/Account/SignUp'
import Otp from './src/components/Account/Otp'
import FoodDetail from './src/components/Food/FoodDetail'
import MyCart from './src/components/Cart/MyCart'
import MyCard from './src/components/Card/MyCard'
import AddCard from './src/components/Card/AddCard'
import Checkout from './src/components/Card/Checkout'
import FoodSuccess from './src/components/Food/FoodSuccess'
import DeliveryStatus from './src/components/Delivery/DeliveryStatus'
import Map from './src/components/Delivery/Map'

LogBox.ignoreLogs([
	"[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator()

const App = ({ navigation, router }) => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false
					}}
					initialRouteName={'OnBoarding'}
				>
					<Stack.Screen
						name="OnBoarding"
						component={OnBoarding}
					/>
					<Stack.Screen
						name="SignIn"
						component={SignIn}
					/>
					<Stack.Screen
						name="SignUp"
						component={SignUp}
					/>
					<Stack.Screen
						name="Otp"
						component={Otp}
					/>
					<Stack.Screen
						name="ForgotPassword"
						component={ForgotPassword}
					/>
					<Stack.Screen
						name="FoodDetail"
						component={FoodDetail}
					/>
					<Stack.Screen
						name="Home"
						component={CustomDrawer}
					/>
					<Stack.Screen
						name="MyCart"
						component={MyCart}
					/>
					<Stack.Screen
						name="AddCard"
						component={AddCard}
					/>
					<Stack.Screen
						name="Checkout"
						component={Checkout}
					/>
					<Stack.Screen
						name="FoodSuccess"
						component={FoodSuccess}
						// options={{gestureEnabled: false}}
					/>
					<Stack.Screen
						name="DeliveryStatus"
						component={DeliveryStatus}
						// options={{gestureEnabled: false}}
					/>
					<Stack.Screen
						name="Map"
						component={Map}
						// options={{gestureEnabled: false}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

export default App