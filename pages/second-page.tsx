import Link from 'next/link';
import { getAPIData } from '../lib/getAPIData';

export default function SecondPage({ allData }: { allData: any }) {
  const renderUsers = allData.map((data: any, index: number) => (
    <div key={index}>
      id: {data.id}, name: {data.name}, email: {data.email}
    </div>
  ));
  return (
    <>
      <h1>Second Page</h1>
      {renderUsers}
      <Link href="/post/blog-page">
        <a>blog-pageへ移動</a>
      </Link>
    </>
  );
}

export async function getStaticProps() {
  const allData = await getAPIData();
  return {
    props: {
      allData,
    },
  };
}
