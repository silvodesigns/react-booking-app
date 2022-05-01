import "./homeContainer.css";
import Featured from "../../components/featured/Featured";

const HomeContainer = () => {
  return (
    <div className="homeContainer">
      <Featured
        data={{
          url: "https://ychef.files.bbci.co.uk/976x549/p08y4572.jpg",
          loc: "Santo Domingo",
          add: "123 Properties",
        }}
      />

      <Featured
        data={{
          url: "https://cdn.theculturetrip.com/wp-content/uploads/2021/03/ww3mbj-1.jpg",
          loc: "Colombia",
          add: "Abigail ST",
        }}
      />
    </div>
  );
};

export default HomeContainer;
