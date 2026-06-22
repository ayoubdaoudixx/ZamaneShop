export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** Price in Moroccan Dirham */
  priceMAD: number;
  /** Price in Euro */
  priceEUR: number;
  image: string;
  /** Short material/leather note shown on the card */
  material: string;
};

/**
 * The Collection. Images are the consistent catalog set generated for the
 * product cards (parchment background, golden-hour studio light).
 */
export const products: Product[] = [
  {
    id: "bifold-cognac",
    name: "The Atlas Bifold",
    tagline: "Everyday carry, perfected",
    description:
      "A slim full-grain bifold that softens with every season. Eight card slots, two hidden pockets.",
    material: "Cognac full-grain",
    priceMAD: 690,
    priceEUR: 64,
    image: "/images/generated/01-bifold-cognac.png",
  },
  {
    id: "cardholder-tan",
    name: "The Medina Card Holder",
    tagline: "Pared back to essentials",
    description:
      "Vegetable-tanned and hand-burnished, it carries five cards and a folded note with quiet ease.",
    material: "Natural vegetable-tanned",
    priceMAD: 390,
    priceEUR: 36,
    image: "/images/generated/02-cardholder-tan.png",
  },
  {
    id: "travel-espresso",
    name: "The Voyager Travel Wallet",
    tagline: "For the long road",
    description:
      "A zip-around organiser for passport, cards and currency. Espresso leather with a brass pull.",
    material: "Espresso full-grain",
    priceMAD: 920,
    priceEUR: 85,
    image: "/images/generated/03-travel-espresso.png",
  },
  {
    id: "coinpouch-terracotta",
    name: "The Souk Coin Pouch",
    tagline: "Small things, well kept",
    description:
      "A rounded pouch with an antique-brass zip — for coins, keys, or a stray treasure from the souk.",
    material: "Terracotta full-grain",
    priceMAD: 320,
    priceEUR: 30,
    image: "/images/generated/04-coinpouch-terracotta.png",
  },
  {
    id: "passport-cognac",
    name: "The Caravan Passport Cover",
    tagline: "Travel beautifully",
    description:
      "An embossed cover that holds your passport and boarding pass, ageing into a rich patina.",
    material: "Cognac full-grain",
    priceMAD: 450,
    priceEUR: 42,
    image: "/images/generated/05-passport-cognac.png",
  },
  {
    id: "snapwallet-ochre",
    name: "The Zellige Snap Wallet",
    tagline: "Two tones, one craft",
    description:
      "Compact cognac-and-ochre wallet with a solid brass snap. Cards in front, coins behind.",
    material: "Cognac & ochre two-tone",
    priceMAD: 540,
    priceEUR: 50,
    image: "/images/generated/06-snapwallet-ochre.png",
  },
];
