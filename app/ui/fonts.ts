// app/ui/fonts.ts
import { Lusitana } from 'next/font/google';

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],       // pick the weights you need
  variable: '--font-lusitana' // optional: CSS variable output
});
