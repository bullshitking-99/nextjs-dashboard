import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import clsx from 'clsx';
import { Metadata } from 'next';

// 定制化metadata，会自动被所有使用该layout的page继承
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard', // 前面带上该页面metadata的title
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'antialiased')}>{children}</body>
    </html>
  );
}
