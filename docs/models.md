# 数据模型设计

## 用户

```js
{
  _id:'xxx'
  username: '15200005565',
  password: 'xxx123'
}
```

## 地址

```js
{
  _id:'收货地址的id',
  username:'15200005565' // 与用户产生关联
  city:'北京',
  department:'xx小区',
  houseNumber:'门牌号',
  name:'张三',
  phone:'13211112222',
}
```

## 商店

```js
{
  _id:'商店id',
  name:'沃尔玛',
  imgUrl:'xxx.png',
  sales:1000, // 月售
  expressLimit:0, // 起送价格
  expressPrice:5, // 快递价格
  slogan:'送送送',
}
```

## 商品

```js
{
  _id:'商品id',
  shopId:'商店id' // 和商店产生关联
  name:'番茄 250g每份',
  imgUrl:'xxx.png',
  sales:10,
  price:33.6,
  oldPrice:100
}
```

## 订单 TODO

TODO
