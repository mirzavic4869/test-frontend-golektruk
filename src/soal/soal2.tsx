import { useEffect, useRef, useState } from 'react';

interface Country {
  id: number;
  country: string;
}

const data: Country[] = [
  { id: 1, country: 'United States' },
  { id: 2, country: 'Canada' },
  { id: 3, country: 'Mexico' },
  { id: 4, country: 'Brazil' },
  { id: 5, country: 'Argentina' },
  { id: 6, country: 'United Kingdom' },
  { id: 7, country: 'France' },
  { id: 8, country: 'Germany' },
  { id: 9, country: 'Italy' },
  { id: 10, country: 'Spain' },
  { id: 11, country: 'Russia' },
  { id: 12, country: 'China' },
  { id: 13, country: 'Japan' },
  { id: 14, country: 'South Korea' },
  { id: 15, country: 'India' },
  { id: 16, country: 'Australia' },
  { id: 17, country: 'South Africa' },
  { id: 18, country: 'Egypt' },
  { id: 19, country: 'Nigeria' },
  { id: 20, country: 'Kenya' },
];

function Soal2() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleInputClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  const handleReset = () => {
    setSelectedCountry('');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '100px',
      }}
    >
      <div>
        <p
          style={{
            fontSize: '18px',
            color: 'white',
          }}
        >
          value: {selectedCountry}
        </p>

        <div style={{ position: 'relative' }}>
          <input
            type="text"
            value={selectedCountry}
            onClick={handleInputClick}
            readOnly
            placeholder="Select"
            style={{
              backgroundColor: 'white',
              padding: '8px 32px 8px 8px',
              borderRadius: '8px',
              cursor: 'pointer',
              width: '200px',
            }}
          />

          {selectedCountry && (
            <span
              onClick={handleReset}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#999',
                fontSize: '16px',
              }}
            >
              &times;
            </span>
          )}

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '8px',
                marginTop: '4px',
                maxHeight: '350px',
                overflowY: 'auto',
              }}
            >
              {data.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCountrySelect(item.country)}
                  style={{
                    padding: '8px',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                >
                  {item.country}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Ekspektasi hasil */}
      <iframe
        src="/soal2.mp4"
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          border: '1px solid white',
        }}
      ></iframe>
    </div>
  );
}

export default Soal2;
