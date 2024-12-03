import Link from "next/link";
import { auth, signOut, signIn } from "../../auth";
import SearchForm from "./SearchForm";

export default async function Navbar({
  query,
  search,
}: {
  query?: string;
  search?: boolean;
}) {
  const session = await auth();

  return (
    <div className={`${search ? "fixed" : "relative"} flex justify-center w-full top-4`}>
      <header className="w-[90%] lg:w-[80%] 2xl:w-[60%] px-5 py-3 rounded-2xl bg-gray-500 bg-opacity-80 hover:boxShadow hover:bg-opacity-100 transition-all">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl xl:text-4xl font-extrabold bg-gradient-to-r from-cyan-200 via-cyan-200 to-cyan-300 bg-clip-text text-transparent">
              Pitch-It!
            </h1>
          </Link>

          {search == true && <SearchForm query={query} />}

          <div className="flex items-center gap-5 text-white">
            {session && session?.user ? (
              <>
                <Link href="/idea/create">
                  <span className="hover:text-cyan-200">Create</span>
                </Link>
                <Link href={`/user/${session?.user.id}`}>
                  <span className="hover:text-cyan-200">{session?.user?.name}</span>
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button type="submit" className="hover:text-cyan-200">
                    Logout
                  </button>
                </form>
              </>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit" className="hover:text-cyan-200">
                  Login
                </button>
              </form>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
