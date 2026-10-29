import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PitagorasScreen() {
  const [catetoA, onChangeCatetoA] = useState('');
  const [catetoB, onChangeCatetoB] = useState('');
  const [hipotenusa, onChangeHipotenusa] = useState('');

  const calc = () => {
    const ladosEmBranco = [catetoA, catetoB, hipotenusa].filter(
      (lado) => lado.trim() === '',
    ).length;

    if (ladosEmBranco !== 1) {
      alert(
        ladosEmBranco === 3
          ? 'Informe dois lados para calcular o terceiro.'
          : 'Deixe em branco o lado que deseja calcular.',
      );
      return;
    }

    const ladoA = Number(catetoA);
    const ladoB = Number(catetoB);
    const ladoC = Number(hipotenusa);
    let resultado: number;
    let mensagem: string;

    if (hipotenusa.trim() === '') {
      resultado = Math.sqrt(ladoA ** 2 + ladoB ** 2);
      mensagem = `A hipotenusa mede ${resultado.toFixed(4)}.`;
    } else if (catetoA.trim() === '') {
      const diferenca = ladoC ** 2 - ladoB ** 2;
      if (diferenca < 0) {
        alert('A hipotenusa deve ser maior que o cateto B.');
        return;
      }
      resultado = Math.sqrt(diferenca);
      mensagem = `O cateto A mede ${resultado.toFixed(4)}.`;
    } else if (catetoB.trim() === '') {
      const diferenca = ladoC ** 2 - ladoA ** 2;
      if (diferenca < 0) {
        alert('A hipotenusa deve ser maior que o cateto A.');
        return;
      }
      resultado = Math.sqrt(diferenca);
      mensagem = `O cateto B mede ${resultado.toFixed(4)}.`;
    } else {
      alert('Confira os valores informados.');
      return;
    }

    alert(mensagem);
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.content}>
          <ThemedText style={styles.title}>Teorema de Pitágoras</ThemedText>
          <ThemedText style={styles.description}>
            Calcule um lado do triângulo retângulo.
          </ThemedText>

          <ThemedView style={styles.formCard}>
            <ThemedView style={styles.formulaCard}>
              <ThemedText style={styles.formula}>a² + b² = c²</ThemedText>
              <ThemedText style={styles.formulaHint}>
                Deixe vazio o lado que deseja descobrir.
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.fields}>
              <ThemedView style={styles.field}>
                <ThemedText style={styles.fieldLabel}>Cateto A</ThemedText>
                <TextInput
                  accessibilityLabel="Medida do cateto A"
                  style={styles.input}
                  onChangeText={onChangeCatetoA}
                  value={catetoA}
                  placeholder="Informe o cateto A"
                  placeholderTextColor="#777986"
                  keyboardType="numeric"
                  selectionColor="#A78BFA"
                />
              </ThemedView>
              <ThemedView style={styles.field}>
                <ThemedText style={styles.fieldLabel}>Cateto B</ThemedText>
                <TextInput
                  accessibilityLabel="Medida do cateto B"
                  style={styles.input}
                  onChangeText={onChangeCatetoB}
                  value={catetoB}
                  placeholder="Informe o cateto B"
                  placeholderTextColor="#777986"
                  keyboardType="numeric"
                  selectionColor="#A78BFA"
                />
              </ThemedView>
              <ThemedView style={styles.field}>
                <ThemedText style={styles.fieldLabel}>Hipotenusa</ThemedText>
                <TextInput
                  accessibilityLabel="Medida da hipotenusa"
                  style={styles.input}
                  onChangeText={onChangeHipotenusa}
                  value={hipotenusa}
                  placeholder="Informe a hipotenusa"
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
              <Text style={styles.calculateButtonText}>Calcular lado</Text>
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
  formulaCard: {
    alignItems: 'center',
    padding: Spacing.three,
    gap: Spacing.one,
    borderRadius: 20,
    backgroundColor: '#252630',
  },
  formula: {
    color: '#C4B5FD',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
  },
  formulaHint: {
    color: '#9293A1',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
  },
  fields: {
    gap: Spacing.two,
    marginVertical: Spacing.one,
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
