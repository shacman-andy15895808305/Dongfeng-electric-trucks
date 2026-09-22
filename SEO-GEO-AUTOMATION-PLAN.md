# Dongfeng Electric Trucks SEO/GEO 自动化计划

## 目标

- 持续增加能够带来真实采购询盘的车型、应用和决策内容。
- 同时提高 Google 搜索、Google AI、Bing 和 ChatGPT 对网站内容的理解与引用能力。
- 使用真实车型数据、真实图片和可核验来源，不复制竞品文章，不编造价格、认证、续航、客户案例或测试结果。
- 用户只负责在每篇文章发布后，到 GSC 对新网址手动点击一次“请求编入索引”。

## 固定执行节奏

- 第一阶段（前 30 篇）：每天 09:00 最多发布三篇高质量、搜索意图不同的文章。
- 每周一发布前先读取 GSC，检查排名、点击、展示、CTR、Sitemap 和页面收录，并执行证据明确的技术优化。
- 第一阶段完成后：继续每天最多发布三篇，并由 GSC 数据和内容缺口调整选题。
- 资料不足时只发布能够完成事实核验的文章，并明确列出缺少的配置或图片，不用猜测填充。
- 速度不能降低质量：不批量复制模板段落，不制造多个搜索意图相同的页面，不发布无法核验的车型参数。

## 发布前基础优化

- [ ] 保留现有文章网址和已取得的收录，不进行无映射的大规模 URL 迁移。
- [ ] 新文章使用可直接读取正文的独立静态 HTML，而不是只依赖 JavaScript 渲染。
- [ ] 为新文章建立统一模板：Title、Meta Description、canonical、Article、Breadcrumb、H1/H2、配置表、FAQ、内链和询盘 CTA。
- [ ] 每次发布同步更新 Blog 列表、相关车型页内链和 sitemap.xml。

## 近期文章队列

自动任务按以下顺序选择第一篇未完成文章。发布后将复选框改为已完成，并在标题下记录发布日期、正式网址和 Git commit。

### 1. 600 kWh 电动牵引车充电规划

- [x] 状态：已发布
- 发布日期：2026-09-21
- 正式网址：https://dongfeng-evtruck.com/blog/600-kwh-electric-tractor-charging-plan.html
- Git commit：见本次发布提交
- 英文标题方向：How to Plan Charging for a 600 kWh Electric Tractor Fleet
- 主要关键词：600 kWh electric tractor charging, electric truck depot charging
- 内容重点：日里程、SOC 窗口、双枪直流充电、班次安排、配电条件、温度和备用余量。
- 数据边界：只使用现有车型资料中确认的电池容量、充电电流和接口，不承诺未经测试的固定充电时间。

### 2. Dongfeng TE 系列选型指南

- [x] 状态：已有内容覆盖，避免重复页面
- 覆盖网址：https://dongfeng-evtruck.com/article.html?id=electric-tractor-selection
- 核查日期：2026-09-22
- 英文标题方向：Dongfeng TE Electric Tractor Selection Guide: 42 t to 120 t GCW
- 主要关键词：Dongfeng electric tractor, TE8P, TE8L, electric tractor selection
- 内容重点：42 t、49 t、80 t、120 t 级别如何根据载荷、路线、坡度和充电窗口选择。

### 3. 6x4 与 8x4 电动自卸车选择

- [x] 状态：已发布
- 发布日期：2026-09-22
- 正式网址：https://dongfeng-evtruck.com/blog/6x4-vs-8x4-electric-dump-trucks.html
- Git commit：见本次发布提交
- 英文标题方向：6x4 vs 8x4 Electric Dump Trucks for Mining and Construction
- 主要关键词：electric dump truck, electric mining truck, 6x4 vs 8x4 dump truck
- 内容重点：场地道路、转弯空间、载荷、坡度、车架、车桥、电池和补能方式。

### 4. KT5M / KT5J 城市物流和车身选型

- [x] 状态：已发布
- 发布日期：2026-09-22
- 正式网址：https://dongfeng-evtruck.com/blog/dongfeng-kt5m-kt5j-electric-cargo-truck-guide.html
- Git commit：见本次发布提交
- 英文标题方向：Dongfeng KT5M and KT5J Electric Cargo Trucks for Box, Reefer and Urban Delivery
- 主要关键词：Dongfeng electric cargo truck, electric box truck, refrigerated electric truck
- 内容重点：轴距、车厢、冷藏辅助用电、日里程、装卸频率和回场充电。

