import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { NEXT_AUTH } from "./lib/auth";

export default async function Home() {
  // const session = useSession();      // we can't do this in server component
  const session = await getServerSession(NEXT_AUTH);

  return (
    <div>
      <Appbar />

      {JSON.stringify(session)};
    </div>
  );
}
