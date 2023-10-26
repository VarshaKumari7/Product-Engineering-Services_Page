import "../Home/home.scss";
import FirstPage from "../Firstpage/first-page";
import Header from "../HeaderSection/header";
import Secondpage from "../SecondPage/Secondpage";
import Thirdpage from "../Thirdpage/Thirdpage";

const Home = () => {
  return (
    <div className="-Bi_Product-Engineering-Services_Page">
      <Header />

      {/* <Secondpage /> */}
      <Thirdpage />
    </div>
  );
};

export default Home;
