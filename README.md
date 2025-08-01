# 🎉 生日祝福网站

一个充满欢乐和动画效果的生日祝福网站！

## ✨ 功能特点

- 🎈 飘动的气球动画
- 🎂 精美的生日蛋糕
- 🎁 跳动的礼物动画
- 🎊 点击庆祝按钮触发彩纸效果
- 📱 响应式设计，支持手机和平板
- 🎵 音效支持（需要用户交互）

## 🚀 如何部署

### 方法1：本地运行
```bash
# 在项目目录下运行
python3 -m http.server 8000
# 然后在浏览器中访问 http://localhost:8000
```

### 方法2：GitHub Pages（推荐）
1. 在GitHub上创建一个新仓库
2. 上传这些文件到仓库
3. 在仓库设置中启用GitHub Pages
4. 选择main分支作为源
5. 几分钟后你的网站就会在 `https://你的用户名.github.io/仓库名` 上线

### 方法3：Netlify（免费）
1. 注册Netlify账号
2. 拖拽整个项目文件夹到Netlify部署区域
3. 自动部署完成，获得一个免费域名

### 方法4：Vercel（免费）
1. 注册Vercel账号
2. 连接GitHub仓库
3. 自动部署，获得免费域名

## 🎮 使用方法

- 点击"点击庆祝！"按钮触发庆祝效果
- 按空格键或回车键也可以触发庆祝
- 在手机上向上滑动可以触发庆祝
- 鼠标悬停在卡片上会有放大效果

## 📁 文件结构

```
birthday-website/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # JavaScript交互
└── README.md       # 说明文档
```

## 🎨 自定义

你可以轻松自定义这个网站：

1. **修改祝福语**：编辑 `index.html` 中的 `.message` 部分
2. **更换颜色**：修改 `style.css` 中的颜色值
3. **添加更多动画**：在 `script.js` 中添加新的交互效果
4. **更换背景**：修改 `body` 的 `background` 属性

## 🌟 技术栈

- HTML5
- CSS3 (动画、渐变、响应式)
- JavaScript (ES6+)
- Web Audio API (音效)

## 📱 兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ 移动端浏览器

---

祝你生日快乐！🎂🎉 