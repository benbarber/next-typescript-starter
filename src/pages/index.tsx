import React from 'react';
import Head from 'next/head';

import Link from '../components/link';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Next TypeScript Starter</title>
      <meta name="description" content="Next TypeScript Starter with TailwindCSS" />
      <meta name="robots" content="noindex" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="container mx-auto">
      <h1>Next TypeScript Starter</h1>

      <p>
        <Link href="https://github.com/benbarber/next-typescript-starter">View on GitHub</Link>
      </p>
    </main>
  </>
);

export default Home;
