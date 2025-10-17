import React from 'react';
import About from '../../components/About';

export const metadata = {
  title: 'About',
};

export default function Page() {
  const bg = '/placeholder.jpg';

  return (
    <main>
      <About bgImage={bg} />
    </main>
  );
}
