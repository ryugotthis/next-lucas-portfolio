import ProjectList from '@/components/projects/ProjectList';

interface ProjectProps {
  params: Promise<{ slug: string }>;
}

export default async function projectPage({ params }: ProjectProps) {
  const { slug } = await params;

  return (
    <div className="mt-[100]">
      <ProjectList project={slug} />
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
