const imgArr = [
  'https://cdn.pixabay.com/photo/2022/06/04/19/57/river-7242735_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/05/23/18/45/bee-7216939_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/06/04/16/19/butterflies-7242320_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/06/10/11/28/love-in-a-mist-7254346_960_720.jpg'
]
// const dataList = []
const dataList = [
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2016/09/13/09/25/kite-1666816_960_720.jpg',
    backImg: require('../assets/images/background/backSpring.png'),
    arrImg: imgArr,
    name: 'Ngôi sao Phương Nam Nam 12345678910',
    details: {
      title: 'Là một trong những sản phẩm được yêu thích nhất tại Tây Nguyên. Sản phẩm được tạo nên từ những quả cà phê căng mọng, được hái trực tiếp từ trên cây vào những buổi sớm. Sau quá trình hong khô và sàng lọc, những hạt cà phê chất lượng được ra đời. Chúng là chứng minh cho sự tinh hoa của núi rừng Tây Nguyên.',
      weightMax: 10,
      unit: 'kg',
      nguyenLieu: 'Cà phê tươi.',
      origin: 'Thị trấn Eakar, huyện Eakar, tỉnh Đắk Lắk',
      nsx: 'Bùi Văn Hải',
    },
    price: 12000,
    priceSale: 10000,
    sale: true,
    sold: 10,
    hide: true
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2021/05/19/14/31/dandelion-6266231_960_720.jpg',
    backImg: require('../assets/images/background/backSummer.png'),
    arrImg: imgArr,
    name: 'Ngôi sao Phương Tây',
    details: {
      title: 'Là một trong những sản phẩm được yêu thích nhất tại Tây Nguyên. Sản phẩm được tạo nên từ những quả cà phê căng mọng, được hái trực tiếp từ trên cây vào những buổi sớm. Sau quá trình hong khô và sàng lọc, những hạt cà phê chất lượng được ra đời. Chúng là chứng minh cho sự tinh hoa của núi rừng Tây Nguyên.',
      weightMax: 10,
      unit: 'kg',
      nguyenLieu: '',
      origin: 'Thị trấn Eakar, huyện Eakar, tỉnh Đắk Lắk',
      nsx: 'Bùi Văn Hải',
    },
    price: 12000,
    priceSale: 10000,
    sale: false,
    sold: 10,
    hide: false
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2016/06/10/10/01/kite-1447813_960_720.jpg',
    backImg: require('../assets/images/background/backFall.png'),
    arrImg: imgArr,
    name: 'Ngôi sao Phương Bắc',
    details: {
      title: 'Là một trong những sản phẩm được yêu thích nhất tại Tây Nguyên. Sản phẩm được tạo nên từ những quả cà phê căng mọng, được hái trực tiếp từ trên cây vào những buổi sớm. Sau quá trình hong khô và sàng lọc, những hạt cà phê chất lượng được ra đời. Chúng là chứng minh cho sự tinh hoa của núi rừng Tây Nguyên.',
      weightMax: 10,
      unit: 'kg',
      nguyenLieu: '',
      origin: 'Thị trấn Eakar, huyện Eakar, tỉnh Đắk Lắk',
      nsx: 'Bùi Văn Hải',
    },
    price: 12000,
    priceSale: 10000,
    sale: true,
    sold: 10,
    hide: false
  },
  {
    id: 4,
    img: 'https://cdn.pixabay.com/photo/2022/06/09/17/16/allium-7252980_960_720.jpg',
    backImg: require('../assets/images/background/backWinter.png'),
    arrImg: imgArr,
    name: 'Ngôi sao Phương Đông',
    details: {
      title: 'Là một trong những sản phẩm được yêu thích nhất tại Tây Nguyên. Sản phẩm được tạo nên từ những quả cà phê căng mọng, được hái trực tiếp từ trên cây vào những buổi sớm. Sau quá trình hong khô và sàng lọc, những hạt cà phê chất lượng được ra đời. Chúng là chứng minh cho sự tinh hoa của núi rừng Tây Nguyên.',
      weightMax: 10,
      unit: 'kg',
      nguyenLieu: '',
      origin: 'Thị trấn Eakar, huyện Eakar, tỉnh Đắk Lắk',
      nsx: 'Bùi Văn Hải',
    },
    price: 12000,
    priceSale: 10000,
    sale: false,
    sold: 10,
    hide: false
  },
  {
    id: 5,
    img: 'https://cdn.pixabay.com/photo/2022/06/09/17/16/allium-7252980_960_720.jpg',
    backImg: require('../assets/images/background/backWinter.png'),
    arrImg: imgArr,
    name: 'Ngôi sao Phương Đông',
    details: {
      title: 'Là một trong những sản phẩm được yêu thích nhất tại Tây Nguyên. Sản phẩm được tạo nên từ những quả cà phê căng mọng, được hái trực tiếp từ trên cây vào những buổi sớm. Sau quá trình hong khô và sàng lọc, những hạt cà phê chất lượng được ra đời. Chúng là chứng minh cho sự tinh hoa của núi rừng Tây Nguyên.',
      weightMax: 10,
      unit: 'kg',
      nguyenLieu: '',
      origin: 'Thị trấn Eakar, huyện Eakar, tỉnh Đắk Lắk',
      nsx: 'Bùi Văn Hải',
    },
    price: 12000,
    priceSale: 10000,
    sale: false,
    sold: 10,
    hide: false
  }, 
  {
    id: 6,
    img: 'https://cdn.pixabay.com/photo/2022/06/09/17/16/allium-7252980_960_720.jpg',
    backImg: require('../assets/images/background/backWinter.png'),
    arrImg: imgArr,
    name: 'Ngôi sao Phương Đông',
    details: {
      title: 'Là một trong những sản phẩm được yêu thích nhất tại Tây Nguyên. Sản phẩm được tạo nên từ những quả cà phê căng mọng, được hái trực tiếp từ trên cây vào những buổi sớm. Sau quá trình hong khô và sàng lọc, những hạt cà phê chất lượng được ra đời. Chúng là chứng minh cho sự tinh hoa của núi rừng Tây Nguyên.',
      weightMax: 10,
      unit: 'kg',
      nguyenLieu: '',
      origin: 'Thị trấn Eakar, huyện Eakar, tỉnh Đắk Lắk',
      nsx: 'Bùi Văn Hải',
    },
    price: 12000,
    priceSale: 10000,
    sale: false,
    sold: 10,
    hide: false
  }
]
export default dataList;