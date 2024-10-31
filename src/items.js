const items = [
  {
    id: "asusRog",
    itemClass: "laptop",
    title: "Asus Rog Strix 17",
    price: "19.750",
    img: "https://cdn.akakce.com/z/asus/asus-rog-strix-scar-17-g733pz-ll062-ryzen-9-7945hx-32-gb-1-tb-ssd-rtx4080-17-3-notebook.jpg",
    quantity: 1,
  },
  {
    id: "asusTuf",
    itemClass: "laptop",
    title: "Asus TUF Gaming",
    price: "33.250",
    img: "https://cdn.akakce.com/z/asus/asus-rog-strix-scar-17-g733pz-ll062-ryzen-9-7945hx-32-gb-1-tb-ssd-rtx4080-17-3-notebook.jpg",
    quantity: 1,
  },
  {
    id: "acerNitro",
    itemClass: "laptop",
    title: "Acer Nitro 5",
    price: "43.250",
    img: "https://www.notebookcheck-tr.com/uploads/tx_nbc2/AcerNitro5AN515-45__1__03.jpg",
    quantity: 1,
  },
  {
    id: "acerNitro5",
    itemClass: "laptop",
    title: "Acer Nitro 5",
    price: "39.950",
    img: "https://m.media-amazon.com/images/I/71WxHMirCyL._AC_UF1000,1000_QL80_.jpg",
    quantity: 1,
  },
  {
    id: "acerPredator",
    itemClass: "laptop",
    title: "Acer Predator Helios",
    price: "37.999",
    img: "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/14862/uploads/urunresimleri/buyuk/acer-predator-helios-300-15.6-qhd-240h-b-07f0.jpg",
    quantity: 1,
  },
  {
    id: "acerNitro7",
    itemClass: "laptop",
    title: "Acer Nitro 7",
    price: "48.750",
    img: "https://m.media-amazon.com/images/I/713dZHEY2YL._AC_UF1000,1000_QL80_.jpg",
    quantity: 1,
  },
  {
    id: "asusTufF15",
    itemClass: "laptop",
    title: "Asus TUF F15",
    price: "25.600",
    img: "https://m.media-amazon.com/images/I/71-jd5R6c7L._AC_SL1500_.jpg",
    quantity: 1,
  },
  {
    id: "lenovoIdea",
    itemClass: "laptop",
    title: "Lenovo IdeaPad",
    price: "22.500",
    img: "https://m.media-amazon.com/images/I/713dZHEY2YL._AC_UF1000,1000_QL80_.jpg",
    quantity: 1,
  },
  {
    id: "1",
    itemClass: "laptop",
    title: "MSI GL66",
    price: "34.100",
    img: "https://m.media-amazon.com/images/I/713dZHEY2YL._AC_UF1000,1000_QL80_.jpg",
    quantity: 1,
  },
  {
    id: "2",
    itemClass: "laptop",
    title: "MSI Katana",
    price: "47.300",
    img: "https://m.media-amazon.com/images/I/713dZHEY2YL._AC_UF1000,1000_QL80_.jpg",
    quantity: 1,
  },
  {
    id: "3",
    itemClass: "kulaklık",
    title: "SteelSeries Arctis 1",
    price: "3.500",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41hvnvx99WL._AC_UL600_SR600,600_.jpg",
    quantity: 1,
  },
  {
    id: "4",
    itemClass: "kulaklık",
    title: "SteelSeries Arctis 3",
    price: "5.600",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41hvnvx99WL._AC_UL600_SR600,600_.jpg",
    quantity: 1,
  },
  {
    id: "5",
    itemClass: "kulaklık",
    title: "SteelSeries Arctis 5",
    price: "6.200",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41hvnvx99WL._AC_UL600_SR600,600_.jpg",
    quantity: 1,
  },
  {
    id: "6",
    itemClass: "kulaklık",
    title: "SteelSeries Arctis 7",
    price: "7.800",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41hvnvx99WL._AC_UL600_SR600,600_.jpg",
    quantity: 1,
  },
  {
    id: "7",
    itemClass: "kulaklık",
    title: "SteelSeries Arctis 9",
    price: "10.200",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41hvnvx99WL._AC_UL600_SR600,600_.jpg",
    quantity: 1,
  },
  {
    id: "8",
    itemClass: "kulaklık",
    title: "Corsair H50 Pro",
    price: "2.700",
    img: "https://www.quicklink.com.bd/image/cache/catalog/headphone/corsair/hs50-pro/corsair-hs50-pro-stereo-gaming-headphone-black-550x550.jpg.webp",
    quantity: 1,
  },
  {
    id: "9",
    itemClass: "kulaklık",
    title: "Corsair Void",
    price: "5.750",
    img: "https://cdn.cimri.io/image/1200x1200/corsair-ca-9011206-eu-kirmizisiyah-void-elite-7-1-kablolu-kulak-ustu-oyuncu-kulakligi_669212480.jpg",
    quantity: 1,
  },
  {
    id: "10",
    itemClass: "kulaklık",
    title: "Corsair Virtuoso",
    price: "3.840",
    img: "https://imvm.letgo.com/v1/files/eddc4acb3a4c4-OLXAUTOTR/image;s=360x0",
    quantity: 1,
  },
  {
    id: "11",
    itemClass: "kulaklık",
    title: "Corsair HS80 CA",
    price: "4.930",
    img: "https://www.qp.com.tr/pub/media/amasty/amoptmobile/catalog/product/cache/0ec4db907acb94e95d2a6bdacfb34d37/h/s/hs35_blue_02_2.jpg",
    quantity: 1,
  },
  {
    id: "12",
    itemClass: "kulaklık",
    title: "Corsair HS35",
    price: "1.570",
    img: "https://www.qp.com.tr/pub/media/amasty/amoptmobile/catalog/product/cache/0ec4db907acb94e95d2a6bdacfb34d37/h/s/hs35_blue_02_2.jpg",
    quantity: 1,
  },
  {
    id: "13",
    itemClass: "telefon",
    title: "Iphone 11",
    price: "25.110",
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1-1_large.jpg",
    quantity: 1,
  },
  {
    id: "14",
    itemClass: "telefon",
    title: "Iphone 12",
    price: "28.300",
    img: "https://cdn.cimri.io/image/1200x1200/apple-iphone-12-5g-128gb_865579535.jpg",
    quantity: 1,
  },
  {
    id: "15",
    itemClass: "telefon",
    title: "Iphone 13",
    price: "37.029",
    img: "https://cdn.cimri.io/image/860x860/apple-iphone-13-5g-128gb-4gb-ram-61-inc-12mp-akilli-cep-telefonu_467012495.jpg",
    quantity: 1,
  },
  {
    id: "16",
    itemClass: "telefon",
    title: "Iphone 14",
    price: "43.699",
    img: "https://cdn.cimri.io/image/1200x1200/apple-iphone-14-pro-5g-256gb-altin_655423793.jpg",
    quantity: 1,
  },
  {
    id: "17",
    itemClass: "telefon",
    title: "Iphone 15",
    price: "58.499",
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/141002-1_large.jpg",
    quantity: 1,
  },
  {
    id: "18",
    itemClass: "telefon",
    title: "Samsung Galaxy S22 Ultra",
    price: "42.412",
    img: "https://cdn.cimri.io/pictures/article/original/46/46108.jpg",
    quantity: 1,
  },
  {
    id: "19",
    itemClass: "telefon",
    title: "Samsung Galaxy S23 Ultra",
    price: "44.790",
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/137425-1_large.jpg",
    quantity: 1,
  },
  {
    id: "20",
    itemClass: "telefon",
    title: "Samsung Galaxy S24 Ultra",
    price: "57.824",
    img: "https://www.phonemart.ng/wp-content/uploads/2024/06/s24u-gr-4.jpeg",
    quantity: 1,
  },
  {
    id: "21",
    itemClass: "telefon",
    title: "phone 15 Pro Max",
    price: "71.999",
    img: "https://static0.anpoimages.com/wordpress/wp-content/uploads/2023/09/iphone-15-pro-max.jpg",
    quantity: 1,
  },
  {
    id: "22",
    itemClass: "telefon",
    title: "Iphone 14 Pro Max",
    price: "89.769",
    img: "https://cdn.cimri.io/image/1200x1200/apple-iphone-14-pro-max-5g-128gb-derin-mor_655424782.jpg",
    quantity: 1,
  },
  {
    id: "23",
    itemClass: "tablet",
    title: "Ipad Pro",
    price: "25.110",
    img: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mnxp3tua-apple-129-inc-ipad-pro-wi-fi-128gb-uzay-grisi-mnxp3tua-638024601364887578.jpg",
    quantity: 1,
  },
  {
    id: "24",
    itemClass: "tablet",
    title: "Ipad Air 2",
    price: "2.626",
    img: "https://drop.ndtv.com/TECH/product_database/images/10172014123206AM_635_apple_ipad_air_2_wifi_apple.jpeg?downsize=*:360",
    quantity: 1,
  },
  {
    id: "25",
    itemClass: "tablet",
    title: "Ipad Air 1",
    price: "2.250",
    img: "https://www.tablettamircisi.com/wp-content/uploads/ipadair.jpg",
    quantity: 1,
  },
  {
    id: "26",
    itemClass: "tablet",
    title: "Ipad Air 3",
    price: "8.900",
    img: "https://cdn.cimri.io/image/1200x1200/apple-ipad-air-3-64gb-muuj2tu-a-10-5-inc-wi-fi-tablet-pc-uzay-grisi_556811607.jpg",
    quantity: 1,
  },
  {
    id: "27",
    itemClass: "tablet",
    title: "Ipad Air 4",
    price: "22.299",
    img: "https://cdn.cimri.io/pictures/article/original/46/46874.jpg",
    quantity: 1,
  },
  {
    id: "28",
    itemClass: "tablet",
    title: "Ipad Air 5",
    price: "18.399",
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/132832-1_large.jpg",
    quantity: 1,
  },
  {
    id: "29",
    itemClass: "tablet",
    title: "Ipad Air 6",
    price: "27.599",
    img: "https://media.ldlc.com/r1600/ld/products/00/06/13/38/LD0006133836.jpg",
    quantity: 1,
  },
  {
    id: "30",
    itemClass: "tablet",
    title: "Samsung Tab S9",
    price: "19.499",
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/140270-1_large.jpg",
    quantity: 1,
  },
  {
    id: "31",
    itemClass: "tablet",
    title: "Samsung Tab A9",
    price: "3.590",
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/141971-1_large.jpg",
    quantity: 1,
  },
  {
    id: "32",
    itemClass: "tablet",
    title: "Samsung Tab S9 FE",
    price: "16.149",
    img: "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125047883/125047883_0_MC/62f90c2b.jpg",
    quantity: 1,
  },
];

export default items;
