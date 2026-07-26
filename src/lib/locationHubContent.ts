import type { Location } from "@/data/locations";
import { hashStr, pick } from "@/lib/subServiceLocationContent";

// ── Location HUB content ────────────────────────────────────────────────────
// Distinct from the per-service LEAF generators in subServiceLocationContent.ts.
// The hub speaks to the WHOLE town (all four service families at once) and must
// avoid reusing the leaf prose, so it draws different angles out of the same
// location.profile data: vibe, all four serviceNotes, neighborhoods, housing,
// landmarks, scenarios. Every string below is either unique per town (it embeds
// authored profile data) or rotated by seed so connective phrasing differs
// town-to-town — which is what pulls cross-town similarity down.

export function hubSeed(loc: Location): number {
  return hashStr(`hub|${loc.slug}`);
}

export function hubTitle(loc: Location, seed: number): string {
  const variants = [
    `Locksmith in ${loc.name}, NJ ${loc.zipCodes[0]} | Licensed Local Service — Garden State`,
    `${loc.name} Locksmith | Emergency, Home, Auto & Commercial — Garden State NJ`,
    `Local Locksmith in ${loc.name}, ${loc.county} | 7 AM–10 PM — Garden State`,
    `${loc.name}, NJ Locksmith | Licensed, Insured & Local — Garden State`,
  ];
  return pick(variants, seed);
}

export function hubDescription(loc: Location, seed: number): string {
  const lm = loc.profile.landmarks[0];
  const variants = [
    `Need a locksmith in ${loc.name}, NJ? Garden State Locksmith covers every home, business, and vehicle across ${loc.zipCodes.join(", ")} — from ${lm} outward. Licensed NJ techs, fast local dispatch, 7 AM–10 PM. Call (856) 588-0580.`,
    `Local ${loc.name} locksmith serving ${loc.county}. Lockouts, rekeys, auto keys, and commercial hardware handled by NJ-licensed techs who know ${loc.name}'s streets and the ${lm} area. Call (856) 588-0580.`,
    `Garden State Locksmith is the local choice in ${loc.name}, NJ (${loc.zipCodes[0]}). Emergency, residential, automotive, and commercial work — fast dispatch to ${loc.name} and the surrounding ${loc.county} towns. Call (856) 588-0580.`,
    `From ${lm} to every quiet street in between, Garden State Locksmith covers ${loc.name}, NJ. Licensed, insured, background-checked techs for homes, cars, and businesses. Call (856) 588-0580.`,
  ];
  return pick(variants, seed);
}

// Two-sentence hero/intro that frames the whole town from its `vibe`.
export function hubIntro(loc: Location, seed: number): string {
  const lm = pick(loc.profile.landmarks, seed);
  const openers = [
    `${loc.name} is ${loc.profile.vibe}. Garden State Locksmith works this whole town — every home, storefront, and vehicle, not just the blocks closest to the highway.`,
    `Home to roughly ${loc.population} people, ${loc.name} is ${loc.profile.vibe}. Our licensed techs cover all of it, from ${lm} to the far edges of the ${loc.zipCodes.join("/")} zip area.`,
    `${loc.name} — ${loc.profile.vibe} — is one of the ${loc.county} towns we're dispatched to most. We know its doors, its hardware, and how fast we can reach it.`,
    `In ${loc.name}, ${loc.profile.vibe.replace(/^a /, "you'll find a ")}. Garden State Locksmith serves the entire community: lockouts, new hardware, car keys, and business security alike.`,
  ];
  return pick(openers, seed);
}

// Whole-town coverage sentence: weaves neighborhoods + zips + landmarks.
export function hubCoverage(loc: Location, seed: number): string {
  const hoods = loc.profile.neighborhoods.length
    ? loc.profile.neighborhoods.slice(0, 3).join(", ")
    : "";
  const lms = loc.profile.landmarks.slice(0, 2).join(" and ");
  const zipPhrase = loc.zipCodes.length > 1 ? `zip codes ${loc.zipCodes.join(", ")}` : `zip code ${loc.zipCodes[0]}`;
  const variants = [
    `We cover all of ${loc.name} — ${zipPhrase}${hoods ? `, including ${hoods}` : ""} — and stage mobile units across ${loc.county} so the nearest tech reaches you fast, day or night.`,
    `Every ${loc.name} address is in our service zone: ${zipPhrase}${hoods ? ` and neighborhoods like ${hoods}` : ""}, out past ${lms}. Not sure if we reach you? A quick call confirms it in seconds.`,
    `From ${lms} to the residential streets beyond, our ${loc.name} coverage spans ${zipPhrase}${hoods ? `, ${hoods},` : ""} and the rest of the ${loc.county} towns around it.`,
  ];
  return pick(variants, seed + 4);
}

