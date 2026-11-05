import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/research', '/calculator', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/contact/thank-you'],
      },
      {
        // Explicitly allow Search, AI Answer & Social Crawlers (Phase 1.3 SEO / AEO / GEO)
        userAgent: [
          'Googlebot',
          'Bingbot',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'Twitterbot',
          'facebookexternalhit',
          'Discordbot',
          'TelegramBot',
        ],
        allow: ['/', '/research', '/calculator', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/contact/thank-you'],
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
