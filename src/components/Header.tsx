import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoCircle}>
        <Text style={styles.logoText}>D</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>DOrSU Digital Campus Pass</Text>
        <Text style={styles.subtitle}>
          Student Identification & Campus Access
        </Text>
      </View>

      <View style={styles.settingsCircle}>
        <Text style={styles.settings}>⚙</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },

  logoCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#0B5CAD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  logoText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },

  titleContainer: {
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0B3D78',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#52739A',
    marginTop: 5,
    textAlign: 'center',
  },

  settingsCircle: {
    position: 'absolute',
    right: 0,
    top: 5,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#D8E8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settings: {
    fontSize: 25,
  },
});