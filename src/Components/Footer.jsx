/* eslint-disable react/no-unescaped-entities */
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return <></>;

  return (
    <footer className=" flex flex-col items-center">
      <p className="text-white font-extrabold md:text-6xl text-4xl p-5">
        Let's Connect
      </p>

      <p className="text-gray p-5">
        Got any opportunities? or just{" "}
        <a href="mailto:derrickamenuve@gmail.com">
          <span className="text-yellowish underline">say hi 👋</span>
        </a>
      </p>

      <div className="flex pt-5 pb-12 space-x-3">
        <a
          href="https://www.linkedin.com/in/derrickamenuve/?original_referer=https%3A%2F%2Fux-portfolio-ruby-ytcp.vercel.app%2F"
          target="_blanK"
          rel="noreferrer"
        >
          <img src="/linkedin.png" alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Derrickvibe"
          target="_blanK"
          rel="noreferrer"
        >
          <img src="/github.png" alt="Github" />
        </a>
        <a href="https://dev.to/godsloveady" target="_blanK" rel="noreferrer">
          <img src="/blog.png" alt="Blog" />
        </a>
        <a
          href="https://twitter.com/godsloveady/"
          target="_blanK"
          rel="noreferrer"
        >
          <img src="/twitter.png" alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/godsloveady/"
          target="_blanK"
          rel="noreferrer"
        >
          <img src="/insta.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
