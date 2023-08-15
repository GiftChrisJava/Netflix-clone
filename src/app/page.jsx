import Image from "next/image";
import styles from "./page.module.css";

import FeatureImg1 from "../../public/feature-1.png";
import FeatureImg2 from "../../public/feature-2.png";
import FeatureImg3 from "../../public/feature-3.png";
import FeatureImg4 from "../../public/feature-4.png";

const Home = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.h1}>Unlimited movies, Tv shows and more</h1>
          <h3 className={styles.h3}>watch anywhere. Cancel anytime</h3>
          <p className={styles.p}>
            Ready to watch? Enter your email to create or restart your
            membership
          </p>

          <form className={styles.emailSignup}>
            <input
              type="email"
              placeholder="Email Address"
              required
              className={styles.input}
            />

            <button className={styles.btn} type="submit">
              Get Started
            </button>
          </form>
        </div>

        <div className={styles.features}>
          <div className={styles.row}>
            <div className={styles.textCol}>
              <h2 className={styles.h2}>Enjoy on your Tv</h2>
              <p className={styles.p}>
                Watch on smart Tvs, playstations, Xbox, Chromecast, Apple Tv,
                Blu-ray players and more
              </p>
            </div>

            <div className={styles.imgCol}>
              <Image src={FeatureImg1} className={styles.img} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.imgCol}>
              <Image src={FeatureImg2} className={styles.img} />
            </div>
            <div className={styles.textCol}>
              <h2 className={styles.h2}>
                Download your shows to watch offlince
              </h2>
              <p className={styles.p}>
                save your favourites easily and always have something to watch
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.textCol}>
              <h2 className={styles.h2}>Watch Everywhere</h2>
              <p className={styles.p}>
                Watch on smart Tvs, playstations, Xbox, Chromecast, Apple Tv,
                Blu-ray players and more
              </p>
            </div>

            <div className={styles.imgCol}>
              <Image src={FeatureImg3} className={styles.img} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.imgCol}>
              <Image src={FeatureImg4} className={styles.img} />
            </div>
            <div className={styles.textCol}>
              <h2 className={styles.h2}>Enjoy on your Tv</h2>
              <p className={styles.p}>
                Watch on smart Tvs, playstations, Xbox, Chromecast, Apple Tv,
                Blu-ray players and more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
