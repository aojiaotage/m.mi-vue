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
  homePage: {
    method: 'get',
    path: apiPrefix + '/site/home',
    implemented: true,
  },
  category: {
    method: 'get',
    path: apiPrefix + '/site/category',
    implemented: true,
  },
  // commodity: {
  //   method: 'get',
  //   path: apiPrefix + '/site/category',
  //   implemented: true,
  // },
  forRecommend: {
    method: 'get',
    path: apiPrefix + '/site/forRecommend',
    implemented: true,
  },
  productView: {
    method: 'get',
    path: apiPrefix + '/site/product/:id',
    implemented: true,
  },
  recommend: {
    method: 'get',
    path: apiPrefix + '/site/recommend',
    implemented: true,
  },
  estDelivery: {
    method: 'get',
    path: apiPrefix + '/site/estDelivery',
    implemented: true,
  },
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
  cartAdd: {
    method: 'post',
    path: apiPrefix + '/cart/item',
    implemented: true,
  },
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
