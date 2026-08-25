import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello, Jhanalyn! Dedto kah MaNgutana sa porpis dol.,, 
         ayaw kog Gara garae dol.,,, ego ka ani Akung kinumo Henuktok 
         Jod Kah.,,,Ayaw seg...gAragara....dile ko madAla komedya...Ga 
         yama yama naka deha bossing..,,, ma sampolan taka sakong kinomo 
         ron...,,,,, awa lng ka.,,,, makahagit mora og sikinsang tawhana
        ..,,,,, fak yo nemo..,,,</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6b565',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
