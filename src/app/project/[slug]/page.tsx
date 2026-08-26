import ProjectList from '@/components/projects/ProjectList';
import BookingButton from '@/components/ui/BookingButton';

// 1) 메타데이터: params를 Promise로 받고 await
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: slug,
    description: `Projet ${slug} — Portfolio de Lucas Provost.`,
    alternates: {
      canonical: `/project/${slug}`,
    },
  };
}

// 2) 페이지: params를 Promise로 받고 await
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="mt-[100px]">
      <ProjectList project={slug} />
      <div className="flex flex-col items-center justify-center">
        <p className="bold text-[14px] md:text-[24px]">Besoin du même package ?</p>
        <p className="text-description mb-[2%] text-[11px] md:text-[16px]">
          Prenez rendez-vous gratuitement pour échanger sur votre projet.
        </p>
        <BookingButton />
      </div>
    </div>
  );
}

// 3) SSG용 정적 파라미터

export async function generateStaticParams() {
  const slugs = [
    'kenko',
    'dgk',
    'alcove',
    'jeremy-savary',
    'sneaky',
    'okna',
    'scorp-io',
    'lidory',
    'sneaky-2',
    'okna-2',
    'scorp-io-2',
    'lidory-2',
    'Dolmen',
  ];
  return slugs.map((slug) => ({ slug }));
}

// 정적 목록 외의 slug는 자동 404로 처리
export const dynamicParams = false;
