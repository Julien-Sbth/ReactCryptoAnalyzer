import axios from 'axios';

export const fetchMarketData = async (coin = 'bitcoin') => {
  const res = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${coin}/market_chart`,
    { params: { vs_currency: 'usd', days: 30 } }
  );
  return res.data;
};

export const fetchTopCryptos = async () => {
  const res = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: true,
        price_change_percentage: '24h',
      },
    }
  );
  return res.data;
};

export const fetchCryptoDetails = async (id) => {
  const res = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`,
    {
      params: {
        localization: 'false',
        tickers: 'false',
        market_data: 'true',
        community_data: 'false',
        developer_data: 'false',
        sparkline: 'false',
      },
    }
  );
  return res.data;
}; 