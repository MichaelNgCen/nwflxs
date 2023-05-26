import { isEmpty } from "lodash";
import React from "react";
import VideoCard from "./VideoCard";

interface VideoListProps {
  data: any[]; // Update the type of 'data' prop to an array
  title: string;
}

const VideoList: React.FC<VideoListProps> = ({ data, title }) => {
  if (isEmpty(data)) return null;

  return (
    <div className="px-4 cd:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <VideoCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
