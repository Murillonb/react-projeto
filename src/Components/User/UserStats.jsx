import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import { STATS_GET } from '../../api';
import UserStatsGraphs from './UserStatsGraphs';

const UserStats = () => {
  const { data, loading, error, request } = useFetch();
  const token = window.localStorage.getItem('token');
  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <div>
        <Head title="Statistics" />
        <UserStatsGraphs data={data} />
      </div>
    );
  } else return null;
};

export default UserStats;
