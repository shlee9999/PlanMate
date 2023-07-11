import { convertFromRaw, convertToRaw, EditorState, RawDraftContentState } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'

const options = {
  blockStyleFn: (block: any) => {
    const type = block.getType()
    console.log(type)
    if (type === 'block-type') {
      return {
        style: {
          fontSize: '16px',
          color: 'red',
        },
      }
    }
  },
  inlineStyleFn: (styles: any) => {
    const styleList: { [key: string]: string } = { color: 'color-', fontSize: 'fontsize-' }
    const styleObject: any = {}
    let isContainsKey = false

    Object.keys(styleList).forEach((key) => {
      styles.forEach((value: any) => {
        if (value.startsWith(styleList[key])) {
          isContainsKey = true
          styleObject[key] = value.replace(styleList[key], '')
          switch (key) {
            case 'fontSize':
              styleObject[key] += 'px'
              break
          }
        }
      })
    })

    if (isContainsKey) {
      return {
        element: 'span',
        style: styleObject,
      }
    }
  },
}

export const deserializeContent = (jsonString: string): string => {
  const rawContent = JSON.parse(jsonString)
  const contentState = convertFromRaw(rawContent)
  return stateToHTML(contentState, options)
}

export const serializeContent = (editorState: EditorState) => {
  const rawContent = convertToRaw(editorState.getCurrentContent())
  const jsonString = JSON.stringify(rawContent)
  return jsonString
}
