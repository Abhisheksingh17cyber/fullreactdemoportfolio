import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const moveCursor = (e) => {
      if (cursor && cursorDot) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.classList.add('cursor-hover');
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.classList.remove('cursor-hover');
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 border-2 border-blue-500 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out hidden lg:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <style>{`
        .cursor-hover {
          transform: translate(-50%, -50%) scale(1.5) !important;
          border-color: #7c3aed !important;
          background: rgba(124, 58, 237, 0.1);
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
