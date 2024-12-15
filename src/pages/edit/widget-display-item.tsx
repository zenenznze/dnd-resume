import { Button } from '@/components/ui/button.tsx'
import { BasicInfo } from '@/components/widgets/display/basic-info.tsx'
import { ExperienceTime } from '@/components/widgets/display/experience-time.tsx'
import { ImageSection } from '@/components/widgets/display/image-section.tsx'
import { TextContent } from '@/components/widgets/display/text-content.tsx'
import { TitleSection } from '@/components/widgets/display/title-section.tsx'
import type { WidgetNode } from '@/components/widgets/widgets-type.d.ts'
import { useWidgetsStore } from '@/store/widgets-store.ts'
import { clsx } from 'clsx'
import { Reorder } from 'motion/react'
import type { MouseEvent } from 'react'
import { useState } from 'react'

interface ReorderItemProps {
  item: WidgetNode
  ref: (el: HTMLDivElement) => void
}

function WidgetDisplayItem({ item, ref }: ReorderItemProps) {
  const setSelectedId = useWidgetsStore(state => state.setSelectedId)
  const selectedId = useWidgetsStore(state => state.selectedId)
  const selectedCls = selectedId === item.id ? 'shadow-[0_4px_12px_2px_rgba(223,84,74,0.6)]' : ''

  // remove widget
  const [isMouseEnter, setIsMouseEnter] = useState(false)
  const removeWidget = useWidgetsStore(state => state.removeWidget)
  const handleClickRemove = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    removeWidget(item.id)
  }

  const WidgetRenderComponent = () => {
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
    <Reorder.Item
      value={item}
      whileHover={{ boxShadow: '0px 4px 12px 2px rgba(219,99,39,0.6)' }}
      whileDrag={{ scale: 1.02, zIndex: 10 }}
      className="relative bg-white"
    >
      <div
        className={clsx('relative cursor-move', selectedCls)}
        ref={ref}
        onClick={() => setSelectedId(item.id)}
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      >
        {WidgetRenderComponent()}

        {isMouseEnter && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-1 top-1 h-7 w-7"
            onClick={handleClickRemove}
          >
            <div className="iconify text-lg ri--delete-bin-line"></div>
          </Button>
        )}
      </div>
    </Reorder.Item>
  )
}

export { WidgetDisplayItem }