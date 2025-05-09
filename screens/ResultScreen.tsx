import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ResultScreen({ score, onRestart }: { score: number, onRestart: () => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ゲーム終了！</Text>
      <Text style={styles.score}>あなたのスコア: {score}</Text>
      <Button title="もう一度" onPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 30, marginBottom: 20, color: '#fff' },
  score: { fontSize: 24, marginBottom: 20, color: '#fff' },
});
