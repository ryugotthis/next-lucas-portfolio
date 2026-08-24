import FAQCard from '@/components/homepage/FAQCard';
import InquiryCard from '@/components/homepage/InquiryCard';
import PackageList from '@/components/homepage/PackageLists';
import ProcessList from '@/components/homepage/ProcessList';
import ReviewList from '@/components/homepage/ReviewList';

import BookingButton from '@/components/ui/BookingButton';

import PreviewCard from '@/components/ui/PreviewCard';

import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  alternates: {
    canonical: '/', // => https://www.lucasprovost.com/
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="mt-[80px] flex md:mt-[80px] lg:mt-[178px]">
        <div>
          <span className="text-[10px] md:text-[14px] lg:text-[16px]">Branding tech B2B</span>

          <h1
            id="hero-title"
            className="bold block text-[28px] leading-[28px] md:w-[470px] md:text-[40px] md:leading-[40px] lg:h-[153px] lg:w-[750px] lg:text-[64px] lg:leading-[64px]"
          >
            Votre branding, conçu
            <br /> pour votre produit.
          </h1>

          <p className="mt-[51px] mb-[21px] block w-[315px] text-[14px] md:mt-[60px] md:mb-[16px] md:w-[435px] lg:mt-[36px] lg:mb-[12px] lg:w-[421px] lg:text-[16px]">
            Je construis des systèmes visuels pour les boîtes tech qui veulent monter en gamme.
            <b className="bold"> Livré en 21 jours, prêt à être utilisé par votre équipe.</b>
          </p>
          <BookingButton />
        </div>

        <div className="relative" aria-hidden="true">
          <div className="absolute hidden md:left-[-70px] md:mt-[-120px] md:block md:h-[459px] md:w-[458px] lg:left-[-68px] lg:mt-[-230px] lg:h-[634px] lg:w-[634px]">
            <Image src={'/illustrations/Blurred_Illu.png'} alt="illustration" fill priority />
          </div>
        </div>
      </section>

      {/* project section */}
      <section
        id="project"
        aria-labelledby="project-title"
        className="mt-[27px] flex flex-col gap-[12px] md:mt-[55px] md:gap-[33px] lg:mt-[70px] lg:gap-[67px]"
      >
        <PreviewCard
          url="/project/scorp-io"
          className="aspect-[340/192] cursor-pointer md:aspect-[16/9]"
          imageSrc="/images/homepage/desktop-tablet/7.mp4"
          title="SCORP-IO"
          description={
            <>
              Rebranding pour la solution ultra simplifiée de gestion
              <br />
              énergétique pour bâtiments tertiaires.
            </>
          }
        />
        <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2 md:gap-[24px]">
          <PreviewCard
            url="/project/kenko"
            imageSrc="/images/homepage/desktop-tablet/1.mp4"
            className="aspect-[340/192] cursor-pointer md:aspect-[660/450]"
            title="Kenko"
            description="Kenko, un studio où la poterie et le bien-être intérieur ne font qu’un."
          />
          <PreviewCard
            url="/project/dgk"
            className="aspect-[340/192] cursor-pointer md:aspect-[660/450]"
            imageSrc="/images/homepage/desktop-tablet/2_ios.mp4"
            title="Data Governance Kitchen"
            description={
              <>
                Le canal de communication qui aide à concocter de savoureuses stratégies
                <br />
                grâce à vos données.
              </>
            }
          />
        </div>

        <PreviewCard
          url="/project/alcove"
          className="aspect-[340/192] cursor-pointer md:aspect-[16/9]"
          imageSrc="/images/homepage/desktop-tablet/3.jpg"
          title="Alcôve"
          description={
            <>
              Un coffee shop, un studio de pilates, dans un seul et même lieu.
              <br />
              Un double concept pensé pour vous revitaliser et vous apaiser.
            </>
          }
        />
        <div className="grid grid-cols-1 gap-[12px] md:grid-cols-3 md:gap-[24px]">
          <PreviewCard
            url="/project/lidory"
            className="aspect-[340/192] cursor-pointer md:aspect-[432/450]"
            imageSrc="/images/homepage/desktop-tablet/8.mp4"
            title="Lidory"
            description={
              <>Une identité visuelle tech et premium pour un profil data d’exception.</>
            }
          />
          <PreviewCard
            url="/project/sneaky"
            className="aspect-[340/192] cursor-pointer md:aspect-[432/450]"
            imageSrc="/images/homepage/desktop-tablet/5.jpg"
            title="Sneaky"
            description={
              <>
                L’agence de voyage pour enfin pouvoir profitez et être loin des <br />
                foules. Partez là où 99% des touristes ne vont pas.
              </>
            }
          />
          <PreviewCard
            url="/project/okna"
            className="aspect-[340/192] cursor-pointer md:aspect-[432/450]"
            imageSrc="/images/homepage/desktop-tablet/6.mp4"
            title="Okna"
            description={
              <>
                La solution cloud sur-mesure pour accompagner les marques <br />
                dans leurs projets en utilisant seulement ce dont ils ont besoin.
              </>
            }
          />
        </div>
      </section>

      {/* pain points section */}
      <section
        aria-labelledby="pain-points-title"
        className="mt-[64px] flex flex-col items-center px-[24px] md:mt-[76px] md:px-0 lg:mt-[138px]"
      >
        <h2
          id="pain-points-title"
          className="bold w-[352px] text-center text-[20px] leading-[24px] md:w-[320px] md:text-[24px] md:leading-[28px] lg:w-[659px] lg:text-[48px] lg:leading-[48px]"
        >
          Ce que les fondateurs
          <br />
          tech vivent trop souvent
        </h2>

        <div className="mt-[32px] grid w-full grid-cols-1 items-center gap-y-[28px] md:mt-[48px] md:grid-cols-[1fr_auto_1fr] md:gap-x-0 md:gap-y-0 lg:mt-[64px]">
          {/* 왼쪽 컬럼 */}
          <div className="mx-auto flex w-full max-w-[420px] flex-col gap-[20px] md:mx-0 md:max-w-none md:gap-[32px]">
            <div className="text-center md:text-right">
              <p className="bold text-[16px] leading-[20px] md:border-r-[3px] md:border-[#7061FF] md:pr-[10px] md:text-[20px] md:leading-[24px] lg:border-r-4 lg:pr-[6px] lg:text-[24px] lg:leading-[24px]">
                Votre produit avance,
                <br className="hidden md:block" />
                mais votre marque reste
                <br className="hidden md:block" />à la traîne ?
              </p>
              <p className="text-description mt-[8px] text-[12px] leading-[16px] md:pr-[12px] md:text-[14px] md:leading-[18px]">
                Je construis une identité qui évolue
                <br className="hidden md:block" />
                avec votre produit, pas contre lui.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="bold text-[16px] leading-[20px] md:border-r-[3px] md:border-[#7061FF] md:pr-[10px] md:text-[20px] md:leading-[24px] lg:border-r-4 lg:pr-[6px] lg:text-[24px] lg:leading-[24px]">
                Vos devs inventent des
                <br className="hidden md:block" />
                couleurs et des polices à<br className="hidden md:block" />
                chaque nouvelle feature ?
              </p>
              <p className="text-description mt-[8px] text-[12px] leading-[16px] md:pr-[12px] md:text-[14px] md:leading-[18px]">
                Je livre un Figma structuré avec
                <br className="hidden md:block" />
                variables et composants prêts à <br className="hidden md:block" />
                implémenter.
              </p>
            </div>
          </div>

          {/* 중앙 일러스트 - 작은 화면에서는 숨김 */}
          <div className="relative mx-auto hidden h-[340px] w-[340px] md:block md:grid-cols-[1fr_340px_1fr] lg:h-[560px] lg:w-[560px] lg:grid-cols-[1fr_560px_1fr]">
            <Image src="/illustrations/Thinking_illu.png" alt="" fill aria-hidden="true" />
          </div>

          {/* 오른쪽 컬럼 */}
          <div className="mx-auto flex w-full max-w-[420px] flex-col gap-[20px] md:mx-0 md:max-w-none md:gap-[32px]">
            <div className="text-center md:text-left">
              <p className="bold text-[16px] leading-[20px] md:border-l-[3px] md:border-[#7061FF] md:pl-[10px] md:text-[20px] md:leading-[24px] lg:border-l-4 lg:pl-[6px] lg:text-[24px] lg:leading-[24px]">
                Vous créez chaque nouveau
                <br className="hidden md:block" />
                support de zéro : post, pitch,
                <br className="hidden md:block" />
                page produit ?
              </p>
              <p className="text-description mt-[8px] text-[12px] leading-[16px] md:pl-[12px] md:text-[14px] md:leading-[18px]">
                Un kit réseaux et des assets sont
                <br className="hidden md:block" />
                prêts à l&apos;emploi dès le lendemain de
                <br className="hidden md:block" />
                la livraison.
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="bold text-[16px] leading-[20px] md:border-l-[3px] md:border-[#7061FF] md:pl-[10px] md:text-[20px] md:leading-[24px] lg:border-l-4 lg:pl-[6px] lg:text-[24px] lg:leading-[24px]">
                Vous hésitez à montrer votre
                <br className="hidden md:block" />
                produit à des investisseurs
                <br className="hidden md:block" />
                ou des clients ?
              </p>
              <p className="text-description mt-[8px] text-[12px] leading-[16px] md:pl-[12px] md:text-[14px] md:leading-[18px]">
                Votre branding reflète enfin le
                <br className="hidden md:block" />
                niveau de ce que vous avez
                <br className="hidden md:block" />
                construit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* process section */}
      <section
        id="process"
        aria-labelledby="process-title"
        className="mt-[64px] md:mt-[76px] lg:mt-[138px]"
      >
        <div className="mb-[36px] flex flex-col items-center gap-[12px] md:mb-[32px] lg:mb-[44px] lg:gap-[20px]">
          <h2 className="bold w-[352px] text-center text-[20px] leading-[24px] md:w-[320px] md:text-[24px] md:leading-[28px] lg:w-[659px] lg:text-[48px] lg:leading-[48px]">
            Une méthode pensée pour les produits qui évoluent vite
          </h2>
          <p className="w-[293px] text-center text-[12px] leading-[16px] text-[#b8b8b8] md:w-[339px] md:text-[14px] md:leading-[16px] lg:w-[469px] lg:text-[18px] lg:leading-[22px]">
            Je ne crée pas un branding figé. Je construis un système visuel que votre équipe peut
            faire grandir sans moi.
          </p>
        </div>
        <ProcessList />
      </section>
      {/* offer section */}
      <section
        id="offer"
        aria-labelledby="offer-title"
        className="mt-[64px] flex flex-col items-center md:mt-[76px] lg:mt-[138px]"
      >
        <h2 className="bold text-[20px] leading-[24px] md:text-[24px] md:leading-[24px] lg:text-[48px] lg:leading-[48px]">
          Mes packages
        </h2>
        <p className="text-description bold mt-[5px] mb-[20px] w-[201px] text-[12px] leading-[16px] md:mt-[0px] md:mb-[37px] md:w-auto md:text-[14px] md:leading-[16px] lg:mt-[20px] lg:mb-[25px] lg:text-[18px] lg:leading-[22px]">
          Pour vous donner une longueur d’avance sur la concurrence.
        </p>
        <div
          role="note"
          aria-label="Disponibilité"
          className="flex h-[28px] w-[174px] items-center justify-center rounded-[22px] bg-[#0A0832] text-[10px] leading-[10px] text-[#DAD8FF] shadow-[0_0_16px_rgba(112,97,255,0.6)] md:h-[33px] md:w-[206px] md:text-[14px] md:leading-[14px] lg:h-[37px] lg:w-[238px] lg:text-[16px] lg:leading-[18px]"
        >
          <p>Une place restante en juillet</p>
        </div>
        <div className="mt-[27px] w-full lg:mt-[33px] lg:px-[8%]">
          <PackageList />
        </div>
        <div className="text-description mt-[19px] text-center text-[14px] leading-[16px] md:mt-[26px] lg:mt-[35px] lg:text-[18px] lg:leading-[22px]">
          Ou créer votre propre package en <br />
          prenant rendez-vous avec moi
        </div>
      </section>

      {/* Review section */}
      <section
        id="review"
        aria-labelledby="review-title"
        className="mt-[72px] flex flex-col items-center md:mt-[68px] lg:mt-[152px]"
      >
        <h2 className="bold text-[20px] leading-[24px] md:text-[24px] md:leading-[24px] lg:text-[48px] lg:leading-[48px]">
          + de 100 marques accompagnées
        </h2>
        <div className="mt-[23px] md:mt-[34px] lg:mt-[36px]">
          <ReviewList />
        </div>

        <Link
          className="text-description hidden underline md:block"
          href="https://www.malt.fr/profile/lucasprovost"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir plus d’avis
        </Link>

        <div className="mt-[16px] md:mt-[12px] lg:mt-[18px]">
          <BookingButton />
        </div>
      </section>

      {/* contact section & FAQ 사이에 메시지 공간 조정 위해 합침  */}
      <section
        aria-label="Contact et FAQ"
        className="mt-[64px] flex flex-col gap-[69px] md:mt-[149px] lg:mt-[145px]"
      >
        {/* contact section */}
        <section id="contact" aria-labelledby="contact-title">
          <InquiryCard />
        </section>
        {/* FAQ section */}
        <section aria-labelledby="faq-title" className="flex flex-col items-center">
          <h2 className="bold text-[24px] lg:text-[48px]">FAQ</h2>
          <div className="mt-[26px] w-full md:mt-[34px] lg:mt-[31px]">
            <FAQCard />
          </div>
        </section>
      </section>
    </main>
  );
}
