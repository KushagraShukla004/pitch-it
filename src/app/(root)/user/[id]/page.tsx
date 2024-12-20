/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth } from "@/auth";
import { IdeaCardSkeleton } from "@/components/IdeaCard";
import Navbar from "@/components/Navbar";
import UserIdeas from "@/components/UserIdeas";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  if (!user) return notFound();
  return (
    <>
      <Navbar search={false} />
      <div className="px-5 pt-8 w-full flex flex-col items-center">
        <section className="section_container">
          <section className="profile_container">
            <div className="profile_card">
              <div className="profile_title">
                <h3 className="text-24-black uppercase text-center line-clamp-1">
                  {user.name}
                </h3>
              </div>
              <Image
                src={user.image || "https://placehold.co/120x120"}
                alt={user.name || "Name"}
                width={120}
                height={120}
                className="profile_image"
              />

              <p className="text-[20px] mt-4 font-extrabold text-black text-center">
                @{user?.username}
              </p>
              <p className="mt-1 text-center font-medium text-sm text-white">
                {user?.bio}
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-5">
              <p className="text-[30px] font-bold text-white">
                {session?.id === id ? "Your" : "All"} Ideas
              </p>
              <ul className="card_grid-sm">
                {/* Add Your Ideas */}
                <Suspense fallback={<IdeaCardSkeleton />}>
                  <UserIdeas id={id} />
                </Suspense>
              </ul>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default page;
