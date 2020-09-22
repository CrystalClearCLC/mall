

const testGoodsInfo = {
  columns: ['销量 684','收藏246人', '默认快递'],
  detailInfo: {
    desc: '2018春秋东白色T恤吗女长袖打底衫韩版新款圆领纯棉百搭上衣',
    detailImage:[
      {
        anchor: 'model_img',
        desc: '',
        key: '穿着效果',
        list:[
          '/CLC.jpg',
          '/CLC2.jpg',
          '/CLC3.jpg',
          '/CLC4.jpg',
          '/(G)-IDLE.jpg',
        ]
      }
    ],
    esi: '',
    isLogin: false
  },
  itemInfo: {
    addCartTios: false,
    admin: false,
    cFav: 0,
    cartNum: 0
   },
   itemParams: {
     info: {
        anchor: '',
        key: '产品参数',
        set: [
          {key:'图案', value: '宫廷复古图/民族复古图，字母/文字/数字'},
          {key:'厂名', value: '艾玫莉服饰有限公司'},
          {key:'尺码', value: 'XL,L,M,XXL'},
          {key:'颜色', value: '黑白拼接'},
          {key:'版型', value: '宽松'},
          {key:'图案', value: '宫廷复古图/民族复古图，字母/文字/数字'},
          {key:'厂名', value: '艾玫莉服饰有限公司'},
          {key:'尺码', value: 'XL,L,M,XXL'},
          {key:'颜色', value: '黑白拼接'},
          {key:'版型', value: '宽松'},
          {key:'图案', value: '宫廷复古图/民族复古图，字母/文字/数字'},
          {key:'厂名', value: '艾玫莉服饰有限公司'},
          {key:'尺码', value: 'XL,L,M,XXL'},
          {key:'颜色', value: '黑白拼接'},
          {key:'版型', value: '宽松'}
        ]
     },
     rule: {
        anchor: 'size_info',
        disclaimer: '* 以上尺寸为实物人工测量，因测量当时不同会有1-2cm误差',
        key:'尺码说明',
        tables: [

            ['尺码', 'M', 'L', 'XL', 'XXL'],
            ['衣长', '61.5', '63', '64.5', '66'],
            ['胸围', '98', '104', '110', '116'],
            ['袖长', '63', '66', '68.5', '70.5']

        ]
     }
   },
   promotions: {
     alertData:{

     },
     link: ''
   },
   //评论
  rate: {
    cRate: 144,
    list: [
      {
         canExplain: false,
         content: `刚好合适，物美价廉，衣服面料很好，穿着很舒服，版型也好看，非常棒。
                   刚好合适，物美价廉，衣服面料很好，穿着很舒服，版型也好看，非常棒。`,
         created: 1535694719,
         extraInfo: ['是否合身：合身'],
         images: ['/CLC3.jpg', '/CLC4.jpg'],
         isAnonymous: 1,
         isEmpty: 0,
         level: '',
         rateId: '11624z5q',
         style: '颜色：上衣+裤子 尺码：M',
         user: {
           username: '用户12345678',
           avatar: '/girl.jpg'
         }
      }
    ]
  },
  shopInfo: {
    allGoodsUrl: '',
    cFans: 177145,
    cGoods: 99,
    cSells: 57876,
    categories:[
      {},{}
    ],
    isMarked: false,
    level: 2,
    logoimg: '/CLC3.jpg',
    name: ' 仲陌美',
    nonsupportReasonRefound: false,
    score:[
      {isBetter: false, name: '描述相符' , score: 4.46},
      {isBetter: true, name: '价格合理' , score: 5},
      {isBetter: false, name: '质量满意' , score: 4.62}
    ]
  },
   skuInfo: {
     defaultPrice: '￥29.98',
     isAbroad: false,
     proceRange:''
   },
   topBar: {
     img: ''
   }
}

class goodinfo {
  constructor(detailInfo, itemParams) {
    this.detailImage = detailInfo.detailImage,
    this.goodinfo = itemParams.info,
    this.goodrule = itemParams.rule
  }
}

export {testGoodsInfo, goodinfo}
