import { BasicInfo } from '@/components/widgets/display/basic-info.tsx'
import { ExperienceTime } from '@/components/widgets/display/experience-time.tsx'
import { ImageSection } from '@/components/widgets/display/image-section.tsx'
import { TextContent } from '@/components/widgets/display/text-content.tsx'
import { TitleSection } from '@/components/widgets/display/title-section.tsx'
import type { WidgetNode } from '@/components/widgets/widgets-type.d.ts'
import { useWidgetsStore } from '@/store/widgets-store.ts'

const PagePreview = () => {
  const widgets = useWidgetsStore(state => state.widgets)
  const WidgetRenderComponent = (item: WidgetNode) => {
    switch (item.type) {
      case 'BasicInfo':
        return <BasicInfo data={item.data} />
      case 'TitleSection':
        return <TitleSection data={item.data} />
      case 'ExperienceTime':
        return <ExperienceTime data={item.data} />
      case 'TextContent':
        return <TextContent data={item.data} />
      case 'ImageSection':
        return <ImageSection data={item.data} />
    }
  }

  return (
    <div className="mx-auto w-[900px]">
      <div className="print-wrapper">
        {widgets.map(item => (
          <div key={item.id}>{WidgetRenderComponent(item)}</div>
        ))}
      </div>
    </div>
  )
}

export { PagePreview }