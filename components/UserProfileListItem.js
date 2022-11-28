import { StyleSheet, View, Text } from 'react-native';

function UserInfoListItem({ label, data }) {
  return (
    <View style={styles.profileInfo}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileInfo: {
    borderBottomColor: '#EB6440',
    borderBottomWidth: 1,
  },
  label: {
    marginVertical: 5,
    color: '#497174',
    opacity: 0.75,
  },
  data: {
    fontSize: 18,
    marginBottom: 5,
    color: '#474E68',
  },
});

export default UserInfoListItem;
