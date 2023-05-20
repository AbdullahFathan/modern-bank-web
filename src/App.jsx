import styles from "./style";

import {
  Navbar,
  Hero,
  Billing,
  Business,
  Button,
  CTA,
  CardDeal,
  Client,
  Testimoni,
  Stats,
  FeedbackCard,
  Footer,
} from "./components";

const App = () => {
  return (
    //Navbar
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/*Stats Section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimoni />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
