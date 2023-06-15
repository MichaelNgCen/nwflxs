import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;

  const handleAllMusicVideosClick = () => {
    window.location.href = "/all";
  };

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <button
          className="text-white px-3 text-center hover:underline"
          onClick={handleHomeClick}
        >
          Home
        </button>
        <button
          className="text-white px-3 text-center hover:underline"
          onClick={handleAllMusicVideosClick}
        >
          All Music Video
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
