const Soal1 = () => {
  // 1. Buat kotak dibawah menjadi elemen drag and drop tanpa menggunakan plugin

  return (
    <>
      <div
        style={{
          backgroundColor: '#fff',
          width: 40,
          height: 40,
          borderRadius: '8px',
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
