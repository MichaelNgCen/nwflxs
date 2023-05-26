import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { signOut, getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import VideoList from "@/components/VideoList";
import useVideoList from "@/hooks/useVideoList";

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
  const { data: user } = useCurrentUser();
  const { data: movies } = useVideoList();

  return (
    <>
      <Navbar></Navbar>
      <Billboard></Billboard>
      <div className="pb-40">
        <VideoList title="Trending Now" data={[movies]}></VideoList>
      </div>
    </>
  );
}
