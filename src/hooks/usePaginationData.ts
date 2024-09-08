import { useState } from 'react';
import { useGetCoinsQuery } from '../store/reducers/coinsSlice';

const usePaginationData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const offset = (currentPage - 1) * pageSize; // Calculate the offset

  const { data, error, isFetching } = useGetCoinsQuery({ offset });
  return { data, setCurrentPage, error, isFetching, currentPage, pageSize };
};

export default usePaginationData;
