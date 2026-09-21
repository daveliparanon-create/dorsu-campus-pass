import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

      {/* PROFILE PHOTO */}
      <Image
        source={require('../../assets/dave-profile.jpg')}
        style={styles.avatar}
      />

      {/* STUDENT INFORMATION */}
      <View style={styles.info}>

        <Text style={styles.name}>
          {student.name}
        </Text>

        <Text style={styles.details}>
          Student ID: {student.idNumber}
        </Text>

        <Text style={styles.details}>
          {student.program}
        </Text>

        <Text style={styles.details}>
          {student.yearLevel}
        </Text>

        {/* ACTIVE / SUSPENDED */}
        <View
          style={[
            styles.statusBadge,
            isActive
              ? styles.activeBadge
              : styles.inactiveBadge,
          ]}
        >
          <View
            style={[
              styles.statusDot,
              isActive
                ? styles.activeDot
                : styles.inactiveDot,
            ]}
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
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 18,
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

  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    marginRight: 16,
  },

  info: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#12344d',
    marginBottom: 5,
  },

  details: {
    fontSize: 13,
    color: '#455a64',
    marginBottom: 3,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 7,
  },

  activeBadge: {
    backgroundColor: '#dff5e8',
  },

  inactiveBadge: {
    backgroundColor: '#fde4e4',
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },

  activeDot: {
    backgroundColor: '#20a05a',
  },

  inactiveDot: {
    backgroundColor: '#d64545',
  },

  badgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#198754',
  },
});