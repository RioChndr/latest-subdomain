import { assertEquals } from "jsr:@std/assert";
import { latestSubdomain } from "./mod.ts";

Deno.test(function testLatestSubdomain() {
  const testCase = [
    // empty hostname
    { hostname: '', parentDomain: 'example.com', expected: '' },
    // domain name with variantions
    { hostname: 'example.com', parentDomain: 'example.com', expected: '' },
    { hostname: 'sub.example.com', parentDomain: 'example.com', expected: 'sub' },
    { hostname: 'sub.sub.example.com', parentDomain: 'example.com', expected: 'sub.sub' },
    { hostname: 'sub.sub.example.com', parentDomain: 'sub.example.com', expected: 'sub' },
    // with leading dot
    { hostname: 'sub.sub.example.com', parentDomain: '.example.com', expected: 'sub.sub' },
    { hostname: '.example.com', parentDomain: '.example.com', expected: '' },

    // shorter parent domain
    { hostname: 'example.com', parentDomain: 'sub.example.com', expected: '' },

    // different parent domain
    { hostname: 'another.com', parentDomain: 'example.com', expected: '' },
    { hostname: 'test.another.com', parentDomain: 'example.com', expected: '' },
    { hostname: 'test.another.com', parentDomain: 'foo.example.com', expected: '' },

    // with returnNonMatchingDomain (or rnmd)
    { rnmd: true, hostname: 'another.com', parentDomain: 'example.com', expected: 'another.com' },
    { rnmd: true, hostname: 'test.another.com', parentDomain: 'example.com', expected: 'test.another.com' },
    { rnmd: true, hostname: 'test.another.com', parentDomain: 'foo.example.com', expected: 'test.another.com' },
  ]

  for (const { hostname, parentDomain, expected, rnmd } of testCase) {
    const res = latestSubdomain(hostname, { parentDomain, returnNonMatchingDomain: rnmd })
    assertEquals(res, expected, `latestSubdomain(${hostname}, { parentDomain: ${parentDomain} })`)
  }
});
