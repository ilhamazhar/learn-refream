import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.sass";
import Navbar from "../components/Navbar";
import { FC } from "react";
import Image from "../components/Image";
import Footer from "../components/Footer";
import HobbyIcon from "../components/HobbyIcon";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} pt-16 md:pt-0`}>
      <Head>
        <title>Ilham Azhar</title>
        <meta name="description" content="Web profile CV-KU" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} home`}>
        <BasicProfileInfo />

        <Hobby />

        <Portfolio />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

const BasicProfileInfo: FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-10 md:w-3/4 items-center justify-center">
      {/* Profile pic */}

      <div className="rounded-xl overflow-hidden items-center justify-center place-items-center w-full md:w-auto">
        <Image
          src="pfp.png"
          className="items-center rounded-xl justify-center"
          alt="Profile pic"
          width="200px"
          height="200px"
        />
      </div>

      {/* Profile info */}

      <div className="md:pl-10">
        <div className="flex flex-col justify-left items-start text-left">
          <h1>Halo, nama saya</h1>
          <div className="profile-name text-5xl md:text-3xl font-extrabold">
            Ilham Azhar
          </div>

          <p className="w-96">
            Saya belajar Web 3
          </p>
        </div>
      </div>
    </div>
  );
};

const Hobby: FC = () => {
  return (
    <div className="flex flex-col p-4 md:p-10 md:w-3/4 items-center justify-center">
      {/* Profile pic */}

      <div className="text-center">
        <h2>Hobby</h2>
      </div>

      <div className="flex">
        <HobbyIcon caption="Reading" src="child-reading.svg" />
        <HobbyIcon caption="Calculating" src="icon-berhitung.svg" />
        <HobbyIcon caption="Coding" src="icon-ngoding.svg" />
      </div>
    </div>
  );
};

const Portfolio: FC = () => {
  return (
    <div className="portfolio w-full p-10">
      <div className="text-center">
        <h2>Portfolio</h2>
      </div>

      <div className="flex justify-center pt-5 space-x-2">
        <PortoItem
          title="Hello world"
          description="Praktik bahasa pemrograman"
        />
        <PortoItem title="Membuat web html" description="Praktik bahasa HTML" />
      </div>
    </div>
  );
};

const PortoItem: FC<any> = ({ title, description }) => {
  return (
    <div className="p-5 flex border-2 rounded-xl items-center porto-item w-72">
      <div className="">
        <Image
          src="icon-trophy.svg"
          alt="Trophy icon"
          width="60px"
          height="60px"
        />
      </div>
      <div className="pl-5">
        <div className="title cursor-pointer hover:underline">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};

