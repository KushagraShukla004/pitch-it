import IdeaCard, { IdeaCardType } from "@/components/IdeaCard";
import Navbar from "../../components/Navbar";
import { IDEAS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  //client fetching not for ISR
  // const posts = await client.fetch(IDEAS_QUERY);

  //new fetch for ISR using "server-only"
  //it revalidates the page whenever new changes are made
  const { data: posts } = await sanityFetch({ query: IDEAS_QUERY, params });

  return (
    <>
      <div>
        <Navbar query={query} search={true} />
        <main className="main_section">
          <p className="text-2xl text-center mt-8 font-medium text-white">
            {query ? `Search Results for "${query}"` : "Ideas to explore!"}
          </p>
          <div className="section_container">
            <div className="mt-7 card_grid">
              {posts?.length > 0 ? (
                posts.map((post: IdeaCardType) => (
                  <IdeaCard key={post?._id} post={post} />
                ))
              ) : (
                <p className="no-results">No Ideas Found</p>
              )}
            </div>
          </div>
        </main>
      </div>
      <SanityLive />
    </>
  );
}
