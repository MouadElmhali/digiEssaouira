import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { routes } from "../../constants/routes";
import styles from "./navbar.module.scss";

export default function NavBar(): JSX.Element {
  const [hidden, toggleHidden] = useState(false);
  const handleClick = (): void => toggleHidden((prevState) => !prevState);

  return (
    <>
      <button
        className={`${styles.hamburgerMenu} ${!hidden ? styles.active : ""}`}
        onClick={handleClick}
      />
      {!hidden && (
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={routes.home.path}>
                <a>
                  <Image
                    src="/images/logo.png"
                    height="72"
                    width="72"
                    alt="DigiEssaouira logo"
                    className="object-contain"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={routes.home.path}>
                <a>الرئيسية</a>
              </Link>
            </li>
            <li>
              <Link href={routes.courses.path}>
                <a>إلتحق بمسار تدريبي</a>
              </Link>
            </li>
            <li>
              <Link href={routes.candidates.path}>
                <a>تعرف على المنتخبين</a>
              </Link>
            </li>
            <li>
              <Link href={routes.about.path}>
                <a>تعرف على النسيج الجمعوي</a>
              </Link>
            </li>
            <li className={styles.signIn}>
              <button>إنشاء حساب</button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
