import NavBarItem from "./NavBarItem";


const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90 ">
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavBarItem label="Home" />
          <NavBarItem label="Series" />
          <NavBarItem label="Films" />
          <NavBarItem label="New & Popular" />
          <NavBarItem label="My List" />
          <NavBarItem label="Browse by Language" />
        </div>
        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
