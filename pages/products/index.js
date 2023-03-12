import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  // render data
  return (
    <ul>
      {data.map((dat) => {
        return (
          <li key={dat.id}>
            {dat?.name}: {dat?.description}, price: {dat?.price} {dat?.currency}
            , category: {dat?.category}
          </li>
        );
      })}
    </ul>
  );
}
