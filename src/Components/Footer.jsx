function Footer() {
  return (
    <footer className="bg-dark">
      <div>
        <hr className="text-gray" />
      </div>
      <div>
        <p className="text-gray">
          Got any opportunities? or just
          <a href="mailto:derrickamenuve@gmail.com">
            <span>say hi 👋</span>
          </a>
        </p>
      </div>
      <div className="flex">
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
