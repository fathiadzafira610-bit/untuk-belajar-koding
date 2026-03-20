import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    window.addEventListener('mousemove', moveCursor);

    const elements = document.querySelectorAll('a, button');
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-200 ${
        hovered ? 'w-12 h-12 bg-pink-400/30' : 'w-6 h-6 bg-purple-400/40'
      } blur-sm`}
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`
      }}
    />
  );
}