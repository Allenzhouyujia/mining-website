"use client";

import AvatarSection from "../components/AvatarSection";
import AnimatedNumber from "../components/AnimatedNumber";
import DonutChart from "../components/DonutChart";
import { useLang } from "../components/LanguageContext";

// ─── translations ──────────────────────────────────────────────────────────

const T = {
  nav: {
    overview: { en: "Overview", zh: "项目概况" },
    sask: { en: "Saskatchewan", zh: "萨省钾盐" },
    project: { en: "Project", zh: "项目详情" },
    roadmap: { en: "Roadmap", zh: "开发计划" },
    financials: { en: "Financials", zh: "财务数据" },
    team: { en: "Team", zh: "核心团队" },
    assistant: { en: "AI Assistant", zh: "数字助理" },
    switchLang: { en: "中文", zh: "English" },
  },
  hero: {
    badge: { en: "Saskatchewan, Canada · Greenfield Potash Project", zh: "加拿大萨斯喀彻温省 · 绿地钾盐项目" },
    subtitle: { en: "WindRyd Potash Project", zh: "WindRyd 钾盐项目" },
    desc: {
      en: "PointWest Resources Holdings × Kahkewistahaw First Nation\nAdjacent to the world's largest potash belt — low capital intensity, high-return potential",
      zh: "PointWest Resources Holdings × Kahkewistahaw First Nation\n毗邻全球最大钾矿，低投资强度，高回报潜力",
    },
    cta1: { en: "View Financials", zh: "查看财务数据" },
    cta2: { en: "Talk to AI Assistant", zh: "对话数字助理" },
  },
  structure: {
    tag: { en: "Corporate Structure", zh: "公司架构" },
    title: { en: "Company & Ownership Structure", zh: "公司介绍与股权架构" },
    items: [
      {
        title: { en: "Operating Entity", zh: "运营主体" },
        desc: {
          en: "WindRyd Potash Inc. was jointly established in 2026 by PointWest Resources Holdings Ltd. (PWRH) and Kahkewistahaw First Nation (KFN), responsible for planning, design, construction and operations.",
          zh: "WindRyd Potash Inc. 由 PointWest Resources Holdings Ltd.（PWRH）与原住民部落 Kahkewistahaw First Nation（KFN）于2026年合资成立，负责项目的规划、设计、建设与运营。",
        },
      },
      {
        title: { en: "Mineral Rights", zh: "矿权归属" },
        desc: {
          en: "KFN has transferred all mineral rights from its Reserve lands into WindRyd Potash Inc., ensuring the completeness and legality of mineral rights.",
          zh: "原住民部落KFN已将其Reserve地的全部矿权转入WindRyd Potash Inc.，确保矿权的完整性与合法性。",
        },
      },
      {
        title: { en: "Holding Structure", zh: "控股结构" },
        desc: {
          en: "Ventra Minerals Ltd. acts as the holding company, owning all interests in WindRyd Potash except KFN. PWRH and private investors jointly hold Ventra Minerals Ltd.",
          zh: "Ventra Minerals Ltd. 作为控股公司，持有WindRyd Potash除KFN以外的全部权益。PWRH与私人投资人共同持股Ventra Minerals Ltd.。",
        },
      },
      {
        title: { en: "Strategic Partnership", zh: "战略合作" },
        desc: {
          en: "PWRH has signed strategic cooperation agreements with four First Nations in the Crooked Lake region (Ochapowace, Kahkewistahaw, Cowessess, Zagime Anishenabek) to jointly develop potash resources.",
          zh: "PWRH与Crooked Lake区域内四个原住民部落（Ochapowace, Kahkewistahaw, Cowessess, Zagime Anishenabek）签署战略合作协议，共同开发区内钾矿资源。",
        },
      },
    ],
    chart: [
      { label: { en: "Ventra Minerals Ltd.", zh: "Ventra Minerals Ltd." }, sub: { en: "Holding Company", zh: "控股公司" }, color: "border-amber-500/50 bg-amber-500/5" },
      { label: { en: "WindRyd Potash Inc.", zh: "WindRyd Potash Inc." }, sub: { en: "JV Operating Company (PWRH + KFN)", zh: "合资运营公司（PWRH + KFN）" }, color: "border-amber-400/70 bg-amber-400/10" },
      { label: { en: "OHPIKIW Potash Project", zh: "OHPIKIW 钾矿项目" }, sub: { en: "Potash Project", zh: "钾矿项目" }, color: "border-green-500/50 bg-green-500/5" },
    ],
  },
  sask: {
    tag: { en: "Saskatchewan Potash", zh: "萨省钾盐" },
    title: { en: "Saskatchewan Potash Resources", zh: "加拿大萨斯喀彻温省钾盐资源" },
    desc: { en: "Saskatchewan is the world's most important potash mining belt with exceptional resource endowment", zh: "萨省是全球最重要的钾盐开采带，资源禀赋卓越" },
    stats: [
      { label: { en: "Global Reserve Share", zh: "全球储量占比" }, value: "50%", desc: { en: "Saskatchewan holds ~50% of global potash reserves", zh: "萨省钾盐储量约占全球总储量的50%" } },
      { label: { en: "Proven Resources", zh: "探明资源量" }, value: { en: "88.8B tonnes", zh: "888亿吨" }, desc: { en: "Proven KCl resource volume", zh: "氯化钾探明资源量" } },
      { label: { en: "Active Mines", zh: "在产矿山" }, value: "11", desc: { en: "Underground / solution mining operations", zh: "地下开采/水溶开采" } },
      { label: { en: "Global Output Share", zh: "全球产量占比" }, value: "1/3", desc: { en: "Annual output approaches 1/3 of global KCl production", zh: "每年合计产量接近全球氯化钾产量的1/3" } },
    ],
    geology: {
      title: { en: "Geological Conditions", zh: "地质条件" },
      items: [
        { en: "Depth 900–1,400 m, stable geological structure", zh: "埋深 900-1400 米，地质结构稳定" },
        { en: "Continuous orebody, highly reliable resource estimation", zh: "矿体连续，区域内资源量计算可靠性高" },
        { en: "6,000 historical drill holes / core records", zh: "6000个历史钻孔/岩芯岩屑资料支撑" },
        { en: "Extensive oil & gas well data available for co-use", zh: "大量油气井资料可共享利用" },
      ],
    },
    production: {
      title: { en: "Production Capacity", zh: "生产能力" },
      items: [
        { en: "11 active mines (underground / solution mining)", zh: "11座在产矿山（地下开采/水溶开采）" },
        { en: "Annual output ≈ 1/3 of global KCl production", zh: "年合计产量接近全球氯化钾产量的1/3" },
        { en: "BHP Jansen mine expected on-stream 2027 (4.3 Mt/yr)", zh: "BHP Jansen矿预计2027年投产（430万吨/年）" },
        { en: "Mosaic K3 (8 Mt/yr) — world's largest underground potash mine", zh: "Mosaic K3（800万吨/年）世界最大地下钾矿" },
      ],
    },
  },
  projectDetail: {
    tag: { en: "Project Details", zh: "项目详情" },
    title: { en: "OHPIKIW PROJECT Details", zh: "OHPIKIW PROJECT 项目详情" },
    stats: [
      { label: { en: "Mineral Claim Area", zh: "矿权面积" }, value: "170 km²", desc: "Twp 17-18, R4-5, W2M" },
      { label: { en: "Depth", zh: "埋藏深度" }, value: { en: "1,300–1,400 m", zh: "1300-1400m" }, desc: { en: "Stable geology, continuous orebody", zh: "地质结构稳定，矿体连续" } },
      { label: { en: "Phase I Capacity", zh: "一期产能" }, value: { en: "500K t/yr", zh: "50万吨/年" }, desc: { en: "Annual KCl production capacity", zh: "氯化钾年产能" } },
      { label: { en: "Mid-term Target", zh: "中期目标" }, value: { en: "3M t/yr", zh: "300万吨/年" }, desc: { en: "Phased capacity expansion", zh: "分阶段扩产" } },
    ],
    geology: {
      title: { en: "Geological Advantages", zh: "地质优势" },
      items: [
        { en: "Multiple control wells, extensive geological data", zh: "多个控制井分布，地质资料充分" },
        { en: "Depth 1,300–1,400 m", zh: "埋藏深度 1300-1400 米" },
        { en: "Only 30–50 km from Mosaic K3 (world's largest potash mine)", zh: "距全球最大钾矿 Mosaic K3 仅 30-50公里" },
        { en: "30–50 km from Nutrien Rocanville", zh: "距 Nutrien Rocanville 30-50公里" },
        { en: "Good resource occurrence, multiple potash horizons", zh: "资源赋存情况良好，穿过多层钾石岩层" },
      ],
    },
    infra: {
      title: { en: "Infrastructure", zh: "基础设施" },
      items: [
        { en: "Trans-Canada Highway No.1 (direct access)", zh: "加拿大1号高速公路（直达）" },
        { en: "Canadian Pacific Railway (CP)", zh: "加拿大太平洋铁路（CP）" },
        { en: "230KV / 147KV high-voltage power lines", zh: "230KV/147KV高压输电线路" },
        { en: "Trans-Canada natural gas pipeline regulator station", zh: "跨加拿大天然气管道调压站" },
        { en: "Water source within 10 km of well site", zh: "水源距离井场10公里以内" },
      ],
    },
    mining: {
      title: { en: "Mining Method", zh: "采矿工艺" },
      items: [
        { en: "Solution mining, dual-shaft system", zh: "采矿方式：地下水溶采，双竖井" },
        { en: "Processing: evaporation crystallisation + crystallisation ponds", zh: "加工工艺：蒸发结晶和结晶池配合" },
        { en: "Proven and reliable solution-mining technology", zh: "成熟可靠的水溶法技术" },
        { en: "Modular construction reduces initial capital", zh: "模块式建设，降低初期资本投入" },
        { en: "Lowest CAPEX intensity: $600/t (best-in-class)", zh: "投资强度最低：$600/吨（行业对比最优）" },
      ],
    },
  },
  roadmap: {
    tag: { en: "Development Roadmap", zh: "开发计划" },
    title: { en: "Development Plan & Milestones", zh: "开发计划与里程碑" },
    items: [
      {
        phase: { en: "Phase 1", zh: "第一阶段" },
        title: { en: "Resource Report", zh: "资源量报告" },
        desc: { en: "NI 43-101 resource report completed; internal resource estimate: 1.75B tonnes sylvinite", zh: "43-101资源量报告完成，内部资源量估算完成，共钾石岩盐17.5亿吨" },
        valuation: { en: "Valuation: C$50M", zh: "估值：5千万加元" },
        status: "completed",
      },
      {
        phase: { en: "Phase 2", zh: "第二阶段" },
        title: { en: "Feasibility Study", zh: "可研报告" },
        desc: { en: "Pre-feasibility study; valuation based on C$2.0/t sylvinite", zh: "可研报告完成前，估值按$2.0加元/吨钾石盐" },
        valuation: { en: "Valuation: C$175M", zh: "估值：1.75亿加元" },
        status: "active",
      },
      {
        phase: { en: "Phase 3", zh: "第三阶段" },
        title: { en: "FS + Financing", zh: "可研+融资落实" },
        desc: { en: "Feasibility study complete, project financing secured; C$8.0/t sylvinite basis", zh: "可研报告完成，项目资金落实，估值按$8.0加元/吨钾石盐" },
        valuation: { en: "Valuation: C$700M", zh: "估值：7.0亿加元" },
        status: "upcoming",
      },
      {
        phase: { en: "Detailed Design", zh: "详细设计" },
        title: { en: "Detailed Engineering", zh: "详细设计阶段" },
        desc: { en: "Detailed cost / schedule estimates, technical specifications finalised", zh: "精细成本/时间估算，技术方案明确" },
        valuation: { en: "Valuation: US$1.2B", zh: "估值：12亿美元" },
        status: "upcoming",
      },
      {
        phase: { en: "Construction", zh: "建设阶段" },
        title: { en: "Construction & Installation", zh: "建设与安装" },
        desc: { en: "Drilling / cavern development, surface facilities, pipeline, instrumentation & control", zh: "钻井/建腔，地面设备，管线安装，仪器仪表，控制中心" },
        valuation: { en: "Valuation: US$1.5B", zh: "估值：15亿美元" },
        status: "upcoming",
      },
      {
        phase: { en: "Production", zh: "投产" },
        title: { en: "Start-up & Full Production", zh: "试车与投产" },
        desc: { en: "Commissioning, personnel training & positioning, full commercial operations", zh: "试车，人员培训定岗，全面投产运营" },
        valuation: { en: "Valuation: US$2.0B", zh: "估值：20亿美元" },
        status: "upcoming",
      },
    ],
  },
  financials: {
    tag: { en: "Financial Data", zh: "财务数据" },
    title: { en: "Phase I Financials & Financing Plan", zh: "项目一期财务数据与融资方案" },
    subtitle: { en: "25-year project life · KCl long-term price US$360/t (FOB)", zh: "项目寿命按25年计，氯化钾长期价格 $360/吨 (FOB)" },
    recommended: { en: "★ Recommended", zh: "★ 推荐方案" },
    plans: [
      {
        label: { en: "Option A", zh: "方案一" },
        capacity: { en: "250K t/yr", zh: "25万吨/年" },
        capex: "US$175M",
        netIncome: { en: "US$39.4M/yr", zh: "$3,940万/年" },
        irr: "22.4%",
        npv: "US$227M",
        cashflow: { en: "US$946M", zh: "$9.46亿" },
      },
      {
        label: { en: "Option B (Recommended)", zh: "方案二（推荐）" },
        capacity: { en: "500K t/yr", zh: "50万吨/年" },
        capex: "US$300M",
        netIncome: { en: "US$78.7M/yr", zh: "$7,870万/年" },
        irr: "26.2%",
        npv: "US$500M",
        cashflow: { en: "US$1.889B", zh: "$18.89亿" },
        highlight: true,
      },
      {
        label: { en: "Option C", zh: "方案三" },
        capacity: { en: "1M t/yr", zh: "100万吨/年" },
        capex: "US$550M",
        netIncome: { en: "US$157.5M/yr", zh: "$1.575亿/年" },
        irr: "28.6%",
        npv: "US$1.048B",
        cashflow: { en: "US$3.78B", zh: "$37.80亿" },
      },
    ],
    planLabels: {
      capex: { en: "Initial CAPEX", zh: "初始投资 (CAPEX)" },
      netIncome: { en: "Annual Net Income", zh: "年净收入" },
      irr: { en: "Internal Rate of Return (IRR)", zh: "内部收益率 (IRR)" },
      npv: { en: "Pre-tax NPV", zh: "税前净现值 (NPV)" },
      cashflow: { en: "Pre-tax Total Cash Flow", zh: "税前总现金流" },
    },
    capexBreakdown: {
      title: { en: "Phase I CAPEX Breakdown (±25% accuracy)", zh: "一期投资估算（精度 -25% 至 +25%）" },
      items: [
        { label: { en: "Pre-development (exploration / FS / EIA)", zh: "前期费用（勘探/可研/环评）" }, value: "US$18M", pct: "6%" },
        { label: { en: "Project execution (design / equipment / construction)", zh: "项目执行成本（设计/设备/施工等）" }, value: "US$270M", pct: "90%" },
        { label: { en: "Commissioning & operating services", zh: "调试开车和运行服务" }, value: "US$12M", pct: "4%" },
        { label: { en: "Total", zh: "合计" }, value: "US$300M", pct: "100%", total: true },
      ],
    },
    financing: {
      title: { en: "Financing Structure", zh: "融资方案" },
      items: [
        { investor: "PointWest Resources Holdings", type: { en: "Loan / Equity", zh: "贷款/投资入股" }, share: "25%", amount: "US$75M", color: "#f59e0b" },
        { investor: { en: "Private Capital Investors", zh: "私人资本投资人" }, type: { en: "Loan / Equity", zh: "贷款/投资入股" }, share: "75%", amount: "US$225M", color: "#6366f1" },
      ],
      total: { en: "Total Financing", zh: "合计融资" },
      totalAmount: "US$300M",
    },
    intensity: {
      title: { en: "CAPEX Intensity Comparison (US$/t capacity)", zh: "投资强度对比（美元/吨产能）" },
      items: [
        { name: "WindRyd Ohpikiw (This Project)", value: 600 },
        { name: "Mosaic Esterhazy", value: 1000 },
        { name: "Western Milestone", value: 1096 },
        { name: "Golder Fortune", value: 1200 },
        { name: "Yancoal Canada", value: 1643 },
        { name: "BHP Jansen", value: 1644 },
        { name: "K+S Legacy", value: 2250 },
      ],
    },
  },
  team: {
    tag: { en: "Core Team", zh: "核心团队" },
    title: { en: "Core Team", zh: "核心团队" },
    members: [
      {
        name: "Cuilin Yang",
        nameZh: "杨翠林",
        title: { en: "CEO & General Manager", zh: "首席执行官兼总经理" },
        credentials: "M.Sc. | P.Eng. | PMP",
        highlights: {
          en: [
            "25+ years cross-border energy & resources management",
            "Co-founder of PointWest Resources",
            "Senior Engineer at Shell Canada; led C$12.8B oil sands expansion",
            "Senior PM on Majnoon super-oilfield expansion, Iraq",
          ],
          zh: [
            "超过25年跨国能源与资源行业管理经验",
            "PointWest Resources联合创始人",
            "曾任Shell Canada高级工程师，主导128亿加元油砂扩建项目",
            "曾在伊拉克Majnoon超级油田扩产项目担任高级项目经理",
          ],
        },
      },
      {
        name: "Yi Zhang",
        nameZh: "张翼",
        title: { en: "Finance & Strategy Advisor", zh: "财务与战略顾问" },
        credentials: "CPA (Canada/HK) | ACCA | CMAS",
        highlights: {
          en: [
            "Former CFO of China Gold International Resources for 10+ years",
            "Led HK$2.4B IPO and US$1.3B bond financing",
            "Former CEO of Xinyao Mining Group; built Angola's first modern mine, US$150M/yr net profit",
            "Proficient in JORC / NI 43-101 international mining standards",
          ],
          zh: [
            "曾任中国黄金国际资源CFO十余年",
            "主导24亿港元IPO、13亿美元债券融资",
            "曾任星耀矿业集团CEO，建成安哥拉首座现代矿山，年净利润1.5亿美元",
            "精通JORC / NI 43-101国际矿业标准",
          ],
        },
      },
      {
        name: "Steven Ji",
        nameZh: "史蒂文·季",
        title: { en: "Project Director", zh: "项目总监" },
        credentials: "P.Eng. | PMP | IWE",
        highlights: {
          en: [
            "30 years of PM experience in mining, petrochemical & oil & gas",
            "Directed multi-hundred-million USD projects across Canada, China, South America, Russia & Africa",
            "Former GM of CMSC project, Eritrea (Sichuan Shudao Mining); reduced costs by 40%",
            "Former Deputy GM of Tibet Summit Argentina lithium project",
          ],
          zh: [
            "30年矿业、石化及油气行业项目管理经验",
            "曾在加拿大、中国、南美、俄罗斯及非洲指导数亿美元项目",
            "曾任四川蜀道矿业集团厄立特里亚CMSC项目总经理，优化成本降低40%",
            "曾任西藏珠峰阿根廷锂项目副总经理",
          ],
        },
      },
      {
        name: "Jianzhong Liu",
        nameZh: "刘建中",
        title: { en: "Solution Mining / Geology Advisor", zh: "溶采/地质顾问" },
        credentials: { en: "Professor | Senior Engineer", zh: "教授 | 高级工程师" },
        highlights: {
          en: [
            "Internationally recognised expert in oilfield geology, stress analysis & solution mining",
            "Distinguished Professor, Henan Polytechnic University",
            "Lead expert on 863 Programme; 4 monographs, 100+ publications",
            "Deep expertise in Canadian potash dissolution & water-seepage mechanics",
          ],
          zh: [
            "国际知名油田地质与应力研究专家、水溶采专家",
            "河南理工大学特聘教授",
            "863课题首席专家，出版专著4部、发表论文100余篇",
            "对加拿大钾矿溶蚀透水机理有深入研究",
          ],
        },
      },
      {
        name: "James T. Sproule",
        nameZh: "James T. Sproule",
        title: { en: "Legal Advisor", zh: "法律顾问" },
        credentials: "B.Comm. | LL.B.",
        highlights: {
          en: [
            "Senior Partner, McKercher LLP; 30+ years corporate governance",
            "Securities & natural resources law specialist",
            "Expert in mining company asset-backed financing, M&A & complex credit structures",
            "Extensive First Nations financing & structured finance experience",
          ],
          zh: [
            "McKercher LLP高级合伙人，30余年公司治理经验",
            "证券与自然资源法专家",
            "擅长矿业公司资产抵押融资、并购及复杂信贷结构设计",
            "第一民族融资与结构化融资丰富经验",
          ],
        },
      },
      {
        name: "Chief Evan Taypotat",
        nameZh: "Chief Evan Taypotat",
        title: { en: "Chief, Kahkewistahaw First Nation", zh: "Kahkewistahaw First Nation 酋长" },
        credentials: "M.Ed. | EMIBL",
        highlights: {
          en: [
            "Supreme leader of KFN First Nation community",
            "Vice Chair, First Nations University of Canada Board",
            "Champion of sustainable industrial-Indigenous co-development",
            "M.Ed. from University of Regina; EMIBL from Simon Fraser University",
          ],
          zh: [
            "KFN原住民部落最高领导人",
            "加拿大第一民族大学理事会副主席",
            "推动工业界与原住民社区可持续共同发展",
            "持有里贾纳大学教育硕士及西蒙菲莎大学原住民商业领导硕士学位",
          ],
        },
      },
    ],
  },
  video: {
    tag: { en: "Project Introduction", zh: "项目介绍" },
    title: { en: "3-Minute Strategic Deep Dive", zh: "3分钟战略深度解析" },
    desc: { en: "A concise overview of the OHPIKIW Potash Project — strategy, resources, and investment highlights.", zh: "OHPIKIW钾盐项目简明概览——战略布局、资源禀赋与投资亮点。" },
  },
  avatar: {
    tag: { en: "AI Digital Assistant", zh: "AI 数字助理" },
    title: { en: "AI Assistant", zh: "数字助理" },
    desc: { en: "Talk to the WindRyd project AI assistant for detailed project information", zh: "与WindRyd项目智能助理对话，获取项目详细信息" },
    suggestions: [
      { q: { en: "What is the project IRR and NPV?", zh: "项目的IRR和NPV是多少？" }, desc: { en: "Financial Returns", zh: "财务回报" } },
      { q: { en: "What is the mineral claim area and geology?", zh: "项目的矿权面积和地质情况怎么样？" }, desc: { en: "Project Details", zh: "项目详情" } },
      { q: { en: "What is the financing structure and investor breakdown?", zh: "融资方案和投资人占比是什么？" }, desc: { en: "Financing", zh: "融资结构" } },
      { q: { en: "What advantages does this have vs other potash projects?", zh: "与其他钾矿项目相比有什么优势？" }, desc: { en: "Competitive Edge", zh: "竞争优势" } },
    ],
  },
  footer: {
    disclaimer: {
      en: "This document contains forward-looking information subject to uncertainty and risk. Projected results may differ materially from actual results. This document is for reference only and does not constitute investment advice.",
      zh: "本文件包含前瞻性信息，存在不确定性与风险。预测结果可能与实际结果有显著差异。本文件仅供参考，不构成投资建议。",
    },
    copy: { en: "© 2026 WindRyd Potash Inc. · PointWest Resources Holdings Ltd. · Confidential", zh: "© 2026 WindRyd Potash Inc. · PointWest Resources Holdings Ltd. · 保密资料" },
  },
};

