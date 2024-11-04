import Link from "next/link";
import { auth, signOut, signIn } from "../auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <header className="fixed bottom-8 left-[30%]  px-5 py-3 my-5 w-[40%] mx-12 md:mx-20 rounded-2xl font-sans bg-gray-500 bg-opacity-90 shadow-[0px_5px_30px_0px_rgba(70,_70,_74,_1)]">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-200 via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Pitch-It!
          </h1>
        </Link>
        <div className="flex items-center gap-5 text-white">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
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
