import Link from "next/link";
import { auth, signOut, signIn } from "../auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <header className="px-5 py-3 mx-5 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 font">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl">Pitch It!</h1>
        </Link>
        <div className="flex items-center gap-5 text-white">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>

                <button onClick={signOut}>
                  <span>Logout</span>
                </button>

                <Link href={`/user/${session?.user.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </Link>
            </>
          ) : (
            //This will not work since we are using server action in a client component (onClick is a client component)
            // <button
            //   onClick={async () => {
            //     //server action
            //     "use server";
            //     await signIn("github");
            //   }}
            // >
            //   Login
            // </button>
          )}
        </div>
      </nav>
    </header>
  );
}
