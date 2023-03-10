import bEgyptianF from "../image/Rectangle bE.png";
import bpharoahF from "../image/Rectangle bP.png";
import cpharoahF from "../image/Rectangle cP.png";
import creatorOne from "../image/Ellipse 14.png";
import creatorTwo from "../image/Ellipse 15.png";
import creatorThree from "../image/Ellipse 16.png";
import creatorFour from "../image/Ellipse 17.png";
import creatorFive from "../image/Ellipse 18.png";
import walletOne from "../image/MetaMask - jpeg.png";
import walletTwo from "../image/Coinbase - png.png";
import walletThree from "../image/WalletConnect - jpeg.png";
import walletFour from "../image/Phantom - jpeg.png";


export const featuredProducts = [
  {
    key: 101,
    name: 'BOOLEAN EGYPTIAN',
    image: bEgyptianF,
    price: '$10.90',
    size: '20ft',
    crypto: '0.10',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    listing: 'purus sit amet luctus venenatis, lectus magna fringilla urna',
    status: 'instock',
    contributors : [[104,creatorOne], [105,creatorTwo], [106,creatorThree], [107,creatorFour], [108,creatorFive]],
    categories: 'Editorials',
    artist: 'Kalu',
    year: 2022,
  },
  {
    key: 102,
    name: 'BOOLEAN PHAROAH',
    image: bpharoahF,
    price: '$10.90',
    size: '20ft',
    crypto: '0.10',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    listing: 'purus sit amet luctus venenatis, lectus magna fringilla urna',
    status: 'instock',
    contributors : [[109,creatorOne], [110,creatorTwo], [111,creatorThree], [112,creatorFour], [113,creatorFive]],
    categories: 'Editorials',
    artist: 'Kalu',
    year: 2022,
  },
  {
    key: 103,
    name: 'CARVED PHAROAH',
    image: cpharoahF,
    price: '$10.90',
    size: '20ft',
    crypto: '0.10',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    listing: 'purus sit amet luctus venenatis, lectus magna fringilla urna',
    status: 'instock',
    contributors : [[114,creatorOne], [115,creatorTwo], [116,creatorThree], [117,creatorFour], [118,creatorFive]],
    categories: 'Editorials',
    artist: 'Kalu',
    year: 2022,
  }
]

// export default featuredProducts;

export const walletTypes = [
  {name: "walletOne", image: walletOne}, 
  {name: "walletTwo", image: walletTwo}, 
  {name: "walletThree", image: walletThree}, 
  {name: "walletFour", image: walletFour},
];