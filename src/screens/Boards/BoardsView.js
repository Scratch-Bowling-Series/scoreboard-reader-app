import { Text, View } from 'react-native';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import BoardList from '@/components/boardList/boardList';

function ScoreboardsList({ navigation }) {
	const { layout, gutters, fonts } = useTheme();

	const boards = [
		{id: 1},
		{id: 2},
		{id: 3},
		{id: 4},
	];

	return (
		<SafeScreen>
			<View style={[layout.flex_1, layout.col]}>
			</View>
		</SafeScreen>
	);
}
export default ScoreboardsList;
