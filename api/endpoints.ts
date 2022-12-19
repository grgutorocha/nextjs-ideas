export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_ENDPOINT = '';

export const endpoints = {
  BLOG_PAGE: '/blog/page',
  BLOG_NEWS: '/blog/news',
  BLOG: '/blog',
};

export const mountUrl = (endpoint: string = ''): string => {
  return `${BASE_URL}${API_ENDPOINT}${endpoint}`;
};
