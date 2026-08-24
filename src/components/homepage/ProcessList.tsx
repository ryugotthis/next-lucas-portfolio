import ProcessCard from './ProcessCard';

export default function ProcessList() {
  const contents = [
    {
      id: 1,
      order: '/icons/N1.svg',
      title: 'Étude du produit',
      description: (
        <>
          Avant de toucher à design, on se parle.
          <br />
          <br />
          Je prends le temps de{' '}
          <b className="bold">comprendre votre produit, vos utilisateurs, votre marché</b> et ce que
          votre marque doit transmettre. On aligne la vision avant de commencer à construire.
        </>
      ),
      imageSrc: '/illustrations/Echange.png',
      // imageRatio: 'aspect-[1/1]', //248
    },
    {
      id: 2,
      order: '/icons/N2.svg',
      title: 'Direction Créative',
      description: (
        <>
          Sur la base de nos échanges et en étudiant vos concurrents,{' '}
          <b className="bold">je créé 2 à 3 moodboards</b>. Ceci dans le but d’affiner la direction
          créative à prendre avant toute création.
          <br />
          <br />
          Cela nous servira boussole durant toute la durée du projet afin de respecter la direction
          à suivre.
        </>
      ),
      imageSrc: '/illustrations/Think_illu.png',
      // imageRatio: 'aspect-square', //248
    },
    {
      id: 3,
      order: '/icons/N3.svg',
      title: 'Système de marque',
      description: (
        <>
          Sur la base de la stratégie et de la direction créative, je construis votre système visuel
          complet : logo, couleurs sémantiques, typographie web-ready, kit UI.
          <br />
          <br />
          Chaque décision est prise en pensant à votre interface, pas à une affiche ou une
          plaquette.
        </>
      ),
      imageSrc: '/illustrations/Blurred_Illu.png',
      // imageRatio: 'aspect-square', //255
    },
    {
      id: 4,
      order: '/icons/N4.svg',
      title: 'Intégration Figma',
      description: (
        <>
          Vous recevez tous vos assets dans un fichier Figma structuré, avec des variables nommées
          selon les conventions de vos développeurs.
          <br />
          <br />
          Vos équipes savent exactement quoi utiliser et comment l'intégrer. Zéro aller-retour
          inutile.
        </>
      ),
      imageSrc: '/illustrations/Fusée.png',
      // imageRatio: 'aspect-square', //255
    },
  ];

  return (
    <div>
      {/* pc */}
      <div className="grid grid-cols-1 items-stretch gap-[2%] lg:grid-cols-4">
        {contents.map((card, index) => (
          <ProcessCard
            id={card.id}
            order={card.order}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            reverse={index % 2 === 1}
            key={card.title}
          />
        ))}
      </div>
    </div>
  );
}
