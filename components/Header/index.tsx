import NavBar from "../NavBar";
import styles from "./header.module.scss";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <NavBar />
      <div className="text-white absolute top-1/2 -translate-y-1/2  right-1/2 translate-x-1/2 flex flex-col gap-14 items-center w-11/12">
        <p className="text-5xl">كن مشاركا في التنمية</p>
        <p className="text-3xl text-center">
          تعرف على صناع القرار, قم بتطوير مهارات جديدة وساهم باقتراحاتك في
          التنمية المحلية
        </p>
        <button className="primary-button">اكتشف البرامج</button>
      </div>
    </header>
  );
}
