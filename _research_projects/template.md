---
layout: page
title: 你的研究项目标题
description: 项目描述（会显示在标题下方，斜体）
authors: 作者1, 作者2  # 可选：作者/合作者信息
img: assets/img/publication_preview/your_image.jpg
importance: 1
status: in_progress  # 可选：项目状态（会显示为徽章）
note: 备注信息  # 可选：额外备注（如 "Course project"）
display: false  # 可选：设置为 false 则不显示在主页上
# redirect: https://external-link.com  # 可选：外部链接
# github: https://github.com/username/repo  # 可选：GitHub 链接
# video: https://www.youtube.com/embed/VIDEO_ID  # 可选：视频链接（YouTube/Bilibili embed 链接或本地视频路径）
---

## 字段说明

### 必需字段：
- **`title`**: 项目标题
- **`description`**: 简短描述（显示在卡片上）
- **`importance`**: 排序（数字越小越靠前）

### 可选字段：
- **`img`**: 图片路径
  - `assets/img/your_image.jpg` (相对路径)
  - `/assets/img/your_image.jpg` (绝对路径)
  - `https://example.com/image.jpg` (外部链接)
  
- **`status`**: 状态（仅记录用，不显示）
  - `in_progress` - 进行中
  - `completed` - 已完成
  - `submitted` - 已投稿
  
- **`redirect`**: 点击卡片跳转的外部链接
- **`github`**: GitHub 仓库链接（会显示图标）

## 图片路径示例

```yaml
# 使用项目预览图片（推荐）
img: assets/img/publication_preview/your_image.jpg

# 使用其他位置的图片
img: assets/img/projects/your_image.png

# 使用外部图片
img: https://example.com/image.jpg
```

## 实际示例

```yaml
---
layout: page
title: 半人马机器人系统设计与控制
description: 设计并实现可穿戴四足机器人系统，用于降低人类负重行走的代谢成本。
img: assets/img/publication_preview/centaur_robot.jpg
importance: 1
status: completed
github: https://github.com/username/centaur-robot
---
```

