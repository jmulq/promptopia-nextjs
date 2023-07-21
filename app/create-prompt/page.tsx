"use client";
import { FormEvent, FormEventHandler, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import { Post } from "@types";

type CreatePromptProps = {};

const CreatePrompt = ({}: CreatePromptProps) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState<Post>({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/prompt/new`, {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          // @ts-ignore
          userId: session?.user?.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
        console.log(error)
    } finally {
        setIsSubmitting(false)
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      isSubmitting={isSubmitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