// ─── helper ───────────────────────────────────────────────────────────────

function t<T extends { en: string; zh: string }>(obj: T, lang: "en" | "zh"): string {
  return obj[lang];
}

// ─── IRR Bar Chart ────────────────────────────────────────────────────────

function IRRChart({ plans, lang }: { plans: typeof T.financials.plans; lang: "en" | "zh" }) {
  const irrValues = plans.map((p) => parseFloat(p.irr));
  const max = Math.max(...irrValues) * 1.2;

  return (
    <div className="w-full">
      <div className="flex items-end gap-4 justify-center h-40">
        {plans.map((plan, i) => {
          const pct = (irrValues[i] / max) * 100;
          return (
            <div key={i} className="flex flex-col items-center gap-2 flex-1">
              <div className="text-sm font-bold text-white">{plan.irr}</div>
              <div
                className={`w-full rounded-t-lg transition-all duration-1000 ${plan.highlight ? "bg-gradient-to-t from-amber-600 to-amber-400" : "bg-gradient-to-t from-gray-700 to-gray-500"}`}
                style={{ height: `${pct}%` }}
              />
              <div className="text-xs text-gray-400 text-center leading-tight">{t(plan.label, lang)}</div>
            </div>
          );
        })}
      </div>
      <div className="text-center text-xs text-gray-600 mt-2">IRR (%)</div>
    </div>
  );
}

