const baseUrl = import.meta.env.BASE_URL

const addBaseUrlPath = (partialPath: string): string => {
  return `${baseUrl}${partialPath}`
}

export default addBaseUrlPath