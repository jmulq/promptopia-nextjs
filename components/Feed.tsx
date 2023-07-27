"use client";

import { useState, useEffect, ChangeEvent } from "react";
import PromptCard from "./PromptCard";
import { PostType } from "@types";

type PromptCardListProps = {
  data: PostType[];
  handleTagClick: Function;
};

const PromptCardList = ({ data, handleTagClick }: PromptCardListProps) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post: any) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

type FeedProps = {};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const regex = new RegExp(searchText, "i");

    const filteredPosts = posts.filter(
      (post) =>
        regex.test(post.prompt) ||
        regex.test(post.tag) ||
        regex.test(post?.creator?.name ?? "")
    );
    setFilteredPosts(filteredPosts);
  }, [searchText, posts]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.currentTarget.value);
  };

  const handleTagClick = (tag: string) => {
    setSearchText(tag);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={searchText.length > 0 ? filteredPosts : posts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
