import { Link } from "react-router-dom";
import {
  Info,
  Briefcase,
  BookOpen,
  Mail,
  MessageCircle,
  User,
  X,
  Menu,
  Quote,
} from "lucide-react";
import { useState } from "react";

const NavbarItem = {
  
  About: {
    name: "About",
    redirect: "/about",
    icon: <Info />,
  },
  Services: {
    name: "Services",
    redirect: "/services",
    icon: <Briefcase />,
  },
  Portfolio: {
    name: "Portfolio",
    redirect: "/portfolio",
    icon: <BookOpen />,
  },
  Blog: {
    name: "Blog",
    redirect: "/blog",
    icon: <Mail />,
  },
  Contact: {
    name: "Contact",
    redirect: "/contact",
    icon: <MessageCircle />,
  },
  Quote: {
    name: "Quote",
    redirect: "/quote",
    icon: <Quote />,
  },
  Career: {
    name: "Career",
    redirect: "/career",
    icon: <User />,
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white w-full fixed top-0 z-50">
      <Link to={'/'} className="text-xl font-bold">AimTech</Link>
      <div className="space-x-4">
        <ul className=" space-x-4 hidden md:flex">
          {Object.values(NavbarItem).map((item: any) => (
            <li
              key={item.name}
              className="text-lg flex item-center justify-space-around gap-2 hover:text-gray-400 transition-colors duration-200 cursor-pointer hover:bg-gray-800 p-2 rounded px-5"
            >
              <Link to={item.redirect || "#"}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Menu
        className={`md:hidden  ${!isOpen ? "block" : "hidden "} `}
        onClick={handleMenu}
      />
      <div
        className={`${
         ! isOpen
            ? "hidden"
            : "block "
        } space-x-4 md:hidden  absolute right-0 top-4 bg-gray-900 h-screen transition-transform duration-300 ease-in-out transform translate-x-0  `}
      >
        <button className="text-white hover:text-gray-400 ml-4">
          <X onClick={handleMenu} />
        </button>
        <ul className="flex flex-col space-y-4 p-4">
          {Object.values(NavbarItem).map((item: any) => (
            <li onClick={handleMenu}
              key={item.name}
              className="text-lg flex item-center justify-space-around gap-2  hover:text-gray-400 transition-colors duration-200 cursor-pointer hover:bg-gray-800 p-2 rounded px-5"
            >
              <span className="ml-2">{item.icon}</span>
              <Link to={item.redirect || "#"}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
