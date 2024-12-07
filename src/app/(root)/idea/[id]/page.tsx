import Navbar from "@/components/Navbar";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { IDEAS_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const md = markdownit();
  const id = (await params).id;

  const post = await client.fetch(IDEAS_BY_ID_QUERY, { id });

  if (!post) return notFound();

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
              src={post.image}
              alt="Idea Image"
              width={700}
              height={700}
              className="rounded-xl"
              priority
            />
          </section>
          <div className="space-y-5 mt-10 mx-auto max-w-4xl">
            <div className="flex-between gap-5">
              <Link href={`/user/${post.author?._id}`} className="flex gap-5">
                <Image
                  src={post.author?.image}
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="rounded-full drop-shadow-lg"
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
          </div>
          {/* <hr className="divider" /> */}

          {/* TODO: Editor Selected Recommendation */}
          <Suspense fallback={<Skeleton className="view_skeleton" />}>
            <View id={id} />
          </Suspense>
        </section>
      </div>
    </>
  );
};

export default page;
