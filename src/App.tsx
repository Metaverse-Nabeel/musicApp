import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>
          Music App
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;