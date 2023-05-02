"use client";
import type { Session } from "next-auth";
import { signIn, signOut } from "~/components/client-only/next-auth";

const SessionHandler = ({ session }: { session: Session | null }) => {
  return session ? (
    <button
      onClick={() => void signOut()}
      className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
    >
      Logut
    </button>
  ) : (
    <button
      onClick={() => void signIn("google")}
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      Login
    </button>
  );
};
export default SessionHandler;
