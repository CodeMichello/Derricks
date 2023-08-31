/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col pt-10">
          <img className="w-full" src="/about.png" alt="About" />
        </div>
        <div className="text-gray text-xl">
          <p className="pt-12">
            I’ve spent the last 4+ years creating human-centred user interfaces
            and experiences across e-Commerce/Marketplace, Prop-tech, Edtech and
            SaaS products and collaborating with engineers to implement them.
          </p>
          <p className="pt-12">
            I've had the pleasure of working with some talented and passionate
            people from 10 + countries with a shared goal of creating the best
            experience for the end users and achieving business goals.Some of
            the clients I've worked with include: Marbleflows, Anka, Kauri,
            Fleri health, Kaizenhd, Azone, Afiewura and Suku technologies.
          </p>
          <p className="pt-12">
            When I'm not designing, you'll find me either visiting a tourist
            attraction in another city or at a live concert shaking my slim
            body😀.
          </p>
        </div>
        <div className="bg-white p-20 rounded-sm text-xl mt-12">
          <p>
            I thought I will be an Electrical Engineer👷🏾‍♂️ helping generate power
            to the national grid. After graduation I was a Research and teaching
            assistant, also started a food business which I failed to scale. I
            then decided to learn a new skill and transitioned to Digital
            Product Design and Web development.{" "}
          </p>
          <br />
          <a href="https://ambitious.com.gh/my-life-after-uni-i-worked-for-hopin-academy-in-tamale-and-i-got-that-job-on-whatsapp-derrick-amenuve/">
            <span className="underline">Read more about my journey.</span>
          </a>
        </div>
        <div className="pt-16 flex pb-16">
          <div id="col-1">
            <div id="work-exp" className="max-w-xs">
              <h2 className="text-xl text-white font-semibold">
                Work experience💼
              </h2>
              <p className=" text-lg mt-4 text-white">Freelance</p>
              <p className=" text-gray">Digital Product Designer</p>
              <span className=" text-gray">Aug 2018 - Present</span>

              <p className=" text-lg mt-4 text-white">Marbleflows 🇫🇮</p>
              <p className=" text-gray">Digital Product Designer</p>
              <span className=" text-gray">Feb 2022 - Aug 2022</span>

              <p className="text-lg mt-4 text-white">ANKA 🇨🇮</p>
              <p className=" text-gray">User Experience Designer</p>
              <span className=" text-gray">Jan 2021 - Dec 2021</span>

              <p className="text-lg mt-4 text-white">Afiewura 🇬🇭</p>
              <p className=" text-gray">UX/UI Designer</p>
              <span className=" text-gray">Apr 2019 - May 2020</span>
            </div>

            <div id="education">
              <h2 className="text-xl font-semibold mt-12 text-white">
                Education🎓
              </h2>
              <p className=" mt-4 text-lg text-white">
                Interaction Design Foundation
              </p>
              <span className="text-gray ">User Experience Design</span>

              <p className=" mt-4 text-lg text-white">German-IBT</p>
              <span className="text-gray ">
                Human-Centred User Interface Design
              </span>

              <p className=" mt-4 text-lg text-white">
                Takoradi Technical University
              </p>
              <span className="text-gray ">
                Electrical/Electronic Engineering
              </span>
            </div>

            <div id="mentions">
              <h2 className="text-xl font-semibold mt-6 text-white">
                Mentions 🔗
              </h2>
              <p className="text-white hover:text-yellowish  mt-4 underline">
                <a href="https://www.afrikadesigners.com/site/derrick-amenuve">
                  10 beautifully designed websites by Africans
                </a>
              </p>
              <p className="text-white hover:text-yellowish mt-4 underline">
                <a href="https://3news.com/students-of-peki-shs-sec-tech-trained-in-entrepreneurial-skills/">
                  Tech training in high schools
                </a>
              </p>
              <p className="text-white hover:text-yellowish  mt-4 underline">
                <a href="https://wiforum.org/ghana/">
                  Shaping innovation in Ghana
                </a>
              </p>
            </div>
          </div>

          <div id="col-2" className="mx-auto max-w-xs">
            <h2 className="text-xl font-semibold text-white">Skills👨🏾‍💻</h2>
            <p className=" text-gray mt-4">
              User Experience Design, Analytical skills, Sketching /
              Wireframing, User-Flows, Personas , User Journeys , Usability
              Testing, A/B Testing, Visual Design, Interactive Prototyping.
            </p>

            <h2 className="text-xl font-semibold mt-12 text-white">Tools🛠️</h2>
            <p className=" text-gray mt-4">
              Pencil and paper, Whimsical, Figma, Adobe XD, Miro, Notion, Zeplin
            </p>

            <h2 className="text-xl font-semibold mt-12 text-white">Tech 👨🏾‍💻</h2>
            <p className=" text-gray mt-4">HTML , CSS, Ruby/ Rails</p>

            <h2 className="text-xl font-semibold mt-12 text-white">
              Listening 🎧
            </h2>
            <p className=" text-gray mt-4 underline">
              <a href="https://open.spotify.com/playlist/6iCu07rAGS1pPcv5eZxsPa?si=037ff68174e24fab&nd=1">
                From my fav artistes- Playlist
              </a>
            </p>
            <p className=" text-gray underline">
              <a href="https://music.apple.com/gh/playlist/francophone-vibes/pl.u-JPAZEDJuLa6qL2q">
                Curated songs from my visit in Lome🇹🇬
              </a>
            </p>

            <h2 className="text-xl font-medium mt-6 text-white">Reading 📚</h2>
            <p className="font-extralight text-gray mt-4">
              Don’t Make Me Think, Revisited- Steve Krug
            </p>
            <p className="font-extralight text-gray">UX Strategy- Jaime Levy</p>

            <h2 className="text-xl font-medium mt-6 text-white">Courses🎓</h2>
            <p className="font-extralight text-gray mt-4">
              Google UX Design Certificate
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
