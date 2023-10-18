import "../HeaderSection/header.scss";
const Header = () => {
  return (
    <div className="-header">
      <div className="logo">
        {" "}
        <img
          // src="img/bitmap-copy-5.png"
          src="https://cdn.zeplin.io/62a1cde9af45ee109f8a9b56/assets/1A043ACA-64FC-4B68-93B7-E802A5C6BE05.png"
          //   srcSet="img/bitmap-copy-5@2x.png 2x,
          //      img/bitmap-copy-5@3x.png 3x"
          className="Bitmap-Copy-5"
        ></img>
      </div>
      <div className="header-contact">
        {" "}
        <div className="cont">
          <p>Talk to an Expert Call on Toll Free</p>
          <span>+1 650 763 8001</span>
        </div>
        <p className="try-free">TRY IT FREE</p>
      </div>
    </div>
  );
};

export default Header;
