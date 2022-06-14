import type { NextPage } from 'next';
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

export default Home;
