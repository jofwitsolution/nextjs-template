import Head from 'next/head';
import HomePage from '../components/homepage/home-page';
import HEAD from '../components/commons/head';

export default function Home() {
  return (
    <div className=''>
      <HEAD />
      <HomePage />
    </div>
  );
}
