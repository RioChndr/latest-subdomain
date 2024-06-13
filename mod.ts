export function latestSubdomain(hostname: string, options: {
  /** the domain/subdomain to consider as the root domain */
  parentDomain: string,
  /** Return non-matching domain if have different hostname */
  returnNonMatchingDomain?: boolean,
}): string {
  const { parentDomain, returnNonMatchingDomain } = options
  const parts = hostname.split('.').reverse()
  const parentParts = parentDomain.split('.').reverse().filter(v => v !== '')

  // in case hostname is differnt
  if (!parentParts.every((v, i) => v === parts[i])) {
    if (returnNonMatchingDomain) {
      return parts.reverse().join('.')
    }
    return ''
  }

  const subdomainParts = parts.slice(parentParts.length)
  return subdomainParts.reverse().join('.')
}

export default latestSubdomain