import { convertToRaw, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'

export const deserializeContent = (jsonString: string): string => {
  try {
    console.log(jsonString)
    const rawContent = JSON.parse(jsonString)

    return draftToHtml(rawContent)
  } catch (e) {
    return '<p>' + jsonString + '</p>'
  }
}

export const serializeContent = (editorState: EditorState) => {
  const rawContent = convertToRaw(editorState.getCurrentContent())
  const jsonString = JSON.stringify(rawContent)
  return jsonString
}
