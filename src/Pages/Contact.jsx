export default function Contact() {
  return (
    <>
      <div className="flex md:items-center flex-col md:mt-[10rem] pr-6 pl-6 mt-8">
        <h2 className="text-white md:text-center md:text-[3.25rem] text-4xl ">
          Hey 👋🏾, I’ll love to hear from you
        </h2>
        <p className="text-gray md:text-center text-2xl pt-4">
          we can work together, chit chat, grab a coffee ☕️ or eat fufu 🍲
        </p>
      </div>

      <div className="text-yellowish  text-3xl  mx-6 mt-14 space-y-4  md:space-x-8 md:flex md:items-center md:justify-center ">
        <div className="self-center">
          <a
            href="mailto:derrickamenuve@gmail.com"
            target="_blanK"
            rel="noreferrer"
          >
            <span className="hover:underline">Email</span>
          </a>
        </div>

        <div className="md:pb-4">
          <a
            href="https://www.linkedin.com/in/derrickamenuve/"
            target="_blanK"
            rel="noreferrer"
          >
            <span className="hover:underline">Linkedin</span>
          </a>
        </div>

        <div className="md:pb-4">
          <a
            href="https://www.twitter.com/godsloveady/"
            target="_blanK"
            rel="noreferrer"
          >
            <span className="hover:underline">Twitter</span>
          </a>
        </div>

        <div className="md:pb-4">
          <a
            href="https://instagram.com/godsloveady"
            target="_blanK"
            rel="noreferrer"
          >
            <span className="hover:underline">Instagram</span>
          </a>
        </div>
      </div>
    </>
  );
}
