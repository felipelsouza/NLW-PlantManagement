import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Planta</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
