# 📌 Lucas Provost – Branding Portfolio Website

실제 브랜딩 디자이너가 사용하는 포트폴리오 웹사이트를 Next.js App Router 기반으로 개발했습니다.  
페이지 성격에 따라 SSR·SSG·CSR을 혼합해 최적화했고, Media 컴포넌트·반응형 UI·다크모드·API Route 기반 이메일 전송 등  
실무 수준 구조를 구현하며 사용자 경험 중심으로 개발했습니다.

[![🌐 데모 사이트 바로가기](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://lucasprovost.com)

---

## 🧰 기술 스택

- **Next.js 15 (App Router)**
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4 (Design Token 기반 Theme)**
- **Postmark API (Route Handler 기반 이메일 전송)**
- **Turbopack**
- **Vercel (배포)**

---

## 🚀 핵심 구현 기능

### **1. SSR · SSG · CSR 혼합 렌더링 최적화**
페이지 성격별로 렌더링 방식을 선택하여  
**SEO, 초기 로딩 속도, 서버 요청 최소화**를 동시에 달성했습니다.

### **2. 이메일 전송 기능 (Postmark API 연동)**
- `/api/send` Route Handler에서 서버 측 이메일 처리  
- API key 보안 관리  
- 실제 문의가 들어오는 실서비스 기능

### **3. Media 컴포넌트 (이미지·GIF·MP4 통합 관리)**
- 파일 타입 자동 분리  
- IntersectionObserver로 뷰포트에 들어올 때만 자동 재생  
- 오프스크린 pause로 CPU 낭비 방지  
- Next/Image 기반 최적화

### **4. Tailwind Design System 구축**
- 색상/폰트/여백 토큰화 (`@theme inline`)  
- 라이트·다크 모드 통합  
- UI 일관성과 유지보수성 강화

### **5. 3단계 반응형 UI**
- Desktop / Tablet / Mobile 구조  
- 디자이너 요구 기반 인터랙션·시각적 디테일 반영  
- 실제 사용자 환경 중심으로 UX 개선

### **6. slug 기반 SSG + 자동 404 처리**
- `/project/[slug]` 페이지를 SSG로 구성  
- 존재하지 않는 slug는 자동 404 처리  
- **보안 · SEO · 빌드 성능** 모두 개선

### **7. 전역 레이아웃 및 SEO 관리**
- App Router의 `layout.tsx` 설계  
- Metadata API로 SEO 자동화  
- 시멘틱 HTML + aria로 접근성 강화

---

## 📁 폴더 구조 (요약)
```src
┣ app
┃ ┣ api/send → 이메일 전송 Route Handler
┃ ┣ project/[slug] → 프로젝트 상세 SSG 페이지
┃ ┣ layout.tsx → 전역 레이아웃
┃ ┗ page.tsx → 메인 페이지
┣ components
┃ ┣ homepage → 메인 UI 컴포넌트
┃ ┣ projects → 프로젝트 카드 · 리스트
┃ ┣ layouts → Header / Footer
┃ ┗ ui → Media, Button, Icon 등 공통 UI
```
---

## 📝 회고 & 배운 점

- SSR/SSG/CSR을 “언제 어떤 페이지에 적용해야 하는지” 실전 이해  
- Media 컴포넌트 설계로 **재사용성/확장성 있는 구조**의 중요성 체득  
- 성능 개선 시 **측정 → 원인 분석 → 조정 → 재측정**의 흐름 경험  
- Design Token 기반 Theme 구축으로 다크모드까지 확장  
- Figma 협업 시 **컴포넌트 기준·반응형 규칙 공유**의 중요성 인식  
- Conventional Commits의 필요성 느끼고 다음 프로젝트에서 기준 사전 정의 예정  
- **테스트 코드(Jest, RTL) 도입의 필요성 체감 → 차기 프로젝트에 적용 계획**  
- 초기 설계한 폴더 구조 기준이 전체 개발 흐름 유지에 도움됨

---

## 👤 역할

> **Frontend Developer 100% 담당**  
UI 개발, 구조 설계, 렌더링 전략, 퍼포먼스 최적화, API 연동, 배포까지 전부 직접 수행했습니다.
