import React from 'react';
import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';
import { pokedex } from '../../data/pokedex';
import { Pokemon } from '@prisma/client';
import { NextPage, GetServerSideProps } from 'next';
import Sword from '../../components/Icons/Sword';
import SwordSvg from '../assets/sword.svg';
import Image from 'next/image';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  const prisma = new PrismaClient();

  const pokemonId = Number(query.pid);

  if (!pokemonId) {
    return { notFound: true };
  }

  const pokemon = await prisma.pokemon.findUnique({
    where: {
      id: pokemonId,
    },
  });

  return {
    props: { pokemon },
  };
};

type TypePageProps = {
  pokemon: any;
};

const PokemonDetailPage: NextPage<TypePageProps> = ({ pokemon }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <picture>
          <img
            src={pokemon.imageUrl}
            width="300px"
            height="300px"
            className="w-sm rounded-lg shadow-1xl"
          />
        </picture>

        <div>
          <h1 className="text-5xl font-bold">
            {pokemon?.name?.french} #{pokemon?.id}
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                {/*     <Sword color="red" /> */}
                <Image
                  src={SwordSvg}
                  alt="React Logo"
                  width="24px"
                  height="24px"
                />
              </div>
              <div className="stat-title">Attack</div>
              <div className="stat-value">{pokemon?.base?.Attack}</div>
              <div className="stat-desc">B Tier</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Defense</div>
              <div className="stat-value">{pokemon?.base?.Defense}</div>
              <div className="stat-desc">C Tier</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">HP</div>
              <div className="stat-value">{pokemon?.base?.HP}</div>
              <div className="stat-desc">C tier </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Sp. Attack</div>
              <div className="stat-value">{pokemon?.base?.['Sp. Attack']}</div>
              <div className="stat-desc">C tier </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Sp. Defense</div>
              <div className="stat-value">{pokemon?.base?.['Sp. Defense']}</div>
              <div className="stat-desc">C tier </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Vitesse</div>
              <div className="stat-value">{pokemon?.base?.['Speed']}</div>
              <div className="stat-desc">C tier </div>
            </div>
          </div>
          <div className="btn-group p-11 justify-center ">
            <Link href={`${pokemon.id - 1}`}>
              <button name="options" data-title="<" className="btn">
                {'<'}
              </button>
            </Link>
            <Link href={`${pokemon.id + 1}`}>
              <button name="options" data-title="<" className="btn">
                {'>'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
