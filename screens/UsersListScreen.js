import { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import UsersListItem from '../components/UsersListItem';
import { UsersContext } from '../store/context/users-context';

function UsersListScreen() {
  const { userDataList } = useContext(UsersContext);

  function renderListItem(user) {
    return <UsersListItem userData={user.item} />;
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        numColumns={2}
        data={userDataList}
        renderItem={renderListItem}
        keyExtractor={(user) => user.login.uuid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#FFFFFF',
  },
});

export default UsersListScreen;
