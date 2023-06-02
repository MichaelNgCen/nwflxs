import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: user } = useCurrentUser();
  if (!visible) return null;

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/michaelngcen/");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/MichaelNgCen");
  };

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            className="w-8 rounded-md"
            src="/images/default-red.png"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline">
            {user?.name ?? "User"}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={handleLinkedInClick}
          className="px-3 text-center text-white text-sm hover:underline cursor-pointer"
        >
          LinkedIn
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={handleGithubClick}
          className="px-3 text-center text-white text-sm hover:underline cursor-pointer"
        >
          Github
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline cursor-pointer"
        >
          Sign Out of NWFLXS
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
