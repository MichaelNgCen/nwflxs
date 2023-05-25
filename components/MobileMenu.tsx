import React from 'react';

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if(!visible) return null;

    return (
        <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col bottom-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">
                <p className="text-white px-3 text-center hover:underline ">Home</p>
                <p className="text-white px-3 text-center hover:underline ">Series</p>
                <p className="text-white px-3 text-center hover:underline ">Films</p>
                <p className="text-white px-3 text-center hover:underline ">New & Popular</p>
                <p className="text-white px-3 text-center hover:underline ">My List</p>
                <p className="text-white px-3 text-center hover:underline ">Browse by Language</p>
            </div>
        </div>
    );
}

export default MobileMenu;
    