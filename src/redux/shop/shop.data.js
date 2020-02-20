const SHOP_DATA = { 
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown cap',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0071/3637/8998/articles/man-wearing-trilby-hat-1_1024x1024.jpg?v=1547042334',
        price: 25
      },
      {
        id: 2,
        name: 'black cap',
        imageUrl: 'https://static2.fashionbeans.com/wp-content/uploads/2016/03/hatguide-19-topp-2.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Blue nice cap',
        imageUrl: 'https://i.ytimg.com/vi/7wOjYOz4Lb8/maxresdefault.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'flat cap',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Jason_at_golf.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://www.buytshirtsonline.co.uk/images/beechfield-knitted-beanie-hat-p4251-182637_thumb.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Winter hat',
        imageUrl: 'https://miro.medium.com/max/10198/1*zhu7YLXMX4LbykKJ5lm2WQ.jpeg',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://thebesthat.com/wp-content/uploads/2017/03/04.-Fold-It-Up.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Black Beanie',
        imageUrl: 'https://images.bewakoof.com/utter/content/2937/content_graphic_beanie_bewakoof_blog_3.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Cowboy hat',
        imageUrl: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Men Unisex Casual',
        imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/K/70783_1555318763.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Mens Chunky sneakers',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0083/4102/8924/products/2019-New-Men-Chunky-Sneakers-Lace-up-Flat-Casual-Shoes-with-Platform-Stylish-Mixed-Color-Breathable_grande.jpg?v=1571711562',
        price: 280
      },
      {
        id: 12,
        name: 'Casual shoes',
        imageUrl: 'https://rosesimstore.com/wp-content/uploads/2019/06/Summers-Men-Shoes-Men-Sneakers-Flat-Male-Casual-Shoes-Comfortable-Men-Footwear-Breathable-Mesh-Sport-Tzapatos-11.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://images.asos-media.com/products/nike-white-air-force-1-sage-low-sneakers/11115907-1-white?$XXL$&wid=513&fit=constrain',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://www.motiontempstock.com/images/shoes/nike%20high%20tops-519slq.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://www.depthlog.com/images/large/nike%20air%20force%20high%20tops-242gjb.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'http://cdn.shopify.com/s/files/1/0014/1980/4719/products/product-image-586335427_1200x1200.jpg?v=1530652788',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://pmcfootwearnews.files.wordpress.com/2018/12/timberland-killington-waterproof-sneakerboots-1.jpg?w=700&h=437&crop=1',
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean jacket',
        imageUrl: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/5/_106011905.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://www.heddels.com/wp-content/uploads/2014/11/jacket_1.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i1.adis.ws/i/boohooamplience/mzz71624_grey_xl?$product_page_main_magic_zoom$',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Jean Jacket',
        imageUrl: 'https://i.pinimg.com/originals/ac/18/ef/ac18ef9829562d9a28e1c26e602ff4c4.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Petite Trench Coat',
        imageUrl: 'https://anninc.scene7.com/is/image/AN/512514_6382_ALT2?$pdp2x$',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://www.lulus.com/images/product/xlarge/141658.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/09/02/goods-first-img/1511890386247138905.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://www.lulus.com/images/product/xlarge/3181510_601482.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://images.dresshead.com/images/Red%20Dresses/5460244/large/1.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://cdn11.bigcommerce.com/s-3myigocg/images/stencil/500x659/products/16161/258212/ZZZZ6325__97388.1570110019.jpg?c=2',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://zefinka.com/5123%20-%20Cropped%20Yellow%20Tracksuit_1.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://cdn.tobi.com/product_images/md/2/white-party-in-the-hills-ruffle-blouse.jpg',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://media.karousell.com/media/photos/products/2018/09/10/bape_1st_camo_down_vest_1536509391_958591a3_progressive.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Empyre-Bounce-Floral-Navy-Short-Sleeve-Button-Up-Shirt-_295881.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Black Longsleeve',
        imageUrl: 'https://content.woolovers.com/img/747x856/17365_b20m_black_m_3.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://www.80scasualclassics.co.uk/images/fila-vintage-ringer-t-shirt-pink-chalk-white-p13213-75107_image.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://sc02.alicdn.com/kf/HTB1wbZOHFXXXXc7XVXXq6xXFXXXT/mens-Denim-Shirt-With-Long-Sleeves-In.jpg_350x350.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://s1.thcdn.com/productimg/1600/1600/11970133-1654627065444930.jpg',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;

    

  