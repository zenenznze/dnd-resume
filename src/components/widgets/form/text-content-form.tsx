import type { TiptapRef } from '@/components/tiptap/tiptap-editor'
import { TiptapEditor } from '@/components/tiptap/tiptap-editor'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { TextContentData } from '@/components/widgets/widgets-type'
import { UserPen } from 'lucide-react'
import { useRef, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

const TextContentForm = ({
  data,
  onChange,
}: {
  data: TextContentData
  onChange: (value: TextContentData) => void
}) => {
  const { propsData } = data

  const [content, setContent] = useState('')
  const [open, setOpen] = useState<boolean>(false)
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setOpen(true)
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = propsData.content
      setContent(tempDiv.innerHTML)
    } else {
      setOpen(false)
      setContent('')
    }
  }
  const editorRef: TiptapRef = useRef(null)
  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.getHTML()
      onChange({
        ...data,
        propsData: {
          ...propsData,
          content: content.replace(/\s+/g, match => '&nbsp;'.repeat(match.length)),
        },
      })
    }
    handleOpenChange(false)
  }

  return (
    <div>
      {/* 文本内容 */}
      <div>
        <div className="form-label">
          <span>文本内容</span>
        </div>

        {/* 编辑富文本 */}
        <Dialog
          open={open}
          onOpenChange={handleOpenChange}
        >
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full"
            >
              <UserPen />
              编辑内容
            </Button>
          </DialogTrigger>

          <DialogContent
            className="min-w-[800px]"
            onEscapeKeyDown={e => e.preventDefault()}
          >
            <DialogHeader>
              <DialogTitle>文本内容</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            {/* 富文本编辑器 */}
            <div className="h-[320px]">
              <TiptapEditor
                ref={editorRef}
                content={content}
              />
            </div>
            <DialogFooter>
              <Button onClick={handleSave}>保存内容</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export { TextContentForm }
