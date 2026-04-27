import PackageCard from './PackgeCard';

export default function PackageList() {
  const items = [
    {
      title: 'Le starter',
      content: [
        { name: 'Packs de logos', include: true },
        { name: 'Système couleurs & typographiques', include: true },
        { name: 'Mini Charte graphique', include: true },
        { name: 'Photos de profil et bannières réseaux', include: true },
        { name: 'Illustrations & éléments graphiques', include: false },
        { name: 'Templates posts réseaux sociaux', include: false },
      ],
      extraContent: [
        { name: 'Appel stratégique', include: true },
        { name: '5 révisions/livrable', include: true },
        { name: 'Brandboard', include: false },
        { name: 'Session de transmission post-projet', include: false },
      ],
      price: '1750€',
    },
    {
      title: 'Identité intégrale',
      content: [
        { name: 'Packs de logos', include: true },
        { name: 'Système couleurs & typographiques', include: true },
        { name: 'Brandbook', include: true },
        { name: 'Photos de profil et bannières réseaux', include: true },
        { name: 'Kits posts réseaux sociaux', include: true, puls: false },
        { name: 'Illustrations & éléments graphiques', include: true, puls: false },
      ],
      extraContent: [
        { name: 'Appel stratégique', include: true },
        { name: 'Révisions illimitées', include: true },
        { name: 'Brandboard', include: true },
        { name: 'Session de transmission post-projet', include: true },
      ],
      price: '2850€',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-[13px] md:grid-cols-2 md:gap-[6px] lg:gap-[12px]">
      <PackageCard
        title={items[0].title}
        contents={items[0].content}
        extraContents={items[0].extraContent}
        price={items[0].price}
      />
      <PackageCard
        title={items[1].title}
        contents={items[1].content}
        extraContents={items[1].extraContent}
        price={items[1].price}
      />
    </div>
  );
}
