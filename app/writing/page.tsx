import React from 'react';
import Writing from '../../components/Writing';

export const metadata = {
  title: 'Writing',
};

export default function Page() {
  const bg = '/placeholder.jpg';

  return (
    <main>
      <Writing bgImage={bg} />
    </main>
  );
}
