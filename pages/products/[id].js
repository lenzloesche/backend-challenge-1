import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Products() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);
  console.log(data);
  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <li key={data?.id}>
      {data?.name}: {data?.description}, price: {data?.price} {data?.currency},
      category: {data?.category}
    </li>
  );
}
