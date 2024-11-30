# Texts Moving Effect

[**介绍**](README.zh_CN.md)

This project uses Kimi.ai as technical support and introduction for writing.

## Introduction

Texts Moving Effect is a simple JavaScript library for creating text movement effects.

It allows individual characters to move randomly on the web page, creating a dynamic visual experience.

This project aims to demonstrate how to use basic HTML, CSS, and JavaScript to achieve vivid text animation effects.

## Features

- **Dynamic Text Movement**: Each character in the text will move randomly on the page.
- **Pause and Resume**: The text movement will pause when the mouse hovers over the text container; it will resume once the mouse leaves.
- **Responsive Design**: The text movement effect will automatically adjust based on the size of the container.

## Usage

1. **HTML**: Include `texts-moving.js` and the corresponding CSS styles in your HTML file.
2. **CSS**: Ensure your stylesheet contains the necessary style rules to correctly display the text and container.
3. **JavaScript**: The `texts-moving.js` script will handle the dynamic movement of the text.

## Installation

You can use Texts Moving Effect by cloning this repository to your local environment:

```bash
git clone https://github.com/SiberiaHusky/texts-moving.git
```

Alternatively, you can directly download the `texts-moving.js` file and reference it in your project.

## Example Code

Here is an example of how to use Texts Moving Effect in your HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Include CSS styles -->
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
    <!-- Text container -->
    <div id="text-container">
        <!-- The text you want to display -->
         <p id="text-fit">With countless designs leave my
            footprints</p>
    </div>
    <!-- (Optional) Customize text movement steps and animation duration -->
     <script type="texts-moving-config">
        {
        "step": 50,
        "animationMinDuration": 1,
        "animationMaxDuration": 5
        }
    </script>
    <!-- Include JavaScript script -->
    <script src="texts-moving.js"></script>
</body>
</html>
```

## Contributing

Any form of contribution is welcome!

If you have any suggestions for improvement or have found a bug, please help me improve this project by submitting an issue or a pull request.

## License

Texts Moving Effect is licensed under the MIT License.

For more information, please refer to the `LICENSE` file.

---

I hope this introduction will help you quickly understand the Texts Moving Effect project and start using it in your projects. If you have any questions, please feel free to raise them on GitHub.
