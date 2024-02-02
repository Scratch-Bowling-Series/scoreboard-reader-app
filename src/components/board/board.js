import { View } from 'react-native';

const example_board = {
	bowlers: [
		{
			name: 'Bowler 1',
			frames_first: ['/', '/', '/', '/', '/', '/', '/', '/', '/', '/'],
			frames_second: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
			frames_total: [
				'30',
				'60',
				'90',
				'120',
				'150',
				'180',
				'210',
				'240',
				'270',
				'300',
			],
			total: '300',
			active: false,
		},
		{
			name: 'Bowler 2',
			frames_first: ['/', '/', '/', '/', '/', '/', '/', '/', '/', '/'],
			frames_second: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
			frames_total: [
				'30',
				'60',
				'90',
				'120',
				'150',
				'180',
				'210',
				'240',
				'270',
				'300',
			],
			total: '300',
			active: true,
		},
		{
			name: 'Bowler 3',
			frames_first: ['/', '/', '/', '/', '/', '/', '/', '/', '/', '/'],
			frames_second: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
			frames_total: [
				'30',
				'60',
				'90',
				'120',
				'150',
				'180',
				'210',
				'240',
				'270',
				'300',
			],
			total: '300',
			active: false,
		},
	],
};

function Board(props) {
	const board = props.board ?? example_board;

	return <View />;
}

export default Board;
