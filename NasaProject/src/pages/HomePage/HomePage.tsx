import { useState } from "react";
import { EarthComponent } from "../../components";
import { AboutPage } from "../../components";
import { SwitchButton } from "../../components";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main id="main">
      <section className="hero-section">
        {isLoading && (
          <h2 className="loading-message">
            Earth interaction animation is being loaded...
          </h2>
        )}
        <EarthComponent onLoad={() => setIsLoading(false)} />
        <p>Try clicking on mars</p>
        <SwitchButton />
      </section>

      <AboutPage />
    </main>
  );
};
