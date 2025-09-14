import React from 'react';
import Main from '../../components/Main';

export const metadata = {
  title: 'Main',
};

export default function Page() {
  const bg = '/placeholder.jpg';

  return (
    <main>
      <Main bgImage={bg} />
    </main>
  );
}
