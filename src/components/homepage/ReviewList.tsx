import ReviewCard from './ReviewCard';

export default function ReviewList() {
  const reviews = [
    {
      id: 1,
      imageSrc: '/images/homepage/desktop-tablet/clients/jr.png',
      name: 'Jean-Romain Bardet',
      role: 'CEO SCorp-io',
      content: (
        <>
          “Au-delà de la créativité, j’ai particulièrement apprécié sa capacité à challenger nos
          idées tout en restant à l’écoute. Le travail est structuré, les livrables sont propres, et
          surtout exploitables concrètement (ce qui n’est pas toujours le cas).
          <br />
          <br />
          On sent une vraie réflexion derrière chaque choix graphique, avec une vision globale du
          produit et de la marque. Je recommande sans hésiter.”
        </>
      ),
    },
    {
      id: 5,
      imageSrc: '/images/homepage/desktop-tablet/clients/jeremy.jpeg',
      name: 'Jeremy Savary',
      role: 'Paid Media & Data Analyst',
      content:
        '“Lucas a fait un excellent travail sur mon identité graphique. Il a bien compris mes attentes et livré un résultat à la fois pro et créatif.”',
    },
    {
      id: 9,
      imageSrc: '/images/homepage/desktop-tablet/clients/nadjmou.png',
      name: 'Nadjmou B.',
      role: 'Genopsys',
      content:
        "“Lucas a su s'adapter à notre projet malgré un contexte local assez particulier de l'océan indien. Bravo ! Nous sommes ravi du résultat fourni et nous soulignons sa”",
    },
    {
      id: 2,
      imageSrc: '/images/homepage/desktop-tablet/clients/tommy.png',
      name: 'Tommy Di Luna',
      role: 'Co-fondateur de KI Leaders',
      content: (
        <>
          “Très satisfait de notre collaboration avec Lucas pour la création de notre identité
          visuelle.
          <br />
          <br />
          Son écoute et sa créativité ont permis de donner vie à une identité soignée et
          parfaitement alignée avec nos attentes.
          <br />
          <br />
          Le résultat final est à la fois conforme à nos attentes et esthétique, nous ne pouvons que
          le recommander pour des projets similaires.”
        </>
      ),
    },
    {
      id: 6,
      imageSrc: '/images/homepage/desktop-tablet/clients/client6.jpeg',
      name: 'Emilie Mika',
      role: 'Hyperbare Revolution',
      content: (
        <>
          "Lucas est un designer de talent, sérieux, à l'écoute et très professionnel. Les outils
          mis en place pour faciliter la collaboration sont performants et simples à utiliser, il
          est à l'écoute et surtout d'une grande créativité.
          <br />
          <br />
          Nous sommes extrêmement satisfaits du résultat, merci beaucoup et au plaisir de collaborer
          de nouveau. Nous recommandons à 100%"
        </>
      ),
    },
    {
      id: 10,
      imageSrc: '/images/homepage/desktop-tablet/clients/corentin.jpeg',
      name: 'Corentin Lambert',
      role: 'Co-fondateur de AKA School',
      content: '',
    },
    {
      id: 3,
      imageSrc: '/images/homepage/desktop-tablet/clients/client3.jpeg',
      name: 'Brenna Palmer',
      role: 'Data Governance Kitchen',
      content:
        "“C'est notre deuxième projet avec Lucas, et tout s'est parfaitement déroulé. Nous avons beaucoup apprécié la façon dont il a organisé le projet sur Notion, qui nous a donné beaucoup de visibilité sur chaque étape du processus et un moyen facile de donner nos retours. Nous sommes très satisfaits du résultat et n'hésiterons pas à retravailler avec Lucas.”",
    },
    {
      id: 7,
      imageSrc: '/images/homepage/desktop-tablet/clients/jf.jpeg',
      name: 'Jean-François Legras',
      role: 'CEO MyClerk.io',
      content:
        "“Super expérience avec Lucas lors de la création de l'identité visuelle de la marque. Bien qu'il était à distance, nous avons pu échanger sans souci. Il a bien cerné l'univers de l'entreprise et m'a fait des propositions graphiques ainsi que des révisions en ce sens. Je suis donc satisfait des livrables (fichiers, charte graphique) et ne manquerai pas de refaire appel à lui pour d'autres projets :)”",
    },
    {
      id: 11,
      imageSrc: '/images/homepage/desktop-tablet/clients/louis.jpeg',
      name: 'Louis Sarradin',
      role: 'Fondateur de Pomecha',
    },
    {
      id: 4,
      imageSrc: '/images/homepage/desktop-tablet/clients/guillaume.jpeg',
      name: 'Guillaume Adrian',
      role: 'Fondateur de Dolmen',
      content: (
        <>
          “Lucas combine deux qualités qui vont rarement ensemble : une vraie sensibilité créative
          et la capacité à délivrer pile au bon moment. Il s'est calé sans friction sur le rythme et
          les besoins de la mission.
          <br />
          <br />
          Collaboration précieuse, je recommande sans hésiter.”
        </>
      ),
    },

    {
      id: 8,
      imageSrc: '/images/homepage/desktop-tablet/clients/client8.jpeg',
      name: 'Laura Israel',
      role: 'Fondatrice de BCKL',
      content: (
        <>
          “L&apos;expérience avec Lucas était tout simplement parfaite. Il est créatif, à
          l&apos;écoute et extrêmement efficace. Il a parfaitement cerné mon besoin. Je recommande
          Lucas les yeux fermés et serais ravie de faire encore appel à lui pour de nouvelles
          missions.
          <br />
          Merci pour tout !”
        </>
      ),
    },

    {
      id: 12,
      imageSrc: '/images/homepage/desktop-tablet/clients/client12.jpeg',
      name: 'Thierry Gomez ',
      role: 'Fondateur INTECHDIEM',
      content:
        '“Très bonne expérience avec Lucas. Demande de création d&apos;identité visuelle sur les besoins de mon entreprise avec un travail sérieux et très respectueux concernant les délais accordés. Je le recommande. Je n&apos;hésiterai pas à refaire”',
    },
  ];

  type ReviewType = {
    id: number;
    name: string;
    role: string;
    content: string;
    imageSrc: string;
  };

  const tabletOrder = [1, 3, 8, 2, 4, 7, 3, 6, 9];

  const tabletReviews = tabletOrder
    .map((id) => reviews.find((review) => review.id === id))
    .filter((review): review is ReviewType => Boolean(review)); // 타입 가드

  const mobileOrder = [1, 2, 3, 5, 8, 9];
  const mobileReviews = mobileOrder
    .map((id) => reviews.find((review) => review.id === id))
    .filter((review): review is ReviewType => Boolean(review)); // 타입 가드
  return (
    <>
      <div className="relative">
        {/* pc버전 */}
        <div className="hidden lg:block lg:columns-4 lg:space-y-4 lg:gap-x-[2%]">
          {reviews.map((review) => (
            <div key={review.name} className="mb-4 break-inside-avoid">
              <ReviewCard
                imageSrc={review.imageSrc}
                name={review.name}
                role={review.role}
                content={review.content}
              />
            </div>
          ))}
        </div>
        {/* tablet 버전 */}
        <div className="hidden md:block md:columns-3 md:space-y-4 md:gap-x-[2%] lg:hidden">
          {tabletReviews.map((review, i) => (
            <div key={`${review.name}-${review.id}-${i}`} className="mb-4 break-inside-avoid">
              <ReviewCard
                imageSrc={review.imageSrc}
                name={review.name}
                role={review.role}
                content={review.content}
              />
            </div>
          ))}
        </div>
        {/* mobile 버전 */}
        <div className="flex flex-col md:hidden">
          {mobileReviews.map((review, i) => (
            <div key={`${review.name}-${review.id}-${i}`} className="mb-2 break-inside-avoid">
              <ReviewCard
                imageSrc={review.imageSrc}
                name={review.name}
                role={review.role}
                content={review.content}
              />
            </div>
          ))}
        </div>
        {/* 하단 그라데이션 오버레이 */}
        <div className="from-background pointer-events-none absolute bottom-0 left-0 h-[470px] w-full bg-gradient-to-t to-transparent" />
      </div>
      {/* <div className="grid items-start gap-[2%] lg:grid-cols-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.name}
            imageSrc={review.imageSrc}
            name={review.name}
            role={review.role}
            content={review.content}
          />
        ))}
      </div> */}
    </>
  );
}
