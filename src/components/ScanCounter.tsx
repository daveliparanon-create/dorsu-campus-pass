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

      {/* CARD HEADER */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>Gate Scans</Text>
          <Text style={styles.subtitle}>
            Total campus entry scans
          </Text>
        </View>

        <View style={styles.iconCircle}>
          <Text style={styles.icon}>▣</Text>
        </View>
      </View>

      {/* SCAN COUNT */}
      <View style={styles.countContainer}>
        <Text style={styles.countLabel}>Total Scans</Text>

        <Text style={styles.count}>
          {count}
        </Text>
      </View>

      {/* BUTTONS */}
      <View style={styles.buttonRow}>

        <Pressable
          style={({ pressed }) => [
            styles.scanButton,
            pressed && styles.pressed,
          ]}
          onPress={onScan}
        >
          <Text style={styles.scanButtonText}>
            ＋ Scan
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.resetButton,
            pressed && styles.pressed,
          ]}
          onPress={onReset}
        >
          <Text style={styles.resetButtonText}>
            Reset
          </Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  /* MAIN CARD */
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 8,

    elevation: 5,
  },

  /* HEADER */
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12344d',
  },

  subtitle: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 3,
  },

  /* ICON */
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#e8f4fb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 20,
    color: '#1976a3',
  },

  /* COUNT */
  countContainer: {
    alignItems: 'center',
    paddingVertical: 8,
  },

  countLabel: {
    fontSize: 12,
    color: '#78909c',
    marginBottom: 4,
  },

  count: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#12344d',
  },

  /* BUTTONS */
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },

  scanButton: {
    flex: 1,
    backgroundColor: '#1976a3',
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scanButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  resetButton: {
    flex: 1,
    backgroundColor: '#eef2f4',
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resetButtonText: {
    color: '#455a64',
    fontSize: 14,
    fontWeight: 'bold',
  },

  /* PRESS EFFECT */
  pressed: {
    opacity: 0.7,
  },
});