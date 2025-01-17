import type {
  LinkItemData,
  WidgetMaterial,
  WidgetNode,
  WidgetType,
} from '@/components/widgets/widgets-type.d.ts'
import { CalendarRange, Heading, Image, Type, User } from 'lucide-react'

export const widgetMaterialList: WidgetMaterial[] = [
  {
    type: 'BasicInfo',
    icon: <User className="icon-size" />,
    title: '基本信息',
  },
  {
    type: 'TitleSection',
    icon: <Heading className="icon-size" />,
    title: '标题',
  },
  {
    type: 'ExperienceTime',
    icon: <CalendarRange className="icon-size" />,
    title: '经历',
  },
  {
    type: 'TextContent',
    icon: <Type className="icon-size" />,
    title: '文本',
  },
  {
    type: 'ImageSection',
    icon: <Image className="icon-size" />,
    title: '图片',
  },
]

export const widgetMaterialMap: { [type: string]: WidgetMaterial } = {}
for (const widgetInfo of widgetMaterialList) {
  widgetMaterialMap[widgetInfo.type] = widgetInfo
}

export function generateWidgetId(): string {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
}

export function createWidgetsNode(type: WidgetType): WidgetNode {
  const id = generateWidgetId()
  switch (type) {
    case 'BasicInfo':
      return {
        type: 'BasicInfo',
        id,
        data: {
          propsData: {
            avatarUrl: '/avatar.jpg',
            avatarSize: 86,
            avatarRound: true,
            name: '炭治郎',
            jobTitle: '前端开发工程师',
            linksGroup: [
              [
                {
                  href: '',
                  content: '2050/01',
                  icon: 'cake',
                },
                {
                  href: '',
                  content: '15123456789',
                  icon: 'phone',
                },
              ],
              [
                {
                  href: 'https://github.com/',
                  content: 'github.com',
                  icon: 'github',
                },
                {
                  href: 'mailto:tanjiro@gmail.com',
                  content: 'tanjiro@gmail.com',
                  icon: 'gmail',
                },
              ],
              [],
            ],
          },
          styleData: {
            marginTop: 0,
            marginBottom: 0,
          },
        },
      }
    case 'TitleSection':
      return {
        type: 'TitleSection',
        id,
        data: {
          propsData: {
            title: '工作经历',
          },
          styleData: {
            marginTop: 20,
            marginBottom: 12,
          },
        },
      }
    case 'ExperienceTime':
      return {
        type: 'ExperienceTime',
        id,
        data: {
          propsData: {
            title: 'XX有限公司',
            dateRange: '2077/07 - 2080/07',
          },
          styleData: {
            marginTop: 0,
            marginBottom: 0,
          },
        },
      }
    case 'TextContent':
      return {
        type: 'TextContent',
        id,
        data: {
          propsData: {
            content:
              '<h3>XX项目 - Web 前端开发</h3><ul><li><p>负责从需求分析到前端架构设计、功能开发及性能优化的全流程开发工作。</p></li><li><p>坚持与产品、设计、后端团队紧密协作，推动敏捷开发流程和 CI/CD 工具链的落地，确保高质量的交付。</p></li><li><p>通过深入研究用户体验和前端性能，成功优化支付流程页面，提升了用户转化率和支付成功率。</p></li></ul>',
          },
          styleData: {
            marginTop: 0,
            marginBottom: 0,
          },
        },
      }
    case 'ImageSection':
      return {
        type: 'ImageSection',
        id,
        data: {
          propsData: {
            url: '/image.png',
            imageSize: 100,
            borderRadius: 0,
          },
          styleData: {
            marginTop: 10,
            marginBottom: 10,
          },
        },
      }
    default: {
      const exhaustiveCheck: never = type
      return exhaustiveCheck
    }
  }
}

export const createLinkItem: () => LinkItemData = () => {
  return {
    href: 'https://github.com/',
    content: 'github.com',
    icon: 'link',
  }
}

export const createDefaultWidgets: () => WidgetNode[] = () => {
  return [
    {
      type: 'BasicInfo',
      id: 'm5nh7g2t_c08t',
      data: {
        propsData: {
          avatarUrl: '/avatar.jpg',
          avatarSize: 86,
          avatarRound: true,
          name: '炭治郎',
          jobTitle: '前端开发工程师',
          linksGroup: [
            [
              { href: '', content: '2050/01', icon: 'cake' },
              { href: '', content: '15123456789', icon: 'phone' },
            ],
            [
              { href: 'https://github.com/', content: 'github.com', icon: 'github' },
              {
                href: 'mailto:tanjiro@gmail.com',
                content: 'tanjiro@gmail.com',
                icon: 'gmail',
              },
            ],
            [],
          ],
        },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
    {
      type: 'TitleSection',
      id: 'm5nhbbzu_29xe',
      data: { propsData: { title: ' 专业技能' }, styleData: { marginTop: 20, marginBottom: 12 } },
    },
    {
      type: 'TextContent',
      id: 'm5nhe7a6_uswu',
      data: {
        propsData: {
          content:
            '<ul><li><p>熟练掌握 <code>JavaScript</code>、<code>TypeScript</code> 语言；</p></li><li><p>熟练使用 <code>Vue</code>、<code>React</code> 开发前端应用，并掌握其基本原理；</p></li><li><p>熟练使用 <code>Vite</code>、<code>Webpack</code> 等打包工具构建应用；</p></li><li><p>熟练使用 <code>NodeJS</code>、<code>MySQL</code>、<code>Redis</code> 等技术开发后端应用；</p></li></ul>',
        },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
    {
      type: 'TitleSection',
      id: 'm5nh7g2t_m1ad',
      data: { propsData: { title: '工作经历' }, styleData: { marginTop: 20, marginBottom: 12 } },
    },
    {
      type: 'ExperienceTime',
      id: 'm5nh7g2t_xcji',
      data: {
        propsData: { title: 'XX有限公司', dateRange: '2077/07 - 2080/07' },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
    {
      type: 'TextContent',
      id: 'm5nh7g2t_xhk3',
      data: {
        propsData: {
          content:
            '<h3>XX项目 - Web 前端开发</h3><ul><li><p>负责从需求分析到前端架构设计、功能开发及性能优化的全流程开发工作。</p></li><li><p>坚持与产品、设计、后端团队紧密协作，推动敏捷开发流程和 CI/CD 工具链的落地，确保高质量的交付。</p></li><li><p>通过深入研究用户体验和前端性能，成功优化支付流程页面，提升了用户转化率和支付成功率。</p></li></ul>',
        },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
    {
      type: 'TitleSection',
      id: 'm5nhamir_1miv',
      data: { propsData: { title: '教育经历' }, styleData: { marginTop: 20, marginBottom: 12 } },
    },
    {
      type: 'ExperienceTime',
      id: 'm5nhboq6_hees',
      data: {
        propsData: { title: 'XX大学 - 软件工程', dateRange: '2073/07 - 2077/07' },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
  ]
}

// config or pdf file basename (without extname)
export function getBasename(widgets: WidgetNode[]) {
  const basicInfo = widgets.find(item => item.type === 'BasicInfo')
  if (basicInfo) {
    const { name, jobTitle } = basicInfo.data.propsData
    return `${name} - ${jobTitle}`
  }
  return ''
}