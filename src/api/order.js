import fetch from '@/api/fetch.js'

class Order {
  static checkout () {
    return fetch('orderCheckout')
  }

  static list (data) {
    return fetch('orderList', data)
  }

  static view (data) {
    return fetch('orderView', data, {
      params: {
        id: data.id,
      },
    })
  }
}

export default Order
