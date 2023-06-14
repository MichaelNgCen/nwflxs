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

export default function Home() {
  // const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  const trendingMovies = movies.slice(0, 4); // Limit to 4 movies

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}></InfoModal>
      <Navbar></Navbar>
      <Billboard></Billboard>
      <div className="pb-40">
        <MovieList title="Trending Now" data={trendingMovies}></MovieList>
        <MovieList title="My List" data={favorites}></MovieList>
      </div>
    </>
  );
}
