import Image from 'next/image';
import ProjectCard from './ProjectCard';

const contents = [
  // Kenko
  {
    project: 'kenko',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'Kenko',
        semeTitle: (
          <>
            Kenko, un studio où la poterie et le
            <br /> bien-être intérieur ne font qu’un.
          </>
        ),
        imgType: 1,
        imgSrc: '/images/kenko/1.mp4',
        description:
          'Ce lieu invite à se déconnecter du quotidien en lâchant prise à travers un art profondément thérapeutique.',
        introduction: {
          client: 'Kenko',
          secteur: 'Studio de poterie',
          accompagnement: 'Identité visuelle',
        },
      },
      {
        order: 1,
        imgType: 2,
        imgSrc1: '/images/kenko/2.gif',
        imgSrc2: '/images/kenko/3.jpg',
        description:
          'J’ai conçu l’identité de Kenko avec l’idée de créer un univers chaleureux et apaisant. Une image à la fois élégante et empreinte d’imperfections, pour valoriser l’acceptation de soi.',
      },
      {
        order: 2,
        imgType: 2,
        imgSrc1: '/images/kenko/4.jpg',
        imgSrc2: '/images/kenko/5.jpg',
        description:
          'Le lâcher-prise et l’exploration de sa créativité sont au cœur de Kenko. Ils s’expriment à travers des illustrations imparfaites, qui encouragent chacun à créer, quel que soit son niveau.',
      },
      {
        order: 3,
        imgType: 3,
        imgSrc1: '/images/kenko/6.jpg',
        imgSrc2: '/images/kenko/7.jpg',
        imgSrc3: '/images/kenko/8.jpg',
        description:
          'Kenko, c’est une parenthèse hors du temps, loin des tracas et du stress quotidien. L’identité a été pensée pour refléter cette atmosphère, apportant douceur, relaxation et sérénité.',
      },
      {
        order: 4,
        isLast: true,
        imgType: 1,
        imgSrc: '/images/kenko/9.jpg',
      },
    ],
  },
  // DGK
  {
    project: 'dgk',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'Data Governance Kitchen',
        semeTitle: (
          <>
            Le canal de communication qui aide à concocter
            <br /> de savoureuses stratégies grâce à vos données.
          </>
        ),
        imgType: 1,
        imgSrc: '/images/dgk/1.mp4',
        description:
          'Bien que sa marque principale soit Data Galaxy, Laurent Dresse a créé Data Governance Kitchen pour sensibiliser et conseiller sur la création de bonnes stratégies data.',
        introduction: {
          client: 'Data Governance Kitchen',
          secteur: 'Data analytics',
          accompagnement: 'Identité visuelle',
        },
      },
      {
        order: 1,
        imgType: 2,
        imgSrc1: '/images/dgk/2.gif',
        imgSrc2: '/images/dgk/3.jpg',
        description:
          'Le challenge ? Créer une identité qui marie l’univers de la data et celui de la cuisine. Car comme pour un bon plat, une stratégie data réussie repose sur une recette bien adaptée au résultat souhaité.',
      },
      {
        order: 2,
        imgType: 1,
        imgSrc1: '/images/dgk/4.jpg',
        description:
          'L’image de marque est donc terre-à-terre, décalée et gourmande — tout en évoquant l’univers de la data à travers ses designs et ses couleurs.',
      },
      {
        order: 3,
        imgType: 4,
        imgSrc1: '/images/dgk/5.mp4',
        imgSrc2: '/images/dgk/6.jpg',
        imgSrc3: '/images/dgk/7.jpg',
        imgSrc4: '/images/dgk/8.mp4',
        description:
          'Des illustrations cartoonesques traduisent l’aspect culinaire et l’humour de la marque, tandis que des couleurs vives rappellent la modernité et la technicité du monde de la data.',
      },
      {
        order: 4,
        imgType: 1,
        imgSrc: '/images/dgk/9.jpg',
        description: (
          <>
            &ldquo;C&apos;est notre deuxième projet avec Lucas, et tout s&apos;est parfaitement
            déroulé.
            <br />
            <br />
            Lucas a créé une identité visuelle qui répond entièrement à notre brief et a pris en
            compte nos retours à chaque étape du processus.
            <br />
            <br />
            Nous avons beaucoup apprécié la façon dont il a organisé le projet sur Notion, qui nous
            a donné beaucoup de visibilité sur chaque étape du processus et un moyen facile de
            donner nos retours.
            <br />
            <br />
            Nous sommes très satisfaits du résultat et n&apos;hésiterons pas à retravailler avec
            Lucas.&rdquo;
          </>
        ),
        semeDescription: 'Brand & Content Manager chez Data Governance Kitchen & Data Galaxy',
      },
      {
        order: 5,
        isLast: true,
        imgType: 1,
        imgSrc: '/images/dgk/10.jpg',
      },
    ],
  },
  // Alcôve
  {
    project: 'alcove',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'Alcôve',
        semeTitle: (
          <>
            Un lieu unique au double concept :<br /> Coffee shop et studio de pilates.
          </>
        ),
        imgType: 1,
        imgSrc: '/images/alcove/1.jpg',
        description:
          'Un café pour se booster avant une séance de pilates ou bien l’inverse. C’est vous qui décider. Vincent et Marine m’ont laissé les accompagnés pour l’identité d’Alcôve.',
        introduction: {
          client: 'Alcôve',
          secteur: 'Café et Pilates',
          accompagnement: 'Identité visuelle',
        },
      },
      {
        order: 1,
        imgType: 2,
        imgSrc1: '/images/alcove/2.gif',
        imgSrc2: '/images/alcove/3.jpg',
        description:
          'Que ce soit pour l’espace café ou pilates, la direction artistique est basée sur une ambiance chaleureuse, accueillante et accessible à tous.',
      },
      {
        order: 2,
        imgType: 1,
        imgSrc1: '/images/alcove/4.mp4',
        description:
          'Pour créer cette atmosphere réconfortante, j’ai choisi des couleurs chaudes et créer deux mascottes inspirées des deux tours de la Rochelle. Elle représente aussi bien le double concept, que les deux co-fondateurs, Vincent et Marine.',
      },
      {
        order: 3,
        imgType: 5,
        imgSrc1: '/images/alcove/5.webp',
        imgSrc2: '/images/alcove/6.gif',
        imgSrc3: '/images/alcove/7.webp',
        description:
          'Cette identité visuelle chaleureuse et pleine de vie se marie parfaitement avec ce lieu magnifique où l’on peut se dépenser, se relaxer, ou bien les deux. ',
      },
      {
        order: 4,
        imgType: 2,
        imgSrc1: '/images/alcove/8.jpeg',
        imgSrc2: '/images/alcove/9.jpg',
        description: (
          <>
            &ldquo;Nous avons fait appel à Lucas pour définir l’intégralité de l’identité visuelle
            de notre Coffee Shop & Studio de Pilates Reformer. Il a su être force de proposition et
            s’adapter totalement à notre projet.
            <br />
            <br />
            Nous avons beaucoup apprécié ses conseils, la fluidité de nos échanges et sa réactivité.
            Nous sommes ravis du résultat ! Merci Lucas !&rdquo;
          </>
        ),
        semiDescription: (
          <>
            Marine Giraud, Co-fondatrice de Alcôve
            <br />
            <br />
            Alcôve
            <br />
            28 Rue Saint-Nicolas,
            <br />
            17000 La Rochelle, France
          </>
        ),
      },
      {
        order: 5,
        isLast: true,
        imgType: 5,
        imgSrc1: '/images/alcove/10.png',
        imgSrc2: '/images/alcove/11.jpg',
        imgSrc3: '/images/alcove/12.jpg',
      },
    ],
  },
  // OKNA
  {
    project: 'okna',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'OKNA',
        semeTitle: (
          <>
            La solution sur-mesure pour accompagner les
            <br /> marques dans leurs projets cloud.
          </>
        ),
        imgType: 1,
        imgSrc: '/images/okna/1.mp4',
        description:
          'OKNA co-construit avec ses clients, la solution cloud adapté à leurs besoins. Ceci pour d’avoir la juste infrastructure pour leur clients et pour limiter l’impact sur l’environnement.',
        introduction: {
          client: 'OKNA',
          secteur: 'Services de cloud',
          accompagnement: 'Identité visuelle',
        },
      },
      {
        order: 1,
        imgType: 2,
        imgSrc1: '/images/okna/2.jpg',
        imgSrc2: '/images/okna/3.gif',
        description:
          'Ma mission ? Créer une identité visuelle friendly, tech et audacieuse pour représenter l’équipe d’experts passionnés qui compose la marque.',
      },
      {
        order: 2,
        imgType: 1,
        imgSrc1: '/images/okna/4.mp4',
        description:
          'Pour cela, des couleurs vives traduisant à la fois le côté technologique de la marque mais également le côté humain et vivant.',
      },
      {
        order: 3,
        imgType: 5,
        imgSrc1: '/images/okna/5.mp4',
        imgSrc2: '/images/okna/6.gif',
        imgSrc3: '/images/okna/7.jpg',
        description:
          'Pour accentuer, l’aspect humain et friendly, une mascotte en forme d’éléphant incarne la marque. Celui-ci représente la robustesse et la mémoire, qui fait lien avec leur service cloud.',
      },
      {
        order: 4,
        imgType: 2,
        imgSrc1: '/images/okna/8.gif',
        imgSrc2: '/images/okna/9.jpg',
        description:
          'Cette mascotte est mise en scène à travers la marque et ses visuelles pour guider le client et rendre l’expérience client accessible et agréable.',
      },
      {
        order: 5,
        isLast: true,
        imgType: 5,
        imgSrc1: '/images/okna/10.mp4',
        imgSrc2: '/images/okna/11.jpg',
        imgSrc3: '/images/okna/12.jpg',
      },
    ],
  },
  // Sneaky
  {
    project: 'sneaky',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'Sneaky',
        semeTitle: (
          <>
            L’agence de voyage pour pouvoir
            <br /> enfin profitez et être loin des foules.
          </>
        ),
        imgType: 1,
        imgSrc: '/images/sneaky/1.mp4',
        description:
          'La mission de sneaky est simple : vous faire vivre des expériences locales uniques dans des lieux à couper le souffle et en évitant 99% des touristes.',
        introduction: {
          client: 'Sneaky',
          secteur: 'Agence de voyage',
          accompagnement: 'Identité visuelle',
        },
      },
      {
        order: 1,
        imgType: 2,
        imgSrc1: '/images/sneaky/2.jpg',
        imgSrc2: '/images/sneaky/3.mp4',
        description:
          'Sneaky c’est vous permettre de profitez réellement de votre voyage de déconnecter. L’immersion dans le pays local est donc l’objectif numéro un.',
      },
      {
        order: 2,
        imgType: 1,
        imgSrc1: '/images/sneaky/4.jpg',
        description:
          'J’ai donc créé une identité qui représente cette immersion dans ces lieux uniques. Des couleurs qui évoquent la découverte et des illustrations pour chacun des continents.',
      },
      {
        order: 3,
        imgType: 5,
        imgSrc1: '/images/sneaky/5.jpg',
        imgSrc2: '/images/sneaky/6.jpg',
        imgSrc3: '/images/sneaky/7.jpg',
        description:
          'Un grain sur les visuels et illustrations rappelant des souvenirs que l’on n’oublient jamais capturer sur une vieille pellicule photo.',
      },
      {
        order: 4,
        imgType: 5,
        isLast: true,
        imgSrc1: '/images/sneaky/8.jpg',
        imgSrc2: '/images/sneaky/9.jpg',
        imgSrc3: '/images/sneaky/10.mp4',
      },
    ],
  },
  // Jeremy Savary
  {
    project: 'jeremy-savary',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'Jeremy Savary',
        semeTitle: (
          <>
            Une identité visuelle tech et premium
            <br /> pour un profil data d’exception.
          </>
        ),
        imgType: 1,
        imgSrc: '/images/jeremy-savary/1.mp4',
        description:
          'Jérémy est Freelance Paid Media & Data Analyst. Il gère des budgets médias de 50 000 € à 1 million d’euros par mois pour aider de grandes marques à acquérir et fidéliser leurs clients.',
        introduction: {
          client: 'Jeremy Savary',
          secteur: 'Paid Media & Data Analyst',
          accompagnement: 'Identité visuelle',
        },
      },
      {
        order: 1,
        imgType: 2,
        imgSrc1: '/images/jeremy-savary/2.gif',
        imgSrc2: '/images/jeremy-savary/3.jpg',
        description:
          'Il lui fallait donc une identité visuelle premium, à la hauteur de son expertise. Une image minimaliste, précise, qui reflète son univers data.',
      },
      {
        order: 2,
        imgType: 1,
        imgSrc1: '/images/jeremy-savary/4.mp4',
        description:
          'Du noir, pour souligner le côté premium. Un rouge vif, pour incarner la dimension analytique et technique. Des mises en page épurées et percutantes sur les réseaux sociaux, pour mettre en valeur la clarté de son discours et de sa méthode.',
      },
      {
        order: 3,
        imgType: 2,
        imgSrc1: '/images/jeremy-savary/5.jpg',
        imgSrc2: '/images/jeremy-savary/6.jpg',
        description:
          '“Lucas a fait un excellent travail sur mon identité graphique. Il a bien compris mes attentes et livré un résultat à la fois pro et créatif.”',
        semiDescription: 'Jérémy Savary, Freelance Performance & Data Marketing',
      },
      {
        isLast: true,
        order: 4,
        imgType: 1,
        imgSrc: '/images/jeremy-savary/7.jpg',
      },
    ],
  },
];
type ProjectListProps = {
  project: string; // slug 문자열
};
export default function ProjectList({ project }: ProjectListProps) {
  const filteredContents = contents.filter((group) => group.project === project.toLowerCase());
  return (
    <>
      {filteredContents.map((projectGroup) => (
        <div key={projectGroup.project}>
          <h1 className="pl-1.5 text-[11px] md:text-[16px]">{projectGroup.section[0].title}</h1>
          <h2 className="bold text-[16px] md:text-[28px] lg:text-[48px] lg:leading-[54px]">
            {projectGroup.section[0].semeTitle}
          </h2>
          <div className="relative my-[2%] aspect-video w-full overflow-hidden rounded-[5px]">
            {projectGroup.section[0].imgSrc!.endsWith('.mp4') ? (
              <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
                <source src={projectGroup.section[0].imgSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="relative aspect-video w-full">
                <Image
                  src={projectGroup.section[0].imgSrc!}
                  alt="project photo"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <p className="w-[67%] text-[11px] md:text-[18px] lg:text-[26px]">
              {projectGroup.section[0].description}
            </p>
            <div className="divide-description w-[30%] divide-y text-[14px] leading-[32px]">
              <div className="flex justify-between">
                <div className="text-description">Client</div>
                <div>{projectGroup.section[0].introduction?.client}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-description">Secteur</div>
                <div>{projectGroup.section[0].introduction?.secteur}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-description">Accompagnement</div>
                <div>{projectGroup.section[0].introduction?.accompagnement}</div>
              </div>
            </div>
          </div>

          {projectGroup.section
            .filter((section) => !section.isFirst) // isFirst 아닌 것만
            .map((section) => (
              <div key={section.order} className="my-[4%]">
                <ProjectCard section={section} />
              </div>
            ))}
        </div>
      ))}
    </>
  );
}
