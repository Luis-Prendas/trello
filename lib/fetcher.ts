export const fetcher = async (url: string) => await fetch(url).then(async (res) => await res.json())
