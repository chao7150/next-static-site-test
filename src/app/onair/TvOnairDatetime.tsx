import styles from "./TvOnairDatetime.module.css";

export type Props = {
  channel: string;
  /**
   * 初回放送日
   */
  date: string;
  /**
   * 曜日
   */
  day: string;
  /**
   * 放送時刻
   */
  time: string;
  /**
   * 追加の説明文
   * htmlタグをエスケープしないのでユーザー入力を入れてはいけない
   */
  additionalText?: string;
};

export const Component: React.FC<Props> = ({
  channel,
  date,
  day,
  time,
  additionalText,
}) => {
  return (
    <div className={styles.TvOnairDatetime}>
      <div className={styles.Channel}>
        <div className={styles.ChannelLogo}>{channel}</div>
      </div>
      <div className={styles.Content}>
        <div className={styles.FirstEpisodeDateTime}>
          <span className={styles.Date}>{date}から</span>
          <div className={styles.Time}>
            <span>毎週{day}曜日</span>
            <span>{time}〜</span>
          </div>
        </div>
        {additionalText && (
          <div dangerouslySetInnerHTML={{ __html: additionalText }} />
        )}
      </div>
    </div>
  );
};
