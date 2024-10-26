import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";

export default function App() {
  const [values, setValues] = useState(() => {
    
    const savedClicks = window.localStorage.getItem("saved-clicks");
    
    return savedClicks && savedClicks !== "undefined"
      ? JSON.parse(savedClicks)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (key) => {
    setValues({ ...values, [key]: values[key] + 1 });
  };

  const resetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  // const updateGood = () => {
  //   setValues({ ...values, good: values.good + 1 });
  // };
  // const updateNeutral = () => {
  //   setValues({ ...values, neutral: values.neutral + 1 });
  // };
  // const updateBad = () => {
  //   setValues({ ...values, bad: values.bad + 1 });
  // };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <>
      <Description />

      <Options
        update={updateFeedback}
        reset={totalFeedback > 0 ? resetFeedback : null}
      />

      {totalFeedback > 0 ? (
        <>
          <Feedback
            good={values.good}
            neutral={values.neutral}
            bad={values.bad}
            total={totalFeedback}
            positive={positiveFeedback}
          />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
