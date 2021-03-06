function uuid() {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}
const testgoods = {
  pop2: {
    1: [
      {
        title: 'CLC1',
        uuid: uuid,
        show: {
          img: './img/CLC.5186b1ce.jpg'
        },
        price: '￥price',
        cfav: '123'
      },
      {
        title: 'CLC2',
        uuid: uuid,
        show: {
          img: './img/CLC.5186b1ce.jpg'
        },
        price: '￥price',
        cfav: '123'
      },
      {
        title: 'CLC3',
        show: {
          img: './img/CLC.5186b1ce.jpg'
        },
        price: '￥price',
        cfav: '123'
      },
      {
        title: 'CLC4',
        show: {
          img: './img/CLC.5186b1ce.jpg'
        },
        price: '￥price',
        cfav: '123'
      }
    ],
    2: [
      {
        title: 'CLC5',
        show: {
          img: './img/CLC.5186b1ce.jpg'
        },
        price: '￥price',
        cfav: '123'
      },
      {
        title: 'CLC6',
        show: {
          img: './img/CLC.5186b1ce.jpg'
        },
        price: '￥price',
        cfav: '123'
      },
      {
        title: 'CLC7',
        show: {
          img: './img/CLC.5186b1ce.jpg'
        },
        price: '￥price',
        cfav: '123'
      },
      {
        title: 'CLC8',
        show: {
          img: './img/CLC.5186b1ce.jpg'
        },
        price: '￥price',
        cfav: '123'
      }
    ]
  },
  pop: [
    {
      title: 'CLC1',
       uuid: uuid,
      show: {
        img: './img/CLC.5186b1ce.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'CLC2',
       uuid: uuid,
      show: {
        img: './img/CLC.5186b1ce.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'CLC3',
       uuid: uuid,
      show: {
        img: './img/CLC.5186b1ce.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'CLC4',
       uuid: uuid,
      show: {
        img: './img/CLC.5186b1ce.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'CLC5',
       uuid: uuid,
      show: {
        img: './img/CLC.5186b1ce.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'CLC6',
       uuid: uuid,
      show: {
        img: './img/CLC.5186b1ce.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'CLC7',
       uuid: uuid,
      show: {
        img: './img/CLC.5186b1ce.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'CLC8',
       uuid: uuid,
      show: {
        img: './img/CLC.5186b1ce.jpg'
      },
      price: '￥price',
      cfav: '123'
    }
  ],
  new: [
    {
      title: '(G)-IDLE1',
       uuid: uuid,
      show: {
        img: '/(G)-IDLE.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: '(G)-IDLE2',
       uuid: uuid,
      show: {
        img: '/(G)-IDLE.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: '(G)-IDLE3',
       uuid: uuid,
      show: {
        img: '/(G)-IDLE.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: '(G)-IDLE4',
       uuid: uuid,
      show: {
        img: '/(G)-IDLE.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: '(G)-IDLE5',
       uuid: uuid,
      show: {
        img: '/(G)-IDLE.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: '(G)-IDLE6',
        uuid: uuid,
      show: {
        img: '/(G)-IDLE.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: '(G)-IDLE7',
       uuid: uuid,
      show: {
        img: '/(G)-IDLE.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: '(G)-IDLE8',
       uuid: uuid,
      show: {
        img: '/(G)-IDLE.jpg'
      },
      price: '￥price',
      cfav: '123'
    }
  ],
  sell: [
    {
      title: 'test1',
       uuid: uuid,
      show: {
        img: '/CLC2.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'test2',
       uuid: uuid,
      show: {
        img: '/CLC2.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'test3',
       uuid: uuid,
      show: {
        img: '/CLC3.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'test4',
       uuid: uuid,
      show: {
        img: '/CLC2.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'test5',
       uuid: uuid,
      show: {
        img: '/CLC2.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'test6',
       uuid: uuid,
      show: {
        img: '/CLC2.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'test7',
       uuid: uuid,
      show: {
        img: '/CLC2.jpg'
      },
      price: '￥price',
      cfav: '123'
    },
    {
      title: 'test8',
       uuid: uuid,
      show: {
        img: '/CLC3.jpg'
      },
      price: '￥price',
      cfav: '123'
    }
  ]
}

export default testgoods
