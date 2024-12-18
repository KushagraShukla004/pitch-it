/* eslint-disable @next/next/no-img-element */
import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Idea } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";
// import { urlFor } from "@/sanity/lib/image";

export type IdeaCardType = Omit<Idea, "author"> & { author?: Author };

const IdeaCard = ({ post }: { post: IdeaCardType }) => {
  const { _id, _createdAt, views, author, title, description, image, category } = post;

  return (
    <ul className="idea-card group">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <p className="text-black text-sm sm:text-xs md:text-sm">
          {formatDate(_createdAt)}
        </p>
        <div className="flex gap-1.5 items-center">
          <EyeIcon className="size-6 text-cyan-600" />
          <span className="text-black text-sm sm:text-xs md:text-sm">{views}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-between mt-5 gap-5 text-black overflow-hidden sm:gap-3">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-xl font-semibold line-clamp-1 tracking-tight sm:text-lg md:text-xl">
              {author?.name}
            </p>
          </Link>
          <Link href={`/idea/${_id}`}>
            <h3 className="line-clamp-1 tracking-tighter sm:text-sm md:text-base lg:text-lg">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image || "https://placehold.co/48x48"}
            alt={author?.name || "Profile Image"}
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
        </Link>
      </div>

      {/* Description and Image */}
      <Link href={`/idea/${_id}`}>
        <p className="idea-card_desc sm:line-clamp-1 md:line-clamp-2">{description}</p>
        {image && (
          <img
            src={image || "https://placehold.co/200x200"}
            alt={title}
            className="idea-card_img"
          />
        )}
      </Link>

      {/* Footer Section */}
      <div className="flex-between gap-3 mt-5 text-black max-[1430px]:flex-col">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="font-medium text-sm sm:text-xs md:text-sm">{category}</p>
        </Link>
        {/* asChild because we have Link within it */}
        <Button className="idea-card_btn" asChild>
          <Link href={`/idea/${_id}`}>Details</Link>
        </Button>
      </div>
    </ul>
  );
};

export const IdeaCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="idea-card_skeleton" />
      </li>
    ))}
  </>
);
export default IdeaCard;
