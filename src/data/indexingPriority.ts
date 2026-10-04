export interface PriorityLink {
  label: string;
  href: string;
}

export const PRIORITY_SERVICE_LOCATION_LINKS: PriorityLink[] = [
  { label: "Emergency House Lockout in Cherry Hill", href: "/services/emergency/house-lockout/cherry-hill/" },
  { label: "Car Lockout in Camden", href: "/services/emergency/car-lockout/camden/" },
  { label: "Business Lockout in Mount Laurel", href: "/services/emergency/business-lockout/mount-laurel/" },
  { label: "Lock Rekeying in Voorhees", href: "/services/residential/lock-rekeying/voorhees/" },
  { label: "Deadbolt Installation in Moorestown", href: "/services/residential/deadbolt-installation/moorestown/" },
  { label: "Smart Lock Installation in Marlton", href: "/services/residential/smart-lock-installation/marlton/" },
  { label: "Commercial Lock Change in Trenton", href: "/services/commercial/commercial-lock-change/trenton/" },
  { label: "Master Key Systems in Hamilton", href: "/services/commercial/master-key-systems/hamilton/" },
  { label: "Access Control Systems in Ewing", href: "/services/commercial/access-control-systems/ewing/" },
  { label: "Panic Bar Installation in Deptford", href: "/services/commercial/panic-bar-installation/deptford/" },
  { label: "Car Key Replacement in Gloucester Township", href: "/services/automotive/car-key-replacement/gloucester-township/" },
  { label: "Transponder Key Programming in Pennsauken", href: "/services/automotive/transponder-key-programming/pennsauken/" },
];


// Towns that keep their full set of service × town pages. Picked by
// population (the 15 largest) plus Moorestown and Marlton (linked from the
// homepage priority list). Every other town is served by its /locations/ page;
// its old service × town URLs 301 there (see functions/_middleware.ts).
// Add more towns in batches once these are indexed.
export const SERVICE_PAGE_TOWNS: ReadonlySet<string> = new Set([
  "trenton",
  "hamilton",
  "cherry-hill",
  "camden",
  "gloucester-township",
  "washington-township",
  "mount-laurel",
  "winslow-township",
  "monroe-township-gloucester",
  "pennsauken",
  "ewing",
  "lawrence-township",
  "willingboro",
  "voorhees",
  "deptford",
  "moorestown",
  "marlton",
]);

export const hasServicePages = (townSlug: string) => SERVICE_PAGE_TOWNS.has(townSlug);
