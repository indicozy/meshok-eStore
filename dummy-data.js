import { IconBox, IconCreativeCommonsOff, IconUser, IconHeart, IconShoppingCart } from "@tabler/icons";

export const user = {
  id: "user1",
  cart: ["item1", "item2"], //Array of Id
  orders: ["item1", "item2"],
  wishlist: []
};
const items = [
  {
    id: "item1",
    title: "NFT Purple Koala ",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos ad pariatur, error repellat, earum non doloribus voluptatibus culpa vel vero. Aliquid nihil tempore quam blanditiis expedita voluptatibus mollitia doloremque.",
    value: "30",
    currency: "usd",
    image:
      "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631",
  },
  {
    id: "item2",
    title: "Nyan Cat",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos ad pariatur, error repellat, earum non doloribus voluptatibus culpa vel vero. Aliquid nihil tempore quam blanditiis expedita voluptatibus mollitia doloremque.",
    value: "467",
    currency: "usd",
    image: "https://i.scdn.co/image/ab67616d0000b273ac66cfebcc549248e94ab051",
  },
  {
    id: "item3",
    title: "MacBook 16 Pro M1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos ad pariatur, error repellat, earum non doloribus voluptatibus culpa vel vero. Aliquid nihil tempore quam blanditiis expedita voluptatibus mollitia doloremque.",
    value: "963",
    currency: "usd",
    image: "https://api.technodom.kz/f3/api/v1/images/254628_1a.jpg",
  },
  {
    id: "item4",
    title: "Iphone 14Pro Max | 256gb | Orange",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos ad pariatur, error repellat, earum non doloribus voluptatibus culpa vel vero. Aliquid nihil tempore quam blanditiis expedita voluptatibus mollitia doloremque.",
    value: "690",
    currency: "usd",
    image:
      "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265321_1v.jpg&w=3840&q=85",
  },
  {
    id: "item5",
    title: "Iphone 12 Mini | 256gb | Gray",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos ad pariatur, error repellat, earum non doloribus voluptatibus culpa vel vero. Aliquid nihil tempore quam blanditiis expedita voluptatibus mollitia doloremque.",
    value: "500",
    currency: "usd",
    image:
      "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228603_1.jpg&w=3840&q=85",
  },
  {
    id: "item6",
    title: "Kemel Adam / Kairat Joldybaiuly",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos ad pariatur, error repellat, earum non doloribus voluptatibus culpa vel vero. Aliquid nihil tempore quam blanditiis expedita voluptatibus mollitia doloremque.",
    value: "12",
    currency: "usd",
    image:
      "https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/w/h/joldybayly_kemel_adamkemel_adam_1.jpg",
  },
];
const categories = [
  { title: "All electronics", link: "./all-electronics" },
  { title: "Smartphones", link: "./smartphones" },
  { title: "Laptops", link: "./laptops" },
  { title: "Headphones", link: "./headphones" },
  { title: "Accessories", link: "./accessories" },
];
export const sidebar_buttons = [
  { title: "Orders", link: "/orderList", icon: <IconBox /> },
  { title: "Favorites", link: "/wishlist", icon: <IconHeart /> },
];
export const header_buttons = [
  {
    title: 'Sign in',
    link: "/login",
    icon: <IconUser />
  },
  {
    title: 'Orders',
    link: "/orderList",
    icon: <IconBox />
  },
  {
    title: 'Cart',
    link: "/cart",
    icon: <IconShoppingCart />
  },
   
   
]

export function getListOfItems() {
  return items;
}
export function getListOfCategories() {
  return categories;
}
export function getItemById(id) {
  return items.find((item) => id === item.id);
}
export function getListOfFavorites() {
  const wishlist = items.filter(a => user.wishlist.find(b => a.id == b));
  return wishlist;
}
