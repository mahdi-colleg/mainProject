import React from 'react';
import {Section} from "@/components/layouts/section";
import {Banner, FeaturedCategories, MiniProductSlider} from "@/components";

export default function Home() {
  return (
      <>
          <Section>
              <Banner title={"do not miss amazing grocery Deals"}
                      subtitle={"sign up for the daily newsLetter"}
                      image={"/assets/images/fresh-apples.png"}
                      bgImage={"/assets/images/banner_bg.png"}
              />
          </Section>
          <Section>
              <div className="hidden sm:flex mb-[50px]">
                  <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
              </div>
              <FeaturedCategories/>
          </Section>
          <Section>
              <MiniProductSlider/>
          </Section>
      </>
  );
}
