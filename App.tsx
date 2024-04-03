import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import codePush from 'react-native-code-push';
let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

function App() {
  useEffect(() => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
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

export default codePush(codePushOptions)(App);
