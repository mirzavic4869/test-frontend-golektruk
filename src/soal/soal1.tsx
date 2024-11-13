import { useState } from 'react';

const Soal1 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragging) {
      setPosition({
        x: event.clientX - 20,
        y: event.clientY - 20,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: '#fff',
          width: 40,
          height: 40,
          borderRadius: '8px',
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></div>

      {/* Ekspektasi hasil */}
      <iframe
        src="/soal1.mp4"
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          border: '1px solid white',
        }}
      ></iframe>
    </>
  );
};

export default Soal1;
