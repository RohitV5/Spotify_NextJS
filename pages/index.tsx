import type { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Center from '../components/Center';
import Sidebar from '../components/Sidebar';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <div className="h-screen overflow-hidden bg-black">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex">
      <Sidebar />
      <Center />
      {/* Center  */}
    </main>
    <div>{/* Player  */}</div>
  </div>
);

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Home;
