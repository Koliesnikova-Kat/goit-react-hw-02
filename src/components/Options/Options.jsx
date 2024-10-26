import style from "./Options.module.css";

export default function Options({ update, reset }) {
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
      {reset && (
        <button type='button' className={style.button} onClick={reset}>
          Reset
        </button>
      )}
    </section>
  );
}
