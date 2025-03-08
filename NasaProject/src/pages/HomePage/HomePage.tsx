import { useState } from "react";
import {
  HomePageLoader,
  SwitchButton,
  AboutSection,
  EarthComponent,
} from "@components/index";
import { showAlert } from "@utils/showAlert";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
    showAlert({
      title: "Success",
      message: `Welcome to the NASA Explorer! 🚀  
        Explore the interactive Earth animation and try clicking on Mars! 🌍✨`,
      icon: "success",
    });
  };

  return (
    <main id="main">
      <section className="hero-section">
        {isLoading && <HomePageLoader />}

        <EarthComponent onLoad={handleLoad} />

        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 w-50 h-10 p-10 flex items-center justify-center rounded-full shadow-lg">
          <SwitchButton />
        </div>
      </section>

      <AboutSection />
    </main>
  );
};