### 5. 右舵电动卡车出口指南

- [x] 状态：已发布
- 发布日期：2026-09-22
- 正式网址：https://dongfeng-evtruck.com/blog/right-hand-drive-dongfeng-electric-trucks-export-guide.html
- Git commit：见本次发布提交
- 英文标题方向：Right-Hand-Drive Dongfeng Electric Trucks: Models and Export Checks
- 主要关键词：RHD electric truck, right hand drive electric tractor, electric truck export
- 内容重点：只列出现有目录确认的右舵型号，并说明目的国法规、充电接口和最终合规确认要求。

### 6. 电动重卡 TCO 计算方法

- [ ] 状态：待发布
- 英文标题方向：Electric Truck TCO Calculator: Energy, Charging, Maintenance and Utilization
- 主要关键词：electric truck TCO, electric truck operating cost
- 内容重点：提供可替换变量和公式，不使用虚构客户数据；示例数字必须明确标为演示假设。

### 7. 中国电动卡车出口采购清单

- [ ] 状态：待发布
- 英文标题方向：China Electric Truck Export Checklist: Route, Payload, Charging and Compliance
- 主要关键词：China electric truck exporter, electric truck buying guide
- 内容重点：国家、用途、载荷、日里程、坡度、气候、车身、充电标准、运输和备件。

### 8. CATL LFP 电池与热管理基础

- [ ] 状态：待发布
- 英文标题方向：CATL LFP Batteries in Heavy Electric Trucks: Capacity, Thermal Management and Fleet Planning
- 主要关键词：CATL LFP electric truck battery, electric truck thermal management
- 内容重点：根据可靠来源说明 LFP、电池容量、温度、SOC 管理和车队运营，不填写无法证明的循环寿命或质保承诺。

### 9. TE46 4x2 港口短倒牵引车

- [ ] 状态：待发布
- 英文标题方向：Dongfeng TE46 4x2 Electric Tractor for Port and Short-Haul Operations
- 主要关键词：TE46 electric tractor, port electric tractor, 4x2 electric truck

### 10. TE8L / TE8K 6x4 区域运输

- [ ] 状态：待发布
- 英文标题方向：Dongfeng TE8L and TE8K 6x4 Electric Tractors for Regional Haulage
- 主要关键词：TE8L electric tractor, TE8K electric truck, 6x4 electric tractor

### 11. TE9L / TE9B 重载区域运输

- [ ] 状态：待发布
- 英文标题方向：Dongfeng TE9L and TE9B Electric Tractors: Battery and Duty-Cycle Selection
- 主要关键词：TE9L electric tractor, TE9B electric truck

### 12. KTA1 8x4 城市建设自卸车

- [ ] 状态：待发布
- 英文标题方向：Dongfeng KTA1 8x4 Electric Dump Truck for Urban Construction
- 主要关键词：KTA1 electric dump truck, 8x4 electric tipper

### 13. TZ3Z 55 t 工程自卸车

- [ ] 状态：待发布
- 英文标题方向：Dongfeng TZ3Z Electric Dump Truck for Quarry and Construction Haulage
- 主要关键词：TZ3Z electric dump truck, electric quarry truck

### 14. TZ5E 6x4 中型工程自卸车

- [ ] 状态：待发布
- 英文标题方向：Dongfeng TZ5E 6x4 Electric Dump Truck: Suitable Routes and Site Conditions
- 主要关键词：TZ5E electric dump truck, 6x4 electric tipper

### 15. TZ4Y / TZ5Y 右舵自卸车

- [ ] 状态：待发布
- 英文标题方向：Dongfeng TZ4Y and TZ5Y Right-Hand-Drive Electric Dump Trucks
- 主要关键词：RHD electric dump truck, TZ5Y electric truck

### 16. KTH1 / KTH2 / KTH3 重型载货底盘

- [ ] 状态：待发布
- 英文标题方向：Dongfeng KTH Electric Cargo Truck Guide: KTH1, KTH2 and KTH3
- 主要关键词：KTH electric cargo truck, 8x4 electric cargo chassis

### 17. KT3F / KT7A 电动洒水和抑尘车

- [ ] 状态：待发布
- 英文标题方向：Dongfeng Electric Water and Dust-Suppression Trucks for Municipal Fleets
- 主要关键词：electric water truck, electric sprinkler truck

### 18. KT1D 电动洗扫车

- [ ] 状态：待发布
- 英文标题方向：Dongfeng KT1D Electric Sweeper Truck for Urban Road Cleaning
- 主要关键词：electric sweeper truck, KT1D

