import GroupComponent from "./GroupComponent";
import "./Header.css";


const Header = () => {
  return (
    <div className="frame13">
      <div className="frame-child30" />
      <div className="rectangle-container">
        <div className="frame-child31" />
        <div className="frame-child32" />
        <div className="frame-child33" />
      </div>
      <div className="alora-group">
        <div className="alora1">ALORA</div>
        {/* <img className="group-icon2" alt="" src="/logo.png" /> */}
        {/* <img className="group-icon3" alt="" src="/logo.png" /> */}
        <div className="gifts1">GIFTS</div>
      </div>
      <img className="frame-child34" alt="" src="/rectangle-10@2x.png" />
      <b className="look-book">ALORA</b>
      <div className="its-for-great">
      Gifts that celebrate love, moments, and milestones..
      </div>
      <GroupComponent />
  
      <div className="google-fill-parent">
        <img className="google-fill-icon" alt="" src="/google-fill.svg" />
        <a href="https://www.instagram.com/artsy_alora">
          <img className="instagram-fill-icon" alt="" src="/instagram-fill.svg" />
        </a>
        <img className="messenger-fill-icon" alt="" src="/messenger-fill.svg" />
        <img className="facebook-fill-icon" alt="" src="/facebook-fill.svg" />
      </div>
      <div className="line-div" />
    </div>
  );
};

export default Header;
