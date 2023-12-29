import { Inter, Lusitana } from 'next/font/google';

// 在 Next.js 框架中，字体的 subsets 是指字体文件中包含的字符子集。
// 这个功能允许你在使用字体文件时，只包含你实际需要的字符子集，而不是全部字符，以减小文件大小和网络传输的负担。
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
