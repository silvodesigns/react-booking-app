import "./featured.css";

const featured = ({ data }) => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={data.url} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>{data.loc}</h1>
          <h2>{data.add}</h2>
        </div>
      </div>
    </div>
  );
};

export default featured;
