/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const IdeaCard = ({ post }: { post: IdeaTypeCard }) => {
  const {
    _id,
    _createdAt,
    views,
    author: { _id: authorId, name, image: authorImage },
    title,
    description,
    image,
    category,
  } = post;
  return (
    <ul className="idea-card group">
      <div className="flex justify-between items-center">
        <p className="text-black">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-cyan-600"></EyeIcon>
          <span className="text-black">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5 text-black">
        <div className="flex-1 ">
          <Link href={`/user/${authorId}`}>
            <p className="text-xl font-semibold line-clamp-1 tracking-tight">{name}</p>
          </Link>
          <Link href={`/idea/${_id}`}>
            <h3 className="line-clamp-1 tracking-tighter">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src={authorImage || "https://placehold.co/48x48"}
            alt={name}
            width={48}
            height={48}
            className="rounded-full size-[48px] object-cover"
          />
        </Link>
      </div>
      <Link href={`/idea/${_id}`}>
        <p className="idea-card_desc">{description}</p>

        <img src={image} alt="placeholder" className="idea-card_img" />
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
