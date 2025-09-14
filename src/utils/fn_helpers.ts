export const getShortTitle = (title: string): string => {
  if (!title) return '';
  const idx = title.indexOf('.');
  return idx !== -1 ? title.slice(0, idx) : title;
};
