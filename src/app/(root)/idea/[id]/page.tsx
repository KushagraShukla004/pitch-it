import Navbar from "@/components/Navbar";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { IDEAS_BY_ID_QUERY, PLAYLIST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import IdeaCard, { IdeaCardType } from "@/components/IdeaCard";

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const md = markdownit();
  const id = (await params).id;

  const [post, editorPicksData] = await Promise.all([
    client.fetch(IDEAS_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "editor-picks",
    }),
  ]);
  if (!post) return notFound();

  const editorPicks = editorPicksData?.select || [];

  const parsedContent = md.render(post?.pitch || "");
  return (
    <>
      <Navbar search={false} />
      <div className="px-5 pt-8 w-full flex flex-col items-center min-h-screen">
        <p className="text-xs font-medium text-white">
          Published On: {formatDate(post?._createdAt)}
        </p>
        <section className="section_container">
          <h1 className="text-4xl -mt-4 text-center font-extrabold bg-gradient-to-r from-cyan-100 via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <p className="text-mg text-center mt-2">{post.description}</p>
          <section className="text-center flex justify-center h-auto mt-4">
            <Image
              src={post.image || "https://placehold.co/800x600?text=Image+Not+Found"}
              alt="Idea Image"
              width={500}
              height={500}
              className="rounded-xl object-contain"
              priority
            />
          </section>
          <div className="space-y-5 mt-10 mx-12">
            <div className="flex-between gap-5">
              <Link href={`/user/${post.author?._id}`} className="flex gap-5">
                <Image
                  src={post.author?.image || "https://placehold.co/48x48"}
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="aspect-auto rounded-full drop-shadow-lg"
                />
                <div>
                  <p className="text-20-medium">{post.author?.name}</p>
                  <p className="text-16-medium">@{post.author?.username}</p>
                </div>
              </Link>
              <p className="category-tag">{post.category}</p>
            </div>
            <hr className="divider" />
            <div className="idea-card">
              {parsedContent ? (
                <article
                  className="prose max-w-5xl font-sans break-all"
                  dangerouslySetInnerHTML={{ __html: parsedContent }}
                />
              ) : (
                <p className="no-result">No details provided</p>
              )}
            </div>
            <hr className="divider" />
          </div>

          {/* Editor Selected Recommendation */}
          {editorPicks?.length > 0 && (
            <div className="mt-4 mx-12">
              <p className="font-semibold text-2xl text-white">Editor Picks</p>
              <ul className="mt-7 card_grid-sm">
                {editorPicks.map((post: IdeaCardType, index: number) => (
                  <IdeaCard key={index} post={post} />
                ))}
              </ul>
            </div>
          )}

          <Suspense fallback={<Skeleton className="view_skeleton" />}>
            <View id={id} />
          </Suspense>
        </section>
      </div>
    </>
  );
};

export default page;
