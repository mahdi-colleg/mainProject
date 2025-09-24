import React from 'react';
import {Section} from "@/components/layouts/section";
import {Banner} from "@/components";

export default function Home() {
  return (
    <Section>
        <Banner title={"do not miss amazing grocery Deals"}
                subtitle={"sign up for the daily newsLetter"}
                image={"/assets/images/fresh-apples.png"}
                bgImage={"/assets/images/banner_bg.png"}
        />
    </Section>
  );
}
