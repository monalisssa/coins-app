import { test, expect } from '@playwright/test';
import { filterData } from '../helpers/filterData';
import { ICoin } from '../types/name'; // Adjust the import path as needed

test.describe('filterData', () => {
  test('should return an empty array for undefined input', () => {
    expect(filterData(undefined)).toEqual([]);
  });

  test('should return an empty array for an empty array input', () => {
    expect(filterData([])).toEqual([]);
  });

  test('should filter out items with priceUsd <= 0', () => {
    const data: ICoin[] = [
      {
        id: 'bitcoin',
        symbol: 'BTC',
        priceUsd: '50000',
        marketCapUsd: '950000000000',
        changePercent24Hr: '5',
        imageUrl: 'https://crypto.com/favicon.ico',
        count: 1,
        rank: '2',
        name: 'Bitcoin',
      },
      {
        id: 'bitcoin-negative',
        symbol: 'BTC',
        priceUsd: '-50000',
        marketCapUsd: '950000000000',
        changePercent24Hr: '5',
        imageUrl: 'https://crypto.com/favicon.ico',
        count: 1,
        rank: '2',
        name: 'Bitcoin Negative',
      },
    ];

    expect(filterData(data)).toEqual([
      {
        id: 'bitcoin',
        symbol: 'BTC',
        priceUsd: '50000',
        marketCapUsd: '950000000000',
        changePercent24Hr: '5',
        imageUrl: 'https://crypto.com/favicon.ico',
        count: 1,
        rank: '2',
        name: 'Bitcoin',
      },
    ]);
  });

  test('should filter out items with invalid marketCapUsd or changePercent24Hr', () => {
    const data: ICoin[] = [
      {
        id: 'bitcoin',
        symbol: 'BTC',
        priceUsd: '50000',
        marketCapUsd: '950000000000',
        changePercent24Hr: '5',
        imageUrl: 'https://crypto.com/favicon.ico',
        count: 1,
        rank: '2',
        name: 'Bitcoin',
      },
      {
        id: 'bitcoin-invalid',
        symbol: 'BTC',
        priceUsd: '50000',
        marketCapUsd: undefined, // Invalid
        changePercent24Hr: '5',
        imageUrl: 'https://crypto.com/favicon.ico',
        count: 1,
        rank: '2',
        name: 'Bitcoin Invalid',
      },
    ];

    expect(filterData(data)).toEqual([
      {
        id: 'bitcoin',
        symbol: 'BTC',
        priceUsd: '50000',
        marketCapUsd: '950000000000',
        changePercent24Hr: '5',
        imageUrl: 'https://crypto.com/favicon.ico',
        count: 1,
        rank: '2',
        name: 'Bitcoin',
      },
    ]);
  });

  test('should return all valid items', () => {
    const data: ICoin[] = [
      {
        id: 'bitcoin',
        symbol: 'BTC',
        priceUsd: '50000',
        marketCapUsd: '950000000000',
        changePercent24Hr: '5',
        imageUrl: 'https://crypto.com/favicon.ico',
        count: 1,
        rank: '2',
        name: 'Bitcoin',
      },
      {
        id: 'bitcoin-negative',
        symbol: 'BTC',
        priceUsd: '-50000',
        marketCapUsd: '950000000000',
        changePercent24Hr: '5',
        imageUrl: 'https://crypto.com/favicon.ico',
        count: 1,
        rank: '2',
        name: 'Bitcoin Negative',
      },
    ];

    expect(filterData(data)).toEqual([
      {
        id: 'bitcoin',
        symbol: 'BTC',
        priceUsd: '50000',
        marketCapUsd: '950000000000',
        changePercent24Hr: '5',
        imageUrl: 'https://crypto.com/favicon.ico',
        count: 1,
        rank: '2',
        name: 'Bitcoin',
      },
    ]);
  });
});
