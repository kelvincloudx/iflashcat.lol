export type BillingCycle = 'monthly' | 'quarterly' | 'semi-annual' | 'annual';

export interface RegularPlan {
  id: string;
  name: string;
  badge?: string;
  type: 'regular';
  trafficLimit: string;
  trafficResetRule: string;
  scenario: string;
  prices: {
    monthly: number;
    quarterly: number;
    'semi-annual': number;
    annual: number;
  };
  features: {
    lineType: string;
    aiSupport: string;
    mediaSupport: string;
    nodeCoverage: string;
    deviceLimit: string;
    speedEstimate: string;
    clientCompatibility: string;
  };
  verificationStatus: string;
  note?: string;
}

export interface SpecialAnnualPlan {
  id: string;
  name: string;
  badge?: string;
  type: 'special-annual';
  price: number;
  billingCycleText: string;
  trafficLimit: string;
  trafficResetRule: string;
  scenario: string;
  features: {
    lineType: string;
    aiSupport: string;
    mediaSupport: string;
    nodeCoverage: string;
    deviceLimit: string;
    speedEstimate: string;
    clientCompatibility: string;
  };
  verificationStatus: string;
  note: string;
}

export interface AnnualTotalTrafficPlan {
  id: string;
  name: string;
  badge?: string;
  type: 'annual-total';
  price: number;
  validity: string;
  billingCycleText: string;
  trafficLimit: string;
  trafficResetRule: string;
  scenario: string;
  features: {
    lineType: string;
    aiSupport: string;
    mediaSupport: string;
    nodeCoverage: string;
    deviceLimit: string;
    speedEstimate: string;
    clientCompatibility: string;
  };
  verificationStatus: string;
  note: string;
}

export type PlanItem = RegularPlan | SpecialAnnualPlan | AnnualTotalTrafficPlan;