// ─── main page ────────────────────────────────────────────────────────────

export default function Home() {
  const { lang, toggle } = useLang();

  const navItems = [
    { key: "overview", href: "#section-0" },
    { key: "sask", href: "#section-1" },
    { key: "project", href: "#section-2" },
    { key: "roadmap", href: "#section-3" },
    { key: "financials", href: "#section-4" },
    { key: "team", href: "#section-5" },
    { key: "assistant", href: "#section-6" },
  ] as const;

  const intensityMax = 2500;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-sm">W</div>
            <span className="font-semibold text-white">WindRyd Potash</span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-sm text-gray-400">
            {navItems.map(({ key, href }) => (
              <a key={key} href={href} className="hover:text-amber-400 transition-colors">
                {t(T.nav[key as keyof typeof T.nav] as { en: string; zh: string }, lang)}
              </a>
            ))}
          </div>
          <button
            onClick={toggle}
            className="px-3 py-1.5 rounded-lg border border-amber-500/40 text-amber-400 text-sm hover:bg-amber-500/10 transition-colors font-medium"
          >
            {t(T.nav.switchLang, lang)}
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="section-0" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-[#0a0a0f]" />
        {/* animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-amber-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s", animationDelay: "2s" }} />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 text-amber-400 text-sm mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            {t(T.hero.badge, lang)}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            OHPIKIW PROJECT
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-amber-400 mb-6">
            {t(T.hero.subtitle, lang)}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed whitespace-pre-line">
            {t(T.hero.desc, lang)}
          </p>
          {/* animated key numbers */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
            {[
              { num: 26.2, suffix: "%", label: { en: "Recommended IRR", zh: "推荐方案 IRR" }, decimals: 1 },
              { num: 500, suffix: "M", prefix: "US$", label: { en: "Pre-tax NPV", zh: "税前净现值" } },
              { num: 170, suffix: " km²", label: { en: "Mineral Claim Area", zh: "矿权面积" } },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-amber-400">
                  <AnimatedNumber value={item.num} prefix={item.prefix ?? ""} suffix={item.suffix} decimals={item.decimals ?? 0} />
                </div>
                <div className="text-gray-400 text-xs mt-1">{t(item.label, lang)}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#section-4" className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-colors">
              {t(T.hero.cta1, lang)}
            </a>
            <a href="#section-6" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/20">
              {t(T.hero.cta2, lang)}
            </a>
          </div>
        </div>
      </section>

      {/* ── Video Introduction ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">{t(T.video.tag, lang)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{t(T.video.title, lang)}</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{t(T.video.desc, lang)}</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black shadow-2xl">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/_6NhwCVcguM"
              title="OHPIKIW Potash Project - 3-Minute Strategic Deep Dive"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── Corporate Structure ── */}
      <section id="section-0b" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">{t(T.structure.tag, lang)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{t(T.structure.title, lang)}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {T.structure.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold mt-0.5">{i + 1}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{t(item.title, lang)}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{t(item.desc, lang)}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Structure flow chart */}
            <div className="space-y-2">
              {T.structure.chart.map((item, i) => (
                <div key={i}>
                  {i > 0 && <div className="flex justify-center py-1"><div className="w-0.5 h-6 bg-gradient-to-b from-amber-500/60 to-amber-500/20" /></div>}
                  <div className={`border rounded-2xl p-5 text-center ${item.color} hover:scale-[1.01] transition-transform`}>
                    <div className="text-white font-bold text-lg">{t(item.label, lang)}</div>
                    <div className="text-gray-400 text-sm mt-1">{t(item.sub, lang)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Saskatchewan ── */}
      <section id="section-1" className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">{t(T.sask.tag, lang)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{t(T.sask.title, lang)}</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{t(T.sask.desc, lang)}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {T.sask.stats.map((s, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 text-center hover:border-amber-500/40 transition-all hover:scale-[1.02] group">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">
                  {typeof s.value === "object" ? t(s.value, lang) : s.value}
                </div>
                <div className="text-white font-medium mb-2">{t(s.label, lang)}</div>
                <div className="text-gray-500 text-sm">{t(s.desc, lang)}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                {t(T.sask.geology.title, lang)}
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {T.sask.geology.items.map((item, i) => (
                  <li key={i}>• {t(item, lang)}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                {t(T.sask.production.title, lang)}
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {T.sask.production.items.map((item, i) => (
                  <li key={i}>• {t(item, lang)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Details ── */}
      <section id="section-2" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">{t(T.projectDetail.tag, lang)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{t(T.projectDetail.title, lang)}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {T.projectDetail.stats.map((s, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 text-center hover:border-amber-500/40 transition-all hover:scale-[1.02]">
                <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">
                  {typeof s.value === "object" ? t(s.value, lang) : s.value}
                </div>
                <div className="text-white font-medium mb-2">{t(s.label, lang)}</div>
                <div className="text-gray-500 text-sm">{typeof s.desc === "object" ? t(s.desc, lang) : s.desc}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[T.projectDetail.geology, T.projectDetail.infra, T.projectDetail.mining].map((section, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">{t(section.title, lang)}</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {section.items.map((item, j) => (
                    <li key={j}>• {t(item, lang)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section id="section-3" className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">{t(T.roadmap.tag, lang)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{t(T.roadmap.title, lang)}</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-amber-500 via-gray-700 to-gray-800" />
            <div className="space-y-6">
              {T.roadmap.items.map((item, i) => (
                <div key={i} className="relative flex gap-6 pl-16">
                  <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-2 text-xs font-bold shrink-0 ${
                    item.status === "completed" ? "border-green-500 bg-green-500/20 text-green-400 shadow-lg shadow-green-500/20" :
                    item.status === "active" ? "border-amber-400 bg-amber-400/20 text-amber-400 shadow-lg shadow-amber-500/20 animate-pulse" :
                    "border-gray-600 bg-gray-800 text-gray-500"
                  }`}>
                    {item.status === "completed" ? "✓" : i + 1}
                  </div>
                  <div className={`flex-1 rounded-2xl p-5 border transition-all hover:scale-[1.005] ${
                    item.status === "active" ? "border-amber-500/40 bg-amber-500/5 shadow-lg shadow-amber-500/5" :
                    item.status === "completed" ? "border-green-500/20 bg-green-500/3" :
                    "border-gray-800 bg-gray-900/40"
                  }`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-amber-400 text-xs font-medium mb-1">{t(item.phase, lang)}</div>
                        <h3 className="text-white font-semibold mb-2">{t(item.title, lang)}</h3>
                        <p className="text-gray-400 text-sm">{t(item.desc, lang)}</p>
                      </div>
                      <div className="shrink-0 text-right bg-green-500/10 rounded-xl px-3 py-2 border border-green-500/20">
                        <div className="text-green-400 text-sm font-medium whitespace-nowrap">{t(item.valuation, lang)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Financials ── */}
      <section id="section-4" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">{t(T.financials.tag, lang)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{t(T.financials.title, lang)}</h2>
            <p className="text-gray-400 mt-4">{t(T.financials.subtitle, lang)}</p>
          </div>

          {/* Plan cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {T.financials.plans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-6 border transition-all hover:scale-[1.01] ${plan.highlight ? "border-amber-500/60 bg-amber-500/5 ring-1 ring-amber-500/20 shadow-xl shadow-amber-500/10" : "border-gray-800 bg-gray-900/40"}`}>
                {plan.highlight && (
                  <div className="inline-flex items-center gap-1.5 bg-amber-500 text-black text-xs font-bold rounded-full px-3 py-1 mb-4">
                    {t(T.financials.recommended, lang)}
                  </div>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{t(plan.label, lang)}</h3>
                <div className="text-amber-400 text-sm mb-5">{t(plan.capacity, lang)}</div>
                <div className="space-y-3">
                  {[
                    { key: "capex", value: plan.capex },
                    { key: "netIncome", value: typeof plan.netIncome === "object" ? t(plan.netIncome, lang) : plan.netIncome },
                    { key: "irr", value: plan.irr },
                    { key: "npv", value: plan.npv },
                    { key: "cashflow", value: typeof plan.cashflow === "object" ? t(plan.cashflow, lang) : plan.cashflow },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between text-sm">
                      <span className="text-gray-500">{t(T.financials.planLabels[item.key as keyof typeof T.financials.planLabels], lang)}</span>
                      <span className={`font-semibold ${item.key === "irr" ? "text-green-400 text-base" : "text-white"}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* IRR chart + animated stats */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-6">{lang === "en" ? "IRR Comparison (%)" : "各方案 IRR 对比 (%)"}</h3>
              <IRRChart plans={T.financials.plans} lang={lang} />
            </div>
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold mb-2">{lang === "en" ? "Recommended Option B — Key Metrics" : "推荐方案二 — 关键指标"}</h3>
              {[
                { label: { en: "Annual Net Income", zh: "年净收入" }, num: 78.7, suffix: "M", prefix: "US$", decimals: 1 },
                { label: { en: "Pre-tax NPV", zh: "税前净现值" }, num: 500, suffix: "M", prefix: "US$" },
                { label: { en: "25-yr Total Cash Flow", zh: "25年总现金流" }, num: 1.889, suffix: "B", prefix: "US$", decimals: 3 },
                { label: { en: "IRR", zh: "内部收益率" }, num: 26.2, suffix: "%", decimals: 1 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-800 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-400 text-sm">{t(item.label, lang)}</span>
                  <span className="text-2xl font-bold text-amber-400">
                    <AnimatedNumber value={item.num} prefix={item.prefix ?? ""} suffix={item.suffix} decimals={item.decimals ?? 0} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CAPEX breakdown + Financing donut */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-5">{t(T.financials.capexBreakdown.title, lang)}</h3>
              <div className="space-y-3 text-sm">
                {T.financials.capexBreakdown.items.map((item, i) => (
                  <div key={i} className={`flex justify-between items-center py-2 ${item.total ? "border-t border-gray-700 text-white font-semibold" : "text-gray-400"}`}>
                    <span>{t(item.label, lang)}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600 text-xs">{item.pct}</span>
                      <span className={item.total ? "text-amber-400" : "text-white"}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* CAPEX bar breakdown */}
              <div className="mt-4 flex rounded-full overflow-hidden h-3">
                {[{ pct: 6, color: "bg-blue-500" }, { pct: 90, color: "bg-amber-500" }, { pct: 4, color: "bg-green-500" }].map((b, i) => (
                  <div key={i} className={`${b.color} transition-all`} style={{ width: `${b.pct}%` }} />
                ))}
              </div>
              <div className="flex gap-4 mt-2 text-xs text-gray-500">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />6% Pre-dev</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />90% Execution</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" />4% Commissioning</span>
              </div>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-5">{t(T.financials.financing.title, lang)}</h3>
              <div className="flex items-center gap-8">
                <DonutChart
                  segments={[
                    { value: 25, color: "#f59e0b", label: "PWRH" },
                    { value: 75, color: "#6366f1", label: "Private" },
                  ]}
                  size={140}
                  thickness={26}
                />
                <div className="flex-1 space-y-4">
                  {T.financials.financing.items.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full mt-0.5 shrink-0" style={{ backgroundColor: f.color }} />
                      <div>
                        <div className="text-white text-sm font-medium">{typeof f.investor === "object" ? t(f.investor, lang) : f.investor}</div>
                        <div className="text-gray-500 text-xs">{t(f.type, lang)}</div>
                        <div className="flex gap-3 mt-0.5">
                          <span className="font-bold" style={{ color: f.color }}>{f.share}</span>
                          <span className="text-gray-300 text-sm">{f.amount}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-gray-700 pt-3 flex justify-between text-sm">
                    <span className="text-gray-400">{t(T.financials.financing.total, lang)}</span>
                    <span className="text-white font-bold text-lg">{T.financials.financing.totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CAPEX intensity bar chart */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-6">{t(T.financials.intensity.title, lang)}</h3>
            <div className="space-y-4">
              {T.financials.intensity.items.map((item) => {
                const isThis = item.name.includes("WindRyd");
                return (
                  <div key={item.name} className="flex items-center gap-4 text-sm group">
                    <div className={`w-44 shrink-0 text-xs ${isThis ? "text-amber-400 font-semibold" : "text-gray-400"}`}>{item.name}</div>
                    <div className="flex-1 bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ${isThis ? "bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-amber-500/30" : "bg-gradient-to-r from-gray-600 to-gray-500"}`}
                        style={{ width: `${(item.value / intensityMax) * 100}%` }}
                      />
                    </div>
                    <div className={`w-20 text-right font-bold ${isThis ? "text-amber-400" : "text-gray-300"}`}>
                      ${item.value.toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 text-xs text-gray-600 text-right">{lang === "en" ? "US$ per tonne of annual capacity" : "美元/吨产能"}</div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="section-5" className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">{t(T.team.tag, lang)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{t(T.team.title, lang)}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {T.team.members.map((member) => {
              const initials = member.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
              const displayName = lang === "zh" && member.nameZh !== member.name ? member.nameZh : member.name;
              const subName = lang === "zh" && member.nameZh !== member.name ? member.name : "";
              return (
                <div key={member.name} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-amber-500/30 transition-all hover:scale-[1.01] group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-700/30 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg shrink-0 group-hover:from-amber-500/50 transition-colors">
                      {initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{displayName}</div>
                      {subName && <div className="text-gray-500 text-xs">{subName}</div>}
                      <div className="text-amber-400 text-sm mt-0.5">{t(member.title, lang)}</div>
                    </div>
                  </div>
                  <div className="text-gray-600 text-xs mb-3 font-mono">{typeof member.credentials === "object" ? t(member.credentials as { en: string; zh: string }, lang) : member.credentials}</div>
                  <ul className="space-y-1.5">
                    {(lang === "zh" ? member.highlights.zh : member.highlights.en).map((h, i) => (
                      <li key={i} className="text-gray-400 text-xs flex gap-2">
                        <span className="text-amber-500 shrink-0">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AI Assistant ── */}
      <section id="section-6" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">{t(T.avatar.tag, lang)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{t(T.avatar.title, lang)}</h2>
            <p className="text-gray-400 mt-4">{t(T.avatar.desc, lang)}</p>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8">
            <AvatarSection />
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {T.avatar.suggestions.map((item, i) => (
              <div key={i} className="bg-gray-900/40 border border-gray-800 rounded-xl p-4 hover:border-amber-500/30 transition-colors">
                <div className="text-amber-400 text-xs mb-1">{t(item.desc, lang)}</div>
                <div className="text-gray-300 text-sm">{t(item.q, lang)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-sm">W</div>
            <span className="text-white font-semibold">WindRyd Potash Inc.</span>
          </div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-4">{t(T.footer.disclaimer, lang)}</p>
          <p className="text-gray-700 text-xs">{t(T.footer.copy, lang)}</p>
        </div>
      </footer>
    </div>
  );
}
