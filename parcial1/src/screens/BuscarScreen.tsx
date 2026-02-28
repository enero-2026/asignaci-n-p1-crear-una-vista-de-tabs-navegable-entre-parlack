import { StyleSheet, Text, View } from 'react-native';

export default function BuscarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF6FF',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1E3A8A',
  },
});
