import { useState } from "react";
import { EarthComponent } from "../../components";
import { AboutSection } from "../../components";
import { SwitchButton } from "../../components";
import { HomePageLoader } from "../../components";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main id="main">
      <section className="hero-section">
        {isLoading && <HomePageLoader />}

        <EarthComponent onLoad={() => setIsLoading(false)} />
        <p>Try clicking on mars</p>
        <SwitchButton />
      </section>

      <AboutSection />
    </main>
  );
};
