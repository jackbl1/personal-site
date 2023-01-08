import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  link: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({
  title,
  link,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} link={link} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <a href={link} className="hover:underline">
          {title}
        </a>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
