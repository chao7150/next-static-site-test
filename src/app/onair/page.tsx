import * as Header from "./Header";
import * as FeaturedStreaming from "./FeaturedStreaming";
import * as TvOnairDatetime from "./TvOnairDatetime";
import styles from "./page.module.css";
import TbbImg from "../../../public/xwyu2lw2warplax703ao.jpg";

export default function OnAir() {
  return (
    <main>
      <nav></nav>
      <article className={styles.Article}>
        <header>
          <h2>ONAIR</h2>
        </header>
        <section className={styles.TvSection}>
          <Header.Component
            heading="放送情報"
            text="TOKYO MXほかにて4月から放送開始！"
          />
          <ul className={styles.ChannelList}>
            {[
              {
                channel: "TOKYO MX",
                date: "4月4日",
                day: "火",
                time: "24:00",
              },
              {
                channel: "AT-X",
                date: "4月5日",
                day: "水",
                time: "22:00",
                additionalText:
                  "<span>【リピート放送】<br>毎週金曜日10:00〜／毎週火曜日16:00〜</span>",
              },
              {
                channel: "北陸朝日放送",
                date: "4月5日",
                day: "水",
                time: "25:58",
              },
              {
                channel: "BS朝日",
                date: "4月7日",
                day: "金",
                time: "23:00",
              },
              {
                channel: "関西テレビ放送",
                date: "4月9日",
                day: "日",
                time: "25:59",
              },
            ].map((item) => {
              return (
                <li key={item.channel}>
                  <TvOnairDatetime.Component {...item} />
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <Header.Component
            heading="配信情報"
            text="地上波放送同時！ DMM TVにて先行配信決定！"
          />
          <ul className={styles.EarlyStreamings}>
            {[
              {
                heading: "4月4日から　毎週火曜日23:00～",
                href: "#",
                imgSrc: TbbImg,
                alt: "",
                width: 200,
              },
              {
                heading: "4月9日から　毎週日曜日23:00～",
                href: "#",
                imgSrc: TbbImg,
                alt: "",
                width: 200,
              },
            ].map((item) => {
              return (
                <li key={item.heading}>
                  <FeaturedStreaming.Component {...item} />
                </li>
              );
            })}
            <li></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
