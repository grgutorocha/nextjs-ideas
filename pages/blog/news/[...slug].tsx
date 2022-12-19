import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { NewsContainer, INewsContainerProps } from '../../../containers/Blog/News';
import { blogService } from '../../../api/services/blog';

interface INewsProps {
  news: INewsContainerProps;
}

interface IGetStaticProps {
  news: INewsContainerProps;
}

interface IGetStaticParams extends ParsedUrlQuery {
  slug: string[];
}

const News = ({ news }: INewsProps) => {
  return (
    <>
      <Head>
        <title>{`${news?.title} | Blog`}</title>
        <meta name="description" content={news?.description || 'Default description.'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsContainer {...news} />
    </>
  );
};

export const getStaticProps: GetStaticProps<IGetStaticProps, IGetStaticParams> = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const { data } = await blogService.getNewsBySlug(params.slug[0]);

  return {
    props: {
      news: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default News;
