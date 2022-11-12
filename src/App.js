import Hero from "./fpages/Hero";
import Navbar from "./fpages/Navbar";
import Experience from "./fpages/Experience";
import Search from "./fpages/Search";
import Download from "./fpages/Download";
import Footer from "./fpages/Footer";
import styles from "./style";


function App() {
	return (
		<div className="w-full overflow-hidden text-white">
      <div className={`bg-[#081730] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
				<Experience/>
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
				<Search/>
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
				<Download/>
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
				<Footer/>
        </div>
      </div>
    </div>
	);
}

export default App;
