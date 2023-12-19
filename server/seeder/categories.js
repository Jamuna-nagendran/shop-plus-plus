const categories = [
  {
    name: "Electronics",
    description:
      "Explore the latest innovations in our diverse electronics collection. From cutting-edge gadgets to essential tech accessories, our curated range ensures you stay connected, entertained, and equipped with the latest electronic advancements.",
    image: "/images/electronics-category.jpg",
    attrs: [
      {
        key: "Brands",
        value: [
          "Apple",
          "boAt",
          "Redmi",
          "OnePlus",
          "Sony",
          "Samsung",
          "Fire-Boltt",
        ],
      },
      {
        key: "Item Condition",
        value: ["New", "Renewed", "Used"],
      },
      {
        key: "Seller",
        value: [
          "Appario Retail Private Ltd",
          "Cocoblu Retail",
          "Spigen India",
          "TheGiftKart",
          "CMPL ONLINE",
          "Authentic-Deal",
          "Clicktech Retail",
          "RetailEZ Pvt Ltd",
          "DAWNTECH ELECTRONICS PRIVATE LIMITED",
          "UniqueClick",
        ],
      },
    ],
  },
  {
    name: "Baby",
    description:
      "Discover a world of joy for your little one with our charming baby essentials. From soft, cuddly clothing to practical accessories, our collection is tailored to provide comfort and style for your precious bundle of joy.",
    image: "/images/baby-category.jpg",
    attrs: [
      {
        key: "Seller",
        value: [
          "RK World Infocom Pvt Ltd",
          "Cocoblu Retail",
          "Hopscotch India",
          "SREEKRISHNA ENTERPRISES",
          "Electronics Bazaar Store",
          "Bold N Elegant",
          "SarvodayaApparels",
          "SkyStart",
          "R & R",
          "SYGA",
        ],
      },
      {
        key: "Brands",
        value: [
          "Mee",
          "Little's",
          "Pampers",
          "Mamaearth",
          "Himalaya",
          "Bumtum",
        ],
      },
    ],
  },
  {
    name: "Beauty",
    description:
      "Indulge in self-care with our curated beauty collection, featuring skincare staples and makeup essentials. Embrace your unique beauty with a range designed to enhance your natural radiance, offering products that empower and uplift.",
    image: "/images/beauty-category.jpg",
    attrs: [
      {
        key: "Seller",
        value: [
          "RK World Infocom Pvt Ltd",
          "BGorgeous",
          "Just Peachy!",
          "KiranaMarket",
          "SHOPPERS STOP COM",
          "SUPER COSMETICS STORE",
          "NumBrave",
        ],
      },
      {
        key: "Brands",
        value: [
          "Cetaphil",
          "Nivea",
          "Maybelline",
          "Biotique",
          "Bella Vita Luxury",
          "L'Oreal Paris",
          "Garnier",
        ],
      },
    ],
  },
  {
    name: "Men's Clothing",
    description:
      "Elevate your style with our men's collection, blending contemporary trends and comfort effortlessly. From sharp formal wear to laid-back casuals, each piece ensures versatility with lasting impressions.",
    image: "/images/men-clothing-category.jpg",
    attrs: [
      {
        key: "color",
        value: [
          "blue",
          "red",
          "green",
          "black",
          "multicolor",
          "grey",
          "pink",
          "orange",
          "yellow",
          "off-white",
          "brown",
        ],
      },
      {
        key: "Material",
        value: [
          "Cotton",
          "Fleece",
          "Satin",
          "Acrylic",
          "Rayon",
          "Silk",
          "Wool",
          "Leather",
        ],
      },
      {
        key: "Pattern",
        value: [
          "Animal Print",
          "Camouflage",
          "Cartoon",
          "Chevron",
          "Floral",
          "Geometric",
          "Letter print",
          "Plaid",
          "Polka dots",
          "Solid",
          "Striped",
        ],
      },
      {
        key: "Brands",
        value: [
          "Brand Conquer",
          "RC. ROYAL CLASS",
          "Fitness Mantra",
          "Labnoft",
          "CREATURE",
        ],
      },
      {
        key: "Seller",
        value: [
          "Cocoblu Retail",
          "RK World Infocom Pvt Ltd",
          "VRP Telematics",
          "KUKU KI DUKAN",
          "RetailEZ Pvt Ltd",
          "HOUSE OF COMFORT",
          "POSEIDON BHL",
          "SIRIL",
        ],
      },
    ],
  },
  {
    name: "Women's Clothing",
    description:
      "Discover chic elegance in our women's collection, seamlessly fusing fashion-forward trends with comfort. From sophisticated ensembles to relaxed chic, each piece is tailored for versatile, timeless style.",
    image: "/images/women-clothing-category.jpg",
    attrs: [
      {
        key: "color",
        value: [
          "blue",
          "red",
          "green",
          "black",
          "maroon",
          "grey",
          "pink",
          "orange",
          "yellow",
          "off-white",
          "beige",
          "multi-color",
        ],
      },
      {
        key: "Material",
        value: [
          "Cotton",
          "Crepe",
          "Chiffon",
          "Georgette",
          "Rayon",
          "Silk",
          "Brasso",
          "Polyester",
        ],
      },
      {
        key: "Pattern",
        value: [
          "Animal print",
          "Cartoon",
          "Chevron",
          "Floral",
          "Geometric",
          "Letter print",
          "Solid",
          "Striped",
        ],
      },
      {
        key: "Brands",
        value: ["Janasya", "Yashika", "Harpa", "BALENZIA", "KSHS", "SIRIL"],
      },
      {
        key: "Seller",
        value: [
          "Cocoblu Retail",
          "RK World Infocom Pvt Ltd",
          "VRP Telematics",
          "KUKU KI DUKAN",
          "RetailEZ Pvt Ltd",
          "HOUSE OF COMFORT",
          "POSEIDON BHL",
          "SIRIL",
        ],
      },
    ],
  },
  {
    name: "Furniture",
    description:
      "Transform your living spaces effortlessly with our thoughtfully curated furniture collection. From sleek modern designs to timeless classics, our pieces blend style and functionality, creating a harmonious and inviting atmosphere for every room.",
    image: "/images/furniture-category.jpg",
    attrs: [
      {
        key: "Brands",
        value: [
          "STRIFF",
          "Plantex",
          "Portronics",
          "Callas",
          "Nilkamal",
          "duroflex",
        ],
      },
      {
        key: "color",
        value: [
          "black",
          "grey",
          "white",
          "silver",
          "blue",
          "maroon",
          "beige",
          "red",
          "yellow",
        ],
      },
      { key: "Item Condition", value: ["New", "Used"] },
      {
        key: "Seller",
        value: [
          "RetailEZ Pvt Ltd",
          "ETrade Online",
          "Plantex-Globalbees",
          "TheGlobalGenie",
          "Furniture factory",
          "Clicktech Retail",
          "BuyGlobal_Store",
        ],
      },
    ],
  },
];

module.exports = categories;
