import '../styles/header.css';

export default function Header() {
  return (
    <header>
      {/* 'Unycos' logo */}
      <article id="logo">
        <img id="logo" src="https://imgur.com/VHl5C3y.png" alt="Unycos logo" />
      </article>

      <div id="menu">
        <button type="button">
          <img src="https://imgur.com/Cn6u6tT.png" alt="burguer menu" />
        </button>
      </div>

      {/* <article id="menu">
        <img src="https://imgur.com/mP3jD8i.png" alt="profile" />
      </article> */}
    </header>
  );
}
