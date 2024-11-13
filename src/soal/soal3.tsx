import { useEffect, useState } from 'react';

export default function Soal3() {
  /**
   * ? 1. hilangkan semua error dan deskripsikan apa penyebab error.
   * ? 2. tampilkan data yang di panggil dari api tersebut...
   */

  /**
   * Penyebab error:
   * 1. Error pada search dalam URL: search adalah sebuah string, sehingga menggunakan search.id tidak tepat. Sebagai gantinya, kita harus mengganti search.id dengan search agar dapat langsung digunakan dalam URL.
   * 2. Struktur data results: API https://jsonplaceholder.typicode.com/photos/ mengembalikan objek, bukan array, untuk endpoint tertentu. Jadi, results seharusnya diinisialisasi sebagai objek {} bukan array [].
   * 3. Error pada penggunaan map untuk menampilkan hasil: Karena results akan berupa objek, kita harus memeriksa apakah hasilnya valid sebelum mencoba memetakannya (menggunakan map), atau mengubah cara penampilan data.
   */

  return <SeachComponent />;
}

interface Photo {
  id: number;
  title: string;
  url: string;
}

function SeachComponent() {
  const [search, setSearch] = useState<string>('');
  const [result, setResult] = useState<Photo | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${search}`);
      const data = await response.json();
      console.log(data);

      setResult(data);
    }

    if (search) fetchData();
  }, [search]);

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
      <ul>
        {result ? (
          <li key={result.id}>
            <p style={{ color: '#f2f5fb' }}>
              <strong>Title:</strong> {result.title}
            </p>
            <img src={result.url} alt={result.title} width="100" />
          </li>
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
}
