import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CatGame() {
  // 猫の画像のリスト
  const catImages = [
    require('../../assets/testDir/cat1.png'),
  ];

  // 状態管理
  const [touchCount, setTouchCount] = useState(0);  // タッチ回数
  const [catPosition, setCatPosition] = useState({
    top: Math.random() * 400,
    left: Math.random() * 300,
  });  // 猫のランダム位置
  const [catImage, setCatImage] = useState(catImages[Math.floor(Math.random() * catImages.length)]);  // ランダム猫画像

  // タッチイベントで猫を消してカウントを増加
  const handleCatPress = () => {
    setTouchCount(touchCount + 1);

    // 猫の位置をランダムに設定
    setCatPosition({
      top: Math.random() * 400,
      left: Math.random() * 300,
    });

    // 新しい猫の画像をランダムに設定
    setCatImage(catImages[Math.floor(Math.random() * catImages.length)]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>タッチ回数: {touchCount}</Text>

      <TouchableOpacity
        onPress={handleCatPress}
        style={[
          styles.catContainer,
          { top: catPosition.top, left: catPosition.left },
        ]}
      >
        <Image source={catImage} style={styles.catImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
  },
  catContainer: {
    position: 'absolute',
    width: 100,
    height: 100,
  },
  catImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
