import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featureTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$37,945</span>
          <span className="featuredMoneyRate">
            12.4 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4945</span>
          <span className="featuredMoneyRate">
            -11.3 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3745</span>
          <span className="featuredMoneyRate">
            12.4 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
