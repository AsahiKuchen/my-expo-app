import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TouchExample(){
  const [touchInfo, setTouchInfo] = useState<string>('タッチを待ってます');

  const handlePress = (e: any) => {
    const { locationX, locationY } = e.nativeEvent;
    setTouchInfo(`タッチされた位置: x: ${locationX}, y: ${locationY}`);

  };

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={handlePress} style={{ padding: 20, backgroundColor: 'skyblue' }}>
        <Text>タッチしてみてください</Text>
      </TouchableOpacity>
    </View>
  );
}

/*export default function HomeScreen(){
  console.log('HomeScreen renderer');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image 
        source={require('../../assets/testDir/sora7.png')}
        style = {{ width: 200, height: 200}}
      />
    </View>
  );
}*/