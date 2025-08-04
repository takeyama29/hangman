/**
 * createDummyData generates placeholder Japanese text for demonstrations.
 *
 * @param length - Number of characters to generate.
 * @returns A string consisting of repeated hiragana characters.
 */
export function createDummyData(length: number): string {
  const seed = 'あいうえおかきくけこさしすせそたちつてとなにぬねの';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += seed[i % seed.length];
  }
  return result;
}
