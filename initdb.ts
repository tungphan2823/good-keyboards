const sql = require("better-sqlite3");
const db = sql("keyboards.db");

const dummyKb = [
  {
    title: "NuPhy Air75 V2",
    slug: "NuPhy Air75 V2",
    image: "/nuphy/air75/main.jpg",
    summary: "Minimalist Illuminated Performance Keyboard",
    specs: `
    Easy Switch Keys
    Easy-switch keys to connect up to three devices and easily switch between them
    Sensor
    Hand proximity sensor activated backlighting
    Auto-adjust ambient light sensor
    USB-C to USB-C rechargeable
    Up to 15 days or up to 10 months with backlighting off 9Battery life may vary based on user and computing conditions.
    Battery
    Rechargeable Li-Po (1500 mAh) battery
    Wireless range
    32.8 ft (10 m) 10Wireless range may vary depending on operating environment and computer setup.
    Switch
    On/Off power switch
    Indicator Lights
    Caps Lock and Battery indicator lights
    Customization app
    Supported by Logi Options+ on Windows and macOS 11Available on Windows and macOS at logitech.com/optionsplus
    ATTENTION: FILEVAULT
    FileVault might be enabled on your macOS computer, which could prevent you from entering your password at start or reboot when connected to Bluetooth. In this case, use the embedded keyboard for logging in and/or purchase the Logi Bolt USB Receiver.
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
    stmt.run(kb);
  }
}

initData();
