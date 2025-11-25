import React from 'react';
import Main from '@/components/Main';

export const metadata = {
    title: 'Home',
};

export default function Page() {
    const bg = '/placeholder.jpg';

    return <Main bgImage={bg} />;
}
