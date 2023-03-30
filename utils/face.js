import _ from 'lodash'
import {segment} from "oicq";
export const faceMap = {
  0: '惊讶',
  1: '撇嘴',
  2: '色',
  3: '发呆',
  4: '得意',
  5: '流泪',
  6: '害羞',
  7: '闭嘴',
  8: '睡',
  9: '大哭',
  10: '尴尬',
  11: '发怒',
  12: '调皮',
  13: '呲牙',
  14: '微笑',
  15: '难过',
  16: '酷',
  18: '抓狂',
  19: '吐',
  20: '偷笑',
  21: '可爱',
  22: '白眼',
  23: '傲慢',
  24: '饥饿',
  25: '困',
  26: '惊恐',
  27: '流汗',
  28: '憨笑',
  29: '悠闲',
  30: '奋斗',
  31: '咒骂',
  32: '疑问',
  33: '嘘',
  34: '晕',
  35: '折磨',
  36: '衰',
  37: '骷髅',
  38: '敲打',
  39: '再见',
  41: '发抖',
  42: '爱情',
  43: '跳跳',
  46: '猪头',
  49: '拥抱',
  53: '蛋糕',
  54: '闪电',
  55: '炸弹',
  56: '刀',
  57: '足球',
  59: '便便',
  60: '咖啡',
  61: '饭',
  63: '玫瑰',
  64: '凋谢',
  66: '爱心',
  67: '心碎',
  69: '礼物',
  74: '太阳',
  75: '月亮',
  76: '赞',
  77: '踩',
  78: '握手',
  79: '胜利',
  85: '飞吻',
  86: '怄火',
  89: '西瓜',
  96: '冷汗',
  97: '擦汗',
  98: '抠鼻',
  99: '鼓掌',
  100: '糗大了',
  101: '坏笑',
  102: '左哼哼',
  103: '右哼哼',
  104: '哈欠',
  105: '鄙视',
  106: '委屈',
  107: '快哭了',
  108: '阴险',
  109: '亲亲',
  110: '吓',
  111: '可怜',
  112: '菜刀',
  113: '啤酒',
  114: '篮球',
  115: '乒乓',
  116: '示爱',
  117: '瓢虫',
  118: '抱拳',
  119: '勾引',
  120: '拳头',
  121: '差劲',
  122: '爱你',
  123: '不',
  124: '好',
  125: '转圈',
  126: '磕头',
  127: '回头',
  128: '跳绳',
  129: '挥手',
  130: '激动',
  131: '街舞',
  132: '献吻',
  133: '左太极',
  134: '右太极',
  136: '双喜',
  137: '鞭炮',
  138: '灯笼',
  140: 'K歌',
  144: '喝彩',
  145: '祈祷',
  146: '爆筋',
  147: '棒棒糖',
  148: '喝奶',
  151: '飞机',
  158: '钞票',
  168: '药',
  169: '手枪',
  171: '茶',
  172: '眨眼睛',
  173: '泪奔',
  174: '无奈',
  175: '卖萌',
  176: '小纠结',
  177: '喷血',
  178: '斜眼笑',
  179: '表情',
  180: '惊喜',
  181: '骚扰',
  182: '笑哭',
  183: '我最美',
  184: '河蟹',
  185: '羊驼',
  187: '幽灵',
  188: '蛋',
  190: '菊花',
  192: '红包',
  193: '大笑',
  194: '不开心',
  197: '冷漠',
  198: '呃',
  199: '好棒',
  200: '拜托',
  201: '点赞',
  202: '无聊',
  203: '托脸',
  204: '吃',
  205: '送花',
  206: '害怕',
  207: '花痴',
  208: '小样儿',
  210: '飙泪',
  211: '我不看',
  212: '托腮',
  214: '啵啵',
  215: '糊脸',
  216: '拍头',
  217: '扯一扯',
  218: '舔一舔',
  219: '蹭一蹭',
  220: '拽炸天',
  221: '顶呱呱',
  245: '加油必胜',
  246: '加油抱抱',
  247: '口罩护体',
  260: '/搬砖中',
  261: '/忙到飞起',
  262: '/脑阔疼',
  263: '/沧桑',
  264: '/捂脸',
  265: '/辣眼睛',
  266: '/哦哟',
  267: '/头秃',
  268: '/问号脸',
  269: '/暗中观察',
  270: '/emm',
  271: '/吃瓜',
  272: '/呵呵哒',
  273: '/我酸了',
  274: '/太南了',
  276: '/辣椒酱',
  277: '/汪汪',
  278: '/汗',
  279: '/打脸',
  280: '/击掌',
  281: '/无眼笑',
  282: '/敬礼',
  283: '/狂笑',
  284: '/面无表情',
  285: '/摸鱼',
  286: '/魔鬼笑',
  287: '/哦',
  288: '/请',
  289: '/睁眼',
  290: '/敲开心',
  291: '/震惊',
  292: '/让我康康',
  293: '/摸锦鲤',
  294: '/期待',
  295: '/拿到红包',
  296: '/真好',
  297: '/拜谢',
  298: '/元宝',
  299: '/牛啊',
  300: '/胖三斤',
  301: '/好闪',
  302: '/左拜年',
  303: '/右拜年',
  304: '/红包包',
  305: '/右亲亲',
  306: '/牛气冲天',
  307: '/喵喵',
  308: '/求红包',
  309: '/谢红包',
  310: '/新年烟花',
  311: '/打call',
  312: '/变形',
  313: '/嗑到了',
  314: '/仔细分析',
  315: '/加油',
  316: '/我没事',
  317: '/菜狗',
  318: '/崇拜',
  319: '/比心',
  320: '/庆祝',
  321: '/老色痞',
  322: '/拒绝',
  323: '/嫌弃',
  324: '/吃糖'
}

