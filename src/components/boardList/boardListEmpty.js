import { StyleSheet, View, Text } from 'react-native';


const BoardListEmpty = (props) => {

    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>No Saved Boards</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    wrapper: {},

    text: {}

});

export default BoardListEmpty;
