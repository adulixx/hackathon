// export interface Product {
//   id: string;
//   name: string;
//   description: string;
//   priceId: string;
//   price: number;
//   features: string[];
//   credits: number;
// }

// export const products: Product[] = [
//   {
//     id: "lifetime-basic",
//     name: "Lifetime Basic",
//     description: "Basic access forever with all core features",
//     priceId: "price_1R8vk4LegWPdUtsVQmP22gLi",
//     price: 9900,
//     features: ["Core functionality", "Basic support", "Lifetime updates"],
//     credits: 100,
//   },
//   {
//     id: "lifetime-premium",
//     name: "Lifetime Premium",
//     description: "Premium access forever with all features",
//     priceId: "price_1R8vkELegWPdUtsVnVbnMYiK",
//     price: 14900,
//     features: [
//       "All basic features",
//       "Advanced functionality",
//       "Priority support",
//       "Early access to new features",
//     ],
//     credits: 200,
//   },
// ];

// export function getProductById(
//   productId: string | undefined
// ): Product | undefined {
//   return products.find((product) => product.id === productId);
// }

// export function getProductByPriceId(priceId: string): Product | undefined {
//   return products.find((product) => product.priceId === priceId);
// }
