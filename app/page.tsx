// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import EcgChart from './components/EcgChart';

type FilteredData = {
  hrSpO2: string[];
  temperature: string[];
  ecg: number[];
  signal: string[];
};

export default function HomePage() {
  const [data, setData] = useState<FilteredData | null>(null);

  useEffect(() => {
    fetch('/api/mock')
      .then(res => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  return (
    <main className="px-6 md:px-16 lg:px-32">
      <h1 className="text-2xl font-bold flex items-center px-6 md:px-16 lg:px-32 py-3 justify-center">Clinical Data</h1>

      {!data ? (
        <p>Loading or error...</p>
      ) : (
        <>
        <div className="flex items-center px-6 md:px-16 lg:px-32 py-3 justify-center flex-row gap-4">
          <div className="w-1/2 flex flex-row gap-4">
            <section className='w-1/3'>
              <h2 className="text-xl font-semibold mb-2">Heart Rate + SpO2</h2>
              <ul className="mb-4">{data.hrSpO2.map((line, i) => <li key={i}>{line}</li>)}</ul>
            </section>
            <section className='w-1/3'>
              <h2 className="text-xl font-semibold mb-2">Temperature</h2>
              <ul className="mb-4">{data.temperature.map((line, i) => <li key={i}>{line}</li>)}</ul>
            </section>
            <section className='w-1/3'>
              <h2 className="text-xl font-semibold mb-2">Blood Pressure</h2>
              <ul>{data.signal.map((line, i) => <li key={i}>{line}</li>)}</ul>
            </section>
          </div>
          <div className="w-1/2">
            <section>
              <h2 className="text-xl font-semibold text-2xl font-bold flex items-center px-6 md:px-16 lg:px-32 py-3 justify-center">ECG</h2>
              {/* Plot ECG chart using data.ecg from API/mockserial */}
              <EcgChart data={data.ecg} />
            </section>
          </div>
        </div>
          

          

          
        </>
      )}
    </main>
  );
}