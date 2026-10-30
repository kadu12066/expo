import {describe, expect, test} from   '@jest/globals';
import { calcDelta } from '../src/utils/bhaskara';
import { calcPitagoras } from '../src/utils/pitagoras';

describe('Bhaskara', () => {
  test('Delta negativo', () => {
      // Dado / Arrange
      const a = 1;
      const b = 1;
      const c = 1;
      // Quando / Act
      const resultado = calcDelta(a, b, c);
  
      
      expect(resultado).toBeLessThan(0);
    });
    test('Delta zerado', () => {
      
      const a = 1;
      const b = 2;
      const c = 1;
      // Quando / Act
      const resultado = calcDelta(a, b, c);
  
      
      expect(resultado).toBe(0);
    });
});

////////////////////////////////////////////////////////////////////








