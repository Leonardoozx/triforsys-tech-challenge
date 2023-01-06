import { useEffect, useState } from 'react';

import Computer from './views/Computer';
import Mobile from './views/Mobile';

export default function App() {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 768) return setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize());
  });
  return (
    <main>
      {isMobile ? (
        <Mobile isMobile={isMobile} />
      ) : (
        <Computer isMobile={isMobile} />
      )}
    </main>
  );
}
