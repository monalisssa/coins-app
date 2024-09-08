import React from 'react';
import DetailsCard from '../components/DetailsCard';
import Graphic from '../components/Graphic';
import { useGetCoinQuery } from '../store/reducers/coinsSlice';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Loader from '../components/UI/Loader';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: coin, error, isFetching } = useGetCoinQuery(id!);

  return (
    <>
      <Header />
      <div className="wrapper">
        <Link to="/">
          <h4>&#8592; Home</h4>
        </Link>

        {isFetching && <Loader />}
        {error && <p>Error loading resource. Please try again.</p>}

        {!isFetching && !error && coin && (
          <>
            <DetailsCard coin={coin} />
            <Graphic coin={coin} />
          </>
        )}
      </div>
    </>
  );
};

export default Details;