### 19. KT3E / TZ2E 电动垃圾车

- [ ] 状态：待发布
- 英文标题方向：Dongfeng Electric Refuse Trucks for Collection and Transfer Operations
- 主要关键词：electric garbage truck, electric refuse truck

### 20. TZ8J / KT9X 电动搅拌车

- [ ] 状态：待发布
- 英文标题方向：Dongfeng Electric Concrete Mixer Trucks: TZ8J and KT9X Selection Guide
- 主要关键词：electric concrete mixer truck, KT9X, TZ8J

### 21. 港口短倒电动化工况规划

- [ ] 状态：待发布
- 英文标题方向：How to Plan an Electric Truck Duty Cycle for Port Container Haulage
- 主要关键词：port electric truck, electric terminal tractor duty cycle

### 22. 矿区电动卡车能源规划

- [ ] 状态：待发布
- 英文标题方向：Mine-Site Electric Truck Energy Planning: Grade, Payload and Charging Windows
- 主要关键词：electric mining truck energy consumption, mine charging

### 23. 冷链车辅助用电和续航规划

- [ ] 状态：待发布
- 英文标题方向：Electric Refrigerated Truck Range Planning: Traction and Auxiliary Loads
- 主要关键词：electric refrigerated truck, reefer electric truck range

### 24. 上装和电动 PTO 选型

- [ ] 状态：待发布
- 英文标题方向：Electric Truck Body Upfit and PTO Planning for Export Fleets
- 主要关键词：electric truck PTO, electric truck body builder

### 25. 262 / 310 / 400 / 600 kWh 电池选择

- [ ] 状态：待发布
- 英文标题方向：How to Choose Electric Truck Battery Capacity: 262 to 600 kWh
- 主要关键词：electric truck battery capacity, 600 kWh truck battery

### 26. GB/T 与 CCS2 充电接口采购检查

- [ ] 状态：待发布
- 英文标题方向：GB/T vs CCS2 for Electric Truck Imports: What Fleet Buyers Must Confirm
- 主要关键词：GB/T vs CCS2 electric truck, electric truck charging connector

### 27. 高温地区电动重卡运营

- [ ] 状态：待发布
- 英文标题方向：Operating Heavy Electric Trucks in Hot Climates: Cooling and Charging Planning
- 主要关键词：electric truck hot climate, battery thermal management

### 28. 出口前验车和文件检查

- [ ] 状态：待发布
- 英文标题方向：Electric Truck Pre-Shipment Inspection Checklist for International Buyers
- 主要关键词：electric truck inspection, truck pre-shipment inspection

### 29. 备件和售后准备

- [ ] 状态：待发布
- 英文标题方向：Electric Truck Spare Parts Planning for Overseas Fleets
- 主要关键词：electric truck spare parts, electric truck after-sales

### 30. 首批车队试运营计划

- [ ] 状态：待发布
- 英文标题方向：How to Launch an Electric Truck Pilot Fleet: Route, Charger and Driver Plan
- 主要关键词：electric truck pilot fleet, fleet electrification plan

## 单篇文章质量标准

- 正文以英文为主，通常 1,200–1,800 词；以完整回答采购问题为准，不机械凑字数。
- 第一屏直接回答文章核心问题，正文必须包含真实配置表、适用场景、限制、采购检查项和 FAQ。
- 使用现有真实车辆或部件图片；图片必须有准确 alt，不生成或冒充真实车型图片。
- 车型参数必须能追溯到项目中的目录、配置表或用户提供资料。
- 法规、标准和市场信息必须先查询官方或第一方来源，并标注适用时间。
- 至少包含 3 条自然内链：对应车型页、另一篇相关知识文章、真实询盘页。
- CTA 询问国家、应用、载荷、日里程、道路坡度和充电条件。
- 发布前检查 HTML、链接、图片、移动端、结构化数据和控制台错误。
- 发布后更新 sitemap.xml 的网址和 lastmod，提交并推送 main。
- 完成通知必须给出正式网址，供用户手动请求编入索引。

## GSC 决策规则

- 排名 8–20 且有稳定展示：优先扩充对应页面和相关内链。
- 展示较高但 CTR 低：先检查搜索意图，再优化 Title 和 Description。
- 新页面未收录不足 14 天：继续观察，不重复批量提交。
- 页面长期未收录：检查可抓取正文、重复主题、canonical、内链和内容价值。
- 不根据一两天的数据波动大改页面，不承诺固定排名或第一名。
