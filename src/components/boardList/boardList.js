import { FlatList, StyleSheet, View } from 'react-native';
import BoardListEntry from '@/components/boardList/boardListEntry';
import BoardListEmpty from '@/components/boardList/boardListEmpty';


const BoardList = (props) => {

    const boards = props.boards ?? [];
    const navigation = props.navigation;

    return (
        <View style={styles.wrapper}>
            {
                boards.length > 0 ?
                    <FlatList
                        style={styles.list}
                        data={boards}
                        renderItem={({item, index}) => {
                            return (
                                <BoardListEntry
                                    board={item}
                                    index={index}
                                    onPress={props.onPress}
                                />
                            )
                        }}
                    />
                    :
                    <BoardListEmpty/>
            }
        </View>
    );
}

const styles = StyleSheet.create({

    wrapper: {},

    list: {
    },

});

export default BoardList;
