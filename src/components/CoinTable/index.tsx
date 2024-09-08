import React, { useCallback, useMemo } from 'react';
import { Table } from 'antd';
import { filterData } from '../../helpers/filterData';
import { useTableColumns } from '../../hooks/useTableColumns';
import AddCoinForm from '../AddCoinForm';
import { useNavigate } from 'react-router-dom';
import usePaginationData from '../../hooks/usePaginationData';
import useModal from '../../hooks/useModal';
import { ICoin, ICoinTableProps } from '../../types/name';

const CoinTable: React.FC<ICoinTableProps> = ({ searchCoins, error: searchError, loading }) => {
  const { isModalOpen, handleOpenModalCard, handleCloseModal, data } = useModal();
  const navigate = useNavigate();

  const {
    data: coins,
    error,
    isFetching,
    setCurrentPage,
    currentPage,
    pageSize,
  } = usePaginationData();

  const tableColumns = useTableColumns(handleOpenModalCard);

  const handleRowClick = useCallback(
    (record: ICoin) => {
      navigate(`/about/${record.id}`);
    },
    [navigate],
  );

  const totalRecords = useMemo(() => {
    return searchCoins && searchCoins.length > 0 ? searchCoins.length : 2000;
  }, [searchCoins]);

  const dataSource = useMemo(() => {
    if (searchCoins && searchCoins.length > 0) return filterData(searchCoins);
    else return filterData(coins);
  }, [searchCoins, coins]);

  return (
    <>
      {(error || searchError) && <p>Error loading data! Try again!</p>}

      {searchCoins && searchCoins.length <= 0 && <p>No results!</p>}

      {!error && !searchError && ((searchCoins?.length ?? 0) > 0 || !searchCoins) && (
        <Table
          loading={loading || isFetching}
          columns={tableColumns}
          dataSource={dataSource}
          pagination={{
            total: totalRecords,
            current: currentPage,
            pageSize: pageSize,
            onChange: (page) => {
              setCurrentPage(page);
            },
          }}
          scroll={{ x: 'max-content' }}
          bordered
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        />
      )}

      {isModalOpen && data && (
        <AddCoinForm coin={data} isModalOpen={isModalOpen} handleModalClose={handleCloseModal} />
      )}
    </>
  );
};

export default CoinTable;
