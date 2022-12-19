interface IPage {
  title?: string;
  text?: string;
}

interface INews {
  title: string;
  subTitle?: string;
  description?: string;
  text?: string;
}

const aboutPage: IPage = {
  title: 'About Page',
  text: 'About text',
};

const newsBySlug: INews = {
  title: 'News title',
  subTitle: 'News subtitle',
  description: 'News description',
  text: 'News text',
};

const news: INews[] = [
  {
    title: 'News title 1',
    subTitle: 'News subtitle 1',
    description: 'News description 1',
    text: 'News text 1',
  },
  {
    title: 'News title 2',
    subTitle: 'News subtitle 2',
    description: 'News description 2',
    text: 'News text 2',
  },
  {
    title: 'News title 3',
    subTitle: 'News subtitle 3',
    description: 'News description 3',
    text: 'News text 3',
  },
];

export const blogMock = {
  aboutPage,
  newsBySlug,
  news,
};
