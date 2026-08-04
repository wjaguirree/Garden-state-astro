export interface SubService {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  bullets: string[];
  responseTime: string;
  image: string;
  photos?: string[];
  keywords: string[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  description: string;
  emoji: string;
  heroImage: string;
  color: string;
  subServices: SubService[];
}

export const categories: ServiceCategory[] = [
  {
    slug: "emergency",
    name: "Emergency Locksmith",
    headline: "Need Help Right Now?",
    subheadline: "Fast-Response Emergency Locksmith Service Across New Jersey",
    description: "Locked out of your home, car, or business? Garden State Locksmith dispatches certified NJ emergency locksmiths across all of New Jersey — fast, professional, and non-destructive. Whether you're standing outside your front door at midnight, keys locked in your car in a parking lot, or dealing with a broken lock after a break-in, our mobile technicians arrive fully equipped to handle the situation on-site. We carry professional-grade tools for all lock types — standard deadbolts, high-security cylinders, smart locks, car door locks, and commercial hardware. No hidden fees, no damage to your property, and no job too complex.",
    emoji: "🚨",
    heroImage: "/car-lockout-service-new-jersey.webp",
    color: "red",
    subServices: [
      {
        slug: "house-lockout",
        name: "House Lockout",
        shortDesc: "Professional, damage-free home lockout service. Back inside fast.",
        longDesc: "Being locked out of your home is stressful, but it rarely needs to become a broken door. A Garden State technician arrives with a full pick-and-bypass kit and, in most cases, opens the lock non-destructively in minutes — single-pin picking on pin-tumbler deadbolts, latch-slipping and shimming on spring latches, and specialty methods for smart and high-security locks. We confirm you're the resident first, then choose the least-invasive method for your exact hardware: a 1920s mortise set is handled very differently from a modern Schlage or a Kwikset SmartKey cylinder. Drilling is a true last resort, used only on a failed or hardened lock once every other option is exhausted, and we tell you before we ever reach for a drill. Once you're inside, we can rekey or replace anything worn on the same visit.",
        bullets: [
          "Non-destructive entry — no damage to door or lock",
          "All residential lock types: deadbolts, knob locks, smart locks",
          "NJ licensed, bonded & background-checked technician",
          "Fast local dispatch throughout New Jersey",
          "Available 7 AM – 10 PM, 6 days a week",
          "Satisfaction guaranteed — we make it right if you're not happy"
        ],
        responseTime: "Same Day",
        image: "/house-lockout-nj.jpg",
        photos: ["/house-lockout-nj.jpg"],
        keywords: ["house lockout", "locked out of house nj", "home lockout service", "residential lockout new jersey", "locked out of home", "door unlock service nj"]
      },
      {
        slug: "car-lockout",
        name: "Car Lockout",
        shortDesc: "We come to you and open any make or model — no damage, no hassle.",
        longDesc: "Keys locked in the car? Skip the coat-hanger and slim-jim — on modern vehicles those catch airbag wiring, side-impact sensors, and power-window cabling behind the door panel, turning a lockout into a repair bill. Our automotive techs use the professional equivalent: an air wedge to create a small gap and a long-reach tool to pop the manual lock or door handle, with no scratched paint, bent frame, or torn weather-stripping. We open any make and model — domestic, foreign, and luxury — including push-to-start vehicles where the fob is locked inside. If your only key is trapped or lost, we can also cut and program a replacement on the spot so you're not stranded waiting on a tow.",
        bullets: [
          "Air-wedge and long-reach tools — no slim-jim damage",
          "Any make or model — domestic, foreign, luxury, push-to-start",
          "Zero damage to door, window, paint, or weather-stripping",
          "Mobile service — we come to your exact location",
          "Replacement key cut and programmed on-site if needed",
          "Available 7 AM – 10 PM including holidays"
        ],
        responseTime: "Same Day",
        image: "/car-lockout-service-new-jersey.webp",
        photos: ["/car-lockout-service-new-jersey.webp"],
        keywords: ["car lockout nj", "keys locked in car new jersey", "auto lockout service", "unlock car door nj", "locked out of car", "vehicle lockout service"]
      },
      {
        slug: "business-lockout",
        name: "Business Lockout",
        shortDesc: "Discreet commercial lockout service — minimal downtime, every time.",
        longDesc: "A business lockout costs money every minute the doors stay shut — and storefront hardware is a different animal from a house lock. We're equipped for commercial-grade cylinders, mortise locks, aluminum-frame glass doors with narrow-stile deadlatches, rim exit devices, and electronic keypads and fobs. Our tech assesses the door type on arrival and opens it without damaging the storefront, then verifies you're authorized to be there before any work begins — no manager present, no entry. When a lockout traces back to a fired employee, a lost master, or a failed access reader, we can rekey the affected cylinders or reprogram credentials on the same visit so the gap closes immediately. Most calls are handled discreetly, before staff or customers ever notice.",
        bullets: [
          "All commercial lock types including high-security hardware",
          "Electronic keypad and access control entry",
          "Discreet service — no damage, no drama",
          "Available during and outside business hours",
          "Follow-up rekey or lock change available on same visit",
          "Emergency commercial lockout throughout all NJ"
        ],
        responseTime: "Same Day",
        image: "/business-lockout-drill-nj.jpg",
        photos: ["/business-lockout-drill-nj.jpg"],
        keywords: ["business lockout nj", "commercial lockout service", "office lockout new jersey", "locked out of business", "store lockout", "commercial locksmith emergency nj"]
      },
      {
        slug: "broken-key-extraction",
        name: "Broken Key Extraction",
        shortDesc: "Key snapped in the lock? We extract it and cut a new one on-site.",
        longDesc: "A key snaps off when the metal is fatigued — usually a worn brass key in a stiff or misaligned lock — and the broken half stays wedged in the keyway. Poking at it with pliers, glue, or a jigsaw blade almost always pushes the fragment deeper or scores the wafers, turning a five-minute extraction into a cylinder replacement. Our techs use spiral and hook-style extractor picks that grab the blade and draw it straight out along the keyway, leaving the lock intact. Once the fragment is out, we cut you a fresh key on-site and check why the key failed in the first place — often the cylinder needs cleaning, lubrication, or a rekey. We handle door locks, deadbolts, padlocks, car doors, and ignition cylinders, where broken keys are trickiest.",
        bullets: [
          "Precise extraction tools — no damage to lock cylinder",
          "Residential, commercial, and automotive locks",
          "Fresh key cut on-site after extraction",
          "Rekeying available on same visit if needed",
          "Broken keys in ignition cylinders also handled",
          "Available 7 AM – 10 PM statewide"
        ],
        responseTime: "Same Day / Emergency",
        image: "/broken-key-extraction-nj.jpg",
        photos: ["/broken-key-extraction-nj.jpg"],
        keywords: ["broken key extraction nj", "key stuck in lock new jersey", "remove broken key", "key extraction service", "key snapped in door lock", "broken key in ignition nj"]
      },
      {
        slug: "lock-change-after-break-in",
        name: "Lock Change After Break-In",
        shortDesc: "Urgent lock replacement and door reinforcement after a break-in.",
        longDesc: "After a break-in, the goal is to make the home secure again tonight — and to fix the weak point the intruder actually used. Most forced entries don't defeat the lock; they split the jamb because the strike plate was held by short screws into soft trim. So we do more than swap cylinders: we replace compromised locks, install a heavy box strike anchored with 3-inch screws into the wall stud, and add a reinforcement plate or wrap where the frame cracked. If a window or slider was the entry point, we address that hardware too. We can photograph and itemize everything for your insurance claim and police report, and where it makes sense we'll recommend a high-security deadbolt so the same method won't work twice.",
        bullets: [
          "Emergency same-day response across NJ",
          "Full property security assessment included",
          "Upgrade to high-security locks available",
          "Door frame and strike plate reinforcement",
          "All entry points secured — front, rear, garage",
          "Insurance documentation assistance available"
        ],
        responseTime: "Emergency — ASAP",
        image: "/lock-change-after-break-in-nj.jpg",
        photos: ["/lock-change-after-break-in-nj.jpg"],
        keywords: ["lock change after break in nj", "emergency lock replacement new jersey", "after burglary locksmith", "break in lock repair", "post break-in security nj", "urgent lock change nj"]
      },
      {
        slug: "emergency-lock-repair",
        name: "Emergency Lock Repair",
        shortDesc: "Professional repair for jammed, frozen, or malfunctioning locks.",
        longDesc: "A lock that sticks, spins, or won't throw its bolt is telling you it's about to fail completely — often at the worst moment. Most of these problems aren't the lock itself but alignment: a door that's dropped on its hinges or swelled with humidity so the bolt no longer meets the strike, a set screw backed out, or a worn tailpiece and springs inside the cylinder. Our tech diagnoses the real cause instead of just forcing it — realigning the strike, adjusting or replacing the latch, cleaning and re-lubricating a gummed cylinder, or swapping worn tumblers and springs from the parts stock on the truck. Frozen or seized cylinders in winter are handled without cracking the housing. Most repairs are finished on the first visit, and we'll flag any lock that's genuinely past saving before you spend on it.",
        bullets: [
          "All lock types — residential, commercial, automotive",
          "Jammed, frozen, stripped, and worn lock repair",
          "Mobile parts inventory for on-site completion",
          "Available nights, weekends, and holidays",
          "Replacement with upgrade option if unrepairable",
          "Fast local dispatch throughout New Jersey"
        ],
        responseTime: "Fast dispatch",
        image: "/emergency-lock-repair-nj.jpg",
        photos: ["/emergency-lock-repair-nj.jpg"],
        keywords: ["emergency lock repair nj", "jammed lock repair new jersey", "broken lock fix", "malfunctioning lock service", "frozen lock repair nj", "24 hour lock repair new jersey"]
      }
    ]
  },
  {
    slug: "residential",
    name: "Residential Locksmith",
    headline: "Protect Your Home",
    subheadline: "Professional Home Security Services Across New Jersey",
    description: "Your home's security starts at the door — and Garden State Locksmith makes sure it's done right. We serve homeowners across all of New Jersey with a complete range of residential locksmith services: new deadbolt installations, rekeying after a move or a missing key, smart lock upgrades with app-based access, high-security lock replacements, and full home security consultations. Our NJ-licensed technicians bring the right tools and hardware to every job, so most visits are completed in a single call with no return trips needed. Whether you're a first-time homeowner securing a new purchase, a landlord rekeying between tenants, or a homeowner upgrading to a keypad entry system, our residential team handles it all with care and precision.",
    emoji: "🏠",
    heroImage: "/residential-locksmith-lock-installation-nj.webp",
    color: "blue",
    subServices: [
      {
        slug: "lock-installation",
        name: "Lock Installation",
        shortDesc: "Professional deadbolt and security hardware installation.",
        longDesc: "The best lock in the world is only as good as its installation — a shallow strike, a bolt that doesn't fully seat, or a mismatched backset leaves an expensive deadbolt easy to defeat. We start by measuring the backset (2-3/8\" or 2-3/4\") and door thickness so the new hardware actually fits, then bore a clean 2-1/8\" cross-bore and 1\" edge-bore where a door needs it. On install we set a full 1-inch bolt throw, mortise the strike flush, and anchor it with long screws into the framing rather than the soft jamb. We fit knob and lever sets, deadbolts, mortise locks, and smart locks, and match new hardware to the door's ANSI grade and finish. A typical door takes 30 to 45 minutes and leaves you with a lock that closes cleanly and locks without lifting or pulling the door.",
        bullets: [
          "All lock types and brands installed",
          "Deadbolts, knob sets, lever sets, mortise locks",
          "Smart lock and keypad installation",
          "Strike plate reinforcement included",
          "Same-day and scheduled appointments",
          "NJ licensed and insured technicians"
        ],
        responseTime: "Same Day or Scheduled",
        image: "/residential-locksmith-lock-installation-nj.webp",
        photos: ["/residential-locksmith-lock-installation-nj.webp"],
        keywords: ["lock installation nj", "install new lock new jersey", "deadbolt installation service", "door lock install nj", "residential lock installer", "home lock replacement nj"]
      },
      {
        slug: "lock-rekeying",
        name: "Lock Rekeying",
        shortDesc: "New keys, same locks — make all old keys useless instantly.",
        longDesc: "Rekeying changes which key opens a lock without replacing the lock itself. We remove the cylinder, drop in a new set of bottom pins matched to a fresh key, and every old key — including any you lost or handed to a past tenant, contractor, or ex — stops working immediately. It's a fraction of the cost of new hardware and takes only a few minutes per cylinder. The real advantage most people miss: we can key several different locks to a single key, so your front, back, and garage doors all open with one key instead of a crowded ring. It's the first thing we recommend after a closing, a breakup, a lost key, or a rental turnover. If a cylinder is worn or damaged, we'll tell you when a rekey won't hold and a replacement is the better call.",
        bullets: [
          "All old keys immediately made useless",
          "Fraction of the cost of full lock replacement",
          "All pins and springs replaced with new components",
          "Multi-lock master keying available",
          "New keys cut and provided on the spot",
          "Same-day service throughout NJ"
        ],
        responseTime: "Same Day",
        image: "/lock-rekeying-nj.jpg",
        photos: ["/lock-rekeying-nj.jpg"],
        keywords: ["lock rekeying nj", "rekey locks new jersey", "change lock combination nj", "rekey after moving", "new keys same lock", "residential rekeying service nj"]
      },
      {
        slug: "lock-repair",
        name: "Lock Repair",
        shortDesc: "Fix what's broken — often cheaper than replacing.",
        longDesc: "Not every lock problem needs a new lock. Most residential complaints — a knob that's gone loose, a key that has to be jiggled, a deadbolt that scrapes or won't latch — come from ordinary wear or a house that has settled: backed-out set screws, a strike that no longer lines up with the bolt, or dried grease inside the cylinder. We diagnose the actual cause rather than forcing it, then tighten and re-seat the hardware, realign or shim the strike, and clean and re-lubricate the cylinder with a dry PTFE or graphite lube (never WD-40, which gums up over time). Worn springs, tailpieces, and tumblers are swapped from parts we carry for Schlage, Kwikset, Baldwin, and other common brands. Repairing is usually faster and cheaper than replacing — and we'll be honest when a lock is worn past the point of a worthwhile fix.",
        bullets: [
          "Sticking, jammed, and worn lock repair",
          "Loose hardware tightened and realigned",
          "Cylinder and internal component replacement",
          "Door alignment adjustment for better latch engagement",
          "Smart lock and electronic lock diagnostics",
          "All major brands serviced"
        ],
        responseTime: "Same Day",
        image: "/lock-repair-nj.jpg",
        photos: ["/lock-repair-nj.jpg"],
        keywords: ["lock repair nj", "fix broken lock new jersey", "door lock repair service", "jammed lock fix nj", "residential lock repair", "lock mechanism repair nj"]
      },
      {
        slug: "smart-lock-installation",
        name: "Smart Lock Installation",
        shortDesc: "Upgrade to keyless entry — convenient, connected, secure.",
        longDesc: "Smart locks let you lock up from your phone, hand out time-limited codes instead of keys, and see who came and went — but the install choice matters more than the brand. Retrofit models (August, Yale Approach) keep your existing deadbolt and key and only swap the interior thumbturn, which is ideal for renters and keyed-alike homes. Full-replacement models (Schlage Encode, Kwikset Halo) put the keypad and Wi-Fi radio in the door itself. We check the two things most DIY installs get wrong — door thickness and backset compatibility, and whether the deadbolt is properly aligned, because a smart lock will jam and drain batteries on any door that has to be pulled shut to lock. We handle the hardware, the app and Wi-Fi (or Z-Wave/Zigbee hub) setup, code programming, and integration with Alexa, Google, or Apple Home, then show you how to manage users.",
        bullets: [
          "All major brands: August, Schlage, Yale, Kwikset",
          "Wi-Fi, Z-Wave, and Zigbee models installed",
          "App setup and smart home integration included",
          "Keypad, fingerprint, and voice-control options",
          "Backup key entry always configured",
          "Full orientation so you know every feature"
        ],
        responseTime: "Scheduled",
        image: "/smart-lock-installation-nj.jpg",
        photos: ["/smart-lock-installation-nj.jpg"],
        keywords: ["smart lock installation nj", "keyless lock install new jersey", "August lock installer", "Schlage Encode installation nj", "wifi door lock setup", "smart home lock nj"]
      },
      {
        slug: "deadbolt-installation",
        name: "Deadbolt Installation",
        shortDesc: "Heavy-duty deadbolt installation for maximum door security.",
        longDesc: "A deadbolt is the single most cost-effective security upgrade a home can get — but only if it's installed to resist a kick, not just to lock. We fit ANSI Grade 1 or Grade 2 deadbolts with a full 1-inch bolt throw and a hardened anti-saw insert, from Schlage, Medeco, and Baldwin among others. The part that actually stops forced entry is the strike: we install a reinforced box strike anchored with 3-inch screws that reach past the soft jamb into the wall stud, so the frame can't split. We set the bore and backset precisely for a clean throw and advise on single- vs double-cylinder — a double-cylinder (key both sides) protects against reach-through near glass, but we'll walk you through the egress trade-off since it needs a key to get out. Most single-door installs take well under an hour.",
        bullets: [
          "Single and double cylinder deadbolts",
          "High-security Medeco and Mul-T-Lock options available",
          "Strike plate anchored with 3\" screws into stud",
          "Precise alignment for smooth, reliable operation",
          "ANSI Grade 1 and 2 hardware stocked",
          "Same-day and scheduled service"
        ],
        responseTime: "Same Day or Scheduled",
        image: "/deadbolt-installation-nj.jpg",
        photos: ["/deadbolt-installation-nj.jpg"],
        keywords: ["deadbolt installation nj", "install deadbolt new jersey", "deadbolt lock service", "high security deadbolt nj", "door deadbolt installer", "Schlage deadbolt install nj"]
      },
      {
        slug: "mailbox-lock-replacement",
        name: "Mailbox Lock Replacement",
        shortDesc: "Fast mailbox lock replacement for homes and apartment buildings.",
        longDesc: "A mailbox lock guards your identity as much as your mail — bank cards, checks, and statements all pass through it. When a key is lost or a cam lock seizes and snaps, we replace it fast. For standard curbside boxes we fit a new wafer cam lock and cut fresh keys; for the cluster box units (CBUs) and 4C wall banks common in condos and apartments, we replace the individual tenant compartment locks with USPS-approved arrow-lock cylinders and can drill out a frozen or vandalized cam without damaging the box. On multi-unit installs we can re-pin the whole bank so no two tenants share a key. If your unit is a locked outgoing-mail or parcel compartment governed by the postal master lock, we'll tell you what a carrier has to handle versus what we can. Spare keys are cut on the spot.",
        bullets: [
          "Residential mailbox lock replacement",
          "Cluster box unit (CBU) servicing for apartments",
          "Most brands and styles stocked",
          "Immediate key cut and test on-site",
          "Available throughout NJ",
          "Quick turnaround — usually under 30 minutes"
        ],
        responseTime: "Same Day",
        image: "/mailbox-lock-replacement-nj.jpg",
        photos: ["/mailbox-lock-replacement-nj.jpg"],
        keywords: ["mailbox lock replacement nj", "mailbox lock repair new jersey", "apartment mailbox lock nj", "CBU mailbox key replacement", "cluster box lock nj", "mailbox rekey nj"]
      },
      {
        slug: "key-duplication",
        name: "Key Duplication",
        shortDesc: "Accurate key cutting for all home and office key types.",
        longDesc: "The reason a hardware-store copy so often sticks or won't turn is that it's a copy of an already-worn key — each generation drifts a little further off the original cut depths. We calibrate our duplicators regularly and, when a key is badly worn, cut a fresh one to the lock's original code or by decoding the cylinder, so it runs like the first key rather than the fifth. We duplicate standard brass house keys, Kwikset SmartKey, Schlage, and high-security Medeco and Mul-T-Lock keys, and we cut and program transponder and remote car keys, which an ordinary kiosk can't do. Restricted and patented keyways stamped \"Do Not Duplicate\" are handled only with documented authorization from the keyholder of record — the same protection that keeps someone else from copying yours. Need several? We can key-alike them so one key runs multiple locks.",
        bullets: [
          "All residential key types duplicated",
          "High-security key cutting including Medeco and Mul-T-Lock",
          "Keys guaranteed to work on first use",
          "Bulk copies available at reduced rate",
          "Mobile service or in-shop duplication",
          "No original needed if key code is known"
        ],
        responseTime: "Immediate",
        image: "/residential-key-duplication-nj.jpg",
        photos: ["/residential-key-duplication-nj.jpg"],
        keywords: ["key duplication nj", "key copy service new jersey", "house key copy nj", "spare keys cut nj", "key cutting service", "high security key duplication nj"]
      }
    ]
  },
  {
    slug: "commercial",
    name: "Commercial Locksmith",
    headline: "Secure Your Business",
    subheadline: "Commercial Security Solutions for NJ Businesses",
    description: "A business lockout, a security breach, or outdated access control can cost you time, money, and peace of mind. Garden State Locksmith provides comprehensive commercial locksmith services for businesses of every size across New Jersey — from single-location retail shops to multi-site office campuses. Our commercial technicians are trained to work with high-security Grade-1 deadbolts, panic hardware, electronic keypad systems, master key hierarchies, and full access control platforms. We minimize disruption to your operations: most commercial calls are completed in a single visit, during or outside business hours. Whether you need a fast rekey after an employee departure, a new access control system for a growing team, or an emergency lockout response in the middle of the day, Garden State Locksmith is the NJ commercial locksmith businesses trust.",
    emoji: "🏢",
    heroImage: "/commercial-locksmith-new-jersey.webp",
    color: "green",
    subServices: [
      {
        slug: "commercial-lock-change",
        name: "Commercial Lock Change",
        shortDesc: "Full commercial lock change and rekeying — all hardware replaced in one visit.",
        longDesc: "When an employee leaves with a key, a break-in exposes a weak point, or a facility upgrades, changing the locks restores control over who gets in. For a business we'll usually first ask whether you need a full change or just a rekey — but a change is the right call when hardware is worn, mismatched, or you're standardizing a building. We fit ANSI Grade 1 commercial cylindrical lever sets, mortise locks, and deadbolts built for high-cycle use, plus narrow-stile deadlatches for aluminum-and-glass storefronts. Where it fits your operation we'll move you to a small-format interchangeable core (SFIC) system, so future changes take seconds — you swap the core with a control key instead of pulling the whole lock. Work is documented and scheduled around your hours, and grade-1 stock on the truck means most jobs finish same-day.",
        bullets: [
          "ANSI Grade 1 commercial hardware stocked and installed",
          "All entry points addressed in single visit",
          "Cylindrical, mortise, and rim-mount lock types",
          "Keying to master key system available",
          "After-hours service available to minimize disruption",
          "Serving all NJ commercial properties"
        ],
        responseTime: "Same Day or Scheduled",
        image: "/commercial-locksmith-new-jersey.webp",
        photos: ["/commercial-locksmith-new-jersey.webp"],
        keywords: ["commercial lock change nj", "business lock replacement new jersey", "office lock change nj", "commercial rekeying service", "replace business locks nj", "commercial locksmith nj"]
      },
      {
        slug: "master-key-systems",
        name: "Master Key Systems",
        shortDesc: "One key opens everything — individual keys stay limited.",
        longDesc: "A master key system gives one key controlled access to many doors while each lower-level key opens only what it should — a change key for one office, a sub-master for a department, a grand master for the whole building. Done right it's convenient; done carelessly it's a liability. We design the hierarchy on paper first and build a proper bitting schedule so the pinning stays secure and doesn't accidentally create \"ghost keys\" that open doors they shouldn't. We pin master wafers into your existing or new cylinders, label and register every level, and strongly recommend a restricted, patent-protected keyway so no one can walk into a hardware store and copy a master. We also plan for growth, leaving room to add doors later without re-pinning the whole system, and keep your keying chart on file so future changes are fast and traceable — for offices, apartments, hotels, schools, and multi-tenant buildings.",
        bullets: [
          "Custom system design for your facility",
          "Hierarchical access levels — GMK, MK, Change Key",
          "Rekeying existing hardware into system",
          "Documented key control records provided",
          "Expandable as your facility grows",
          "All major commercial lock brands supported"
        ],
        responseTime: "Scheduled",
        image: "/master-key-system-nj.jpg",
        photos: ["/master-key-system-nj.jpg"],
        keywords: ["master key system nj", "master key installation new jersey", "commercial master key nj", "key hierarchy system", "building master key nj", "apartment master key system nj"]
      },
      {
        slug: "access-control-systems",
        name: "Access Control Systems",
        shortDesc: "Electronic access — delete credentials in seconds, audit who enters when.",
        longDesc: "Access control replaces keys with credentials you can revoke in seconds — PIN codes, cards, fobs, or a phone. Lose a key and you're rekeying; lose a fob and you just delete it. The hardware choices matter for both security and life safety, and we walk you through them. For credentials we steer clients off legacy 125 kHz prox cards (trivially cloned) toward encrypted 13.56 MHz smart cards or mobile Bluetooth. For the door, an electric strike works with most latching hardware and stays locked in a power loss, while a maglock holds 1,200+ lbs but must be tied into the fire alarm and a request-to-exit and release on power failure — that's code, not optional. We install everything from a single standalone keypad to cloud-managed, multi-door networked systems with scheduling and audit logs, integrate it with your existing doors and exit devices, and set up the admin so your team can manage users without us.",
        bullets: [
          "Keypad, card reader, fob, and mobile credential options",
          "Instant credential revocation without rekeying",
          "Time-based access scheduling",
          "Detailed audit logs — know exactly who entered when",
          "Single-door to enterprise multi-door systems",
          "Integration with alarm and CCTV systems available"
        ],
        responseTime: "Scheduled",
        image: "/access-control-systems-nj.jpg",
        photos: ["/access-control-systems-nj.jpg"],
        keywords: ["access control system nj", "electronic access control new jersey", "keypad door lock commercial nj", "key fob access system nj", "commercial access control installation", "business entry system nj"]
      },
      {
        slug: "high-security-locks",
        name: "High-Security Locks",
        shortDesc: "Real protection from picks, drills, and unauthorized key copies.",
        longDesc: "Two things make a lock \"high-security,\" and most hardware has neither. The first is a UL 437 / ANSI 156.30-rated body that physically resists picking, bumping, and drilling — hardened steel inserts, anti-drill ball bearings, and sidebar or telescoping-pin mechanisms that ordinary picks can't manipulate. The second, and the one people underrate, is key control: patented, restricted keyways where blanks are legally protected and a duplicate can only be cut against a signature card on file, so a departing employee or contractor can't quietly copy your key. We supply and install Medeco, Mul-T-Lock, ASSA, and Abloy across both — and can build them into a master-key or SFIC system so one high-security platform covers a whole facility. This is the right upgrade for exterior doors, IT and server rooms, pharmacies, cash areas, and any door where a copied key would be a real problem; we'll tell you where it's worth the cost and where a standard grade-1 lock is plenty.",
        bullets: [
          "UL-certified pick, bump, and drill resistance",
          "Patent-protected restricted keys — no unauthorized copies",
          "Medeco, Mul-T-Lock, ASSA ABLOY, and Abloy stocked",
          "Existing door prep respected — no major modifications",
          "Lifetime hardware warranty on select brands",
          "Ideal for server rooms, pharmacies, law firms, and safes"
        ],
        responseTime: "Scheduled",
        image: "/high-security-lock-installation-nj.jpg",
        photos: ["/high-security-lock-installation-nj.jpg"],
        keywords: ["high security locks nj", "Medeco lock installation new jersey", "Mul-T-Lock nj", "commercial high security lock", "pick resistant lock nj", "restricted key lock nj"]
      },
      {
        slug: "panic-bar-installation",
        name: "Panic Bar Installation",
        shortDesc: "Code-compliant panic hardware for emergency exits.",
        longDesc: "Panic hardware — crash bars, or \"exit devices\" — exists so anyone can get out of a building in an emergency with a single push, no key, knob, or special knowledge required. In New Jersey that's a code requirement, not a preference, on assembly and high-occupancy doors under the IBC and NFPA 101 Life Safety Code, and inspectors do check it. We supply and install the right type for the door: rim devices for most single doors, mortise exit locks, and surface or concealed vertical-rod (CVR) devices for pairs of doors. We can pair a device with electric latch retraction so it ties into access control, or an exit alarm for controlled doors, and set up delayed egress only where code allows it. A critical detail we get right: on a fire-rated door the latch cannot be \"dogged\" (held open) — it must positively latch. We also service, adjust, and re-certify existing panic hardware so you pass annual inspection.",
        bullets: [
          "IBC and NFPA 101 code-compliant installation",
          "Rim-mount, mortise, and vertical rod devices",
          "Single and double door configurations",
          "Dogging and key-override options",
          "Alarm-equipped exit devices available",
          "Annual maintenance and inspection service"
        ],
        responseTime: "Scheduled",
        image: "/commercial-locksmith-panic-bar-installation-nj.jpg",
        photos: ["/commercial-locksmith-panic-bar-installation-nj.jpg"],
        keywords: ["panic bar installation nj", "crash bar install new jersey", "exit device installation nj", "commercial door panic hardware", "fire exit bar nj", "push bar door install nj"]
      },
      {
        slug: "safe-opening",
        name: "Safe Opening",
        shortDesc: "Lost your combination or locked out of your safe? We open it.",
        longDesc: "A locked safe you can't open is stressful — and it's exactly where DIY does real damage. We work least-destructive first: manipulation (dialing open a combination lock by feel), scoping, or an autodialer that tries combinations on an electronic lock. When drilling is required it isn't random force — we drill a precise, pre-planned hole to view or bypass the lock package, then repair the hole and restore the safe to full use. The reason to call a pro is what most people don't see: quality safes have hardened plates, and relockers and glass relock triggers that permanently freeze the bolt work if the lock is attacked carelessly, turning a simple opening into a cutting job. We open dial and electronic safes, depository and drop safes, fireproof document safes, gun safes, and wall and floor safes, then service or replace the lock and reset your combination. We do require proof of ownership before opening.",
        bullets: [
          "Combination, electronic, and key-operated safes",
          "Minimal to no damage — preserve your safe's value",
          "Lock replacement and recombination after opening",
          "Home, office, and commercial safe types serviced",
          "Fire-rated and depository safes included",
          "Discreet, confidential service"
        ],
        responseTime: "Scheduled / Same Day",
        image: "/safe-opening-nj.jpg",
        photos: ["/safe-opening-nj.jpg"],
        keywords: ["safe opening nj", "safe cracking new jersey", "unlock safe nj", "forgot safe combination nj", "safe lockout service", "open electronic safe nj"]
      },
      {
        slug: "safe-installation",
        name: "Safe Installation",
        shortDesc: "Proper safe anchoring so it cannot be carried off.",
        longDesc: "A safe that isn't anchored is a portable safe — burglars simply carry the whole thing out and open it later, which is how most \"safe\" losses actually happen. Proper installation fixes that. On a concrete slab we bolt through the pre-drilled anchor holes with sleeve or wedge anchors; on a wood subfloor we lag into the joists, not just the plywood. We help you match the safe to the threat, too: a UL fire rating (for documents and media) is a different spec from a burglary rating like RSC or TL-15/TL-30, and a lot of big-box \"fire safes\" offer little burglary resistance. We place it out of sight and away from the obvious first-look spots, keep egress and door swing in mind, and handle the weight safely. We install fireproof document safes, gun safes, wall safes, and heavy commercial floor and drop safes — then set your combination and show you how to change it.",
        bullets: [
          "Concrete and wood floor anchoring",
          "Wall safe installation and concealment",
          "Fireproof, gun, document, and commercial models",
          "Anchor hardware included in installation",
          "Combination/digital setup and orientation",
          "Serving homes and businesses throughout NJ"
        ],
        responseTime: "Scheduled",
        image: "/safe-installation-nj.jpg",
        photos: ["/safe-installation-nj.jpg"],
        keywords: ["safe installation nj", "bolt down safe new jersey", "home safe install nj", "safe anchoring service", "gun safe installation nj", "commercial safe nj"]
      }
    ]
  },
  {
    slug: "automotive",
    name: "Automotive Locksmith",
    headline: "Back on the Road",
    subheadline: "On-Site Automotive Locksmith Service Across All of New Jersey",
    description: "Vehicle locksmith problems happen anywhere — a parking lot, a gas station, a highway rest stop, or your own driveway. Garden State Locksmith dispatches fully equipped mobile automotive locksmiths to your location anywhere in New Jersey. We handle everything from car lockouts and lost key replacements to transponder chip programming, ignition cylinder repairs, and key fob reprogramming. Unlike dealerships that make you wait days and charge inflated prices, our mobile technicians arrive on-site and complete most automotive locksmith jobs in under an hour. We service all makes and models — domestic, import, and luxury — without damaging your vehicle. For motorcycle owners, we also provide specialized key and ignition service for most major powersports brands.",
    emoji: "🚗",
    heroImage: "/automotive-hero.webp",
    color: "yellow",
    subServices: [
      {
        slug: "car-lockout",
        name: "Car Lockout Service",
        shortDesc: "We come to you and open any make or model — fast, no damage.",
        longDesc: "Locked your keys inside your vehicle? Our automotive locksmiths will come to your exact location — parking lot, roadside, driveway, or garage — and safely open your car without damaging the door, lock, or weather stripping. We carry professional automotive entry tools for all makes and models including modern keyless entry vehicles.",
        bullets: [
          "All makes and models — domestic, import, luxury",
          "No scratches or damage to vehicle",
          "Mobile service — we come to you anywhere in NJ",
          "Fast local dispatch statewide",
          "Available 7 AM – 10 PM including weekends and holidays",
          "Keys-in-ignition lockouts also handled"
        ],
        responseTime: "Same Day",
        image: "/car-lockout-service-new-jersey.webp",
        photos: ["/car-lockout-service-new-jersey.webp"],
        keywords: ["car lockout nj", "locked out of car new jersey", "auto lockout service nj", "unlock car door nj", "keys locked in vehicle nj", "automotive lockout service"]
      },
      {
        slug: "car-key-replacement",
        name: "Car Key Replacement",
        shortDesc: "New car keys cut and programmed on-site — no dealer needed.",
        longDesc: "Lost all your car keys? Garden State Locksmith cuts and programs replacement keys for almost every vehicle on the road today — standard metal keys, transponder keys, laser-cut high-security keys, and remote head keys. We come to your location and complete the work on-site, saving you a tow truck trip and the inflated pricing at the dealership. Most vehicles programmed in under an hour.",
        bullets: [
          "All key types: standard, transponder, laser-cut, remote head",
          "All vehicle makes and models supported",
          "Cut and programmed on-site at your location",
          "Lost all keys? No problem — we can still do it",
          "Faster and more affordable than the dealer",
          "VIN verification and ownership documentation required"
        ],
        responseTime: "Same Day",
        image: "/car-key-replacement.jpg",
        keywords: ["car key replacement nj", "lost car keys new jersey", "replacement car key nj", "new car key made nj", "auto key maker new jersey", "car key cut and programmed nj"]
      },
      {
        slug: "transponder-key-programming",
        name: "Transponder Key Programming",
        shortDesc: "Chip key and key fob programming — dealer-alternative service.",
        longDesc: "Transponder keys contain a microchip that communicates with your vehicle's immobilizer system. If the chip isn't programmed to match your car, the engine won't start — even if the key turns the ignition. Garden State Locksmith programs transponder keys, chip keys, and remote fobs for virtually all makes and models. We also duplicate existing transponder keys so you have a spare.",
        bullets: [
          "All chip key and transponder types programmed",
          "Remote fob programming and synchronization",
          "Duplicate programming from existing working key",
          "All-keys-lost programming available",
          "OBD-II and EEPROM programming methods",
          "All major brands: Toyota, Honda, Ford, GM, BMW, Mercedes and more"
        ],
        responseTime: "Same Day",
        image: "/transponder-key-programming-nj.jpg",
        photos: ["/transponder-key-programming-nj.jpg"],
        keywords: ["transponder key programming nj", "chip key programming new jersey", "key fob programming nj", "car chip key nj", "immobilizer key program", "transponder key copy nj"]
      },
      {
        slug: "ignition-repair",
        name: "Ignition Repair & Replacement",
        shortDesc: "Key won't turn? Broken key in ignition? We fix it on-site.",
        longDesc: "The ignition cylinder is a precision component that wears out over time or can be damaged by forcing a wrong key. Garden State Locksmith technicians diagnose and repair all common ignition problems — key that won't turn, key stuck in ignition, broken key fragment inside the cylinder, and ignitions that won't release the key when the car is in park. We also replace full ignition assemblies when repair isn't sufficient.",
        bullets: [
          "Key stuck or won't turn in ignition",
          "Broken key extraction from ignition cylinder",
          "Ignition cylinder repair and rebuild",
          "Full ignition assembly replacement",
          "New ignition key cut and programmed",
          "Mobile service — we come to your vehicle"
        ],
        responseTime: "Same Day",
        image: "/ignition-4.jpg",
        photos: ["/ignition-4.jpg", "/ignition-5.jpg", "/ignition-1.jpg", "/ignition-2.jpg", "/ignition-3.jpg"],
        keywords: ["ignition repair nj", "key stuck in ignition new jersey", "ignition cylinder replacement nj", "car ignition locksmith nj", "ignition fix nj", "replace ignition nj"]
      },
      {
        slug: "key-fob-replacement",
        name: "Key Fob Replacement",
        shortDesc: "Lost or broken key fob replaced and programmed on-site.",
        longDesc: "Losing a key fob or having it break can mean losing remote start, keyless entry, and panic alarm functionality. Garden State Locksmith provides aftermarket and OEM-compatible replacement key fobs for most vehicles, programmed to your car on-site. We also repair fob housings, replace worn buttons, and resync fobs that have lost their programming without replacing the entire unit.",
        bullets: [
          "Aftermarket and OEM-compatible fobs stocked",
          "Programming to vehicle completed on-site",
          "Button and housing repair for existing fobs",
          "Resync lost fob programming",
          "Remote start fob programming available",
          "Most vehicles programmed in under 30 minutes"
        ],
        responseTime: "Same Day",
        image: "/key-fob-replacement.jpg",
        keywords: ["key fob replacement nj", "replace key fob new jersey", "car fob programming nj", "broken key fob nj", "lost key fob service nj", "remote key fob nj"]
      },
      {
        slug: "motorcycle-locksmith",
        name: "Motorcycle Locksmith",
        shortDesc: "Keys, ignition, and locks for motorcycles and powersports.",
        longDesc: "Motorcycles, ATVs, and powersports vehicles need specialized locksmith service — their ignitions and key systems are different from cars and most locksmiths won't touch them. Garden State Locksmith technicians are trained and equipped to handle motorcycle lockouts, lost motorcycle key replacement, ignition cylinder replacement, and fob programming for most major brands including Harley-Davidson, Honda, Yamaha, Kawasaki, Suzuki, BMW, and Ducati.",
        bullets: [
          "Motorcycle lockouts opened without damage",
          "Lost motorcycle key replacement",
          "Ignition cylinder repair and replacement",
          "Key fob programming for late-model bikes",
          "Harley-Davidson, Honda, Yamaha, Kawasaki, BMW and more",
          "Mobile service — we come to your location"
        ],
        responseTime: "Same Day",
        image: "/motorcycle-locksmith-nj.jpg",
        photos: ["/motorcycle-locksmith-nj.jpg"],
        keywords: ["motorcycle locksmith nj", "motorcycle key replacement new jersey", "lost motorcycle keys nj", "motorcycle lockout nj", "Harley Davidson locksmith nj", "bike locksmith nj"]
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return categories.find(c => c.slug === slug);
}

export function getSubServiceBySlug(categorySlug: string, subServiceSlug: string): SubService | undefined {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.subServices.find(s => s.slug === subServiceSlug);
}