export const faceMapReverse = {
  惊讶: '0',
  撇嘴: '1',
  色: '2',
  发呆: '3',
  得意: '4',
  流泪: '5',
  害羞: '6',
  闭嘴: '7',
  睡: '8',
  大哭: '9',
  尴尬: '10',
  发怒: '11',
  调皮: '12',
  呲牙: '13',
  微笑: '14',
  难过: '15',
  酷: '16',
  抓狂: '18',
  吐: '19',
  偷笑: '20',
  可爱: '21',
  白眼: '22',
  傲慢: '23',
  饥饿: '24',
  困: '25',
  惊恐: '26',
  流汗: '27',
  憨笑: '28',
  悠闲: '29',
  奋斗: '30',
  咒骂: '31',
  疑问: '32',
  嘘: '33',
  晕: '34',
  折磨: '35',
  衰: '36',
  骷髅: '37',
  敲打: '38',
  再见: '39',
  发抖: '41',
  爱情: '42',
  跳跳: '43',
  猪头: '46',
  拥抱: '49',
  蛋糕: '53',
  闪电: '54',
  炸弹: '55',
  刀: '56',
  足球: '57',
  便便: '59',
  咖啡: '60',
  饭: '61',
  玫瑰: '63',
  凋谢: '64',
  爱心: '66',
  心碎: '67',
  礼物: '69',
  太阳: '74',
  月亮: '75',
  赞: '76',
  踩: '77',
  握手: '78',
  胜利: '79',
  飞吻: '85',
  怄火: '86',
  西瓜: '89',
  冷汗: '96',
  擦汗: '97',
  抠鼻: '98',
  鼓掌: '99',
  糗大了: '100',
  坏笑: '101',
  左哼哼: '102',
  右哼哼: '103',
  哈欠: '104',
  鄙视: '105',
  委屈: '106',
  快哭了: '107',
  阴险: '108',
  亲亲: '109',
  吓: '110',
  可怜: '111',
  菜刀: '112',
  啤酒: '113',
  篮球: '114',
  乒乓: '115',
  示爱: '116',
  瓢虫: '117',
  抱拳: '118',
  勾引: '119',
  拳头: '120',
  差劲: '121',
  爱你: '122',
  不: '123',
  好: '124',
  转圈: '125',
  磕头: '126',
  回头: '127',
  跳绳: '128',
  挥手: '129',
  激动: '130',
  街舞: '131',
  献吻: '132',
  左太极: '133',
  右太极: '134',
  双喜: '136',
  鞭炮: '137',
  灯笼: '138',
  K歌: '140',
  喝彩: '144',
  祈祷: '145',
  爆筋: '146',
  棒棒糖: '147',
  喝奶: '148',
  飞机: '151',
  钞票: '158',
  药: '168',
  手枪: '169',
  茶: '171',
  眨眼睛: '172',
  泪奔: '173',
  无奈: '174',
  卖萌: '175',
  小纠结: '176',
  喷血: '177',
  斜眼笑: '178',
  表情: '179',
  惊喜: '180',
  骚扰: '181',
  笑哭: '182',
  我最美: '183',
  河蟹: '184',
  羊驼: '185',
  幽灵: '187',
  蛋: '188',
  菊花: '190',
  红包: '192',
  大笑: '193',
  不开心: '194',
  冷漠: '197',
  呃: '198',
  好棒: '199',
  拜托: '200',
  点赞: '201',
  无聊: '202',
  托脸: '203',
  吃: '204',
  送花: '205',
  害怕: '206',
  花痴: '207',
  小样儿: '208',
  飙泪: '210',
  我不看: '211',
  托腮: '212',
  啵啵: '214',
  糊脸: '215',
  拍头: '216',
  扯一扯: '217',
  舔一舔: '218',
  蹭一蹭: '219',
  拽炸天: '220',
  顶呱呱: '221',
  加油必胜: '245',
  加油抱抱: '246',
  口罩护体: '247',
  '/搬砖中': '260',
  '/忙到飞起': '261',
  '/脑阔疼': '262',
  '/沧桑': '263',
  '/捂脸': '264',
  '/辣眼睛': '265',
  '/哦哟': '266',
  '/头秃': '267',
  '/问号脸': '268',
  '/暗中观察': '269',
  '/emm': '270',
  '/吃瓜': '271',
  '/呵呵哒': '272',
  '/我酸了': '273',
  '/太南了': '274',
  '/辣椒酱': '276',
  '/汪汪': '277',
  '/汗': '278',
  '/打脸': '279',
  '/击掌': '280',
  '/无眼笑': '281',
  '/敬礼': '282',
  '/狂笑': '283',
  '/面无表情': '284',
  '/摸鱼': '285',
  '/魔鬼笑': '286',
  '/哦': '287',
  '/请': '288',
  '/睁眼': '289',
  '/敲开心': '290',
  '/震惊': '291',
  '/让我康康': '292',
  '/摸锦鲤': '293',
  '/期待': '294',
  '/拿到红包': '295',
  '/真好': '296',
  '/拜谢': '297',
  '/元宝': '298',
  '/牛啊': '299',
  '/胖三斤': '300',
  '/好闪': '301',
  '/左拜年': '302',
  '/右拜年': '303',
  '/红包包': '304',
  '/右亲亲': '305',
  '/牛气冲天': '306',
  '/喵喵': '307',
  '/求红包': '308',
  '/谢红包': '309',
  '/新年烟花': '310',
  '/打call': '311',
  '/变形': '312',
  '/嗑到了': '313',
  '/仔细分析': '314',
  '/加油': '315',
  '/我没事': '316',
  '/菜狗': '317',
  '/崇拜': '318',
  '/比心': '319',
  '/庆祝': '320',
  '/老色痞': '321',
  '/拒绝': '322',
  '/嫌弃': '323',
  '/吃糖': '324'
}

