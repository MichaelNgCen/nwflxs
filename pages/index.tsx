import { NextPageContext } from "next";
import { signOut, getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const shuffleArray = (array: any) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function Home() {
  // const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  const shuffledMovies = shuffleArray(movies); // Shuffle the movies array
  const trendingMovies = shuffledMovies.slice(0, 4); // Limit to 4 random movies
  const slicedMovies = shuffledMovies.slice(4); // Remove the first 4 movies from the array
  

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}></InfoModal>
      <Navbar></Navbar>
      <Billboard></Billboard>
      <div className="pb-40">
        <MovieList title="Trending Now" data={trendingMovies}></MovieList>
        <MovieList title="Newest" data={slicedMovies}></MovieList>
        <MovieList title="My List" data={favorites}></MovieList>
      </div>
    </>
  );
}
