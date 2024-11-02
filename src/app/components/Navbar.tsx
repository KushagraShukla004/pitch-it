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
              </Link>
              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session?.user.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}
