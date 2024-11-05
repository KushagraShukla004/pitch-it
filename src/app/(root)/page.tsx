import IdeaCard from "@/components/IdeaCard";
import Navbar from "../../components/Navbar";
import posts from "@/lib/postsData";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <div className="background">
      <Navbar query={query} />
      <main className="main_section">
        <p className="text-2xl text-center mt-8 font-medium text-white">
          {query ? `Search Results for "${query}"` : "Ideas to explore!"}
        </p>
        <div className="section_container">
          <div className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post: IdeaCardType, index: number) => (
                <IdeaCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="no-results">No Ideas Found</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// import Navbar from "../../components/Navbar";

// export default async function Home({
//   searchParams,
// }: {
//   searchParams: Promise<{ query?: string }>;
// }) {
//   const query = (await searchParams).query;

//   return (
//     <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-background-dark bg-[radial-gradient(#0E7C7B80_1px,#12121270_1px)] bg-[size:30px_30px]">
//       <Navbar query={query} />
//       <div className="px-5 pt-20 w-full flex flex-col items-center">
//         <p className="text-2xl text-center mt-8 font-medium text-white">
//           {query ? `Search Results for "${query}"` : "Ideas to explore!"}
//         </p>

//         {/* Section to grow with overflow */}
//         <div className="bg-zinc-400 w-[75%] mt-10 border-slate-700 rounded-2xl p-10 overflow-y-auto ring-4">
//           {/* Render your cards here */}
//           <div className="flex flex-col gap-4">
//             {/* Example card elements */}
//             <div className="bg-white rounded-lg p-5 shadow-md">Card 1</div>
//             <div className="bg-white rounded-lg p-5 shadow-md">Card 2</div>
//             <div className="bg-white rounded-lg p-5 shadow-md">Card 3</div>
//             {/* Add more cards here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
