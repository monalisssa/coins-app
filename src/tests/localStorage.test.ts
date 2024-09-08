import { test, expect } from '@playwright/test';
import { localStorageManager } from '../utils/LocalStorageManager';
import { ICoin } from '../types/name';

test.describe('LocalStorageManager', () => {
  test.beforeEach(() => {
    localStorage.clear();
  });

  const coin: ICoin = {
    id: 'bitcoin',
    symbol: 'BTC',
    priceUsd: '50000',
    marketCapUsd: '950000000000',
    changePercent24Hr: '5',
    imageUrl: 'https://crypto.com/favicon.ico',
    count: 1,
    rank: '2',
    name: 'bitcoin',
  };

  test('getCoins should return an empty array when there are no coins stored', () => {
    expect(localStorageManager.getCoins()).toEqual([]);
  });

  test('addCoin should add a new coin', () => {
    const result = localStorageManager.addCoin(coin);
    expect(result).toEqual([coin]);
    expect(localStorage.getItem('coins')).toEqual(JSON.stringify([coin]));
  });

  test('addCoin should update an existing coin', () => {
    localStorageManager.addCoin(coin);
    const updatedCoin = { ...coin, priceUsd: '51000', count: 2 };
    const result = localStorageManager.addCoin(updatedCoin);
    expect(result).toEqual([
      {
        ...coin,
        priceUsd: 101000, // 50000 + 51000
        count: 3, // 1 + 2
      },
    ]);
  });

  test('removeCoin should remove an existing coin', () => {
    localStorageManager.addCoin(coin);
    const result = localStorageManager.removeCoin(coin);
    expect(result).toEqual([]);
    expect(localStorage.getItem('coins')).toEqual(JSON.stringify([]));
  });

  test('isAddedCoin should return true for an existing coin', () => {
    localStorageManager.addCoin(coin);
    expect(localStorageManager.isAddedCoin(coin)).toBe(true);
  });

  test('isAddedCoin should return false for a non-existing coin', () => {
    expect(localStorageManager.isAddedCoin(coin)).toBe(false);
  });
});
