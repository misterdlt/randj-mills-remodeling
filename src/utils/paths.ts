const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function pageUrl(path = '') {
  return `${base}/${path.replace(/^\//, '')}` || '/';
}
