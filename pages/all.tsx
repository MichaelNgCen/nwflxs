import { NextPageContext } from "next";
import { signOut, getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
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
  const { data: movies = [] } = useMovieList();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}></InfoModal>
      <Navbar></Navbar>
      <div className="pt-20">
        <MovieList title="All Music Videos" data={movies}></MovieList>
      </div>
    </>
  );
}
