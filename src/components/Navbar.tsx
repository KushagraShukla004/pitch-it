import Link from "next/link";
import { auth, signOut, signIn } from "../app/auth";
import SearchForm from "./SearchForm";

//query prop for getting search input query from page url
export default async function Navbar({ query }: { query?: string }) {
  const session = await auth();
  return (
    <header className="fixed top-2 px-5 py-3 w-[60%] my-5 mx-20 2xl:mx-80 rounded-2xl bg-gray-500 bg-opacity-90 hover:boxShadow border">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-cyan-200 via-cyan-200 to-cyan-300 bg-clip-text text-transparent">
            Pitch-It!
          </h1>
        </Link>
        <SearchForm query={query} />
        <div className="flex items-center gap-5 text-white">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="hover:highlight">Create</span>
              </Link>
              <Link href={`/user/${session?.user.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>
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
