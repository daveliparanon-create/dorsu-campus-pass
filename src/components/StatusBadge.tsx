import { StyleSheet, Text, View } from 'react-native';
import type { StatusBadgeProps } from '../types/student';

export default function StatusBadge({
  isActive,
}: StatusBadgeProps) {
  return (
    <View
      style={
        isActive
          ? styles.activeContainer
          : styles.inactiveContainer
      }
    >
      <View
        style={
          isActive
            ? styles.activeDot
            : styles.inactiveDot
        }
      />

      <View>
        <Text style={styles.title}>
          Campus Access
        </Text>

        <Text style={styles.subtitle}>
          {isActive
            ? 'Access is Active'
            : 'Access is Suspended'}
        </Text>
      </View>

      <View
        style={[
          styles.switch,
          isActive
            ? styles.switchActive
            : styles.switchInactive,
        ]}
      >
        <View
          style={
            isActive
              ? styles.switchCircleActive
              : styles.switchCircleInactive
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeContainer: {
    width: '100%',
    backgroundColor: '#F4FFFA',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D7F2E2',

    elevation: 3,
  },

  inactiveContainer: {
    width: '100%',
    backgroundColor: '#FFF7F7',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3D5D5',

    elevation: 3,
  },

  activeDot: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#D8F8E3',
    marginRight: 14,
  },

  inactiveDot: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFE0E0',
    marginRight: 14,
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#173F6F',
  },

  subtitle: {
    fontSize: 13,
    color: '#6B7C8F',
    marginTop: 3,
  },

  switch: {
    marginLeft: 'auto',
    width: 55,
    height: 31,
    borderRadius: 20,
    padding: 3,
    justifyContent: 'center',
  },

  switchActive: {
    backgroundColor: '#168BEA',
  },

  switchInactive: {
    backgroundColor: '#B0B8C0',
  },

  switchCircleActive: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
  },

  switchCircleInactive: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
});