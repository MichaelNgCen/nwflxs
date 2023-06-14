import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import NavBarItem from "./NavBarItem";
import { useCallback, useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((currentMobileMenu) => !currentMobileMenu);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((currentMobileMenu) => !currentMobileMenu);
  }, []);

  const handleSearch = () => {
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  const toggleSearchBar = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  const handleAllMusicVideosClick = () => {
    window.location.href = "/all";
  };

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img
          onClick={handleHomeClick}
          className="h-4 lg:h-7 cursor-pointer"
          src="/images/logo.png"
          alt="Logo"
        />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavBarItem label="Home" onClick={handleHomeClick} />
          <NavBarItem
            label="All Music Videos"
            onClick={handleAllMusicVideosClick}
          />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch onClick={toggleSearchBar} />
          </div>
          <div
            className={`search-bar-container ${showSearchBar ? "open" : ""}`}
          >
            <input
              type="text"
              placeholder="Titles, Artists, Genres"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`px-2 py-1 rounded-md outline-none bg-black text-white text-sm ${
                showSearchBar ? "" : "hidden"
              }`}
            />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>

          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-9 lg:w-10 rounded-md overflow-hidden">
              <img src="/images/default-red.png " alt="" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