// 4 regular plans with 4 billing cycles each = 16 price options
export const regularPlans: RegularPlan[] = [
  {
    id: 'mini-cat',
    name: '迷你猫',
    type: 'regular',
    trafficLimit: '100GB / 每30天',
    trafficResetRule: '每30天自动重置流量配额',
    scenario: '轻度日常浏览、移动端通讯、学术资料查阅与邮件收发',
    prices: {
      monthly: 20,
      quarterly: 57,
      'semi-annual': 108,
      annual: 192
    },
    features: {
      lineType: '多路中继加速专线（公开资料记录，待核实）',
      aiSupport: '支持 ChatGPT / Claude 等常规工具（待核实）',
      mediaSupport: '支持主流流媒体服务访问（待核实）',
      nodeCoverage: '主流亚太及欧美常用区域（待核实）',
      deviceLimit: '个人常规多设备连接（未公开具体上限）',
      speedEstimate: '视本地运营商网络环境而定（不保证峰值）',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '公开资料整理参考，未核实为保证权益'
  },
  {
    id: 'speed-cat',
    name: '闪电猫',
    badge: '最受欢迎',
    type: 'regular',
    trafficLimit: '200GB / 每30天',
    trafficResetRule: '每30天自动重置流量配额',
    scenario: '标准日常办公、高清流媒体视频、多平台多设备协同',
    prices: {
      monthly: 40,
      quarterly: 114,
      'semi-annual': 216,
      annual: 384
    },
    features: {
      lineType: '多路中继加速专线（公开资料记录，待核实）',
      aiSupport: '支持常用 AI 生产力与搜索引擎（待核实）',
      mediaSupport: '支持 4K 高清流媒体常规访问（待核实）',
      nodeCoverage: '亚太核心机房与欧美重点节点（待核实）',
      deviceLimit: '个人常规多设备连接（未公开具体上限）',
      speedEstimate: '视本地运营商网络环境而定（不保证峰值）',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '公开资料整理参考，未核实为保证权益'
  },
  {
    id: 'thunder-cat',
    name: '霹雳猫',
    badge: '高配进阶',
    type: 'regular',
    trafficLimit: '500GB / 每30天',
    trafficResetRule: '每30天自动重置流量配额',
    scenario: '大流量下载、高频远程开发、家庭多端共享及重度视频用户',
    prices: {
      monthly: 100,
      quarterly: 285,
      'semi-annual': 540,
      annual: 960
    },
    features: {
      lineType: '多路中继加速专线（公开资料记录，待核实）',
      aiSupport: '支持 API / 开发者平台与大模型应用（待核实）',
      mediaSupport: '支持超高清流媒体长时间播放（待核实）',
      nodeCoverage: '覆盖主流全球节点线路（待核实）',
      deviceLimit: '个人常规多设备连接（未公开具体上限）',
      speedEstimate: '视本地运营商网络环境而定（不保证峰值）',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '公开资料整理参考，未核实为保证权益'
  },
  {
    id: 'thor-cat',
    name: '雷神猫',
    badge: '海量带宽',
    type: 'regular',
    trafficLimit: '1000GB / 每30天',
    trafficResetRule: '每30天自动重置流量配额',
    scenario: '极重度网络使用、多设备全天候在线、跨国文件同步与流媒体',
    prices: {
      monthly: 200,
      quarterly: 570,
      'semi-annual': 1080,
      annual: 1920
    },
    features: {
      lineType: '多路中继加速专线（公开资料记录，待核实）',
      aiSupport: '支持高频自动化请求与 AI 工作流（待核实）',
      mediaSupport: '支持多终端并发流媒体回放（待核实）',
      nodeCoverage: '全量可用节点线路（待核实）',
      deviceLimit: '个人常规多设备连接（未公开具体上限）',
      speedEstimate: '视本地运营商网络环境而定（不保证峰值）',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '公开资料整理参考，未核实为保证权益'
  }
];

// 1 special annual plan = 1 price option
export const specialAnnualPlan: SpecialAnnualPlan = {
  id: 'special-annual-small',
  name: '特惠年付小包',
  badge: '特惠轻量',
  type: 'special-annual',
  price: 98,
  billingCycleText: '¥98 / 年（年付一次性结清）',
  trafficLimit: '50GB / 每30天',
  trafficResetRule: '按照公开资料每30天重置50GB配额',
  scenario: '备用节点、低频查阅邮件、外贸消息收发或日常应急通信',
  features: {
    lineType: '常规基础加速线路（公开资料记录，待核实）',
    aiSupport: '支持文字类 AI 交互与搜索（待核实）',
    mediaSupport: '支持标清/高清视频偶尔查阅（待核实）',
    nodeCoverage: '公开资料记载包含基础节点区域（待核实）',
    deviceLimit: '个人轻量设备使用（未公开具体上限）',
    speedEstimate: '视本地网络与节点负载而定（不保证峰值）',
    clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
  },
  verificationStatus: '公开资料整理参考，特别备注：该特惠档当前是否仍在售尚未完成后台核实。',
  note: '特别备注：该特惠档当前是否仍在售尚未完成后台核实，请以最终购买页面为准。'
};

// 2 annual total volume plans = 2 price options
export const annualTotalTrafficPlans: AnnualTotalTrafficPlan[] = [
  {
    id: 'meteor-cat',
    name: '流星猫',
    badge: '按年总量',
    type: 'annual-total',
    price: 260,
    validity: '365天（公开资料记载）',
    billingCycleText: '¥260 / 年（有效时长365天）',
    trafficLimit: '全年总计 600GB',
    trafficResetRule: '全年总量，用完为止，不按月重置',
    scenario: '每月用量波动较大、节假日或出差集中使用、不需要每月强制清零的用户',
    features: {
      lineType: '中继加速线路（公开资料记录，待核实）',
      aiSupport: '支持常规 AI 助手使用（待核实）',
      mediaSupport: '支持主流音视频流媒体（待核实）',
      nodeCoverage: '主流区域节点接入（待核实）',
      deviceLimit: '个人设备随心连接（未公开具体上限）',
      speedEstimate: '视本地网络而定（不保证峰值）',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '公开资料整理参考，未核实为保证权益',
    note: '流量规则：全年总量 600GB，有效期内用完即止，不执行每30天重置规则。'
  },
  {
    id: 'flying-cat',
    name: '飞天猫',
    badge: '超大总量',
    type: 'annual-total',
    price: 1800,
    validity: '365天（公开资料记载）',
    billingCycleText: '¥1800 / 年（有效时长365天）',
    trafficLimit: '全年总计 5000GB',
    trafficResetRule: '全年总量，用完为止，不按月重置',
    scenario: '长期大容量数据传输、年度大流量项目支持、无需受限于月度清零的专业场景',
    features: {
      lineType: '中继加速线路（公开资料记录，待核实）',
      aiSupport: '支持高频大模型与开发环境（待核实）',
      mediaSupport: '支持多端全时流媒体娱乐（待核实）',
      nodeCoverage: '全区域节点接入（待核实）',
      deviceLimit: '个人设备随心连接（未公开具体上限）',
      speedEstimate: '视本地网络而定（不保证峰值）',
      clientCompatibility: 'Clash / ClashParty / Shadowrocket 等通用内核'
    },
    verificationStatus: '公开资料整理参考，未核实为保证权益',
    note: '流量规则：全年总量 5000GB，有效期内用完即止，不执行每30天重置规则。'
  }
];

export const allPlans = [
  ...regularPlans,
  specialAnnualPlan,
  ...annualTotalTrafficPlans
];

export const cycleLabels: Record<BillingCycle, { name: string; desc: string }> = {
  monthly: { name: '月付', desc: '按30天单月结算' },
  quarterly: { name: '季付', desc: '按季一次性结算' },
  'semi-annual': { name: '半年付', desc: '按半年一次性结算' },
  annual: { name: '年付', desc: '按年一次性结算' }
};
