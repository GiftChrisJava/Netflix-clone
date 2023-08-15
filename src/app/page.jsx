import Image from "next/image";
import styles from "./page.module.css";

import FeatureImg1 from "../../public/feature-1.png";
import FeatureImg2 from "../../public/feature-2.png";
import FeatureImg3 from "../../public/feature-3.png";
import FeatureImg4 from "../../public/feature-4.png";

const Home = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.h1}>Unlimited movies, Tv shows and more</h1>
        <h3 className={styles.h3}>watch anywhere. Cancel anytime</h3>
        <p className={styles.p}>
          Ready to watch? Enter your email to create or restart your membership
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
            <h2 className={styles.h2}>Download your shows to watch offlince</h2>
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

      <div className={styles.faq}>
        <h2 className={styles.h2}>Frequently asked Questions</h2>

        <ul className={styles.accordion}>
          <li className={styles.li}>
            <input type="radio" name="accordion" id="first" />
            <label className={styles.label} for="first">
              What is Netflix
            </label>

            <div className={styles.content}>
              <p className={styles.p}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                dicta quasi odit optio vero dolore voluptatum, mollitia ut ullam
                expedita? Modi harum voluptas neque, nam corrupti blanditiis
                quae et nesciunt.
              </p>
            </div>
          </li>

          <li className={styles.li}>
            <input type="radio" name="accordion" id="second" />
            <label className={styles.label} for="second">
              How much Neflix cost ?
            </label>

            <div className={styles.content}>
              <p className={styles.p}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                dicta quasi odit optio vero dolore voluptatum, mollitia ut ullam
                expedita? Modi harum voluptas neque, nam corrupti blanditiis
                quae et nesciunt.
              </p>
            </div>
          </li>

          <li className={styles.li}>
            <input type="radio" name="accordion" id="third" />
            <label className={styles.label} for="third">
              Where can i watch ?
            </label>

            <div className={styles.content}>
              <p className={styles.p}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                dicta quasi odit optio vero dolore voluptatum, mollitia ut ullam
                expedita? Modi harum voluptas neque, nam corrupti blanditiis
                quae et nesciunt.
              </p>
            </div>
          </li>

          <li className={styles.li}>
            <input type="radio" name="accordion" id="fourth" />
            <label className={styles.label} for="fourth">
              How do i cancel ?
            </label>

            <div className={styles.content}>
              <p className={styles.p}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                dicta quasi odit optio vero dolore voluptatum, mollitia ut ullam
                expedita? Modi harum voluptas neque, nam corrupti blanditiis
                quae et nesciunt.
              </p>
            </div>
          </li>

          <li className={styles.li}>
            <input type="radio" name="accordion" id="firth" />
            <label className={styles.label} for="firth">
              What can i watch on Netflix ?
            </label>

            <div className={styles.content}>
              <p className={styles.p}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                dicta quasi odit optio vero dolore voluptatum, mollitia ut ullam
                expedita? Modi harum voluptas neque, nam corrupti blanditiis
                quae et nesciunt.
              </p>
            </div>
          </li>

          <li className={styles.li}>
            <input type="radio" name="accordion" id="sixth" />
            <label className={styles.label} for="sixth">
              Is Netflix good for kids?
            </label>

            <div className={styles.content}>
              <p className={styles.p}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                dicta quasi odit optio vero dolore voluptatum, mollitia ut ullam
                expedita? Modi harum voluptas neque, nam corrupti blanditiis
                quae et nesciunt.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
