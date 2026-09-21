import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import Header from './src/components/Header';
import StudentCard from './src/components/StudentCard';
import ScanCounter from './src/components/ScanCounter';

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

        <Header />

        {/* ================= STUDENT CARD ================= */}

        <StudentCard
          student={{
            name: 'Dave Harry L. Liparanon',
            idNumber: '2024-2278-MT',
            program: 'BS in Information Technology (BSIT)',
            yearLevel: '3rd Year — Section F',
            avatarUrl: '',
            campus: 'Main Campus (Guang-guang, Mati City)',
          }}
          isActive={isActive}
        />

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

        <ScanCounter
          count={gateScans}
          onScan={handleScan}
          onReset={handleReset}
        />

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

  activeText: {
    color: '#198754',
  },

  suspendedText: {
    color: '#d63333',
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

  /* ---------- FOOTER ---------- */

  footer: {
    textAlign: 'center',
    color: '#90a4ae',
    fontSize: 12,
    marginTop: 2,
  },
});