import styles from "./header.module.css";

export type Props = {
  heading: string;
  text: string;
};

export const Component = ({ heading, text }: Props) => {
  return (
    <header className={styles.Header}>
      <h3 className={styles.Heading}>{heading}</h3>
      <hr className={styles.Hr} />
      <p className={styles.Text}>{text}</p>
    </header>
  );
};
