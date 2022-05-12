export function useBlockIndex(index) {
  return index < 10 ? `0${index}` : `index`
}
