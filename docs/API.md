# API 接口设计

## 注册

### url

`/api/user/register`

### method

`post`

### request body

```js
{
  username: '15200005565',
  password: 'xxx123'
}
```

### response body

```js
{
  errno: 0,
  message: 'errno !== 0 时的提示信息'
}
```

## 登陆

### url

`/api/user/login`

### method

`post`

### request body

```js
{
  username: '15200005565',
  password: 'xxx123'
}
```

### response body

```js
{
  errno: 0,
  message: 'errno !== 0 时的提示信息'
}
```

## 获取用户信息

### url

`/api/user/info`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data:{
    _id:'6232ec5f0a481957e0c8a0cb'
    username: 'xxx',
  }
  message: 'errno !== 0 时的提示信息'
}
```

## 新建收货地址

### url

`/api/user/address`

### method

`post`

### request body

```js
{
  username: 'xxx',
  city:'北京',
  department:'xx小区',
  houseNumber:'门牌号',
  name:'张三',
  phone:'13211112222',
}
```

### response body

```js
{
  errno: 0,
  data:{
    _id:'收货地址的id',
  }
  message: 'errno !== 0 时的提示信息'
}
```

## 获取收货地址列表

### url

`/api/user/address`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data:[
    {
      _id:'收货地址的id',
      city:'北京',
      department:'xx小区',
      houseNumber:'门牌号',
      name:'张三',
      phone:'13211112222',
    },
    {},
  ],
  message: 'errno !== 0 时的提示信息'
}
```

## 根据 id 获取单个收货地址

### url

`/api/user/address/:id`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data:{
    _id:'收货地址的id',
    city:'北京',
    department:'xx小区',
    houseNumber:'门牌号',
    name:'张三',
    phone:'13211112222',
  },
  message: 'errno !== 0 时的提示信息'
}
```

## 更新收货地址

### url

`/api/user/address/:id`

### method

`patch`

### request body

```js
{
  city:'北京',
  department:'xx小区',
  houseNumber:'门牌号',
  name:'张三',
  phone:'13211112222',
}
```

### response body

```js
{
  errno: 0,
  message: 'errno !== 0 时的提示信息'
}
```

## 热门店铺

### url

`/api/shop/hot-list`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data:[
    {
      _id:'商店id',
      name:'沃尔玛',
      imgUrl:'xxx.png',
      sales:1000, // 月售
      expressLimit:0, // 起送价格
      expressPrice:5, // 快递价格
      slogan:'送送送',
    },
  ],
  message: 'errno !== 0 时的提示信息'
}
```

## 单个商店的信息

### url

`/api/shop/:id`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data:{
    _id:'商店id',
    name:'沃尔玛',
    imgUrl:'xxx.png',
    sales:1000, // 月售
    expressLimit:0, // 起送价格
    expressPrice:5, // 快递价格
    slogan:'送送送',
  },
  message: 'errno !== 0 时的提示信息'
}
```

## 查询某商店的商品列表

### url

`/api/shop/:id/products`

### method

`get`

### query

`tab=all`

举例:`api/shop/1/products?tab=all`

### request body

无

### response body

```js
{
  errno: 0,
  data:[
    {
      _id:'商品id',
      name:'番茄 250g每份',
      imgUrl:'xxx.png',
      sales:10,
      price:33.6,
      oldPrice:100
    },
  ],
  message: 'errno !== 0 时的提示信息'
}
```

## 创建订单

### url

`/api/order`

### method

`post`

### request body

```js
{
  addressId:'', //地址 id
  shopId:'', // 商店 id
  shopName:'',
  isCanceled:False, // 是否被取消
  products:[
    {
      id:'', // 商品 id
      num:5 //购买数量
    }
  ]
}
```

### response body

```js
{
  errno: 0,
  data:{
    _id: '' // 订单 id
  },
  message: 'errno !== 0 时的提示信息'
}
```

## 获取订单列表
### url

`/api/order`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data:{
    _id:'订单id',
    username: 'xxx',
    shopId: '商店id',
    shopName: 'wtm',
    isCanceled: false,
    address:{
      username:'15200005565',
      city:'北京',
      department:'xx小区',
      houseNumber:'门牌号',
      name:'张三',
      phone:'13211112222',
    },
    products: [
      {
        product: {
          shopId:'商店id',
          name:'番茄 250g每份',
          imgUrl:'xxx.png',
          sales:10,
          price:33.6,
          oldPrice:100,
          tabs: ['all', 'seckill'] // 左侧 tab 类型
        },
        orderSales: 10,
      },
    ],
  },
  message: 'errno !== 0 时的提示信息'
}
```