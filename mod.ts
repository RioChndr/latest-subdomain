export function latestSubdomain(hostname: string, options: {
  /** the domain/subdomain to consider as the root domain */
  parentDomain?: string,
}) {
  const { parentDomain = 'example.com' } = options
  const parts = hostname.split('.')
  const parentParts = parentDomain.split('.').filter(v => v !== '')
  const subdomainParts = parts.slice(0, -parentParts.length)
  return subdomainParts.join('.')
}

export default latestSubdomain