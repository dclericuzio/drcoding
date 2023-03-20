import { useRef } from "react";
import { useCountUp } from "react-countup";

const easingFn = function (t, b, c, d) {
  return c * (Math.pow(t / d - 1, 5) + 1) + b;
};

const CounterNew = (props) => {
  const {
    styles = null,
    data: { startNum = 0, endNum, duration = 5, delay = 1, text= "+" }
  } = props;
  const countUpRef = useRef(null);

   useCountUp({
    ref: countUpRef,
    start: startNum,
    end: endNum,
    text: text,
    separator: ",",
    smartEasingThreshold: 2000,
    smartEasingAmount: 30,
    easingFn,
    delay,
    duration
  });

  return (
    <div className="text-[80px] font-dmsans">
      <div ref={countUpRef}></div>
    </div>
  );
};

export default CounterNew;
