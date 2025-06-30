import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// className結合用関数
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// 環境変数取得処理
const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};

export const ENV_KEYS = {
  MICROCMS_API_KEY: () => getEnv('MICROCMS_API_KEY'),
  MICROCMS_SERVICE_DOMAIN: () => getEnv('MICROCMS_SERVICE_DOMAIN'),
} as const;
