import style from "./Description.module.css";

export default function Description() {
  return (
    <>
      <h1 className={style.header}>Sip Happens Café</h1>
      <p className={style.descr}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