// Four unique-per-town "how the work differs here" cards, one per service family.
// serviceNotes are authored per town, so this block is almost entirely unique.
export function hubLocalKnowledge(loc: Location): Array<{ label: string; body: string }> {
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return [
    { label: `Homes in ${loc.name}`, body: `${cap(loc.profile.serviceNotes.residential)}.` },
    { label: `${loc.name} businesses`, body: `${cap(loc.profile.serviceNotes.commercial)}.` },
    { label: `Cars & keys`, body: `${cap(loc.profile.serviceNotes.auto)}.` },
    { label: `Emergencies`, body: `${cap(loc.profile.serviceNotes.emergency)}.` },
  ];
}

export function hubHousingIntro(loc: Location, seed: number): string {
  const variants = [
    `The housing stock in ${loc.name} shapes almost every lock job here. We stock our trucks for what the town actually has:`,
    `Locks follow the buildings. In ${loc.name}, that means being ready for:`,
    `Knowing ${loc.name}'s properties is half the job. The common building types we work on:`,
  ];
  return pick(variants, seed + 7);
}

export function hubScenariosIntro(loc: Location, seed: number): string {
  const variants = [
    `A few of the calls we handle most often in ${loc.name}:`,
    `Typical ${loc.name} jobs look like this:`,
    `Recent ${loc.name} work — the kind of thing we show up for weekly:`,
  ];
  return pick(variants, seed + 9);
}

export function hubFAQs(loc: Location, seed: number): Array<{ q: string; a: string }> {
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const hoodLine = loc.profile.neighborhoods.length
    ? `, including ${loc.profile.neighborhoods.slice(0, 3).join(", ")}`
    : "";
  const lm = pick(loc.profile.landmarks, seed);
  const housing = pick(loc.profile.housingStock, seed + 2);
  const scenario = pick(loc.profile.commonScenarios, seed + 3);
  return [
    {
      q: `What parts of ${loc.name} do you cover?`,
      a: `Every address in ${loc.name} — zip code${loc.zipCodes.length > 1 ? "s" : ""} ${loc.zipCodes.join(", ")}${hoodLine} — plus the surrounding ${loc.county} towns. Our units stage across the county, so wherever you are, from ${lm} on out, the closest available tech is sent to you.`,
    },
    {
      q: `Do you handle both homes and businesses in ${loc.name}?`,
      a: `Yes. ${cap(loc.profile.serviceNotes.residential)}, and on the commercial side, ${loc.profile.serviceNotes.commercial}. We carry residential and commercial hardware on the same truck, so most ${loc.name} jobs are done in one visit.`,
    },
    {
      q: `What lock problems are most common in ${loc.name}?`,
      a: `It varies by property, but a very common ${loc.name} call is ${scenario}. ${cap(housing)} are widespread here, and their hardware has its own quirks — which is exactly why we send a tech who already knows the town.`,
    },
    {
      q: `Are you a real local ${loc.county} locksmith, or a call center?`,
      a: `A real local company. We're in ${loc.name} regularly and know it firsthand — ${loc.profile.vibe}. That's the difference between us and a national dispatcher who's never seen your street.`,
    },
    {
      q: `What are your hours in ${loc.name}?`,
      a: `We answer ${loc.name} calls 7 AM–10 PM Monday through Thursday and Sunday, 7 AM–6 PM Friday, and we're closed Saturdays. Holidays and Sundays are covered, and every job is done by an NJ-licensed technician.`,
    },
  ];
}

export function hubServiceMenuHeading(loc: Location, seed: number): string {
  const variants = [
    `Every Locksmith Service in ${loc.name}`,
    `Full Service Menu for ${loc.name}`,
    `What We Do in ${loc.name}`,
    `${loc.name} Locksmith Services — A to Z`,
  ];
  return pick(variants, seed + 11);
}

export function hubLocalHeading(loc: Location, seed: number): string {
  const variants = [
    `What Lock Work in ${loc.name} Actually Looks Like`,
    `${loc.name}, Up Close — How the Work Differs Here`,
    `Why ${loc.name} Isn't a Generic Locksmith Call`,
    `The ${loc.name} Details We Plan Around`,
  ];
  return pick(variants, seed + 13);
}
