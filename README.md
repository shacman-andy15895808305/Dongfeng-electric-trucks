# Dongfeng Electric Trucks 本地源码项目

这是当前 **Dongfeng Electric Trucks** 网站的本地运行版本。网站页面内容、导航、车型数据、图片素材、样式、响应式布局和前端功能均保留在 `dist` 目录中；未对现有网站进行重新设计或内容修改。

## 项目结构

```text
dongfeng-electric-trucks/
├─ dist/                 # 完整网站页面、脚本、样式和图片素材
│  ├─ assets/            # 网站图片素材
│  ├─ index.html         # 首页
│  ├─ electric-*.html    # 车型页面
│  ├─ blog.html          # 博客列表页
│  ├─ article.html       # 博客文章页
│  ├─ about.html         # 关于页面
│  ├─ contact.html       # 联系页面
│  ├─ *.css              # 网站样式
│  └─ *.js               # 车型数据和交互功能
├─ package.json          # Node.js 项目配置
├─ server.js             # 本地静态网站服务器
└─ README.md             # 本地使用说明
```

## Windows 本地运行

### 1. 安装 Node.js

安装 Node.js 18 或更高版本（建议安装当前 LTS 版本）。安装完成后，打开 PowerShell，运行：

```powershell
node -v
npm -v
```

能够显示版本号即表示安装成功。

### 2. 解压源码包

把下载的 ZIP 压缩包解压到本地，例如：

```text
C:\Users\你的用户名\Desktop\dongfeng-electric-trucks
```

### 3. 打开 PowerShell 并进入项目目录

可以在项目文件夹空白处按住 `Shift` 并单击鼠标右键，选择“在此处打开 PowerShell 窗口”或“在终端中打开”。也可以执行：

```powershell
cd "C:\Users\你的用户名\Desktop\dongfeng-electric-trucks"
```

### 4. 安装依赖

```powershell
npm install
```

本项目使用 Node.js 内置模块，没有额外第三方运行依赖；该命令会检查项目配置并生成本地锁文件（如当前环境需要）。

### 5. 启动网站

```powershell
npm start
```

出现以下提示后，在浏览器打开：

```text
http://127.0.0.1:3000
```

### 6. 停止网站

回到 PowerShell 窗口，按：

```text
Ctrl + C
```

## 常用命令

```powershell
npm start
npm run dev
```

两个命令都会在 `http://127.0.0.1:3000` 启动当前网站。

如需更换端口，可在 PowerShell 中运行：

```powershell
$env:PORT=8080
npm start
```

然后访问 `http://127.0.0.1:8080`。

## 修改网站

- 页面内容：编辑 `dist` 中对应的 `.html` 文件。
- 网站样式：编辑 `dist/styles.css` 和 `dist/blog.css`。
- 车型数据：编辑 `dist/product-data.js`。
- 首页与表单交互：编辑 `dist/app.js`。
- 车型页面渲染：编辑 `dist/product-page.js`。
- 博客内容：编辑 `dist/blog.js` 和 `dist/article.js`。
- 图片素材：保存在 `dist/assets` 中。

修改后保存文件并刷新浏览器即可查看效果。

## 注意事项

- Google Fonts、WhatsApp、邮箱和电话链接需要联网才能正常访问。
- 报价表单会调用本机默认邮件程序，不包含后端数据库。
- 请保留 `dist` 的目录结构，否则页面中的图片、样式或脚本路径可能失效。
