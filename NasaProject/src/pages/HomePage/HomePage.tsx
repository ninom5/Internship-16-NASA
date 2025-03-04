import { useState } from "react";
import { EarthComponent } from "../../components";
import { AboutPage } from "../../components";
import { SwitchButton } from "../../components";
// import { FeatureCard } from "../../components/FeatureCard/FeatureCard";

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
      </section>

      <SwitchButton />

      <AboutPage />
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <FeatureCard
          title="Astronomy Picture of the Day"
          description="Explore NASA’s daily space image collection."
          image="https://example.com/apod.jpg"
          link="/astronomy"
        />
      </section> */}
    </main>
  );
};
