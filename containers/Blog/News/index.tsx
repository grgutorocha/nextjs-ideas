export interface INewsContainerProps {
  title: string;
  subTitle?: string;
  description?: string;
  text?: string;
}

export const NewsContainer = ({ title, subTitle, description, text }: INewsContainerProps) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {subTitle && <h2>{subTitle}</h2>}
      {description && <p>{description}</p>}
      {text && <div>{text}</div>}
    </div>
  );
};
