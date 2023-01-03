import { useEffect } from "react";
import { unycosData } from "../api/sliderData";

function SliderCard() {
  useEffect(() => {
    const opa = async () => {
      console.log(await unycosData());
    };
    opa();
  });
  return (
    <>
      <div></div>
    </>
  );
}

export default SliderCard;
