import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [isActive, setIsActive] = useState(true);
  const [gateScans, setGateScans] = useState(3);

  const handleScan = () => {
    setGateScans((prev) => prev + 1);
  };

  const handleReset = () => {
    setGateScans(0);
  };

  const togglePassStatus = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* ================= HEADER ================= */}

        <View style={styles.header}>

          <View style={styles.logo}>
            <Text style={styles.logoText}>D</Text>
          </View>

          <View style={styles.headerText}>
            <Text style={styles.title}>
              DOrSU Digital Campus Pass
            </Text>

            <Text style={styles.subtitle}>
              Student Identification & Campus Access
            </Text>
          </View>

          <View style={styles.settingsButton}>
            <Text style={styles.settingsIcon}>⚙</Text>
          </View>

        </View>

        {/* ================= STUDENT CARD ================= */}

        <View style={styles.studentCard}>

          <Image
            source={require('./assets/dave-profile.jpg')}
            style={styles.profileImage}
          />

          <View style={styles.studentInfo}>

            <Text style={styles.studentName}>
              Dave Harry L. Liparanon
            </Text>

            <Text style={styles.studentID}>
              Student ID: 2024-2278-MT
            </Text>

            <Text style={styles.infoText}>
              BS in Information Technology (BSIT)
            </Text>

            <Text style={styles.infoText}>
              3rd Year — Section F
            </Text>

            {/* ACTIVE / SUSPENDED */}

            <View
              style={[
                styles.statusBadge,
                isActive
                  ? styles.activeBadge
                  : styles.suspendedBadge,
              ]}
            >

              <View
                style={[
                  styles.statusDot,
                  isActive
                    ? styles.activeDot
                    : styles.suspendedDot,
                ]}
              />

              <Text
                style={[
                  styles.statusText,
                  isActive
                    ? styles.activeText
                    : styles.suspendedText,
                ]}
              >
                {isActive ? 'ACTIVE' : 'SUSPENDED'}
              </Text>

            </View>

          </View>

        </View>

        {/* ================= CAMPUS ACCESS ================= */}

        <View style={styles.card}>

          <View style={styles.sectionHeader}>

            <View style={styles.accessText}>
              <Text style={styles.cardTitle}>
                Campus Access
              </Text>

              <Text style={styles.cardSubtitle}>
                Main Campus (Guang-guang, Mati City)
              </Text>
            </View>

            {/* TOGGLE SWITCH */}

            <Pressable
              onPress={togglePassStatus}
              style={[
                styles.switch,
                isActive
                  ? styles.switchActive
                  : styles.switchInactive,
              ]}
            >

              <View
                style={[
                  styles.switchCircle,
                  isActive
                    ? styles.circleActive
                    : styles.circleInactive,
                ]}
              />

            </Pressable>

          </View>

          {/* CURRENT STATUS */}

          <View style={styles.accessStatus}>

            <Text style={styles.accessLabel}>
              Current Status
            </Text>

            <Text
              style={[
                styles.accessValue,
                isActive
                  ? styles.activeText
                  : styles.suspendedText,
              ]}
            >
              {isActive
                ? 'Access Granted'
                : 'Access Suspended'}
            </Text>

          </View>

          {/* SUSPEND / REACTIVATE */}

          <Pressable
            onPress={togglePassStatus}
            style={[
              styles.actionButton,
              isActive
                ? styles.suspendButton
                : styles.activateButton,
            ]}
          >

            <Text style={styles.actionButtonText}>
              {isActive
                ? 'Suspend Pass'
                : 'Reactivate Pass'}
            </Text>

          </Pressable>

        </View>

        {/* ================= GATE SCANS ================= */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Gate Scans
          </Text>

          <Text style={styles.cardSubtitle}>
            Total campus entry scans
          </Text>

          <Text style={styles.scanNumber}>
            {gateScans}
          </Text>

          {/* BUTTONS */}

          <View style={styles.scanButtons}>

            <Pressable
              onPress={handleScan}
              style={styles.scanButton}
            >

              <Text style={styles.scanButtonText}>
                + Scan
              </Text>

            </Pressable>

            <Pressable
              onPress={handleReset}
              style={styles.resetButton}
            >

              <Text style={styles.resetButtonText}>
                Reset
              </Text>

            </Pressable>

          </View>

        </View>

        {/* ================= FOOTER ================= */}

        <Text style={styles.footer}>
          DOrSU • Digital Campus Pass
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

/* =====================================================
   STYLES
===================================================== */

const styles = StyleSheet.create({

  /* ---------- MAIN SCREEN ---------- */

  safeArea: {
    flex: 1,
    backgroundColor: '#eef6ff',
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },

  /* ---------- HEADER ---------- */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1769aa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  headerText: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#12344d',
  },

  subtitle: {
    fontSize: 13,
    color: '#6b7c8f',
    marginTop: 3,
  },

  settingsButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#d9e1e8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingsIcon: {
    fontSize: 25,
    color: '#ffffff',
  },

  /* ---------- STUDENT CARD ---------- */

  studentCard: {
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

  profileImage: {
    width: 92,
    height: 92,
    borderRadius: 46,
    marginRight: 16,
  },

  studentInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  studentName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#12344d',
    marginBottom: 5,
  },

  studentID: {
    fontSize: 13,
    color: '#607d8b',
    marginBottom: 5,
  },

  infoText: {
    fontSize: 13,
    color: '#455a64',
    marginBottom: 3,
  },

  /* ---------- STATUS BADGE ---------- */

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

  suspendedBadge: {
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

  suspendedDot: {
    backgroundColor: '#d64545',
  },

  statusText: {
    fontSize: 11,
    fontWeight: 'bold',
  },

  activeText: {
    color: '#198754',
  },

  suspendedText: {
    color: '#d63333',
  },

  /* ---------- GENERAL CARD ---------- */

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
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#12344d',
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#78909c',
    marginTop: 5,
  },

  /* ---------- CAMPUS ACCESS ---------- */

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  accessText: {
    flex: 1,
    marginRight: 15,
  },

  /* ---------- TOGGLE ---------- */

  switch: {
    width: 56,
    height: 32,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },

  switchActive: {
    backgroundColor: '#198754',
  },

  switchInactive: {
    backgroundColor: '#b0bec5',
  },

  switchCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },

  circleActive: {
    alignSelf: 'flex-end',
  },

  circleInactive: {
    alignSelf: 'flex-start',
  },

  /* ---------- ACCESS STATUS ---------- */

  accessStatus: {
    marginTop: 20,
    padding: 15,
    borderRadius: 13,
    backgroundColor: '#f3f8fc',
  },

  accessLabel: {
    fontSize: 12,
    color: '#78909c',
  },

  accessValue: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
  },

  /* ---------- ACTION BUTTON ---------- */

  actionButton: {
    marginTop: 15,
    paddingVertical: 13,
    borderRadius: 11,
    alignItems: 'center',
  },

  suspendButton: {
    backgroundColor: '#fff0f0',
  },

  activateButton: {
    backgroundColor: '#e5f7ec',
  },

  actionButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#34495e',
  },

  /* ---------- GATE SCANS ---------- */

  scanNumber: {
    fontSize: 52,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1769aa',
    marginVertical: 18,
  },

  scanButtons: {
    flexDirection: 'row',
    gap: 10,
  },

  scanButton: {
    flex: 1,
    backgroundColor: '#1769aa',
    paddingVertical: 14,
    borderRadius: 11,
    alignItems: 'center',
  },

  scanButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  resetButton: {
    flex: 1,
    backgroundColor: '#eceff1',
    paddingVertical: 14,
    borderRadius: 11,
    alignItems: 'center',
  },

  resetButtonText: {
    color: '#455a64',
    fontSize: 15,
    fontWeight: 'bold',
  },

  /* ---------- FOOTER ---------- */

  footer: {
    textAlign: 'center',
    color: '#90a4ae',
    fontSize: 12,
    marginTop: 2,
  },

});