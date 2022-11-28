import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from './PrimaryButton';
import { VIEW_PROFILE } from '../constants/strings';

function UsersListItem({ userData }) {
  const navigationObject = useNavigation();

  function onViewProfilePressHandler() {
    // Navigate to profile overview screen
    navigationObject.navigate('UserProfileOverview', {
      userId: userData.id,
    });
  }

  return (
    <View style={styles.listItemContainer}>
      <Image
        style={styles.picture}
        source={{
          uri: userData.picture.large,
        }}
      />

      <Text style={styles.name}>{userData.name.first}</Text>
      <PrimaryButton onViewProfilePress={onViewProfilePressHandler}>
        {VIEW_PROFILE}
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    margin: 3,
    borderRadius: 10,
    flex: 1,
    backgroundColor: '#EFF5F5',
    height: 180,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pictureContainer: {},
  picture: {
    height: 65,
    width: 65,
    borderRadius: 50,
  },
  name: {
    color: '#497174',
    fontSize: 18,
    marginTop: 8,
  },
});

export default UsersListItem;
