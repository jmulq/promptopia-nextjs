import { PostType } from "@types";
import PromptCard from "./PromptCard";

type ProfileProps = {
  name: string;
  desc: string;
  data: PostType[];
  handleEdit: (post: PostType) => any;
  handleDelete: (post: PostType) => any;
};

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: ProfileProps) => (
  <section className="w-full">
    <h1 className="head_text text-left">
      <span className="blue_gradient">{name} Profile</span>
    </h1>
    <p className="desc text-left">{desc}</p>

    <div className="mt-10 prompt_layout">
      {data.map((post: any) => (
        <PromptCard
          key={post._id}
          post={post}
          handleEdit={() => handleEdit && handleEdit(post)}
          handleDelete={() => handleDelete && handleDelete(post)}
        />
      ))}
    </div>
  </section>
);
export default Profile;
