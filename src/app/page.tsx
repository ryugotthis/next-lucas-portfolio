import FAQCard from '@/components/homepage/FAQCard';
import InquiryCard from '@/components/homepage/InquiryCard';
import ProcessList from '@/components/homepage/ProcessList';
import ReviewList from '@/components/homepage/ReviewList';

import BookingButton from '@/components/ui/BookingButton';

import PreviewCard from '@/components/ui/PreviewCard';

import Link from 'next/link';
import Image from 'next/image';
import Comparison from '@/components/homepage/Comparison';
import Fit from '@/components/homepage/Fit';
import PackageDetails from '@/components/homepage/PackageDetails';
import DesignSystemCarousel from '@/components/homepage/Designsystemcarousel';

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
        <div className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[20px]">
          <span className="text-text-sub text-[10px] md:text-[14px] lg:text-[16px]">
            BRANDING CLÉ EN MAIN
          </span>

          <h1
            id="hero-title"
            className="bold block text-[28px] leading-[28px] md:w-[470px] md:text-[40px] md:leading-[40px] lg:w-[750px] lg:text-[64px] lg:leading-[64px]"
          >
            VOTRE IMAGE DE
            <br />
            MARQUE EN 21 JOURS.
          </h1>

          <p className="text-text-sub mb-[21px] block w-[315px] text-[14px] md:mb-[16px] md:w-[435px] lg:mb-[12px] lg:w-[421px] lg:text-[16px]">
            Je construis des systèmes visuels pour les fondateurs qui
            <br />
            veulent monter en gamme. Livré en 21 jours, prêt à<br />
            l'emploi dès le premier jour.
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
        className="mt-[27px] flex flex-col gap-[24px] md:mt-[55px] md:gap-[40px] lg:mt-[70px] lg:gap-[67px]"
      >
        {/* 1행: ALCÔVE (전체 너비) */}
        <PreviewCard
          url="/project/alcove"
          imageSrc="/images/homepage/projects-images/alcove.jpg"
          className="aspect-[340/192] cursor-pointer md:aspect-[16/9]"
          subtitle="CAFE & STUDIO DE PILATE"
          title="ALCOVE & ALCOVE EVENTS"
        />

        {/* 2행: MYCLERK & SCORP-IO */}
        <div className="grid grid-cols-1 gap-x-[24px] gap-y-[24px] md:grid-cols-2 md:gap-y-[40px]">
          <PreviewCard
            url="/project/myclerk"
            imageSrc="/images/homepage/projects-images/myclerk.jpg"
            className="aspect-[340/192] cursor-pointer md:aspect-[660/450]"
            subtitle="APP POUR RESTAURATEURS"
            title="MYCLERK"
          />
          <PreviewCard
            url="/project/scorp-io"
            imageSrc="/images/homepage/projects-images/scorp-io.mp4"
            className="aspect-[340/192] cursor-pointer md:aspect-[660/450]"
            subtitle="TECH & ENERGIES"
            title="SCORP-IO"
          />
        </div>

        {/* 3행: DOLMEN & DGK & SNEAKY */}
        <div className="grid grid-cols-1 gap-x-[24px] gap-y-[24px] md:grid-cols-3 md:gap-y-[40px]">
          <PreviewCard
            url="/project/dolmen"
            imageSrc="/images/homepage/projects-images/dolmen.mp4"
            className="aspect-[340/192] cursor-pointer md:aspect-[432/450]"
            subtitle="AGENCE GROWTH"
            title="DOLMEN"
          />
          <PreviewCard
            url="/project/dgk"
            imageSrc="/images/homepage/projects-images/dgk.jpg"
            className="aspect-[340/192] cursor-pointer md:aspect-[432/450]"
            subtitle="DATA ANALYTICS"
            title="DATA GOVERNANCE KITCHEN"
          />
          <PreviewCard
            url="/project/sneaky"
            imageSrc="/images/homepage/projects-images/sneaky.jpg"
            className="aspect-[340/192] cursor-pointer md:aspect-[432/450]"
            subtitle="AGENCE DE VOYAGE"
            title="SNEAKY"
          />
        </div>

        {/* 4행: KENKO & RADIANT */}
        <div className="grid grid-cols-1 gap-x-[24px] gap-y-[24px] md:grid-cols-2 md:gap-y-[40px]">
          <PreviewCard
            url="/project/kenko"
            imageSrc="/images/homepage/projects-images/kenko.jpg"
            className="aspect-[340/192] cursor-pointer md:aspect-[660/450]"
            subtitle="STUDIO DE POTERIE"
            title="KENKO"
          />
          <PreviewCard
            url="/project/radiant"
            imageSrc="/images/homepage/projects-images/radiant.jpg"
            className="aspect-[340/192] cursor-pointer md:aspect-[660/450]"
            subtitle="CAFÉ"
            title="RADIANT"
          />
        </div>
      </section>

      {/* about me */}
      <section
        aria-labelledby="about-title"
        className="mt-[64px] flex flex-col-reverse items-center gap-[28px] px-[24px] md:mt-[76px] md:flex-row-reverse md:justify-center md:gap-[48px] md:px-0 lg:mt-[138px] lg:gap-[64px]"
      >
        {/* 오른쪽 텍스트 */}
        <div className="flex w-full flex-col items-center gap-[12px] text-center md:max-w-[420px] md:items-start md:text-left">
          <span className="text-text-sub text-[12px] md:text-[14px]">
            +100 fondateurs accompagnés & 6 ans d'expérience
          </span>
          <h2
            id="about-title"
            className="bold text-[24px] leading-[26px] md:text-[40px] md:leading-[40px] lg:text-[48px] lg:leading-[48px]"
          >
            JE SUIS LUCAS,
            <br />
            BRAND DESIGNER.
          </h2>
          <p className="text-description text-[14px] leading-[20px] lg:text-[16px] lg:leading-normal">
            Plus qu'une identité visuelle, je construis un système de marque que vous pouvez faire
            vivre seul, dès la livraison, même si vous n’êtes pas designer.
            <br />
            <br />
            Et je reste avec vous après le projet, parce que c'est à ce moment que tout commence
            vraiment.
          </p>
          <div className="mt-[8px] md:mt-0">
            <BookingButton />
          </div>
        </div>

        {/* 왼쪽 이미지 */}
        <div className="relative aspect-[4/5] w-[200px] overflow-hidden rounded-[4px] sm:w-[240px] md:aspect-[3/4] md:w-[260px] lg:w-[460px]">
          <Image
            src="/images/me/lucas.jpg"
            alt="Lucas en train de dessiner dans son carnet"
            fill
            sizes="(min-width: 1024px) 460px, (min-width: 768px) 260px, (min-width: 640px) 240px, 200px"
            className="object-cover"
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
          className="bold w-[352px] text-center text-[20px] leading-[24px] uppercase md:w-[320px] md:text-[24px] md:leading-[28px] lg:w-[659px] lg:text-[48px] lg:leading-[48px]"
        >
          CE QUE LES FONDATEURS
          <br />
          VIVENT TROP SOUVENT
        </h2>

        <div className="mt-[32px] grid w-full grid-cols-1 items-center gap-y-[28px] md:mt-[48px] md:grid-cols-[auto_auto] md:justify-center lg:mt-[64px]">
          {/* 왼쪽 일러스트 */}
          <div className="relative mx-auto hidden h-[340px] w-[340px] md:block lg:h-[560px] lg:w-[560px]">
            <Image src="/illustrations/Thinking_illu.png" alt="" fill aria-hidden="true" />
          </div>

          {/* 오른쪽 텍스트 컬럼 */}
          <div className="mx-auto flex w-full max-w-[420px] flex-col gap-[20px] md:mx-0 md:w-[540px] md:max-w-none md:gap-[24px] md:pr-[80px] lg:w-[580px] lg:gap-[28px] lg:pr-[120px]">
            <div className="border-l-[3px] border-[#7061FF] pl-[12px] lg:border-l-4 lg:pl-[16px]">
              <p className="bold text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] lg:text-[24px] lg:leading-[28px]">
                Votre activité grandit, mais votre marque reste à la traîne ?
              </p>
              <p className="text-description mt-[8px] text-[12px] leading-[16px] md:text-[14px] md:leading-[18px]">
                Je construis une identité à la hauteur de ce que vous êtes devenu.
              </p>
            </div>

            <div className="border-l-[3px] border-[#7061FF] pl-[12px] lg:border-l-4 lg:pl-[16px]">
              <p className="bold text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] lg:text-[24px] lg:leading-[28px]">
                Vos supports ne se ressemblent pas d&apos;un endroit à l&apos;autre ?
              </p>
              <p className="text-description mt-[8px] text-[12px] leading-[16px] md:text-[14px] md:leading-[18px]">
                Je livre un système pour que tout reste cohérent.
              </p>
            </div>

            <div className="border-l-[3px] border-[#7061FF] pl-[12px] lg:border-l-4 lg:pl-[16px]">
              <p className="bold text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] lg:text-[24px] lg:leading-[28px]">
                Vous recréez chaque support de zéro : post, menu, présentation ?
              </p>
              <p className="text-description mt-[8px] text-[12px] leading-[16px] md:text-[14px] md:leading-[18px]">
                Un kit réseaux et des assets sont prêts à l&apos;emploi dès le lendemain de la
                livraison.
              </p>
            </div>

            <div className="border-l-[3px] border-[#7061FF] pl-[12px] lg:border-l-4 lg:pl-[16px]">
              <p className="bold text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] lg:text-[24px] lg:leading-[28px]">
                Vous hésitez à montrer votre marque à vos clients ou partenaires ?
              </p>
              <p className="text-description mt-[8px] text-[12px] leading-[16px] md:text-[14px] md:leading-[18px]">
                Votre branding reflète enfin le niveau de ce que vous avez construit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* comparison section */}
      {/* <section
        aria-labelledby="comparison-title"
        className="mt-[64px] flex flex-col items-center px-[24px] md:mt-[76px] md:px-0 lg:mt-[138px]"
      >
        <Comparison />
      </section> */}

      {/* process section */}
      <section
        id="process"
        aria-labelledby="process-title"
        className="mt-[64px] md:mt-[76px] lg:mt-[138px]"
      >
        <div className="mb-[36px] flex flex-col items-center gap-[12px] md:mb-[32px] lg:mb-[44px] lg:gap-[20px]">
          <h2 className="bold w-[352px] text-center text-[20px] leading-[24px] uppercase md:w-[380px] md:text-[24px] md:leading-[28px] lg:w-[750px] lg:text-[48px] lg:leading-[48px]">
            Une méthode pensée pour que votre projet prenne vie.
          </h2>
          <p className="w-[293px] text-center text-[12px] leading-[16px] text-[#b8b8b8] md:w-[339px] md:text-[14px] md:leading-[16px] lg:w-[469px] lg:text-[18px] lg:leading-[22px]">
            Je ne crée pas un branding figé. Je construis un système visuel que votre équipe peut
            faire grandir sans moi.
          </p>
        </div>
        <ProcessList />
      </section>

      {/* fit section */}
      <Fit />

      {/* pacakage section */}
      <PackageDetails />

      {/* Design carousel section */}
      <DesignSystemCarousel />

      {/* Review section */}
      <section
        id="review"
        aria-labelledby="review-title"
        className="mt-[72px] flex flex-col items-center md:mt-[68px] lg:mt-[152px]"
      >
        <div className="mb-[36px] flex flex-col items-center gap-[12px] md:mb-[32px] lg:mb-[44px] lg:gap-[20px]">
          <h2 className="bold w-[352px] text-center text-[20px] leading-[24px] uppercase md:w-[380px] md:text-[24px] md:leading-[28px] lg:w-[750px] lg:text-[48px] lg:leading-[48px]">
            Ce que disent mes clients
          </h2>
          <p className="w-[293px] text-center text-[12px] leading-[16px] text-[#b8b8b8] md:w-[339px] md:text-[14px] md:leading-[16px] lg:w-[469px] lg:text-[18px] lg:leading-[22px]">
            + de 100 fondateurs accompagnés & 6 ans d’expériences
          </p>
        </div>
        <div className="mt-[23px] w-full md:mt-[34px] lg:mt-[36px]">
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
