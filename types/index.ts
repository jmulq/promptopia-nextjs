import { DefaultSession } from "next-auth";

export type BasePostType = {
  prompt: string;
  tag: string;
};

export type CreatePostType = BasePostType;

type CreatorType = { _id: string } & DefaultSession["user"];

export type PostType = {
  _id: string;
  creator: CreatorType;
} & BasePostType;

export type FormType = "Create" | "Edit";
