/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Idea } from "@/sanity/types";
// import { urlFor } from "@/sanity/lib/image";

export type IdeaCardType = Omit<Idea, "author"> & { author?: Author };

const IdeaCard = ({ post }: { post: IdeaCardType }) => {
  const { _id, _createdAt, views, author, title, description, image, category } = post;

  // Generate the URL for the idea image (used when Image Uploading coz it is a "File" object)
  // const ideaImageUrl = image ? urlFor(image).width(800).url() : null;

  return (
    <ul className="idea-card group">
      <div className="flex justify-between items-center">
        <p className="text-black">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-cyan-600" />
          <span className="text-black">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5 text-black">
        <div className="flex-1 ">
          <Link href={`/user/${author?._id}`}>
            <p className="text-xl font-semibold line-clamp-1 tracking-tight">
              {author?.name}
            </p>
          </Link>
          <Link href={`/idea/${_id}`}>
            <h3 className="line-clamp-1 tracking-tighter">{title}</h3>
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
      <Link href={`/idea/${_id}`}>
        <p className="idea-card_desc">{description}</p>

        {/* Display the idea image using the generated URL */}
        {image && <img src={image} alt={title} className="idea-card_img" />}
      </Link>

      <div className="flex-between gap-3 mt-5 text-black">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="font-medium text-sm sm:text-base">{category}</p>
        </Link>

        {/* asChild because we have Link within it */}
        <Button className="idea-card_btn" asChild>
          <Link href={`/idea/${_id}`}>Details</Link>
        </Button>
      </div>
    </ul>
  );
};

export default IdeaCard;
