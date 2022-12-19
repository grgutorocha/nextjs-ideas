import { rest } from 'msw';

import { endpoints, mountUrl } from '../api/endpoints';
import { blogMock } from '../api/mocks/blog';

export const handlers = [
  rest.get(mountUrl(endpoints.BLOG), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(blogMock.news));
  }),
  rest.get(mountUrl(`${endpoints.BLOG_PAGE}/about`), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(blogMock.aboutPage));
  }),
  rest.get(mountUrl(`${endpoints.BLOG_NEWS}/slug`), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(blogMock.newsBySlug));
  }),
];
