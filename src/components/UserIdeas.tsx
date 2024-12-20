import { client } from "@/sanity/lib/client";
import { IDEAS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import IdeaCard, { IdeaCardType } from "./IdeaCard";

const UserIdeas = async ({ id }: { id: string }) => {
  const ideas = await client.fetch(IDEAS_BY_AUTHOR_QUERY, { id });
  return (
    <>
      {ideas.length > 0 ? (
        ideas.map((idea: IdeaCardType) => <IdeaCard key={idea._id} post={idea} />)
      ) : (
        <p className="no-result">No Ideas Yet.</p>
      )}
    </>
  );
};

export default UserIdeas;
