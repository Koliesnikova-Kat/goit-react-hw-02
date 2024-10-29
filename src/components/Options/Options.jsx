import style from "./Options.module.css";

export default function Options({ update, reset, feedbackCount }) {
  return (
    <section className={style.buttons}>
      <button
        type='button'
        className={style.button}
        onClick={() => update("good")}
      >
        Good
      </button>
      <button
        type='button'
        className={style.button}
        onClick={() => update("neutral")}
      >
        Neutral
      </button>
      <button
        type='button'
        className={style.button}
        onClick={() => update("bad")}
      >
        Bad
      </button>
      {feedbackCount > 0 && (
        <button type='button' className={style.button} onClick={reset}>
          Reset
        </button>
      )}
    </section>
  );
}
