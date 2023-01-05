import styles from '../styles/header.module.css';

export default function Header() {
  const { isUserLoggedIn } = JSON.parse(localStorage.getItem('user')) || {
    isUserLoggedIn: false,
  };
  return (
    <header className={styles.header}>
      <article className={styles.logo}>
        <img src="https://imgur.com/VHl5C3y.png" alt="Unycos logo" />
      </article>

      {isUserLoggedIn ? (
        <div className={styles.menu}>
          <button type="button" onClick={ () => console.log('menu')}>
            <img src="https://imgur.com/Cn6u6tT.png" alt="burguer menu" />
          </button>
        </div>
      ) : (
        <div className={`${styles.menu} ${styles.smaller_profile}`}>
          <button type="button" onClick={ () => console.log('fazer login')}>
            <img src="https://imgur.com/mP3jD8i.png" alt="profile" />
          </button>
        </div>
      )}
    </header>
  );
}