export async function convertFaces (msg, handleAt = false, e) {
  handleAt = e?.isGroup && handleAt
  let groupMembers
  let groupCardQQMap = {}
  if (handleAt) {
    groupMembers = await e.group.getMemberMap()
    for (let key of groupMembers.keys()) {
      groupCardQQMap[groupMembers.get(key).card || groupMembers.get(key).nickname] = groupMembers.get(key).user_id
    }
  }
  let tmpMsg = ''
  let tmpFace = ''
  let tmpAt = ''
  let foundFace = false
  let foundAt = false
  let msgs = []
  for (let i = 0; i < msg.length; i++) {
    // console.log(msg[i])
    if (msg[i] === '[') {
      foundFace = true
      continue
    }
    if (!foundFace) {
      if (handleAt && msg[i] === '@') {
        foundAt = true
        continue
      }
      if (handleAt && foundAt) {
        tmpAt += msg[i]
        if (groupCardQQMap[tmpAt]) {
          foundAt = false
          msgs.push(segment.at(groupCardQQMap[tmpAt], groupMembers.get(groupCardQQMap[tmpAt]).card, false))
          tmpAt = ''
          continue
        }
      } else {
        tmpMsg += msg[i]
      }
    } else {
      if (msg[i] !== ']') {
        tmpFace += msg[i]
      } else {
        foundFace = false
        if (faceMapReverse[tmpFace] || faceMapReverse['/' + tmpFace] || faceMapReverse[_.trimStart(tmpFace, '/')]) {
          if (tmpMsg) {
            msgs.push(tmpMsg)
          }
          msgs.push(segment.face(parseInt(faceMapReverse[tmpFace] || faceMapReverse['/' + tmpFace] || faceMapReverse[_.trimStart(tmpFace, '/')])))
          tmpMsg = ''
        } else {
          tmpMsg += `[${tmpFace}]`
        }
        tmpFace = ''
      }
    }
  }
  if (tmpMsg) {
    msgs.push(tmpMsg)
  }
  if (tmpFace) {
    msgs.push(`[${tmpFace}`)
  }
  if (handleAt && tmpAt) {
    msgs.push(`@${tmpAt}`)
  }
  return msgs
}

export function testConvertFaces () {
  const toTest = [
    '你好啊[/微笑][惊讶]哈哈[/拜谢]'
  ]
  toTest.forEach(t => {
    console.log(convertFaces(t))
  })
}

testConvertFaces()
