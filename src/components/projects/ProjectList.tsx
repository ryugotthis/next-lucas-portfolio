import Media from '../ui/Media';
import ProjectCard from './ProjectCard';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import Image from 'next/image';

type ProjectSection = {
  order: number;
  imgType: 1 | 2 | 3 | 4 | 5 | 6;
  isFirst?: boolean;
  isLast?: boolean;
  title?: string;
  semiTitle?: ReactNode;
  review?: ReactNode;
  leadText?: ReactNode;
  description?: ReactNode;
  semiDescription?: ReactNode;
  introduction?: {
    client: string;
    secteur: string;
    accompagnement: string;
  };
  clientProfile?: {
    avatarSrc: string;
    name: string;
    role: string;
  };
  imgSrc?: string;
  imgSrc1?: string;
  imgSrc2?: string;
  imgSrc3?: string;
  imgSrc4?: string;
  imgTitle1?: string;
  imgTitle2?: string;
  imgTitle3?: string;
  imgTitle4?: string;
  imgTitle5?: string;
  imgTitle6?: string;
};

type ProjectGroup = {
  project: string;
  section: ProjectSection[];
};

const contents: ProjectGroup[] = [
  // Kenko
  {
    project: 'kenko',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'Kenko',
        semiTitle: (
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
        imgSrc1: '/images/kenko/2.mp4',
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
        semiTitle: (
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
        clientProfile: {
          avatarSrc: '/images/homepage/desktop-tablet/clients/brenna.jpeg',
          name: 'Brenna Palmer',
          role: 'Brand & Content Manager chez Data Governance Kitchen & Data Galaxy',
        },
        review: (
          <>
            Bien que sa marque principale soit Data Galaxy, Laurent Dresse a créé Data Governance
            Kitchen pour sensibiliser et conseiller sur la création de bonnes stratégies data.
          </>
        ),
      },
      {
        order: 1,
        imgType: 2,
        imgSrc1: '/images/dgk/2.mp4',
        imgSrc2: '/images/dgk/3.jpg',
        description:
          'Le challenge ? Créer une identité qui marie l’univers de la data et celui de la cuisine. Car comme pour un bon plat, une stratégie data réussie repose sur une recette bien adaptée au résultat souhaité.',
      },
      {
        order: 2,
        imgType: 1,
        imgSrc: '/images/dgk/4.jpg',
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
        semiDescription: 'Brand & Content Manager chez Data Governance Kitchen & Data Galaxy',
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
        semiTitle: (
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
        imgSrc1: '/images/alcove/2.mp4',
        imgSrc2: '/images/alcove/3.jpg',
        description:
          'Que ce soit pour l’espace café ou pilates, la direction artistique est basée sur une ambiance chaleureuse, accueillante et accessible à tous.',
      },
      {
        order: 2,
        imgType: 1,
        imgSrc: '/images/alcove/4.mp4',
        description:
          'Pour créer cette atmosphere réconfortante, j’ai choisi des couleurs chaudes et créer deux mascottes inspirées des deux tours de la Rochelle. Elle représente aussi bien le double concept, que les deux co-fondateurs, Vincent et Marine.',
      },
      {
        order: 3,
        imgType: 5,
        imgSrc1: '/images/alcove/5.webp',
        imgSrc2: '/images/alcove/6.mp4',
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
        semiTitle: (
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
        imgSrc: '/images/okna/4.mp4',
        description:
          'Pour cela, des couleurs vives traduisant à la fois le côté technologique de la marque mais également le côté humain et vivant.',
      },
      {
        order: 3,
        imgType: 5,
        imgSrc1: '/images/okna/5.mp4',
        imgSrc2: '/images/okna/6.mp4',
        imgSrc3: '/images/okna/7.jpg',
        description:
          'Pour accentuer, l’aspect humain et friendly, une mascotte en forme d’éléphant incarne la marque. Celui-ci représente la robustesse et la mémoire, qui fait lien avec leur service cloud.',
      },
      {
        order: 4,
        imgType: 3,
        imgSrc1: '/images/okna/8.mp4',
        imgSrc2: '/images/okna/9.gif',
        imgSrc3: '/images/okna/10.jpg',
        description:
          'Cette mascotte est mise en scène à travers la marque et ses visuelles pour guider le client et rendre l’expérience client accessible et agréable.',
      },
      {
        order: 5,
        isLast: true,
        imgType: 5,
        imgSrc1: '/images/okna/11.mp4',
        imgSrc2: '/images/okna/12.jpg',
        imgSrc3: '/images/okna/13.jpg',
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
        semiTitle: (
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
        imgSrc: '/images/sneaky/4.jpg',
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
        semiTitle: (
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
        imgSrc1: '/images/jeremy-savary/2.mp4',
        imgSrc2: '/images/jeremy-savary/3.jpg',
        description:
          'Il lui fallait donc une identité visuelle premium, à la hauteur de son expertise. Une image minimaliste, précise, qui reflète son univers data.',
      },
      {
        order: 2,
        imgType: 1,
        imgSrc: '/images/jeremy-savary/4.mp4',
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
  // scorp-io
  {
    project: 'scorp-io',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'SCORP-IO',
        semiTitle: (
          <>
            La solution ultra simplifiée de gestion énergétique
            <br />
            pour bâtiments tertiaires.
          </>
        ),
        imgType: 1,
        imgSrc: '/images/scorp-io/1.mp4',
        description: (
          <div className="bold">
            “Le travail est structuré, les livrables sont propres, et surtout exploitables
            concrètement (ce qui n’est pas toujours le cas).”
          </div>
        ),
        introduction: {
          client: 'SCORP-IO',
          secteur: 'Gestion Énergétique Bâtiments',
          accompagnement: 'Rebranding',
        },
        clientProfile: {
          avatarSrc: '/images/homepage/desktop-tablet/clients/jr.png',
          name: 'Jean-Romain Bardet',
          role: 'Co-fondateur & CEO chez SCORP-IO',
        },
      },
      {
        order: 1,
        imgType: 6,
        imgSrc1: '/images/scorp-io/2.jpg',
        imgTitle6: 'Avant',
        leadText:
          "L'identité de SCorp-io reposait sur une charte construite en interne, au fil de l'eau. Une base honnête, mais pensée pour accompagner les débuts de la marque, pas l'ambition qu'elle affichait déjà.",
        description: (
          <div>
            <p className="bold">Le problème</p>
            SCorp-io ne voulait plus être vu comme un nouvel entrant parmi d'autres, mais comme
            l'acteur nouvelle génération de la supervision énergétique, face à des concurrents
            solidement installés. Son identité ne suivait pas cette ambition. Trop artisanale, pas
            assez structurée et peu moderne, elle peinait à installer la confiance et la crédibilité
            attendues par des directeurs techniques et responsables énergie habitués aux acteurs
            établis du secteur.
          </div>
        ),
      },
      {
        order: 2,
        imgType: 2,
        imgSrc1: '/images/scorp-io/3.mp4',
        imgSrc2: '/images/scorp-io/4.jpg',
        imgTitle2: 'La nouvelle identité',
        description: (
          <>
            Dans un secteur historiquement complexe et vieillissant, l'ambition de SCorp-io était
            claire : affirmer un positionnement nouvelle génération, intuitif et innovant.
            <br />
            <br />
            Ma mission : opérer un lifting capable d'installer une vraie crédibilité, face à des
            acteurs historiques bien plus installés.
          </>
        ),
      },
      {
        order: 3,
        imgType: 1,
        imgSrc: '/images/scorp-io/5.mp4',

        description: (
          <>
            L'enjeu central : créer une identité tech et premium, sans tomber dans les clichés du
            secteur.
            <br />
            <br />
            Pas de vert institutionnel, pas de greenwashing visuel. SCorp-io devait inspirer
            confiance, maîtrise, modernité et affirmer sa contribution réelle à la transition
            énergétique.
          </>
        ),
      },
      {
        order: 4,
        imgType: 2,
        imgSrc1: '/images/scorp-io/6.mp4',
        imgSrc2: '/images/scorp-io/7.jpg',
        description: (
          <>
            Reconnus par leur audience pour leur dark mode, rare dans ce secteur, nous avons choisi
            de le conserver pour cette nouvelle direction.
            <br />
            <br />À travers ce fond sombre, nous avons construit une palette lumineuse et moderne,
            pour traduire à la fois le côté technologique et énergétique de la marque.
          </>
        ),
      },
      {
        order: 5,
        imgType: 1,
        imgSrc: '/images/scorp-io/8.jpg',

        description: (
          <>
            Les éléments graphiques représentent les bâtiments que SCorp-io accompagne. Les dégradés
            évoquent la chaleur qui se diffuse, avec légèreté, à l'intérieur de ces lieux.
            <br />
            <br />
            Ils traduisent avec simplicité le côté technologique et innovant de la marque, et le
            confort ressenti à l'intérieur des bâtiments qu'elle pilote.
          </>
        ),
      },

      {
        order: 6,
        imgType: 1,
        imgSrc: '/images/scorp-io/9.jpg',
        description: (
          <>
            Dans ce secteur complexe, cette nouvelle identité retranscrit la simplicité de la
            solution que propose SCorp-io, et la facilité d'usage qui la caractérise.
          </>
        ),
      },
      {
        order: 7,
        imgType: 4,
        imgSrc1: '/images/scorp-io/10.mp4',
        imgSrc2: '/images/scorp-io/11.jpg',
        imgSrc3: '/images/scorp-io/12.jpg',
        imgSrc4: '/images/scorp-io/13.mp4',
        description: (
          <>
            “J’ai eu l’occasion de travailler avec Lucas sur notre branding, et le résultat est
            vraiment à la hauteur de nos attentes. Il a su comprendre rapidement notre
            positionnement et le traduire en une identité visuelle claire, cohérente et impactante.
            <br />
            <br />
            Au-delà de la créativité, j’ai particulièrement apprécié sa capacité à challenger nos
            idées tout en restant à l’écoute. Le travail est structuré, les livrables sont propres,
            et surtout exploitables concrètement (ce qui n’est pas toujours le cas).
            <br />
            <br />
            On sent une vraie réflexion derrière chaque choix graphique, avec une vision globale du
            produit et de la marque. Je recommande sans hésiter.”
          </>
        ),
        semiDescription: `Jean-Romain Bardet - Co-fondateur & CEO chez SCORP-IO`,
      },
      {
        isLast: true,
        order: 8,
        imgType: 1,
        imgSrc: '/images/scorp-io/14.jpg',
      },
    ],
  },
  // Lidory
  {
    project: 'lidory',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'Lidory',
        semiTitle: (
          <>
            Construire une identité à la hauteur d'une
            <br />
            promesse : la sécurité dès la conception.
          </>
        ),
        imgType: 1,
        imgSrc: '/images/lidory/1.mp4',
        description: (
          <div className="bold">
            “Son écoute et sa créativité ont permis de donner vie à une identité soignée et
            parfaitement alignée avec nos attentes.”
          </div>
        ),
        introduction: {
          client: 'Lidory',
          secteur: 'Développement d’applications',
          accompagnement: 'Branding',
        },
        clientProfile: {
          avatarSrc: '/images/homepage/desktop-tablet/clients/tommy.png',
          name: 'Tommy DI LUNA',
          role: 'Co-fondateur de Lidory',
        },
        review: (
          <>
            Lidory développe des applications performantes et sécurisées. Dans un secteur où la
            confiance se gagne par la rigueur, leur identité visuelle devait incarner exactement ça
            : expertise maîtrisée, clarté, stabilité.
            <br />
            <br />
            La mission : créer une identité capable de s'imposer tout en exprimant une vision
            moderne de la sécurité applicative.
          </>
        ),
      },
      {
        order: 1,
        imgType: 5,
        imgSrc1: '/images/lidory/2.mp4',
        imgSrc2: '/images/lidory/3.mp4',
        imgSrc3: '/images/lidory/4.jpg',

        description: (
          <>
            L'enjeu était de traduire la fiabilité, l’architecture solide, la protection des
            données, sans tomber dans les codes froids et impersonnels souvent associés à la
            cybersécurité.
            <br />
            <br />
            Une marque qui inspire confiance naturellement, par sa structure et sa clarté.
          </>
        ),
      },
      {
        order: 2,
        imgType: 1,
        imgSrc: '/images/lidory/5.mp4',
        description: (
          <>
            La combinaison de jaune et de blanc traduit à la fois la rigueur technique et
            l'accessibilité, loin des tons sombres du secteur, sans jamais sacrifier le sérieux.
            <br />
            <br />
            La typographie Plus Jakarta Sans accompagne cette direction : semi-bold pour affirmer,
            italic pour nuancer, regular pour expliquer.
          </>
        ),
      },
      {
        order: 3,
        imgType: 5,
        imgSrc1: '/images/lidory/6.mp4',
        imgSrc2: '/images/lidory/7.jpg',
        imgSrc3: '/images/lidory/8.jpg',
        description: (
          <>
            Le logo Lidory s'articule autour d'une étoile inscrite dans un cercle, symbole de
            protection, d'orientation et de maîtrise.
            <br />
            <br />
            Simple dans sa forme, fort dans ce qu'il évoque : un environnement sécurisé où chaque
            projet est protégé dès sa conception.
          </>
        ),
      },
      {
        order: 4,
        imgType: 1,
        imgSrc1: '/images/lidory/9.mp4',
        description: `Les illustrations Lidory prolongent l'identité sans la décorer. Chacune porte une idée : sécurité, architecture, accompagnement, simplicité d'usage. Toujours pour rendre la complexité technique immédiatement lisible.`,
      },
      {
        order: 5,
        imgType: 2,
        imgSrc1: '/images/lidory/10.jpg',
        imgSrc2: '/images/lidory/11.jpg',
        description: (
          <>
            “Très satisfait de notre collaboration avec Lucas pour la création de notre identité
            visuelle.
            <br />
            <br />
            Son écoute et sa créativité ont permis de donner vie à une identité soignée et
            parfaitement alignée avec nos attentes.
            <br />
            <br />
            Le processus a été efficace, avec des propositions pertinentes et des ajustements
            rapides.
            <br />
            <br />
            Le résultat final est à la fois conforme à nos attentes et esthétique, nous ne pouvons
            que le recommander pour des projets similaires.”
          </>
        ),
        semiDescription: `Tommy DI LUNA - Co-fondateur de Lidory`,
      },

      {
        isLast: true,
        order: 7,
        imgType: 1,
        imgSrc: '/images/lidory/12.jpg',
      },
    ],
  },
  // Dolmen
  {
    project: 'dolmen',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'Dolmen',
        semiTitle: (
          <>
            Une identité solide pour une agence qui structure
            <br />
            la croissance des entreprises tech B2B et IA.
          </>
        ),
        imgType: 1,
        imgSrc: '/images/dolmen/1.mp4',
        description: (
          <div className="bold">
            "Lucas combine deux qualités rares : une vraie sensibilité
            <br />
            créative et la capacité à délivrer pile au bon moment.”
          </div>
        ),
        introduction: {
          client: 'Dolmen',
          secteur: 'Agence Growth',
          accompagnement: 'Rebranding',
        },
        clientProfile: {
          avatarSrc: '/images/homepage/desktop-tablet/clients/guillaume.jpeg',
          name: 'Guillaume ADRIAN',
          role: 'Fondateur de Dolmen',
        },
      },
      {
        order: 1,
        imgType: 6,
        imgTitle6: 'Avant',
        imgSrc1: '/images/dolmen/2.jpg',
        leadText: (
          <>
            <p className="mb-2 text-[14px] md:text-[22px]">
              Avant Dolmen, il y avait Guillaume Adrian : une marque personnelle, indépendante,
              portée par une identité colorée, pensée pour un freelance, pas pour une agence.
            </p>
          </>
        ),
        description: (
          <div className="text-[14px] md:text-[22px]">
            <b className="bold">Le problème</b>
            <br />
            Guillaume ne voulait plus être perçu comme un consultant en solo, mais comme le
            fondateur d'une structure capable d'accompagner des startups SaaS B2B et IA exigeantes.
            <br />
            <br />
            Son identité ne suivait pas cette ambition. Trop personnelle, trop décontractée, elle ne
            portait ni la rigueur ni la crédibilité attendues par ce type de clients.
          </div>
        ),
      },
      {
        order: 2,
        imgType: 2,
        imgSrc1: '/images/dolmen/3.jpg',
        imgSrc2: '/images/dolmen/4.jpg',
        description: (
          <>
            Nous avons construit Dolmen comme une structure, pas comme une personne.
            <br />
            <br />
            Le nom s'inspire des dolmens : des architectures de pierre, denses et stables,
            assemblées pour durer. Un symbole de fondations solides, exactement ce que l'agence
            promet à ses clients.
          </>
        ),
      },
      {
        order: 3,
        imgType: 1,
        imgSrc: '/images/dolmen/5.mp4',

        description: (
          <>
            L'enjeu était de traduire cette rigueur data-driven sans tomber dans la froideur
            corporate : une identité capable d'imposer une autorité immédiate auprès d'une cible
            exigeante, tout en gardant du caractère.
          </>
        ),
      },
      {
        order: 4,
        imgType: 2,
        imgSrc1: '/images/dolmen/6.mp4',
        imgSrc2: '/images/dolmen/7.jpg',
        description: `Cette objectif se retrouve dans chaque aspect de la marque : des contrastes marqués, de la matière brute plutôt que du décor, des formes qui s'alignent comme les blocs d'une construction.`,
      },
      {
        order: 5,
        imgType: 1,
        imgSrc: '/images/dolmen/8.mp4',
        description: `
            Cette sobriété assumée installe une autorité immédiate. Face à des CEO et Head of Growth
            habitués aux discours gonflés du secteur, Dolmen se distingue en disant moins, mais plus
            juste.
          `,
      },

      {
        order: 7,
        imgType: 2,
        imgSrc1: '/images/dolmen/9.mp4',
        imgSrc2: '/images/dolmen/10.jpg',
        description: (
          <>
            "Lucas combine deux qualités qui vont rarement ensemble : une vraie sensibilité créative
            et la capacité à délivrer pile au bon moment. Il s'est calé sans friction sur le rythme
            et les besoins de la mission.
            <br />
            <br />
            Collaboration précieuse, je recommande sans hésiter."
          </>
        ),
        semiDescription: `Guillaume Adrian, Fondateur de Dolmen`,
      },
      {
        isLast: true,
        order: 8,
        imgType: 1,
        imgSrc: '/images/dolmen/11.jpg',
      },
    ],
  },
  // myclerk.io
  {
    project: 'myclerk',
    section: [
      {
        isFirst: true,
        order: 0,
        title: 'MyClerk',
        semiTitle: (
          <>
            Une identité pensée pour un produit fait pour les
            <br />
            cafés, restaurateurs et hotels.
          </>
        ),
        imgType: 1,
        imgSrc: '/images/myclerk/1.jpg',
        description: (
          <>
            MyClerk est une application qui automatise la présence en ligne des indépendants CHR :
            restaurateurs, cafetiers, hôteliers.
            <br />
            <br />
            Jean-François, le fondateur, m'a contacté avant le lancement : il voulait être crédible
            dès le jour 1.
          </>
        ),
        introduction: {
          client: 'MyClerk',
          secteur: 'CHR',
          accompagnement: 'Branding',
        },
      },
      {
        order: 1,
        imgType: 2,
        imgSrc1: '/images/myclerck/2.jpg',
        imgSrc2: '/images/myclerk/3.jpg',
        description: (
          <>
            <div className="bold text-[16px] md:text-[28px] lg:text-[48px] lg:leading-[54px]">
              Le problème
            </div>
            Les restaurateurs savent que leur présence en ligne compte, mais ils n'ont ni le temps,
            ni l'énergie, ni l'envie de devenir community manager.
            <br />
            <br />
            Résultat : comptes à l'abandon, avis sans réponse, et la conviction que ce sujet-là,
            c'est pour les grandes enseignes, pas pour eux.
          </>
        ),
      },
      {
        order: 2,
        imgType: 1,
        imgSrc: '/images/myclerk/4.mp4',
        description:
          "MyClerk gère tout à leur place, en autonomie. Mais un produit qui promet ça ne peut pas avoir l'air d'un logiciel technique de plus, sinon la marque contredit sa propre promesse avant même l'ouverture de l'app.",
      },
      {
        order: 3,
        imgType: 2,
        imgSrc1: '/images/myclerk/5.jpg',
        imgSrc2: '/images/myclerk/6.jpg',
        description: (
          <>
            <div className="bold text-[16px] md:text-[28px] lg:text-[48px] lg:leading-[54px]">
              La solution
            </div>
            La décision de départ : personnifier MyClerk au-delà du nom, avec une mascotte ronde qui
            accompagne le patron et fait les tâches à sa place.
            <br />
            <br />
            Ce n'est pas de la décoration, c'est le cœur de la stratégie, un patron CHR se reconnaît
            dans un collègue silencieux, pas dans un logo abstrait.
          </>
        ),
      },
      {
        order: 4,
        imgType: 1,
        imgSrc: '/images/myclerk/7.jpg',
        description: (
          <>
            Le reste en découle : une typographie ronde et affirmée, une palette
            beige/violet/vert/orange à l'opposé du bleu corporate habituel du SaaS, un ton de voix
            simple et complice qui bannit le jargon marketing.
            <br />
            <br />
            Et un refus assumé du code "agence" : il fallait qu'en une seconde, on comprenne que
            MyClerk n'est pas un nouvel outil à apprendre, mais un collaborateur de plus.
          </>
        ),
      },
      {
        order: 5,
        isLast: true,
        imgType: 5,
        imgSrc1: '/images/myclerk/8.jpg',
        imgSrc2: '/images/myclerk/9.jpg',
        imgSrc3: '/images/myclerk/10.jpg',
      },
    ],
  },
];
type ProjectListProps = {
  project: string; // slug 문자열
};
export default function ProjectList({ project }: ProjectListProps) {
  // 전체 프로젝트 배열(contents)에서 현재 slug와 매칭되는 프로젝트만 필터링
  const group = contents.find((g) => g.project.toLowerCase() === project.toLowerCase());
  if (!group) return notFound(); // 혹은 notFound()

  const hero = group.section[0];
  // const filteredContents = contents.filter((group) => group.project === project.toLowerCase());
  return (
    <div>
      <h1 className="pl-1.5 text-[11px] md:text-[16px]">{hero.title}</h1>
      <h2 className="bold text-[16px] md:text-[28px] lg:text-[48px] lg:leading-[54px]">
        {hero.semiTitle}
      </h2>

      {/* 히어로 이미지/영상 렌더링 (Media 컴포넌트로 통일 처리) */}
      {hero.imgSrc && (
        <div className="relative my-[2%] aspect-video w-full overflow-hidden rounded-[5px]">
          <Media src={hero.imgSrc} alt={`${hero.title} hero`} />
        </div>
      )}

      {/* 히어로 설명 + 오른쪽 정보 패널(Client / Secteur / Accompagnement) */}
      <div className="flex justify-between">
        <div className="w-full md:w-[67%]">
          <div className="text-[11px] md:text-[18px] lg:text-[26px]">{hero.description}</div>

          {/* 프로필 사진 + 이름 + 역할 — 데이터 없으면 자동으로 안 나옴 */}
          {hero.clientProfile && (
            <div className="mt-[12px] flex items-center gap-[10px] md:mt-[16px] md:gap-[12px]">
              <div className="relative h-[42px] w-[42px] flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src={hero.clientProfile.avatarSrc}
                  alt={hero.clientProfile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="bold text-[12px] leading-[14px] md:text-[16px] md:leading-[18px]">
                  {hero.clientProfile.name}
                </p>
                <p className="text-description text-[12px] leading-[13px] md:text-[16px] md:leading-[16px]">
                  {hero.clientProfile.role}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 데스크탑에서만 보이는 정보 섹션 */}
        <div className="divide-description hidden w-[30%] divide-y text-[14px] leading-[32px] md:block">
          <div className="flex justify-between">
            <div className="text-description">Client</div>
            <div className="bold">{hero.introduction?.client}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-description">Secteur</div>
            <div className="bold">{hero.introduction?.secteur}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-description">Accompagnement</div>
            <div className="bold">{hero.introduction?.accompagnement}</div>
          </div>
        </div>
      </div>
      {/* 리뷰(부가 설명) — review가 있는 프로젝트만 선택적으로, 프로필 밑에 여백 크게 두고 표시 */}
      {hero.review && (
        <div className="mt-[40px] w-[60%] text-[14px] md:mt-[54px] md:text-[24px] lg:text-[26px]">
          {hero.review}
        </div>
      )}

      {/* 나머지 섹션들: 이미지 갤러리 + 설명 → ProjectCard 컴포넌트로 분리 */}
      {group.section
        .filter((section) => !section.isFirst) // isFirst 아닌 것만
        .map((section) => (
          <div key={section.order} className="my-[4%]">
            <ProjectCard section={section} />
          </div>
        ))}
    </div>
  );
}
