import IntroductionCard, { ContentItem } from '@/components/qui-suis-je/IntroductionCard';
import BookingButton from '@/components/ui/BookingButton';

const contents: ContentItem[] = [
  {
    id: 1,
    title: 'Designer autodidacte, passionné par la création de marques fortes depuis 2020.',
    direction: 1,
    description: (
      <>
        J’accompagne les marques audacieuses.
        <br />
        Celles qui sont prêtes à créer de l’émotion,
        <br />
        pour que les regards se tournent vers eux.
      </>
    ),
    imgSrc: '/images/qui-suis-je/1.jpg',
  },
  {
    id: 2,
    title: 'En 2021, je pars seul à l’aventure en Thaïlande.',
    direction: -1,
    description: (
      <>
        J’avais l’envie de vivre des choses fortes et de
        <br /> découvrir une nouvelle culture.
        <br />
        Je travaillais la journée avec mes clients en France.
        <br /> Le soir et les weekends, j’allais explorer Bangkok.
      </>
    ),
    imgSrc: '/images/qui-suis-je/2.jpg',
  },
  {
    id: 3,
    title: 'Je pars pour un an à Montréal en 2022.',
    direction: 1,
    description: (
      <>
        Direction l’autre bout du monde dans
        <br /> un pays dans lequel j’ai toujours voulu vivre.
        <br />
        Une ville magnifique, même si les 6 mois de neige
        <br /> ne me manque pas.
      </>
    ),
    imgSrc: '/images/qui-suis-je/3.jpg',
  },
  {
    id: 4,
    direction: 0,
    imgSrc: '/images/qui-suis-je/4.jpg',
  },
  {
    id: 5,
    title: 'Deux ans en Corée du sud, le pays dont je suis tombé amoureux.',
    direction: 1,
    description: (
      <>
        Vous l’aurez compris, j’ai besoin de
        <br /> découvrir de nouveau paysage et culture.
        <br />
        <br />
        C’est le moyen le plus puissant pour moi d’être
        <br /> inspiré et de développer ma créativité pour créer
        <br /> des identités visuelles osées qui ne laissent pas
        <br /> indifférent.
      </>
    ),
    imgSrc: '/images/qui-suis-je/5.jpg',
  },
];

export default function page() {
  return (
    <div className="mt-[100px]">
      <div>
        {contents.map((card) => (
          <div key={card.id} className="my-[20px]">
            <IntroductionCard {...card} />
          </div>
        ))}
      </div>
      <div className="mt-[10%] flex justify-center">
        <BookingButton />
      </div>
    </div>
  );
}
