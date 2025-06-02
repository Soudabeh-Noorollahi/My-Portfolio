import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed w-screen border-b-2 xl:max-w-[1380px] border-b-neutral-100 mx-auto bg-white z-20">
      <div className="flex xl:px-20 px-5 xl:py-6 py-3 justify-between items-center">
        <span
          className="text-2xl font-bold tracking-wide text-violet-700"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          SOUDABEH NOUROLLHAI
        </span>
        <span className="hidden xl:block lg:block md:block">
          <ul className="flex gap-8">
            <li className="text-lg hover:text-purple-700">
              <Link>Services</Link>
            </li>
            <li className="text-lg hover:text-purple-700">
              <Link>About Me</Link>
            </li>
            <li className="text-lg hover:text-purple-700">
              <Link>Portfolio</Link>
            </li>
            <li className="text-lg hover:text-purple-700">
              <Link>Contact</Link>
            </li>
          </ul>
        </span>
        <span>
          <button className="bg-violet-600 xl:px-5 lg:px-5 md:px-5 px-1.5 xl:py-2 py-1 text-sm xl:text-lg rounded text-white font-semibold hover:bg-white hover:border hover:border-violet-600 hover:text-violet-600 transition-colors">
            Download CV
          </button>
        </span>
      </div>
    </header>
  );
}

export default Header;
