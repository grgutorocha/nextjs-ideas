export interface IAboutContainerProps {
  title?: string;
  text?: string;
}

export const AboutContainer = ({ title, text }: IAboutContainerProps) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {text && <div>{text}</div>}
    </div>
  );
};
