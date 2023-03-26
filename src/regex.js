export const E2E_FILTERS_CONTENT = (() => {
  const sectionId = localStorage.sectionId ?? 'my-filters';
  const { source: part1 } = new RegExp(`(?<=id="${sectionId}">)`);
  const { source: part2 } = /([\s\S]*?)(?=<\/section>)/;

  return new RegExp(`(${part1}${part2})`, 'gim');
})();
export const __E2E_FILTERS_CONTENT =
  /((?<=id="e2e-filters">)([\s\S]*?)(?=<\/section>))/gim;
export const DETAILS_LIST =
  /(<details\s+id="(?<id>[^"]+)">(?<content>[\s\S]*?)<\/details>)+/gim;
export const SINGLE_DETAIL = new RegExp(DETAILS_LIST.source, 'im');
export const DETAILS_REST_ATTR = /(details id="\w+").*>/gim;
export const CHECKED_BOX = /- \[(x|X)\] /;
export const CHECKED_ITEM = new RegExp(CHECKED_BOX.source + '(.+)', 'g');
