import { View, Image, StyleSheet } from 'react-native';
import { useLayoutEffect, useContext } from 'react';
import UserProfileListItem from '../components/UserProfileListItem';
import * as LABEL from '../constants/strings';
import { UsersContext } from '../store/context/users-context';
import { formatDate, formatName } from '../utils/formatData';

function UserProfileScreen({ route, navigation }) {
  const { userId } = route.params;
  const { userDataList } = useContext(UsersContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Profile Overview of ${first}`,
    });
  }, [first]);

  const displayUserProfile = userDataList.find((user) => {
    const { id } = user;
    return id === userId;
  });

  const {
    name: { title, first, last },
    email,
    gender,
    dob: { date },
    cell,
    picture: { large },
  } = displayUserProfile;

  return (
    <View style={styles.userProfileContainer}>
      <View style={styles.profilePictureContainer}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: large,
          }}
        />
      </View>
      <View style={styles.profileInfoContainer}>
        <UserProfileListItem
          label={LABEL.USERNAME}
          data={formatName(title, first, last)}
        />
        <UserProfileListItem label={LABEL.GENDER} data={gender} />
        <UserProfileListItem label={LABEL.EMAIL} data={email} />
        <UserProfileListItem label={LABEL.PHONE} data={cell} />
        <UserProfileListItem
          label={LABEL.DATE_OF_BIRTH}
          data={formatDate(date)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userProfileContainer: {
    flex: 1,
  },
  profilePictureContainer: {
    height: '45%',
    backgroundColor: '#D6E4E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: '#EFF5F5',
  },
  profileInfoContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default UserProfileScreen;
