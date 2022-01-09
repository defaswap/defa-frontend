const PANCAKE_EXTENDED = 'https://defa.finance/extended-tokens.json'
const PANCAKE_TOP100 = 'https://defa.finance/top-100-tokens.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  PANCAKE_TOP100,
  PANCAKE_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
