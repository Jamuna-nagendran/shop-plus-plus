const products = [
  {
    name: "Apple iPhone 13 (128GB) - Blue",
    description: `
    15 cm (6.1-inch) Super Retina XDR display.\n
    Cinematic mode adds shallow depth of field and shifts focus automatically in your videos.\n
    Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording.\n 
    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast performance.\n
    `,

    count: 25,
    price: 70000,
    category: "Electronics",
    sales: 12,
    images: [
      { path: "/images/products/electronics/iphone13_1.jpg" },
      { path: "/images/products/electronics/iphone13_2.jpg" },
      { path: "/images/products/electronics/iphone13_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Apple" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
    rating: 4,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Apple iPhone 15 (128 GB) - Black",
    description: `
  Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.\n
iPhone 15 features a durable color-infused glass and aluminum design. It’s splash, water, and dust resistant. The Ceramic Shield front is tougher than any smartphone glass. And the 6.1" Super Retina XDR display is up to 2x brighter in the sun compared to iPhone 14.\n
The 48MP Main camera shoots in super-high resolution. So it’s easier than ever to take standout photos with amazing detail. The 2x optical-quality Telephoto lets you frame the perfect close-up.\n
Capture portraits with dramatically more detail and color. Just tap to shift the focus between subjects — even after you take the shot.\n
The superfast chip powers advanced features like computational photography, fluid Dynamic Island transitions, and Voice Isolation for phone calls. And A16 Bionic is incredibly efficient to help deliver great all-day battery life.\n
    `,
    count: 20,
    price: 80000,
    category: "Electronics",
    sales: 8,
    images: [
      { path: "/images/products/electronics/iphone15_1.jpg" },
      { path: "/images/products/electronics/iphone15_2.jpg" },
      { path: "/images/products/electronics/iphone15_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Apple" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Appario Retail Private Ltd" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Apple iPhone 14 (128 GB) - Midnight",
    description: `
      15.40 cm (6.1-inch) Super Retina XDR display\n
      Advanced camera system for better photos in any light\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety technology — Crash Detection calls for help when you can’t\n
      All-day battery life and up to 20 hours of video playback\n
      Industry-leading durability features with Ceramic Shield and water resistance\n
    `,
    count: 25,
    price: 60000,
    category: "Electronics",
    sales: 5,
    images: [
      { path: "/images/products/electronics/iphone14_1.jpg" },
      { path: "/images/products/electronics/iphone14_2.jpg" },
      { path: "/images/products/electronics/iphone14_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Apple" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Appario Retail Private Ltd" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "boAt Newly Launched Airdopes 141 ANC TWS Earbuds With 32 dB ANC, 42 HRS Playback, 50ms Low Latency Beast™ Mode, IWP™ Tech,Signature Sound,Quad Mics with ENx™,ASAP™ Charge,USB Type-C Port & IPX5(Green)",
    description: `
    Up to 32 dB Active Noise Cancellation: Hear songs and podcasts with high clarity as Airdopes 141 ANC eliminates up to 32 dB of external noise. With crystal clear audio at your fingertips, detach from the real world with utmost ease.\n
    Extensive Playback: Up to 42 hours of playtime is long enough to keep you entertained for hours on end. Call your friends, watch your comfort movies, or jam endlessly to your playlist with Airdopes 141 ANC as your audio companion.\n
    Low Latency: Zoom past your squad on the scoreboard with boAt’s BEASTTM mode. Its low latency of up to 50 ms synchronizes thrilling visuals with impactful sound for seamless winning each time.\n
    High-performance Drivers: Boasting dual 10 mm drivers, these earbuds transform your jamming sessions for effortless unwinding. Moreover, boAt Signature Sound lets you feel each balanced sound element the way it was created.\n
    ENx Technology: Enjoy superb clarity on voice calls courtesy of the ENxTM tech-enabled quad mics. Even if you are on a flight, in trains, or in crowded workspaces, you can communicate in an undisturbed manner.\n
    ASAP Charging: Amp up the entertainment pace, as 10 minutes of charge adds around 150 minutes of performance. So, you won’t miss a beat while grooving to the latest tracks.\n
    IWP Tech: Connect and disconnect quickly with a flip of the lid thanks to boAt’s Insta Wake N’ PairTM technology.\n
      `,
    count: 25,
    price: 1800,
    category: "Electronics",
    sales: 19,
    images: [
      { path: "/images/products/electronics/boAt2_1.jpg" },
      { path: "/images/products/electronics/boAt2_2.jpg" },
      { path: "/images/products/electronics/boAt2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "boAt" },
      { key: "Item Condition", value: "Used" },
      { key: "Seller", value: "Appario Retail Private Ltd" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)",
    description: `It provides a massive battery backup of upto 15 hours for a superior playback time.\n 
      It only takes 3 hrs to charge.\n
      Its 40mm dynamic drivers help pump out immersive HD audio all day long.\n
      It has been ergonomically designed and structured as an on-ear headphone to provide the best user experience with its comfortable padded earcushions and lightweight design.\n
      You can control your music without hiccups using the easy access controls, communicate seamlessly using the built-in mic, access voice assistant and always stay in the zone.\n
      One can connect to boAt Rockerz 450 via not one but two modes, Bluetooth as well as AUX.\n
      1 year warranty from the date of purchase\n`,
    count: 20,
    price: 1500,
    category: "Electronics",
    sales: 18,
    images: [
      { path: "/images/products/electronics/boAt1_1.jpg" },
      { path: "/images/products/electronics/boAt1_2.jpg" },
      { path: "/images/products/electronics/boAt1_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "boAt" },
      { key: "Item Condition", value: "Renewed" },
      { key: "Seller", value: "Appario Retail Private Ltd" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)",
    description: `The perfect way to add some style and stand out from the crowd with the boAt BassHeads 100 "Hawk" inspired earphones
    The stylish BassHeads 100 superior coated wired earphones are a definite fashion statement - wear your attitude with its wide variety of collection\n
    The powerful 10mm dynamic driver with the speaker resistance of 16 ohm enables the earphone to deliver a punchy, rhythmic response to the most demanding tracks.\n
    Features a HD microphone to make crystal clear calls - making life easier on the go, play/pause music or answer/end calls with one-click, track forward with two-clicks or back with 3 clicks make these earphones extremely user-friendly.\n
    With 1.2 meters perfect length cable now plug it in anywhere with ease - while the earphones are extremely user-friendly and stylish, extruding premium coating on the wire cable is a manufacturing process that we've been performing and refining since our company's inception
    Its impeccable fit won't let you take these wonderfully amazing earphones off, fits you perfectly without hurting your ears and the perfect arc, with different size ear tips helps you in achieving superior comfort even with long listening hours.\n
    1 year warranty from the date of purchase\n`,
    count: 50,
    price: 500,
    category: "Electronics",
    sales: 35,
    images: [
      { path: "/images/products/electronics/boAt3_1.jpg" },
      { path: "/images/products/electronics/boAt3_2.jpg" },
      { path: "/images/products/electronics/boAt3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "boAt" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Appario Retail Private Ltd" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Redmi 12C (Matte Black, 4GB RAM, 64GB Storage) | High Performance Mediatek Helio G85 | Big 17cm(6.71) HD+ Display with 5000mAh(typ) Battery",
    description: `High performance MediaTek Helio G85,upto 2Ghz; Enhanced gaming with 1GHz GPU | 4+3GB(Virtual RAM) LPDDR4x
    50MP f/1.8 AI Dual camera with Portrait mode & Night Mode | 5MP Selfie camera\n
    Large 17cm HD+ display with Scratch resistant Glass and Oleophobic coating | 500nits peak brightness\n
    5000mAh(typ) battery with 10W charger in-box\n
    Dual band Wifi support ensures better throughput and connectivity\n`,
    count: 50,
    price: 7000,
    category: "Electronics",
    sales: 45,
    images: [
      { path: "/images/products/electronics/redmi1_1.jpg" },
      { path: "/images/products/electronics/redmi1_2.jpg" },
      { path: "/images/products/electronics/redmi1_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Redmi" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "TheGiftKart" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Redmi 12 5G Jade Black 6GB RAM 128GB ROM",
    description: `Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual
    Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection\n
    50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera
    5000mAh(typ) battery with 22.5W charger in-box\n
    MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating\n`,
    count: 50,
    price: 14000,
    category: "Electronics",
    sales: 25,
    images: [
      { path: "/images/products/electronics/redmi2_1.jpg" },
      { path: "/images/products/electronics/redmi2_2.jpg" },
      { path: "/images/products/electronics/redmi2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Redmi" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Redmi A2 (Classic Black, 2GB RAM, 64GB Storage)",
    description: `High performance MediaTek Helio G36,upto 2.2GHz; | Upto 4GB RAM including 2GB Virtual RAM | 64GB Storage
    Large 16.5 cm HD+ display with Scratch resistant glass | 400nits peak brightness | 120Hz Touch sampling Rate
    8MP Dual camera with Portrait mode | 5MP Front camera\n
    5000mAh(typ) battery with 10W charger in-box\n
    Expandable Storage to upto 1TB with Dedicated MicroSD card Slot | Dual SIM (nano+nano) dual standby (4G+4G)\n`,
    count: 60,
    price: 6500,
    category: "Electronics",
    sales: 40,
    images: [
      { path: "/images/products/electronics/redmi3_1.jpg" },
      { path: "/images/products/electronics/redmi3_2.jpg" },
      { path: "/images/products/electronics/redmi3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Redmi" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera",
    description: `Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1\n
    13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front cam.\n
    16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color.\n
    5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase\n`,
    count: 20,
    price: 9500,
    category: "Electronics",
    sales: 10,
    images: [
      { path: "/images/products/electronics/samsung1_1.jpg" },
      { path: "/images/products/electronics/samsung1_2.jpg" },
      { path: "/images/products/electronics/samsung1_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Samsung" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Spigen India" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Samsung Galaxy M14 5G (ICY Silver,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger",
    description: `Superfast 5G with 13 5G Bands, Powerful Exynos 1330 Octa Core 2.4GH 5nm processor with latest Android 13 having One UI 5.0 interface.\n
    50MP+2MP+2MP Triple camera setup- True 50MP (F1.8) main camera + 2MP (F2.4) + 2MP (F2.4)| 13MP (F2.0) front camera.\n
    6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase.\n
    16.72 centimeters (6.6-inch) LCD, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color.\n
    Get up to 2 times of Android Updates & 4 times of Security Updates with Samsung Galaxy M14 5G.\n`,
    count: 70,
    price: 17000,
    category: "Electronics",
    sales: 50,
    images: [
      { path: "/images/products/electronics/samsung2_1.jpg" },
      { path: "/images/products/electronics/samsung2_2.jpg" },
      { path: "/images/products/electronics/samsung2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Samsung" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Spigen India" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera",
    description: `Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1\n
    13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front cam \n
    16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color\n
    5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase\n`,
    count: 60,
    price: 9500,
    category: "Electronics",
    sales: 55,
    images: [
      { path: "/images/products/electronics/samsung3_1.jpg" },
      { path: "/images/products/electronics/samsung3_2.jpg" },
      { path: "/images/products/electronics/samsung3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Samsung" },
      { key: "Item Condition", value: "Used" },
      { key: "Seller", value: "DAWNTECH ELECTRONICS PRIVATE LIMITED" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
    description: `108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP.
    Hi-res 108MP mode, 3x Lossles Zoom, Photo, Video, Nightscape, Expert, Panoramic, Portrait, Macro, Time-lapse, Slow-motion, Long exposure, Dual-view video, Text Scanner, 1080p/720p@30fps, Video zoom: 1080P@30fps, 720P@30fps, Slow motion: 720P@120fps, Time-Lapse: 1080P@30fps, Steady Video EIS support.\n
    6.72 Inches; 120 Hz Adaptive refresh rate; FHD+(1080×2400), Colors: 16.7 Million colors, 391 ppi, Aspect Ratio: 20:9, Brightness: 550 nits (typical), 680 nits (HBM).\n
    Operating System: Oxygen OS based on Android 13.1.\n
    Qualcomm Snapdragon 695 5G.\n
    5000 mAh with 67W SUPERVOOC Endurance Edition\n`,
    count: 60,
    price: 20000,
    category: "Electronics",
    sales: 55,
    images: [
      { path: "/images/products/electronics/oneplus1_1.jpg" },
      { path: "/images/products/electronics/oneplus1_2.jpg" },
      { path: "/images/products/electronics/oneplus1_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "OnePlus" },
      { key: "Item Condition", value: "Used" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 256GB Storage) ",
    description: `Camera: 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP
    Rear Camera Mode: Hi-res 108MP mode, 3x Lossles Zoom, Photo, Video, Nightscape, Expert, Panoramic, Portrait, Macro, Time-lapse, Slow-motion, Long exposure, Dual-view video, Text Scanner, 1080p/720p@30fps, Video zoom: 1080P@30fps, 720P@30fps, Slow motion: 720P@120fps, Time-Lapse: 1080P@30fps, Steady Video EIS support.\n
    Display: 6.72 Inches; 120 Hz Adaptive refresh rate; FHD+(1080×2400), Colors: 16.7 Million colors, 391 ppi, Aspect Ratio: 20:9, Brightness: 550 nits (typical), 680 nits (HBM)\n
    Operating System: Oxygen OS based on Android 13.1\n
    Processor: Qualcomm Snapdragon 695 5G.\n
    Battery & Charging: 5000 mAh with 67W SUPERVOOC Endurance Edition\n`,
    count: 70,
    price: 50000,
    category: "Electronics",
    sales: 55,
    images: [
      { path: "/images/products/electronics/oneplus2_1.jpg" },
      { path: "/images/products/electronics/oneplus2_2.jpg" },
      { path: "/images/products/electronics/oneplus2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "OnePlus" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "UniqueClick" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "OnePlus 11R 5G (Galactic Silver, 8GB RAM, 128GB Storage)",
    description: `Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) Camera with EIS support.\n
    Camera Modes: Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama, Tilt-Shift mode, Long Exposure, Dual-View Video, Retouch, Movie Mode, Raw file, Filters, Super Stable, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse, Macro mode.\n
    Display: 6.7 Inches; 120 Hz Super Fluid AMOLED; Resolution: 2772 X 1240 pixels ,450 ppi, 20.1:9, 10-bit Color Depth, HDR10+\n
    Operating System: OxygenOS based on Android 13\n
    Processor: Snapdragon 8+ Gen 1 Mobile Platform\n
    8GB LPDDR5X RAM, 128GB UFS3.1 STORAGE\n
    Battery & Charging: 5000 mAh with 100W SuperVOOC\n
    In-Display Fingerprint Sensor\n`,
    count: 80,
    price: 85000,
    category: "Electronics",
    sales: 75,
    images: [
      { path: "/images/products/electronics/oneplus3_1.jpg" },
      { path: "/images/products/electronics/oneplus3_2.jpg" },
      { path: "/images/products/electronics/oneplus3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "OnePlus" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "GOVO GOSURROUND 950 | 280W Soundbar, 5.1 Channel Home Theatre with 6.5 inch subwoofer, Dual Rear Satellites, HDMI, AUX, USB & Bluetooth, 5 Equalizer Modes, Stylish Remote & LED Display (Platinum Black)",
    description: `5.1 Channel: 3 x 3.54" & 2 x 2.25" speakers with 280 Watt peak output 3D Surround Sound, DSP Enabled\n
    Subwoofer: Enjoy your theater experience with the deep bass of the 6.5" subwoofer\n
    Dynamic LED Lights: Get the acoustic experience to the next level with the most stylish LED lights in the GOVO's signature color\n
    5 Equalizer Modes: Switch through Movie, News, Music & 3D modes, and enjoy your home cinema experience\n
    Remote control: Adjust the Bass, treble & volume with the most stylish remote control\n
    Multiple Connectivity: Connect with HDMI (ARC), AUX, USB & OPT\n
    Bluetooth V5.3 : Connect automatically your mobile device and enjoy the music louder than ever\n`,
    count: 60,
    price: 8500,
    category: "Electronics",
    sales: 40,
    images: [
      { path: "/images/products/electronics/sony1_1.jpg" },
      { path: "/images/products/electronics/sony1_2.jpg" },
      { path: "/images/products/electronics/sony1_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Sony" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant App Support for Mobile Phones (Blue)",
    description: `With up to 50-hour battery life and quick charging, you’ll have enough power for multi-day road trips and long festival weekends.\n
    Great sound quality customizable to your music preference with EQ Custom on the Sony | Headphones Connect App.\n
    Boost the quality of compressed music files and enjoy streaming music with high quality sound through DSEE.\n
    Designed to be lightweight and comfortable for all-day use.\n
    Crystal clear hands-free calling with built-in mic.\n
    Multipoint connection allows you to quickly switch between two devices at once.\n
    Find your headphones easily with Fast Pair\n`,
    count: 100,
    price: 4500,
    category: "Electronics",
    sales: 55,
    images: [
      { path: "/images/products/electronics/sony2_1.jpg" },
      { path: "/images/products/electronics/sony2_2.jpg" },
      { path: "/images/products/electronics/sony2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Sony" },
      { key: "Item Condition", value: "Renewed" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black)",
    description: `Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 Hertz | 178 Degree wide viewing angle\n
    Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices\n
    Sound : 20 Watts Output | Open Baffle Speaker| Dolby Audio | Clear Phase\n
    Smart TV Features: Google TV | Watchlist | Voice Search | Google Play | Chromecast | Netflix | Amazon Prime Video | Additional Features: Apple Airplay | Apple Homekit |Alexa\n
    Display: X1 4K Processor | 4K HDR | Live Colour| 4K X Reality Pro | Motion Flow XR100\n
    Warranty Information: 1 year comprehensive warranty on product provided by the brand from the date of purchase\n`,
    count: 60,
    price: 53000,
    category: "Electronics",
    sales: 55,
    images: [
      { path: "/images/products/electronics/sony3_1.jpg" },
      { path: "/images/products/electronics/sony3_2.jpg" },
      { path: "/images/products/electronics/sony3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Sony" },
      { key: "Item Condition", value: "Renewed" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Mee Mee Gentle Baby Shampoo - Tear-Free Formula, Enriched with Olive Extracts, Nurturing for Infant Hair - From Birth Onwards, Dermatologist-Approved, (500ml)",
    description: `Gentle No Tears Formula: Our Mee Mee Mild Baby Shampoo is specially formulated to provide a tear-free bathing experience for your little one, ensuring a comfortable and enjoyable bath time.\n
    Enriched with Olive Extracts: Infused with the goodness of olive extracts, this shampoo nourishes and moisturizes your baby's delicate hair, leaving it soft, shiny, and healthy.\n
    Safe from Birth: Designed for newborns and infants, this baby shampoo is suitable for use right from birth, making it an ideal choice for your baby's early grooming needs.\n
    Dermatologically Tested: Rest easy knowing that our baby shampoo has undergone rigorous dermatological testing, ensuring it's safe and gentle on your baby's sensitive scalp and skin.\n
    Hypoallergenic: Our hypoallergenic formula is crafted to minimize the risk of allergies, making it perfect for babies with sensitive skin or those prone to skin irritations.\n
    Generous 500ml Size: With a generous 500ml bottle, you'll have an ample supply of baby shampoo to keep your baby's hair clean, fresh, and healthy.\n
    Mild and Soothing: The mild and soothing properties of this shampoo make it ideal for daily use, helping you maintain your baby's hair cleanliness and health.\n`,
    count: 60,
    price: 251,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/Mee1_1.jpg" },
      { path: "/images/products/baby/Mee1_2.jpg" },
      { path: "/images/products/baby/Mee1_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Mee" },
      { key: "Seller", value: "Just Peachy!" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Mee Mee Anti-Bacterial Baby Liquid Cleanser | Feeding Bottle Cleaner Liquid for Nipple Cleaning/Clothes/Milk Bottle/Vessels (300 ml - Bottle)",
    description: `Mee Mee Baby Bottle Cleaning Liquid: Keep your baby's feeding bottles and nipples impeccably clean with our gentle and effective bottle cleaner liquid specially formulated for babies.\n
    Safe and Hygienic Baby Cleanser Liquid: Say goodbye to harmful germs and bacteria with our baby laundry detergent liquid that ensures thorough cleaning without leaving any residue.\n
    Easy and Convenient Baby Vessel Washing Liquid: Simplify your baby's mealtime with our hassle-free baby dishwash liquid, making bottle cleaning a breeze for busy parents.\n
    Gentle on Baby Clothes: Our baby laundry liquid detergent is not just for bottles; it also works wonders on your little one's clothes, ensuring they stay soft, clean, and safe for your baby's sensitive skin.\n
    Trusted Brand for Baby Care: Mee Mee is a brand you can rely on for premium baby care products. Our baby milk bottle cleaning liquid provides the utmost care and cleanliness for your baby's feeding essentials, giving you peace of mind.\n`,
    count: 70,
    price: 251,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/Mee2_1.jpg" },
      { path: "/images/products/baby/Mee2_2.jpg" },
      { path: "/images/products/baby/Mee2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Mee" },
      { key: "Seller", value: "Just Peachy!" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Mee Mee Baby Pacifier Ultra Light Soft Silicone Nipple| BPA Free | Oral stimulatory | Teether | Pack of 2 | 0-6 months + Kids (Blue/Red)",
    description: `Made of soft silicone which is and BPA free.\n
    Natural feel with soft elasticity similar to a mother's nipple, which makes it easier for the babies to latch on.\n
    Supports the natural movement and positioning of the tongue and encourages oral development\n`,
    count: 60,
    price: 164,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/Mee3_1.jpg" },
      { path: "/images/products/baby/Mee3_2.jpg" },
      { path: "/images/products/baby/Mee3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Mee" },
      { key: "Seller", value: "KiranaMarket" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Pampers All round Protection Pants Style Baby Diapers, Large (L) Size, 64 Count, Anti Rash Blanket, Lotion with Aloe Vera, 9-14kg Diapers",
    description: `New & Improved Pampers All-round Protection Pants – high quality diaper pants for complete protection of your baby from World's #1 diaper brand (Based on Euromonitor International, Tissue and Hygiene, 2021ed, Pampers in #1 Nappy/Diapers/Pants sales brand globally in terms of both retail value sales (RSP) and volume, all retail channels, 2020 data or Source: Euromonitor International, global diaper sales, 2020 data).\n
    Anti-Rash Blanket–India’s first diapers containing Lotion with Aloe Vera that prevents rashes. (Blanket refers to soft topsheet with lotion. Helps prevent rash due to wetness after 1 day of usage, based on clinical studies in USA 2000-2019).\n
    Up to 100% Wetness Lock-Unique Magic Gel technology that locks all pee & poo inside ensuring quality sleep for your baby ALL NIGHT.\n
    Extra Soft- New Pampers has an extraaaa soft material to keep your baby comfortably sleeping ALL NIGHT.\n
    Up to 12 hrs Absorption-Designed for soaking all-night urine with upto 2X Faster absorption speed keeping baby's bum dry.\n
    Double Leak Cuff Guards–Specially designed inner & outer barriers near thighs to prevent any leakage.\n
    No. 1 Choice of Doctors –Pampers knows its science, and is hence #1 Chosen brand by Doctors.\n`,
    count: 60,
    price: 955,
    category: "Baby",
    sales: 34,
    images: [
      { path: "/images/products/baby/pampers1_1.jpg" },
      { path: "/images/products/baby/pampers1_2.jpg" },
      { path: "/images/products/baby/pampers1_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Pampers" },
      { key: "Seller", value: "KiranaMarket" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Pampers Active Baby Tape Style Baby Diapers, New Born/Extra Small (NB/XS) Size, 72 Count, Adjustable Fit with 5 star skin protection, Up to 5kg Diapers",
    description: `Pampers Active Baby 5 Star Skin Protection: Specially designed diapers for baby’s comfort.\n
    Adjustable Fit: Taped diapers which you can make fit or loose based on your baby’s size.\n
    Stretchy Waist & Sides: Stretchable soft material to fit snugly around waist & side.\n
    Our Best Pampers Diapers: Trusted protection of Pampers, our best amongst India taped diapers.\n
    360 Degree Cottony Softness: All-around cotton-like softness for baby’s delicate skin (*Product does not contain cotton).\n`,
    count: 60,
    price: 1011,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/pampers2_1.jpg" },
      { path: "/images/products/baby/pampers2_2.jpg" },
      { path: "/images/products/baby/pampers2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Pampers" },
      { key: "Seller", value: "R & R" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Pampers Baby Gentle Wet Wipes with Aloe Vera 144 Wipes",
    description: `Pampers - India’s No.1 Diaper brand presents new Pampers Baby Wipes with Aloe Vera.\n
    Anti – Rash: Lotion with Aloe vera helps prevent rashes & redness on baby skin.\n
    Mild on Baby Skin: With 97% pure water, Pampers wet Wipes are mild on baby skin like cotton & water.\n
    Safe for newborn baby skin: Pampers wipes are infused with Vitamin-E and are Paraben-free which makes them safe.\n
    Easy to use: Pampers wipes are made thick & wide and are soft & strong for best cleaning.\n
    Mild fragrance: Pampers baby wipes combo offer delightful & mild fragrance that is safe.\n`,
    count: 60,
    price: 310,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/pampers3_1.jpg" },
      { path: "/images/products/baby/pampers3_2.jpg" },
      { path: "/images/products/baby/pampers3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Pampers" },
      { key: "Seller", value: "SREEKRISHNA ENTERPRISES" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Little's Soft Cleansing Baby Wipes Lid, 80 Wipes (Pack of 3)",
    description: `Ideal for gently cleansing and moisturizing your baby's delicate skin during diaper change or for cleaning your baby's face and hands during mealtime, playtime and while travelling.\n
    Dermatologist tested and alcohol free.\n
    Little's soft cleansing baby wipes is a 50: 50 blend of polyester and viscose. While both are manmade fibers, they offer a better Alternative to cotton.\n
    Suitable for 1+ Months.\n`,
    count: 60,
    price: 200,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/Littles1_1.jpg" },
      { path: "/images/products/baby/Littles1_2.jpg" },
      { path: "/images/products/baby/Littles1_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Little's" },
      { key: "Seller", value: "SREEKRISHNA ENTERPRISES" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Little's Plastic Junior Ring (Multicolour) (6 pieces)",
    description: `Little's junior ring is an attractive educational toy which helps your baby recognize different colours and sizes while having fun stacking them in order.\n
    Little's junior ring helps your baby naturally develop concepts of colour, shape and size through fun filled play activity
    Helps in developing the finger skills of the baby.\n
    Vibrant colors and attractive designs make this toy, an engaging and informative play tool ; Type: Junior Ring ; Ideal For: Boys and girls.\n`,
    count: 60,
    price: 160,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/Littles2_1.jpg" },
      { path: "/images/products/baby/Littles2_2.jpg" },
      { path: "/images/products/baby/Littles2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Little's" },
      { key: "Seller", value: "Bold N Elegant" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Little's Rainbow Stacking Cubes I Activity toy for babies I Multicolor I Infant & Preschool Toys I Develops motor & Reasoning skills(7 pieces)",
    description: `Helps develop motor skills.\n
    Helps develop color recognition.\n
    Helps motor skills of the baby.\n
    Trying to assemble and match colors helps develop reasoning skills.\n
    Helps develop hand eye coordination.\n`,
    count: 60,
    price: 134,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/Littles3_1.jpg" },
      { path: "/images/products/baby/Littles3_2.jpg" },
      { path: "/images/products/baby/Littles3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Little's" },
      { key: "Seller", value: "Electronics Bazaar Store" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Himalaya Powder For Baby, 700G",
    description: `Superior powder infused with the power of herbs and zinc oxide\n
    Instructions Included:\n
    Yashad bhasma (zinc oxide) protects and prevents skin from rashes and infections\n
    Olive oil and almond oil: vitamin e nourishes the skin and keeps skin soft and moisturized\n
    Soft and coarse talc, which does not block the skin pores like other talcs\n
    Khus grass: keeps skin cool and fresh. Organic : Yes\n
    PACKER: The Himalaya Drug Company,Tumkur Road, Makali, Bangalore - 562162; IMPORTER: The Himalaya Drug Company,Tumkur Road, Makali, Bangalore - 562162\n
    Free from parabens, phthalates and synthetic colors, the usual factors for rashes and allergies\n`,
    count: 160,
    price: 318,
    category: "Baby",
    sales: 70,
    images: [
      { path: "/images/products/baby/himalaya1_1.jpg" },
      { path: "/images/products/baby/himalaya1_2.jpg" },
      { path: "/images/products/baby/himalaya1_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Himalaya" },
      { key: "Seller", value: "KiranaMarket" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Himalaya Baby Lotion 700ml",
    description: `Nourishes and moisturizes to make skin soft and smooth. Organic : Yes.\n
    Clinically tested for safety and efficacy.\n
    Key ingredients: Almond Oil is a renowned skin softener which moisturizes baby's skin.\n
    Licorice helps protect s and soothes baby's skin.\n
    Olive Oil helps keeps baby's skin soft and smooth, and helps protect the skin due to its antioxidant property.\n
    Apply Himalaya Baby Lotion liberally on baby's body after bath and as and when required.\n
    Gentle | Safe | Researched\n`,
    count: 60,
    price: 343,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/himalaya2_1.jpg" },
      { path: "/images/products/baby/himalaya2_2.jpg" },
      { path: "/images/products/baby/himalaya2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Himalaya" },
      { key: "Seller", value: "KiranaMarket" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Himalaya Face Body Oil Baby Massage Oil For All Skin Types (500 ML)",
    description: `Ashvagandha: Improves skin tone ; How to Use: Massage baby's body with Baby Massage Oil, preferably half an hour before bath time.\n
    Free from Mineral Oil & Animal Fat, the usual factors for rashes & allergies. Baby Massage Oil is clinically tested for safety and efficacy.\n
    Daily body massage with herbs-based oil helps nourish babyâ€s skin and promote overall growth & development. Skin Type : All Skin Type: Olive \n Oil: Vitamin E nourishes, protects, and softens skin\n
    PACKER: The Himalaya Drug Company,Tumkur Road, Makali, Bangalore - 562162; IMPORTER: The Himalaya Drug Company,Tumkur Road, Makali, Bangalore - 562162\n
    Target Gender: Unisex\n`,
    count: 60,
    price: 425,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/himalaya3_1.jpg" },
      { path: "/images/products/baby/himalaya3_2.jpg" },
      { path: "/images/products/baby/himalaya3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Himalaya" },
      { key: "Seller", value: "Electronics Bazaar Store" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Mamaearth Moisturizing Baby Bathing Soap Bar pH 5.5 with Goat Milk and Oatmeal, 75g (Pack of 2)",
    description: `SOAP FREE WITH BALANCED 5.5 pH Most soaps are harsh and wash off the natural oils from baby's skin. This bar is soap free, made from natural ingredients such as coconut based cleansers and thus maintain 5.5 pH which is ideal for gentle and delicate skin of babies.
    TEAR FREE FORMULA For stress-free bath time, our carefully formulated bathing bar is tear free. It does not irritate those pretty eyes or sensitive skin of the baby.\n
    SUITABLR FOR YOUR NEWBORN'S DELICATE SKIN The natural nutrients present in goat milk gets easily absorbed in the delicate skin of your baby and keeps it moisturized for long time. Goat milk also helps in soothing dry & itchy skin of babies.\n
    SUITS DRY, ITCHY, ECZEMA PRONE SKIN One of the best known ingredient to soothe dry, itchy and irritated skin - unflavored oats. It is also a great cleansing agent for eczema prone skin.; Dermatologically Tested pH Balanced Certified Toxin Free Hypoallergenic.\n
    Color Name: White\n`,
    count: 170,
    price: 200,
    category: "Baby",
    sales: 155,
    images: [
      { path: "/images/products/baby/mamaearth1_1.jpg" },
      { path: "/images/products/baby/mamaearth1_2.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Mamaearth" },
      { key: "Seller", value: "Hopscotch India" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Mamaearth Natural Repellent Mosquito Patches For Babies with 12 Hour Protection,White,Pack of 1",
    description: `100% NATURAL PLANT BASED PROTECTION : Mamaearth's 100% Natural Mosquito Repellent Patches are infused with mosquito repelling 100% Natural Citronella, Eucalyptus & Peppermint Oil. They can be pasted anywhere on clothes, prams, cots, schoolbags etc.
    UP TO 12 HOURS PROTECTION : Our patches effectively provide protection from Malaria, Dengue and Chikungunya spreading mosquitoes for up to 12 hours.\n
    WATERPROOF : Our waterproof patches are ideal for any outdoor activities like sports, camping, school, park etc.\n
    FAMILY SAFE : Our patches provide all natural defence against Dengue, Malaria and Chikungunya. They are safe for the entire family including babies and toddlers as they are non toxic without any pesticides & DEET free with no side effects like eyes irritation or skin damage.\n
    RESEALABLE ZIP POUCH : Our patches have superior adhesive quality of 3M tape that can be pasted anywhere. Each pouch contains 12 sheets of 2 patches in a zip lock packaging to ensure we preserve the efficacy of our patches.\n`,
    count: 80,
    price: 150,
    category: "Baby",
    sales: 52,
    images: [
      { path: "/images/products/baby/mamaearth2_1.jpg" },
      { path: "/images/products/baby/mamaearth2_2.jpg" },
      { path: "/images/products/baby/mamaearth2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Mamaearth" },
      { key: "Seller", value: "SkyStart" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Mamaearth Baby Rich Moisturizing Cream With Almond Oil & Shea Butter For Dry Skin - 200 g | For Face & Body | 24-Hour Moisturization | Nourishes & Softens Skin",
    description: `24-HOUR MOISTURIZATION: Specially formulated for dry skin, it is enriched with Shea Butter, this cream keeps your baby’s skin moisturized for up to 24 hours. So, no need to reapply again and again! We've got your back!\n
    SOOTHING : Infused with the goodness of Almond Oil, this cream keeps dryness at bay, while softening and smoothening your baby’s skin.
    LIGHTWEIGHT & QUICK-ABSORBING: Sticky and heavy creams are history. Mamaearth Baby Rich Moisturizing Cream is super lightweight and gets absorbed into the skin instantly.\n
    MADE SAFE CERTIFIED: No toxins or harmful chemicals, just nature’s goodness. Rich Moisturizing Cream Soft is crafted with natural ingredients and is Made Safe certified.\n`,
    count: 60,
    price: 326,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/mamaearth3_1.jpg" },
      { path: "/images/products/baby/mamaearth3_2.jpg" },
      { path: "/images/products/baby/mamaearth3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Mamaearth" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Bumtum Baby Bed, Mosquito Net & Neck Pillow, Baby Gadda Set for New Born, 0-6 Month, Printed Baby Bedding, Baby Teddy Girrafe Sleeping Bed of 71cm x 47cm x 5cm, Dark Blue",
    description: `Soft and comfortable materials: Bumtum Baby bedding set is made from soft, breathable, and hypoallergenic materials that are gentle on a baby's delicate skin.\n
    Comfort size and fit: The bedding set fits snugly and securely on the crib mattress to prevent any gaps or entrapment risks. The sheets have elasticized edges to ensure a proper fit.\n
    Blocks mosquitoes: The Bantoo's mesh is knit loosely enough to let air flow easily, but tight enough to stop any mosquitoes from getting close to the baby. It also prevents your kids from Insect, parasites, and bugs.\n
    Travel friendly: Soft and comfortable new born baby bedding set with protective mosquito net and pillow is very light weighted and easily foldable makes it very travel friendly. Look and feel very sweet and soothing colours for your baby with soft and skin friendly fabric.\n
    Easy maintenance: It’s easy to clean & maintain and machine washable. It can withstand frequent laundering without losing its shape, softness, or colour.\n`,
    count: 60,
    price: 270,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/bumtum1_1.jpg" },
      { path: "/images/products/baby/bumtum1_2.jpg" },
      { path: "/images/products/baby/bumtum1_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Bumtum" },
      { key: "Seller", value: "KiranaMarket" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "BUMTUM Interlocking Baby Play Mat | Puzzle Flooring | Gym Mat for Kids | 60 x 60 CM |12 MM Thickness | Set of 4 Tiles (Multicolour)",
    description: `Due to marbled floors in modern houses it is very difficult to protect your baby from slipping and getting head bumps, this bumtum tile protects babies head, spine, hips, knees and elbows on hard floors while learning to explore.\n
    Helps your kid to grip while playing, learning to sit and stand, eliminating the risk of falling and getting hurt.\n
    These are Moisture-resistant and heat-insulating, Washable and hence durable for a longer run.\n
    Easy Installation and each Tile can easily be taken out and put back.\n
    Each Tile = 2ft by 2ft and 12 mm thickness.\n`,
    count: 60,
    price: 670,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/bumtum2_1.jpg" },
      { path: "/images/products/baby/bumtum2_2.jpg" },
      { path: "/images/products/baby/bumtum2_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Bumtum" },
      { key: "Seller", value: "SREEKRISHNA ENTERPRISES" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "BUMTUM Baby Swing Car Comfortable Seats with Backrest| Push Rider| Ride On Toy Car, Steering Music & Lights for Kids(Pink)",
    description: `The swing car has 360 degree rotation of steering.\n
    The smooth, fast and simple riding features make it easy for toddlers to use it. Just pedal, twist, and enjoy!\n
    In addition, the disc-shaped steering wheel allows your child to have a firm and easy grip and to rotate the wheel.\n
    Along with the smooth-riding experience, this ride-on possesses a stunning design with eye-catching colors to draw your child’s attention and involve them in playful activities. - - It has anti-skid footrest and large seat for your kid to sit comfortably.\n
    Product Dimension: 71x32x40 cm. - This ride-on is made from BPA-free plastic and does not contain any harmful and banned chemicals.\n`,
    count: 60,
    price: 1300,
    category: "Baby",
    sales: 55,
    images: [
      { path: "/images/products/baby/bumtum3_1.jpg" },
      { path: "/images/products/baby/bumtum3_2.jpg" },
      { path: "/images/products/baby/bumtum3_3.jpg" },
    ],
    attrs: [
      { key: "Brands", value: "Bumtum" },
      { key: "Seller", value: "Hopscotch India" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },

  {
    name: "To The Nines Men's Jacquard Tie, Pocket Square, Cufflinks & Lapel Pin",
    description: `Contents - Blue Tie with matching Pocket square, Lapel pin and Cufflink.\n
    Material - Satin; Tie Dimensions - 3" Wide and 60" Length; Pocket Square - 11" x 11".\n
    Imported Lining with Superior stitching quality. Crafted by Hands for Perfection.\n
    Elegant Gift Sets with pocket friendly prices, ideal for Father's Day, Anniversary, Rakshabandhan, Valentine and Special Occasions.\n
    Find exclusive designs and styles from the house of To The Nines.\n`,
    count: 60,
    price: 499,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/floral1_1.jpg" },
      { path: "/images/products/menClothing/floral1_2.jpg" },
      { path: "/images/products/menClothing/floral1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Satin" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 2,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "To The Nines Men's Jacquard Tie, Pocket Square, Cufflinks & Lapel Pin",
    description: `Contents -Tie with matching Pocket square, Lapel pin and Cufflink.\n
    Material - Satin; Tie Dimensions - 3" Wide and 60" Length; Pocket Square - 11" x 11".\n
    Imported Lining with Superior stitching quality. Crafted by Hands for Perfection.\n
    Elegant Gift Sets with pocket friendly prices, ideal for Father's Day, Anniversary, Rakshabandhan, Valentine and Special Occasions.\n
    Find exclusive designs and styles from the house of To The Nines.\n`,
    count: 60,
    price: 595,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/floral2_1.jpg" },
      { path: "/images/products/menClothing/floral2_2.jpg" },
      { path: "/images/products/menClothing/floral2_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "green" },
      { key: "Material", value: "Satin" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 2,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "To The Nines Men's Jacquard Tie, Pocket Square, Cufflinks & Lapel Pin",
    description: `Contents - Tie with matching Pocket square, Lapel pin and Cufflinks\n
    Material - Satin; Tie Dimensions - 3" Wide and 60" Length; Pocket Square Dimensions - 11" x 11"\n
    Imported Lining with Superior stitching quality. Crafted by Hands for Perfection.\n
    Elegant Gift Sets with pocket friendly prices, ideal for Father's Day, Anniversary, Rakshabandhan, Valentine and Special Occasions.\n
    Find exclusive designs and styles from the house of To The Nines.\n
    `,
    count: 60,
    price: 585,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/floral3_1.jpg" },
      { path: "/images/products/menClothing/floral3_2.jpg" },
      { path: "/images/products/menClothing/floral3_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "brown" },
      { key: "Material", value: "Satin" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
    rating: 2,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "LookMark Men's Poly Cotton Digital Printed Half Sleeve Shirt",
    description: `Stylish Half sleeve Casual Shirts & Party Wear Casual shirts\n
    100% Cotton Blend, Pre Washed for an extremely soft finish and Rich look\n
    Disclaimer: Product colour may slightly vary due to photographic lighting sources or your monitor settings\n
    Modern slim fit ( we have updated our size chart, please refer the size chart for new measurements before ordering)\n
    Breathable : Truly comfortable and easy to wear in every season it is insulating in winter and breathable in summer.
    `,
    count: 60,
    price: 585,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/floral4_1.jpg" },
      { path: "/images/products/menClothing/floral4_2.jpg" },
      { path: "/images/products/menClothing/floral4_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "brown" },
      { key: "Material", value: "Satin" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 2,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "OM SAI LATEST CREATION Shirt for Men || Rayon Casual Shirt for Men || Tropical Leaf Printed Shirt for Men || Men Stylish Shirt with Preppy Short Sleeve || Shirt for Boys",
    description: `Fabric:- Rayon Stylish Shirt || Print:- Tropical Leaf Printed Shirt For Boy || Package Contain:- 1 Casual Shirt For Men.\n\n
    Sleeves:- Preppy Short Sleeve Stylish Shirt For Men || Neck:- Turn-Down Collar shirt for boys || Patten:- Shirt has a full button placket and a curved hem design.\n\n
    Occasion:- Casual Wear|| Beach Wear || Office Wear|| Formal wear|| Evening wear|| Work Wear|| Party Wear|| Regular Outing Wear|| Business Wear|| Regular Wear || Professional Wear, Please Click On Brand Name "OM SAI LATEST CREATION" For More Products.\n\n
    Size:- Select as per your body requirement, To ensure that our garments fit you well, it is essential that you pick the correct size.\n\n
    Please check the size chart for the garments measurements and order a garment for the ease of putting on and taking off the garment.\n\n
    Care Instructions:- Hand Wash Only, Wash Separately in Cold water, Do not bleach, Dry in Shade, Medium Irons.\n\n
    `,
    count: 60,
    price: 585,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/floral5_1.jpg" },
      { path: "/images/products/menClothing/floral5_2.jpg" },
      { path: "/images/products/menClothing/floral5_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
    rating: 2,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "GRECIILOOKS Night Suit Set for Men| Rayon Printed Night Dress Set| Pajama Shorts Night Suits Set| Men Lounge Wear Set| Summer Wear for Men| Goa Wear Set",
    description: `Shirts Fabric:- Rayon || Color :- Multi || Sleeves :- Short Sleeves || Sleeve Styling :- Preppy || Neck : Stylish Spread Collar \n\n
    Fit Type: Regular Fit || Pattern : Printed | Sleeve Type: Half Sleeve || Pockets Type : Two Side Pockets || Notched || Fabric : Rayon || Package Contain : 1 T-Shirt & 1 Shorts Combo\n\n
    Occasion : Mens Pajama Set || Designs Casual Look || Short Sleeve || Shorts Pajamas Set || Sleep Short Set || Mens Pajama Shorts Set || Mens Lounge Wear || Mens Short Pajamas Set || Everyday Wear\n\n
    Half Sleeve Fit Shirt and Shorts, Printed Casual Sleepwear & Lounge Wear Nightdress Pajama Set & Night Suits Set\n\n
    Summer Beach Fashion Floral Print Two Piece Sets for Men & Women Short Sleeve Shirt and Printed Shorts Suits Casual Male Outfit\n\n
    `,
    count: 60,
    price: 585,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/floral6_1.jpg" },
      { path: "/images/products/menClothing/floral6_2.jpg" },
      { path: "/images/products/menClothing/floral6_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "Brand Conquer" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 2,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "GLORYBOYZ Half Sleeve Relaxed Fit Tropical Hawaiian Men's Casual Shirt",
    description: `Dry, Laundry, Machine Washable / Handwash In Cold Water. Hang Dry And Low Iron If Necessary. Any Problem Please Contact with Us, You Will Get A Best Solution.\n\n
    Fits True to Size And Slim Fit Style Make You Feel Good and Conformtable When Wearing.\n\n
    Cooling Tech: Hawaiian Shirts with Soft & Coolness Fabric, Made From Premium Viscose. Helping Sweat Evaporates Faster.\n\n
    This casual summer aloha hawaiian beach shirt and short features with a tropical floral print, all over printing which brings you sharp looking, vibrant prints add tropical appeal to this Hawaiian shirt, attract people's eye.\n\n
    Disclaimer: product colour may vary due to photographic lighting sources or your display settings.\n
    `,
    count: 60,
    price: 585,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/floral5_1.jpg" },
      { path: "/images/products/menClothing/floral5_2.jpg" },
      { path: "/images/products/menClothing/floral5_3.jpg" },
    ],
    attrs: [
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "CREATURE" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 2,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Peppyzone Men's Camouflage Regular Fit Track Pant",
    description: `100% Cotton Camouflage Printed Fabric.\n\n
    Stylish design with convertible waistline and pockets. Looks great with a jacket.\n\n
    Product Color May Slightly Vary Due to Photographic Lighting Sources.\n\n
    `,
    count: 60,
    price: 664,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/floral6_1.jpg" },
      { path: "/images/products/menClothing/floral6_2.jpg" },
      { path: "/images/products/menClothing/floral6_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Camouflage" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
    rating: 2,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Peppyzone Men's Camouflage Regular Fit Track Pant",
    description: `100% Cotton Camouflage Printed Fabric.\n\n
    Stylish design with convertible waistline and pockets. Looks great with a jacket.\n\n
    Product Color May Slightly Vary Due to Photographic Lighting Sources.\n\n
    `,
    count: 60,
    price: 664,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cam1_1.jpg" },
      { path: "/images/products/menClothing/cam1_2.jpg" },
      { path: "/images/products/menClothing/cam1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Camouflage" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
    rating: 2,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Fivali 4 Pack Neck Gaiter Breathable Bandana Mask for Outdoor Protection",
    description: `【COMFORTABLE & BREATHABLE】 Our bandana mask is made of polyester microfiber, it is skin-friendly and breathable. And it has exceptional absorbing and wicking features to keep you dry while wearing. Perfect fit for Women and Men.\n\n
    【WIND AND DUST PROOF】 When going out for running, cycling, mowing, skiing, snowboarding or motorcycling, wearing it as a face scarf, headband, bandanna mask or neck gaiter can protect your face from sunlight, and avoid your nose and mouth clean from breathing dust. What’s more, it has performance of windproof and anti-mosquito.\n\n
    【MULTI-WAYS TO WEAR】 This neck gaiters for women and men have more than 12 different dress ways, it can be used as a neck gaiter, head wrap, face scarf, balaclava, headband, scarf, bandana, beanie cap, hood and wristband. Fashion design can make you look great on any occasion. It is also a great gift for you and friends and a good choice for walking, yoga, fishing, hunting, sports or music festival.\n\n
    【ONE SIZE FOR ALL】 The neck gaiter is easy to wear with good stretchy and elasticity. It won’t cause discomfort or sultry feeling when worn on. One size for most people and gives a free wearing experience. The natural length and width is 18.5 x 9.8 inch.\n\n
    【CUSTOMER SERVICE】When you outside and working more or less alone, the gaiter mask helps you a lot. If you have any issue with our neck gaiter, please feel free to send message via email, we will reply within 24 hours. And we hope customers to give suggestions for improvement.\n\n
    `,
    count: 60,
    price: 200,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cam2_1.jpg" },
      { path: "/images/products/menClothing/cam2_2.jpg" },
      { path: "/images/products/menClothing/cam2_3.jpg" },
    ],
    attrs: [
      // { key: "color", value: "blue" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Camouflage" },
      { key: "Brands", value: "Brand Conquer" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
    rating: 2,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "FabSeasons Camouflage Polyester Multi Functional Pollution & Face Mask, Balaclava, Neck Warmer Ninja Mask, Cap and Bandana, Ideal for All Seasons",
    description: `HELPS KEEP YOU WARM DURING COLD WEATHER - A full face cover balaclava hood style mask can be worn to help your entire face stay warm when you need it most\n\n
    FABSEASONS Buying from mean you have received a Duplicate product, AVOID DISAPPOINTMENT\n\n
    MULTI-FUNCTIONAL and WIDELY USED - This product can be used as a hat or a mask, and can also with the chin dropped or as a neck gaiter greater for ventilation. People use our balaclavas for skiing, snowboarding, Motorcycling riding, Running, Cycling, hunting, Trekking Mountain Climbing, Tactical training, warehouse work shoveling snow and other outdoor activities\n\n
    DURABLE QUALITY - Quality materials assure that these balaclava masks will stand up to any weather conditions it's put through. Unisex headgear, one size fits most. Available in 4 different colors\n\n
    VERY SOFT AND COMFORTABLE - Made of a soft lucious polyester material, this balaclava headgear is perfect for long periods of use. One size fits most\n\n
    `,
    count: 60,
    price: 250,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cam3_1.jpg" },
      { path: "/images/products/menClothing/cam3_2.jpg" },
      { path: "/images/products/menClothing/cam3_3.jpg" },
    ],
    attrs: [
      // { key: "color", value: "blue" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Camouflage" },
      { key: "Brands", value: "Brand Conquer" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "DRUNKEN Cap for Men Unisex Women Topi Head Branded Military Boy's Girl's Caps Adjustable Strap Summer Army Camouflage Sports Cricket Gym Dance Cotton Free Size Woolen Fashion Baseball Helmet Winter (Multi)",
    description: `[The Cap] - Lightweight / Durable / Smooth. Great Fit For Most Head Sizes. One Size Fits For Most People. Special Design Will Make You Attractive, Ideal For Men & Women\n\n
    [Stay Safe Under The Summer Sun]---Stop Risking Your Health And Safety By Walking Outdoors Without Adequate Sun Protection. Protect Your Skin From Harmful Uv Rays And Keep Your Hair Out Of Your Face And Eyes By Wearing This Comfortable Cap During All Your Outdoor Activities. Made Of Breathable, It Is The Perfect Companion For Your Active Lifestyle\n\n
    [Adjustable Velcro Closure]---Use The Convenient Velcro Closure To Custom Fit The Baseball Cap To Your Head And Ensure Maximum Comfort And A Secure Fit At All Time\n\n
    [Stylish Velcro Baseball Cap]-The Hottest Fashion Styles For Men & Women, This Cap Come In A Free Size That Can Be Adjusted On Anybody's Head. Great Comfortable Fit, Perfect For Outdoor Activities. You Can Pair Off With Your Favorite Outfit\n\n
    Color Name: Multicolour; Outer Material Type: Cotton; Age Range Description: Adult; Occasion Type: Casual\n\n
    `,
    count: 60,
    price: 315,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cam4_1.jpg" },
      { path: "/images/products/menClothing/cam4_2.jpg" },
      { path: "/images/products/menClothing/cam4_3.jpg" },
    ],
    attrs: [
      // { key: "color", value: "blue" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Camouflage" },
      { key: "Brands", value: "Brand Conquer" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "LEOTUDE Half Sleeve Oversized Tshirt for Men, Round Neck Longline Drop Shoulder | Colorful Printed T-Shirt (Grey Color)",
    description: `Fit: Oversized\n\n
    Pattern: Animal Printed\n\n
    Fabric: Cotton Blend\n\n
    Made of soft and breathable cotton blend fabric for comfort and durability\n\n
    Oversized T-shirt, loose fit, so very comfortable to wear, also looks very trendy & classy\n\n
    `,
    count: 60,
    price: 319,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/animal1_1.jpg" },
      { path: "/images/products/menClothing/animal1_2.jpg" },
      { path: "/images/products/menClothing/animal1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "grey" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Animal Print" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "LEOTUDE Half Sleeve Oversized Tshirt for Men, Round Neck Longline Drop Shoulder | Colorful Printed T-Shirt (Grey Color)",
    description: `Fit: Oversized\n\n
    Pattern: Animal Printed\n\n
    Fabric: Cotton Blend\n\n
    Made of soft and breathable cotton blend fabric for comfort and durability\n\n
    Oversized T-shirt, loose fit, so very comfortable to wear, also looks very trendy & classy\n\n
    `,
    count: 60,
    price: 319,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/animal1_1.jpg" },
      { path: "/images/products/menClothing/animal1_2.jpg" },
      { path: "/images/products/menClothing/animal1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "grey" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Animal Print" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "LEOTUDE Half Sleeve Oversized Tshirt for Men, Round Neck Longline Drop Shoulder | Colorful Printed T-Shirt (Grey Color)",
    description: `Color : Black\n\n
    Fabric: Cottonblend\n\n
    Sleeve Type: Half Sleeve\n\n
    Neck Style: Round\n\n
    Pattern: Back Print\n\n
    `,
    count: 60,
    price: 319,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/animal2_1.jpg" },
      { path: "/images/products/menClothing/animal2_2.jpg" },
    ],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Animal Print" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "DEMAMD PRINT VR Collections Hoodies Uchiha Symbol Hoodie Black Itachi Clan Logo Hooded Men's Cotton 100% (Large)",
    description: `Color : Black\n\n
    Fabric: Cottonblend\n\n
    Sleeve Type: Half Sleeve\n\n
    Neck Style: Round\n\n
    Pattern: Back Print\n\n
    `,
    count: 60,
    price: 749,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/animal3_1.jpg" },
      { path: "/images/products/menClothing/animal3_2.jpg" },
    ],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Animal Print" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "BALENZIA x Disney Winnie the Pooh Character Loafer/Invisible Pooh, Eeyore, Tiger socks for Women (Pack of 3 Pairs)(Free Size) Yellow, Blue, Orange | Made with 100% Cotton & Spandex",
    description: `Get ready to indulge in good deeds with our exclusive range of socks, and spread positivity like Winnie the Pooh.Speaking for themselves, they are absolutely drool-worthy!\n\n
    Our merchandise offers you a pack of a hunt in vibrant colors i.e. No Show Socks and Ankle Socks. Complete with a matching Winnie the Pooh Logo, after all the smallest things take up the most room in your heart.\n\n
    Style your wardrobe with our exclusive range crafted with exquisite weaving technology and high-performance fibers ensuring that each sock provides incredible comfort, breathability, and durability.\n\n
    The socks are designed keeping in mind the attractive designs and colors of the Disney characters. These socks are fashionable and complement your style statement.\n\n
    These socks are soft, comfy to wear, and do not irritate the skin. They are made with cotton which can easily absorb moisture and is also able to regulate temperature efficiently. Also, the cushioned sole is soft and padded thus providing extra protection for the foot and sweat absorption.\n\n
    `,
    count: 60,
    price: 375,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cartoon1_1.jpg" },
      { path: "/images/products/menClothing/cartoon1_2.jpg" },
    ],
    attrs: [
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "Brand Conquer" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "BALENZIA X Marvel Iron Man,Captain America & Hulk Logo Themed High Ankle Half Cushioned Sports Socks for Men-(Pack of 3 Pairs)(Free Size) White,Green,Navy",
    description: `Unleash your inner strength with these cushioned high ankle socks crafted with exquisite weaving technology and high-performance fibers ensuring that each sock provides incredible comfort, breathability, and durability.\n\n
    Believe that you are brilliant. Believe that you can achieve anything you want to, wearing these socks as a gentle reminder that you can do all that you set your mind to. That my friend is a true superpower.\n\n
    Fly through the day feeling unstoppable! Speaking for themselves, they are absolutely drool-worthy!\n\n
    Cotton Cushioning- The natural, soft, and smooth cotton fibres give your feet the best class comfort with added support, shock absorption, and impact reduction. The cushioning reduces the shock of running or jumping and prevents foot fatigue, and the lightweight flat-knit provides a close fit for a protective second skin that prevents blisters.\n\n
    Shape Retention : The usage of high-quality Spandex in our socks provides extraordinary versatility. The strong, durable, and stretchable fibre helps keeping the socks in their best shape and helps them stretch/recover and "stay up".\n\n
    Pack Content: Pack of 3 Pairs. Material Composition: Cotton 75%, Nylon 23%, Elasthane 2%.\n\n
    `,
    count: 60,
    price: 375,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cartoon2_1.jpg" },
      { path: "/images/products/menClothing/cartoon2_2.jpg" },
      { path: "/images/products/menClothing/cartoon2_2.jpg" },
    ],
    attrs: [
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "CREATURE" },
      { key: "Seller", value: "SIRIL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "VIKCLIQUE Anime Jujutsu Kaisen Gojo Satoru Powder Cotton Blend Printed Full Sleeve Round Neck Black, Navy Blue T-Shirt for Men's/Boy's",
    description: `Material - These are cotton Blend t-shirt which are made of pre-shrunk cotton Blend and are soft & smooth with a high thread-count. They are comfortable and durable.\n\n
    Printing - Our stylish t-shirts are screen printed with inks that are vibrant, durable, and highly crack resistant.\n\n
    Photo may vary with the product due to device screen settings\n\n
    Made in India\n\n
    Care: Machine Washable, Do Not Bleach, Low Tumble Dry\n\n`,
    count: 60,
    price: 459,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cartoon4_1.jpg" },
      { path: "/images/products/menClothing/cartoon4_2.jpg" },
    ],
    attrs: [
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Lymio Hoodies || Sweatshirt for Unisex || Unisex Hoodie (H-14-17)",
    description: `Women Hoodies || sweatshirt for Unisex || Unisex Hoodie\n\n
    Actual Products color may vary with product due to monitor settings\n\n
    Wash care: machine wash cold, tumble dry low, do not bleach. Check our size chart to get your best fit\n\n
    Fit Type: Regular Fit\n\n
    Printed Hoodies\n\n`,
    count: 60,
    price: 459,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cloth1_1.jpg" },
      { path: "/images/products/menClothing/cloth1_2.jpg" },
      { path: "/images/products/menClothing/cloth1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "More & More Unisex-Adult Cotton Hooded Neck Don’t Quit Printed Hoodie",
    description: `Sleeve Type: Full Sleeve; Pockets : Kangaroo Pockets which is enough of cover your palm, when you feel cold; Style: Fashionable round neck Hoodie. Perfect for Trending Stylish Look.; Perfect for Winters, Night Highways long drive. Note: Check the Size chart in the product images for perfect fit\n\n
    Closure Type: No Closure`,
    count: 60,
    price: 594,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cloth3_1.jpg" },
      { path: "/images/products/menClothing/cloth3_2.jpg" },
      { path: "/images/products/menClothing/cloth3_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "red" },
      { key: "Material", value: "Fleece" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "CREATURE" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "More & More Unisex-Adult Cotton Hooded Neck Don’t Quit Printed Hoodie",
    description: `Sleeve Type: Full Sleeve; Pockets : Kangaroo Pockets which is enough of cover your palm, when you feel cold; Style: Fashionable round neck Hoodie. Perfect for Trending Stylish Look.; Perfect for Winters, Night Highways long drive. Note: Check the Size chart in the product images for perfect fit\n\n
    Closure Type: No Closure`,
    count: 60,
    price: 594,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cloth4_1.jpg" },
      { path: "/images/products/menClothing/cloth4_2.jpg" },
      { path: "/images/products/menClothing/cloth3_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "orange" },
      { key: "Material", value: "Fleece" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "CREATURE" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "ADRO New York Design Printed Hoodie/Sweatshirt for Men & Women",
    description: `High-Quality Material: Made from premium cotton fleece fabric (340 GSM) for superior comfort and durability.\n\n
    Soft and Cozy: The fleece interior feels soft against the skin and keeps you warm on chilly days.\n\n
    Stylish Design: Classic printed hoodie design with a kangaroo pocket and a comfortable hood for added style and functionality.\n\n
    Perfect Fit: Available in different sizes for a comfortable and Regular fit.Check our size chart to find your size.\n\n
    Available in Various Colors, Ideal for Layering, It Can be worn over t-shirts or under jackets for added warmth and style.\n\n`,
    count: 60,
    price: 999,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cloth5_1.jpg" },
      { path: "/images/products/menClothing/cloth5_2.jpg" },
      { path: "/images/products/menClothing/cloth3_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "pink" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "CREATURE" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
    rating: 1,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "ADRO New York Design Printed Hoodie/Sweatshirt for Men & Women",
    description: `High-Quality Material: Made from premium cotton fleece fabric (340 GSM) for superior comfort and durability.\n\n
    Soft and Cozy: The fleece interior feels soft against the skin and keeps you warm on chilly days.\n\n
    Stylish Design: Classic printed hoodie design with a kangaroo pocket and a comfortable hood for added style and functionality.\n\n
    Perfect Fit: Available in different sizes for a comfortable and Regular fit.Check our size chart to find your size.\n\n
    Available in Various Colors, Ideal for Layering, It Can be worn over t-shirts or under jackets for added warmth and style.\n\n`,
    count: 60,
    price: 999,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cloth6_1.jpg" },
      { path: "/images/products/menClothing/cloth6_2.jpg" },
      { path: "/images/products/menClothing/cloth3_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "maroon" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "CREATURE" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
    rating: 1,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "LEOTUDE Regular Fit Cottonblend Full Sleeve Printed Men's T-Shirt (Color Multicolor)",
    description: `Color : Maroon\n
    Fabric: Cotton Blend\n
    Sleeve Type: Full Sleeve\n
    Neck Style: Round Neck\n
    Pattern : Printed`,
    count: 60,
    price: 279,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cloth7_1.jpg" },
      { path: "/images/products/menClothing/cloth7_2.jpg" },
      { path: "/images/products/menClothing/cloth7_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "maroon" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Geometric" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 1,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Kvetoo Men High Neck Full Sleeve Winter Woolen Button Sweater",
    description: `Fabric :-Acrylic\n\n
    Fit:-Regular Fit\n\n
    Closure:-Button\n\n
    Sleeve: Long Sleeve\n\n
    Neck :High Neck`,
    count: 60,
    price: 598,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cloth9_1.jpg" },
      { path: "/images/products/menClothing/cloth9_2.jpg" },
      { path: "/images/products/menClothing/cloth9_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "yellow" },
      { key: "Material", value: "Acrylic" },
      { key: "Pattern", value: "Geometric" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
    rating: 1,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Majestic Man Slim Fit Cotton Casual Printed Shirt for Men",
    description: `Fabric - Premium Cotton, soft, comfy and breathable.\n\n
    Truly comfortable and easy to wear in every season it is insulating in winter and breathable in summer.Refresh your wardrobe with this Shirt.\n\n
    Style - Enhance your look by wearing this Casual Stylish Printed Men's shirt, Team it with a pair of tapered denims Or Solid Chinos and Loafers for a fun Smart Casual look,Refresh your wardrobe with this Shirt.\n\n
    Comfortable to Wear and Easy to Maintain.Style note: Stylish and trending Half sleeve casual Printed shirt for casual & smart casual wear\n\n
    Occasion:Perfect for tropical, birthday parties, holidays, weddings or any everyday casual wear. Majestic Man short-sleeved shirts can be matched with beachwear sandals, shorts, and sunglasses to create a stylish casual style.\n`,
    count: 60,
    price: 545,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/cloth11_1.jpg" },
      { path: "/images/products/menClothing/cloth11_2.jpg" },
      { path: "/images/products/menClothing/cloth11_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Geometric" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
    rating: 1,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Majestic Man Slim Fit Cotton Casual Printed Shirt for Men",
    description: `💕 SUITABLE FOR: This winter cap and scarf set are perfect for daily wearing including indoors and outdoors activities this winter knit cap and scarf set is suitable for sleeping, walking your dog, cycling, skiing, snowboarding, running, camping, traveling, fishing, hiking, motorcycling and so on.\n\n
    💕 PROTECT YOU FROM A CHILLY DAY: Completely covers your head, ears, face and neck all of the time, thick and warm enough to protect you from a chilly day. Best gift for your parents, friends, and yourself when the cold weather coming.; 💕 FASHIONABLE : This winter beanie cap & scarf set is easy to pair with winter clothes. Wear for the weather in style with a polished look to jacket or sweaters. It reflects the fashionable casual wear style.\n\n
    💕 APPLICATION: Easy to pair with winter clothes. Wear for the weather in style with a polished look to jacket or sweaters. It reflects the fashionable casual wear style. It's a great gift in winter for family members, friends and anyone you love.\n\n
    💕 MODERN STYLISH: The cap with neck muffler / neckwarmer set for mens and womens design is the new trending fashion statement of the fall and winter season. Simple but fashionable keeps you looking good in cold weather.\n\n
    Age Range Description: Adult; Sport Type: Baseball; Pattern Type: Chevron; Outer Material Type: Wool; Fit Type: Stretch\n\n`,
    count: 60,
    price: 499,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/chev1_1.jpg" },
      { path: "/images/products/menClothing/chev1_2.jpg" },
      { path: "/images/products/menClothing/chev1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Wool" },
      { key: "Pattern", value: "Chevron" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 1,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "HUNTSMANS ERA Winter Knit Beanie Cap Hat Neck Warmer Scarf and Woolen Gloves Set Skull Cap for Men Women/Winter Cap for Men (3 Piece)",
    description: `Fleece lined for Warmth and Comfort- The winter hat, scarf and gloves set features a soft thick knit outer layer, the beanie hat and scarf are lined with high quality fleece to keep out wind and chill!\n\n
    Perfect gift for the holiday season - This beanie hat three-piece set is a great gift for any loved one in your life, its suiable for different ocassions and family festivals such as Christmas, Thanksgiving, New Year, family day, birthdays, Mother's day gift, Father's day gift.\n\n
    Classic Stylish Knitted: Precise knitting mixed yarn fashion beanie hat, scarf and gloves, creating a nice and fashionable look design, matches with any outfits like cardigans, sweaters, tops or other formal and casual winter clothes.\n\n
    Suit Every Occasion: Wonderful cold weather hat, scarf and gloves set for women and men wearing while skiing, snowboarding, skating, sledding, snowshoeing, camping, hiking or any outdoor winter sports and daily use.\n\n
    Fabric Type: Wool Acrylic; Age Range Description: Adult\n\n`,
    count: 60,
    price: 398,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/chev2_1.jpg" },
      { path: "/images/products/menClothing/chev2_2.jpg" },
      { path: "/images/products/menClothing/chev2_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Wool" },
      { key: "Pattern", value: "Chevron" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
    rating: 1,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Peytil Men's and Boy's Premium Full Length Socks, Mid Calf Length Socks, Formal Socks, Office Socks (Pack of 6 Pairs, Multi)",
    description: `Cotton Cushioning- The natural, soft, and smooth cotton fibres give your feet the best class comfort with added support, shock absorption, and impact reduction. The cushioning reduces the shock of running or jumping and prevents foot fatigue, and the lightweight flat-knit provides a close fit for a protective second skin that prevents blisters.\n\n
    Comfort Cuff – The socks are fabricated with a soft, non-binding cuff for extra comfort. They feature a soft-top that grips the leg gently to stay up, but not so much that it digs in or leaves tight rings around calves.\n\n
    Extra Heel & Toe Reinforcement - Our socks are enclosed with a reinforced heel & toe with double Polyamide for strength and a non-irritating, smooth toe seam. The toe is stitched using the Italian Rosso system, giving you a seamless experience and eliminating any friction around your toes for a comfortable fit. Extensive reinforcement of thicker fibres with nylon in significant areas that sustain wear and tear ensures exceptional strength, abrasion resistance, and increased durability.\n\n
    Firm Arch Compression – A strong spandex (elastane) band knit in the foot of the sock and that goes around the foot's arch provides a firm compression. The high-quality compression renders firm pressure giving your legs the support they need for extended workdays. It also enhances blood circulation that results in less leg fatigue, achiness, and swelling.\n\n
    Shape Retention – The usage of high-quality Spandex in our socks provides extraordinary versatility. The strong, durable, and stretchable fibre helps keeping the socks in their best shape and helps them stretch/recover and stay up.\n\n`,
    count: 60,
    price: 248,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/chev3_1.jpg" },
      { path: "/images/products/menClothing/chev3_2.jpg" },
      { path: "/images/products/menClothing/chev3_3.jpg" },
      { path: "/images/products/menClothing/chev3_4.jpg" },
    ],
    attrs: [
      { key: "color", value: "multicolor" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
    rating: 1,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "GHPC 100% Cotton Self Design Full Sleeves Regular Fit Formal Shirt for Men",
    description: `Made from high-quality 100% cotton fabric for superior comfort and breathability.\n
    Dobby self-design pattern adds a subtle and intricate texture to the shirt's design.\n
    Full sleeves offer a formal and polished look, suitable for various occasions.\n
    Classic spread collar & curved hemline adding to the formal look of the shirt\n
    Front button placket and patch pocket detail, providing a secure and adjustable fit\n`,
    count: 60,
    price: 1191,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/chev5_1.jpg" },
      { path: "/images/products/menClothing/chev5_2.jpg" },
      { path: "/images/products/menClothing/chev5_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "off-white" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Chevron" },
      { key: "Brands", value: "Labnoft" },
      { key: "Seller", value: "SIRIL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Kuber Industries Men's Handkerchiefs, 100% Pure Cotton, Pocket Square Hankies, Classic Plaid Pattern Perfect for Gift, Set of 3 (White), Standard (HS_37_KUBMART020429)",
    description: `PACKAGE CONTAIN: Set of 3 Piece Cotton Handkerchiefs\n
    MATERIAL: Cotton, COLOR: White\n
    PRODUCT DIMENSION: 42 x 42 x 1 CM\n
    100% Pure Cotton: Don’t settle for less than the best. This Men’s Handkerchiefs are beautifully crafted from premium cotton for maximum softness and longevity.\n
    A Great Gift for Any Occasion - Perfect gift for gentlemen, grandfathers, fathers, dads, or anyone who enjoys a classic hankie.This Handkerchiefs are absorbent, moisture-wicking, and hypoallergenic.\n`,
    count: 60,
    price: 299,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/plaid1_1.jpg" },
      { path: "/images/products/menClothing/plaid1_2.jpg" },
      { path: "/images/products/menClothing/plaid1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "white" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Plaid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "SIRIL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Lux Inferno Mens Cotton Thermal Top",
    description: `100% Cotton
    Full sleeve\n
    Round neck\n
    Gentle wash in lukewarm water, do not bleach\n
    Made from cotton rich fabric, it will keep you warm and cozy all day long\n
    This thermal embraces your body in a perfect fit and shields you from the chilly weather\n`,
    count: 60,
    price: 424,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/plaid2_1.jpg" },
      { path: "/images/products/menClothing/plaid2_2.jpg" },
      { path: "/images/products/menClothing/plaid2_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "grey" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Plaid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "SIRIL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "CREATURE Warm Winter Wear Acrylic Woolen Muffler/Scarf For Men & Women Warm lightweight Scarf",
    description: `Care Instructions: Hand Wash Only\n
    Care Instructions: Machine Wash; Material:- 100% Acrylic Wool, Size :- One Size Fits All, Occasion Type:- Casual Wear, Formal Wear, Winter\n Wear, Other Features:- High Quality Stylish Winter Wear Muffler With Modern Pattern Style Design That Keeps Your Neck And Chest Warm.\n
    Soft & Breathable:- This Muffler Is Made Of Acrylic Woolen Fabric. It Is Soft, Skin Friendly Breathable And Comfortable To Touch.\n
    This Muffler Is Perfect For Cold Weather And Will Be A Great Companion For Autumn And Winter Wardrobe.
    `,
    count: 60,
    price: 298,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/plaid3_1.jpg" },
      { path: "/images/products/menClothing/plaid3_2.jpg" },
      { path: "/images/products/menClothing/plaid3_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "red" },
      { key: "Material", value: "Acrylic" },
      { key: "Pattern", value: "Plaid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "GODFREY Men V-Neck Woolen Sleeveless Half Sweater for Winter",
    description: `Material: Blended Wollen Yarn. Hand Feel: Thin, Soft & warm.\n
    Fit Type: Regular Smart Fit. Occasion: Office Wear/ Formal / Casual /Outdoor. Pattern Type: Geometric Design.\n
    Care Instructions: Gentle Machine Wash.\n
    Sleeve Type: Sleeveless The sweater is made form high quality woolen fabric that is made to sustain longer.\n
    Comfort & Style : Best Fashionably Comfortable that you have wore till now, Fabric is so soft & Warm over the skin.\n
    `,
    count: 60,
    price: 1499,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/plaid4_1.jpg" },
      { path: "/images/products/menClothing/plaid4_2.jpg" },
      { path: "/images/products/menClothing/plaid4_3.jpg" },
    ],
    attrs: [
      { key: "Material", value: "Wool" },
      { key: "Pattern", value: "Plaid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "SNITCH Flecks Blue Polka Dot Slim Fit Shirt",
    description: `Material : Rayon\n
    Fit Type : Slim Fit\n
    `,
    count: 60,
    price: 899,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/dot1_1.jpg" },
      { path: "/images/products/menClothing/dot1_2.jpg" },
      { path: "/images/products/menClothing/dot1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Polka dots" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "ClosetStuck Mens Pure Cotton Printed Straight Kurta, Regular Short Kurta with Polka Dot Prints, Fullslevee and Mandarian Collar, Casual Stitched Kurta Shirts for Men",
    description: `Fit Type: Regular fit available in Sizes (M, L, XL, XXL)\n\n
    Fabric: Cotton Blend, Highly-graded soft Cotton Fabric, Pattern- Polka Dots, colored- Green Kurta (Top)\n\n
    About the product: Beautifully crafted in Pure cotton fabric, it comes in a comfortable regular fit, Stylish regular-fit classic short kurta shirt, easy fitting on chest and tapered through waist to give it a tailored look.\n\n
    Features: Mandarin collar and long sleeve, casual style button-down shirt. Age Range Description-Adult, Item Length Description-Waist Length.\n\n
    Occasion: Casual wear, Regular Wear, Evening Wear, Party wear, you can match it with any clothing Jackets, blazer, pajama, chino pants, jeans or shorts which will make you look stylish and attractive. It’s also a Good Gifting option on Birthday, Anniversary or any other occasions.\n
    `,
    count: 60,
    price: 548,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/dot2_1.jpg" },
      { path: "/images/products/menClothing/dot2_2.jpg" },
      { path: "/images/products/menClothing/dot2_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "green" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Polka dots" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "AXLON Polka Dotted Tie For Men – Formal Ties Set With Pocket Square, Cufflink & Tie Clip With Gift Box For Mens, Silk Fabric Neckties Gift Sets For Men’s (PK4)",
    description: `HIGH QUALITY MATERIAL- Our luxurious woven microfibre ties are the perfect way to upgrade your look! Crafted with exquisite attention to detail, each tie is made with beautiful stitching and thread, soft and rich in colour. And with high quality control standards, you can trust that these ties will last through any occasion. Upgrade your wardrobe today with our luxury ties!\n\n
    SUPERIOR QUALITY MATERIAL- Our luxurious woven microfibre ties are the perfect way to upgrade your look! Crafted with exquisite attention to detail, each tie is made with beautiful stitching and thread, soft and rich in colour. And with high quality control standards, you can trust that these ties will last through any occasion. Upgrade your wardrobe today with our luxury ties!\n\n
    PERFECT GIFT - Our tie sets are the perfect combination of sophistication and style. Crafted by international designers, these timeless ties feature a subtle and simple pattern that can be dressed up or down for any occasion. Whether you're headed to a nice dinner or just to the office, our tie sets will keep you looking sharp without sacrificing comfort. Get the best of both worlds with our high-quality, stylish ties today!\n\n
    VALUE FOR MONEY - Our necktie set pack offers the perfect combination of 3 accessories, including pocket squares, tie and tie clip pin. And unlike other brands, our set comes with matching pieces that will help you create a cohesive look. So if you're looking for an affordable and stylish way to dress up your look, our necktie set pack is the perfect choice!\n\n
    SATISFACTION GURANTEE - Look no further than Axlon Brand! We are committed to providing you with the ultimate positive buying experience. If you're ever unsatisfied with our product return it & we will make it right.\n\n
    `,
    count: 60,
    price: 755,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/dot3_1.jpg" },
      { path: "/images/products/menClothing/dot3_2.jpg" },
      { path: "/images/products/menClothing/dot3_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Silk" },
      { key: "Pattern", value: "Polka dots" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Arrow Men Shirt",
    description: `Pure Cotton\n
    Twill Weave Fabric\n
    Full Sleeve\n
    Semi Cut Away Collar\n
    `,
    count: 60,
    price: 1333,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/dot4_1.jpg" },
      { path: "/images/products/menClothing/dot4_2.jpg" },
      { path: "/images/products/menClothing/dot4_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Polka dots" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Nivia Ray_13 Polo T_Shirt for Men",
    description: `Knitted Collar\n
    Polo Neck\n
    Micro Dotted Jacquard Polyester\n
    Half Sleeve\n
    Regular Fit\n
    Care Instructions : hand Wash\n
    In Box Content : 1Pc\n
    `,
    count: 60,
    price: 630,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/dot5_1.jpg" },
      { path: "/images/products/menClothing/dot5_2.jpg" },
      { path: "/images/products/menClothing/dot5_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Polka dots" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "BLACKSMITH Polka Dot Pocket Square for Men",
    description: `Blacksmith Black Polka Dot Pocket Square for Men Wedding Marriage Groom Accessories For Blazer And Suit\n\n
    These Pocket square for men can be used with most Modi Jackets or Blazers and is best suited if matched with a Blacksmith Tie , Dry Clean to keep the product Fresh and Crisp\n\n
    Polka Dot Woven Pocket Square - Suitable for Office , Evening Functions and Casual Wear 11 x 11 inches in Size\n\n
    Comes in an Exclusive Blacksmith Khaki Box\n\n
    Care : Dry Clean Only\n\n
    `,
    count: 60,
    price: 399,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/dot6_1.jpg" },
      { path: "/images/products/menClothing/dot6_2.jpg" },
      { path: "/images/products/menClothing/dot6_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Silk" },
      { key: "Pattern", value: "Polka dots" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "SIRIL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "AUSK T-Shirt for Mens Double Stripes on Chest",
    description: `Fit Type: Regular Fit\n
    Wash Care: Machine Wash/ Hand Wash\n
    Fabric Type: 60% Cotton And 40% Polyester\n
    Pattern name: Solid; Sleeve Type: Half Sleeve\n
    Neck Style : Round Neck\n
    `,
    count: 60,
    price: 215,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/stripe1_1.jpg" },
      { path: "/images/products/menClothing/stripe1_2.jpg" },
      { path: "/images/products/menClothing/stripe1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "green" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "AUSK T-Shirt for Mens Double Stripes on Chest",
    description: `Fit Type: Regular Fit\n
    Wash Care: Machine Wash/ Hand Wash\n
    Fabric Type: 60% Cotton And 40% Polyester\n
    Pattern name: Solid; Sleeve Type: Half Sleeve\n
    Neck Style : Round Neck\n
    `,
    count: 60,
    price: 215,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/stripe2_1.jpg" },
      { path: "/images/products/menClothing/stripe2_2.jpg" },
      { path: "/images/products/menClothing/stripe2_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "grey" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "SIRIL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "AUSK T-Shirt for Mens Double Stripes on Chest",
    description: `Fit Type: Regular Fit\n
    Wash Care: Machine Wash/ Hand Wash\n
    Fabric Type: 60% Cotton And 40% Polyester\n
    Pattern name: Solid; Sleeve Type: Half Sleeve\n
    Neck Style : Round Neck\n
    `,
    count: 60,
    price: 215,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/stripe3_1.jpg" },
      { path: "/images/products/menClothing/stripe3_2.jpg" },
    ],
    attrs: [
      { key: "color", value: "pink" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "SIRIL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "AUSK T-Shirt for Mens Double Stripes on Chest",
    description: `Fit Type: Regular Fit\n
    Wash Care: Machine Wash/ Hand Wash\n
    Fabric Type: 60% Cotton And 40% Polyester\n
    Pattern name: Solid; Sleeve Type: Half Sleeve\n
    Neck Style : Round Neck\n
    `,
    count: 60,
    price: 215,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/stripe4_1.jpg" },
      { path: "/images/products/menClothing/stripe4_2.jpg" },
      { path: "/images/products/menClothing/stripe4_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "white" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "SIRIL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "AUSK T-Shirt for Mens Double Stripes on Chest",
    description: `Fit Type: Regular Fit\n
    Wash Care: Machine Wash/ Hand Wash\n
    Fabric Type: 60% Cotton And 40% Polyester\n
    Pattern name: Solid; Sleeve Type: Half Sleeve\n
    Neck Style : Round Neck\n
    `,
    count: 60,
    price: 215,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/stripe5_1.jpg" },
      { path: "/images/products/menClothing/stripe5_2.jpg" },
      { path: "/images/products/menClothing/stripe5_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "yellow" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "SIRIL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "IndoPrimo Men's Classic Fit Cotton Casual Striped Shirt for Men Full Sleeves - Strip Cooper",
    description: `Soft Touch Premium PolyCotton Fabrics: Good capability of tenderness, air permeability and moisture absorption feels soft and comfy\n
    Closure :- Button , Sleeve Type :- Full Sleeve , Occasion :- Casual\n
    Regular Fit , Fabric: Soft Touch Premium PolyCotton , Full Sleeve ,Casual Shirts\n
    High Qluality Fabric And Stitching Show As Same Of Images Products\n
    About the Brand IndoPrimo : Finding Basic Menswear for daily use can be hard among today’s Fast fashion world, where trends change daily. \nThat’s why we started IndoPrimo to create a one stop shop for premium essential clothing for everyday use at lowest prices IndoPrimo Have Own manufacturing Unit And Bigger Professional Cutting Person And Making Person And Send Shirt After All QC.\n
    `,
    count: 60,
    price: 474,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/stripe6_1.jpg" },
      { path: "/images/products/menClothing/stripe6_2.jpg" },
      { path: "/images/products/menClothing/stripe6_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "IndoPrimo Men's Classic Fit Cotton Casual Striped Shirt for Men Full Sleeves - Strip Cooper",
    description: `Soft Touch Premium PolyCotton Fabrics: Good capability of tenderness, air permeability and moisture absorption feels soft and comfy\n
    Closure :- Button , Sleeve Type :- Full Sleeve , Occasion :- Casual\n
    Regular Fit , Fabric: Soft Touch Premium PolyCotton , Full Sleeve ,Casual Shirts\n
    High Qluality Fabric And Stitching Show As Same Of Images Products\n
    About the Brand IndoPrimo : Finding Basic Menswear for daily use can be hard among today’s Fast fashion world, where trends change daily. \nThat’s why we started IndoPrimo to create a one stop shop for premium essential clothing for everyday use at lowest prices IndoPrimo Have Own manufacturing Unit And Bigger Professional Cutting Person And Making Person And Send Shirt After All QC.\n
    `,
    count: 60,
    price: 499,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/stripe7_1.jpg" },
      { path: "/images/products/menClothing/stripe7_2.jpg" },
      { path: "/images/products/menClothing/stripe7_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "pink" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "U-TURN Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Striped Shirt",
    description: `Slim Fit, Full Sleeves, Premium, extremely soft finish and Rich look\n
    Pattern: Printed Stripes\n
    Collar Type: Spread\n
    PLEASE REFER THE SIZE CHART IMAGE BEFORE ORDER.\n
    `,
    count: 60,
    price: 499,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/stripe8_1.jpg" },
      { path: "/images/products/menClothing/stripe8_2.jpg" },
      { path: "/images/products/menClothing/stripe8_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "orange" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Jockey 8820 Men's Super Combed Cotton Round Neck Sleeveless Vest with Extended Length for Easy Tuck (Pack of 3)",
    description: `Style Number - 8820\n
    Modern Fit\n
    Contoured armhole\n
    Deep round neck styling\n
    Extended length to ease 'tucking in'\n
    Double reinforced shoulder strap seams\n
    `,
    count: 60,
    price: 593,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/solid1_1.jpg" },
      { path: "/images/products/menClothing/solid1_2.jpg" },
      { path: "/images/products/menClothing/solid1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "white" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Adidas Men Ankle Length Cotton Socks Multicolored Pack of 3",
    description: `Flat Knit Ankle SockS\n
    Material Composition66.4% Cotton, 15% Polyester, 16.6% Nylon, 2% Elastane\n
    Outer Material - Cotton\n
    LengthAnkle - Length\n
    Care Instructions: Wash at or below 40 deg C/Do not bleach/Do not tumble dry/Do not iron/Do not dry clean\n
    Country of Origin: India\n
    `,
    count: 60,
    price: 395,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/solid2_1.jpg" },
      { path: "/images/products/menClothing/solid2_2.jpg" },
      { path: "/images/products/menClothing/solid2_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "white" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Allen Solly Men's Cotton Crew Neck Sweatshirt",
    description: `Brand : Allen Solly
    Fit: Regular\n
    Collar Type : Crew Neck\n
    Pattern : Solid\n
    Number of pockets : 2\n
    `,
    count: 60,
    price: 749,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/solid3_1.jpg" },
      { path: "/images/products/menClothing/solid3_2.jpg" },
      { path: "/images/products/menClothing/solid3_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "maroon" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Allen Solly Men's Cotton Crew Neck Sweatshirt",
    description: `Brand : Allen Solly
    Fit: Regular\n
    Collar Type : Crew Neck\n
    Pattern : Solid\n
    Number of pockets : 2\n
    `,
    count: 60,
    price: 749,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/solid4_1.jpg" },
      { path: "/images/products/menClothing/solid4_2.jpg" },
      { path: "/images/products/menClothing/solid4_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "orange" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Allen Solly Men's Cotton Crew Neck Sweatshirt",
    description: `Brand : Allen Solly
    Fit: Regular\n
    Collar Type : Crew Neck\n
    Pattern : Solid\n
    Number of pockets : 2\n
    `,
    count: 60,
    price: 749,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/solid5_1.jpg" },
      { path: "/images/products/menClothing/solid5_2.jpg" },
      { path: "/images/products/menClothing/solid5_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "yellow" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Allen Solly Men's Cotton Crew Neck Sweatshirt",
    description: `Brand : Allen Solly
    Fit: Regular\n
    Collar Type : Crew Neck\n
    Pattern : Solid\n
    Number of pockets : 2\n
    `,
    count: 60,
    price: 749,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/solid6_1.jpg" },
      { path: "/images/products/menClothing/solid6_2.jpg" },
      { path: "/images/products/menClothing/solid6_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "green" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Boldfit Head Caps for Men Unisex Mens Caps with Adjustable Strap in Summer for Men Caps Men for All Sports Cap For Girls caps Gym Caps for Men Women Cap Sports Caps for Men with Airholes - Black",
    description: `HELP PROTECT SUNBURN : These men caps should be added in your shopping cart, As it has many benefits : It helps you protect your skin from UV rays which indirectly helps you protect from sun burns. Great product to add for your daily use and other daily activities. These men cap might helps you with sweat free and can keep your head dry and comfortable.\n\n
    FOR ALL ACTIVITIES: Wearing this cricket cap for men while being exposed to the sun can help you from getting a sunburn and other daily activities such as running, jogging, walking or any other outdoor activities. Our sports cap are easy to carry can be take with you everywhere and will not occupy too much space. This cap can dry out fast after washing. Be sure to grab your cap before you head out.\n\n
    UNIQUE STYLE - The sports cap for men and women allows you to express unique style. We have designed a trendy look, comfort-fit and logo to help you show up and show off with style. Great for outdoor wear, matching outfits, enjoying sports, and simply living life on the go. These caps also help elevate your style and make it more stylish.\n\n
    SUPERCOOL FABRIC - This cap is made of Super comfortable polycotton blend mesh with soft, breathable, lightweight and quick dry, suitable for: Outdoor, fishing, hiking, traveling, mountaineering, camping, running, daily life and so on caps for men and women which can be used.
    ONE SIZE FITS MOST - In every outfit or attire, fit is always a part of comfort. That’s why we’ve designed this snapback hat with an adjustable closure so it’s snug whenever you wear it. These caps can be used by men & women, for gifting purpose, gyming, outdoor activities, parties etc.\n
    `,
    count: 60,
    price: 499,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/solid7_1.jpg" },
      { path: "/images/products/menClothing/solid7_2.jpg" },
      { path: "/images/products/menClothing/solid7_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Boldfit Head Caps for Men Unisex Mens Caps with Adjustable Strap in Summer for Men Caps Men for All Sports Cap For Girls caps Gym Caps for Men Women Cap Sports Caps for Men with Airholes - Black",
    description: `HELP PROTECT SUNBURN : These men caps should be added in your shopping cart, As it has many benefits : It helps you protect your skin from UV rays which indirectly helps you protect from sun burns. Great product to add for your daily use and other daily activities. These men cap might helps you with sweat free and can keep your head dry and comfortable.\n\n
    FOR ALL ACTIVITIES: Wearing this cricket cap for men while being exposed to the sun can help you from getting a sunburn and other daily activities such as running, jogging, walking or any other outdoor activities. Our sports cap are easy to carry can be take with you everywhere and will not occupy too much space. This cap can dry out fast after washing. Be sure to grab your cap before you head out.\n\n
    UNIQUE STYLE - The sports cap for men and women allows you to express unique style. We have designed a trendy look, comfort-fit and logo to help you show up and show off with style. Great for outdoor wear, matching outfits, enjoying sports, and simply living life on the go. These caps also help elevate your style and make it more stylish.\n\n
    SUPERCOOL FABRIC - This cap is made of Super comfortable polycotton blend mesh with soft, breathable, lightweight and quick dry, suitable for: Outdoor, fishing, hiking, traveling, mountaineering, camping, running, daily life and so on caps for men and women which can be used.
    ONE SIZE FITS MOST - In every outfit or attire, fit is always a part of comfort. That’s why we’ve designed this snapback hat with an adjustable closure so it’s snug whenever you wear it. These caps can be used by men & women, for gifting purpose, gyming, outdoor activities, parties etc.\n
    `,
    count: 60,
    price: 499,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/solid8_1.jpg" },
      { path: "/images/products/menClothing/solid8_2.jpg" },
      { path: "/images/products/menClothing/solid8_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "VRP Telematics" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Labnoft Men's Auto Lock PU Leather Belt",
    description: `No More Holes: Introducing a unique sliding mechanism. No pushing. No pulling. Just slide the belt into the buckle and adjust for a superbly comfortable fit. This buckle simply auto-locks the belt. To release, just gently push the lever and remove the strap.\n
    Stylish: Labnoft branded auto lock belt for men will add a stylish look to your jeans, chinos and trousers. Ideal for any formal and casual occasion. A perfect gift for your loved ones\n
    Adjustable: One big size that fits all waist (28, 30, 32, 34, 36, 38, 40, 42, 44). Trim the belt according to your size by removing the buckle and cutting the edges as per your waist by removing the buckle and trimming the strap edge.\n
    Vegan Material: Made from full grain vegan synthetic leather (Pu-Leather). Complemented with a classic scratch resistant alloy buckle that is elegantly designed with class.\n
    Adjustable up to waist 44, Strap Color: Black\n
    `,
    count: 60,
    price: 749,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/solid9_1.jpg" },
      { path: "/images/products/menClothing/solid9_2.jpg" },
      { path: "/images/products/menClothing/solid9_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Leather" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Labnoft Men's Auto Lock PU Leather Belt",
    description: `No More Holes: Introducing a unique sliding mechanism. No pushing. No pulling. Just slide the belt into the buckle and adjust for a superbly comfortable fit. This buckle simply auto-locks the belt. To release, just gently push the lever and remove the strap.\n
    Stylish: Labnoft branded auto lock belt for men will add a stylish look to your jeans, chinos and trousers. Ideal for any formal and casual occasion. A perfect gift for your loved ones\n
    Adjustable: One big size that fits all waist (28, 30, 32, 34, 36, 38, 40, 42, 44). Trim the belt according to your size by removing the buckle and cutting the edges as per your waist by removing the buckle and trimming the strap edge.\n
    Vegan Material: Made from full grain vegan synthetic leather (Pu-Leather). Complemented with a classic scratch resistant alloy buckle that is elegantly designed with class.\n
    Adjustable up to waist 44, Strap Color: Black\n
    `,
    count: 60,
    price: 749,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/solid10_1.jpg" },
      { path: "/images/products/menClothing/solid10_2.jpg" },
      { path: "/images/products/menClothing/solid10_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "brown" },
      { key: "Material", value: "Leather" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "F GALLERY Stylish Printed Fleece Sweatshirts for Men",
    description: `Fabric: Spun Fleece; Pattern: Printed ; Sleeves Type: Full Sleeves\n
    Neck Style: Round and Hooded Neck Style ; Fit Type: Regular Fit Sweatshirts\n
    Closure Type: Pull On ; Feature: Designer Printed Sweatshirts for Men\n
    Note: Color slightly may differ from the color shown in image due to photographic light effect or differences in screen display resolutions. MADE IN INDIA.\n
    Age Range Description: Adult; Size Name: Xl; Department Name: Unisex-Adult; Pattern Type: Colorblock; Sleeve Type: Long Sleeve\n
    `,
    count: 60,
    price: 474,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/fleece1_1.jpg" },
      { path: "/images/products/menClothing/fleece1_2.jpg" },
      { path: "/images/products/menClothing/fleece1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "maroon" },
      { key: "Material", value: "Fleece" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "F GALLERY Stylish Printed Fleece Sweatshirts for Men",
    description: `Fabric: Spun Fleece; Pattern: Printed ; Sleeves Type: Full Sleeves\n
    Neck Style: Round and Hooded Neck Style ; Fit Type: Regular Fit Sweatshirts\n
    Closure Type: Pull On ; Feature: Designer Printed Sweatshirts for Men\n
    Note: Color slightly may differ from the color shown in image due to photographic light effect or differences in screen display resolutions. MADE IN INDIA.\n
    Age Range Description: Adult; Size Name: Xl; Department Name: Unisex-Adult; Pattern Type: Colorblock; Sleeve Type: Long Sleeve\n
    `,
    count: 60,
    price: 474,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/fleece2_1.jpg" },
      { path: "/images/products/menClothing/fleece2_2.jpg" },
      { path: "/images/products/menClothing/fleece1_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "grey" },
      { key: "Material", value: "Fleece" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Magic Unisex Fleece Thick Warm Full Cover Balaclava Face Mask/Winter Cap/Monkey Cap (Black)-(Pack of 01)",
    description: `Necessary accessory for cold weather: the warm neck warmer can be adjusted to half face or full face covering, it is windproof and can be worn as motorcycle balaclava as well, functional face covering scarf for cold weather; At the same time, the full balaclava hood style ski face covering can be worn as a full face ski covering or hat, balaclava, scarf, neck gaiter or neck warmer to stay you warm in cold weather.\n\n
    Washable and adjustable: it measures approx. 38 x 30 cm/ 14.96 x 12 inches, one size fits most people to wear; It's easy to tighten or loosen to get suitable wearing effect according to your needs, nice tool to stay you warm and dry; It is made of skin-friendly material with windproof fabric and fleece, which is durable, breathable, wear-resistant, you can wear them for a long time.\n\n
    What you receive: you will receive 6 pieces of reusable neck warmers in 6 distinctive colors, which can meet your different matching needs, you can wear different color according to your clothing style or different mood, which will make you look fashionable and cool; It can also be applied as a birthday gift for your sisters, brothers, best friends, mom, father, auntie, uncle or other family members, which can show your love and care.\n\n
    Nice protection: our practical neck scarf is not easy to fade and close to skin, so that you don't need to worry about the cold weather anymore, the neck is extra long, which allows you to tuck it underneath your jacket, protects you from cold, wind, UV rays, brings more convenience for your daily life.\n\n
    Wide application: this cool balaclava is suitable for skiing, motorcycling, running, biking, trekking, mountain climbing, snowboarding, hunting, training, cycling, ice fishing, hiking, camping, walking dogs or just for daily wearing in cold weather or other outdoor activities, allowing you to enjoy your outdoor time fully.\n
    `,
    count: 60,
    price: 275,
    category: "Men's Clothing",
    sales: 55,
    images: [
      { path: "/images/products/menClothing/fleece3_1.jpg" },
      { path: "/images/products/menClothing/fleece3_2.jpg" },
      { path: "/images/products/menClothing/fleece3_3.jpg" },
    ],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Fleece" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "RC. ROYAL CLASS" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
    rating: 5,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Cetaphil Brightness Reveal Creamy Cleanser - 100 g| Brightening Face Wash for Uneven Skin Tone| Niacinamide, Sea Daffodil| Fragrance Free| Dermatologist Recommended",
    description: `
        WASHES AWAY DULLNESS: Creamy Cleanser that washes away dullness, and impurities to reveal radiant, luminous skin\n
        COMFORTING, CREAMY TEXTURE: Transforms into a comforting cocooning lather that leaves skin feeling soft and smooth\n
        CLEANSES AND ILLUMINATES: Cleanses and purifies your skin to prepare it for toning and moisturizing\n
        NON-GREASY, HYPOALLERGENIC AND FRAGRANCE-FREE: Gentle formula with Niacinamide and Sea Daffodil extract that rinses easily without leaving skin feeling greasy or sticky\n
        DERMATOLOGIST DEVELOPED, FOR EVEN THE MOST SENSITIVE SKIN: Clinically proven to respect sensitive skin as it gradually and gently works to restore even, luminous skin tone\n
      `,
    count: 89,
    price: 560,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/ceta1_1.jpg" },
      { path: "/images/products/beauty/ceta1_2.jpg" },
      { path: "/images/products/beauty/ceta1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Cetaphil" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Cetaphil Moisturizing Cream, 250 g",
    description: `
      Provides 24-hour hydration that instantly hydrates for long-lasting relief that soothes very dry skin\n
      This non-greasy cream is excellent for hands, feet, elbows, knees, and any other areas that require intensive moisturization\n
      Clinically proven to nourish dry skin in 1-day, binding water to the skin and preventing moisture loss for soft, supple skin\n
      `,
    count: 89,
    price: 1136,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/ceta2_1.jpg" },
      { path: "/images/products/beauty/ceta2_2.jpg" },
      { path: "/images/products/beauty/ceta2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Cetaphil" },
      { key: "Seller", value: "NumBrave" },
    ],
  },
  {
    name: "Cetaphil Face Wash Gentle Skin Cleanser for Dry to Normal, Sensitive Skin, 125 ml Hydrating Face Wash with Niacinamide, Vitamin B5",
    description: `
    IDEAL FOR DRY TO NORMAL SENSITIVE SKIN: Non-Comedogenic, Hypoallergenic formula free from Parabens, Sulphates, Fragrances & Oils\n
    GENTLE SKIN CLEANSER: Formulated with Micellar Technology that gently yet effectively removes dirt, makeup and impurities. PROTECTS AGAINST \nDRYNESS: Clinically proven to provide continuous hydration leaving the skin hydrated after cleansing\n
    DERMATOLOGIST RECOMMENDED: Blend of Niacinamide, Vitamin B5 and Hydrating Glycerin to reinforce skin’s natural moisture barrier even after repeat washes\n
    DEFENDS AGAINST 5 SIGNS OF SKIN SENSITIVITY: Defends against dryness, irritation, roughness, tightness and a weakened skin barrier
    Target Audience Keywords: Unisex Adult\n
    IDEAL FOR DRY TO NORMANon-Comedogenic, Hypoallergenic formula free from Parabens, Sulphates, Fragrances & Oils\n
    GENTFormulated with Micellar Technology that gently yet effectively removes dirt, makeup and impurities. PROTECTSClinically proven to provide continuous hydration leaving the skin hydrated after cleansing\n
      `,
    count: 89,
    price: 398,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/ceta3_1.jpg" },
      { path: "/images/products/beauty/ceta3_2.jpg" },
      { path: "/images/products/beauty/ceta3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Cetaphil" },
      { key: "Seller", value: "NumBrave" },
    ],
  },
  {
    name: "Cetaphil Sun SPF 50 Very High Protection Light Gel, White, 50 ml",
    description: `
    Very high protection with SPF 50+ against UVB, UVA & IR both indoors and outdoors
Gel based, absorbs quickly and non sticky\n
Nourishing with vitamin e\n
Ingredients: Ethylhexyl Methoxycinnamate, Bis-Ethylhexyloxyphenol, Methoxyphenyl Triazine, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Ethylhexyl Triazone, Methylene-Bis-Benzotriazolyl, Tetramethylbutylphenol.; TarUnisex Adult\n
      `,
    count: 89,
    price: 918,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/ceta4_1.jpg" },
      { path: "/images/products/beauty/ceta4_2.jpg" },
      { path: "/images/products/beauty/ceta4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Cetaphil" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "NIVEA Nourishing Body Milk 600ml Body Lotion | 48 H Moisturization | With 2X Almond Oil | Smooth and Healthy Looking Skin |For Very Dry Skin",
    description: `
    Nivea body lotion, nourishing body milk, for very dry skin.\n
Lasting moisturisation : The deep moisture serum formula gives you moisturized skin for up to 48 hours.\n
Reduces roughness of skin.; The nourishing almond oil repairs very dry skin.\n
Skin compatibility dermatologically approved.\n
Target Gender: Unisex
      `,
    count: 89,
    price: 375,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/nivea1_1.jpg" },
      { path: "/images/products/beauty/nivea1_2.jpg" },
      { path: "/images/products/beauty/nivea1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nivea" },
      { key: "Seller", value: "BGorgeous" },
    ],
  },
  {
    name: "NIVEA Soft Light Moisturizer, 300 ml, for Face, Hand & Body, Non-Greasy Cream with Vitamin E & Jojoba Oil for Instant Hydration",
    description: `
    Is it the right product for me? If you are looking for a non-greasy, light moisturizer for daily use which gives you instant soft & fresh skin feel. Nivea soft cream is the right moisturizer for you.\n
    The light texture, fast absorption and intensive moisturization makes it suitable for all season.; Usage: This is a combined moisturizer for face, hands and body. It can spread smoothly over large areas providing a refreshing feel. The cream can be applied during the day as well as night.\n
    What makes NIVEA Soft so good? Jojoba oil and Vitamin E nourish your skin, delivering long lasting well- cared for skin feeling, without the greasy feeling.\n
    Can I trust it? The cream is dermatologically tested and approved, providing quality skincare to all.\n
    Target Gender: Female\n
      `,
    count: 89,
    price: 325,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/nivea2_1.jpg" },
      { path: "/images/products/beauty/nivea2_2.jpg" },
      { path: "/images/products/beauty/nivea2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nivea" },
      { key: "Seller", value: "BGorgeous" },
    ],
  },
  {
    name: "NIVEA MEN Deep Impact Freshness Deodorant Roll-on - For MEN, 50ml",
    description: `
    Get the NIVEA Deep Impact Roll-on and kick off the day with new-found confidence. The effective Antibacterial Formula, that comes infused with Black Carbon, fights bacteria and gives you long-lasting freshness. Its Alcohol-free Formula is proven to be dermatologically safe for you to use.\n
    Infused with Black Carbon, this roll-on keeps you fresh throughout the day.\n
    The woody masculine fragrance lingers on your skin all day long.\n
    The formula incorporated effectively fights bacteria and tackles body odour.\n
    It contains no alcohol, and does not cause irritation to your sensitive areas, such as underarms.\n
      `,
    count: 89,
    price: 144,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/nivea3_1.jpg" },
      { path: "/images/products/beauty/nivea3_2.jpg" },
      { path: "/images/products/beauty/nivea3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nivea" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Nivea Lip Balm, BlackBerry Shine, 24h Moisture , 4.8g",
    description: `
    Provides moisturization with a hint of colour\n
    Shimmery pigments for a beautiful, subtle shine\n
    Natural oils give you soft lips for 24 hours\n
    Melt in moisture formula ensures smooth application\n
    Open the cap to twist up the stick and apply to get moisturized smooth lips with a touch of colour\n
      `,
    count: 89,
    price: 125,
    category: "Beauty",
    sales: 76,
    images: [{ path: "/images/products/beauty/nivea4.jpg" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nivea" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "NIVEA MEN Dark Spot Reduction Face Wash 100 g | With Ginko and Ginseng Extracts for Clean, Healthy & Clear Skin in Summer | 10 X Vitamin C Effect for Radiant Skin |For Dark Spot Reduction",
    description: `
    The mild formula effectively reduces dark spots for healthy looking skin\n
    It makes your skin look healthier and fresher\n
    Skin compatibility dermatologically approved\n
      `,
    count: 89,
    price: 175,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/nivea5_1.jpg" },
      { path: "/images/products/beauty/nivea5_2.jpg" },
      { path: "/images/products/beauty/nivea5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nivea" },
      { key: "Seller", value: "BGorgeous" },
    ],
  },
  {
    name: "NIVEA Fresh Power Fruit 250ml Body Wash| Shower Gel with Real Fruit Extracts| Pure Glycerin for Instant Soft & Summer Fresh Skin|Microplastic Free |Clean, Healthy & Moisturized Skin",
    description: `
    Leaves skin feeling soft and moisturized\n
    Leaves your skin feeling fresh and cared for\n
    Contains care oil pearls for soft and supple skin\n
    Vibrant scent of blueberry stimulates senses\n
    Gentle and effective cleansing\n
      `,
    count: 89,
    price: 125,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/nivea6_1.jpg" },
      { path: "/images/products/beauty/nivea6_2.jpg" },
      { path: "/images/products/beauty/nivea6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nivea" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "Maybelline New York Colossal Kajal, Intense Colour, Waterproof, Long lasting 24Hrs Stay, Black, 0.35g",
    description: `
    Deep, dark intense black colour with sharp definition, Long lasting smudge proof and waterproof formula\n
    For eyes that look fresh all day long\n
    Mascara: Place the brush at the base of your lashes and slightly twist upward to cover all the lashes and coat them. Eyeliner and kajal: Draw \nthin or thick lines by varying the pressure and angling of the brush.\n
    Infused with aloe vera for its caring and soothing properties, Vitamin C and Vitamin E\n
    Contents: 1x Maybelline New York Colossal Kajal, Intense Colour, Waterproof, Long lasting 24Hrs Stay, Shade: Black, 0.35g\n
      `,
    count: 89,
    price: 171,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/may1_1.jpg" },
      { path: "/images/products/beauty/may1_2.jpg" },
      { path: "/images/products/beauty/may1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Maybelline" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "Maybelline New York Fit Me Matte + Poreless Compact Powder, 16H Oil Control with SPF 32, Matte Finish, 128 Warm Nude, 6g",
    description: `
    IMPROVED BREATHABLE FORMULA – The new Maybelline New York Compact Powder has a non-heavy, breathable formula, is easily spreadable, and does not look cakey on your skin.\n
UPTO 16 HOURS OIL CONTROL – The Maybelline Fit Me Matte + Poreless Compact Powder provides oil control for up to 16 hours without clogging pores, which makes it suitable for daily use.\n
SUN PROTECTION WITH SPF 32 – The Maybelline FIT ME Compact Powder has SPF 32 PA+++ and organic UV filters that protect your skin from sun damage.\n
SOFT FOCUS EFFECT – This is an ideal compact powder for women as it provides a matte finish and has a soft-focus effect on the skin, making it look flawless.\n
AVAILABLE IN 6 SHADES – You can find your perfect match as the FIT ME compact is available in a range of 6 shades to fit Indian skin tones\n
      `,
    count: 89,
    price: 259,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/may2_1.jpg" },
      { path: "/images/products/beauty/may2_2.jpg" },
      { path: "/images/products/beauty/may2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Maybelline" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "Maybelline New York The Colossal Bold Eyeliner, The Archies Limited Edition, Black, 3ml",
    description: `
    Highly pigmented waterproof eye liner, Ideal for defined lines and a range of looks, Perfect for daily use.\n
    Create different looks - winged, butterfly or simple swipe.\n
    From the inner corner of each eye , draw a neat stroke along your upper lash line. Extend a little beyond the outer corner of each eye.\n
    Bold, intense formula, Smudge proof and waterproof, Long-lasting.\n
    Contents: 1x Maybelline New York Colossal Bold Eyeliner, Smudge proof and waterproof, Long-lasting, Black, 3g.\n
      `,
    count: 89,
    price: 183,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/may3_1.jpg" },
      { path: "/images/products/beauty/may3_2.jpg" },
      { path: "/images/products/beauty/may3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Maybelline" },
      { key: "Seller", value: "KiranaMarket" },
    ],
  },
  {
    name: "Maybelline New York Mascara, Curls Lashes, Highly Pigmented Colour, Long-lasting, Waterproof, Hypercurl , Black, 9.2ml",
    description: `
    Easy to use mascara provides curled and volumized lashes, Everyday wear, For longer looking lashes.\n
    Lashes look 75% more curled, Buildable colour and volume, Wax coats lashes from root to tips.\n
    Start at the base of your lashes with the wand and slowly drag the wand upwards in a zig-zag motion. Do not let mascara dry in between coats.\n
    Special bristles coat every lash from root to tip, Waterproof formula, Unique anti-clump applicator brush separates each lash while curling them.\n
    Contents: 1x Maybelline Hypercurl Mascara, Curls Lashes, Highly Pigmented Colour, Long-lasting, Waterproof, Shade: Black, 9.2ml\n
      `,
    count: 89,
    price: 307,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/may4_1.jpg" },
      { path: "/images/products/beauty/may4_2.jpg" },
      { path: "/images/products/beauty/may4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Maybelline" },
      { key: "Seller", value: "KiranaMarket" },
    ],
  },
  {
    name: "Maybelline New York Liquid Foundation, Matte & Poreless, Full Coverage Blendable Normal to Oily Skin, Fit Me, 128 Warm Nude, 18 ml",
    description: `
    Lightweight matte liquid foundation, Oil Free, Perfect for normal, combination and oily skin.\n
    Natural finish skin looks fresh not cakey or dry.\n
    Simply apply foundation onto skin and blend with fingertips, foundation brush, or makeup sponge.\n
    Flexible Micro-Powders help blur the appearance of pores, Available in several shades, Suitable for all skin tones and shades.\n
    Contents: 1x Maybelline New York Fit Me Foundation, Matte & Poreless, Full Coverage Blendable Normal to Oily Skin, Shade: Warm Nude, 18ml.\n
      `,
    count: 89,
    price: 211,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/may5_1.jpg" },
      { path: "/images/products/beauty/may5_2.jpg" },
      { path: "/images/products/beauty/may5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Maybelline" },
      { key: "Seller", value: "KiranaMarket" },
    ],
  },
  {
    name: "Maybelline New York Matte Lipstick, Intense Colour, Keeps Lips Moisturised, 657 Nude Nuance, Color Sensational Creamy Matte Lipstick, 3.9g",
    description: `
    Velvety, hydrating matte lipstick goes on in one swipe, Offers a smooth, creamy texture that does not dry and leaves lips looking sensuous.\n
    Delivers a bold, intense colour that lasts, Smooth matte finish, Comfortable to wear.\n
    Apply your go-to hue directly to the lips- one swipe should do it!\n
    Infused with Shea Butter that nourishes the lips, Available in a variety of trendy matte lipstick shades.\n
    Contents: 1x Maybelline New York Colour Sensational Creamy Matte Lipstick, Intense Colour, Keeps Lips Moisturised, Shade: 657 Nude Nuance, 3.9g\n
      `,
    count: 89,
    price: 164,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/may6_1.jpg" },
      { path: "/images/products/beauty/may6_2.jpg" },
      { path: "/images/products/beauty/may6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Maybelline" },
      { key: "Seller", value: "KiranaMarket" },
    ],
  },
  {
    name: "Maybelline Liquid Lipstick, High Shine Gloss, Lasts for 16 HRs, Enriched With Vitamin E & Aloe, SuperStay Vinyl Ink, Lippy, High-Glossy",
    description: `
    Long lasting vinyl-effect shine lip colour, Ultra-pigmented ink, Up to 16h colour, Smudge-free wear.\n
    Results: Brilliant colour, Ultra-glossy lips, Comfortable feel.\n
    Application: Shake the product for 5 seconds, Glide with one stroke using the arrow-shaped applicator to deliver a thin layer of formula.\n
    Long-lasting vinyl effect for 16 hours* (Evaluated from 114 women), Ultra-comfortable, Transfer-free, Easy-to-use arrow applicator.\n
    Contents: 1 x Maybelline New York Superstar Vinyl Ink Liquid Lipstick, Shade:Lippy \n
      `,
    count: 89,
    price: 164,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/may7_1.jpg" },
      { path: "/images/products/beauty/may7_2.jpg" },
      { path: "/images/products/beauty/may7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Maybelline" },
      { key: "Seller", value: "SHOPPERS STOP COM" },
    ],
  },
  {
    name: "Maybelline New York Pencil Radiant Concealer, Ultra Blendable, Instant Anti Age Dark Circles and Blemish Eraser (Caramel, 6g)",
    description: `
    Multi-purpose liquid concealer for covering dark circles, Corrects imperfections, Sculpts and illuminates skin, Suitable for concealing wrinkles.\n
    Ultra-targeted correction, Natural finish and long-lasting wear, Dark circles and signs of fatigue disappear in an instant.\n
    Apply the product under the eye area on dark circles and crow's feet. When using first time, turn the neck of the applicator 8 times until the formula appears on the applicator.\n
    Formula enriched with Goji berry and Haloxyl to slow down skin aging, Applicator tip with thousands of soft micro-fibres reaches every imperfection.\n
    Contents: 1x Maybelline New York Instant Anti Age Eraser Eye Concealer, Dark Circles and Blemish Eraser, Ultra Blendable, Shade: Caramel, Volume: 6g \n
      `,
    count: 89,
    price: 459,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/may8_1.jpg" },
      { path: "/images/products/beauty/may8_2.jpg" },
      { path: "/images/products/beauty/may8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Maybelline" },
      { key: "Seller", value: "SHOPPERS STOP COM" },
    ],
  },
  {
    name: "Garnier Skin Naturals, Day Cream, Brightening and with Sun Protection, Bright Complete, 45 g",
    description: `
    Day cream suitable for all skin types, in particular dull skin with dark spots\n
    Moisturises the skin and brightens its tone, Reduces dark spots and acne scars, Protects skin from further damage caused by excessive sunlight\n
    How to use: Cleanse your face using a face wash and serum first, then apply moisturiser evenly over face, Avoid the eye contour\n
    Enriched with a high concentration of Vitamin C to brighten skin as well as UV filters to protect the skin\n
    Contents: 1x Garnier Skin Naturals Bright Complete Serum Cream UV, Weight: 45 g\n
      `,
    count: 89,
    price: 140,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/gar1_1.jpg" },
      { path: "/images/products/beauty/gar1_2.jpg" },
      { path: "/images/products/beauty/gar1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Garnier" },
      { key: "Seller", value: "SHOPPERS STOP COM" },
    ],
  },
  {
    name: "Garnier, Hair Colouring Creme, Long-lasting Colour, Smoothness & Shine, Color Naturals, Shade: 1 Natural Black, 70ml + 60g",
    description: `
    Crème hair colour kit for all hair types.\n
    Gives the hair a rich, vibrant and natural colour that lasts for up to 8 weeks with proper care, Also makes hair feel silky and increases shine.\n
    How To Use: Do a skin allergy test 24 hours before use, Mix hair colorant and developer, Colour using a brush at the roots and gloved hands over lengths, Leave on for 30 minutes, Rinse with water, apply conditioner, and rinse again.\n
    Ammonia-free formula that provides 100% grey coverage, enriched with 3 natural oils which nourish, strengthen and increase shine: Olive, Almond and Avocado.\n
    Contents: 1x Garnier Colour Naturals Creme hair colour, Gloves, colorant, developer & conditioner included, Shade: 1 Natural Black, 70ml + 60g\n
      `,
    count: 89,
    price: 190,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/gar2_1.jpg" },
      { path: "/images/products/beauty/gar2_2.jpg" },
      { path: "/images/products/beauty/gar2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Garnier" },
      { key: "Seller", value: "SHOPPERS STOP COM" },
    ],
  },
  {
    name: "Garnier Skin Naturals, Anti-Ageing Cream, Moisturizing, Forming & Smoothing, Wrinkle Lift, 40 g",
    description: `
    Dermatologically tested Anti Ageing Cream suitable for mature skin of all types.\n
    Helps the skin recover its former vitality by making it firmer plus reducing wrinkles and fine lines.\n
    How to use: Make sure to clean your face before use, Apply Wrinkle Lift evenly over your face and neck and massage into the skin using circular motions.\n
    Enriched with Swiss Apple Cell Extract to help smoothen out the appearance of fine lines and Pro-Retinol which releases Retinol at the core of wrinkles to help reduce even deep wrinkles.\n
    Contents: 1x Garnier Wrinkle Lift Anti-Ageing Cream, Weight: 40 g\n
      `,
    count: 89,
    price: 190,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/gar3_1.jpg" },
      { path: "/images/products/beauty/gar3_2.jpg" },
      { path: "/images/products/beauty/gar3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Garnier" },
      { key: "Seller", value: "SUPER COSMETICS STORE" },
    ],
  },
  {
    name: "Garnier Skin Naturals, Cleansing Water, Hydrating & Soothing, Micellar Cleansing Water, 125 ml",
    description: `
    Cleansing water for light makeup\n
    The formula gently hydrates your skin and removes makeup as well as dirt\n
    How to use: Pour out on a cotton pad and wipe gently across the face, lips and eyes\n
    Gentle formula which is suitable for sensitive skin, enriched with hydrating botanical glycerin\n
    Contents: 1x Garnier Skin Naturals Micellar Cleansing Water, Volume: 125 ml\n
          `,
    count: 89,
    price: 174,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/gar4_1.jpg" },
      { path: "/images/products/beauty/gar4_2.jpg" },
      { path: "/images/products/beauty/gar4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Garnier" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "Garnier Skin Naturals, Face Serum Sheet Mask, Pack of 5 (Light Complete, Sakura, Blue, Green Tea, Charcoal)",
    description: `
    Bright Complete: Face Sheet Mask that helps with dehydrated and dull skin with spots​. Hydrates skin, boosts the skin's overall glow and makes dark spots less apparent. Enriched with lemon and Vitamin C to help give the skin a bright natural glow.\n
    Sakura: Sheet Mask for dull and de-hydrated skin. Hydrates and smoothens the skin while giving it a pinkish glow. Enriched with Japanese sakura blossoms that give the skin a pink, healthy glow.\n
    Green Tea: Sheet mask for all skin types but especially oily skin. Hydrates and purifies the skin, leaving it feeling fresh with a matte finish. Enriched with green tea extract which purifies the skin.\n
    Hydra Bomb Pomegranate: Sheet mask suitable for all types, especially dry and dehydrated skin. Hydrates skin deeply and replenishes moisture, leaving skin feeling fresh. Enriched with pomegranate to hydrate the skin.\n
    Charcoal: Pure Charcoal Sheet Mask that helps with oily skin and enlarged pores. Hydrates and detoxifies the skin, leaving it feeling fresh and with tighter pores. Enriched with pure charcoal known for its ability to absorb dirt and impurities, as well as black algae.\n
    How To Use: Cleanse your face, Unfold the mask and adjust it to the contours of your face, Leave it on for 15 mins, Remove the mask and gently massage your face with the excess serum\n
          `,
    count: 89,
    price: 174,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bio1_1.jpg" },
      { path: "/images/products/beauty/bio1_2.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Garnier" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "Biotique Morning Nectar Flawless Skin Moisturizer l Prevents Dark spots, Blackheads and Blemishes l Visibly Flawless Skin l Nourishes and Hydrates Skin l All Skin Types l 190ml",
    description: `
    Nourishment imbued moisturizer: For a radiant and blazing start to the morning, Biotique Morning Nectar Flawless Skin Moisturizer provides nourishing and hydrating properties. For a visible glow it even prevents dark spots and blemishes.\n
    Benefits to use Morning Nectar Moisturizer: This Biotique Moisturizer works as a powerful component that comes with deep moisturizing properties. \nIt is also designed to improve skin texture and tone it for impeccable-looking skin.\n
    Key Ingredients to swear by:  The Morning Nectar Moisturizer is blended with natural ingredients; Nectar, Wild Turmeric, and Ashwagandha. The infused elements comprise of skin- brightening properties and retain natural moisture.\n
    Organically pure: This Biotique Moisturizing Cream is made with 100% natural botanical extracts and free from harmful chemicals. It is dermatologically tested to suit every skin type. The skin is noticeably brighter with regular use.\n
    Effortless application: Moisturize it all the way for soft and supple skin! Start by applying Morning Nectar Moisturizer evenly on a cleansed face and neck.\n
          `,
    count: 89,
    price: 228,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bio1_1.jpg" },
      { path: "/images/products/beauty/bio1_2.jpg" },
      { path: "/images/products/beauty/bio1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Biotique" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "Biotique Apricot Refreshing Body Wash | Keeps Skin Fresh and Clean | Brightens Skin and Reducing Dark Spots  | 100% Botanical Extracts | Suitable for All Skin Types | 200ml",
    description: `
    What it is: This body wash natural soap free formula keeps your skin fresh and clean naturally, Apricot is a daily gel-based cleaner that effectively removes all microbes and pollutants and keeps skin hydrated and refreshed for longer.\n
    Key Ingredients: Enriched with Apricot's goodness, for natural moisturization and clear skin. This refreshing body wash is infused with soap nut for hydration, prevention of excessive drying and Turmeric for antioxidant properties that brightens skin.\n
    Key benefits: Contains Apricot, turmeric, and soap nut, this body wash gently cleanses, softens, and enhances the body's natural brightness, providing a refreshing bathing experience while maintaining the skin's pH balance.\n
    Made with 100% natural botanical extracts and is free from harmful chemicals. This body wash gel is dermatologically tested to suit every skin type and safe for regular use, ensuring a gentle yet effective skincare experieTo apply this biotique bio apricot refreshing body wash gently massage it on your wet body, lather up, and rinse thoroughly in the morning and evening.\n
    Ingredients: Khubani Oil, Ban Haldi Root, Haldi Root, Ritha Fruit, Kuda Seeds, Purified Waterq.S.\n
          `,
    count: 89,
    price: 132,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bio2_1.jpg" },
      { path: "/images/products/beauty/bio2_2.jpg" },
      { path: "/images/products/beauty/bio2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Biotique" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "Biotique Apricot Refreshing Body Wash | Keeps Skin Fresh and Clean | Brightens Skin and Reducing Dark Spots  | 100% Botanical Extracts | Suitable for All Skin Types | 200ml",
    description: `
    What it is: This body wash natural soap free formula keeps your skin fresh and clean naturally, Apricot is a daily gel-based cleaner that effectively removes all microbes and pollutants and keeps skin hydrated and refreshed for longer.\n
    Key Ingredients: Enriched with Apricot's goodness, for natural moisturization and clear skin. This refreshing body wash is infused with soap nut for hydration, prevention of excessive drying and Turmeric for antioxidant properties that brightens skin.\n
    Key benefits: Contains Apricot, turmeric, and soap nut, this body wash gently cleanses, softens, and enhances the body's natural brightness, providing a refreshing bathing experience while maintaining the skin's pH balance.\n
    Made with 100% natural botanical extracts and is free from harmful chemicals. This body wash gel is dermatologically tested to suit every skin type and safe for regular use, ensuring a gentle yet effective skincare experieTo apply this biotique bio apricot refreshing body wash gently massage it on your wet body, lather up, and rinse thoroughly in the morning and evening.\n
    Ingredients: Khubani Oil, Ban Haldi Root, Haldi Root, Ritha Fruit, Kuda Seeds, Purified Waterq.S.\n
          `,
    count: 89,
    price: 132,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bio2_1.jpg" },
      { path: "/images/products/beauty/bio2_2.jpg" },
      { path: "/images/products/beauty/bio2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Biotique" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "Biotique Basil & Parsley Revitalizing Bathing Bar| Ayurvedic and Organically Pure| Maintains Skin’s Natural pH |100% Botanical Extracts| Suitable for All Skin Types | 150gm",
    description: `
    What it is: This bathing soap bar is a revitalizing blend of natural ingredients that gently wash away body impurities and nourishes the body from within without disturbing the skin’s natural pH balanThe basil soap gently washes away the impurities while maintaining the body's pH level. The antioxidant and vitamin-rich formula keeps the skin healthy and nourishes it.\n
    Key Ingredients: The Biotique soap is a revitalizing blend of fruit and vegetable extracts. It contains the goodness of basil, parsley, and coconut, which soothes the skin, brightens it, prevents discoloration, and increases skin cell regeneration.\n
    The Ayurvedic soap is made with 100% natural botanical extracts and is free from harmful chemicals. It is dermatologically tested, recommended for sensitive body types, and safe for regular use.\n
    MethoAll hands for the ultimate rejuvenation you’ll feel after using this Biotique nourishing soap. Just apply on a wet body and work up a foamy lather. Rinse well and use daily.\n
    Ingredients: Tulsi Leaf Ext., Pudina Leaf Ext., Nariyal Oil, Erandi Oil, Ritha Fruit Ext., Neem Oil, Gehnu Oil, Cleanser Baseq.S.\n
              `,
    count: 89,
    price: 82,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bio3_1.jpg" },
      { path: "/images/products/beauty/bio3_2.jpg" },
      { path: "/images/products/beauty/bio3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Biotique" },
      { key: "Seller", value: "BGorgeous" },
    ],
  },
  {
    name: "Biotique Ocean Kelp Anti Hairfall Shampoo | Intensive Hair Growth Therapy| Anti Hairfall Shampoo that Maintains Shine |100% Botanical Extracts | Suitable for All Hair Types |190ml",
    description: `
    What it is: This nourishing shampoo blends pure kelp, natural proteins, neem bark and bhringraj plant extract to gently cleanse hair and invigorate the scalp for fresh growth and healthier shine. This biotique shampoo enhances the strength.\n
    Key ingredients:The Ocean Kelp Anti Hairfall Shampoo contains the goodness of kelp, is rich in vitamins and minerals that are known to promote hair growth, along with Bhringraj, prevents hair loss and premature greying and Neem that controls dandruff.\n
    Key benefits:This anti-hair fall shampoo effectively combats hair fall problems. It increases the shine and strengthens the hair from within. The natural proteins, mint leaf extract and peppermint oil work together to give other benefits for healthy hair.\n
    Organically pure: Its Ayurvedic formula is made with 100% natural botanical extracts and is free from harmful chemicals. This shampoo is dermatologically tested and suitable for all hair types.\n
    How to use: Apply this anti-hair fall shampoo to damp hair, working the lather from the scalp to the ends. Rinse thoroughly with water and take caution to avoid contact with the eyes.\n
              `,
    count: 89,
    price: 116,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bio4_1.jpg" },
      { path: "/images/products/beauty/bio4_2.jpg" },
      { path: "/images/products/beauty/bio4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Biotique" },
      { key: "Seller", value: "BGorgeous" },
    ],
  },
  {
    name: "Biotique Sandalwood Sunscreen Ultra Soothing Face Lotion, SPF 50+ |Ultra Protective Lotion| Keeps Skin Soft, Fair and Moisturized| Water Resistant| For All Skin Types| 50ml",
    description: `
    What it is: This nutrient-rich lotion protects skin from harmful sunrays with broad spectrum SPF 50 UVA/UVB sunscreen. It helps reduce the risk of skin ageing and skin cancer by shielding the skin from sunburn and sun damage.\n
    Key Ingredients: Infused with the goodness of Sandalwood oil that helps sooth, protects, and defends against UVA rays. Along with Saffron that reduces skin pigmentation and Honey helps purify heal and soothe thIt keeps your skin soft, fair, healthy, and moisturized. This lotion is very water resistant. It stays effective for 80 minutes in the water.\n
    It is made with 100% natural botanical extracts and is free from harmful chemicals. This lotion is dermatologically tested and suitable for all skin types and safe for regular use, ensuring a gentle yet effective skincare experience.\n
    To use this biotique sunscreen, all you must do is generously apply it over your cleansed face and neck 30 minutes before sun exposure and reapply if needed, after swimming or perspiring activities.\n
    Ingredients: Sandalwood Oil, Saffron And Honey; TarWomen\n
              `,
    count: 89,
    price: 126,
    category: "Beauty",
    sales: 76,
    images: [{ path: "/images/products/beauty/bio5_1.jpg" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Biotique" },
      { key: "Seller", value: "BGorgeous" },
    ],
  },
  {
    name: "Bella Vita Luxury Trial Pack of 10 x 5ml Pocket Perfumes for Men Women Unisex Fragrance Mix of EDP, EDT & EDC Long Lasting Perfume Sweet, Floral, Woody, Musky & Spicy",
    description: `
    Includes EDP, EDT & EDC formulations with sweet, floral, woody, musky, and spicy scents.\n
    Suitable for men, women, and unisex wear\n
    Ideal for date nights, office wear, travel, weddings, parties, and holidays\n
    Versatile enough for casual outings, such as brunch or shopping.\n
    Perfect for any season, with sweet and floral scents for spring and summer, and woody and musky fragrances for fall and winter.\n
    These perfumes are the perfect accessory to elevate your style and mood, and are carefully crafted to complement your personality and enhance your natural charm.\n
    This pack of 10 long-lasting perfumes is a must-have for anyone who loves to experiment with different scents.\n
              `,
    count: 89,
    price: 349,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bella1_1.jpg" },
      { path: "/images/products/beauty/bella1_2.jpg" },
      { path: "/images/products/beauty/bella1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Bella Vita Luxury" },
      { key: "Seller", value: "BGorgeous" },
    ],
  },
  {
    name: "Bella Vita Luxury Rose Woman Eau De Parfum Perfume for Women with Black Currant, Vanilla, Jasmine|Floral & Sweet EDP Long Lasting Fragrance Scent 100 ML",
    description: `
    Luxurious Rose Woman perfume offers a refreshing and uplifting burst of rosy fragrance.\n
    This scent is made with organic ingredients worldwide to create a beautiful bouquet of floral notes.\n
    Its long-lasting formula is perfect for any occasion and will keep you feeling fresh and beautiful all day long.\n
    It's the perfect choice for bold and confident women who want to make a statement with their scent.\n
    It makes a perfect gifting option for the elegant woman in your life.\n
              `,
    count: 89,
    price: 515,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bella2_1.jpg" },
      { path: "/images/products/beauty/bella2_2.jpg" },
      { path: "/images/products/beauty/bella2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Bella Vita Luxury" },
      { key: "Seller", value: "NumBrave" },
    ],
  },
  {
    name: "Bella Vita Luxury Honey Oud Eau De Parfum Unisex Perfume for Men & Women with Patchouli, Vanilla, Bergamot | Floral, Spicy EDP Fragrance Scent, 100 Ml",
    description: `
    The Bella Vita Luxury Honey Oud Luxury Perfume is a fruity and floral fragrance with delightful honey, bergamot, Rose, Oud, and Vanilla notes.\n
    This unisex cologne is perfect for anyone who loves sweet fragrances, making it a versatile choice for any occasion.\n
    With its long-lasting Eau De Parfum, this perfume keeps you smelling sweet all day long.\n
    The gender-neutral scent suits everyone who loves its unique fragrance, so let this sweet-talking perfume do the talking for you.\n
    Perfect for gifting\n
              `,
    count: 89,
    price: 575,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bella3_1.jpg" },
      { path: "/images/products/beauty/bella3_2.jpg" },
      { path: "/images/products/beauty/bella3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Bella Vita Luxury" },
      { key: "Seller", value: "NumBrave" },
    ],
  },
  {
    name: "Bella Vita Luxury Date Eau De Parfum Perfume for Women with Pink Pepper, Red Fruit & Jasmine |Fruity & Spicy Long Lasting EDP Frgarance Scent, 20ml",
    description: `
    Long-lasting: DATE Woman Eau De Parfum is the perfect scent for women looking to turn up the heat during a romantic date. A celebration of love and romance, DATE Woman lasts between 6 to 8 hours, helping you create an unforgettable moment.\n\n
Eau De Parfum for Women: With 20% perfume oil concentration, DATE Woman is a long-lasting fragrance made with imported oils but bottled in India to give you iconic fragrances at value-driven prices.\n\n
Fruity, Floral and Woody: DATE Woman opens with fruity notes to give you instant happiness while the heart of the perfume is floral, adding strength and character to the body of the perfume. Woody base notes add a touch of confidence and sophistication.\n\n
IFRA-certified: All our perfumes including DATE Woman are IFRA-certified. This means that they are made with non-irritant formulas, making it super safe to use on skin.\n\n
Imported oils: All our perfumes are made with imported perfume oils from countries such as France, Spain and Italy. With quality and iconic fragrances at heart, Bella Vita perfumes are luxury at value-driven prices.\n\n
              `,
    count: 89,
    price: 175,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bella4_1.jpg" },
      { path: "/images/products/beauty/bella4_2.jpg" },
      { path: "/images/products/beauty/bella4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Bella Vita Luxury" },
      { key: "Seller", value: "NumBrave" },
    ],
  },
  {
    name: "Bella Vita Luxury KLUB Man Eau De Parfum Perfume for Men with Lemon, Rose and Vanilla|Musky and Spicy Long Lasting Premium EDP Fragrance Scent, 100Ml",
    description: `
    A woody and spicy fragrance for every Man who enjoys partying, KLUB is your companion for a great night, all the time.\n
    Wear it to parties, events and long nights. With long-lasting notes and imported perfume oils, it is perfect for gifting.\n
    Lasts 6-8 hours so that you can party and dance without the need to spritz on KLUB.\n
    Refreshing and energising perfume for Men\n
    Eau De Parfum for Men\n
              `,
    count: 89,
    price: 575,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bella5_1.jpg" },
      { path: "/images/products/beauty/bella5_2.jpg" },
      { path: "/images/products/beauty/bella5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Bella Vita Luxury" },
      { key: "Seller", value: "NumBrave" },
    ],
  },
  {
    name: "Bella Vita Luxury CEO MAN Body Wash Refreshing Shower Gel for Deep Cleansing, Hydrating & Moisturising Skin with Aloe Vera & Charcoal Powder 500 Ml",
    description: `
    The CEO Man Shower Gel is a fragrant body wash, perfect for the boss man. With the scent of the best-selling CEO MAN Eau De Parfum in every drop, indulge in the aroma of CEO MAN, right from the time you take a shower.\n
    Enriched with Aloe Vera, bathe in the scent of the iconic CEO MAN with the CEO MAN Shower Gel. This shower gel is the intensity of perfume and the goodness of Aloe Vera, all-in-one bottle.\n
    While the infused scent of CEO Man helps you smell like your favourite perfume, Aloe Vera hydrates your skin and reduces inflammation.\n
    The CEO Man Shower Gel is available in 3 different variants so that you can carry your favourite body wash with you wherever you go.\n
    Explore the complete bath and body range of CEO Man as the iconic Eau de Parfum for Men is now available in a shower gel, perfume body lotion and body deodorant, so that you can smell like success all the time\n
              `,
    count: 89,
    price: 335,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bella6_1.jpg" },
      { path: "/images/products/beauty/bella6_2.jpg" },
      { path: "/images/products/beauty/bella6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Bella Vita Luxury" },
      { key: "Seller", value: "SUPER COSMETICS STORE" },
    ],
  },
  {
    name: "Bella Vita Luxury CEO Man & Skai Aquatic Body Wash Refreshing Shower Gel for Deep Cleansing, Hydrating & Moisturising Skin with Aloe Vera, 250 ml Each",
    description: `
    The ‘You The Man’ combo is the perfect mix of confidence and energy, just contained in a kit. While the CEO Man Shower Gel a woody confidence and dominance, the SKAI Aquatic Shower Gel is subtle yet fresh to keep you energetic all day long.\n
    The CEO Man Shower Gel is a fragrant body wash, perfect for the boss man. With the scent of the best-selling CEO MAN Eau De Parfum in every drop, indulge in the aroma of CEO MAN, right from the time you take a shower.\n
    Enriched with Aloe Vera, bathe in the scent of the iconic CEO MAN with the CEO MAN Shower Gel. This shower gel is the intensity of perfume and the goodness of Aloe Vera, all-in-one bottle.\n
    While the infused scent of SKAI Aquatic helps you smell like your favourite perfume, Aloe Vera hydrates your skin and reduces inflammation.\n
              `,
    count: 89,
    price: 385,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/bella7_1.jpg" },
      { path: "/images/products/beauty/bella7_2.jpg" },
      { path: "/images/products/beauty/bella7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Bella Vita Luxury" },
      { key: "Seller", value: "SUPER COSMETICS STORE" },
    ],
  },
  {
    name: "L'Oreal Paris Permanent Hair Colour, Radiant At-Home Hair Colour with up to 100% Grey Coverage, Pro-Keratin, Up to 8 Weeks of Colour, Excellence Crème, 3 Dark Brown, 72ml+100g",
    description: `
    Permanent at-home hair colour with nourishing and strengthening Pro-Keratin, Complete hair colour treatment with Triple Care Colour Regime: colouring cream, shampoo and hair mask\n
    100% grey coverage from root to tip; Salon like results in 30 minutes\n
    Read instructions and patch test 48 hours before use: 1.) Use gloves and pour colouring into developer bottle and shake to mix, 2.) Apply colour and leave for recommended time, 3.) Shampoo out and follow with conditioning mask\n
    Non-drip crème formula suitable for all hair types, Comb applicator for precise application, Available in several shades\n
    Contents: 1x L'Oréal Paris Excellence Crème Permanent Hair Dye, Radiant At-Home Hair Colour with up to 100% Grey Coverage, Pro-Keratin, Up to 8 Weeks of Colour, 3 Natural Darkest Brown, 72ml+100g\n
              `,
    count: 89,
    price: 509,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/lor1_1.jpg" },
      { path: "/images/products/beauty/lor1_2.jpg" },
      { path: "/images/products/beauty/lor1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "L'Oreal Paris" },
      { key: "Seller", value: "SUPER COSMETICS STORE" },
    ],
  },
  {
    name: "L'Oreal Paris Shampoo, For Damaged and Weak Hair, With Pro-Keratin + Ceramide, Total Repair 5, 1ltr",
    description: `
    Total Repair 5 shampoo for damaged, dry, lifeless, dull, or weak hair, Fights against the five visible signs of damaged hair: hair fall, dryness, roughness, dullness, and split ends\n
    Restores hair fibres so they are stronger, silkier, and smoother, with healthy looking shine\n
    First apply shampoo to deep clean, then spread conditioner, leave 3-5min, rinse, Style with serum, and supplement with weekly mask to nourish and protect\n
    Pro-Keratin conditioning formula reinforces hair, Strength and resilience to wear and tear, Ceramide restores smoothness and lleaves hair soft and healthy looking\n
    Contents: 1x L'Oréal Paris Total Repair 5 Shampoo, For Damaged and Weak Hair, With Pro-Keratin + Ceramide, Volume: 1ltr\n
              `,
    count: 89,
    price: 494,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/lor2_1.jpg" },
      { path: "/images/products/beauty/lor2_2.jpg" },
      { path: "/images/products/beauty/lor2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "L'Oreal Paris" },
      { key: "Seller", value: "SUPER COSMETICS STORE" },
    ],
  },
  {
    name: "L'Oreal Paris Serum, Protection and Shine, For Dry, Flyaway & Frizzy Hair, With 6 Rare Flower Oils, Extraordinary Oil, 30ml",
    description: `
    Extraordinary Oil hair serum, for dry, flyaway, unruly, frizzy hair, Grease-free, lightweight formula, For free-flowing luscious locks
    Multi-use serum for shine, hydration, and taming unruly hair, Softens and nourishes hair fibres, Smoother, silkier, and more manageable to the touch\n
    Apply after shampoo and conditioner. Rub 3-4 drops between your palms to warm this anti-frizz hair serum. Then, apply to lengths.\n
    With 6 Rare Flower Oils: Lotus, Chamomile, Flax, Tiare, Rose, Sunflower, For use on skin and hair, Heat protection up to 230°C\n
    Contents: 1x L'Oréal Paris Extraordinary Oil Serum, For Dry, Flyaway & Frizzy Hair, With 6 Rare Flower Oils, Volume: 30ml\n
              `,
    count: 89,
    price: 233,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/lor3_1.jpg" },
      { path: "/images/products/beauty/lor3_2.jpg" },
      { path: "/images/products/beauty/lor3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "L'Oreal Paris" },
      { key: "Seller", value: "SUPER COSMETICS STORE" },
    ],
  },
  {
    name: "L'Oreal Paris Instant Root Concealer Spray, Ideal for Touching Up Grey Root Regrowth, Magic Retouch, 2 Dark Brown, 75ml",
    description: `
    Grey root touch-up spray for dyed hair, Temporary colour until shampooed out, Ideal for in-between salon visits or home colouration\n
    Natural looking coverage at the roots, Conceals root regrowth, Turns grey roots back to your desired colour, Available in 9 shades ranging from blonde to black\n
    Easy application, Shake well before use, Keep product upright and apply to dry and clean hair, Hold can approx. 13 cm from hair and lightly spray, Avoid overspraying\n
    Up to 25 applications in each bottle, Colour stays in place through brushing and combing, Easily washed out with normal shampoo\n
    Contents: 1x L'Oréal Magic Retouch Instant Root Concealer Spray, Ideal for Touching Up Grey Root Regrowth, 2 Dark Brown, Volume: 75ml\n
              `,
    count: 89,
    price: 297,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/lor4_1.jpg" },
      { path: "/images/products/beauty/lor4_2.jpg" },
      { path: "/images/products/beauty/lor4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "L'Oreal Paris" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "L'Oreal Paris Revitalift Serum, Hydrating and Plumping, With 1.5% Hyaluronic Acid, 15ml",
    description: `
    A Lightweight serum with 50X smaller Micro Hyaluronic Acid\n
    Intensely hydrates, smooths, and replumps skin to reduce fine lines by -60%\n
    Apply this moisturising serum daily, day & night\n
    Fragrance free, paraben free, alcohol free formulation\n
    Contents: 1x L'Oréal Paris Revitalift 1.5% Hyaluronic Acid Serum, Volume: 15ml\n
              `,
    count: 89,
    price: 317,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/lor5_1.jpg" },
      { path: "/images/products/beauty/lor5_2.jpg" },
      { path: "/images/products/beauty/lor5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "L'Oreal Paris" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "L'Oreal Paris Glycolic Bright Daily Foaming Face Cleanser, 100ml | Glycolic Acid Face Wash for Dull Skin | Daily Glowing Facial Cleanser",
    description: `
    REMOVES IMPURITIES: The L'Oréal Parisglycolic bright face wash helps to eliminate dirt, dust, makeup, sebum, and impurities from the skin on the go\n
    FORMULATED WITH GLYCOLIC ACID: It is formulated with the power of glycolic acid and penetrates deep into the skin and is used in dermatlogical peeling treatments\n
    EXFOLIATES THE SKIN: This glycolic acid foaming face wash exfoliates the skin and keeps dullness at bay\n
    VISIBLE RESULTS: It removes melanin, accelerates cell renewal, and helps to achieve visible results with regular use\n
    DERMATOLOGICALLY TESTED: The L'Oréal daily cleanser is dermatologically tested and suitable for all skin types, including the ones with sensitive skin\n
              `,
    count: 89,
    price: 224,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/lor6_1.jpg" },
      { path: "/images/products/beauty/lor6_2.jpg" },
      { path: "/images/products/beauty/lor6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "L'Oreal Paris" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "L'Oreal Paris Glycolic Bright Day Cream with SPF 17, 15ml |Skin Brightening Cream with Glycolic Acid that Visbily Minimizes Spots & Reveals Even Toned Skin",
    description: `
    STIMULATES CELL RENEWAL: The L’Oréal Paris brightening cream reduces dark spots in 2 weeks, hyper-pigmentation and reveales even skin tone by stimulating cell renewal\n
    CONTAINS GLYCOLIC ACID: This dark spot treatment serum is formulated with glycolic acid that is used in dermatlogical peeling treatments\n
    BEST FOR REGULAR USE: The brightening cream is highly effective yet gentle for daily use\n
    DERMATOLOGICALLY TESTED: This Glycolic acid serum is dermatologically tested, suitable for all skin types and helps you flaunt glowing skin on the go\n
    ENRICHED WITH SPF: This skin brightening cream is infused with SPF 17 to increase the skin’s protective shield against harmful UV rays.\n
              `,
    count: 89,
    price: 449,
    category: "Beauty",
    sales: 76,
    images: [
      { path: "/images/products/beauty/lor7_1.jpg" },
      { path: "/images/products/beauty/lor7_2.jpg" },
      { path: "/images/products/beauty/lor7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "L'Oreal Paris" },
      { key: "Seller", value: "Just Peachy!" },
    ],
  },
  {
    name: "Janasya Women's Pure Cotton Straight Kurta",
    description: `
    Fabric: Cotton (100% Cotton)
    Style:- Length: 44(inch) | Pattern: Woven Design | Occasion: Casual | Type: Straight | Sleeve Type: 3/4 Sleeves Regular Sleeves | Color: pink\n
    Packet contain: 1 Readymade kurta\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 449,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan1_1.jpg" },
      { path: "/images/products/womenClothing/jan1_2.jpg" },
      { path: "/images/products/womenClothing/jan1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "pink" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Geometric" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
  },
  {
    name: "Janasya Women's Pure Cotton Straight Kurta",
    description: `
    Fabric: Cotton (100% Cotton)
    Style:- Length: 44(inch) | Pattern: Woven Design | Occasion: Casual | Type: Straight | Sleeve Type: 3/4 Sleeves Regular Sleeves | Color: blue\n
    Packet contain: 1 Readymade kurta\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 449,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan2_1.jpg" },
      { path: "/images/products/womenClothing/jan2_2.jpg" },
      { path: "/images/products/womenClothing/jan2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Geometric" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
  },
  {
    name: "Janasya Women's Pure Cotton Straight Kurta",
    description: `
    Fabric: Cotton (100% Cotton)
    Style:- Length: 44(inch) | Pattern: Woven Design | Occasion: Casual | Type: Straight | Sleeve Type: 3/4 Sleeves Regular Sleeves | Color: green\n
    Packet contain: 1 Readymade kurta\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 449,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan3_1.jpg" },
      { path: "/images/products/womenClothing/jan3_2.jpg" },
      { path: "/images/products/womenClothing/jan3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "green" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Geometric" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "Janasya Women's Pure Cotton Straight Kurta",
    description: `
    Fabric: Cotton (100% Cotton)
    Style:- Length: 44(inch) | Pattern: Woven Design | Occasion: Casual | Type: Straight | Sleeve Type: 3/4 Sleeves Regular Sleeves | Color: Grey\n
    Packet contain: 1 Readymade kurta\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 226,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan4_1.jpg" },
      { path: "/images/products/womenClothing/jan4_2.jpg" },
      { path: "/images/products/womenClothing/jan4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "grey" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Geometric" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
  },
  {
    name: "Janasya Women's Crepe A-line Kurta with Pant",
    description: `
    Material: Kurta-Poly Crepe; Bottom-Poly Crepe\n
    Style: A-Line Foil Print Kurta of length 48" with Batwing Sleeve; Pant of length 36"\n
    Ocassion:Casual,Formal\n
    Packet contains: 1 readymade Kurta and 1 Pant only.\n
    Size Declaration: Please choose garment size that is two inches more than your body measurement.e.g:-For Bust size -36"(S),Select garment size-38''(M)\n
              `,
    count: 89,
    price: 569,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan5_1.jpg" },
      { path: "/images/products/womenClothing/jan5_2.jpg" },
      { path: "/images/products/womenClothing/jan5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Crepe" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Janasya Women's Crepe A-line Kurta with Pant",
    description: `
    Material: Kurta-Poly Crepe; Bottom-Poly Crepe\n
    Style: A-Line Foil Print Kurta of length 48" with Batwing Sleeve; Pant of length 36"\n
    Ocassion:Casual,Formal\n
    Packet contains: 1 readymade Kurta and 1 Pant only.\n
    Size Declaration: Please choose garment size that is two inches more than your body measurement.e.g:-For Bust size -36"(S),Select garment size-38''(M)\n
              `,
    count: 89,
    price: 569,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan6_1.jpg" },
      { path: "/images/products/womenClothing/jan6_2.jpg" },
      { path: "/images/products/womenClothing/jan6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "pink" },
      { key: "Material", value: "Crepe" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Janasya Women's Crepe A-line Kurta with Pant",
    description: `
    Material: Kurta-Poly Crepe; Bottom-Poly Crepe\n
    Style: A-Line Foil Print Kurta of length 48" with Batwing Sleeve; Pant of length 36"\n
    Ocassion:Casual,Formal\n
    Packet contains: 1 readymade Kurta and 1 Pant only.\n
    Size Declaration: Please choose garment size that is two inches more than your body measurement.e.g:-For Bust size -36"(S),Select garment size-38''(M)\n
              `,
    count: 89,
    price: 309,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan7_1.jpg" },
      { path: "/images/products/womenClothing/jan7_2.jpg" },
      { path: "/images/products/womenClothing/jan7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "yellow" },
      { key: "Material", value: "Crepe" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "Janasya Women's Poly Silk Anarkali Kurta",
    description: `
    Fabric: Poly Silk (100% Polyester)\n
    Style:- Length: 52(inch) | Pattern: Foil Print | Occasion: Casual | Type: Anarkali | Sleeve Type: 3/4 Sleeves Regular Sleeves | Color: Beige\n
    Packet contain: 1 Readymade kurta\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 569,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan8_1.jpg" },
      { path: "/images/products/womenClothing/jan8_2.jpg" },
      { path: "/images/products/womenClothing/jan8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "beige" },
      { key: "Material", value: "Polyester" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Janasya Women's Crepe A-line Kurta with Pant",
    description: `
    Fabric: Poly Silk (100% Polyester)\n
    Style:- Length: 52(inch) | Pattern: Foil Print | Occasion: Casual | Type: Anarkali | Sleeve Type: 3/4 Sleeves Regular Sleeves | Color: Off-white\n
    Packet contain: 1 Readymade kurta\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 569,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan9_1.jpg" },
      { path: "/images/products/womenClothing/jan9_2.jpg" },
      { path: "/images/products/womenClothing/jan9_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "off-white" },
      { key: "Material", value: "Polyester" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Janasya Women's Black Poly Silk Straight Kurta with Pant",
    description: `
    Kurta Fabric: Poly Silk, Pant Fabric: Poly Silk, (100% Polyester)\n
    Style:-Kurta Length: 46(inch), Bottom Length: 36(inch) | Pattern: Solid | Occasion: Casual | Type: Straight | Sleeve Type: 3/4 Sleeve Regular Sleeves | Color: Pink\n
    Packet contains: 1 Kurta, 1 Pant\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 669,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan10_1.jpg" },
      { path: "/images/products/womenClothing/jan10_2.jpg" },
      { path: "/images/products/womenClothing/jan10_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "pink" },
      { key: "Material", value: "Silk" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "Janasya Women's Black Poly Silk Straight Kurta with Pant",
    description: `
    Kurta Fabric: Poly Silk, Pant Fabric: Poly Silk, (100% Polyester)\n
    Style:-Kurta Length: 46(inch), Bottom Length: 36(inch) | Pattern: Solid | Occasion: Casual | Type: Straight | Sleeve Type: 3/4 Sleeve Regular Sleeves | Color: Black\n
    Packet contains: 1 Kurta, 1 Pant\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 669,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan11_1.jpg" },
      { path: "/images/products/womenClothing/jan11_2.jpg" },
      { path: "/images/products/womenClothing/jan11_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Silk" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Janasya Women's Poly Silk Kurta With Pant And Art Silk Dupatta",
    description: `
    Kurta Fabric: Poly Silk, Pant Fabric: Poly Silk, Dupatta Fabric: Art Silk (100% Polyester)\n
    Style:-Kurta Length: 46(inch), Bottom Length: 37(inch) | Pattern: Solid | Occasion: Casual | Type: Straight | Sleeve Type: 3/4 Sleeve Regular Sleeves | Color: black\n
    Packet contains: 1 Kurta, 1 Pant and 1 Dupatta\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 619,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan12_1.jpg" },
      { path: "/images/products/womenClothing/jan12_2.jpg" },
      { path: "/images/products/womenClothing/jan12_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Silk" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Janasya Women's Poly Silk Kurta With Pant And Art Silk Dupatta",
    description: `
    Kurta Fabric: Poly Silk, Pant Fabric: Poly Silk, Dupatta Fabric: Art Silk (100% Polyester)\n
    Style:-Kurta Length: 46(inch), Bottom Length: 37(inch) | Pattern: Solid | Occasion: Casual | Type: Straight | Sleeve Type: 3/4 Sleeve Regular Sleeves | Color: beige\n
    Packet contains: 1 Kurta, 1 Pant and 1 Dupatta\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 619,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/jan13_1.jpg" },
      { path: "/images/products/womenClothing/jan13_2.jpg" },
      { path: "/images/products/womenClothing/jan13_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "beige" },
      { key: "Material", value: "Silk" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Janasya" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "Harpa Women's Regular Fit Shirt",
    description: `
    100% Polyester\n
    Machine hand wash separetely, do not bleach, do not wring, dry in shade, medium iron, use mild detergent only\n
    Long sleeve\n
    Round neck\n
    Top with bottom smoking\n
              `,
    count: 89,
    price: 510,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har1_1.jpg" },
      { path: "/images/products/womenClothing/har1_2.jpg" },
      { path: "/images/products/womenClothing/har1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Polyester" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Harpa Women's Regular Fit Shirt",
    description: `
    100% Polyester\n
    Machine hand wash separetely, do not bleach, do not wring, dry in shade, medium iron, use mild detergent only\n
    Long sleeve\n
    Round neck\n
    Top with bottom smoking\n
              `,
    count: 89,
    price: 329,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har2_1.jpg" },
      { path: "/images/products/womenClothing/har2_2.jpg" },
      { path: "/images/products/womenClothing/har2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "orange" },
      { key: "Material", value: "Polyester" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Harpa Women's Body Blouse Shirt",
    description: `
    100% Polyester\n
    Machine hand wash separetely, do not bleach, do not wring, dry in shade, medium iron, use mild detergent only\n
    Long sleeve\n
    Banded collar\n
    Top with lace yoke and metal buttons\n
              `,
    count: 89,
    price: 319,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har3_1.jpg" },
      { path: "/images/products/womenClothing/har3_2.jpg" },
      { path: "/images/products/womenClothing/har3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Polyester" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "Harpa Women's Body Blouse Shirt",
    description: `
    100% Polyester\n
    Machine hand wash separetely, do not bleach, do not wring, dry in shade, medium iron, use mild detergent only\n
    Long sleeve\n
    Banded collar\n
    Top with lace yoke and metal buttons\n
              `,
    count: 89,
    price: 319,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har4_1.jpg" },
      { path: "/images/products/womenClothing/har4_2.jpg" },
      { path: "/images/products/womenClothing/har4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
      { key: "Material", value: "Polyester" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Harpa Women's Body Blouse Shirt",
    description: `
    100% Polyester\n
    Machine hand wash separetely, do not bleach, do not wring, dry in shade, medium iron, use mild detergent only\n
    Long sleeve\n
    Banded collar\n
    Top with lace yoke and metal buttons\n
              `,
    count: 89,
    price: 319,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har5_1.jpg" },
      { path: "/images/products/womenClothing/har5_2.jpg" },
      { path: "/images/products/womenClothing/har5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "green" },
      { key: "Material", value: "Polyester" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "Harpa Women's Blouse",
    description: `
    Neck:- V-Neck\n
    Sleeve :- Long Sleeves\n
    Pattern :- Solid\n
    Fabric :- Viscose Rayon\n
    Fit :- Regular\n
              `,
    count: 89,
    price: 482,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har6_1.jpg" },
      { path: "/images/products/womenClothing/har6_2.jpg" },
      { path: "/images/products/womenClothing/har6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "yellow" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Harpa Women's Blouse",
    description: `
    Neck:- V-Neck\n
    Sleeve :- Long Sleeves\n
    Pattern :- Solid\n
    Fabric :- Viscose Rayon\n
    Fit :- Regular\n
              `,
    count: 89,
    price: 482,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har7_1.jpg" },
      { path: "/images/products/womenClothing/har7_2.jpg" },
      { path: "/images/products/womenClothing/har7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "maroon" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Harpa Basics Women Blouse",
    description: `
    neck: round neck\n
    sleeve: long sleeves\n
    pattern: solid\n
    fabric: viscose rayon\n
    fit: regular\n
    Weave type: Knit\n
              `,
    count: 89,
    price: 482,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har8_1.jpg" },
      { path: "/images/products/womenClothing/har8_2.jpg" },
      { path: "/images/products/womenClothing/har8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "Harpa Basics Women Blouse",
    description: `
    neck: round neck\n
    sleeve: long sleeves\n
    pattern: solid\n
    fabric: viscose rayon\n
    fit: regular\n
    Weave type: Knit\n
              `,
    count: 89,
    price: 482,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har9_1.jpg" },
      { path: "/images/products/womenClothing/har9_2.jpg" },
      { path: "/images/products/womenClothing/har9_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "maroon" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "Harpa Basics Women Blouse",
    description: `
    neck: round neck\n
    sleeve: long sleeves\n
    pattern: solid\n
    fabric: viscose rayon\n
    fit: regular\n
    Weave type: Knit\n
              `,
    count: 89,
    price: 482,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har10_1.jpg" },
      { path: "/images/products/womenClothing/har10_2.jpg" },
      { path: "/images/products/womenClothing/har10_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "maroon" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Harpa Women's Solid Regular Blouse",
    description: `
    Neck:- High Neck\n
    Sleeve:- Long Sleeves\n
    Pattern:- Solid\n
    Fabric:-Viscose Rayon\n
    Fit:- Regular\n
              `,
    count: 89,
    price: 339,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har11_1.jpg" },
      { path: "/images/products/womenClothing/har11_2.jpg" },
      { path: "/images/products/womenClothing/har11_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "white" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "Harpa Women's Viscose Fit and Flare Calf Length Casual Dress",
    description: `
    Neck:- sweetheart Neck\n
    Sleeve:- short Sleeves\n
    Pattern:- Floral\n
    Fabric:-Viscose Rayon\n
    Fit:- Regular\n
              `,
    count: 89,
    price: 650,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har12_1.jpg" },
      { path: "/images/products/womenClothing/har12_2.jpg" },
      { path: "/images/products/womenClothing/har12_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "pink" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "RK World Infocom Pvt Ltd" },
    ],
  },
  {
    name: "Harpa Women's Viscose Fit and Flare Calf Length Casual Dress",
    description: `
    Neck:- sweetheart Neck\n
    Sleeve:- short Sleeves\n
    Pattern:- Floral\n
    Fabric:-Viscose Rayon\n
    Fit:- Regular\n
              `,
    count: 89,
    price: 650,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/har13_1.jpg" },
      { path: "/images/products/womenClothing/har13_2.jpg" },
      { path: "/images/products/womenClothing/har13_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "yellow" },
      { key: "Material", value: "Rayon" },
      { key: "Pattern", value: "Floral" },
      { key: "Brands", value: "Harpa" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "Yashika Women Chiffon Weaving Sarees Free Size (SANDESH)",
    description: `
    Care Instructions: Dry clean only\n
    Care Instructions: Hand wash & Dry wash but requested not to use hard brush on the fabric\n
    Saree Fabric:Chiffon, Blouse Fabric ::Chiffon\n
              `,
    count: 89,
    price: 349,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/yash1_1.jpg" },
      { path: "/images/products/womenClothing/yash1_2.jpg" },
      { path: "/images/products/womenClothing/yash1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Yashika" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "Yashika Women Chiffon Weaving Sarees Free Size (SANDESH)",
    description: `
    Care Instructions: Dry clean only\n
    Care Instructions: Hand wash & Dry wash but requested not to use hard brush on the fabric\n
    Saree Fabric:Chiffon, Blouse Fabric ::Chiffon\n
              `,
    count: 89,
    price: 349,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/yash2_1.jpg" },
      { path: "/images/products/womenClothing/yash2_2.jpg" },
      { path: "/images/products/womenClothing/yash2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Yashika" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "Yashika Women Chiffon Weaving Sarees Free Size (SANDESH)",
    description: `
    Care Instructions: Dry clean only\n
    Care Instructions: Hand wash & Dry wash but requested not to use hard brush on the fabric\n
    Saree Fabric:Chiffon, Blouse Fabric ::Chiffon\n
              `,
    count: 89,
    price: 349,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/yash3_1.jpg" },
      { path: "/images/products/womenClothing/yash3_2.jpg" },
      { path: "/images/products/womenClothing/yash3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "green" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Yashika" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "Yashika Women Chiffon saree SDPL-MOTICHOOR",
    description: `
    Fabric: ART SILK\n
    Saree Length: 5.5 MTR\n 
    Blouse: 0.80 MTR\n
    Note: Slight Color Variation is possible due to difference in monitor resolutions and digital photography. The images displayed is for representation purpose only.\n
    1 Saree With Attached Blouse Piece\n
              `,
    count: 89,
    price: 499,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/yash4_1.jpg" },
      { path: "/images/products/womenClothing/yash4_2.jpg" },
      { path: "/images/products/womenClothing/yash4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "yellow" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Yashika" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "Yashika Women Chiffon saree SDPL-MOTICHOOR",
    description: `
    Fabric: ART SILK\n
    Saree Length: 5.5 MTR\n 
    Blouse: 0.80 MTR\n
    Note: Slight Color Variation is possible due to difference in monitor resolutions and digital photography. The images displayed is for representation purpose only.\n
    1 Saree With Attached Blouse Piece\n
              `,
    count: 89,
    price: 499,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/yash5_1.jpg" },
      { path: "/images/products/womenClothing/yash5_2.jpg" },
      { path: "/images/products/womenClothing/yash5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Yashika" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "Yashika Women Chiffon saree SDPL-MOTICHOOR",
    description: `
    Fabric: ART SILK\n
    Saree Length: 5.5 MTR\n 
    Blouse: 0.80 MTR\n
    Note: Slight Color Variation is possible due to difference in monitor resolutions and digital photography. The images displayed is for representation purpose only.\n
    1 Saree With Attached Blouse Piece\n
              `,
    count: 89,
    price: 499,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/yash6_1.jpg" },
      { path: "/images/products/womenClothing/yash6_2.jpg" },
      { path: "/images/products/womenClothing/yash6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "green" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Yashika" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "Yashika Women Chiffon saree SDPL-MOTICHOOR",
    description: `
    Fabric: ART SILK\n
    Saree Length: 5.5 MTR\n 
    Blouse: 0.80 MTR\n
    Note: Slight Color Variation is possible due to difference in monitor resolutions and digital photography. The images displayed is for representation purpose only.\n
    1 Saree With Attached Blouse Piece\n
              `,
    count: 89,
    price: 499,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/yash7_1.jpg" },
      { path: "/images/products/womenClothing/yash7_2.jpg" },
      { path: "/images/products/womenClothing/yash7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "orange" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Yashika" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "Yashika Women Chiffon saree SDPL-MOTICHOOR",
    description: `
    Fabric: ART SILK\n
    Saree Length: 5.5 MTR\n 
    Blouse: 0.80 MTR\n
    Note: Slight Color Variation is possible due to difference in monitor resolutions and digital photography. The images displayed is for representation purpose only.\n
    1 Saree With Attached Blouse Piece\n
              `,
    count: 89,
    price: 499,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/yash8_1.jpg" },
      { path: "/images/products/womenClothing/yash8_2.jpg" },
      { path: "/images/products/womenClothing/yash8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Solid" },
      { key: "Brands", value: "Yashika" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "SIRIL Women's Printed Poly Silk Saree with Blouse",
    description: `
    Saree Fabric: Poly Silk | Blouse Fabric: Poly Silk\n
    Length:: Saree: 5.30Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit\n
    Colour:: Saree Color: Royal Blue, Multi | Blouse Color: Blue\n
    Work:: Saree: Printed | Blouse: Printed\n
    There might be minor colour variation between actual product and image shown on screen.\n
              `,
    count: 89,
    price: 269,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir1_1.jpg" },
      { path: "/images/products/womenClothing/sir1_2.jpg" },
      { path: "/images/products/womenClothing/sir1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Silk" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "SIRIL Women's Lace & Printed Chiffon Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric: Chiffon | Blouse Fabric: Bhagalpuri Silk | Work:: Saree: Animal Printed | Blouse: Dyed ,Lace\n
    Colour:: Saree Color: Brown | Blouse Color: Brown\n
    Length:: Saree: 5.30Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 269,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir2_1.jpg" },
      { path: "/images/products/womenClothing/sir2_2.jpg" },
      { path: "/images/products/womenClothing/sir2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "brown" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "SIRIL Women's Lace & Printed Chiffon Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric: Chiffon | Blouse Fabric: Bhagalpuri Silk | Work:: Saree: Animal Printed | Blouse: Dyed ,Lace\n
    Colour:: Saree Color: Beige | Blouse Color: Brown\n
    Length:: Saree: 5.30Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 269,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir3_1.jpg" },
      { path: "/images/products/womenClothing/sir3_2.jpg" },
      { path: "/images/products/womenClothing/sir3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "biege" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "SIRIL Women's Lace & Printed Chiffon Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric: Chiffon | Blouse Fabric: Bhagalpuri Silk | Work:: Saree: Printed | Blouse: Dyed ,Lace\n
    Colour:: Saree Color: Black | Blouse Color: Black\n
    Length:: Saree: 5.30Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 269,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir4_1.jpg" },
      { path: "/images/products/womenClothing/sir4_2.jpg" },
      { path: "/images/products/womenClothing/sir4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "SIRIL Women's Lace & Printed Chiffon Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric: Chiffon | Blouse Fabric: Bhagalpuri Silk | Work:: Saree: Printed | Blouse: Dyed ,Lace\n
    Colour:: Saree Color: Maroon | Blouse Color: Maroon\n
    Length:: Saree: 5.30Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 269,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir5_1.jpg" },
      { path: "/images/products/womenClothing/sir5_2.jpg" },
      { path: "/images/products/womenClothing/sir5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "maroon" },
      { key: "Material", value: "Chiffon" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "SIRIL Women's Woven Brasso Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric: Brasso | Blouse Fabric: Brasso | Work:: Saree: Woven | Blouse: Dyed\n
    Colour:: Saree Color: Mustard | Blouse Color: Teal, Silver\n
    Length:: Saree: 5.30Mtr | Blouse: 0.80Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 417,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir6_1.jpg" },
      { path: "/images/products/womenClothing/sir6_2.jpg" },
      { path: "/images/products/womenClothing/sir6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "yellow" },
      { key: "Material", value: "Brasso" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "SIRIL Women's Woven Brasso Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric: Brasso | Blouse Fabric: Brasso | Work:: Saree: Woven | Blouse: Dyed\n
    Colour:: Saree Color: Blue | Blouse Color: Navy Blue, Silver\n
    Length:: Saree: 5.30Mtr | Blouse: 0.80Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 417,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir7_1.jpg" },
      { path: "/images/products/womenClothing/sir7_2.jpg" },
      { path: "/images/products/womenClothing/sir7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Brasso" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "HOUSE OF COMFORT" },
    ],
  },
  {
    name: "SIRIL Women's Woven Brasso Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric: Brasso | Blouse Fabric: Brasso | Work:: Saree: Woven | Blouse: Dyed\n
    Colour:: Saree Color: Pink | Blouse Color: Violet, Silver\n
    Length:: Saree: 5.30Mtr | Blouse: 0.80Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 417,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir8_1.jpg" },
      { path: "/images/products/womenClothing/sir8_2.jpg" },
      { path: "/images/products/womenClothing/sir8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "pink" },
      { key: "Material", value: "Brasso" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "SIRIL Women's Woven Brasso Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric: Brasso | Blouse Fabric: Brasso | Work:: Saree: Woven | Blouse: Dyed\n
    Colour:: Saree Color: Red & Grey | Blouse Color: Grey, Silver\n
    Length:: Saree: 5.30Mtr | Blouse: 0.80Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 417,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir9_1.jpg" },
      { path: "/images/products/womenClothing/sir9_2.jpg" },
      { path: "/images/products/womenClothing/sir9_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
      { key: "Material", value: "Brasso" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "SIRIL Women's Paithani Jacquard Poly Silk Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric : Poly Silk | Blouse Fabric : Poly Silk\n
    Length :: Saree : 5.50Mtr | Blouse(Unstitch Fabric) : 0.80Mtr & Which Need To Be Stitched As Per Size And Fit\n
    Colour :: Saree : Rama Green | Blouse : Rama Green\n
    Work Type :: Saree : Paithani Jacquard | Blouse : Jacquard | Wash Care: Dry & Clean is Recommernded.\n
    Package Content : 1 Saree With 1 Unstitched Blouses Piece.\n
              `,
    count: 89,
    price: 1219,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir10_1.jpg" },
      { path: "/images/products/womenClothing/sir10_2.jpg" },
      { path: "/images/products/womenClothing/sir10_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "green" },
      { key: "Material", value: "Silk" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "VRP Telematics" },
    ],
  },
  {
    name: "SIRIL Women's Paithani Jacquard Poly Silk Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric : Poly Silk | Blouse Fabric : Poly Silk\n
    Length :: Saree : 5.50Mtr | Blouse(Unstitch Fabric) : 0.80Mtr & Which Need To Be Stitched As Per Size And Fit\n
    Colour :: Saree : Rani Pink | Blouse : Rani Pink\n
    Work Type :: Saree : Paithani Jacquard | Blouse : Jacquard | Wash Care: Dry & Clean is Recommernded.\n
    Package Content : 1 Saree With 1 Unstitched Blouses Piece.\n
              `,
    count: 89,
    price: 1219,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir11_1.jpg" },
      { path: "/images/products/womenClothing/sir11_2.jpg" },
      { path: "/images/products/womenClothing/sir11_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "pink" },
      { key: "Material", value: "Silk" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "SIRIL Women's Paithani Jacquard Poly Silk Saree with Unstitched Blouse Piece",
    description: `
    Saree Fabric : Poly Silk | Blouse Fabric : Poly Silk\n
    Length :: Saree : 5.50Mtr | Blouse(Unstitch Fabric) : 0.80Mtr & Which Need To Be Stitched As Per Size And Fit\n
    Colour :: Saree : Red | Blouse : Red\n
    Work Type :: Saree : Paithani Jacquard | Blouse : Jacquard | Wash Care: Dry & Clean is Recommernded.\n
    Package Content : 1 Saree With 1 Unstitched Blouses Piece.\n
              `,
    count: 89,
    price: 1219,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir12_1.jpg" },
      { path: "/images/products/womenClothing/sir12_2.jpg" },
      { path: "/images/products/womenClothing/sir12_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
      { key: "Material", value: "Silk" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "SIRIL Women's Animal Print Printed Georgette Saree With Blouse",
    description: `
    Saree Fabric :- Georgette | Blouse Fabric :- Georgette\n
    Saree Length :- 5.30 Mtr | Blouse Length :- 0.70 Mtr ,Which Need To Be Stitched As Per Size And Fit\n
    Saree Colour :- Black | Blouse Colour :- Black\n
    Saree Work :- Butterfly Printed | Blouse Work :- Printed\n
    Tip: Pair This Saree High Heels, Hand Clutch/Bag and Minimul Jewellery\n
    Occassion: This saree is suitable to get a contemporary stylish look in normal occasions, college farewell, family get together, regular or daily Use, office or work or gifting to loved one\n
              `,
    count: 89,
    price: 269,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir13_1.jpg" },
      { path: "/images/products/womenClothing/sir13_2.jpg" },
      { path: "/images/products/womenClothing/sir13_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Georgette" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "SIRIL Women's Animal Print Printed Georgette Saree With Blouse",
    description: `
    Saree Fabric: Georgette (Ranial) | Blouse Fabric: Georgette (Ranial) | Work:: Saree: Floral Print | Blouse: Printed\n
    Colour:: Saree Color: Blue | Blouse Color: Blue\n
    Length:: Saree: 5.30Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 289,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir14_1.jpg" },
      { path: "/images/products/womenClothing/sir14_2.jpg" },
      { path: "/images/products/womenClothing/sir14_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "blue" },
      { key: "Material", value: "Georgette" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "SIRIL Women's Animal Print Printed Georgette Saree With Blouse",
    description: `
    Saree Fabric: Georgette (Ranial) | Blouse Fabric: Georgette (Ranial) | Work:: Saree: Floral Print | Blouse: Printed\n
    Colour:: Saree Color: Green | Blouse Color: Green\n
    Length:: Saree: 5.30Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 289,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir15_1.jpg" },
      { path: "/images/products/womenClothing/sir15_2.jpg" },
      { path: "/images/products/womenClothing/sir15_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "green" },
      { key: "Material", value: "Georgette" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "SIRIL Women's Animal Print Printed Georgette Saree With Blouse",
    description: `
    Saree Fabric: Georgette (Ranial) | Blouse Fabric: Georgette (Ranial) | Work:: Saree: Floral Print | Blouse: Printed\n
    Colour:: Saree Color: Orange | Blouse Color: Orange\n
    Length:: Saree: 5.30Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit | Package Content : 1 Saree With 1 Unstitched Blouses Piece\n
    Occassion: This Saree Is Suitable To Get A Contemporary Stylish Look In Normal Occasions, College Farewell, Family Get Together, Regular Or Daily Use, Office Or Work Or Gifting To Loved One\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type.\n
              `,
    count: 89,
    price: 289,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir16_1.jpg" },
      { path: "/images/products/womenClothing/sir16_2.jpg" },
      { path: "/images/products/womenClothing/sir16_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "orange" },
      { key: "Material", value: "Georgette" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "SIRIL Women's Animal Print Printed Georgette Saree With Blouse",
    description: `
    Saree Fabric :- Georgette | Blouse Fabric :- Georgette\n
    Saree Length :- 5.30 Mtr | Blouse Length :- 0.70 Mtr ,Which Need To Be Stitched As Per Size And Fit\n
    Saree Colour :- Turmeric Yellow | Blouse Colour :- Turmeric Yellow\n
    Saree Work :- Butterfly Printed | Blouse Work :- Printed\n
              `,
    count: 89,
    price: 289,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/sir17_1.jpg" },
      { path: "/images/products/womenClothing/sir17_2.jpg" },
      { path: "/images/products/womenClothing/sir17_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "yellow" },
      { key: "Material", value: "Georgette" },
      { key: "Pattern", value: "Animal print" },
      { key: "Brands", value: "SIRIL" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "KSHS Women Cotton Fleece Oversized Loose Fit Hooded Sweatshirt Full Sleeves Graphic Printed Jumper Sweatshirt",
    description: `
    Fabric -This sweatshirt is made in fleece fabric that has a innate softness - it is further treated with Bio Wash for an enhanced comfort and soft feel on the skin.\n
    Regular fit & trendy design - The designs are very trendy and get an instant liking from the Adults. The regular fit gives them the freedom to play and do all regular activities in a free manner.\n
    Occasion - The Hoodies can be used for any causal outings and events as they give an all rounding appeal to you. Designed to solve the customer's need for comfortable and versatile clothing. Perfect for work, travel, and leisure activities\n
    Wash care - The fabric is made of high graded fabric and is washable in all methods. This means that hand washes are also applicable. However, we recommend washing them on the machine for better fabric cleansing.\n
              `,
    count: 89,
    price: 479,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/kh1_1.jpg" },
      { path: "/images/products/womenClothing/kh1_2.jpg" },
      { path: "/images/products/womenClothing/kh1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "brown" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "KSHS" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "KSHS Women Cotton Fleece Oversized Loose Fit Hooded Sweatshirt Full Sleeves Graphic Printed Jumper Sweatshirt",
    description: `
    Fabric -This sweatshirt is made in fleece fabric that has a innate softness - it is further treated with Bio Wash for an enhanced comfort and soft feel on the skin.\n
    Regular fit & trendy design - The designs are very trendy and get an instant liking from the Adults. The regular fit gives them the freedom to play and do all regular activities in a free manner.\n
    Occasion - The Hoodies can be used for any causal outings and events as they give an all rounding appeal to you. Designed to solve the customer's need for comfortable and versatile clothing. Perfect for work, travel, and leisure activities\n
    Wash care - The fabric is made of high graded fabric and is washable in all methods. This means that hand washes are also applicable. However, we recommend washing them on the machine for better fabric cleansing.\n
              `,
    count: 89,
    price: 479,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/kh2_1.jpg" },
      { path: "/images/products/womenClothing/kh2_2.jpg" },
      { path: "/images/products/womenClothing/kh2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "KSHS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "KSHS Women Cotton Fleece Oversized Loose Fit Hooded Sweatshirt Full Sleeves Graphic Printed Jumper Sweatshirt",
    description: `
    Fabric -This sweatshirt is made in fleece fabric that has a innate softness - it is further treated with Bio Wash for an enhanced comfort and soft feel on the skin.\n
    Regular fit & trendy design - The designs are very trendy and get an instant liking from the Adults. The regular fit gives them the freedom to play and do all regular activities in a free manner.\n
    Occasion - The Hoodies can be used for any causal outings and events as they give an all rounding appeal to you. Designed to solve the customer's need for comfortable and versatile clothing. Perfect for work, travel, and leisure activities\n
    Wash care - The fabric is made of high graded fabric and is washable in all methods. This means that hand washes are also applicable. However, we recommend washing them on the machine for better fabric cleansing.\n
              `,
    count: 89,
    price: 480,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/kh3_1.jpg" },
      { path: "/images/products/womenClothing/kh3_2.jpg" },
      { path: "/images/products/womenClothing/kh3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "white" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "KSHS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "KSHS Cotton Fleece Oversized Loose Fit Hooded Sweatshirt Full Sleeves Cool & Stylish Graphic Printed Jumper Sweatshirt Winter Wear for Women",
    description: `
    Fabric -This sweatshirt is made in fleece fabric that has a innate softness - it is further treated with Bio Wash for an enhanced comfort and soft feel on the skin\n
    Regular fit & trendy design - The designs are very trendy and get an instant liking from the Adults. The regular fit gives them the freedom to play and do all regular activities in a free manner.\n
    Occasion - The Hoodies can be used for any causal outings and events as they give an all rounding appeal to you. Designed to solve the customer's need for comfortable and versatile clothing. Perfect for work, travel, and leisure activities\n
    Wash care - The fabric is made of high graded fabric and is washable in all methods. This means that hand washes are also applicable. However, we recommend washing them on the machine for better fabric cleansing.\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type\n
              `,
    count: 89,
    price: 480,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/kh4_1.jpg" },
      { path: "/images/products/womenClothing/kh4_2.jpg" },
      { path: "/images/products/womenClothing/kh4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "KSHS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "KSHS Cotton Fleece Oversized Loose Fit Hooded Sweatshirt Full Sleeves Cool & Stylish Graphic Printed Jumper Sweatshirt Winter Wear for Women",
    description: `
    Fabric -This sweatshirt is made in fleece fabric that has a innate softness - it is further treated with Bio Wash for an enhanced comfort and soft feel on the skin\n
    Regular fit & trendy design - The designs are very trendy and get an instant liking from the Adults. The regular fit gives them the freedom to play and do all regular activities in a free manner.\n
    Occasion - The Hoodies can be used for any causal outings and events as they give an all rounding appeal to you. Designed to solve the customer's need for comfortable and versatile clothing. Perfect for work, travel, and leisure activities\n
    Wash care - The fabric is made of high graded fabric and is washable in all methods. This means that hand washes are also applicable. However, we recommend washing them on the machine for better fabric cleansing.\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type\n
              `,
    count: 89,
    price: 480,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/kh4_1.jpg" },
      { path: "/images/products/womenClothing/kh4_2.jpg" },
      { path: "/images/products/womenClothing/kh4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "KSHS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "KSHS Cotton Fleece Oversized Loose Fit Hooded Sweatshirt Full Sleeves Cool & Stylish Graphic Printed Jumper Sweatshirt Winter Wear for Women",
    description: `
    Fabric -This sweatshirt is made in fleece fabric that has a innate softness - it is further treated with Bio Wash for an enhanced comfort and soft feel on the skin\n
    Regular fit & trendy design - The designs are very trendy and get an instant liking from the Adults. The regular fit gives them the freedom to play and do all regular activities in a free manner.\n
    Occasion - The Hoodies can be used for any causal outings and events as they give an all rounding appeal to you. Designed to solve the customer's need for comfortable and versatile clothing. Perfect for work, travel, and leisure activities\n
    Wash care - The fabric is made of high graded fabric and is washable in all methods. This means that hand washes are also applicable. However, we recommend washing them on the machine for better fabric cleansing.\n
    Disclaimer : Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type\n
              `,
    count: 89,
    price: 480,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/kh5_1.jpg" },
      { path: "/images/products/womenClothing/kh5_2.jpg" },
      { path: "/images/products/womenClothing/kh5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "white" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "KSHS" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "KSHS Women's Cotton Printed Night Suit Set of Top & Shorts",
    description: `
    Purpose: night suit for women\n
    Fit Type: Regular (Relaxed) Fit.\n
    MATERIAL: 100% Super Combed Cotton with stylish and crazy prints. This Night Dress is made of the best quality breathable cotton fabric.\n
    CONTENT: 1 Printed Top and 1 Printed Short - Ideal for Sleepwear | Loungewear | Nightwear | Active Wear | Top and Shorts Set for Women | Short Night Suits for Women | Night Suit Set for Women.\n
    SHORTS: Waist is elasticated along with Drawstring and comes with convenient both side pockets.\n
              `,
    count: 89,
    price: 490,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/kh6_1.jpg" },
      { path: "/images/products/womenClothing/kh6_2.jpg" },
      { path: "/images/products/womenClothing/kh6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "grey" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "KSHS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "KSHS Women's Cotton Printed Night Suit Set of Top & Shorts",
    description: `
    Purpose: night suit for women\n
    Fit Type: Regular (Relaxed) Fit.\n
    MATERIAL: 100% Super Combed Cotton with stylish and crazy prints. This Night Dress is made of the best quality breathable cotton fabric.\n
    CONTENT: 1 Printed Top and 1 Printed Short - Ideal for Sleepwear | Loungewear | Nightwear | Active Wear | Top and Shorts Set for Women | Short Night Suits for Women | Night Suit Set for Women.\n
    SHORTS: Waist is elasticated along with Drawstring and comes with convenient both side pockets.\n
              `,
    count: 89,
    price: 490,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/kh7_1.jpg" },
      { path: "/images/products/womenClothing/kh7_2.jpg" },
      { path: "/images/products/womenClothing/kh7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "maroon" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "KSHS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "KSHS Women Typography Printed Oversized Pure Cotton T-Shirt",
    description: `
    Sleeve Type: Half sleeve with stylish casual oversize design for Women.\n
    STYLISH DESIGN: Create a lasting impression in this cotton t-shirt for women. This tshirts women trendy is beautifully Crafted in 100% pure cotton. These Black tshirt for women has half sleeves and is definitely a must-have in your wardrobe\n
    ATTRACTIVE: Pair it up with jeans for classic everyday look. This stylish & attractive cute tees for women is suitable for all body types. Best women t shirt stylish western wear\n
    USAGE: This attractive stylish tops for women will make you look attractive and will make you stand out of the crowd. You can wear this classic butterfly printed tshirts for women for going to a party, club, date, casual meetings & will definitely gives you comfort feeling
    Shop for this oversized t-shirt online in India, available exclusively at KSHS.\n
              `,
    count: 89,
    price: 348,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/kh8_1.jpg" },
      { path: "/images/products/womenClothing/kh8_2.jpg" },
      { path: "/images/products/womenClothing/kh8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Letter print" },
      { key: "Brands", value: "KSHS" },
      { key: "Seller", value: "KUKU KI DUKAN" },
    ],
  },
  {
    name: "BALENZIA x Harry Potter character lowcut socks- Harry, Ron & Hermione for Women Made with 100% Combed Cotton & Spandex(Pack of 3)- Yellow, Brown & Orange (Multicolour) (Free Size)",
    description: `
    Iconic Designs: The socks feature a variety of designs inspired by the Harry Potter series. These designs may include house crests, iconic symbols, characters, or quotes from the magical world of Harry Potter.\n
    Material: These Harry Potter socks are crafted from a blend of cotton and spandex. The cotton offers softness, breathability, and comfort, while the addition of spandex provides stretch and flexibility for a snug fit.\n
    Comfortable Fit: The combination of cotton and spandex ensures a comfortable fit that conforms to the contours of your feet. The stretchiness of spandex allows for flexibility and helps the socks retain their shape over time.\n
    Breathable and Moisture-Wicking: Cotton is known for its breathability, allowing air to circulate and keep your feet cool and dry. It also has moisture-wicking properties, which help to absorb sweat and prevent odour.\n
    Durability: The blend of cotton and spandex, along with superior stitching at the heels and toes, enhances the durability of the socks, ensuring they can withstand regular wear and washing.\n
              `,
    count: 89,
    price: 264,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/bal1_1.jpg" },
      { path: "/images/products/womenClothing/bal1_2.jpg" },
      { path: "/images/products/womenClothing/bal1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "multi-color" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "BALENZIA" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "BALENZIA We Bare Bear Cartoon Network BOX Set Low Cut Socks for Women Made with 100% Combed Cotton & Spandex (Pack Of 3)(Multicolour)",
    description: `
    These extremely comfortable Low cut socks are stylish adding delight to your feet.\n
    Fabric Composition: Combed Cotton & Spandex\n
    Color: Dark Grey, White, Brown\n
    Pack Size: 3 Pair Pack\n
              `,
    count: 89,
    price: 344,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/bal2_1.jpg" },
      { path: "/images/products/womenClothing/bal2_2.jpg" },
      { path: "/images/products/womenClothing/bal2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "multi-color" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "BALENZIA" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
  },
  {
    name: "BALENZIA x Harry Potter Women Cotton Lowcut Socks with Gift Box (8 Pair Pack)",
    description: `
    Iconic Designs: The socks feature a variety of designs inspired by the Harry Potter series. These designs may include house crests, iconic symbols, characters, or quotes from the magical world of Harry Potter.\n
    Material: These Harry Potter socks are crafted from a blend of cotton and spandex. The cotton offers softness, breathability, and comfort, while the addition of spandex provides stretch and flexibility for a snug fit.\n
    Comfortable Fit: The combination of cotton and spandex ensures a comfortable fit that conforms to the contours of your feet. The stretchiness of spandex allows for flexibility and helps the socks retain their shape over time.\n
    Breathable and Moisture-Wicking: Cotton is known for its breathability, allowing air to circulate and keep your feet cool and dry. It also has moisture-wicking properties, which help to absorb sweat and prevent odour.\n
    Durability: The blend of cotton and spandex, along with superior stitching at the heels and toes, enhances the durability of the socks, ensuring they can withstand regular wear and washing.\n
              `,
    count: 89,
    price: 900,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/bal3_1.jpg" },
      { path: "/images/products/womenClothing/bal3_2.jpg" },
      { path: "/images/products/womenClothing/bal3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "multi-color" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "BALENZIA" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
  },
  {
    name: "BALENZIA Women's Socks Powerpuff Girls/Ankle Cushioned Low Cut Socks-Combo Pack of 3",
    description: `
    Fabric Composition : Combed Cotton & Spandex\n
    These extremely comfortable low cut socks are stylish adding delight to your feet.\n
    Super Cool Powerpuff Girls Collection from Balenzia available in 3 colours- Pink, Blue, Green\n
    Official Licensee of Powerpuff Girls\n
    Size : UK 4 to UK 7 , Pack Size : 3 Pair Pack\n
              `,
    count: 89,
    price: 264,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/bal4_1.jpg" },
      { path: "/images/products/womenClothing/bal4_2.jpg" },
      { path: "/images/products/womenClothing/bal4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "multi-color" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "BALENZIA" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
  },
  {
    name: "BALENZIA x Disney Character Lowcut/Ankle length socks for Women- Mickey & Minnie,Donald & Daisy (Pack of 2 Pairs)(Free Size) Red, Blue,Pink|Made with 100% Combed Cotton & Spandex",
    description: `
    This collection is inspired by the Sensational Six—Mickey Mouse, Minnie Mouse, Donald Duck, Daisy Duck, Goofy, and Pluto-and their iconic friendship. This funky Collection of socks will revive your childhood memories.\n
    Style these Official Licensed Disney Lowcut/Ankle length Socks which are crafted with exquisite weaving technology and high-performance fibres ensuring that each sock provides incredible comfort, breathability and durability.\n
    The blend of Cotton and Spandex offers an excellent foot grip, ultra-breathability, moisture absorption, stretchability, and odour resisting characteristics, safeguarding your shoes and feet altogether.\n
    The socks are designed keeping in mind the attractive designs and colours of Mickey & Friends .These lowcut/ankle socks are fashionable and complement your style statement.\n
    The usage of Spandex in our socks provides extraordinary versatility. The strong, durable, and stretchable fibre helps keeping the socks in their best shape and helps them stretch/recover and "stay up".\n
              `,
    count: 89,
    price: 282,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/bal5_1.jpg" },
      { path: "/images/products/womenClothing/bal5_2.jpg" },
      { path: "/images/products/womenClothing/bal5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "multi-color" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "BALENZIA" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
  },
  {
    name: "BALENZIA We Bare Bears High ankle Socks For Women (Pack Of 3)-White,D.grey,Brown",
    description: `
    These extremely comfortable High Ankle socks are stylish adding delight to your feet.\n
    Fabric Composition: Combed Cotton & Spandex\n
    Color: Dark Grey, White, Brown\n
    Pack Size: 3 Pair Pack\n
    Size: UK 4 to UK 7\n
              `,
    count: 89,
    price: 313,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/bal6_1.jpg" },
      { path: "/images/products/womenClothing/bal6_2.jpg" },
      { path: "/images/products/womenClothing/bal6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "multi-color" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "BALENZIA" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
  },
  {
    name: "BALENZIA x Disney Winnie the Pooh Character Lowcut/Ankle length socks for Women (Pack of 3 Pairs)(Free Size) White, Black, Grey|Made with 100% Cotton & Spandex",
    description: `
    Get ready to indulge in good deeds with our exclusive range of socks, and spread positivity like Winnie the Pooh.Speaking for themselves, they are absolutely drool-worthy!\n
    Our merchandise offers you a pack of a hunt in vibrant colors i.e. No Show Socks and Ankle Socks. Complete with a matching Winnie the Pooh Logo, after all the smallest things take up the most room in your heart.\n
    Style your wardrobe with our exclusive range crafted with exquisite weaving technology and high-performance fibers ensuring that each sock provides incredible comfort, breathability, and durability.\n
    The socks are designed keeping in mind the attractive designs and colors of the Disney characters. These socks are fashionable and complement your style statement.\n
    These socks are soft, comfy to wear, and do not irritate the skin. They are made with cotton which can easily absorb moisture and is also able to regulate temperature efficiently. Also, the cushioned sole is soft and padded thus providing extra protection for the foot and sweat absorption.\n
              `,
    count: 89,
    price: 375,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/bal7_1.jpg" },
      { path: "/images/products/womenClothing/bal7_2.jpg" },
      { path: "/images/products/womenClothing/bal7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "multi-color" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "BALENZIA" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "Justice League Women's Modal Socks",
    description: `
    Extremely discreet, invisible socks (no show socks) for Women- Pack of 3- Supergirl, Batgirl, Wonder Women\n
    Made with soft & ultra-breathable Modal Yarn.\n
    Long lasting comfort, extended durability,Easy Stretch.\n
    Anti-slip silicon for a secure grip to keep socks in place.\n
    Size : UK 4 to UK 7\n
              `,
    count: 89,
    price: 315,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/bal8_1.jpg" },
      { path: "/images/products/womenClothing/bal8_2.jpg" },
      { path: "/images/products/womenClothing/bal8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "multi-color" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "BALENZIA" },
      { key: "Seller", value: "Cocoblu Retail" },
    ],
  },
  {
    name: "BALENZIA X Justice League Women's Combed Cotton Ankle Length Socks-Pack of 3 Pairs (Pink,Grey,White)(Free Size) Justice League Pack for Women -Superman, Batman, Wonder Woman",
    description: `
    Combed Cotton – The Cotton is specially treated before it is spun into fibre, as a result of which it gives an extremely soft version, i.e., Combed Cotton. The usage of Combed Cotton prevents fray, unravel, or tear of the sock, and offers a more durable, smoother, softer, and comfortable sock fit.\n
    This funky collection is made with finest cotton yarns and ensuring that each sock provides incredible comfort, breathability and durability.
    Design: The socks have attractive designs and logos of superman, wonder woman, and batman.These ankle socks are fashionable and complement your style statement.Officially licensed product.\n
    Shape Retention – The usage of Spandex in our socks provides extraordinary versatility. The strong, durable, and stretchable fibre helps keeping the socks in their best shape and helps them stretch/recover and "stay up".\n
    Eco-Friendly & Skin Friendly– All our socks are made with dyed yarns manufactured using azo-free dyes. These dyes are eco-friendly and eliminate the use of toxic compounds, making them sustainable and better for human skin.\n
              `,
    count: 89,
    price: 313,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/bal9_1.jpg" },
      { path: "/images/products/womenClothing/bal9_2.jpg" },
      { path: "/images/products/womenClothing/bal9_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "multi-color" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Cartoon" },
      { key: "Brands", value: "BALENZIA" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "GlobyCraft Pack of 3 Parallel Striped Palazzo Pant for Women & Girls",
    description: `
    Material: Skin-friendly, Colorful, Smooth, Good Quality Fabric, Makes You Feel Comfortable And Flowing When You Wear It\n
    Occasion: Suitable for everyday wear, vacation, work, clubs, and the street. Easy to pair with high heels and a solid-colored base t-shirt. You Are Going To Love These Fashionable Pants.It Is Versatile Enough To Be Worn Throughout All Seasons\n
    Measurement: Length-38'', Waist ( Free Size-Fit to the waist 28''-36'' ), Inseam length- 25'', Crotch depth-14''\n
    Wide-Legged Silhouette And High-Rise Waist, Extreme Stretch Elastic To Comfy. Palazzos with flared legs, wide legs, and lounge pants with bohemian style.\n
    Mid-Rise Palazzo Pants, Casual And Natural.It Features the Trendiest Striped Print of the Season, Is Casual In Nature, Gives More Line Sense, And Displays a Tall And Slim Figure.By the way. Additionally, it is versatile and fits the majority of women. It's ideal for women to wear in the spring, fall, and summer. photographic effect: “Product color might slightly vary due to photographic lighting sources or your monitor settings”.\n
              `,
    count: 89,
    price: 497,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/str1_1.jpg" },
      { path: "/images/products/womenClothing/str1_2.jpg" },
      { path: "/images/products/womenClothing/str1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "multi-color" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
  },
  {
    name: "OM SAI LATEST CREATION Women Striped Top with Half Sleeves for Office Wear, Casual Wear, Under 399 Top for Women/Girls Top",
    description: `
    Care Instructions: Machine Wash\n
    Fit Type: Regular Fit\n
    Care Instructions: Hand Wash Only\n
    Fabric: Lycra || style: Casual Combo top\n
    Team it with a pair of leggings, jeans, shorts and flats to step out in style\n
              `,
    count: 89,
    price: 299,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/str2_1.jpg" },
      { path: "/images/products/womenClothing/str2_2.jpg" },
      { path: "/images/products/womenClothing/str2_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "pink" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
  },
  {
    name: "Enamor Athleisure Relaxed Fit Short Sleeve Round Neck Antimicrobial Finish Breathable Stretch Cotton Activewear Sports Tshirt for Women-A3S1",
    description: `
    Sweat-wicking Ability: Quickly absorbs and evaporates sweat from the body to keep you dry and comfortable.\n
    4-way Stretch Cotton Jersey: This lightweight, soft, and breathable fabric will keep you comfortable as you workout. The 4-way stretch provides freedom of movement and shape retention.\n
    Antimicrobial Finish: Controls odour-causing bacteria and keeps you fresh all day.\n
    Relaxed Fit: This fit gives you the ultimate feeling of unrestricted freedom. It sits away from your body, allowing maximum room to move as you go about your day.\n
    Side Slits: Allows ease of movement\n
              `,
    count: 89,
    price: 1119,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/str3_1.jpg" },
      { path: "/images/products/womenClothing/str3_2.jpg" },
      { path: "/images/products/womenClothing/str3_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "beige" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
  },
  {
    name: "OM SAI LATEST CREATION Women Striped Top with Half Sleeves for Office Wear, Casual Wear, Under 399 Top for Women/Girls Top",
    description: `
    Fabric: Cotton (100% Cotton)\n
    Style:- Length: 26(inch) | Pattern: Striped | Occasion: Casual | Type: Pleated| Sleeve Type: Half Sleeve (Regular Sleeve) | Color: Cream\n
    Packet contain: 1 Readymade Top\n
    Declaration: Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.\n
    Remark: Accessories are just for presentation, it is not included with this product.\n
              `,
    count: 89,
    price: 499,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/str4_1.jpg" },
      { path: "/images/products/womenClothing/str4_2.jpg" },
      { path: "/images/products/womenClothing/str4_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "beige" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Seller", value: "POSEIDON BHL" },
    ],
  },
  {
    name: "Harpa Women's Regular Fit Top",
    description: `
    Hand Wash\n
    Body Blouse\n
    Long Sleeve; V-Neck\n
    Closure Type: Button; Fit Type: Regular Fit\n
              `,
    count: 89,
    price: 407,
    category: "Women's Clothing",
    sales: 76,
    images: [
      { path: "/images/products/womenClothing/str5_1.jpg" },
      { path: "/images/products/womenClothing/str5_2.jpg" },
      { path: "/images/products/womenClothing/str5_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "Material", value: "Cotton" },
      { key: "Pattern", value: "Striped" },
      { key: "Seller", value: "SIRIL" },
    ],
  },
  {
    name: "STRIFF Adjustable Laptop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand(Black)",
    description: `
    FOLDABLE, PORTABLE, LIGHTWEIGHT: The Carnation Laptop Stand has a thin, hard plastic frame. It can be easily folded and carried around. Durable enough to withstand the weight of up to 55 lbs (25kg).\n
    OPTIMIZED FOR AIR VENTILATION: To prevent your computer from overheating, the laptop stand has large cut-out vents and adjustable height options that allow air to circulate from all sides. Well vented.\n
    ADJUSTABLE HEIGHT 7 OPTIONS: Raise your laptop or tablet to any of seven adjustable heights from 2.7” to 6.7” so you can get a clearer, glare-free view while getting neck pain relief and preventing eye strain.\n
    PHONE STAND, and PURE ERGONOMICS: Easily share the screen with those next to you. No constant reaching for your phone anymore. This means fewer distractions, better concentration. The new meaning of Ergonomic.\n
              `,
    count: 89,
    price: 299,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/str1_1.jpg" },
      { path: "/images/products/furniture/str1_2.jpg" },
      { path: "/images/products/furniture/str1_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "STRIFF" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "STRIFF Adjustable Laptop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand(White)",
    description: `
    FOLDABLE, PORTABLE, LIGHTWEIGHT: The Carnation Laptop Stand has a thin, hard plastic frame. It can be easily folded and carried around. Durable enough to withstand the weight of up to 55 lbs (25kg).\n
    OPTIMIZED FOR AIR VENTILATION: To prevent your computer from overheating, the laptop stand has large cut-out vents and adjustable height options that allow air to circulate from all sides. Well vented.\n
    ADJUSTABLE HEIGHT 7 OPTIONS: Raise your laptop or tablet to any of seven adjustable heights from 2.7” to 6.7” so you can get a clearer, glare-free view while getting neck pain relief and preventing eye strain.\n
    PHONE STAND, and PURE ERGONOMICS: Easily share the screen with those next to you. No constant reaching for your phone anymore. This means fewer distractions, better concentration. The new meaning of Ergonomic.\n
              `,
    count: 89,
    price: 349,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/str2_1.jpg" },
      { path: "/images/products/furniture/str2_2.jpg" },
      { path: "/images/products/furniture/str2_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "STRIFF" },
      { key: "color", value: "white" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "BuyGlobal_Store" },
    ],
  },
  {
    name: "STRIFF Laptop Stand for Desk, Ergonomic Computer Stand Laptop Riser, Phone and Tablet Stand for Desk, Portable Laptop Elevator Holder Compatible with MacBook, Laptop,Tablet (Silver)",
    description: `
    A lifestyle brand with a mission to create a wide range of cutting-edge tech products, allowing people to make the most of a multitude of different activities\n
    Aluminum Alloy Portable Foldable Holder for Notebooks & Tablets Multiple uses Multi-purpose foldable laptop riser Not only for laptops but also for mobile phones, iPad books, etc\n
    Item Package Weight: 280.0 grams\n
    Lightweight, fold-up design can be opened or closed the laptop stand in just 1 second; saves time and space when moving around the home, school, or work; also includes a small drawstring bag\n
              `,
    count: 89,
    price: 399,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/str3_1.jpg" },
      { path: "/images/products/furniture/str3_2.jpg" },
      { path: "/images/products/furniture/str3_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "STRIFF" },
      { key: "color", value: "silver" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "STRIFF Foldable Portable Laptop/Tablet Tabletop Stand with 6 Level Height & Angle Adjustment & Air Ventilation, Anti-Slip Silicone Pads, for All Laptops, Tablets, MacBook 15.6-Inch(Black)",
    description: `
    A lifestyle brand with a mission to create a wide range of cutting-edge tech products, allowing people to make the most of a multitude of different activities\n
    Aluminum Alloy Portable Foldable Holder for Notebooks & Tablets Multiple uses Multi-purpose foldable laptop riser Not only for laptops but also for mobile phones, iPad books, etc\n
    Item Package Weight: 280.0 grams\n
    Lightweight, fold-up design can be opened or closed the laptop stand in just 1 second; saves time and space when moving around the home, school, or work; also includes a small drawstring bag\n
              `,
    count: 89,
    price: 499,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/str4_1.jpg" },
      { path: "/images/products/furniture/str4_2.jpg" },
      { path: "/images/products/furniture/str4_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "STRIFF" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "STRIFF Laptop Stand for Desk, Ergonomic Computer Stand Laptop Riser, Phone and Tablet Stand for Desk, Portable Laptop Elevator Holder Compatible with MacBook, Laptop,Tablet (Blackish)",
    description: `
    ✅【8 Angles of Height Adjusment】: Fits all laptop stand and tablet. Solid 8 angles of height adjusment for different heights demands. The stand riser raise the laptop screen to your eye level eyeline, to avoid neck strain.\n
    ✅【Adjustable Versatile Stand】: Built-in legs which can adjust its heigh and can be stable enough to place a keyboard and it won't spill; Built-in phone holder, you can release your hand when watching. The design is good enough to keeps your desk tidy.\n
    ✅【Ergonomic Design】: Ergonomic design which adjust posture to help you ease pains in shoulder and waist, prevent eyestrain and even eliminate hand fatigue. The laptop stand enables you to use my laptop more comfortably.\n
    ✅【Air Ventilation】: Red rubber tips and panel with ventilation holes helps reduce the operating temperature of your laptop and allows for steady airflow around it. Anti-slip rubber pads protect your device and desk from scratches and keep the stand stable.\n
    ✅【Foldable&Portable Design】: Easily folds down to be completely flat. Built-in phone holder and Built-in legs are folding as well. So super easy to store and convenient to carry as it takes up very little space. Super Easy to use and fold.\n
              `,
    count: 89,
    price: 249,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/str5_1.jpg" },
      { path: "/images/products/furniture/str5_2.jpg" },
      { path: "/images/products/furniture/str5_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "STRIFF" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "Used" },
      { key: "Seller", value: "Furniture factory" },
    ],
  },
  {
    name: "STRIFF Laptop Stand Adjustable Laptop Computer Stand Multi-Angle Stand Phone Stand Portable Foldable Laptop Riser Notebook Holder Stand Compatible for 9 to 15.6” Laptops Black(Black)",
    description: `
    Adjustable - Eight heights can be freely adjusted from 5.5inch to 7.0inch. You can straighten your waist and relieve cervical and neck fatigue, feel comfortable to work.\n
    Durable - Made of lightweight ABS with non-slip rubber surface pads to keep laptop in place, strong and reliable, not easy to fade. Compatible with all laptops 10-15.6”, durable enough to support up to 44 lbs (20kg).\n
    Portable - Foldable and easy to place. Convenient to carry and use at home, the office or somewhere else.\n
    Hollow design - Reduce the contact area with the desktop, which provides a cavity and is more conducive to heat dissipation.\n
              `,
    count: 89,
    price: 299,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/str6_1.jpg" },
      { path: "/images/products/furniture/str6_2.jpg" },
      { path: "/images/products/furniture/str6_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "STRIFF" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "Used" },
      { key: "Seller", value: "Plantex-Globalbees" },
    ],
  },
  {
    name: "STRIFF Laptop Stand, Invisible Lightweight Computer Stand, Portable Foldable Holder Fit ONLY for MacBook, Air, MacBook Pro, Ipad and Tablets(Black)",
    description: `
    [Ultra Portable] The STRIFF Laptop Stand weighs a mere 3 oz. and is only 1/10” thick - it’s compactness born of innovation. Since STRIFF is literally light as paper and slim as a coin, it’s a laptop stand perfect for mobile working\n
    [Unique Material] Constructed with special PU and fiberglass material, the STRIFF Laptop Stand is strong and stable enough to hold up to 19 lbs., despite its ultra-slim size. The built-in magnets allow you to unfold the laptop stand quickly and securely attach it to a flat surface\n
    [Ergonomic Design] Conceived and constructed with the express purpose of giving laptop users greater comfort, the STRIFF Laptop Stand is equipped with two elevation adjustments that make it easy to find your ideal height and posture: the high setting (3-inches) is perfect for a sitting posture, and the low setting (3-inches) is great for a standing posture. This flexibility helps prevent neck and shoulder pain while looking at the screen.\n
    [Convenient, Secure Workstation] Special removable adhesive means this laptop stand conveniently attaches and detaches from your laptop without leaving a single mark or scratch, reattaching again and again with the same strength, effectiveness and sensitivity. The stand is compatible with a wide range of laptops up to 15.7” - including MacBook Air and Pro.\n
    Reusable-Our stand’s removable glue lets it conveniently attach and detach from your laptop without leaving a single mark or scratch, re-attaching with the same strong effectiveness.it only need you washed and dried, it will restore its viscosity and can be reused indefinitely. Plus, We don't recommend this stand for laptops which have vents on the bottom where this would block airflow\n
              `,
    count: 89,
    price: 382,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/str7_1.jpg" },
      { path: "/images/products/furniture/str7_2.jpg" },
      { path: "/images/products/furniture/str7_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "STRIFF" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "Used" },
      { key: "Seller", value: "Plantex-Globalbees" },
    ],
  },
  {
    name: "STRIFF Laptop Stand, Invisible Lightweight Computer Stand, Portable Foldable Holder Fit ONLY for MacBook, Air, MacBook Pro, Ipad and Tablets(Grey)",
    description: `
    [Ultra Portable] The STRIFF Laptop Stand weighs a mere 3 oz. and is only 1/10” thick - it’s compactness born of innovation. Since STRIFF is literally light as paper and slim as a coin, it’s a laptop stand perfect for mobile working\n
    [Unique Material] Constructed with special PU and fiberglass material, the STRIFF Laptop Stand is strong and stable enough to hold up to 19 lbs., despite its ultra-slim size. The built-in magnets allow you to unfold the laptop stand quickly and securely attach it to a flat surface\n
    [Ergonomic Design] Conceived and constructed with the express purpose of giving laptop users greater comfort, the STRIFF Laptop Stand is equipped with two elevation adjustments that make it easy to find your ideal height and posture: the high setting (3-inches) is perfect for a sitting posture, and the low setting (3-inches) is great for a standing posture. This flexibility helps prevent neck and shoulder pain while looking at the screen.\n
    [Convenient, Secure Workstation] Special removable adhesive means this laptop stand conveniently attaches and detaches from your laptop without leaving a single mark or scratch, reattaching again and again with the same strength, effectiveness and sensitivity. The stand is compatible with a wide range of laptops up to 15.7” - including MacBook Air and Pro.\n
    Reusable-Our stand’s removable glue lets it conveniently attach and detach from your laptop without leaving a single mark or scratch, re-attaching with the same strong effectiveness.it only need you washed and dried, it will restore its viscosity and can be reused indefinitely. Plus, We don't recommend this stand for laptops which have vents on the bottom where this would block airflow\n
              `,
    count: 89,
    price: 404,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/str8_1.jpg" },
      { path: "/images/products/furniture/str8_2.jpg" },
      { path: "/images/products/furniture/str8_3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "STRIFF" },
      { key: "color", value: "grey" },
      { key: "Item Condition", value: "Used" },
      { key: "Seller", value: "Plantex-Globalbees" },
    ],
  },
  {
    name: "Nilkamal Freedom Mini Medium (FMM) Plastic Cabinet for Storage| Space & Clothes Organizer| Shelves| Cupboard| Almari| Wardrobe| Living Room| Adult & Kids| Multipurpose for Home Kitchen & Office",
    description: `
    Nilkamal FMM Storage Cabinet Dimensions: (W x D x H) 59.5 x 35.5 x 123 cm\n
    Primary Material: Plastic; Color: Weather Brown, Style: Contemporary ; It is divided into multiple separate compartments in a neat pattern so that various items can be sorted according to their usage and are easy to be found\n
    Assembly Required: The product requires basic assembly and comes with assembly instructions\n
    Number of Shelves: 4; Can be used anywhere in house; Multipurpose corner cabinet , Care & Instructions : Wipe with clean dry cloth\n
              `,
    count: 89,
    price: 4699,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik1_1.jpg" },
      { path: "/images/products/furniture/nik1_2.jpg" },
      { path: "/images/products/furniture/nik1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Plantex-Globalbees" },
    ],
  },
  {
    name: "Nemi Agency Freedom Mini Medium Plastic Storage Cabinet Blue and Grey with 2 Doors",
    description: `
    Product Dimensions: Length (14 inches), Width (23 inches), Height (48 inches)\n
    Primary Material: Plastic\n
    Color: Dark Blue and Grey, Style: Modern\n
    Assembly Required: Product requires assembly and comes with assembly instructions\n
    Warranty: 6 month warranty on manufacturing defects\n
    Multi purpose storage solution. Two shelves for convenient storage.\n
              `,
    count: 89,
    price: 4760,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik2_1.jpg" },
      { path: "/images/products/furniture/nik2_2.jpg" },
      { path: "/images/products/furniture/nik2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "blue" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Plantex-Globalbees" },
    ],
  },
  {
    name: "Nilkamal Freedom Mini Medium FMM Plastic Storage For Living Room | Bedroom Cabinet Bright Red and Yellow",
    description: `
    This is a DIY (Do It Yourself) product assembly illustrations and video instructions refer to the video catalog page\n
    This product is protected by Transparency by Amazon, which verifies each unit’s authenticity and enables you to view set up and installation instructions of the product you have purchased\n
    Product Dimensions : Width ( cm) :59.5 , Height (cm) :123, Depth (cm) : 35.5\n
    Made of 100% Virgin Plastic: Provides the ultimate strength and durability to the product\n
    Safe and Non-Toxic: Highest quality of plastic is used in our products with rigorous safety tests\n
    High Load Bearing Capacity: Rigorously tested for safety and high-load bearing capacity\n
    Quick and Easy Assembly: Follow a few simple steps provided with the package to assemble and enjoy your product!\n
              `,
    count: 89,
    price: 4890,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik3_1.jpg" },
      { path: "/images/products/furniture/nik3_2.jpg" },
      { path: "/images/products/furniture/nik3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "red" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "ETrade Online" },
    ],
  },
  {
    name: "Nilkamal MULRACK3 Plastic Shoe Stand for Shoe Storage | Space Organizer | Shoe Rack | for Living Room Home & Office (Maroon)",
    description: `
    Neaten your space with the Multipurpose rack\n
    Durable plastic built for superior load bearing\n
    Three shelves provide adequate storage space\n
    Ideal for kitchen, washroom and laundry room\n
    Light, portable, and with a contemporary design\n
              `,
    count: 89,
    price: 1099,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik4_1.jpg" },
      { path: "/images/products/furniture/nik4_2.jpg" },
      { path: "/images/products/furniture/nik4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "maroon" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "ETrade Online" },
    ],
  },
  {
    name: "Nilkamal CENTBL2 Contemporary Center Trolley Coffee Table/Tea Table/Teapoy for Home/Living Room/Office & Outdoor. (Plastic)",
    description: `
    Material: 100% polypropylene material, Provides the ultimate strength and durability to the product.\n
    Safe and Non-Toxic: Only the highest quality of plastic is used in our products with rigorous safety tests.; High Load Bearing Capacity: Rigorously tested for safety and high-load bearing capacity.\n
    Quick and Easy Assembly: Follow a few simple steps provided with the package to assemble and enjoy your product!\n
    Easy to Clean: Simply Wipe Down with a Cloth and it will Shine as Good as New. Low Maintenance: Assured elimination of any hassles or stress with Nilkamal products. Made in India\n
    Item Type Name: Center Table; Top Material Type: Marble; Base Type: Legs; Warranty Description: 1 Year On Product; Special Features: Wheels;\n Assembly Instructions: Diy; Item Shape: Rectangle\n
              `,
    count: 89,
    price: 1249,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik5_1.jpg" },
      { path: "/images/products/furniture/nik5_2.jpg" },
      { path: "/images/products/furniture/nik5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "brown" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Nilkamal CENTBL2 Contemporary Center Trolley Coffee Table/Tea Table/Teapoy for Home/Living Room/Office & Outdoor. (Plastic)",
    description: `
    Material: 100% polypropylene material, Provides the ultimate strength and durability to the product.\n
    Safe and Non-Toxic: Only the highest quality of plastic is used in our products with rigorous safety tests.; High Load Bearing Capacity: Rigorously tested for safety and high-load bearing capacity.\n
    Quick and Easy Assembly: Follow a few simple steps provided with the package to assemble and enjoy your product!\n
    Easy to Clean: Simply Wipe Down with a Cloth and it will Shine as Good as New. Low Maintenance: Assured elimination of any hassles or stress with Nilkamal products. Made in India\n
    Item Type Name: Center Table; Top Material Type: Marble; Base Type: Legs; Warranty Description: 1 Year On Product; Special Features: Wheels;\n Assembly Instructions: Diy; Item Shape: Rectangle\n
              `,
    count: 89,
    price: 1249,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik6_1.jpg" },
      { path: "/images/products/furniture/nik6_2.jpg" },
      { path: "/images/products/furniture/nik6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "beige" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Nilkamal 3 Door Plastic Storage Corner Cabinet | Bathroom| Space & Clothes Organizer| Shelves | Living Room |Multipurpose for Home Kitchen & Office Use",
    description: `
    Product Dimensions: Length (14 inches), Width (11 inches), Height (34 inches)\n
    Primary Material: ABS Plastic\n
    Color: Ivory, Style: Modern\n
    Assembly Required: Product requires basic assembly and comes with assembly instructions\n
    Warranty: 6 months spare part replacement warranty\n
    Convenient storage solution for unused corners of the house\n
    Provides versatile storage solution for small miscellaneous items\n
    2 sides of the cabinet are empty and to be mounted against a corner wall only\n
              `,
    count: 89,
    price: 1949,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik7_1.jpg" },
      { path: "/images/products/furniture/nik7_2.jpg" },
      { path: "/images/products/furniture/nik7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "white" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Nilkamal 3 Door Plastic Storage Corner Cabinet | Bathroom| Space & Clothes Organizer| Shelves | Living Room |Multipurpose for Home Kitchen & Office Use",
    description: `
    Product Dimensions: Length (14 inches), Width (11 inches), Height (34 inches)\n
    Primary Material: ABS Plastic\n
    Color: Ivory, Style: Modern\n
    Assembly Required: Product requires basic assembly and comes with assembly instructions\n
    Warranty: 6 months spare part replacement warranty\n
    Convenient storage solution for unused corners of the house\n
    Provides versatile storage solution for small miscellaneous items\n
    2 sides of the cabinet are empty and to be mounted against a corner wall only\n
              `,
    count: 89,
    price: 1949,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik8_1.jpg" },
      { path: "/images/products/furniture/nik8_2.jpg" },
      { path: "/images/products/furniture/nik8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "maroon" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Nilkamal NS09SS Plastic Mid Back with Arm Chair | Chairs for Home| Dining Room| Bedroom| Kitchen| Living Room| Office - Outdoor - Garden | Dust Free |100% Polypropylene Stackable Chairs (Bright Red)",
    description: `
    Product Dimensions : Depth : 54 CM Height : 78.2 CM Width : 60 CM\n
    Material: 100% Polypropylene Material :: Pattern: Glossy Design :: Style: Contemporary.\n
    No Assembly Required: The product is delivered in a pre-assembled state\n
    Warranty: 1 year on product; Primary Material: Plastic\n
    Is Assembly Required: False; Back Style: Solid Back; Warranty Description: 6 Month Warranty On Manufacturing Defects; Form Factor: Loveseat;\n Assembly Instructions: Already Assembled\n
              `,
    count: 89,
    price: 1186,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik9_1.jpg" },
      { path: "/images/products/furniture/nik9_2.jpg" },
      { path: "/images/products/furniture/nik9_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "red" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "ETrade Online" },
    ],
  },
  {
    name: "Nilkamal NS09SS Plastic Mid Back with Arm Chair | Chairs for Home| Dining Room| Bedroom| Kitchen| Living Room| Office - Outdoor - Garden | Dust Free |100% Polypropylene Stackable Chairs (Bright Black)",
    description: `
    Product Dimensions : Depth : 54 CM Height : 78.2 CM Width : 60 CM\n
    Material: 100% Polypropylene Material :: Pattern: Glossy Design :: Style: Contemporary.\n
    No Assembly Required: The product is delivered in a pre-assembled state\n
    Warranty: 1 year on product; Primary Material: Plastic\n
    Is Assembly Required: False; Back Style: Solid Back; Warranty Description: 6 Month Warranty On Manufacturing Defects; Form Factor: Loveseat;\n Assembly Instructions: Already Assembled\n
              `,
    count: 89,
    price: 1699,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik10_1.jpg" },
      { path: "/images/products/furniture/nik10_2.jpg" },
      { path: "/images/products/furniture/nik10_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "TheGlobalGenie" },
    ],
  },
  {
    name: "Nilkamal Freedom Mini Small (FMS) DIY Plastic Cabinet for Storage| Space & Clothes Organizer| Shelves| Cupboard| Almari| Wardrobe| Living Room| Adult & Kids| Multipurpose for Home Kitchen & Office",
    description: `
    This is a DIY (Do It Yourself) product assembly illustrations and video instructions refer to the video catalog page\n
    This product is protected by Transparency by Amazon, which verifies each unit’s authenticity and enables you to view set up and installation instructions of the product you have purchased\n
    Product Dimensions : Width ( cm) :59 , Height (cm) :63.5, Depth (cm) : 35.\n
    Made of 100% Virgin Plastic: Provides the ultimate strength and durability to the product\n
    Safe and Non-Toxic: Highest quality of plastic is used in our products with rigorous safety tests\n
    High Load Bearing Capacity: Rigorously tested for safety and high-load bearing capacity\n
    Quick and Easy Assembly: Follow a few simple steps provided with the package to assemble and enjoy your product!\n
              `,
    count: 89,
    price: 2229,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik11_1.jpg" },
      { path: "/images/products/furniture/nik11_2.jpg" },
      { path: "/images/products/furniture/nik11_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "brown" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "ETrade Online" },
    ],
  },
  {
    name: "Nilkamal Freedom Mini Small (FMS) DIY Plastic Cabinet for Storage| Space & Clothes Organizer| Shelves| Cupboard| Almari| Wardrobe| Living Room| Adult & Kids| Multipurpose for Home Kitchen & Office",
    description: `
    This is a DIY (Do It Yourself) product assembly illustrations and video instructions refer to the video catalog page\n
    This product is protected by Transparency by Amazon, which verifies each unit’s authenticity and enables you to view set up and installation instructions of the product you have purchased\n
    Product Dimensions : Width ( cm) :59 , Height (cm) :63.5, Depth (cm) : 35.\n
    Made of 100% Virgin Plastic: Provides the ultimate strength and durability to the product\n
    Safe and Non-Toxic: Highest quality of plastic is used in our products with rigorous safety tests\n
    High Load Bearing Capacity: Rigorously tested for safety and high-load bearing capacity\n
    Quick and Easy Assembly: Follow a few simple steps provided with the package to assemble and enjoy your product!\n
              `,
    count: 89,
    price: 2270,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik12_1.jpg" },
      { path: "/images/products/furniture/nik12_2.jpg" },
      { path: "/images/products/furniture/nik12_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "blue" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Nilkamal Freedom Mini Small (FMS) DIY Plastic Cabinet for Storage| Space & Clothes Organizer| Shelves| Cupboard| Almari| Wardrobe| Living Room| Adult & Kids| Multipurpose for Home Kitchen & Office",
    description: `
    This is a DIY (Do It Yourself) product assembly illustrations and video instructions refer to the video catalog page\n
    This product is protected by Transparency by Amazon, which verifies each unit’s authenticity and enables you to view set up and installation instructions of the product you have purchased\n
    Product Dimensions : Width ( cm) :59 , Height (cm) :63.5, Depth (cm) : 35.\n
    Made of 100% Virgin Plastic: Provides the ultimate strength and durability to the product\n
    Safe and Non-Toxic: Highest quality of plastic is used in our products with rigorous safety tests\n
    High Load Bearing Capacity: Rigorously tested for safety and high-load bearing capacity\n
    Quick and Easy Assembly: Follow a few simple steps provided with the package to assemble and enjoy your product!\n
              `,
    count: 89,
    price: 2270,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/nik13_1.jpg" },
      { path: "/images/products/furniture/nik13_2.jpg" },
      { path: "/images/products/furniture/nik13_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Nilkamal" },
      { key: "color", value: "red" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "duroflex Avalon Fabric Single Seater Recliner (Grey, DIY)",
    description: `
    High-quality and high resilient Duroflex foam is used for making the recliner. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    This recliner comes with additional polyfill cushion along the arm rest, which is suitable for long sitting duration.\n
    There are three reclining positions in this recliner. Sitting, reading and watching TV. Angles open are such that promotes the most ergonomically suitable position for longer sitting duration.\n
    The back seat is designed to give good neck and lumbar support.\n
    Polyester and Polypropylene mix fabric, which has successfully passed BS EN ISO 12947; 105; 12945, 13937 standards for abrasion resistance, colour fading prevention, pilling resistance; resistance to tear respectively.\n
              `,
    count: 89,
    price: 15980,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro1_1.jpg" },
      { path: "/images/products/furniture/duro1_2.jpg" },
      { path: "/images/products/furniture/duro1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "grey" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Furniture factory" },
    ],
  },
  {
    name: "duroflex Avalon Fabric Single Seater Recliner (Beige, DIY)",
    description: `
    High-quality and high resilient Duroflex foam is used for making the recliner. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    This recliner comes with additional polyfill cushion along the arm rest, which is suitable for long sitting duration.\n
    There are three reclining positions in this recliner. Sitting, reading and watching TV. Angles open are such that promotes the most ergonomically suitable position for longer sitting duration.\n
    The back seat is designed to give good neck and lumbar support.\n
    Polyester and Polypropylene mix fabric, which has successfully passed BS EN ISO 12947; 105; 12945, 13937 standards for abrasion resistance, colour fading prevention, pilling resistance; resistance to tear respectively.\n
              `,
    count: 89,
    price: 15980,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro2_1.jpg" },
      { path: "/images/products/furniture/duro2_2.jpg" },
      { path: "/images/products/furniture/duro2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "beige" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "duroflex Avalon Fabric Single Seater Recliner in Saddle Brown, DIY",
    description: `
    High-quality and high resilient Duroflex foam is used for making the recliner. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    This recliner comes with additional polyfill cushion along the arm rest, which is suitable for long sitting duration.\n
    There are three reclining positions in this recliner. Sitting, reading and watching TV. Angles open are such that promotes the most ergonomically suitable position for longer sitting duration.\n
    The back seat is designed to give good neck and lumbar support.\n
    Polyester and Polypropylene mix fabric, which has successfully passed BS EN ISO 12947; 105; 12945, 13937 standards for abrasion resistance, colour fading prevention, pilling resistance; resistance to tear respectively.\n
              `,
    count: 89,
    price: 15980,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro3_1.jpg" },
      { path: "/images/products/furniture/duro3_2.jpg" },
      { path: "/images/products/furniture/duro3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "brown" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Furniture factory" },
    ],
  },
  {
    name: "duroflex Avalon Fabric Single Seater Recliner in Twilight Blue Colour",
    description: `
    High-quality and high resilient Duroflex foam is used for making the recliner. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    This recliner comes with additional polyfill cushion along the arm rest, which is suitable for long sitting duration.\n
    There are three reclining positions in this recliner. Sitting, reading and watching TV. Angles open are such that promotes the most ergonomically suitable position for longer sitting duration.\n
    The back seat is designed to give good neck and lumbar support.\n
    Polyester and Polypropylene mix fabric, which has successfully passed BS EN ISO 12947; 105; 12945, 13937 standards for abrasion resistance, colour fading prevention, pilling resistance; resistance to tear respectively.\n
              `,
    count: 89,
    price: 15980,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro4_1.jpg" },
      { path: "/images/products/furniture/duro4_2.jpg" },
      { path: "/images/products/furniture/duro4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "blue" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Furniture factory" },
    ],
  },
  {
    name: "duroflex Ease Fabric Sofa (Brown, 2 Seater)",
    description: `
    The seat and backrest comes with a high elastic nylon webbing for a greater back support and comfort.\n
    High-quality and high resilient Duroflex foam is used for making the sofa. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    Fabric is made up of Polyester and Polypropylene mix, it has successfully passed BS EN ISO 12947; 105; 12945 standards for abrasion resistance, colour fading prevention, pilling resistance respectively.\n
    Sofa has successfully passed EN 12520 testing standards.\n
    The combined back and seat durability test have been conducted for more than 25000 cycles.\n
    DIY(Do-It-Yourself) installation: The Ease Sofa can be self set-up with utmost ease.\n
              `,
    count: 89,
    price: 12662,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro5_1.jpg" },
      { path: "/images/products/furniture/duro5_2.jpg" },
      { path: "/images/products/furniture/duro5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "brown" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "duroflex Ease Fabric Sofa (Beige, 2 Seater)",
    description: `
    The seat and backrest comes with a high elastic nylon webbing for a greater back support and comfort.\n
    High-quality and high resilient Duroflex foam is used for making the sofa. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    Fabric is made up of Polyester and Polypropylene mix, it has successfully passed BS EN ISO 12947; 105; 12945 standards for abrasion resistance, colour fading prevention, pilling resistance respectively.\n
    Sofa has successfully passed EN 12520 testing standards.\n
    The combined back and seat durability test have been conducted for more than 25000 cycles.\n
    DIY(Do-It-Yourself) installation: The Ease Sofa can be self set-up with utmost ease.\n
              `,
    count: 99,
    price: 12662,
    category: "Furniture",
    sales: 56,
    images: [
      { path: "/images/products/furniture/duro6_1.jpg" },
      { path: "/images/products/furniture/duro6_2.jpg" },
      { path: "/images/products/furniture/duro6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "beige" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Furniture factory" },
    ],
  },
  {
    name: "duroflex Ease 2 Seater Fabric Sofa in Blue Colour",
    description: `
    The seat and backrest comes with a high elastic nylon webbing for a greater back support and comfort.\n
    High-quality and high resilient Duroflex foam is used for making the sofa. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    Fabric is made up of Polyester and Polypropylene mix, it has successfully passed BS EN ISO 12947; 105; 12945 standards for abrasion resistance, colour fading prevention, pilling resistance respectively.\n
    Sofa has successfully passed EN 12520 testing standards.\n
    The combined back and seat durability test have been conducted for more than 25000 cycles.\n
    DIY(Do-It-Yourself) installation: The Ease Sofa can be self set-up with utmost ease.\n
              `,
    count: 89,
    price: 12662,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro7_1.jpg" },
      { path: "/images/products/furniture/duro7_2.jpg" },
      { path: "/images/products/furniture/duro7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "blue" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "duroflex Ease Fabric Sofa (Grey, 2 Seater)",
    description: `
    The seat and backrest comes with a high elastic nylon webbing for a greater back support and comfort.\n
    High-quality and high resilient Duroflex foam is used for making the sofa. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    Fabric is made up of Polyester and Polypropylene mix, it has successfully passed BS EN ISO 12947; 105; 12945 standards for abrasion resistance, colour fading prevention, pilling resistance respectively.\n
    Sofa has successfully passed EN 12520 testing standards.\n
    The combined back and seat durability test have been conducted for more than 25000 cycles.\n
    DIY(Do-It-Yourself) installation: The Ease Sofa can be self set-up with utmost ease.\n
              `,
    count: 89,
    price: 12662,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro8_1.jpg" },
      { path: "/images/products/furniture/duro8_2.jpg" },
      { path: "/images/products/furniture/duro8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "grey" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Plantex-Globalbees" },
    ],
  },
  {
    name: "duroflex Utopia 1 Seater Fabric Sofa in Yellow Colour",
    description: `
    The seat and backrest comes with a high elastic nylon webbing for a greater back support and comfort.\n
    High-quality and high resilient Duroflex foam is used for making the sofa. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    Fabric is made up of Polyester and Polypropylene mix, it has successfully passed BS EN ISO 12947; 105; 12945 standards for abrasion resistance, colour fading prevention, pilling resistance respectively.\n
    Sofa has successfully passed EN 12520 testing standards.\n
    The combined back and seat durability test have been conducted for more than 25000 cycles.\n
    DIY(Do-It-Yourself) installation: The Ease Sofa can be self set-up with utmost ease.\n
              `,
    count: 156,
    price: 11546,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro9_1.jpg" },
      { path: "/images/products/furniture/duro9_2.jpg" },
      { path: "/images/products/furniture/duro9_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "yellow" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "TheGlobalGenie" },
    ],
  },
  {
    name: "duroflex Utopia - 1 Seater Premium Fabric Sofa Set, (Biege)",
    description: `
    The seat and backrest comes with a high elastic nylon webbing for a greater back support and comfort.\n
    High-quality and high resilient Duroflex foam is used for making the sofa. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    Fabric is made up of Polyester and Polypropylene mix, it has successfully passed BS EN ISO 12947; 105; 12945 standards for abrasion resistance, colour fading prevention, pilling resistance respectively.\n
    Sofa has successfully passed EN 12520 testing standards.\n
    The combined back and seat durability test have been conducted for more than 25000 cycles.\n
    DIY(Do-It-Yourself) installation: The Ease Sofa can be self set-up with utmost ease.\n
              `,
    count: 156,
    price: 11546,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro10_1.jpg" },
      { path: "/images/products/furniture/duro10_2.jpg" },
      { path: "/images/products/furniture/duro10_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "beige" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Plantex-Globalbees" },
    ],
  },
  {
    name: "duroflex Utopia - 1 Seater Premium Fabric Sofa Set, (Blue)",
    description: `
    The seat and backrest comes with a high elastic nylon webbing for a greater back support and comfort.\n
    High-quality and high resilient Duroflex foam is used for making the sofa. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    Fabric is made up of Polyester and Polypropylene mix, it has successfully passed BS EN ISO 12947; 105; 12945 standards for abrasion resistance, colour fading prevention, pilling resistance respectively.\n
    Sofa has successfully passed EN 12520 testing standards.\n
    The combined back and seat durability test have been conducted for more than 25000 cycles.\n
    DIY(Do-It-Yourself) installation: The Ease Sofa can be self set-up with utmost ease.\n
              `,
    count: 156,
    price: 11546,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro11_1.jpg" },
      { path: "/images/products/furniture/duro11_2.jpg" },
      { path: "/images/products/furniture/duro11_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "blue" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "TheGlobalGenie" },
    ],
  },
  {
    name: "duroflex Utopia - 1 Seater Premium Fabric Sofa Set, (Grey)",
    description: `
    The seat and backrest comes with a high elastic nylon webbing for a greater back support and comfort.\n
    High-quality and high resilient Duroflex foam is used for making the sofa. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    Fabric is made up of Polyester and Polypropylene mix, it has successfully passed BS EN ISO 12947; 105; 12945 standards for abrasion resistance, colour fading prevention, pilling resistance respectively.\n
    Sofa has successfully passed EN 12520 testing standards.\n
    The combined back and seat durability test have been conducted for more than 25000 cycles.\n
    DIY(Do-It-Yourself) installation: The Ease Sofa can be self set-up with utmost ease.\n
              `,
    count: 156,
    price: 11546,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro12_1.jpg" },
      { path: "/images/products/furniture/duro12_2.jpg" },
      { path: "/images/products/furniture/duro12_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "grey" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "TheGlobalGenie" },
    ],
  },
  {
    name: "duroflex Elysian Fabric Single Seater Recliner (Beige)",
    description: `
    Frame is bench made with pine wood that's seasoned to prevent warping. The wood will hold its measurements when exposed to changes in humidity and temperature.\n
    High-quality and high resilient Duroflex foam is used for making the recliner. The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort.\n
    There are three reclining positions in this recliner. Sitting, reading and watching TV. Angles open are such that promotes the most ergonomically suitable position for longer sitting duration.\n
    The back seat is designed to give good neck and lumbar support.\n
    Polyester and Polypropylene mix fabric, which has successfully passed BS EN ISO 12947; 105; 12945, 13937 standards for abrasion resistance, colour fading prevention, pilling resistance; resistance to tear respectively.\n
              `,
    count: 156,
    price: 16449,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/duro13_1.jpg" },
      { path: "/images/products/furniture/duro13_2.jpg" },
      { path: "/images/products/furniture/duro13_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "duroflex" },
      { key: "color", value: "beige" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Plantex-Globalbees" },
    ],
  },
  {
    name: "Plantex GI Steel Self-Adhesive Multipurpose Bathroom Shelf with Hooks/Towel Holder/Rack/Bathroom Accessories-Wall Mount - Pack of 1 (Black,Powder Coated)",
    description: `
    𝗠𝗮𝘁𝗲𝗿𝗶𝗮𝗹: Plantex multipurpose shelf is constructed of GI steel material and 7 layers black powder coated process, that serves strong built - rust & corrosion-proof use.\n
    𝗠𝘂𝗹𝘁𝗶𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝘀𝗵𝗲𝗹𝗳: for bathroom or kitchen, it is multipurpose shelf can be used to put seasoning bottles, hang towels, paper towels. For bathroom storage, bathroom towel storage, toiletries can be put on bathroom shelves, such as shampoo, conditioner, shower gel,etc. Also perfect for bedroom, living room, office, room decorations etc.\n
    𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀: This wall mounted multipurpose organizer features 4 hooks for key holder, towels, leash hanging, coat & hat.\n
    𝗗𝗿𝗶𝗹𝗹-𝗳𝗿𝗲𝗲 𝗶𝗻𝘀𝘁𝗮𝗹𝗹𝗮𝘁𝗶𝗼𝗻: no drilling and damage to a wall and requires no additional tools. The packaging contains one piece of shelf with two adhesive stickers, just peel off the sticker cover and install. A powerful transparent adhesive hook that sticks to the surface for a long time, is more durable and stronger.\n
    𝗦𝗽𝗮𝗰𝗲 𝗦𝗮𝘃𝗲𝗿: Plantex bathroom steel shelf/rack/holder is available in size - (L) 27.5 X (W) 10 X (H) 11.5 cm, Easy to clean, its smooth surface can be easily cleaned with water or a dry cloth.Packaging contains 1 piece of wire shelf with hook (as shown in image).\n
    𝗣𝗹𝗮𝗻𝘁𝗲𝘅 is a brand that provides widest range of home improvement products. Our products are designed to ensure that you have the best experience possible when it comes to upgrading your home. Plantex strives to provide you with high-quality products that are easy on the wallet, and we are committed to helping customers find the perfect fit for their needs.\n
              `,
    count: 156,
    price: 379,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/plan1_1.jpg" },
      { path: "/images/products/furniture/plan1_2.jpg" },
      { path: "/images/products/furniture/plan1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Plantex" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Plantex-Globalbees" },
    ],
  },
  {
    name: "Plantex 2 Self-Adhesive Shelves for Corner Walls for Bathroom Organizer - Bathrom Corner Shelf with Magic Sticker (Black)",
    description: `
    𝐃𝐮𝐫𝐚𝐛𝐥𝐞 𝐌𝐚𝐭𝐞𝐫𝐢𝐚𝐥: This self-adhesive corner shelf is made of GI metal with 7-layers of rich black powder coating for trustable durability, longevity and anti-rusting properties.\n
    𝐒𝐦𝐚𝐫𝐭 𝐃𝐞𝐬𝐢𝐠𝐧: Plantex storage rack has wire bottom design that will drain the water and make the items dry quickly to avoid mildew and bacteria. The deep design and protective fence will prevent Items from falling down.\n
    𝐊𝐞𝐞𝐩 𝐘𝐨𝐮𝐫 𝐁𝐚𝐭𝐡𝐫𝐨𝐨𝐦 𝐎𝐫𝐠𝐚𝐧𝐢𝐳𝐞𝐝: The thick railing on the shelf ensures that it holds big objects. These bathroom shelves are designed for organizing your ideal corner spaces, ideal for storing your bath essentials like shampoo, body wash, cream, soap and more with its curved W-Shape.\n
    𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬: This storage organizer can be used in kitchen to store different kinds of sauces, oils bottles, jams & grain jars. Perfect multipurpose storage shelf for bathroom, kitchen and bedroom.\n
    𝐃𝐫𝐢𝐥𝐥-𝐟𝐫𝐞𝐞 𝐈𝐧𝐬𝐭𝐚𝐥𝐥𝐚𝐭𝐢𝐨𝐧: Packaging of this bathroom shelf includes magic stickers. These shelves can be by using the drill-free adhesive stickers, these powerful transparent adhesive hooks, that sticks to the surface for a long time, are more durable and stronger. Package contains 2 - Pieces of GI Metal corner/shelf with adhesive stickers inside. Packaging dimension is 27 cm (L) x 27 cm (W) x 6 cm (H).\n
              `,
    count: 156,
    price: 615,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/plan2_1.jpg" },
      { path: "/images/products/furniture/plan2_2.jpg" },
      { path: "/images/products/furniture/plan2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Plantex" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Plantex-Globalbees" },
    ],
  },
  {
    name: "Plantex Stainless Steel Folding Towel Rack for Bathroom/Towel Stand/Hanger/Bathroom Accessories(24 Inch-Chrome)",
    description: `
    𝐎𝐫𝐠𝐚𝐧𝐢𝐳𝐞 𝐘𝐨𝐮𝐫 𝐁𝐚𝐭𝐡𝐫𝐨𝐨𝐦 𝐰𝐢𝐭𝐡 𝐄𝐚𝐬𝐞: Say goodbye to bathroom clutter! The Plantex Stainless-Steel Folding Towel Rack (60 x 25 x 13 cm) is your solution for keeping your bathroom neat and tidy. It features 4 double cross towel hooks (4x2 = 8 hooks) for robes and towels, plus a swivel towel bar, providing you with a new level of organization.\n
    𝐁𝐮𝐢𝐥𝐭 𝐭𝐨 𝐋𝐚𝐬𝐭: Our towel rack is designed to serve you for the long haul. Towel stand crafted from high-quality stainless steel, it's resistant to rust and water damage, ensuring durability and longevity.\n
    𝐒𝐭𝐲𝐥𝐢𝐬𝐡 𝐚𝐧𝐝 𝐃𝐮𝐫𝐚𝐛𝐥𝐞 𝐃𝐞𝐬𝐢𝐠𝐧: The nickel chrome mirror finish not only adds a touch of elegance to your bathroom but also protects against corrosion, scratches, and rust, keeping your towel stand looking pristine.\n
    𝐒𝐩𝐚𝐜𝐞-𝐒𝐚𝐯𝐢𝐧𝐠 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧: Ideal for bathrooms with limited space, our foldable 24-inch towel rack provides extra storage for towels, washcloths, and more without taking up valuable space. No need to purchase separate towel rods, holders, napkin rings, or shelves.\n
    𝐄𝐚𝐬𝐲 𝐈𝐧𝐬𝐭𝐚𝐥𝐥𝐚𝐭𝐢𝐨𝐧: Installing our bathroom towel holder is a breeze. All necessary screws are included, making wall mounting a straightforward task. Enjoy hassle-free installation and start using your space-saving bath towel stand in no time.\n
    𝐄𝐚𝐬𝐲 𝐭𝐨 𝐂𝐥𝐞𝐚𝐧: Keeping your towel rack spotless is a breeze. Simply wipe it down with a wet cotton cloth, and it will look as good as new. Say goodbye to tedious cleaning routines.\n
    Transform your bathroom into an organized and stylish space with the Plantex High-Grade Stainless-Steel Folding Towel Rack. Get yours today and experience the convenience of a clutter-free bathroom!\n
              `,
    count: 156,
    price: 1275,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/plan3_1.jpg" },
      { path: "/images/products/furniture/plan3_2.jpg" },
      { path: "/images/products/furniture/plan3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Plantex" },
      { key: "color", value: "silver" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Plantex Dream Stainless Steel Napkin Ring/Towel Ring/Napkin Holder/Towel Hanger/Bathroom Accessories (Chrome) - Pack of 1",
    description: `
    Plantex napkin holder is made up of stainless steel material. it has strong and sturdy build to hold your napkins and towels. This hanger has to be wall mounted and has open design that helps to keep the hanging napkin/towel/clothes dry.\n
    Towel ring hanger stays and keeps products hanging. It is fixed off the counter-top and keeps your useful towel/napkin within your reach to use it as frequently as you wish to do\n
    It has a smooth chrome finish which gives it unique look and adds the quality of being rust-proof and corrosion-resistance. It can be used to hang towel, napkin and clothes in kitchen, bathroom and near wash basin area.\n
    Packaging of this towel holder contains 1 pieces of the napkin holder as shown in images along with its fitting materials - Made in India\n
    We recommend cleaning this napkin stand with wet and dry clothes periodically to avoid water and dust to settle on it. please avoid harsh chemicals while cleaning. Explore the wide selection of hand towel holders and other bathroom accessories at Plantex Bathroom Accessories.\n
    Plantex is a brand that provides the widest range of home improvement products. Our products are designed to ensure that you have the best experience possible when it comes to upgrading your home. Plantex strives to provide you with high-quality products that are easy on the wallet, and we are committee \n
              `,
    count: 89,
    price: 379,
    category: "Furniture",
    sales: 34,
    images: [
      { path: "/images/products/furniture/plan4_1.jpg" },
      { path: "/images/products/furniture/plan4_2.jpg" },
      { path: "/images/products/furniture/plan4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Plantex" },
      { key: "color", value: "silver" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Plantex Compact Hand Towel Ring/Holder for Bathroom/Washbasin and Napkin Holder Stand for Kitchen/Towel Hanger - (Pack of 1), Stainless Steel",
    description: `
    VERSATILE DESIGN: Nickel Chrome Finish Is Highly Reflective For A Mirror-Like Look That Works With Any Decorating Style. Made From High Grade Stainless Steel, Durable And Rust-Proof, Superior Quality Keeps Its Long-Term Mirror Finish And Shine\n
    PEACE-OF MIND: Designed For Hassle-Free Wall Mount Installation (Fitting Hardware Included)\n
    FLEXIBLE PLACEMENT: For Use In The Bath As Well As The Kitchen For Hanging Towels And More
    Anti-Rust, Moisture, Change In Temperature, Corrosion Resistant\n
    Package Contains: 1-Piece Napkin Ring And Fitting Hardware. Made In India\n
    Kindly check size before purchase\n
              `,
    count: 89,
    price: 327,
    category: "Furniture",
    sales: 79,
    images: [
      { path: "/images/products/furniture/plan5_1.jpg" },
      { path: "/images/products/furniture/plan5_2.jpg" },
      { path: "/images/products/furniture/plan5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Plantex" },
      { key: "color", value: "silver" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Plantex Heavy-Duty Stainless Steel Dual Folding Towel Rack/Holder/Towel Stand/Hanger/Towel Bar for Bathroom Accessories - 24 Inch Long (Chrome)",
    description: `
    𝐄𝐱𝐜𝐞𝐩𝐭𝐢𝐨𝐧𝐚𝐥 𝐁𝐮𝐢𝐥𝐝 𝐚𝐧𝐝 𝐒𝐢𝐳𝐞: Crafted with precision, Plantex Dual Towel Rack boasts a robust 24-inch structure. It's a premium stainless-steel creation provides sturdiness and durability. This piece stands out from ordinary towel racks, ensuring a long-lasting addition to your space. The nickel chrome mirror finish not only resists daily wear and tear but also repels fingerprints.\n
    𝐑𝐮𝐬𝐭-𝐏𝐫𝐨𝐨𝐟 𝐚𝐧𝐝 𝐄𝐧𝐝𝐮𝐫𝐢𝐧𝐠: This large towel hanger is entirely constructed from heavy-duty stainless steel towel bar, which means it's rust-proof and built for longevity. The boxed design lends a modern and sleek appearance to your space, making it a perfect fit for various interior styles.
    𝐅𝐨𝐥𝐝𝐚𝐛𝐥𝐞 𝐔𝐩𝐩𝐞𝐫 𝐒𝐡𝐞𝐥𝐟 𝐚𝐧𝐝 𝐋𝐨𝐰𝐞𝐫 𝐑𝐨𝐝: The innovative folding upper shelf and lower rod add a new dimension of versatility to your space.\n You can fold down the upper shelf to create extra space for larger items, such as bath products or toiletries. The foldable lower rod is perfect for hanging towels, robes, or other items and can be neatly tucked away when not in use, maintaining a clutter-free environment.\n
    𝐃𝐢𝐦𝐞𝐧𝐬𝐢𝐨𝐧𝐬: The dimensions of this towel rack stand are 60 cm in length, 22.5 cm in width, and 21.5 cm in height when fully functional. With this space-saving concept, you can make the most of your available space, adding both functionality and style to your home.\n
    𝐄𝐚𝐬𝐲 𝐈𝐧𝐬𝐭𝐚𝐥𝐥𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐌𝐚𝐢𝐧𝐭𝐞𝐧𝐚𝐧𝐜𝐞: We provide all the necessary hardware, including screws and nails, to make installation a breeze. To maintain its pristine look, simply wipe the rack with a soft cotton cloth to remove dust and moisture. It's an easy way to keep your space looking fresh and well-organized.\n
              `,
    count: 89,
    price: 849,
    category: "Furniture",
    sales: 45,
    images: [
      { path: "/images/products/furniture/plan6_1.jpg" },
      { path: "/images/products/furniture/plan6_2.jpg" },
      { path: "/images/products/furniture/plan6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Plantex" },
      { key: "color", value: "silver" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Plantex Stainless Steel 304 Grade Shelf for Bathroom/Kitchen Rack - Bathroom Accessories - (15X5 Inches-Chrome Finish)",
    description: `
    Plantex bathroom steel shelf is made from 304 grade stainless steel with an extra nickel-chrome mirror finished so as to keep it last longer - rust and corrosion resistance.\n
    Bathroom steel rack/shelf/holder is available in size - (l) 38 x (w) 13 x (h) 5.5 cm. Thick railing on the shelf ensures that all your items stay in place and won’t fall off.\n
    Space-saving organization, slim design fits in the smallest spaces and the material used in its manufacturing makes it perfect for wet environments like bathroom or washroom and kitchen. It can be also used as a display shelf or a storage shelf.\n
    This plantex stainless steel bathroom shelf is totally rustproof and corrosion-free because of additional layers of chrome finishing. Though it is advised not to use acids or strong chemicals for cleaning the material. Please use a dry cloth and avoid exposing the product to high-humidity areas for the product to serve its purpose.\n
    Plantex bathroom storage organizer has simply modern, and elegant design. Packaging contains 1 piece of rack (as shown in image) and fitting material – made in india.\n
    Avoid using acid and such hard chemicals. It is suggested to clean the shelf using wet and dry clothes periodically to keep the shelf shiny and durable.\n
              `,
    count: 89,
    price: 759,
    category: "Furniture",
    sales: 34,
    images: [
      { path: "/images/products/furniture/plan7_1.jpg" },
      { path: "/images/products/furniture/plan7_2.jpg" },
      { path: "/images/products/furniture/plan7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Plantex" },
      { key: "color", value: "silver" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Plantex Stainless Steel Folding Towel Rack/Towel Stand/Hanger Bathroom Accessories/Matt Finish (24 Inches-Matt)",
    description: `
    Multifunction - Foldable bathroom shelf, swivel towel bar and 4 towel hooks , Ideal for use in bedrooms, bathrooms, and closets\n
    Rustproof - Constructed of premium grade stainless steel, with added 18/10 Cr/Ni content to resist daily scratches, corrosion and tarnishing to protect against corrosion & rust,ensuring durability and dependability\n
    Matt Finish - Cover with matt finish, Build to resist daily scratches, corrosion and tarnishing\n
    Space saver and multi purpose. Modern Design - Give retouch to your bathroom. Easier to clean. Simply wipe the unit with a soft cotton cloth to remove dust and moisture\n
    Easy Installation - Hardware fittings pack included (screws and plugs). Made in India\n
              `,
    count: 89,
    price: 1199,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/plan8_1.jpg" },
      { path: "/images/products/furniture/plan8_2.jpg" },
      { path: "/images/products/furniture/plan8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Plantex" },
      { key: "color", value: "beige" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Plantex Stainless Steel Double Layer Shelf with Towel Holder Rod for Bathroom/Multipurpose Shelf for Wall Mount Bathroom Accessories (Chrome)",
    description: `
    𝗠𝗮𝘁𝗲𝗿𝗶𝗮𝗹: Plantex 3-tier rack/shelf is durable as stainless steel is used for its manufacturing. Additional nickel-chrome finishing makes it scratch resistance.\n
    𝗨𝘀𝗮𝗴𝗲: This 3-tier bathroom organizer can be used for storing toiletries and other sanitary accessories. It can easily store extra soaps, shampoo/perfume bottles, face washes, cosmetics and other similar accessories.\n
    𝗦𝗽𝗮𝗰𝗲 𝗦𝗮𝘃𝗲𝗿: Size of this stainless-steel bathroom organizer – 12(d) x 39(w) x 40.5(h) centimetres. This multipurpose rack can serve all your needs for storage solutions efficiently. You will not need to purchase towel holder and rob hooks additionally.\n
    𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀: Plantex rack comes with attached towel holder and 3 hooks to hang towel, clothes or other accessories. The hooks provided are made up of stainless steel and are sliding hooks.\n
    𝗪𝗶𝗱𝗲 𝗔𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻: This plantex 3-tier shelf/rack have a double shelf so you can also be used for various other storage usages. This one-piece will fulfil all your basic storage and organization needs for your kitchen & bathroom by storing cosmetics and other essential commodities.\n
    𝗣𝗮𝗰𝗸𝗮𝗴𝗲 𝗰𝗼𝗻𝘁𝗮𝗶𝗻𝘀: 1 piece of rack (as shown in image) and fitting material. You can start installing it as soon as you receive the bathroom shelf/rack.\n
    Plantex is a brand that provides widest range of home improvement products. Our products are designed to ensure that you have the best experience possible when it comes to upgrading your home. Plantex strives to provide you with high-quality products that are easy on the wallet, and we are committed to helping customers find the perfect fit for their needs.\n
              `,
    count: 89,
    price: 1449,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/plan9_1.jpg" },
      { path: "/images/products/furniture/plan9_2.jpg" },
      { path: "/images/products/furniture/plan9_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Plantex" },
      { key: "color", value: "silver" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Portronics My Buddy K Portable Laptop Stand with Adjustable Height, Foldable, OverHeating Protection for Laptops & MacBooks (Grey)",
    description: `
    [IMPROVES YOUR POSTURE]-Scientifically designed to help you balance you’re sitting posture keeping your back straight, neck relaxed and wrists natural even after long work hours\n
    [SOLID & LIGTHWEIGHT]-It is made up of Aluminium alloy and Silicone Rubber pad, making it tough yet lightweight and elegant. Get six angles to view the screen as per your convenience.\n
    [EASY TO CARRY]-Fully foldable, light weight at 260gm only and extremely handy to carry in your office bag\n
    [INCREASES LAPTOP LIFE]-Keeps your laptop cooler so the battery life and internal components life also improves\n
              `,
    count: 89,
    price: 449,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/port1_1.jpg" },
      { path: "/images/products/furniture/port1_2.jpg" },
      { path: "/images/products/furniture/port1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Portronics" },
      { key: "color", value: "grey" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Portronics My Buddy K Foldable Height Adjustable Metal Frame Laptop Stand, Ergonomic, OverHeating Protection for Laptops, All Laptops & MacBooks (Silver)",
    description: `
    [IMPROVES YOUR POSTURE]-Scientifically designed to help you balance you’re sitting posture keeping your back straight, neck relaxed and wrists natural even after long work hours\n
    [SOLID & LIGTHWEIGHT]-It is made up of Aluminium alloy and Silicone Rubber pad, making it tough yet lightweight and elegant. Get six angles to view the screen as per your convenience.\n
    [EASY TO CARRY]-Fully foldable, light weight at 260gm only and extremely handy to carry in your office bag\n
    [INCREASES LAPTOP LIFE]-Keeps your laptop cooler so the battery life and internal components life also improves\n
              `,
    count: 89,
    price: 549,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/port2_1.jpg" },
      { path: "/images/products/furniture/port2_2.jpg" },
      { path: "/images/products/furniture/port2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Portronics" },
      { key: "color", value: "silver" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Portronics My Buddy Hexa 5 Laptop Stand with Foldable & Ventilated Design, Ergonomic Elevation, Anti-Slip Silicon Pads and Lightweight Body for Upto 15.6” Laptops & MacBooks (Black)",
    description: `
    Ergonomic Elevation: Elevate your laptop screen to eye level, reducing strain on your neck and back, and improving overall posture for a comfortable and ergonomic working experience.\n
    Foldable Design: This laptop stand is easily foldable, enhancing its portability and allowing for convenient storage when not in use.\n
    Ventilated Structure: The stand's ventilated design promotes efficient heat dissipation, keeping your laptop cool during extended usage, which is especially beneficial for performance and longevity.\n
    Anti-Slip Silicon Pads: Featuring anti-slip silicon pads, this stand securely holds notebooks, preventing them from sliding or scratching, ensuring stability and protection.\n
    Lightweight Body: Constructed with lightweight ABS plastic, this laptop stand is highly portable, making it a convenient accessory for notebooks.\n
    Laptops Up to 15.6”: Designed to accommodate laptops and MacBooks up to 15.6 inches in size, this sleek black stand is an excellent choice for enhancing your workspace and productivity.\n
              `,
    count: 89,
    price: 249,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/port3_1.jpg" },
      { path: "/images/products/furniture/port3_2.jpg" },
      { path: "/images/products/furniture/port3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Portronics" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Portronics My Buddy Plus Adjustable Laptop Table with Built-in USB Cooling Fan, Foldable Legs, Adjustable Angle for Home, Office, Working, Gaming & Writing(Black)",
    description: `
    Elegant Portable: Very attractive design and finish. Legs can be folded completely to make it highly portable. Voltage: 5W. Connector:USB 2.0. Materials : MDF Board\n
    Strong and adjustable: Vertical Extension of Legs and Angular Adjustments (0-30 degrees) of Top, it has Soft Notches given on one side of flat-top to prevent things from rolling down when tilted\n
    Compatible: Size and strength ensures that all Laptop Models can be mounted on it, separate place to keep mouse with mouse-pad Laptop protection: Cooling and Noiseless Fan speed of 1800 RPM protects your laptop from Heating up while using\n
    Cleanliness and anti dust: Smooth Top can be wiped with moist Clean Cloth without damaging the top\n
    This cooling pad laptop table can be used with almost all models of laptops available today up to the size of 17 inches.\n
    Manufacturer Detail: Imported by Portronics Digital Pvt. Ltd. B-76, Wazirpur Industrial Area, New Delhi - 110052\n
              `,
    count: 89,
    price: 2099,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/port4_1.jpg" },
      { path: "/images/products/furniture/port4_2.jpg" },
      { path: "/images/products/furniture/port4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Portronics" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Portronics My Buddy Plus Adjustable Laptop Table with built-in USB Cooling Fan, Foldable Legs, Adjustable Angle for Home, Office, Working, Gaming & Writing(Brown)",
    description: `
    Elegant Portable: Very attractive design and finish. Legs can be folded completely to make it highly portable. Voltage: 5W. Connector:USB 2.0. Materials : MDF Board\n
    Strong and adjustable: Vertical Extension of Legs and Angular Adjustments (0-30 degrees) of Top, it has Soft Notches given on one side of flat-top to prevent things from rolling down when tilted\n
    Compatible: Size and strength ensures that all Laptop Models can be mounted on it, separate place to keep mouse with mouse-pad Laptop protection: Cooling and Noiseless Fan speed of 1800 RPM protects your laptop from Heating up while using\n
    Cleanliness and anti dust: Smooth Top can be wiped with moist Clean Cloth without damaging the top\n
    This cooling pad laptop table can be used with almost all models of laptops available today up to the size of 17 inches.\n
    Manufacturer Detail: Imported by Portronics Digital Pvt. Ltd. B-76, Wazirpur Industrial Area, New Delhi - 110052\n
              `,
    count: 89,
    price: 2099,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/port5_1.jpg" },
      { path: "/images/products/furniture/port5_2.jpg" },
      { path: "/images/products/furniture/port5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Portronics" },
      { key: "color", value: "brown" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Portronics My Buddy Plus Adjustable Laptop Table with built-in USB Cooling Fan, Foldable Legs, Adjustable Angle for Home, Office, Working, Gaming & Writing(Grey)",
    description: `
    Elegant Portable: Very attractive design and finish. Legs can be folded completely to make it highly portable. Voltage: 5W. Connector:USB 2.0. Materials : MDF Board\n
    Strong and adjustable: Vertical Extension of Legs and Angular Adjustments (0-30 degrees) of Top, it has Soft Notches given on one side of flat-top to prevent things from rolling down when tilted\n
    Compatible: Size and strength ensures that all Laptop Models can be mounted on it, separate place to keep mouse with mouse-pad Laptop protection: Cooling and Noiseless Fan speed of 1800 RPM protects your laptop from Heating up while using\n
    Cleanliness and anti dust: Smooth Top can be wiped with moist Clean Cloth without damaging the top\n
    This cooling pad laptop table can be used with almost all models of laptops available today up to the size of 17 inches.\n
    Manufacturer Detail: Imported by Portronics Digital Pvt. Ltd. B-76, Wazirpur Industrial Area, New Delhi - 110052\n
              `,
    count: 89,
    price: 2099,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/port6_1.jpg" },
      { path: "/images/products/furniture/port6_2.jpg" },
      { path: "/images/products/furniture/port6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Portronics" },
      { key: "color", value: "grey" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Portronics My Buddy K8 Portable Laptop Stand with 360° Rotating Base, Posture Support, Adjustable Height Upto 53 cms, Ergonomic Design(Silver)",
    description: `
    [CORRECT YOUR POSTURE] - You might be facing posture issues owing to long hours of sitting. And a prolonged situation might make things pretty bad. Having the right elevation is the key to good posture, and a side table does the job well.\n
    [ENHANCED COMFORT] - A very unlikely solution awaits you! A laptop stand that has been specifically designed to provide optimum comfort through its adjustable elevation levels of up to 53 cms to give you the required comfort while working.\n
    [BETTER COMPATIBILITY] - This laptop stand gives you improved compatibility. Now place laptops of any size from 10 to 17-inch laptops, and work carefree without the issues of lack of space on the stand.\n
    [ANTI-SLIP SILICONE PADS] - Worried about your laptop slipping off the stand? Good news for you! My Buddy K8 laptop stand comes with anti-slip silicone pads to hold your laptop in place and keep them from falling while you work seamlessly.\n
    [STURDY ALUMINIUM BUILD] - My Buddy K8 comes with a strong Aluminium body, making it all the more durable. Cheery on top, the laptop stand is designed to support up to 5 kg of weight.\n
    [VENTILATED DESIGN] - Better heat dissipation for your laptop through the naturally ventilated base of the My Buddy K8 laptop stand. Being fan-less, this laptop stand doesn’t make any noise.\n
    [ALL-ROUND WORKING] - Why worry about shifting the laptop if you decide to switch sides of the desk? With the 360-degree rotating base of My Buddy K8, just turn around the laptop stand and you are already on the other side!\n
              `,
    count: 89,
    price: 3399,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/port7_1.jpg" },
      { path: "/images/products/furniture/port7_2.jpg" },
      { path: "/images/products/furniture/port7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Portronics" },
      { key: "color", value: "silver" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Portronics My Buddy G Laptop Desk with Storage & Mouse Pad, Adjustable Height, Compatible Upto 15 inches Laptop(Black)",
    description: `
    [KEEPS YOUR DESK ORGANISED] : Get Ready to experience work from home like never before with My Buddy G Stand. Not only it provides solutions to hold your laptop firmly but it has a built-in mouse pad and a dedicated space for holding your phone and pen steadily.\n
    [7 ADJUSTABLE HEIGHT ANGLES] : Get ready for a seamless work experience with the Adjustable Height feature on My Buddy G Multipurpose Laptop Table. It has as many as 7 Adjustable height angles that allow you to work at your own comfort.\n
    [ANTI-SKID DESIGN] : This ergonomically designed laptop stand has been designed to ensure maximum protection to your expensive electronic gadgets from falling and getting damaged.\n
    [WORK AT YOUR OWN CONVENIENCE] : This Multipurpose table ensures maximum flexibility and it is perfect for use anywhere in the house or office. It can be used as a sofa/bedside table, laptop/computer desk, drawing, reading, phone holder.\n
    [PERFECT HEALTH COMPANION] : This laptop stand is made to help you avoid leaning your back while working and maintain an ideal body position.\n
    [DURABLE] : My Buddy G Multipurpose Laptop Stand is durable and made up of high-quality HIPS plastic material, which provides high tensile strength.\n
    [ENVIRONMENT-FRIENDLY] : My Buddy G stand is designed to promote an environment-friendly approach. It is made of HIPS plastic material that is recyclable.\n
              `,
    count: 89,
    price: 979,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/port8_1.jpg" },
      { path: "/images/products/furniture/port8_2.jpg" },
      { path: "/images/products/furniture/port8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Portronics" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Callas Computer Desk Home/Office Desk 29.52 Inch Height Writing Modern Simple Study Desk |Sturdy Small Desks for Small Spaces | (Engineered Wood)(Wallnut | CA-ST-02)",
    description: `
    MODERN SIMPLE DESK- This desk is made of a Engineering Wood classic color matching, Black and White colour looks simple and modern, size in L100" x W45" x H75"\n
    NO-WOBBLE - The desk is very sturdy, design with triangular junctions not only more stable but can protect your floor from scratch, suitable for working from home, or fit for students to study online. This modern desk won't shake when you use it.\n
    WIDE USES - Our desk can be used as a writing desk, study desk, home office desk, PC desk, Laptop desk, Gaming table, the desk can be used in bedroom, living room, dormitory, office, etc; Also, this computer desk can be used in outdoor activities, such as BBQ, baby shower, weddings, etc.\n
    The product must be assembled: DIY (Do-It-Yourself) assembly instructions and the necessary hardware are included in the package. In the assembly instructions, we also include a QR Code for an assembly video. To watch an assembly video, scan the code.\n
    CALLAS SAYS: If you have any questions or concerns regarding our desk, please don't hesitate to contact us. We will respond to you as soon as possible or within 24 hours and assist you in resolving the situation.\n
              `,
    count: 89,
    price: 1998,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal1_1.jpg" },
      { path: "/images/products/furniture/cal1_2.jpg" },
      { path: "/images/products/furniture/cal1_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Callas Modern Engineered Wood Study Table | Computer Desk | Modern Simple Desk | Writing Study Desk | Sturdy Desk For Home, Office, Bedroom, Living Room Size (Style No. 07 Brown & White)",
    description: `
    MODERN SIMPLE DESK- This desk is made of a Engineering Wood classic color matching, Black and White colour looks simple and modern, size in L100" x W45" x H75"\n
    NO-WOBBLE - The desk is very sturdy, design with triangular junctions not only more stable but can protect your floor from scratch, suitable for working from home, or fit for students to study online. This modern desk won't shake when you use it.\n
    WIDE USES - Our desk can be used as a writing desk, study desk, home office desk, PC desk, Laptop desk, Gaming table, the desk can be used in bedroom, living room, dormitory, office, etc; Also, this computer desk can be used in outdoor activities, such as BBQ, baby shower, weddings, etc.\n
    The product must be assembled: DIY (Do-It-Yourself) assembly instructions and the necessary hardware are included in the package. In the assembly instructions, we also include a QR Code for an assembly video. To watch an assembly video, scan the code.\n
    CALLAS SAYS: If you have any questions or concerns regarding our desk, please don't hesitate to contact us. We will respond to you as soon as possible or within 24 hours and assist you in resolving the situation.\n
              `,
    count: 89,
    price: 2099,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal2_1.jpg" },
      { path: "/images/products/furniture/cal2_2.jpg" },
      { path: "/images/products/furniture/cal2_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "brown" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Furniture factory" },
    ],
  },
  {
    name: "Callas Adjustable Wood Desktop Storage Organizer Display Shelf Rack | Spice Rack | Counter Top Bookcase Book Shelf | Home Décor Display & Storage Rack Cabinet Unit | BS-1-Brown",
    description: `
    Each shelf comprises 2 pieces that can be pushed together or pulled apart to alter the shape to fit various spaces; pieces can also be oriented at an angle.\n
    Can be used in the kitchen, bathroom, workshop, or office to organize spices, beauty products, tools, books, or office supplies.\n
    Save space on your office desktop and prevent in a mess in the office, kitchen, bathroom or bedroom. Perfect for storing books, office supplies, spice vases, plants, cherished keepsakes.\n
    This sturdy desktop storage shelf is made from Medium-density fibreboard, which is flat and sturdy.\n
    Variety of shapes can fit anywhere in the home.Our wood bookself open structure can be used as a display stand to display trophies, photos, and different assemblies can hold computer speakers, books, condiments, potted plants, shoes, bags, cosmetics, office supplies, etc.\n
              `,
    count: 89,
    price: 998,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal3_1.jpg" },
      { path: "/images/products/furniture/cal3_2.jpg" },
      { path: "/images/products/furniture/cal3_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "brown" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Furniture factory" },
    ],
  },
  {
    name: "Callas Adjustable Wood Desktop Storage Organizer Display Shelf Rack | Spice Rack | Counter Top Bookcase Book Shelf | Home Décor Display & Storage Rack Cabinet Unit | CA-BS1-Black",
    description: `
    Wooden expandable shelving units with a black finish.\n
    Each shelf comprises 2 pieces that can be pushed together or pulled apart to alter the shape to fit various spaces; pieces can also be oriented at an angle.
    Can be used in the kitchen, bathroom, workshop, or office to organize spices, beauty products, tools, books, or office supplies.\n
    Save space on your office desktop and prevent in a mess in the office, kitchen, bathroom or bedroom. Perfect for storing books, office supplies, spice vases, plants, cherished keepsakes.\n
    This sturdy desktop storage shelf is made from Medium-density fibreboard, which is flat and sturdy.\n
    The desk organizer bookself is environmentally friendly, which is waterproof and wear resistant for long lasting and reliable use.\n
    Variety of shapes can fit anywhere in the home.Our wood bookself open structure can be used as a display stand to display trophies, photos, and different assemblies can hold computer speakers, books, condiments, potted plants, shoes, bags, cosmetics, office supplies, etc.\n
    Assembly required. Composition of two main parts. The two parts can be adjusted to best fit your needs a great decoration at home or office.\n
    CUSTOMER SUPPORT: If for any reason you're not completely happy with your purchase- if it breaks, if it's damaged in shipping, or even if you change your mind - simply let us know and we will either replace it or will back your money, your choice!\n
              `,
    count: 89,
    price: 2099,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal4_1.jpg" },
      { path: "/images/products/furniture/cal4_2.jpg" },
      { path: "/images/products/furniture/cal4_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "BuyGlobal_Store" },
    ],
  },
  {
    name: "Callas Adjustable Wood Desktop Storage Organizer Display Shelf Rack | Spice Rack | Counter Top Bookcase Book Shelf | Home Décor Display & Storage Rack Cabinet Unit | CA-BS1-White",
    description: `
    Wooden expandable shelving units with a white finish.\n
    Each shelf comprises 2 pieces that can be pushed together or pulled apart to alter the shape to fit various spaces; pieces can also be oriented at an angle.
    Can be used in the kitchen, bathroom, workshop, or office to organize spices, beauty products, tools, books, or office supplies.\n
    Save space on your office desktop and prevent in a mess in the office, kitchen, bathroom or bedroom. Perfect for storing books, office supplies, spice vases, plants, cherished keepsakes.\n
    This sturdy desktop storage shelf is made from Medium-density fibreboard, which is flat and sturdy.\n
    The desk organizer bookself is environmentally friendly, which is waterproof and wear resistant for long lasting and reliable use.\n
    Variety of shapes can fit anywhere in the home.Our wood bookself open structure can be used as a display stand to display trophies, photos, and different assemblies can hold computer speakers, books, condiments, potted plants, shoes, bags, cosmetics, office supplies, etc.\n
    Assembly required. Composition of two main parts. The two parts can be adjusted to best fit your needs a great decoration at home or office.\n
    CUSTOMER SUPPORT: If for any reason you're not completely happy with your purchase- if it breaks, if it's damaged in shipping, or even if you change your mind - simply let us know and we will either replace it or will back your money, your choice!\n
              `,
    count: 89,
    price: 1099,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal5_1.jpg" },
      { path: "/images/products/furniture/cal5_2.jpg" },
      { path: "/images/products/furniture/cal5_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "white" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Furniture factory" },
    ],
  },
  {
    name: "Callas Engineered Wood Bookcase with Set of 3 Shelves | Books Storage Organizer for Kids | Multi-Purpose Shelves for Books Storage | Perfect for Home, Office, Play Schools & Kindergarten | BR-03-White",
    description: `
    Product Dimensions: Length (24.6 in / 62.5 cm), Width (9.25 in / 23.5 cm), Height (31.1 in / 79 cm)\n
    Primary Material: High grade Eurpoean standard E2 engineered wood - Particle board with pre-laminate\n
    Elegant finish that gives it a charming look and makes it easy to clean.\n
    Care Instructions: Wipe it clean with a dry cloth. Do not use water. Wipe any spills immediately.\n
    Assembly Required: The product requires assembly and comes with DIY (Do-It-Yourself) assembly instructions and the hardware to self assemble the product\n
              `,
    count: 89,
    price: 1488,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal6_1.jpg" },
      { path: "/images/products/furniture/cal6_2.jpg" },
      { path: "/images/products/furniture/cal6_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "white" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "BuyGlobal_Store" },
    ],
  },
  {
    name: "Callas Engineered Wood Bookcase with Set of 3 Shelves | Books Storage Organizer for Kids | Multi-Purpose Shelves for Books Storage | Perfect for Home, Office, Play Schools & Kindergarten | BR-03-Black",
    description: `
    Product Dimensions: Length (24.6 in / 62.5 cm), Width (9.25 in / 23.5 cm), Height (31.1 in / 79 cm)\n
    Primary Material: High grade Eurpoean standard E2 engineered wood - Particle board with pre-laminate\n
    Elegant finish that gives it a charming look and makes it easy to clean.\n
    Care Instructions: Wipe it clean with a dry cloth. Do not use water. Wipe any spills immediately.\n
    Assembly Required: The product requires assembly and comes with DIY (Do-It-Yourself) assembly instructions and the hardware to self assemble the product\n
              `,
    count: 89,
    price: 1448,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal7_1.jpg" },
      { path: "/images/products/furniture/cal7_2.jpg" },
      { path: "/images/products/furniture/cal7_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Callas Storage Book Shelf | Home Storage Organizer | Display Shelf Rack | Counter Top Bookcase Book Shelf | Home Décor Display & Storage Rack Cabinet Unit | BS-6-Black",
    description: `
    Made of High Grade Pre laminated Particle Wood Board with Natural Wood Grain Finish. which makes Durable and it comes in Classic colour. Unique style - Unique shape, like a tree extension, to stand alone, no longer need to rely on the wall, a unique color.\n
    Product Dimensions: - L53 x W20 x H35 CM\n
    Spacious and compact - Despite large storage space, the wooden shelf takes up little space - Fits also in narrow corridors and small rooms - You can put it in any place , it does not occupy the place, and you can move it easy, and you can follow your preferences adjust your position.\n
    Easy assembly - thanks to the enclosed instructions and the included mounting material, the standing shelf can also be easily assembled by one person alone - Additional tools are not required.\n
    Care Instructions -Avoid direct sunlight ,direct water splashing . Do not use harsh chemicals or abrasive clothes while cleaning. Do not scratch with sharp objects.\n
              `,
    count: 89,
    price: 998,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal8_1.jpg" },
      { path: "/images/products/furniture/cal8_2.jpg" },
      { path: "/images/products/furniture/cal8_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "BuyGlobal_Store" },
    ],
  },
  {
    name: "Callas Storage Book Shelf | Home Storage Organizer | Display Shelf Rack | Counter Top Bookcase Book Shelf | Home Décor Display & Storage Rack Cabinet Unit | BS-6-White",
    description: `
    Made of High Grade Pre laminated Particle Wood Board with Natural Wood Grain Finish. which makes Durable and it comes in Classic colour. Unique style - Unique shape, like a tree extension, to stand alone, no longer need to rely on the wall, a unique color.\n
    Product Dimensions: - L53 x W20 x H35 CM\n
    Spacious and compact - Despite large storage space, the wooden shelf takes up little space - Fits also in narrow corridors and small rooms - You can put it in any place , it does not occupy the place, and you can move it easy, and you can follow your preferences adjust your position.\n
    Easy assembly - thanks to the enclosed instructions and the included mounting material, the standing shelf can also be easily assembled by one person alone - Additional tools are not required.\n
    Care Instructions -Avoid direct sunlight ,direct water splashing . Do not use harsh chemicals or abrasive clothes while cleaning. Do not scratch with sharp objects.\n
              `,
    count: 89,
    price: 998,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal9_1.jpg" },
      { path: "/images/products/furniture/cal9_2.jpg" },
      { path: "/images/products/furniture/cal9_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "white" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Callas Wooden Home Decoration Storage Shelves | Wall Display Rack for Living Room, Home Wall Décor (2 Shelves | Color - Black | Material - Engineered Wood)",
    description: `
    PRODUCT DIMENSIONS: Length ( 17.8 Inches) x Breadth ( 4.8 Inches) x Height( 19.8 Inches)\n
    MULTIPURPOSE SHELF : Suitable for wall shelves, storage shelves, book shelfs, kitchen shelves and racks, bathroom shelves, corner shelf, showcase.\n
    HOME DECOR & WALL DECOR : Antique Decorative Perfect Gift for special occasions such as Diwali, Christmas, New Year, Eid, etc and gifting to her/him.\n
    PERFECT WALL SHELVES : Beautifully designed for Indian Homes to work as perfect Stylish shelfs for Living Room, Kitchen & Office Wall.\n
    DECORATE YOUR LIVING ROOM: Best wall shelves to decorate your home and living room with these wall mount wall shelves, book shelves, storage shelf, wooden shelves, office décor, wall mounted shelf and wall stand for living room make looks amazing.\n
              `,
    count: 89,
    price: 499,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal10_1.jpg" },
      { path: "/images/products/furniture/cal10_2.jpg" },
      { path: "/images/products/furniture/cal10_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "black" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Callas Wooden Home Decoration Storage Shelves | Wall Display Rack for Living Room, Home Wall Décor (2 Shelves | Color - Brown | Material - Engineered Wood)",
    description: `
    PRODUCT DIMENSIONS: Length ( 17.8 Inches) x Breadth ( 4.8 Inches) x Height( 19.8 Inches)\n
    MULTIPURPOSE SHELF : Suitable for wall shelves, storage shelves, book shelfs, kitchen shelves and racks, bathroom shelves, corner shelf, showcase.\n
    HOME DECOR & WALL DECOR : Antique Decorative Perfect Gift for special occasions such as Diwali, Christmas, New Year, Eid, etc and gifting to her/him.\n
    PERFECT WALL SHELVES : Beautifully designed for Indian Homes to work as perfect Stylish shelfs for Living Room, Kitchen & Office Wall.\n
    DECORATE YOUR LIVING ROOM: Best wall shelves to decorate your home and living room with these wall mount wall shelves, book shelves, storage shelf, wooden shelves, office décor, wall mounted shelf and wall stand for living room make looks amazing.\n
              `,
    count: 89,
    price: 499,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal11_1.jpg" },
      { path: "/images/products/furniture/cal11_2.jpg" },
      { path: "/images/products/furniture/cal11_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "brown" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "RetailEZ Pvt Ltd" },
    ],
  },
  {
    name: "Callas Wooden Wall Shelf/Wall Rack/Home Decoration Shelves/Wall Display Rack for Living Room, Office Wall Décor (2 Shelves | Material - MDF Wooden) (White)",
    description: `
    MODERN SIMPLE DESK- This desk is made of a Engineering Wood classic color matching, Black and White colour looks simple and modern, size in L100" x W45" x H75"\n
    NO-WOBBLE - The desk is very sturdy, design with triangular junctions not only more stable but can protect your floor from scratch, suitable for working from home, or fit for students to study online. This modern desk won't shake when you use it.\n
    WIDE USES - Our desk can be used as a writing desk, study desk, home office desk, PC desk, Laptop desk, Gaming table, the desk can be used in bedroom, living room, dormitory, office, etc; Also, this computer desk can be used in outdoor activities, such as BBQ, baby shower, weddings, etc.\n
    The product must be assembled: DIY (Do-It-Yourself) assembly instructions and the necessary hardware are included in the package. In the assembly instructions, we also include a QR Code for an assembly video. To watch an assembly video, scan the code.\n
    CALLAS SAYS: If you have any questions or concerns regarding our desk, please don't hesitate to contact us. We will respond to you as soon as possible or within 24 hours and assist you in resolving the situation.\n
              `,
    count: 89,
    price: 2099,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal12_1.jpg" },
      { path: "/images/products/furniture/cal12_2.jpg" },
      { path: "/images/products/furniture/cal12_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "white" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "Clicktech Retail" },
    ],
  },
  {
    name: "Callas Vinyl Corner Rack Shelf - White",
    description: `
    SMART DESIGN: Boost your kitchen cupboard storage quickly and easily with this three-tier corner plate rack. It maximises the vertical space in any cupboard, counter or under sink area with a large surface area suitable for plates of all sizes and other kitchen essentials. Crafted from robust mild steel with a sleek white powder coating finsih!\n
    Can be used anywhere like kitchen, bathroom, office.\n
    Dimension : L 23 cm, B 23 cm, H 20 cm\n
    STRONG AND STURDY: It is highly strong and sturdy! Can accomodate weights of stainless steels plates and dishes very easily and other steel or other metal utensils!\n
              `,
    count: 89,
    price: 499,
    category: "Furniture",
    sales: 76,
    images: [
      { path: "/images/products/furniture/cal13_1.jpg" },
      { path: "/images/products/furniture/cal13_2.jpg" },
      { path: "/images/products/furniture/cal13_3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Brands", value: "Callas" },
      { key: "color", value: "white" },
      { key: "Item Condition", value: "New" },
      { key: "Seller", value: "BuyGlobal_Store" },
    ],
  },
];

module.exports = products;
