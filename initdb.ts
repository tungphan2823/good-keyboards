const sql = require("better-sqlite3");
const db = sql("keyboards.db");

const dummyKb = [
  {
    title: "NuPhy Air75 V2",
    slug: "nuphy-air75-v2",
    price: 119.95,
    link: "https://nuphy.com/products/air75-v2",
    image: [
      "/nuphy/air75/main.jpg",
      "/nuphy/air75/1.jpg",
      "/nuphy/air75/2.jpg",
      "/nuphy/air75/3.png",
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
    price: 129.95,
    link: "https://nuphy.com/products/air96-v2",
    image: [
      "/nuphy/air96/main.jpg",
      "/nuphy/air96/1.jpg",
      "/nuphy/air96/2.jpg",
      "/nuphy/air96/3.jpg",
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
    price: 149.95,
    link: "https://nuphy.com/products/gem80",
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
    price: 129.99,
    link: "https://epomaker.com/products/cidoo-v68-via",
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
    price: 199.0,
    link: "https://epomaker.de/products/kiiboom-phantom-64",
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
    brand: "Epomaker",
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
    price: 119.95,
    link: "https://nuphy.com/products/nutype-f1-aw20-late-summer-night-ver",
    image: [
      "/nuphy/f1/main.jpg",
      "/nuphy/f1/1.jpg",
      "/nuphy/f1/2.jpg",
      "/nuphy/f1/3.jpeg",
      "/nuphy/f1/4.jpeg",
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
  {
    title: "Keychron V1 QMK Custom Mechanical Keyboard ISO Layout Collection",
    slug: "keychron-v1-qmk",
    price: 79.0,
    link: "https://www.keychron.com/products/keychron-v1-qmk-custom-mechanical-keyboard-iso-layout-collection",
    image: [
      "/keychron/main.jpg",
      "/keychron/1.jpg",
      "/keychron/2.jpg",
      "/keychron/3.jpg",
      "/keychron/4.jpg",
    ],
    summary: "Fully Assembled Knob (Frosted Black)-ABS Keycaps",
    specs: `
    Keycaps	OSA Profile ABS backlight shine-through keycaps / OSA Profile PBT non-shine-through keycaps
    MCU	Ultra-low-power ARM Cortex-M4 32-bit STM32L432 (128KB Flash)
    Switches	Keychron K Pro 
    Backlight	South-facing RGB LED
    Switch Support	Hot-swappable (5 pin & 3 pin)
    Stabs	Screw-in PCB stabs
    Connectivity	Type-C
    Cable	Type-C cable + Type-A to Type-C adapter
    Operating Environment	-10℃ to 50℃
    `,
    brand: "keychron",
    dimensions: `
    Width	148.7 mm
Length	328.5 mm
Front Height	17.9 mm  (without keycaps)
Back Height	25.8 mm (without keycaps)
Feet Height	2.4 mm
Angle	3.5° / 7.08° / 9.52°
Weight	970 g ± 10 g (Fully Assembled Version)
Body Material	ABS Plastic
Plate Material	Steel
Polling Rate	1000 Hz
Mount Style	Tray Mount Design
    `,
    material: `
    Body Material	ABS Plastic
    Plate Material	Steel
`,
  },
  {
    title: "Keychron K3 Max QMK/VIA Wireless Custom Mechanical Keyboard",
    slug: "keychron-k3-max",
    price: 94.0,
    link: "https://www.keychron.com/products/keychron-k3-max-qmk-via-wireless-custom-mechanical-keyboard",
    image: [
      "/keychron2/main.jpg",
      "/keychron2/1.jpg",
      "/keychron2/2.jpg",
      "/keychron2/3.jpg",
      "/keychron2/4.jpg",
    ],
    summary: "Ultra-slim wireless custom mechanical keyboard",
    specs: `
    Number of Keys: 84 (75%)
    Switches: Gateron low-profile mechanical
    Switch Face: North-facing
    Number of Multimedia Keys: 12 
    Frame Material: ABS+Aluminum frame
    Keycap Material: Low-profile double-shot PBT
    Layout: ANSI
    Polling Rate (2.4Ghz and Wired Mode): 1000Hz
    Polling Rate (BT Mode): 90Hz
    N-Key Rollover (NKRO): Yes for both wireless and wired modes
    
    *The K3 Max is currently compatible with Gateron/Keychron low-profile mechanical switches only, as QMK does NOT support low-profile optical switches.
    `,
    brand: "keychron",
    dimensions: `
    Dimension: 306 x 116 mm (12.04 x 4.56")
Weight: 525 g / 1.16 lbs
Height without keycap (front): 11 mm (0.43")
Height without keycap (rear): 15 mm (0.59")
Height incl. keycap (front): 17 mm (0.66")
Height incl. keycap (rear): 22 mm (0.86")
Typing Angle: 2.5º, 4.2º and 6.5º
MCU: ARM Cortex-M4 32-bit STM32F402 (256KB Flash)
Operating Environment: -10 to 50℃
    `,
    material: `
    Frame Material: ABS+Aluminum frame
Keycap Material: Low-profile double-shot
`,
  },
  {
    title: "Keychron V8 (Alice Layout) QMK Custom Mechanical Keyboard",
    slug: "keychron-v8",
    price: 99.0,
    link: "https://www.keychron.com/products/keychron-v8-alice-layout-qmk-custom-mechanical-keyboard",
    image: [
      "/keychron3/main.jpg",
      "/keychron3/1.jpg",
      "/keychron3/2.jpg",
      "/keychron3/3.jpg",
    ],
    summary: "Fully Assembled Knob",
    specs: `
    Keycaps (Fully Assembled Version)	Double-shot PBT keycaps, not shine-through, OSA Profile (OEM height, SA shape)
MCU	Ultra-low-power ARM Cortex-M4 32-bit STM32L432 (128KB Flash)
Switches	Keychron K Pro (Fully Assembled Version)
Backlight	South-facing RGB LED
Switch Support	Hot-swappable (5 pin & 3 pin)
Stabs	Screw-in PCB stabs
Connectivity	Type-C
Cable	Type-C cable + Type-A to Type-C adapter
Operating Environment	-10℃ to 50℃
    `,
    brand: "keychron",
    dimensions: `
    Width	138 mm
Length	359.55 mm
Front Height	18.73 mm  (without keycaps)
Back Height	26 mm (without keycaps)
Feet Height	3 mm
Angle	3.5° / 7.99° / 11°
Weight	 945 ± 10 g (Fully Assembled Version)
Body Material	ABS Plastic
Plate Material	Steel
Polling Rate	1000 Hz
Mount Style	Tray Mount Design
    `,
    material: `
    Body Material	ABS Plastic
Plate Material	Steel
`,
  },
  {
    title: "MOD007v3 HE Year of Dragon",
    slug: "mod007v3",
    price: 179.99,
    link: "https://en.akkogear.com/product/mod007v3-he-dragon-mechanical-keyboard/",
    image: [
      "/akko/007/main.jpg",
      "/akko/007/1.jpg",
      "/akko/007/2.jpg",
      "/akko/007/3.jpg",
      "/akko/007/4.png",
      "/akko/007/5.png",
    ],
    summary: "The Limited Edition Akko Year of Dragon Keyboard ",
    specs: `
    Switch	Akko Cream Yellow Magnetic Switch
    Interface	USB Type C
    Macro	Supported
    N-Key Rollover	Supported
    Disable Winlock	Supported
    Backlit	RGB backlit
    Hot-Swappable	N/A
    `,
    brand: "akko",
    dimensions: `
    333*146*33mm
    Approximately 1.9KG

    `,
    material: `
    PBT Material

`,
  },
  {
    title: "Horizon 5075B Plus SP",
    slug: "horizon-5075b",
    price: 89.99,
    link: "https://en.akkogear.com/product/horizon-5075b-plus-sp-mechanical-keyboard/",
    image: [
      "/akko/horizon/main.jpg",
      "/akko/horizon/1.jpg",
      "/akko/horizon/2.jpg",
      "/akko/horizon/3.jpg",
    ],
    summary: "Akko V3 Cream Yellow Pro",
    specs: `
    Switch	Akko V3 Cream Blue Pro/kko V3 Cream Yellow Pro
Interface	Wireless/Bluetooth/USB Type C
Macro	Akko Macro V1.0
N-Key Rollover	Supported
Disable Winlock	Supported
Backlit	RGB Backlit
Hot-Swappable	Yes
    `,
    brand: "akko",
    dimensions: `
    335*146*42mm

    Approximately 0.88KG

    `,
    material: `
    PBT Material

`,
  },
  {
    title: "MU01 Mountain Seclusion",
    slug: "mu01",
    price: 119.99,
    link: "https://en.akkogear.com/product/mu01-mountain-seclusion-mechanical-keyboard/",
    image: [
      "/akko/MU01/main.jpg",
      "/akko/MU01/1.jpg",
      "/akko/MU01/2.jpg",
      "/akko/MU01/3.jpg",
    ],
    summary: "Walnut Wooden Case, 68-key Gasket Structure Keyboard",
    specs: `
    Switch	Akko V3 Piano Pro
    Interface	Wireless/Bluetooth/USB Type C
    Macro	Akko Macro V1.0
    N-Key Rollover	Supported
    Disable Winlock	Supported
    Backlit	RGB backlit
    Hot-Swappable	Yes
    `,
    brand: "akko",
    dimensions: `
    327*125.3*46.7mm

    Approximately 0.85KG


    `,
    material: `
    PBT Material

`,
  },
];

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS keyboards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    link TEXT NOT NULL,
    price INTEGER NOT NULL,
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
         @link,
         @price,
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
