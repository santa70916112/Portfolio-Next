"use client";

import WelcomeModal from "@/components/custom/modal/welcome";
import Login from "./(components)/login";
import Main from "./(components)/main";

const Home: React.FC = () => {
  return (
    <>
      <Login />
      <Main/>
      <WelcomeModal/>
    </>
  );
};

export default Home;
