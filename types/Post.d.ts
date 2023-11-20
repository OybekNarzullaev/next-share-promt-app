type Post = {
  _id?: string;
  prompt: string;
  tag: string;
  creator?: {
    username: string;
  };
};
