import { gql, useQuery } from '@apollo/client';

function Graphql() {
  const EXCHANGE_RATES = gql`
    query GetExchangeRates {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `;

  const QUERY = gql`
    {
      clientes {
        nombre
        id
      }
    }
  `;

  const { loading, error, data } = useQuery(QUERY);

  console.log(data?.clientes);
  return (
    <>
      <p>graphql</p>
    </>
  );
}

export default Graphql;
