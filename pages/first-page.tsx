import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAPIData } from '../lib/getAPIData';
export default function FirstPost() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getAPIData();
      setData(res);
    };
    getData();
  }, []);
  return (
    <>
      <h1>FirstPost</h1>
      <Link href="/post/blog-page">blog-pageへ移動</Link>
    </>
  );
}
