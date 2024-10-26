import style from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <ul className={style.list}>
      <li className={style.fb}>Good: {good}</li>
      <li className={style.fb}>Neutral: {neutral}</li>
      <li className={style.fb}>Bad: {bad}</li>
      <li className={style.fb}>Total: {total}</li>
      <li className={style.fb}>Positive: {positive}%</li>
    </ul>
  );
}
