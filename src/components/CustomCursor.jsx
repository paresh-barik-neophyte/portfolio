import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLgScreen(isLarge);
      document.body.style.cursor = isLarge ? 'none' : 'auto';
    };

    checkScreenSize(); // Initial check

    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    const handleMouseEnter = (e) => {
      if (e.target && e.target.classList && e.target.classList.contains('cursor-hover')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target && e.target.classList && e.target.classList.contains('cursor-hover')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('resize', checkScreenSize);
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.body.style.cursor = 'auto'; // Reset on unmount
    };
  }, []);

  if (!isLgScreen) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-gray-900 dark:bg-white rounded-full pointer-events-none z-[9999] 
                   transition-transform duration-100 ease-out ${
                     isActive ? 'scale-75' : 'scale-100'
                   }`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
      
      {/* Cursor ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border border-gray-900 dark:border-white rounded-full pointer-events-none z-[9998] 
                   transition-all duration-300 ease-out ${
                     isHovering ? 'scale-150 border-opacity-50' : 'scale-100 border-opacity-30'
                   } ${isActive ? 'scale-75' : ''}`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;