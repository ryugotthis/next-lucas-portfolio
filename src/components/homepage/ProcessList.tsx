import ProcessCard from './ProcessCard';

export default function ProcessList() {
  const contents = [
    {
      id: 1,
      order: '/icons/N1.svg',
      title: 'Atelier Stratégique',
      description: (
        <>
          Après avoir répondu à un questionnaire pour
          <strong>comprendre en profondeur votre marque</strong>, nous échangerons ensemble pendant
          une petite heure.
          <br />
          <br />
          Ceci dans le but de définir avec précision vos objectifs, votre cible, ce qui vous rend
          différent et comment l’exploiter à travers votre branding.
        </>
      ),
      imageSrc: '/illustrations/Echange.png',
      // imageRatio: 'aspect-[1/1]', //248
    },
    {
      id: 2,
      order: '/icons/N2.svg',
      title: 'Étude du projet',
      description: (
        <>
          Sur la base de nos échanges et en étudiant vos concurrents,{' '}
          <strong>je créé 2 à 3 moodboards</strong>. Ceci dans le but d’affiner la direction
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
      title: 'Création',
      description: (
        <>
          Maintenant que nos visions sont alignées, je passe aux fourneaux, là où la création
          commence vraiment.
          <br />
          <br />
          Je travaille sur les solutions les plus adaptées à vos objectifs.
          <br />
          <br />
          Vous bénéficiez de révisions illimitées pour garantir un résultat pleinement fidèle à la
          stratégie définie ensemble.
        </>
      ),
      imageSrc: '/illustrations/Blurred_Illu.png',
      // imageRatio: 'aspect-square', //255
    },
    {
      id: 4,
      order: '/icons/N4.svg',
      title: 'Livraison et suivi',
      description: (
        <>
          Une fois que l’ensemble du projet est validé, vous aurez accès à tous les éléments de
          votre nouvelle identité.
          <br />
          <br />
          Besoin de moi après le projet ? Pas de panique, je reste toujours disponible pour vous
          accompagner sur la bonne utilisation de votre charte graphique.{' '}
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
