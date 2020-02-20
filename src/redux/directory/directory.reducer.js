const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://blog.lids.com/wp-content/uploads/2018/06/DSC_7322-Edit.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.pinimg.com/originals/3f/d5/f8/3fd5f8f5ec096e9ab22e5234ae73251b.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://scstylecaster.files.wordpress.com/2019/10/2020-sneaker-trends.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://shop.r10s.jp/fashionhime/cabinet/06441737/10005546_1.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://www.casioindiashop.com/images/watches/mens-enticer-watches.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
    ]
};


const directoryReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
