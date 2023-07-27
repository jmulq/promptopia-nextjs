"use client";

import { useState, useEffect } from "react";
import Profile from "@components/Profile";
import { PostType } from "@types";
import { useSearchParams } from "next/navigation";

const OtherProfile = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [posts, setPosts] = useState<PostType[]>([]);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id}/prompts`);
      const data = await response.json();
      setPosts(data);
    };
    if (id) fetchPosts();
  }, [id]);

  return (
    <Profile
      name={`${name}'s Profile`}
      desc={`Welcome to your ${name}'s personalised profile page. Explore ${name}'s exceptional prompts and be inspired by the power of their imagination.`}
      data={posts}
    />
  );
};

export default OtherProfile;
