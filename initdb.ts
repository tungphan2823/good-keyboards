const sql = require("better-sqlite3");
const db = sql("keyboards.db");

const dummyKb = [
  {
    title: "NuPhy Air75 V2",
    slug: "nuphy-air75-v2",
    image: [
      "/nuphy/air75/main.jpg",
      "/nuphy/air75/1.jpg",
      "/nuphy/air75/2.jpg",
      "/nuphy/air75/3.png",
      "/nuphy/air75/4.jpeg",
      "/nuphy/air75/5.jpeg",
    ],
    summary: "QMK/VIA Wireless Mechanical Keyboard    ",
    specs: `
    Switch Type: Gateron Low-profile Mechanical (KS-33)
    Layout: ANSI 75%
    Number of Keys: 84
    Hot-swappable Support: Yes
    N-key Rollover Support: Yes
    Backlight: RGB-LED
    Backlight Modes: 40
    Compatible System: macOS/Windows/Linux/Android/iOS
    Angle: 3.5º/ 6.5º / 8.5º
    Operating Environment: -10 to 50℃
    MCU: STM32F072
    RF: NRF52810
    `,
    brand: "NuPhy",
    dimensions: `
    316.4 mm x 132.5 mm x 13.5 mm
    (12.5 inches x 5.2 inches x 0.59 inch)
    598 grams 
    (1.31 pound)
    `,
    material: `
    Frame: Aluminum
    Bottom Case: ABS
    Keycap: Double-shot PBT`,
  },
  {
    title: "NuPhy Air96 V2",
    slug: "nuphy-air96-v2",
    image: [
      "/nuphy/air96/main.jpg",
      "/nuphy/air96/1.jpg",
      "/nuphy/air96/2.jpg",
      "/nuphy/air96/3.jpg",
      "/nuphy/air96/4.jpeg",
      "/nuphy/air96/5.jpeg",
    ],
    summary: "QMK/VIA Wireless Mechanical Keyboard",
    specs: `
    Switch Type: Gateron Low-profile Mechanical (KS-33)
    Layout: ANSI 96%
    Number of Keys: 100
    Hot-swappable Support: Yes
    N-key Rollover Support: Yes
    Backlight: RGB-LED
    Backlight Modes: 40
    Compatible System: macOS/Windows/Linux/Android/iOS
    Angle: 3.5º/ 6.5º / 8.5º
    Operating Environment: -10 to 50℃
    MCU: STM32F072
    RF: NRF52810
    `,
    brand: "NuPhy",
    dimensions: `
    373.4 mm x 132.5 mm x 13.5 mm
(14.7 inches x 5.2 inches x 0.59 inch)
663 grams 
(1.46 pound)
    `,
    material: `
    Frame: Aluminum
    Bottom Case: ABS
    Keycap: Double-shot PBT`,
  },
  {
    title: "NuPhy Gem80",
    slug: "nuphy-gem-80",
    image: [
      "/nuphy/gem80/main.jpg",
      "/nuphy/gem80/1.jpg",
      "/nuphy/gem80/2.jpeg",
      "/nuphy/gem80/3.jpeg",
      "/nuphy/gem80/4.jpeg",
      "/nuphy/gem80/5.jpeg",
    ],
    summary: "QMK/VIA Wireless Custom Mechanical Keyboard",
    specs: `
    Layout: ANSI 80%/TKL
    Number of Keys: 88
    Switch Type: Normal-profile
    Stabilizer Type: Plate Mounted
    Mount Type: Gasket & Top
    Hot-swappable Support: Yes (3/5 pin MX-style)
    N-key Rollover Support: Yes
    Backlight: South-facing RGB-LED
    Backlight Modes: 40+
    Compatible System: macOS/Windows/Linux/Android/iOS
    Operating Environment: -10 to 50℃
    MCU: ARM STM32F072
    RF: NRF52810 (tri-mode)
    `,
    brand: "NuPhy",
    dimensions: `
    Long 141.3 mm (5.56 inches)
Wide 358.1 mm (14.10 inches)
Back Height 36.7 mm (1.44 inches)
Front Height 21.5 mm (0.85 inch)
Weight 1120 grams (2.47 pound)
Type Angle 6º
    `,
    material: `
    Top Case: Aluminum
    Bottom Case: PC
    Plate Material: Fr4`,
  },
  {
    title: "CIDOO V68 VIA",
    slug: "cidoo-v68-via",
    image: [
      "/epo/v68/main.jpg",
      "/epo/v68/1.jpg",
      "/epo/v68/2.png",
      "/epo/v68/3.jpg",
      "/epo/v68/4.jpg",
      "/epo/v68/5.jpg",
    ],
    summary:
      "Alice Layout VIA Programmable Gasket Hot-swappable Mechanical Keyboard with TFT Screen",
    specs: `
    MODEL
CIDOO V68 VIA
MOUNT TYPE
Gasket Mount
CASE MATERIAL
6063 Aluminum
KEYCAPS
Cherry profile dyesub PBT
PLATE MATERIAL
PC
STABILIZERS
Plate-mounted
HOT-SWAPPABLE
Yes, compatible with 3-pin & 5-pin switches
BATTERY CAPACITY
4000mAh
WEIGHT
1.32 kg
SOFTWARE
VIA, Image Tool
INSIDE THE BOX
CIDOO V68 Keyboard
USB Cable
Keycap/Switch Puller
Instruction Manual
    `,
    brand: "Epomaker",
    dimensions: `
    1.32 kg

    `,
    material: `
    6063 Aluminum`,
  },
  {
    title: "KiiBOOM Phantom 64",
    slug: "kiiboom-phantom-64",
    image: [
      "/epo/phantom64/main.jpg",
      "/epo/phantom64/1.jpg",
      "/epo/phantom64/2.png",
      "/epo/phantom64/3.png",
      "/epo/phantom64/4.jpg",
      "/epo/phantom64/5.jpg",
    ],
    summary:
      "60% Transparent Gasket-Mounted Mechanical Keyboard with LCD Screen   ",
    specs: `
    BRAND
      KiiBOOM
      NUMBER OF KEYS
      64
      CONNECTIVITY
      Type-C Wired/2.4GHz/Bluetooth
      STRUCTURE
      Gasket Mounted
      STABILIZER TYPE
      Plate Mounted
      HOTSWAPPABLE
      Yes
      ANTI-GHOSTING
      NKRO
      BATTERY
      4000mAh
      LED
      South-Facing
      KEYCAPS MATERIAL
      PC
      KEYCAPS PROFILE
      SA-like
      PLATE MATERIAL
      PC
      PCB THICKNESS
      1.2mm
      CASE MATERIAL
      Acrylic & Metal
      COMPATIBILITY
      Windows/Mac
      DIMENSIONS
      350mm x 114mm x 45mm
      WEIGHT
      1.5kg
      SCREEN SIZE
      31.52mm(H) x 33.72mm(V) x 1.9mm(D)
      SCREEN RESOLUTION
      240(H)RGB x 240(V) Pixels
    `,
    brand: "Epomarker",
    dimensions: `
    350mm x 114mm x 45mm
    `,
    material: `
    Acrylic & Metal
`,
  },
  {
    title: "NuType F1 AW20 Late Summer Night Ver.",
    slug: "nutype-f1-aw20-late-night-ver",
    image: [
      "/nuphy/f1/main.jpg",
      "/nuphy/f1/1.jpg",
      "/nuphy/f1/2.jpg",
      "/nuphy/f1/3.jpeg",
      "/nuphy/f1/4.jpeg",
      "/nuphy/f1/5.jpeg",
    ],
    summary: "Wireless Mechanical Keyboard",
    specs: `
    Switch Type: Kaihua Choc Low Profile Mechanical Switch
Number of Keys: ANSI 64-key, ISO 65-key, JIS 66-key
LED Type: Per Key RGB LEDs
Backlit Types: 20+
Mode: Wired Mode, Bluetooth Mode
Battery: 1800mAh
Connection Type: USB Type-C
System: MacOS/Windows/Android/iOS
5.0° slope
    `,
    brand: "NuPhy",
    dimensions: `
    277.5 x 94.6 x 16.8 mm / 10.9 x 3.72 x 0.66 in
350g / 12.3 oz
    `,
    material: `
    Frame: Aluminum
Keycap: PC`,
  },{
    title: "NuType F1 AW20 Late Summer Night Ver.",
    slug: "nutype-f1-aw20-late-night-ver",
    image: [
      "/nuphy/f1/main.jpg",
      "/nuphy/f1/1.jpg",
      "/nuphy/f1/2.jpg",
      "/nuphy/f1/3.jpeg",
      "/nuphy/f1/4.jpeg",
      "/nuphy/f1/5.jpeg",
    ],
    summary: "Wireless Mechanical Keyboard",
    specs: `
    Switch Type: Kaihua Choc Low Profile Mechanical Switch
Number of Keys: ANSI 64-key, ISO 65-key, JIS 66-key
LED Type: Per Key RGB LEDs
Backlit Types: 20+
Mode: Wired Mode, Bluetooth Mode
Battery: 1800mAh
Connection Type: USB Type-C
System: MacOS/Windows/Android/iOS
5.0° slope
    `,
    brand: "NuPhy",
    dimensions: `
    277.5 x 94.6 x 16.8 mm / 10.9 x 3.72 x 0.66 in
350g / 12.3 oz
    `,
    material: `
    Frame: Aluminum
Keycap: PC`,
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS keyboards (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       specs TEXT NOT NULL,
       brand TEXT NOT NULL,
       dimensions TEXT NOT NULL,
       material TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO keyboards VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @specs,
         @brand,
         @dimensions,
         @material
      )
   `);

  for (const kb of dummyKb) {
    // Serialize image array to JSON string before inserting
    const serializedImage = JSON.stringify(kb.image);
    stmt.run({ ...kb, image: serializedImage });
  }
}

initData();
