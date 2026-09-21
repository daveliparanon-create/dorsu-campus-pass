import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
}

export default function ScanCounter({
  count,
  onScan,
  onReset,
}: ScanCounterProps) {
  return (
    <View style={styles.card}>

      <Text style={styles.icon}>▣</Text>

      <Text style={styles.title}>
        Gate Scans
      </Text>

      <Text style={styles.label}>
        Total Scans
      </Text>

      <Text style={styles.count}>
        {count}
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.scanButton,
          pressed && styles.pressed,
        ]}
        onPress={onScan}
      >
        <Text style={styles.scanIcon}>＋</Text>
        <Text style={styles.buttonText}>
          Scan +1
        </Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.resetButton,
          pressed && styles.pressed,
        ]}
        onPress={onReset}
      >
        <Text style={styles.resetIcon}>↻</Text>
        <Text style={styles.buttonText}>
          Reset
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginTop: 18,
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#DCEEFF',

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  icon: {
    fontSize: 28,
    color: '#1262B0',
    marginBottom: 3,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#123B70',
  },

  label: {
    fontSize: 14,
    color: '#70859A',
    marginTop: 5,
  },

  count: {
    fontSize: 58,
    fontWeight: 'bold',
    color: '#0B4F96',
    marginVertical: 8,
  },

  scanButton: {
    width: '80%',
    backgroundColor: '#168BEA',
    borderRadius: 14,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,

    elevation: 3,
  },

  resetButton: {
    width: '80%',
    backgroundColor: '#6C7886',
    borderRadius: 14,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,

    elevation: 2,
  },

  scanIcon: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 7,
  },

  resetIcon: {
    color: '#FFFFFF',
    fontSize: 23,
    marginRight: 7,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
});