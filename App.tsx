import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text style={styles.title}>Appcenter implementation</Text>
        <Text style={styles.subtitle}>{`\u2022 Build Application`}</Text>
        <Text style={styles.subtitle}>{`\u2022 Test Application`}</Text>
        <Text style={styles.subtitle}>{`\u2022 Distribution Application`}</Text>
        <Text style={styles.subtitle}>{`\u2022 Distribution Application`}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
    fontSize: 35,
    color: 'tomato',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'blue',
  },
});

export default App;
