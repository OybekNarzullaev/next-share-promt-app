import React from "react";

interface Props {
  children: React.ReactNode;
}

const PostsLayout = ({ children }: Props) => {
  return (
    <div>
      <div>layout</div>
      {children}
    </div>
  );
};

export default PostsLayout;
