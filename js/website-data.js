// 网站内容数据配置文件
const websiteData = {
    // 网站全局设置
    global: {
        companyName: "深圳市冠集供应链管理有限公司",
        contactInfo: {
            address: "深圳市福田区福华三路168号深圳国际商会中心3005室",
            phone: "0755-82559337",
            mobile: "18682257602",
            email: "phyllis@glory-scm.com",
            qq: "2850711892",
            workingHours: "周一至周五 9:00-18:00"
        },
        hrContactInfo: {
            phone: "0755-83210116",
            mobile: "15766761081",
            email: "jessie@glory-scm.com",
            qq: "2850711902"
        },
        mapCoordinates: "114.059432,22.528664"
    },
    
    // 首页内容
    home: {
        // 轮播图
        carousel: [
            {
                id: "slide1",
                image: "images/port-de-barcelona-night.jpg",
                title: "专业的供应链服务商",
                subtitle: "为企业提供一站式供应链解决方案"
            },
            {
                id: "slide2",
                image: "images/agricultural-silo.jpg",
                title: "全方位的物流服务",
                subtitle: "覆盖仓储、运输、货运代理等综合服务"
            },
            {
                id: "slide3",
                image: "images/transport-logistics-products.jpg",
                title: "专业的国际物流",
                subtitle: "提供专业的国际货运代理服务"
            }
        ],
        
        // 服务项目
        services: [
            {
                id: "service1",
                icon: "🏢",
                title: "仓储服务",
                description: "专业的仓储设施与全程监控管理"
            },
            {
                id: "service2",
                icon: "🚛",
                title: "物流运输",
                description: "自有车队，专业普货、危化品、特种柜物流"
            },
            {
                id: "service3",
                icon: "🔄",
                title: "多式联运",
                description: "公路、铁路、海运高效联运方案"
            },
            {
                id: "service4",
                icon: "📦",
                title: "货运代理",
                description: "专业进出口代理与一站式通关"
            },
            {
                id: "service5",
                icon: "🌍",
                title: "国际物流",
                description: "覆盖全球六大洲的物流网络服务"
            },
            {
                id: "service6",
                icon: "⚗️",
                title: "化工品物流",
                description: "专业的化工品供应链服务（2-6类、8-9类）"
            }
        ],
        
        // 数字统计
        stats: [
            {
                id: "stat1",
                icon: "fas fa-calendar-alt",
                number: "2015",
                title: "成立时间"
            },
            {
                id: "stat2",
                icon: "fas fa-users",
                number: "1000",
                title: "服务客户<sup>+</sup>次"
            },
            {
                id: "stat3",
                icon: "fas fa-map-marker-alt",
                number: "200",
                title: "覆盖港口<sup>+</sup>"
            },
            {
                id: "stat4",
                icon: "fas fa-ship",
                number: "1000",
                title: "运输物流<sup>+</sup>TEU"
            }
        ],
        
        // 选择我们的优势
        advantages: [
            {
                id: "advantage1",
                icon: "fas fa-award",
                title: "优秀的服务质量",
                description: "在客户与本公司签订合同之后，我们会安排专业人员提供一对一的跟踪服务，确保货物从发货到交付的全程无忧。"
            },
            {
                id: "advantage2",
                icon: "fas fa-headset",
                title: "完善的链路服务",
                description: "在货运代理的基础上，不断延伸服务链路，针对客户需求提供多元化服务专注企业外贸多年，深入研究行业趋势和客户需求，不断创新、完善服务体系，持续提升专业服务水平。"
            },
            {
                id: "advantage3",
                icon: "fas fa-globe",
                title: "丰富的货代经验",
                description: "积累了多年国内进出口一条龙操作经验，为客户核验资料递交船东，确保舱位快速批复，货物顺利装船运输。"
            },
            {
                id: "advantage4",
                icon: "fas fa-shield-alt",
                title: "可靠的货物保障",
                description: "坚持\"诚信为本\"的经营理念，以严谨的态度为每一票货物的进出口提供安全完善的方案。"
            }
        ]
    },
    
    // 业务范围页面
    services: {
        // 危化品/普货运输
        chemical: {
            title: "危化品/普货运输",
            subtitle: "专业的危化品和普货物流解决方案",
            headerImage: "images/service/1/顶部图片.jpg",
            hazardClasses: {
                title: "危化品/普货运输货类",
                description: "危险品共分为九大类，我司除了1、7类之外，其它类别的货物均可承接订舱、仓储、拖车、报关、清关、换单等服务；针对不同类别的货物，我司都能提供让您满意的全球运输服务。",
                classes: [
                    {
                        id: "class2",
                        icon: "fas fa-wind",
                        title: "Class2：气体",
                        description: "<ul><li>2.1类：易燃气体（如氢气、液化石油气）</li><li>2.2类：非易燃无毒气体（如氮气、二氧化碳）</li><li>2.3类：有毒气体（如氯气、氨气）</li></ul>"
                    },
                    {
                        id: "class3",
                        icon: "fas fa-fire",
                        title: "Class3：易燃液体",
                        description: "<ul><li>3类：闪点≤23℃的液体（如汽油、乙醇、丙酮）"
                    },
                    {
                        id: "class4",
                        icon: "fas fa-burn",
                        title: "Class4：易燃固体",
                        description: "<ul><li>4.1类：易燃固体（如硫磺、镁粉）</li><li>4.2类：自燃物品（如白磷）</li><li>4.3类：遇湿易燃物品（如金属钠、钾）</li></ul>"
                    },
                    {
                        id: "class5",
                        icon: "fas fa-radiation-alt",
                        title: "Class5：氧化性物质",
                        description: "<ul><li>5.1类：氧化性物质（如高锰酸钾、硝酸铵）</li><li>5.2类：有机过氧化物（如过氧化苯甲酰）</li></ul>"
                    },
                    {
                        id: "class6",
                        icon: "fas fa-skull-crossbones",
                        title: "Class6：有毒和感染性物质",
                        description: "<ul><li>6.1类：有毒物质（如氰化物、农药）</li><li>6.2类：感染性物质（如医疗废弃物、病毒样本）</li></ul>"
                    },
                    {
                        id: "class8",
                        icon: "fas fa-skull",
                        title: "Class8：腐蚀性物质",
                        description: "<ul><li>8类：酸类（如硫酸、盐酸）、碱类（如氢氧化钠）、其他腐蚀性物质（如溴）"
                    },
                    {
                        id: "class9",
                        icon: "fas fa-exclamation-triangle",
                        title: "Class9：杂项危险物质和物品",
                        description: "<ul><li>9类：锂电池、干冰、石棉、对环境有害物质等。"
                    }
                ]
            },
            advantages: [
                {
                    id: "chemical1",
                    icon: "fas fa-truck-moving",
                    title: "多式联运",
                    description: "海运：精通IMDG代码，擅长危险品集装箱拼箱（LCL）或整箱（FCL）。空运：符合IATA标准，快速处理高时效性危化品。陆运：危险品专用车队，资质齐全，覆盖跨境（如中欧班列）或国内配送。",
                    image: "images/service/1/危险货集装箱.jpg"
                },
                {
                    id: "chemical2",
                    icon: "fas fa-warehouse",
                    title: "仓储堆存",
                    description: "自有仓库，提供危险品堆存，装柜服务。",
                    image: "images/service/1/液体货仓库.jpg"
                },
                {
                    id: "chemical3",
                    icon: "fas fa-truck",
                    title: "危品车队",
                    description: "专用车辆/集装箱（如防爆柜、冷藏箱、特种柜、自备柜）、隔离储存，实时GPS追踪、温湿度监控，确保运输环境稳定。",
                    image: "images/service/1/液体货危险品.png"
                },
                {
                    id: "chemical4",
                    icon: "fas fa-anchor",
                    title: "港口服务",
                    description: "熟悉国内各大港口的报关资料及要求。柜子临时查验，能及时有效提供处理方案，确保柜子赶上预期船期。为客户提供货物保险服务，且熟悉国内各个港口的危化品进出口法律法规。",
                    image: "images/service/1/全球港口覆盖能力.jpg"
                },
                {
                    id: "chemical5",
                    icon: "fas fa-globe-asia",
                    title: "业务网络",
                    description: "覆盖全球六大洲的专业物流网络，包括亚洲、欧洲、北美洲、南美洲、非洲和大洋洲，为您提供安全高效的全球运输服务。主要航线：东南亚 – 南美东/西 – 印尼 – 印巴- 澳洲 – 非洲- 美加 – 地东 – 地西 – 中东 – 中美洲 – 欧洲 – 新西兰 – 加勒比海 – 红海 -黑海 – 墨西哥 – 俄罗斯",
                    image: "images/map.jpg"
                },
                {
                    id: "chemical6",
                    icon: "fas fa-users",
                    title: "专业团队",
                    description: "专业危化品操作客服一条龙，拥有危险品装箱与海事申报资格证书。优化路径，减少延误风险，提高到港效率。通过合理分类、拼箱方案降低运费。",
                    image: "images/team-meeting.jpg"
                }
            ],
            operatingProcess: {
                title: "海运运输操作流程",
                steps: [
                    { id: "step1", icon: "fas fa-clipboard-list", name: "接单" },
                    { id: "step2", icon: "fas fa-ship", name: "订舱" },
                    { id: "step3", icon: "fas fa-box", name: "做箱" },
                    { id: "step4", icon: "fas fa-file-contract", name: "报关装载" },
                    { id: "step5", icon: "fas fa-anchor", name: "卸船" },
                    { id: "step6", icon: "fas fa-bell", name: "通知提货" },
                    { id: "step7", icon: "fas fa-file-signature", name: "清关" },
                    { id: "step8", icon: "fas fa-exchange-alt", name: "换单" },
                    { id: "step9", icon: "fas fa-truck", name: "提货（终端派送）" }
                ]
            }
        },
        
        // 大宗散货运输
        bulk: {
            title: "大宗散货运输",
            subtitle: "高效可靠的大宗商品物流服务",
            headerImage: "images/service/2/顶部图片.jpg",
            introduction: {
                title: "大宗散货运输简介",
                description: "常见的大宗散货类型有煤炭、矿石、粮食、化肥、钢材等，由于数量和体积巨大，其运输环节十分重要，通常需要采用专门的运输设备和方法进行高效运输，如通过散货船、液货船或铁路运输，具有长距离、单向流动的特点等进行运输。",
                services: [
                    {
                        id: "mineral",
                        icon: "fas fa-industry",
                        title: "矿产品运输",
                        description: "专业的矿产品运输服务，包括煤炭、矿石等大宗散货的公路、铁路和水路运输，提供全程物流解决方案。",
                        features: ["煤炭运输", "矿石运输", "多式联运服务", "港口中转服务"],
                        image: "images/service/2/非危险品运输.jpg"
                    },
                    {
                        id: "agricultural",
                        icon: "fas fa-seedling",
                        title: "农产品运输",
                        description: "提供专业的农产品运输服务，包括粮食、饲料等大宗农产品的运输，确保产品新鲜安全送达。",
                        features: ["粮食运输", "饲料运输", "温控运输", "仓储一体化服务"],
                        image: "images/service/2/散货装车.jpg"
                    },
                    {
                        id: "steel",
                        icon: "fas fa-ship",
                        title: "钢材运输",
                        description: "提供专业的钢材运输服务，包括散杂整船、监装加固等专业解决方案，确保钢材安全高效运输。",
                        features: ["散杂整船", "监装加固", "拖车运输", "堆场存放"],
                        image: "images/service/2/钢卷.jpg"
                    }
                ]
            },
            advantages: [
                {
                    id: "bulk1",
                    icon: "fas fa-network-wired",
                    title: "运输资源",
                    description: "船舶资源：与CAPESIZE/VLOC等船队保持长期合作。多式联运：衔接铁路/内河运输，降低末端配送成本。",
                    image: "images/service/2/资源整合.jpg"
                },
                {
                    id: "bulk2",
                    icon: "fas fa-anchor",
                    title: "港口支持",
                    description: "覆盖主流资源国（如澳洲、巴西）与目的港（如中国日照、曹妃甸等），提供包括装卸、仓储在内的全程物流方案。滞期管理：与专业港口代理协调，为客户缩短滞期时间。",
                    image: "images/service/2/铁路运输.jpg"
                },
                {
                    id: "bulk3",
                    icon: "fas fa-ship",
                    title: "专属服务",
                    description: "根据货物特性（密度、湿度等）配置散货船、自卸船等专用船舶，减少货损，提升装载效率。货物监管与质量保障：提供第三方验货、水尺计重、湿度检测等服务，避免贸易纠纷。",
                    image: "images/service/2/专业化船舶配备.jpg"
                }
            ]
        }
    },
    
    // 关于我们页面
    about: {
        // 公司简介
        companyIntro: "深圳市冠集供应链管理有限公司是一家立足本土、实践现代物流理念的创新成长型企业。总部设立于深圳，并在新西兰、中国香港、上海、宁波、青岛、武汉、昆明等地设有分支机构。公司拥有NVOCC无船承运人资质，是CIFA（中国国际货运代理协会）、FMC（美国联邦海事委员会）、WCA（世界货运联盟）会员，以及广东危险品货运协会成员。\n\n业务网络以中国、美国、欧盟、东盟为核心枢纽，覆盖全球，为客户提供国际运输代理、口岸通关、国际配送、供应链方案设计、供应链融资、采购分销执行及委托加工等一站式服务。",
        
        // 服务理念
        values: [
            {
                id: "value1",
                icon: "fas fa-handshake",
                title: "对客户的责任",
                description: "注重软硬件协同发展，以客户需求为中心，持续提升服务满意度，为客户创造更大价值。"
            },
            {
                id: "value2",
                icon: "fas fa-user-tie",
                title: "对员工的责任",
                description: "广纳人才，为员工提供成长机会与舒适的工作环境，打造凝聚力强的团队文化。"
            },
            {
                id: "value3",
                icon: "fas fa-globe",
                title: "对社会的责任",
                description: "积极承担社会责任，常态化参与公益活动，践行企业公民使命。"
            }
        ],
        
        // 团队介绍
        teamIntro: "冠集供应链汇聚了一支经验丰富、专业高效的物流与供应链管理团队。公司配备20余辆自有车队及专业运输人员，持有危险品运输资质，确保同城及城际物流服务的安全可靠。团队成员均经过系统化培训，精通国际贸易规则和全流程物流操作，能够为客户提供高性价比的定制化进出口解决方案。\n\n依托专业的团队和完善的硬件设施，我们提供涵盖货物进出仓管理、智能理货分拣、拆打托盘、包装换标、取样分装等全方位的仓储及供应链增值服务，以专业能力和资源优势为客户创造更大价值。",
        
        // 发展策略
        strategies: [
            {
                id: "strategy1",
                icon: "fas fa-eye",
                title: "企业愿景",
                description: "扩大增值服务内涵，不断优化各种运输流程，与客户共同致力于可持续发展方案。"
            },
            {
                id: "strategy2",
                icon: "fas fa-bullseye",
                title: "企业目标",
                description: "致力成为全球货运行业中最具创新意识的时代缔造者，为客户提供嵌入式物流方案，全力帮助他们成为行业中的佼佼者。"
            }
        ]
    }
};

// 将数据导出，供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = websiteData;
} 