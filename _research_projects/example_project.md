---
layout: page
title: Example Research Project
description: This is an example research project that can be completed or in progress.
img: assets/img/12.jpg
importance: 1
status: in_progress
display: false
---

这是一个示例研究项目。你可以参考这个格式来创建自己的研究项目。

## 字段说明

### 必需字段：
- **`title`**: 项目标题（显示在顶部，粗体）
- **`description`**: 项目描述（显示在标题下方，斜体）
- **`importance`**: 排序顺序（数字越小越靠前，例如：1, 2, 3...）

### 可选字段：
- **`img`**: 项目预览图片路径（可选，显示在左侧，统一大小 200px 高度）
  - 相对路径：`assets/img/publication_preview/your_image.jpg`（推荐）
  - 绝对路径：`/assets/img/publication_preview/your_image.jpg`
  - 外部链接：`https://example.com/image.jpg`
  - **注意**：图片会自动裁剪为统一大小（200px 高度），建议使用 4:3 或 16:9 比例的图片
  
- **`authors`**: 作者/合作者信息（可选，显示在标题下方）
  - 例如：`Zhixin Tu, Yihao Jiang, Chenglong Fu`
  
- **`note`**: 备注信息（可选，显示在描述下方）
  - 例如：`Course project`、`Under review`、`In collaboration with...`
  
- **`status`**: 项目状态（可选，会显示为徽章）
  - 例如：`in_progress`、`completed`、`submitted`
  
- **`video`**: 视频链接（可选，会在卡片上显示 Video 按钮）
  - **YouTube**: `https://www.youtube.com/embed/VIDEO_ID` 或 `https://www.youtube.com/embed/VIDEO_ID?start=23`
  - **Bilibili**: `https://player.bilibili.com/player.html?bvid=BV_ID`（注意：必须使用嵌入链接格式，不是普通视频链接）
    - 从普通链接 `https://www.bilibili.com/video/BV1gt4y1p7vG/` 提取 BV 号（如 `BV1gt4y1p7vG`）
    - 转换为嵌入链接：`https://player.bilibili.com/player.html?bvid=BV1gt4y1p7vG`
  - **本地视频**: `assets/video/your_video.mp4`（支持 mp4, webm, ogg 格式）
  - 如果设置了 video，点击卡片不会跳转，而是显示视频
  
- **`status`**: 项目状态（可选，仅用于记录，不会显示）
  - `in_progress` - 进行中
  - `completed` - 已完成
  - `submitted` - 已投稿
  - `under_review` - 审稿中
  
- **`redirect`**: 外部链接（可选，点击卡片会跳转到此链接）
  - 例如：`https://github.com/your-repo`
  - 如果不设置，会跳转到项目详情页（但 research_projects 默认不生成详情页）
  
- **`github`**: GitHub 仓库链接（可选，会在卡片上显示 GitHub 图标）
  - 例如：`https://github.com/username/repo`

## 图片路径示例

```yaml
# 方式 1: 相对路径（推荐）
img: assets/img/publication_preview/your_image.jpg

# 方式 2: 绝对路径
img: /assets/img/publication_preview/your_image.jpg

# 方式 3: 外部链接
img: https://example.com/image.jpg
```

## 完整示例

下面是一个完整的示例：

```yaml
---
layout: page
title: 基于强化学习的四足机器人运动控制
description: 研究使用深度强化学习算法实现四足机器人的动态步态控制和地形适应能力。
authors: 涂志鑫, 杨硕
img: assets/img/publication_preview/quadruped_robot.jpg
importance: 1
status: in_progress
note: Course project
video: https://www.youtube.com/embed/VIDEO_ID
github: https://github.com/username/quadruped-rl
---
```

### 字段显示顺序：

1. **标题** (`title`) - 粗体，最顶部
2. **作者** (`authors`) - 如果有，显示在标题下方
3. **描述** (`description`) - 斜体，显示在作者或标题下方
4. **状态/备注** (`status`/`note`) - 显示为徽章或文本
5. **按钮** (Video, Code, Website) - 显示在最下方

### 带视频的示例

```yaml
---
layout: page
title: 半人马机器人系统
description: 可穿戴四足机器人系统设计与控制。
img: assets/img/publication_preview/centaur.jpg
importance: 1
status: completed
video: https://www.youtube.com/embed/ReXjl2APDMY?start=23
---
```

**注意**：如果设置了 `video` 字段，点击卡片会展开视频而不是跳转链接。

**注意**：由于 `research_projects` collection 设置为 `output: false`，下面的内容不会显示在主页上，只会显示卡片。如果你需要详细页面，可以改为 `output: true`。

