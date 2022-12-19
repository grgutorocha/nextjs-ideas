import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { HomeContainer, IHomeContainerProps } from '../../containers/Blog/Home';
import { blogService } from '../../api/services/blog';

interface IBlogProps {
  news: IHomeContainerProps;
}

interface IGetServerSideProps {
  news: IHomeContainerProps;
}

const Blog = ({ news }: IBlogProps) => {
  return (
    <>
      <Head>
        <title>Home | Blog</title>
        <meta name="description" content="Simple blog home." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer {...news} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IGetServerSideProps> = async () => {
  const { data } = await blogService.getNews();

  return {
    props: {
      news: {
        news: data,
      },
    },
  };
};

export default Blog;
