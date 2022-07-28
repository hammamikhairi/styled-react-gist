import React from "react";

interface Props {
    style ?: string
    styleSheetUrl ?: string
    gistId ?: string
    file : string
    gistUrl ?: string
}
/**
* @typedef {object} MyType
* @property {string} aString
* @property {number} aNumber
* @property {Date} aDate
*/

class Gist extends React.PureComponent <Props, any> {
  /** @type {MyType} */
  file ?: string
  id ?: string | undefined
  styleSheetUrl ?: string | undefined
  style ?: string | undefined
  iframeRef ?: any
  constructor(props : Props) {
    super(props)

    this.id = props.gistUrl ? props.gistUrl?.match(/(\.com\/.*\/)([^#]+)/)?.pop() : props.gistId
    this.file = props.file
    // this.file = props.gistUrl?.match(/(#)(.*?)([^#]+)/)?.pop()
    // if (this.file !== props.file && props.file) this.file = props.file
    this.styleSheetUrl = props.styleSheetUrl
    this.style = props.style
  }

  componentDidMount() {
    this.updateIframe()
  }

  componentDidUpdate(_prevProps : any, _prevState : any) {
    this.updateIframe()
  }

  updateIframe() {
    const iframe = this.iframeRef
    let doc = iframe?.document
    if (iframe.contentDocument) doc = iframe.contentDocument
    else if (iframe.contentWindow) doc = iframe.contentWindow.document
    const gistLink = `https://gist.github.com/${this.id}.js${
      this.file ? '?file=' + this.file : ''
    }`
    const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`
    const styles = `<style>${this.style}</style>`
    const elementId = `gist-${this.id}-${this.file}`
    const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`
    const styleSheet = this.styleSheetUrl
      ? `<link rel="stylesheet" href="${this.styleSheetUrl}">`
      : ''
    const iframeHtml = `<html><head><base target="_parent">${styleSheet}${styles}</head><body ${resizeScript}>${gistScript}</body></html>`
    doc.open()
    doc.writeln(iframeHtml)
    doc.close()
  }

  render() {
    return (
      <iframe
        ref={(ref) => {
          this.iframeRef = ref
          console.log(typeof ref)
        }}
        width='100%'
        frameBorder={0}
        id={this.file ? `gist-${this.id}-${this.file}` : `gist-${this.id}`}
      />
    )
  }
}

export default Gist