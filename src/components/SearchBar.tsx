import React from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';

import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({
  value,
  onChangeText,
}: Props) {
  return (
    <TextInput
      placeholder="Search movies..."
      placeholderTextColor="#999"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.surface,
    marginTop: 0,
    margin: Spacing.md,
    borderRadius: 12,
    paddingHorizontal: 16,
    color: Colors.text,
    height: 50,
  },
});