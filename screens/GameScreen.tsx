import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const catImages = [
  require('../assets/testDir/cat1.png'),
  require('../assets/testDir/cat2.png'),
];

export default function GameScreen({ onEnd }: { onEnd: (score: number) => void }) {
  const [score, setScore] = useState(0);
  const [catPos, setCatPos] = useState({ top: 200, left: 100 });
  const [catImage, setCatImage] = useState(catImages[0]);
  const [timeLeft, setTimeLeft] = useState(10); // 30秒制限

  // カウントダウン
  useEffect(() => {
    if (timeLeft <= 0) {
      onEnd(score);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleTouch = () => {
    setScore(score + 1);
    setCatImage(catImages[Math.floor(Math.random() * catImages.length)]);
    setCatPos({
      top: Math.random() * 400,
      left: Math.random() * 300,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>スコア: {score}</Text>
      <Text style={styles.timer}>残り時間: {timeLeft}秒</Text>
      <TouchableOpacity
        onPress={handleTouch}
        style={[styles.cat, { top: catPos.top, left: catPos.left }]}
      >
        <Image source={catImage} style={styles.catImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  score: { fontSize: 24, textAlign: 'center', marginTop: 40 },
  timer: { fontSize: 20, textAlign: 'center', marginBottom: 20 },
  cat: { position: 'absolute', width: 100, height: 100 },
  catImage: { width: '100%', height: '100%' },
});
