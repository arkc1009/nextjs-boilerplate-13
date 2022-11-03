import { PostType } from "../../@types/Post";

const Post: React.FC<PostType> = ({ name, checked, id }) => {
  return (
    <div
      style={{ marginBottom: "1rem", border: "1px solid black", width: 150 }}
    >
      <header>
        {name} - {id}
      </header>
      <div>{checked ? "Fin!" : "Waiting..."}</div>
    </div>
  );
};

export default Post;
