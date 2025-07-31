# 深圳市冠集供应链管理有限公司 - 企业网站

## 🚀 项目概述

本项目是深圳市冠集供应链管理有限公司的官方企业网站，采用现代化的响应式设计，提供危化品/普货运输、大宗散货运输等专业物流服务的展示。
## 👥 项目负责人
- **项目所有：冠集供应链管理有限公司
- **内容修改、提供者：Jessie
- **网站制作修改：李梓杰（实习）
- **网站技术问题可联系李梓杰

## ✨ 核心特性

- **🎨 响应式设计**：支持PC、平板、手机等多种设备
- **⚡ 数据驱动架构**：通过JSON配置文件管理所有网站内容
- **🔄 实时同步**：修改数据文件后刷新即可看到更新
- **📱 移动端优化**：优秀的移动端用户体验
- **🎯 SEO友好**：优化的页面结构和元数据

## 📁 项目结构

```
web/
├── index.html          # 首页
├── services.html       # 业务范围页面
├── about.html         # 关于我们
├── contact.html       # 联系我们
├── news.html          # 招聘信息
├── css/              # 样式文件
│   ├── style.css     # 主样式
│   ├── nav.css       # 导航样式
│   └── services.css  # 业务页面样式
├── js/               # JavaScript文件
│   ├── website-data.js    # 🎯 核心数据文件
│   ├── content-loader.js  # 内容加载器
│   └── main.js           # 主要功能
├── images/           # 图片资源
└── README.md         # 项目说明
```

## 🔧 内容维护系统 (v2.0)

### 📝 如何修改网站内容

**重要：所有网站内容现在通过 `js/website-data.js` 文件进行管理！**

#### 1. 修改步骤
```bash
1. 打开 js/website-data.js 文件，可以通过记事本或者相关编程工具
2. 修改相应的数据内容
3. 保存文件
4. 刷新浏览器页面
5. ✅ 更改立即生效！
```

#### 2. 主要数据结构
```javascript
const websiteData = {
    // 🏠 首页内容
    home: {
        stats: [        // 统计数据
            { icon: "fas fa-calendar-alt", number: "2015", title: "成立时间" },
            { icon: "fas fa-users", number: "1000", title: "服务客户<sup>+</sup>次" },
            { icon: "fas fa-map-marker-alt", number: "200", title: "覆盖港口<sup>+</sup>" },
            { icon: "fas fa-ship", number: "1000", title: "运输物流<sup>+</sup>TEU" }
        ],
        advantages: [], // 公司优势
        services: []    // 服务项目
    },
    
    // 📋 业务范围
    services: {
        chemical: {     // 危化品/普货运输
            advantages: [],      // 核心优势 (6个)
            hazardClasses: {},   // 危化品分类
            operatingProcess: {} // 操作流程 (9步)
        },
        bulk: {         // 大宗散货运输
            advantages: [],    // 核心优势 (3个)
            introduction: {}   // 运输简介 (3个服务)
        }
    },
    
    // ℹ️ 关于我们 & 联系信息
    about: {},
    global: {}
};
```

#### 3. 常见修改示例

**修改首页统计数据**
```javascript
// 在 js/website-data.js 中找到 home.stats 部分
stats: [
    {
        id: "stat3",
        icon: "fas fa-map-marker-alt",  // 可修改图标
        number: "200",                   // 可修改数字
        title: "覆盖港口<sup>+</sup>"   // 可修改标题
    }
]
```

**修改危化品分类描述**
```javascript
// 在 services.chemical.hazardClasses.classes 中
{
    id: "class3",
    title: "Class3：易燃液体",
    description: "闪点≤23℃的液体（如汽油、乙醇、丙酮）"  // 可直接修改
}
```

**修改服务优势内容**
```javascript
// 在 services.chemical.advantages 或 services.bulk.advantages 中
{
    title: "多式联运",  // 可修改标题
    description: "海运：精通IMDG代码...",  // 可修改描述
    image: "images/service/1/危险货集装箱.jpg"  // 可修改图片
}
```

## 🌐 本地开发

### 启动方法
```bash
# 进入项目目录
cd /path/to/web

# 启动本地服务器
python -m http.server 8014

# 访问网站
http://localhost:8014
```

### 浏览器测试
- **首页**: http://localhost:8014
- **危化品运输**: http://localhost:8014/services.html?type=chemical
- **大宗散货**: http://localhost:8014/services.html?type=bulk
- **关于我们**: http://localhost:8014/about.html
- **联系我们**: http://localhost:8014/contact.html
- **招聘信息**: http://localhost:8014/news.html
- **职位详情**: http://localhost:8014/job-detail.html

## 🔍 技术架构

### 数据同步机制
- **数据源**：`js/website-data.js` (单一数据源)
- **加载器**：`js/content-loader.js` (智能加载系统)
- **渲染**：动态DOM更新 (实时同步)
- **缓存**：版本控制 (?v=2.0) (强制刷新)

### 响应式支持
- **桌面端**：≥1200px
- **平板端**：768px-1199px  
- **手机端**：≤767px

## 📊 功能页面

### 🏠 首页 (index.html)
- 轮播图展示
- 服务项目介绍
- 公司成就统计
- 核心优势展示

### 📋 业务范围 (services.html)
**危化品/普货运输 (?type=chemical)**
- 危化品分类详情 (Class 2-6, 8-9)
- 六大核心优势
- 九步操作流程

**大宗散货运输 (?type=bulk)**
- 三大核心优势
- 运输简介 (矿产品、农产品、钢材)

### ℹ️ 其他页面
- **关于我们**：公司介绍、服务理念、发展策略
- **联系我们**：联系信息、地图定位
- **招聘信息**：职位发布、HR联系方式

## 🛠️ 维护指南

### ✅ 推荐做法
- ✅ 只修改 `js/website-data.js` 文件
- ✅ 保存后刷新浏览器测试
- ✅ 使用有效的FontAwesome图标类名
- ✅ 图片路径使用相对路径

### ❌ 避免事项
- ❌ 直接修改HTML文件
- ❌ 修改 `js/content-loader.js` (除非技术升级)
- ❌ 使用不存在的图片路径
- ❌ 破坏JSON格式语法

### 🔧 故障排除
1. **内容未更新**：检查JSON语法是否正确
2. **图标不显示**：验证FontAwesome类名
3. **图片不显示**：检查图片路径是否正确
4. **页面报错**：查看浏览器控制台错误信息

## 📈 版本历史

- **v2.2** - 最终优化完成（QQ图标修复、完整性验证）
- **v2.1** - 页脚联系方式统一优化
- **v2.0** - 数据同步机制重大优化
- **v1.3** - 数据加载问题修复  
- **v1.2** - 图标显示和缓存优化
- **v1.1** - 内容重构和布局优化
- **v1.0** - 基础功能实现

详细更新记录请查看 [CHANGELOG.md](./CHANGELOG.md)

## 👥 联系信息

**深圳市冠集供应链管理有限公司**
- 📧 邮箱：phyllis@glory-scm.com
- 📞 电话：0755-82559337
- 📱 手机：18682257602
- 🏢 地址：深圳市福田区福华三路168号深圳国际商会中心3005室

---

**⚡ 现在可以轻松维护网站内容！只需编辑 `js/website-data.js` 文件即可。** 