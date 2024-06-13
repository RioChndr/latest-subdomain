import { assertEquals } from "jsr:@std/assert";
import { latestSubdomain } from "./mod.ts";

Deno.test(function testLatestSubdomain() {
  const testCase = [
    { hostname: '', parentDomain: 'example.com', expected: '' },
    { hostname: 'example.com', parentDomain: 'example.com', expected: '' },
    { hostname: 'sub.example.com', parentDomain: 'example.com', expected: 'sub' },
    { hostname: 'sub.sub.example.com', parentDomain: 'example.com', expected: 'sub.sub' },
    { hostname: 'sub.sub.example.com', parentDomain: 'sub.example.com', expected: 'sub' },
    { hostname: 'sub.sub.example.com', parentDomain: '.example.com', expected: 'sub.sub' },
    { hostname: '.example.com', parentDomain: '.example.com', expected: '' },
  ]

  for (const { hostname, parentDomain, expected } of testCase) {
    assertEquals(latestSubdomain(hostname, { parentDomain }), expected)
  }
});
