import { useState } from 'react';

const Soal1 = () => {
  // 1. Buat kotak dibawah menjadi elemen drag and drop tanpa menggunakan plugin

  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    // Menyimpan posisi awal pada dataTransfer
    event.dataTransfer.setData('offsetX', (event.clientX - position.x).toString());
    event.dataTransfer.setData('offsetY', (event.clientY - position.y).toString());
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    if (event.clientX === 0 && event.clientY === 0) return;

    const offsetX = parseInt(event.dataTransfer.getData('offsetX'), 10);
    const offsetY = parseInt(event.dataTransfer.getData('offsetY'), 10);

    setPosition({
      x: event.clientX - offsetX,
      y: event.clientY - offsetY,
    });
  };

  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        style={{
          backgroundColor: '#fff',
          width: 40,
          height: 40,
          borderRadius: '8px',
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: 'move',
        }}
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
