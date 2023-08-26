import React from "react";

function Hero() {
  return (
    <section className=" py-16 lg:pt-24 lg:pb-10">
      <div className="flex flex-col items-center container mx-auto">
        <div className="pt-10 mx-8 lg:mx-44">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            I’m a product designer👨🏾‍💻 & failed entrepreneur based in Accra 🇬🇭
          </h1>
        </div>

        <div className="mx-8 lg:mx-44 mt-4 text-lg">
          <p className="text-gray">
            Currently open to new opportunities. Previously, I designed {""}
            <a href="https://www.marbleflows.com/">
              <span className="text-yellowish">Marbleflows</span>
            </a>{" "}
            {""}
            first SaaS app & designed digital products at {""}
            <a href="https://www.anka.africa/">
              <span className="text-yellowish">ANKA</span>
            </a>
            , {""}
            <a href="https://www.kauriafrica.com/">
              <span className="text-yellowish">Kauri</span>
            </a>
            , {""}
            <a href="https://afiewura.com/">
              <span className="text-yellowish">Afiewura</span>
            </a>{" "}
            {""}
            and other companies. Aside from design, I enjoy listening to music,
            talking to people and travelling. People say I’m dedicated and fun
            to work with. Want to work with me?
            <a href="mailto:derrickamenuve@gmail.com">
              <span className="text-yellowish"> say hi👋🏾</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
