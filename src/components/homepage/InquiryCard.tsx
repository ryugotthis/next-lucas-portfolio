import Image from 'next/image';
import Email from './Email';

export default function InquiryCard() {
  return (
    <div className="grid grid-cols-1 gap-[23px] md:grid-cols-2 md:gap-0">
      <div className="">
        <div>
          <h1 className="bold text-center text-[20px] md:text-start md:text-[24px] lg:text-[48px]">
            Un projet ? Une question ?
          </h1>
          <p className="mt-[16px] text-[12px] md:mt-[20px] md:max-w-[300px] lg:mt-[41px] lg:max-w-[518px] lg:text-[16px]">
            Que vous ayez un projet, une question ou simplement pour créer un premier contact,
            laissez-moi un message.
            <br />
            <br />
            Vous pouvez me contactez via le formulaire de contact, mon adresse mail ou mes réseaux
            sociaux.
            <br />
            <br />
            <span className="bold">Adresse email</span> : provostlucas.design@gmail.com
          </p>
        </div>
        {/* contact */}
        <div className="mt-[36px] flex flex-row gap-[6px] md:flex-col md:gap-[6px] lg:mt-[86px] lg:gap-[8px]">
          <div className="flex items-center gap-[13px]">
            <a
              href=""
              className="relative h-[30px] w-[30px] overflow-hidden rounded-[5px] lg:h-[38px] lg:w-[38px]"
            >
              <Image src="/icons/Linkedin.svg" fill alt="linkedin" className="object-contain" />
            </a>
            <p className="bold hidden text-[12px] md:block lg:text-[16px]">@lucasprovost</p>
          </div>
          <div className="flex items-center gap-[13px]">
            <a
              href=""
              className="relative h-[30px] w-[30px] overflow-hidden rounded-[5px] lg:h-[38px] lg:w-[38px]"
            >
              <Image src="/icons/Instagram.svg" alt="instagram" fill className="object-contain" />
            </a>
            <p className="bold lg:text-[16px ] hidden text-[12px] md:block lg:text-[16px]">
              @lucas.prvst
            </p>
          </div>

          <div className="flex items-center gap-[13px]">
            <a
              href=""
              className="relative h-[30px] w-[30px] overflow-hidden rounded-[5px] lg:h-[38px] lg:w-[38px]"
            >
              <Image src="/icons/WhatsApp.svg" alt="whatsapp" fill className="object-contain" />
            </a>
            <p className="bold hidden text-[12px] md:block lg:text-[16px]">+33 6 48 43 51 24</p>
          </div>
        </div>
      </div>
      <div className="">
        <Email />
      </div>
    </div>
  );
}
