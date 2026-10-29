import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type CalculatorKeyProps = {
  label: string;
  onPress: () => void;
  variant?: 'number' | 'operator' | 'equals';
  wide?: boolean;
};

function CalculatorKey({
  label,
  onPress,
  variant = 'number',
  wide = false,
}: CalculatorKeyProps) {
  const variantStyle: ViewStyle =
    variant === 'equals'
      ? styles.equalsKey
      : variant === 'operator'
        ? styles.operatorKey
        : styles.numberKey;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.key,
        variantStyle,
        wide && styles.wideKey,
        pressed && styles.keyPressed,
      ]}>
      <Text style={styles.keyText}>{label}</Text>
    </Pressable>
  );
}

export default function CalculadoraScreen() {
  const [calcDisplay, setCalcDisplay] = useState("");
  const [operacao, setOperacao] = useState("");
  const [memoria, setMemoria] = useState(0);

  const handleNumberPress = (number: string) => {
    setCalcDisplay((prevDisplay) => prevDisplay + number);
  }

  const handleOperationPress = (operation: string) => {
    if (operation === "+" || operation === "-" || operation === "*" || operation === "/") {
      if (calcDisplay !== "") {
        setMemoria(parseFloat(calcDisplay));
        setOperacao(operation);
        setCalcDisplay("");
      }
    } else if (operation === "=") {
      let valor = parseFloat(calcDisplay);
      if (operacao === "+") {
        let resultado = memoria + valor;
        setCalcDisplay(resultado.toString());
        setMemoria(0);
        setOperacao("");
      } else if (operacao === "-") {
        let resultado = memoria - valor;
        setCalcDisplay(resultado.toString());
        setMemoria(0);
        setOperacao("");
      } else if (operacao === "*") {
        let resultado = memoria * valor;
        setCalcDisplay(resultado.toString());
        setMemoria(0);
        setOperacao("");
      } else if (operacao === "/") {
        let resultado = memoria / valor;
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
          <ThemedText style={styles.title}>Calculadora</ThemedText>

          <ThemedView style={styles.teclado}>
            <ThemedView style={styles.displayCard}>
              <ThemedText style={styles.displayLabel}>RESULTADO</ThemedText>
              <TextInput
                style={styles.input}
                onChangeText={setCalcDisplay}
                value={calcDisplay}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#777986"
                selectionColor="#A78BFA"
                accessibilityLabel="Visor da calculadora"
              />
            </ThemedView>

            <ThemedView style={styles.teclado_linha}>
              <CalculatorKey label="1" onPress={() => handleNumberPress('1')} />
              <CalculatorKey label="2" onPress={() => handleNumberPress('2')} />
              <CalculatorKey label="3" onPress={() => handleNumberPress('3')} />
              <CalculatorKey label="+" variant="operator" onPress={() => handleOperationPress('+')} />
            </ThemedView>

            <ThemedView style={styles.teclado_linha}>
              <CalculatorKey label="4" onPress={() => handleNumberPress('4')} />
              <CalculatorKey label="5" onPress={() => handleNumberPress('5')} />
              <CalculatorKey label="6" onPress={() => handleNumberPress('6')} />
              <CalculatorKey label="−" variant="operator" onPress={() => handleOperationPress('-')} />
            </ThemedView>

            <ThemedView style={styles.teclado_linha}>
              <CalculatorKey label="7" onPress={() => handleNumberPress('7')} />
              <CalculatorKey label="8" onPress={() => handleNumberPress('8')} />
              <CalculatorKey label="9" onPress={() => handleNumberPress('9')} />
              <CalculatorKey label="×" variant="operator" onPress={() => handleOperationPress('*')} />
            </ThemedView>

            <ThemedView style={styles.teclado_linha}>
              <CalculatorKey label="0" wide onPress={() => handleNumberPress('0')} />
              <CalculatorKey label="=" variant="equals" onPress={() => handleOperationPress('=')} />
              <CalculatorKey label="÷" variant="operator" onPress={() => handleOperationPress('/')} />
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111218',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
  },
  heroSection: {
    flex: 1,
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
    justifyContent: 'center',
    gap: Spacing.four,
    backgroundColor: 'transparent',
  },
  title: {
    color: '#F6F4FF',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  teclado: {
    width: '100%',
    padding: Spacing.three,
    gap: Spacing.two,
    borderRadius: 28,
    backgroundColor: '#1B1C24',
  },
  teclado_linha: {
    flexDirection: 'row',
    gap: Spacing.two,
    backgroundColor: 'transparent',
  },
  displayCard: {
    minHeight: 132,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    marginBottom: Spacing.one,
    borderRadius: 20,
    backgroundColor: '#252630',
  },
  displayLabel: {
    color: '#9293A1',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.8,
  },
  input: {
    width: '100%',
    padding: 0,
    color: '#FFFFFF',
    fontSize: 42,
    lineHeight: 52,
    fontWeight: '500',
    textAlign: 'right',
  },
  key: {
    flex: 1,
    minWidth: 0,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  numberKey: {
    backgroundColor: '#30313B',
  },
  operatorKey: {
    backgroundColor: '#393344',
  },
  equalsKey: {
    backgroundColor: '#8B5CF6',
  },
  wideKey: {
    flex: 2,
  },
  keyPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.97 }],
  },
  keyText: {
    color: '#F7F5FF',
    fontSize: 23,
    fontWeight: '600',
  },
});

