import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';


const BoardListEntry = (props) => {

    const board = props.board;
    const title = board?.title ?? 'No Title';
    const description = board.description ?? 'No Description';

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.touchable} onPress={()=> {
                props.onPress(board)
            }}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{description}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    wrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#3d3d3d'
    },

    touchable: {},

    text: {}

});

export default BoardListEntry;
