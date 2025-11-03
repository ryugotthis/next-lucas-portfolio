import ProjectList from '@/components/projects/ProjectList';
import BookingButton from '@/components/ui/BookingButton';

interface ProjectProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return {
    title: slug, // → 예: "kenko | Lucas Provost"
    description: `Projet ${slug} — Portfolio de Lucas Provost.`,
  };
}

export default async function projectPage({ params }: ProjectProps) {
  const { slug } = params;

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

// 빌드 타임에 어떤 slug를 생성할지 지정
export async function generateStaticParams() {
  // 실제로는 DB나 API에서 slug 목록을 가져올 수 있음
  const slugs = ['kenko', 'dgk', 'alcove', 'jeremy-savary', 'sneaky', 'okna'];

  return slugs.map((slug) => ({
    slug,
  }));
}
