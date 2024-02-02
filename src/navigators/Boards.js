import { useTheme } from '@/theme';
import { createStackNavigator } from '@react-navigation/stack';
import BoardsShare from '@/screens/Boards/BoardsShare';
import BoardsView from '@/screens/Boards/BoardsView';
import BoardsList from '@/screens/Boards/BoardsList';


const Stack = createStackNavigator();

const boardsScreenOptions = ({ route }) => ({

    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerTitleStyle: {
        color: 'black'
    }
});



function ScoreboardsNavigator() {
    const { variant, navigationTheme } = useTheme();
    return (
        <Stack.Navigator key={variant} screenOptions={boardsScreenOptions}>
            <Stack.Screen name="Saved Boards" component={BoardsList} />
            <Stack.Screen name="View" component={BoardsView} />
            <Stack.Screen name="Share" component={BoardsShare} />
        </Stack.Navigator>
    );
}
export default ScoreboardsNavigator;
