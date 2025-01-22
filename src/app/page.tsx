"use client";

import WelcomeModal from "@/components/custom/modal/welcome";
import Login from "./(components)/login";
import Main from "./(components)/main";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Login />
      <Main/>
      <WelcomeModal/>
    </div>
  );
};

export default Home;
