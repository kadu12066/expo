import * as Device from 'expo-device';
import { Platform, StyleSheet ,  TextInput, useColorScheme,Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, } from 'react-native';
import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText} from '@/components/themed-text';
import { ThemedView  } from '@/components/themed-view';
import { WebBadge} from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useState } from 'react';
import { Host,  useNativeState } from '@expo/ui';


export function Calcular (){
  return(
(PitagorasScreen()) 

)}

export default function PitagorasScreen() {  

  const [catetoA, onChangeCatetoA] = useState(0);
  const[catetoB, onChangeCatetoB] = useState(0);
  const [hipotenusa, onChangeHipotenusa] = useState (0);

    let resultado = 0

         const 
          calc = () =>{
if (hipotenusa == 0){
  resultado = (catetoA**2 + catetoB**2)**0.5;
   console.log(resultado)
}


else if (catetoA == 0){
  resultado = (hipotenusa**2 - catetoB**2)**0.5;
   console.log(resultado)
}

else if (catetoB == 0){
   resultado = (hipotenusa**2 - catetoA**2)**0.5;
   console.log(resultado)
}
  }
 
 
  return (


      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedView style={styles.heroSection}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCatetoA}
          value={catetoA}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCatetoB}
          value={catetoB}
          keyboardType="numeric"
        />
           <TextInput
          style={styles.input}
          onChangeText={onChangeHipotenusa}
          value={hipotenusa}
          keyboardType="numeric"
        />

        <Button title="Calcular" onPress={calc}/>

        </ThemedView>
        </SafeAreaView>
        </ThemedView>


  )


  }




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
