import { Image, StyleSheet, Text, View } from 'react-native';
import type { StudentProfile } from '../types/student';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export default function StudentCard({
  student,
  isActive,
}: StudentCardProps) {
  return (
    <View style={styles.card}>

      <View style={styles.photoContainer}>
        <Image
          source={{ uri: student.avatarUrl }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.info}>

        <Text style={styles.name}>
          {student.name}
        </Text>

        <Text style={styles.details}>
          ID: {student.idNumber}
        </Text>

        <Text style={styles.details}>
          {student.program}
        </Text>

        <Text style={styles.details}>
          {student.yearLevel}
        </Text>

        <Text style={styles.campus}>
          📍 {student.campus}
        </Text>

        <View
          style={
            isActive
              ? styles.activeBadge
              : styles.inactiveBadge
          }
        >
          <View
            style={
              isActive
                ? styles.activeDot
                : styles.inactiveDot
            }
          />

          <Text style={styles.badgeText}>
            {isActive ? 'ACTIVE' : 'SUSPENDED'}
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    borderWidth: 1,
    borderColor: '#DCEEFF',
  },

  photoContainer: {
    marginRight: 16,
    justifyContent: 'flex-start',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: '#B8DCFF',
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#123B70',
    marginBottom: 7,
  },

  details: {
    fontSize: 14,
    color: '#374957',
    marginBottom: 4,
  },

  campus: {
    fontSize: 13,
    color: '#607D8B',
    marginTop: 2,
    lineHeight: 19,
  },

  activeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#D8F8E3',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 10,
  },

  inactiveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FFE0E0',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 10,
  },

  activeDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#18A957',
    marginRight: 7,
  },

  inactiveDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#E53935',
    marginRight: 7,
  },

  badgeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#16833F',
  },
});