import hero from "./../img/hero.jpg";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-title">
        <div className="overview-title__text">
          <h1 className="overview-title__head">Places</h1>
          {/* Green highlight effect  */}
          <span className="overview-title__highlight">
            Food & Adventure
          </span>{" "}
          <br />
          <h4>A simpler yet touching experience</h4>
        </div>

        <img src={hero} alt="" className="overview-title__image" />
      </div>
    </div>
  );
};

export default Overview;
