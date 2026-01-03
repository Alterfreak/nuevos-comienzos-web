'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-QELM61VTQR';

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    if (typeof window === 'undefined' || !GA_ID) return;
    const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
    if (!gtag) return;
    const url = search ? `${pathname}?${search}` : pathname;
    gtag('config', GA_ID, { page_path: url });
  }, [pathname, search]);

  return null;
};

export default Analytics;
