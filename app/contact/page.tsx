import React from 'react';
import Contact from '../../components/Contact';

export const metadata = {
  title: 'Contact',
};

export default function Page() {
  const bg = '/placeholder.jpg';

  return (
    <main>
      <Contact bgImage={bg} />
    </main>
  );
}
