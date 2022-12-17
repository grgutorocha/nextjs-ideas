import Head from 'next/head';

import { ReorderTextContainer } from '../../containers/ReorderText';

const ReorderText = () => {
  return (
    <>
      <Head>
        <title>Reorder Text</title>
        <meta name="description" content="Simple application to reorder a text." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReorderTextContainer />
    </>
  );
};

export default ReorderText;
