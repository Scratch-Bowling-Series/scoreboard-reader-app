import { Text, View } from 'react-native';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import BoardList from '@/components/boardList/boardList';

function BoardsList({ navigation }) {
	const { layout, gutters, fonts } = useTheme();

	const boards = [
		{id: 1},
		{id: 2},
		{id: 3},
		{id: 4},
	];

	const handleBoardPressed = (board) => {
		navigation.navigate("TabNav", { screen: "Boards", params: {
			screen: "View"
		}})
	}

	return (
		<SafeScreen>
			<View style={[layout.flex_1, layout.col]}>
				<BoardList boards={boards} onPress={handleBoardPressed}/>
			</View>
		</SafeScreen>
	);
}
export default BoardsList;
