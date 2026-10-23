import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import * as Device from 'expo-device';
import { useState } from 'react';
import { Button, Platform, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function getDevMenuHint() {
  if (Platform.OS === 'web') {  
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function BhaskaraScreen() {  
  const [a, onChangeA] = useState(0);
  const [b, onChangeB] = useState(0);
  const [c, onChangeC] = useState (0);
let delta = (b**2 - 4*a*c)

let resultado = ((-b + (delta)**0.5)/(2*a))

const   calc = () =>{


if (delta<0){
  alert ("resultado nao exite (delta é negativo)")
}

else if (delta == 0){
  resultado = ((-b*-1/(2*a)))
  alert (`Existe apenas uma raiz real: ${resultado.toFixed(2)}`)
}

else {
  let resultado2 = ((-b - (delta)**0.5)/(2*a))
  alert (`As raízes reais são: ${resultado.toFixed(2)} e ${resultado2.toFixed(2)}`)
}
}

  return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedView style={styles.heroSection}>

          <ThemedText type = "subtitle">
              bhaskara
          </ThemedText>
 
        <TextInput
          style={styles.input}
          onChangeText={onChangeA}
          value={a.toString()}
          placeholder="Enter A"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeB}
          value={b.toString()}
          placeholder="Enter B"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeC}
          value={c.toString()}
          placeholder="Enter C"
          keyboardType="numeric"
        />
        
        <Button title="Calcular" onPress={calc}/>
        </ThemedView>
        </SafeAreaView>
        </ThemedView>
  );
};


 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
    input: {
    flex: 0,
    justifyContent: 'center',
    borderWidth:1,
    flexDirection: 'row',
  },


});
