import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from '../index';
import { endpoints } from '../endpoints';

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

const getPageBySlug = (slug: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IPage>> =>
  api.get(`${endpoints.BLOG_PAGE}/${slug}`, config);

const getNewsBySlug = (slug: string, config?: AxiosRequestConfig): Promise<AxiosResponse<INews>> =>
  api.get(`${endpoints.BLOG_NEWS}/${slug}`, config);

const getNews = (config?: AxiosRequestConfig): Promise<AxiosResponse<INews[]>> => api.get(`${endpoints.BLOG}`, config);

export const blogService = {
  getPageBySlug,
  getNewsBySlug,
  getNews,
};
