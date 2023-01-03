import '../styles/header.css';

export default function Header() {
  const { isUserLoggedIn } = JSON.parse(localStorage.getItem('user')) || {
    isUserLoggedIn: false,
  };
  return (
    <header>
      {/* 'Unycos' logo */}
      <article id="logo">
        <img id="logo" src="https://imgur.com/VHl5C3y.png" alt="Unycos logo" />
      </article>

      {isUserLoggedIn ? (
        <div className="menu">
          <button type="button" onClick={ () => console.log('menu')}>
            <img src="https://imgur.com/Cn6u6tT.png" alt="burguer menu" />
          </button>
        </div>
      ) : (
        <div className="menu smaller-profile">
          <button type="button" onClick={ () => console.log('fazer login')}>
            <img src="https://imgur.com/mP3jD8i.png" alt="profile" />
          </button>
        </div>
      )}
    </header>
  );
}
