import React from 'react';
import Design from '../../components/Design';

export const metadata = {
  title: 'Design',
};

export default function Page() {
  const bg = '/placeholder.jpg';

  return (
    <main>
      <Design bgImage={bg} />
    </main>
  );
}
