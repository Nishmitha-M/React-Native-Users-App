import { Pressable, Text, View, StyleSheet } from 'react-native';

function PrimaryButton({ children, onViewProfilePress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onViewProfilePress}
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed ? styles.pressed : null,
        ]}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#D6E4E5',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#EB6440',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressed: { opacity: 0.75 },
});
