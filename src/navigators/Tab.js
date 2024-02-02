import { NavigationContainer } from '@react-navigation/native';
import { Scanner, Settings } from '@/screens';
import { useTheme } from '@/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BoardsNavigator from '@/navigators/Boards';


const Tab = createBottomTabNavigator();

const tabScreenOptions = ({ route }) => ({
	tabBarIcon: ({ focused, color, size }) => {
		let iconName;

		if (route.name === 'Boards') {
			iconName = 'menu-outline';
		} else if (route.name === 'Settings') {
			iconName = 'settings-outline';
		} else if (route.name === 'Scanner') {
			iconName = 'scan-outline';
		}

		// You can return any component that you like here!
		return <Ionicons name={iconName} size={size} color={color} />;
	},
	tabBarActiveTintColor: 'tomato',
	tabBarInactiveTintColor: 'gray',
	headerShown: false
});



function TabNavigator() {
	const { variant, navigationTheme } = useTheme();
	return (
			<Tab.Navigator key={variant} screenOptions={tabScreenOptions}>
				<Tab.Screen name="Boards" component={BoardsNavigator} />
				<Tab.Screen name="Scanner" component={Scanner} />
				<Tab.Screen name="Settings" component={Settings} />
			</Tab.Navigator>
	);
}
export default TabNavigator;
