import Navbar from "../../components/Navbar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-background-dark bg-[radial-gradient(#0E7C7B80_1px,#12121270_1px)] bg-[size:30px_30px] flex-center flex-col">
      <Navbar query={query} />
      <div className="bg-zinc-400 size-[75%] border-slate-700 rounded-2xl p-10">
        <h1>Hello</h1>
      </div>
    </div>
  );
}
