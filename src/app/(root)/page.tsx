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
