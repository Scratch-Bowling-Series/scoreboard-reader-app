import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Startup } from '@/screens';
import { useTheme } from '@/theme';
import Tab from '@/navigators/Tab';

const Stack = createStackNavigator();


function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();
	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Startup" component={Startup} />
				<Stack.Screen name="TabNav" component={Tab} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default ApplicationNavigator;
