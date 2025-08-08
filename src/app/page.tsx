import PackageList from '@/components/homepage/PackageLists';
import ProcessList from '@/components/homepage/ProcessList';
import Hearder from '@/components/layouts/Header';
import BookingButton from '@/components/ui/BookingButton';

import PreviewCard from '@/components/ui/PreviewCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Hearder />
      <section className="mt-[80px] flex md:mt-[80px] lg:mt-[178px]">
        <div>
          <span className="text-[10px] md:text-[14px] lg:text-[16px]">
            Branding • Identité visuelle
          </span>

          <p className="bold block text-[28px] leading-[28px] md:w-[470px] md:text-[40px] md:leading-[40px] lg:h-[153px] lg:w-[750px] lg:text-[64px] lg:leading-[64px]">
            Osez un branding unique
            <br /> et devenez l’option N°1
          </p>

          <p className="mt-[51px] mb-[21px] block w-[315px] text-[14px] md:mt-[60px] md:mb-[16px] md:w-[435px] lg:mt-[36px] lg:mb-[12px] lg:w-[421px] lg:text-[16px]">
            Je vous accompagne dans la création d’une identité visuelle claire et vraiment
            différenciante, pour révéler le plein potentiel de votre projet.
          </p>

          {/* <button className="bg-primary mt-[12px] h-[41px] w-[216px] rounded-[5px] text-[14px] text-white">
            Prendre RDV
          </button> */}
          <BookingButton />
        </div>
        <div className="relative">
          <div className="absolute hidden md:left-[-70px] md:mt-[-120px] md:block md:h-[459px] md:w-[458px] lg:left-[-68px] lg:mt-[-230px] lg:h-[634px] lg:w-[634px]">
            <Image src={'/illustrations/Blurred_Illu.png'} alt="illustration" fill />
          </div>
        </div>
      </section>

      <section className="mt-[27px] flex flex-col gap-[12px] md:mt-[55px] md:gap-[33px] lg:mt-[70px] lg:gap-[67px]">
        <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2 md:gap-[24px]">
          <PreviewCard
            url="/"
            imageSrc="/images/homepage/desktop-tablet/1.mp4"
            className="aspect-[340/192] md:aspect-[660/450]"
            title="KenKo"
            description="Kenko, un studio où la poterie et le bien-être intérieur ne font qu’un."
          />
          <PreviewCard
            url="/"
            className="aspect-[340/192] md:aspect-[660/450]"
            imageSrc="/images/homepage/desktop-tablet/2.mp4"
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
          url="/"
          className="aspect-[340/192] md:aspect-[660/450]"
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
            url="/"
            className="aspect-[340/192] md:aspect-[432/450]"
            imageSrc="/images/homepage/desktop-tablet/4.gif"
            title="Jeremy Savary"
            description={
              <>
                Une identité visuelle tech et premium pour un profil data <br />
                d’exception.
              </>
            }
          />
          <PreviewCard
            url="/"
            className="aspect-[340/192] md:aspect-[432/450]"
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
            url="/"
            className="aspect-[340/192] md:aspect-[432/450]"
            imageSrc="/images/homepage/desktop-tablet/6.gif"
            title="Okna"
            description={
              <>
                La solution cloud sur-mesure pour accompagner les marques <br />
                dans leurs projets en utilisant seulement ce dont ils ont besoins.
              </>
            }
          />
        </div>
      </section>
      <section className="mt-[64px] md:mt-[76px] lg:mt-[138px]">
        <div className="mb-[36px] flex flex-col items-center gap-[12px] md:mb-[32px] lg:mb-[44px] lg:gap-[20px]">
          <h1 className="bold w-[252px] text-center text-[20px] leading-[24px] md:w-[340px] md:text-[24px] md:leading-[28px] lg:w-[582px] lg:text-[48px] lg:leading-[48px]">
            La méthode pour garantir la réussite de votre projet
          </h1>
          <p className="w-[239px] text-center text-[12px] leading-[16px] text-[#b8b8b8] md:w-[386px] md:text-[14px] md:leading-[16px] lg:w-[470px] lg:text-[18px] lg:leading-[22px]">
            Pas de micromanagement, c’est moi qui vous accompagne pour définir les meilleures
            solutions pour votre marque
          </p>
        </div>
        <ProcessList />
      </section>
      <section className="mt-[64px] flex flex-col items-center md:mt-[76px] lg:mt-[138px]">
        <h1 className="bold text-[20px] leading-[24px] md:text-[24px] md:leading-[24px] lg:text-[48px] lg:leading-[48px]">
          Le package Identité Intégrale
        </h1>
        <p className="text-description bold mt-[5px] mb-[20px] w-[201px] text-[12px] leading-[16px] md:mt-[0px] md:mb-[37px] md:w-auto md:text-[14px] md:leading-[16px] lg:mt-[20px] lg:mb-[25px] lg:text-[18px] lg:leading-[22px]">
          Pour vous donner une longueur d’avance sur la concurrence.
        </p>
        <div className="flex h-[28px] w-[174px] items-center justify-center rounded-[22px] bg-[#0A0832] text-[10px] leading-[10px] text-[#DAD8FF] shadow-[0_0_16px_rgba(112,97,255,0.6)] md:h-[33px] md:w-[206px] md:text-[14px] md:leading-[14px] lg:h-[37px] lg:w-[238px] lg:text-[16px] lg:leading-[18px]">
          <p>
            Plus que <span className="bold">2 places</span> ce mois
          </p>
        </div>
        <div className="mt-[27px] w-full lg:mt-[33px]">
          <PackageList />
        </div>
      </section>
    </div>
  );
}
