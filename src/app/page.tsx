"use client";

import WelcomeModal from "@/components/custom/modal/welcome";
import Login from "./(components)/login";
import Main from "./(components)/main";
import DetailProfile from "./(components)/profile";
import SkillModal from "@/components/custom/modal/skill";

const Home: React.FC = () => {

  return (
    <div className="relative min-h-screen">
      <DetailProfile />
      <Login />
      <Main />
      <WelcomeModal />
      <SkillModal />
    </div>
  );
};

export default Home;
