import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // JavaScript 기본 권장 규칙 세트 적용
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    // 브라우저 및 Node.js 환경의 전역 객체를 모두 인식하도록 설정
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // 여기에 더 많은 규칙 설정 가능
      'no-unused-vars': 'warn', // 사용하지 않는 변수에 경고
      'no-console': 'warn', // console 사용에 경고
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;
