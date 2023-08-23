import request from '../request';

type News = {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  published_at: string;
  abstract: string;
  content?: string;
};

export const getNews = async (): Promise<News[]> => {
  return await request.get('/api/news');
};
