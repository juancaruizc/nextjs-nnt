import Head from "next/head";
import Navbar from "../comps/NavBar";
import Footer from "../comps/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          jljkf;alsjfl;kfjaljalfjal;fjal;fjaslfjsdlj
        </p>
        <p className={styles.text}>
          jlsjfl;dksfjsdl;fjdsl;fjas;flsjfl;sjdf;lajflj
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
