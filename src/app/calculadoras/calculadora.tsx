import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import * as Device from 'expo-device';
import { useState } from 'react';
import { Button, Platform, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';


export default function CalculadoraScreen () {  

  const [calcDisplay, setCalcDisplay] = useState("");
  const [operacao, setOperacao] = useState("");
  const [memoria, setMemoria] = useState(0);



const handleNumberPress = (number: string) => {
  setCalcDisplay((prevDisplay) => prevDisplay + number);
}
const handleOperationPress = (operation: string) => {
  if(operation === "+" || operation === "-" || operation === "*" || operation === "/"){
    if (calcDisplay !== "") {
      setMemoria(parseFloat(calcDisplay));
      setOperacao(operation);
            console.log(`operation: ${operation}, valor: ${calcDisplay}, operacao: ${operacao}`);
      setCalcDisplay("");
    }
  }else if (operation === "=") {
    let valor = parseFloat(calcDisplay);
    console.log(`memoria: ${memoria}, valor: ${valor}, operacao: ${operacao}`);
    if(operacao === "+"){
     let resultado = memoria + valor;
      setCalcDisplay(resultado.toString());
       setMemoria(0);
        setOperacao("");
    }
  }
}
  


 
 
  return (
    <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedView style={styles.heroSection}>

            <ThemedText style={styles.subtitle}>
              calculadora
            </ThemedText>
        
        
        <ThemedView style={styles.teclado}>
            <ThemedView style={styles.teclado_linha}>
                <TextInput
                  style={styles.input}
                  onChangeText={setCalcDisplay}
                  value={calcDisplay}
                  keyboardType="numeric"
                />
            </ThemedView>
            <ThemedView style={styles.teclado_linha}>
                <Button title="1" onPress={() => handleNumberPress('1')} /> <Button title="2" onPress={() => handleNumberPress('2')} /> <Button title="3" onPress={() => handleNumberPress('3')} />
        <Button title="+" onPress={() => handleOperationPress('+')} />
            </ThemedView>
            <ThemedView style={styles.teclado_linha}>
                <Button title="4" onPress={() => handleNumberPress('4')} /> <Button title="5" onPress={() => handleNumberPress('5')} /> <Button title="6" onPress={() => handleNumberPress('6')} />
        <Button title="-" onPress={() => handleOperationPress('-')} />
            </ThemedView>
            <ThemedView style={styles.teclado_linha}>
                <Button title="7" onPress={() => handleNumberPress('7')} /> <Button title="8" onPress={() => handleNumberPress('8')} /> <Button title="9" onPress={() => handleNumberPress('9')} />
        <Button title="*" onPress={() => handleOperationPress('*')} />
            </ThemedView>
            <ThemedView style={styles.teclado_linha}>
                <Button title="0" onPress={() => handleNumberPress('0')} />
        <Button title="=" onPress={() => handleOperationPress('=')} /> 
            </ThemedView>

        </ThemedView>

        </ThemedView>
        </SafeAreaView>
        </ThemedView>


  );


  }




const styles = StyleSheet.create({
    teclado: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
    },
    teclado_linha: {
        gap: Spacing.four,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
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
    justifyContent: 'center',
    borderWidth:1,

  },


});

