import { test, expect } from '@playwright/test';
import { filterData } from '../helpers/filterData';

test.describe('filterData', () => {
  test('should return an empty array for undefined input', () => {
    expect(filterData(undefined)).toEqual([]);
  });

  test('should return an empty array for an empty array input', () => {
    expect(filterData([])).toEqual([]);
  });

  test('should filter out items with priceUsd <= 0', () => {
    const data = [
      { priceUsd: '0', marketCapUsd: 1000, changePercent24Hr: 5 },
      { priceUsd: '-1', marketCapUsd: 1000, changePercent24Hr: 5 },
      { priceUsd: '1', marketCapUsd: 1000, changePercent24Hr: 5 },
    ];
    expect(filterData(data)).toEqual([{ priceUsd: '1', marketCapUsd: 1000, changePercent24Hr: 5 }]);
  });

  test('should filter out items missing marketCapUsd or changePercent24Hr', () => {
    const data = [
      { priceUsd: '1', marketCapUsd: 1000, changePercent24Hr: 5 },
      { priceUsd: '2', marketCapUsd: undefined, changePercent24Hr: 5 },
      { priceUsd: '3', marketCapUsd: 1000, changePercent24Hr: undefined },
    ];
    expect(filterData(data)).toEqual([{ priceUsd: '1', marketCapUsd: 1000, changePercent24Hr: 5 }]);
  });

  test('should return all valid items', () => {
    const data = [
      { priceUsd: '2', marketCapUsd: 1000, changePercent24Hr: 5 },
      { priceUsd: '3', marketCapUsd: 1000, changePercent24Hr: 5 },
    ];
    expect(filterData(data)).toEqual(data);
  });
});
