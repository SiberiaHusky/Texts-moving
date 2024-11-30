# Texts Moving Effect

[**Readme**](README.md)

本项目使用 Kimi.ai 作为技术支持及介绍编写。

## 简介

Texts Moving Effect 是一个简单的 JavaScript 库，用于创建文本移动效果。

它允许单个字符在网页上随机移动，从而产生一种动态的视觉体验。

这个项目旨在展示如何使用基本的 HTML、CSS 和 JavaScript 来实现生动的文本动画效果。

## 功能

- **动态文本移动**：文本中的每个字符都会在页面上随机移动。
- **暂停和恢复**：当鼠标悬停在文本容器上时，文本移动会暂停；鼠标离开后，文本移动会恢复。
- **响应式设计**：文本移动效果会根据容器的大小自动调整。

## 使用方法

1. **HTML**：在你的 HTML 文件中引入 `texts-moving.js` 和相应的 CSS 样式。
2. **CSS**：确保你的样式表包含了必要的样式规则，以正确显示文本和容器。
3. **JavaScript**：`texts-moving.js` 脚本将处理文本的动态移动效果。

## 安装

你可以通过克隆这个仓库到你的本地环境来使用 Texts Moving Effect：

```bash
git clone https://github.com/SiberiaHusky/texts-moving.git
```

或者，你可以直接下载 `texts-moving.js` 文件，并在你的项目中引用它。

## 示例代码

以下是如何在你的 HTML 文件中使用 Texts Moving Effect 的示例：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 引入 CSS 样式 -->
    <style>
        #text-container {
            position: relative;
            display: flex;
            top: 0;
            margin: 16px;
        }

        .text {
            position: absolute;
            font-size: 24px;
            font-family: 'Courier New', Courier, monospace;
            opacity: .75;
        }
    </style>
</head>
<body>
    <!-- 文本容器 -->
    <div id="text-container">
        <!-- 你想显示的文本 -->
         <p id="text-fit">With countless designs leave my
            footprints</p>
    </div>
    <!-- （可选）自定义文本移动步数及动画时长 -->
     <script type="texts-moving-config">
        {
        "step": 50,
        "animationMinDuration": 1,
        "animationMaxDuration": 5
        }
    </script>
    <!-- 引入 JavaScript 脚本 -->
    <script src="texts-moving.js"></script>
</body>
</html>
```

## 贡献

欢迎任何形式的贡献！

如果你有任何改进建议或者发现了 bug，请通过提交 issue 或者 pull request 来帮助我改进这个项目。

## 许可证

Texts Moving Effect 使用 MIT 许可证。

有关更多信息，请查看 `LICENSE` 文件。

---

希望这个介绍能帮助你快速了解 Texts Moving Effect 项目，并开始在你的项目中使用它。如果你有任何问题，欢迎在 GitHub 上提出。