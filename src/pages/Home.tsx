import React, { useState } from 'react';
import CoinTable from '../components/CoinTable';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { useSearchCoinsQuery } from '../store/reducers/coinsSlice';

const Home = () => {
  const [searchCoinId, setSearchCoinId] = useState<string | null>(null);
  const {
    data: searchCoins,
    error: searchError,
    isFetching: isSearchFetching,
  } = useSearchCoinsQuery(searchCoinId || '', {
    skip: !searchCoinId,
  });

  const handleSearch = (term: string) => {
    setSearchCoinId(term);
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <SearchBar onSearch={handleSearch} />
        {searchCoinId ? (
          <CoinTable searchCoins={searchCoins} error={searchError} loading={isSearchFetching} />
        ) : (
          <CoinTable />
        )}
      </div>
    </>
  );
};

export default Home;
