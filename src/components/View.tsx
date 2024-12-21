import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { IDEA_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after } from "next/server";

const View = async ({ id }: { id: string }) => {
  // Fetch views safely
  const result = await client
    .withConfig({ useCdn: false })
    .fetch(IDEA_VIEWS_QUERY, { id });

  const totalViews = result?.views ?? 0; // Default to 0 if undefined

  // Increment views
  //read next.js docs for "after" use also set unstable_after:true in next.config.js
  after(async () => {
    await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit();
  });

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">
          {`${totalViews} view${totalViews !== 1 ? "s" : ""}`}
        </span>
      </p>
    </div>
  );
};

export default View;
