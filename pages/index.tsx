import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  const randomPokemon = (max: number) => Math.floor(Math.random() * max);

  return (
    <div data-theme="winter" className="min-h-screen hero bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">
            <Link href={`pokemon/${randomPokemon(809)}`}>
              Pokemon Aléatoire
            </Link>
          </button>
          <button className="btn btn-outline">Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
