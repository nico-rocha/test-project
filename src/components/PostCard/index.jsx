import "./styles.css";

export const PostCard = ({ title, body, cover, id }) => (
  //const {post} = props
  //ou  direto {tile, cover, body, id}
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>
        {title} {id}
      </h1>
      <p>{body}</p>
    </div>
  </div>
);
