import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BhaskaraScreen() {
  const [a, onChangeA] = useState('');
  const [b, onChangeB] = useState('');
  const [c, onChangeC] = useState('');

  const calc = () => {
    if ([a, b, c].some((value) => value.trim() === '')) {
      alert('Preencha os três coeficientes.');
      return;
    }

    const coeficienteA = Number(a);
    const coeficienteB = Number(b);
    const coeficienteC = Number(c);
    const delta = coeficienteB ** 2 - 4 * coeficienteA * coeficienteC;

    if (coeficienteA === 0) {
      alert('O coeficiente A precisa ser diferente de zero.');
    } else if (delta < 0) {
      alert('Não existem raízes reais porque o delta é negativo.');
    } else if (delta === 0) {
      const resultado = -coeficienteB / (2 * coeficienteA);
      alert(`Existe apenas uma raiz real: ${resultado.toFixed(2)}`);
    } else {
      const resultado1 = (-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA);
      const resultado2 = (-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA);
      alert(`As raízes reais são: ${resultado1.toFixed(2)} e ${resultado2.toFixed(2)}`);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.content}>
          <ThemedText style={styles.title}>Fórmula de Bhaskara</ThemedText>
          <ThemedText style={styles.description}>
            Encontre as raízes da equação do segundo grau.
          </ThemedText>

          <ThemedView style={styles.formCard}>
            <ThemedText style={styles.sectionLabel}>COEFICIENTES</ThemedText>
            <ThemedText style={styles.helper}>
              Preencha os valores de ax² + bx + c = 0
            </ThemedText>

            <ThemedView style={styles.fields}>
              <ThemedView style={styles.field}>
                <ThemedText style={styles.fieldLabel}>Valor de A</ThemedText>
                <TextInput
                  accessibilityLabel="Valor de A"
                  style={styles.input}
                  onChangeText={onChangeA}
                  value={a}
                  placeholder="Ex.: 1"
                  placeholderTextColor="#777986"
                  keyboardType="numeric"
                  selectionColor="#A78BFA"
                />
              </ThemedView>
              <ThemedView style={styles.field}>
                <ThemedText style={styles.fieldLabel}>Valor de B</ThemedText>
                <TextInput
                  accessibilityLabel="Valor de B"
                  style={styles.input}
                  onChangeText={onChangeB}
                  value={b}
                  placeholder="Ex.: -5"
                  placeholderTextColor="#777986"
                  keyboardType="numeric"
                  selectionColor="#A78BFA"
                />
              </ThemedView>
              <ThemedView style={styles.field}>
                <ThemedText style={styles.fieldLabel}>Valor de C</ThemedText>
                <TextInput
                  accessibilityLabel="Valor de C"
                  style={styles.input}
                  onChangeText={onChangeC}
                  value={c}
                  placeholder="Ex.: 6"
                  placeholderTextColor="#777986"
                  keyboardType="numeric"
                  selectionColor="#A78BFA"
                />
              </ThemedView>
            </ThemedView>

            <Pressable
              accessibilityRole="button"
              onPress={calc}
              style={({ pressed }) => [styles.calculateButton, pressed && styles.buttonPressed]}>
              <Text style={styles.calculateButtonText}>Calcular raízes</Text>
            </Pressable>
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
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    backgroundColor: 'transparent',
  },
  title: {
    color: '#F6F4FF',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    color: '#A5A5B2',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: Spacing.two,
  },
  formCard: {
    padding: Spacing.three,
    gap: Spacing.two,
    borderRadius: 28,
    backgroundColor: '#1B1C24',
  },
  sectionLabel: {
    color: '#A78BFA',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.8,
  },
  helper: {
    color: '#9293A1',
    fontSize: 14,
    lineHeight: 20,
  },
  fields: {
    gap: Spacing.two,
    marginTop: Spacing.one,
    marginBottom: Spacing.one,
    backgroundColor: 'transparent',
  },
  field: {
    gap: Spacing.one,
    backgroundColor: 'transparent',
  },
  fieldLabel: {
    color: '#E8E6F0',
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    minHeight: 54,
    paddingHorizontal: Spacing.three,
    borderWidth: 1,
    borderColor: '#393A46',
    borderRadius: 16,
    backgroundColor: '#252630',
    color: '#FFFFFF',
    fontSize: 17,
  },
  calculateButton: {
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#8B5CF6',
  },
  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  calculateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
