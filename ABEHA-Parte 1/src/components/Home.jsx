import "./Home.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import XPower from "./XPower";
import Extended_Range from "./Extended_Range";

function Home() {
  return (
    <div className="flex -my-20 justify-center w-full">
<ReactCompareSlider

      itemOne={ <XPower />}
      itemTwo={<Extended_Range />}
    />
        
    </div>
  );
}

export default Home;
