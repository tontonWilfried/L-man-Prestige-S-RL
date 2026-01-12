'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import fr from '@/messages/fr.json';
import en from '@/messages/en.json';
import es from '@/messages/es.json';

const messages = {
  fr,
  en,
  es,
};

export default function Page() {
  const params = useParams();
  const locale = (params.locale as string) || 'fr';
  const t = messages[locale as keyof typeof messages] || messages.fr;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="rounded-2xl shadow-lg p-8 max-w-md w-full text-center" style={{ backgroundColor: '#F8F9FA', borderTop: '4px solid var(--color-primary)' }}>
        <h1 style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
          {t.welcome}
        </h1>
        
        <p className="text-lg" style={{ color: 'var(--color-gray)', marginTop: '1rem' }}>
          {t.hello}! 👋
        </p>

        <p className="text-sm" style={{ color: 'var(--color-gray)', marginTop: '1.5rem' }}>
          {t.language}: <strong style={{ color: 'var(--color-primary)' }}>{locale.toUpperCase()}</strong>
        </p>

        {/* Sélecteur de langue */}
        <div className="flex gap-3 justify-center my-6 flex-wrap">
          <Link
            href="/fr"
            className="px-4 py-2 rounded-lg font-semibold transition"
            style={{
              backgroundColor: locale === 'fr' ? 'var(--color-primary)' : 'var(--color-gray-lighter)',
              color: locale === 'fr' ? 'white' : 'var(--color-primary)',
              borderColor: locale === 'fr' ? 'var(--color-accent)' : 'transparent',
              border: '2px solid',
            }}
          >
            🇫🇷 {fr.french}
          </Link>
          <Link
            href="/en"
            className="px-4 py-2 rounded-lg font-semibold transition"
            style={{
              backgroundColor: locale === 'en' ? 'var(--color-primary)' : 'var(--color-gray-lighter)',
              color: locale === 'en' ? 'white' : 'var(--color-primary)',
              borderColor: locale === 'en' ? 'var(--color-accent)' : 'transparent',
              border: '2px solid',
            }}
          >
            🇬🇧 {en.english}
          </Link>
          <Link
            href="/es"
            className="px-4 py-2 rounded-lg font-semibold transition"
            style={{
              backgroundColor: locale === 'es' ? 'var(--color-primary)' : 'var(--color-gray-lighter)',
              color: locale === 'es' ? 'white' : 'var(--color-primary)',
              borderColor: locale === 'es' ? 'var(--color-accent)' : 'transparent',
              border: '2px solid',
            }}
          >
            🇪🇸 {es.spanish}
          </Link>
        </div>

        <div className="text-xs pt-4 border-t" style={{ borderColor: 'var(--color-gray-light)', color: 'var(--color-gray)' }}>
          Détection automatique: {locale === 'fr' && 'Français détecté'}
          {locale === 'en' && 'English detected'}
          {locale === 'es' && 'Español detectado'}
        </div>
      </div>

      {/* Design System Preview */}
      <div className="mt-12 max-w-4xl w-full">
        <h2 style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', textAlign: 'center' }}>
          Design System
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Couleur Primaire */}
          <div className="rounded-lg p-6 text-white text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
            <p className="font-semibold">Léman Blue</p>
            <p className="text-sm">#0A2A43</p>
          </div>
          
          {/* Accent */}
          <div className="rounded-lg p-6 text-white text-center" style={{ backgroundColor: 'var(--color-accent)' }}>
            <p className="font-semibold">Gold Accent</p>
            <p className="text-sm">#C5A059</p>
          </div>
          
          {/* Soft White */}
          <div className="rounded-lg p-6 text-center border-2" style={{ backgroundColor: 'var(--color-white)', borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
            <p className="font-semibold">Soft White</p>
            <p className="text-sm">#F8F9FA</p>
          </div>
        </div>
      </div>
    </main>
  );
}
