import * as React from 'react';

import { News } from '@app/types/News';

interface NewsProps {
  news: News[];
}

export const NewsComponent = ({ news }: NewsProps) => {
  return news.map(newsItem => null);
};
