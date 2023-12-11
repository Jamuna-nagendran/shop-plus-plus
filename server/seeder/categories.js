const categories = [
  {
    name: "Electronics",
    description:
      "Explore the latest innovations in our diverse electronics collection. From cutting-edge gadgets to essential tech accessories, our curated range ensures you stay connected, entertained, and equipped with the latest electronic advancements.",
    image: "/images/tablets-category.png",
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
    name: "Books",
    description:
      "Embark on literary adventures with our extensive collection of books. From gripping novels to insightful non-fiction, our selection caters to diverse tastes, offering a world of knowledge and imagination at your fingertips.",
    image: "/images/tablets-category.png",
    attrs: [
      {
        key: "English & Indian Languages",
        value: ["English", "Hindi", "Marathi", "Tamil", "Telugu"],
      },
      {
        key: "Item Condition",
        value: ["New", "Used"],
      },
      {
        key: "Foreign Languages",
        value: ["French", "German", "Japanese", "Spanish"],
      },
      {
        key: "Format",
        value: [
          "Audiobook",
          "Bundle",
          "Hardcover",
          "Kindle Edition",
          "Paperback",
        ],
      },
      {
        key: "Author",
        value: [
          "Jan Yager",
          "Darko Macan",
          "Darick Robertson",
          "Stephen R. Covey",
          "J.K. Rowling",
        ],
      },
      {
        key: "Seller",
        value: [
          "Cocoblu Retail",
          "Repro Books-On-Demand",
          "Inetrade India",
          "Amazing_Buy",
          "uRead-Store",
          "Trans Infopreneur Inc",
          "Mumbai gift corner",
          "Browsers' Lounge",
          "Sunrise Book store",
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
          "Venus.Enterprise",
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
      "Elevate your wardrobe with our diverse range of clothing and accessories. Explore the latest fashion trends and timeless classics that seamlessly blend style and comfort. From everyday essentials to statement pieces, our curated collection caters to every occasion, ensuring you step out with confidence and flair. Discover a world of possibilities as you redefine your personal style with our meticulously selected clothing and accessories.",
    image: "/images/clothing-accessories-category.jpg",
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
          "JockeyIndia",
          "RK World Infocom Pvt Ltd",
          "VRP Telematics",
          "KUKU KI DUKAN",
          "RetailEZ Pvt Ltd",
          "HOUSE OF COMFORT",
          "Janasya",
          "POSEIDON BHL",
          "SIRIL",
        ],
      },
    ],
  },
  {
    name: "Women's Clothing",
    description:
      "Elevate your wardrobe with our diverse range of clothing and accessories. Explore the latest fashion trends and timeless classics that seamlessly blend style and comfort. From everyday essentials to statement pieces, our curated collection caters to every occasion, ensuring you step out with confidence and flair. Discover a world of possibilities as you redefine your personal style with our meticulously selected clothing and accessories.",
    image: "/images/clothing-accessories-category.jpg",
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
          "JockeyIndia",
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
