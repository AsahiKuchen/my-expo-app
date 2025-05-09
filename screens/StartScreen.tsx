import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>猫タッチゲーム！</Text>
      <Button title="スタート" onPress={onStart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, marginBottom: 20, color: '#fff' },
});
