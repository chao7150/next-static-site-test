import styles from "./FeaturedStreaming.module.css";
import Image, { StaticImageData } from "next/image";

export type Props = {
  heading: string;
  href: string;
  imgSrc: StaticImageData;
  alt: string;
  width: number;
};

export const Component = ({ heading, href, imgSrc, alt, width }: Props) => {
  return (
    <div className={styles.FeaturedStreaming}>
      <h3>{heading}</h3>
      <hr className={styles.Hr} />
      <a href={href}>
        <Image className={styles.Img} src={imgSrc} alt={alt} width={width} />
      </a>
    </div>
  );
};
