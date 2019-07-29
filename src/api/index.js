let host = 'http://localhost:8080'
let { NODE_ENV, VUE_APP_API } = process.env
let apiPrefix = '/api/v1'
// if (NODE_ENV === 'development' || (NODE_ENV === 'production' && VUE_APP_API === 'rap')) {
//   host = 'http://rap2api.taobao.org/app/mock/13801'
// }

const url = {
  login: {
    method: 'post',
    path: apiPrefix + '/site/login',
    implemented: true,
  },
  logout: {
    method: 'post',
    path: apiPrefix + '/user/logout',
    implemented: true,
  },
  userInfo: {
    method: 'get',
    path: apiPrefix + '/user',
    implemented: true,
  },
  getCode: {
    method: 'post',
    path: apiPrefix + '/site/sendVerifyCode',
    implemented: true,
  },
  navList: {
    method: 'get',
    path: apiPrefix + '/site/nav',
    implemented: true,
  },
  // homePage: '/home/homePage',
  // category: '/home/category',
  // commodity: '/home/commodityList',
  // forRecommend: '/home/forRecommend',
  // productView: '/product/productView',
  // recommend: '/product/recommend',
  // estDelivery: '/product/estDelivery',
  cartIndex: {
    method: 'get',
    path: apiPrefix + '/cart',
    implemented: true,
  },
  // cartSelect: '/cart/selcart',
  cartEdit: {
    method: 'patch',
    path: apiPrefix + '/cart/item/:id',
    implemented: true,
  },
  // cartAdd: {
  //   method: 'get',
  //   path: apiPrefix + '/cart/item/:id',
  //   implemented: true,
  // },
  cartDelete: {
    method: 'delete',
    path: apiPrefix + '/cart/item/:id',
    implemented: true,
  },
  // cartSelService: '/cart/selService',
  // cartCount: '/cart/count',
  addressList: {
    method: 'get',
    path: apiPrefix + '/address',
    implemented: true,
  },
  addressAdd: {
    method: 'post',
    path: apiPrefix + '/address',
    implemented: true,
  },
  addressSave: {
    method: 'patch',
    path: apiPrefix + '/address/:id',
    implemented: true,
  },
  addressView: {
    method: 'get',
    path: apiPrefix + '/address/:id',
    implemented: true,
  },
  addressDel: {
    method: 'delete',
    path: apiPrefix + '/address/:id',
    implemented: true,
  },
  // addressAll: '/address/all',
  // addressRegion: '/address/region',
  // orderCheckout: '/order/checkout',
  // orderList: '/order/list',
  // orderView: '/order/view'
}

Object.keys(url).forEach(key => {
  url[key].path = host + url[key].path
})

export default url
