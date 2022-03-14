import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  // eslint-disable-next-line prettier/prettier
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>This is a dope spotify 2.0 build</h1>
    <main>
      <Sidebar />
      {/* Center  */}
    </main>
    <div>{/* Player  */}</div>
  </div>
);

export default Home;
