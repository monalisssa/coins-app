import { test, expect } from '@playwright/test';
import { formatCurrency, formatNumber } from '../helpers/formatPrice';

test.describe('Currency Formatting Functions', () => {
  test('formatCurrency should format numbers correctly', () => {
    expect(formatCurrency('1000')).toBe('1.00k');
    expect(formatCurrency('1500000')).toBe('1.50m');
    expect(formatCurrency('2000000000')).toBe('2.00b');
    expect(formatCurrency('-500')).toBe('-500.00');
    expect(formatCurrency('42')).toBe('42.00');
  });

  test('formatNumber should format numbers with commas', () => {
    expect(formatNumber('1234567')).toBe('1,234,567.00');
    expect(formatNumber('1000')).toBe('1,000.00');
    expect(formatNumber('0')).toBe('0.00');
    expect(formatNumber('-1234.56')).toBe('-1,234.56');
  });
});
