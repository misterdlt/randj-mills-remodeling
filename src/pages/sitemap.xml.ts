import type { APIRoute } from 'astro';
import { pageUrl } from '../utils/paths';
import { serviceAreas } from '../data/areas';

const pages = ['', 'services', 'gallery', 'about', 'contact', 'areas', ...serviceAreas.map(area => `areas/${area.slug}`)];

export const GET: APIRoute = ({ site }) => {
  const urls = pages.map(path => `  <url><loc>${new URL(pageUrl(path), site).href}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
