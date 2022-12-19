import Head from 'next/head';
import { GetStaticProps } from 'next';

import { AboutContainer, IAboutContainerProps } from '../../../containers/Blog/About';
import { blogService } from '../../../api/services/blog';

interface IGetStaticProps {
  about: IAboutContainerProps;
}

interface IAboutProps {
  about: IAboutContainerProps;
}

const About = ({ about }: IAboutProps) => {
  return (
    <>
      <Head>
        <title>About | Blog</title>
        <meta name="description" content="Simple blog about." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutContainer {...about} />
    </>
  );
};

export const getStaticProps: GetStaticProps<IGetStaticProps> = async () => {
  const { data } = await blogService.getPageBySlug('about');

  return {
    props: {
      about: data,
    },
  };
};

export default About;
