window.DEMO_DATA = {
  station: '美团天虹总部大厦无人机空投柜',
  categories: [
    {id:'all',name:'全部',img:'assets/video-one/category-all.png'},
    {id:'milk',name:'奶茶',img:'assets/video-one/category-milk.png'},
    {id:'coffee',name:'咖啡',img:'assets/video-one/category-coffee.png'},
    {id:'fruit',name:'纯茶/果汁',img:'assets/video-one/category-fruit.png'},
    {id:'dessert',name:'冰凉甜点',img:'assets/video-one/category-dessert.png'}
  ],
  stores: [
    {id:'chali',name:'茶理宜世（嘉乐道店）',short:'茶理宜世（嘉乐道…',logo:'assets/video-one/logo-chali.png',rating:'4.6',min:28,time:35,delivery:4.5,packing:1,products:[
      {id:'ganglan',name:'港港幽兰「浓醇港味奶油顶」',img:'assets/video-one/chali-ganglan.png',price:22,sales:'14',badge:'招牌',tags:['饮品','1份'],category:'milk',cap:3,flavors:true,desc:'浓醇港味 · 奶油顶 · 标准冰'},
      {id:'qingti',name:'莹莹「青提花香毛尖」',img:'assets/video-one/chali-qingti.png',price:17,sales:'100+',badge:'招牌',tags:['清新果香','真茶真果'],category:'fruit',cap:3,large:5},
      {id:'yanwu',name:'烟雨乌龙「金奖白桃乌龙」',img:'assets/video-one/chali-yanwu.png',price:17,sales:'400+',badge:'招牌',tags:['真牛乳','乌龙茶'],category:'milk',cap:3,large:5},
      {id:'youlan',name:'椰都幽兰「锡兰红茶奶油顶」',img:'assets/video-one/chali-ganglan.png',price:22,sales:'32',tags:['饮品','奶油顶'],category:'milk',cap:3}
    ]},
    {id:'cloud',name:'CloudWing·天空市集（海岸城店）',short:'CloudWing·天…',logo:'assets/video-one/logo-cloudwing.png',rating:'4.7',min:30,time:25,delivery:4.5,packing:0,products:[
      {id:'peach-set',name:'【微醺套餐】桃桃嗨棒',img:'assets/video-one/cloud-peach.png',price:39.9,original:44.3,sales:'8',tags:['套餐','1人份'],category:'dessert',cap:2,discount:'9折',spec:true},
      {id:'mangosteen',name:'山竹口味雪糕',img:'assets/video-one/cloud-mangosteen.png',price:15,sales:'51',tags:['店内热销第1名','300克'],category:'dessert',cap:6,direct:true},
      {id:'chocolate',name:'巧乐兹巧脆棒',img:'assets/video-one/cloud-chocolate.png',price:10.9,sales:'50',tags:['店内热销第2名','300克'],category:'dessert',cap:6,direct:true},
      {id:'juice',name:'NFC橙汁',img:'assets/video-one/cloud-peach.png',price:12,sales:'47',tags:['100%果汁','300毫升'],category:'fruit',cap:4,direct:true}
    ]},
    {id:'yidiandian',name:'1点点（保利文化广场店）',short:'1点点（保利文…',logo:'assets/video-one/logo-yidiandian.png',rating:'4.6',min:20,time:35,delivery:4.5,packing:0.6,products:[
      {id:'y-milk',name:'奶茶',img:'assets/video-one/milk-yidiandian.png',price:13,sales:'100+',tags:['鲜醇奶香','1杯'],category:'milk',cap:4},
      {id:'y-matcha',name:'抹茶',img:'assets/video-one/matcha-yidiandian.png',price:13,sales:'74',tags:['细腻抹茶','1杯'],category:'milk',cap:4},
      {id:'y-boba',name:'波霸奶茶',img:'assets/video-one/boba-yidiandian.png',price:13,sales:'700+',tags:['Q弹波霸','1杯'],category:'milk',cap:4}
    ]},
    {id:'mixue',name:'蜜雪冰城（海岸城店）',short:'蜜雪冰城（海岸…',logo:'assets/video-two/logo-mixue.png',rating:'4.2',min:17,time:38,delivery:2,packing:0.6,products:[
      {id:'lemon',name:'冰鲜柠檬水',img:'assets/video-two/mixue-lemon-water.jpg',price:5.2,sales:'1000+',badge:'招牌',tags:['近期500+人已下单','现切现捣','店内复购第1名'],plainTags:['1杯','无茶底'],category:'fruit',cap:2},
      {id:'baba',name:'三拼霸霸奶茶',img:'assets/video-two/mixue-three-toppings.jpg',price:10.1,original:10.6,sales:'300+',badge:'招牌',tags:['冷热皆宜','超多料'],plainTags:['1杯','红茶','珍珠、布丁、椰果酱'],discount:'9.6折｜限1份',category:'milk',cap:1},
      {id:'taro',name:'芋泥鲜牛乳',img:'assets/video-two/mixue-taro-milk.jpg',price:12,sales:'0',badge:'新品',tags:[],plainTags:['1杯','冷冻芋泥、鲜牛乳','芋泥绵密、保留芋头颗粒，搭配…'],category:'milk',cap:4},
      {id:'lemon-tea',name:'柠檬红茶霸气桶',img:'assets/video-two/mixue-lemon-tea.jpg',price:8.7,original:9.2,sales:'300+',tags:['清爽大爆发，现泡'],plainTags:['1杯','红茶','柠檬'],discount:'9.5折｜限1份',category:'fruit',cap:1},
      {id:'longjing',name:'香柠龙井霸气桶',img:'assets/video-one/mixue-longjing.png',price:9.2,sales:'100+',tags:['清爽大爆发，现泡'],plainTags:['1杯','龙井茶','青柠'],category:'fruit',cap:2},
      {id:'brown',name:'黑糖珍珠奶茶',img:'assets/video-one/mixue-brown.png',price:9.2,sales:'2',badge:'新品',tags:[],plainTags:['1杯','红茶','黑糖、黑糖风味浓郁'],category:'milk',cap:3}
    ]},
    {id:'chabaidao',name:'茶百道（深圳湾科技生态园店）',short:'茶百道（深圳湾…',logo:'assets/video-two/logo-chabaidao.png',rating:'4.6',min:25,time:37,delivery:4.5,packing:1,products:[
      {id:'jasmine',name:'茉莉奶绿',img:'assets/video-two/chabaidao-jasmine-milk.jpg',price:13,sales:'100+',tags:['真茶真奶','超甜人气'],category:'milk',large:2,cap:4},
      {id:'coconut',name:'黄金椰椰乌龙',img:'assets/video-two/chabaidao-coconut-oolong.jpg',price:15,sales:'66',tags:['椰香乌龙','清爽回甘'],category:'milk',large:3,cap:4},
      {id:'brown-pro',name:'黑糖珍珠奶茶Pro',img:'assets/video-two/chabaidao-brown-sugar-pro.jpg',price:13,sales:'200+',tags:['黑糖珍珠','1人份'],category:'milk',large:2,cap:4}
    ]}
  ],
  stations:[
    {id:'tianhong',name:'美团天虹总部大厦无人机空投柜',address:'天虹总部大厦东侧广场，靠近大厦入口',distance:'8m',district:'南山区',delivery:false},
    {id:'storage',name:'美团中国储能大厦无人机空投柜',address:'中国储能大厦民生银行观光扶梯右侧10米',distance:'267m',district:'南山区',delivery:true},
    {id:'xunmei',name:'美团讯美科技广场3号楼西南角无人机空投柜',address:'3号楼裙楼1层美团外卖柜斜对面',distance:'531m',district:'南山区',delivery:true},
    {id:'cas',name:'美团中科院深圳先进院无人机空投柜',address:'靠近E栋出口，宿舍楼出门右前方50m',distance:'3.2km',district:'南山区',delivery:false},
    {id:'uniworld',name:'美团壹方天地A区-B区连廊处无人机空投柜',address:'壹方天地A区与B区连廊天桥下',distance:'12km',district:'龙华区',delivery:false}
  ]
};
