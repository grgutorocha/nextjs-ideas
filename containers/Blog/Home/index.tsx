import { v4 as uuid } from 'uuid';

interface INews {
  title: string;
  subTitle?: string;
  description?: string;
  text?: string;
}

export interface IHomeContainerProps {
  news: INews[];
}

export const HomeContainer = ({ news }: IHomeContainerProps) => {
  return (
    <div>
      <h1>Home</h1>
      {news.length > 0 && (
        <ul>
          {news.map((item) => (
            <li key={uuid()}>
              <h1>{item.title}</h1>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
