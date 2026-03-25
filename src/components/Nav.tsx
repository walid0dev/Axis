import logo from "../../public/logo.svg";
const Nav = () => {
  return (
    <div>
      <nav className="py-4">
        <ul className="flex items-center justify-between">
          <li>
            <a href="/">
              <img src={logo} />
            </a>
          </li>
          <li className="text-md font-medium w-full flex justify-center">
            <div
              className="
            flex gap-x-8 [&>:not(:first-child)]:opacity-50
          *:first:text-indigo-600 *:cursor-pointer  

          "
            >
              <a href="#">Home</a>
              <a href="#">Collection</a>
              <a href="#">Magazine</a>
              <a href="#">FAQ</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
