# Dongfeng Electric Trucks 本地项目

这是 Dongfeng Electric Trucks 网站的正式本地源码目录。网站页面内容、车型数据、图片、CSS、JavaScript、布局和 SEO 文件都保存在 `dist` 目录中。

## Windows 启动网站

最简单的方式是在项目根目录双击：

```text
START-WEBSITE.bat
```

脚本会自动进入当前项目目录，使用本机 Node.js 启动 `server.js`，并自动打开浏览器访问：

```text
http://127.0.0.1:3000
```

不需要手动输入 `npm` 命令。

## 命令行启动方式

如果需要从 PowerShell 或命令提示符手动启动，可以先进入项目根目录，然后执行：

```powershell
npm start
```

也可以直接执行：

```powershell
node server.js
```

本项目不依赖第三方 npm 包，服务器使用 Node.js 内置模块。建议安装 Node.js 18 或更高版本。

## 停止网站

网站启动后会有一个命令行窗口保持运行。要停止网站：

1. 回到启动网站的命令行窗口。
2. 按 `Ctrl + C`。
3. 如果 Windows 提示是否终止批处理作业，输入 `Y` 后按回车。

关闭该命令行窗口也会停止本地网站服务器。

## 备份项目

在修改网站前，可以在项目根目录双击：

```text
BACKUP-PROJECT.bat
```

脚本会把当前整个项目打包为 ZIP 文件，并保存到本项目文件夹的上一级目录。备份文件名会带日期和时间，避免覆盖旧备份，例如：

```text
dongfeng-electric-trucks-backup-20260909-153000.zip
```

## 项目目录结构

```text
dongfeng-electric-trucks/
|-- .openai/
|   `-- hosting.json          # Sites 托管配置
|-- dist/                     # 网站正式静态文件目录
|   |-- assets/               # 首页和车型图片素材
|   |   `-- catalog/          # 车型详情图片素材
|   |-- index.html            # 首页
|   |-- about.html            # 关于页面
|   |-- contact.html          # 联系页面
|   |-- blog.html             # 博客列表页面
|   |-- article.html          # 博客文章页面
|   |-- electric-cargo.html   # 电动货车页面
|   |-- electric-dump.html    # 电动自卸车页面
|   |-- electric-special.html # 电动专用车页面
|   |-- electric-tractor.html # 电动牵引车页面
|   |-- product-template.html # 车型页面模板
|   |-- styles.css            # 网站主样式
|   |-- blog.css              # 博客样式
|   |-- app.js                # 首页和表单交互
|   |-- product-data.js       # 车型数据
|   |-- product-page.js       # 车型页面渲染逻辑
|   |-- blog.js               # 博客列表逻辑
|   |-- article.js            # 文章页面逻辑
|   |-- robots.txt            # 搜索引擎抓取配置
|   `-- sitemap.xml           # 网站地图
|-- package.json              # Node.js 项目配置和启动脚本
|-- package-lock.json         # npm 锁文件
|-- server.js                 # 本地静态网站服务器
|-- START-WEBSITE.bat         # Windows 一键启动脚本
|-- BACKUP-PROJECT.bat        # Windows 一键备份脚本
`-- README.md                 # 本说明文档
```

## 网站文件所在位置

正式网站文件都在：

```text
dist
```

本地服务器 `server.js` 会把 `dist` 作为网站根目录。访问 `http://127.0.0.1:3000` 时，实际打开的是：

```text
dist/index.html
```
