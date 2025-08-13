'use client';

import { useState } from 'react';

import ArrowDown from '../ui/ArrowDownIcon';
import ArrowUp from '../ui/ArrowUpIcon';

export default function FAQCard() {
  const contents = [
    {
      id: 1,
      question: 'Quelle est la durée des prestations ?',
      answer: (
        <>
          <span className="bold">Charte graphique</span> : Le but est de vous lancer avec une charte
          graphique et les éléments de base d’une identité visuelle en 2 semaines.
          <br />
          <br />
          <span className="bold">Identité intégrale</span> : Le but est de lancé votre image de
          marque complète en 5 semaines.
          <br />
          <br />
          Ces projections peuvent légèrement varier en fonction de vos demandes et de la rapidité de
          vos retours
        </>
      ),
    },
    {
      id: 2,
      question: 'Comment se fait le paiement ?',
      answer: (
        <>
          Les paiements se font directement par virement bancaire.
          <br />
          <br />
          Un premier paiement correspondant à 50% de la prestation pour débuter le projet.
          <br />
          Un second paiement correspond au 50% restant une fois que le projet est validé.
        </>
      ),
    },
    {
      id: 3,
      question: 'Proposez-vous d’autres prestations ?',
      answer: (
        <>
          Oui, vous pouvez me faire une demande et nous pourrons faire un projet sur-mesure
          spécialement pour vous.
        </>
      ),
    },
    {
      id: 4,
      question: 'Il y a t-il des révisions possibles ?',
      answer: (
        <>
          <span className="bold">Charte graphique</span> : Oui, avec ce package vous avez droit à 5
          révisions
          <br />
          <br />
          <span className="bold">Identité intégrale</span> : Oui, grâce à ce package vous avez droit
          à nombre de révisions illimités.
        </>
      ),
    },
    {
      id: 5,
      question: 'Il y a t-il des pré-requis ?',
      answer: (
        <>
          Il est recommandé d’avoir une bonne connaissance de votre marque :
          <br />→ Sa mission
          <br />→ Son audience cible
          <br />→ Son positionnement
          <br />→ Ses concurrents
          <br />→ Ce qui la différencie.
        </>
      ),
    },
    {
      id: 6,
      question: 'Est ce que le rendez-vous est gratuit ?',
      answer: (
        <>
          Oui le rendez-vous de découverte est entièrement gratuit.
          <br />
          Le but est d’avoir un premier contact et d’échanger sur votre projet.
        </>
      ),
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const onClick = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-[5px]">
      {contents.map((content) => (
        <div
          key={content.id}
          onClick={() => onClick(content.id)}
          className={`${openId === content.id ? 'bg-[#F0F0F0]' : 'bg-[#D9D9D9]'} overflow-hidden rounded-[5px] text-[#464646]`}
        >
          <div className="flex justify-between">
            <p className="bold p-4 text-[14px] md:text-[14px] lg:text-[16px]">{content.question}</p>

            <div className="my-auto pr-4">
              {openId === content.id ? (
                <ArrowUp className="h-[5px] w-[10px] lg:h-[9px] lg:w-[19px]" />
              ) : (
                <ArrowDown className="h-[5px] w-[10px] lg:h-[9px] lg:w-[19px]" />
              )}
            </div>
          </div>
          <div
            className={`${openId === content.id ? 'h-auto px-4 pb-4' : 'h-0 opacity-0'} text-[12px] leading-[14px] transition-[h] duration-300 ease-in-out md:text-[12px] md:leading-[14px] lg:text-[14px] lg:leading-[18px]`}
          >
            {content.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
