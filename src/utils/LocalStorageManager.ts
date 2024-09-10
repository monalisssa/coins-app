import { ICoin } from '../types/name';

class LocalStorageManager {
  private readonly keyName: string = 'coins';

  public getCoins(): ICoin[] {
    const storedCoins = localStorage.getItem(this.keyName);
    return storedCoins ? JSON.parse(storedCoins) : [];
  }

  public setCoins(coins: ICoin[]) {
    localStorage.setItem(this.keyName, JSON.stringify(coins));
  }

  public addCoin(item: ICoin): ICoin[] {
    const coins = this.getCoins();

    const updatedCoins = coins.map((storedItem) =>
      storedItem.id === item.id
        ? {
            ...storedItem,
            priceUsd: String(Number(storedItem.priceUsd) + Number(item.priceUsd)),
            count: Number(storedItem.count) + Number(item.count),
          } // Обновляем стоимость
        : storedItem,
    );
    if (!this.isAddedCoin(item)) {
      updatedCoins.push(item);
    }

    localStorage.setItem(this.keyName, JSON.stringify(updatedCoins));
    return updatedCoins;
  }

  public removeCoin(item: ICoin) {
    const coins = this.getCoins();
    const updatedCoins = coins.filter((storedItem) => storedItem.id !== item.id);

    localStorage.setItem(this.keyName, JSON.stringify(updatedCoins));
    return updatedCoins;
  }

  public isAddedCoin(item: ICoin): boolean {
    return this.getCoins().some((storedItem) => storedItem.id === item.id);
  }
}

export const localStorageManager = new LocalStorageManager();
