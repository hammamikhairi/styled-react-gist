import React from "react";

interface Props {
    cssString ?: string
    styleSheetUrl ?: string
    gistId ?: string
    file : string
    gistUrl ?: string
}

class Gist extends React.PureComponent <Props, any> {
  file ?: string
  id ?: string | undefined
  styleSheetUrl ?: string | undefined
  cssString ?: string | undefined
  iframeRef ?: any
  rand ?: number
  constructor(props : Props) {
    super(props)
    if (props.gistId === undefined && props.gistUrl === undefined) throw new Error('Either gistId or gistUrl must be specified')
    this.rand = Math.random();
    this.id = props.gistUrl ? props.gistUrl?.match(/(\.com\/.*\/)([^#]+)/)?.pop() : props.gistId
    this.file = props.file
    this.styleSheetUrl = props.styleSheetUrl
    this.cssString = props.cssString
  }

  componentDidMount() {
    this.updateIframe()
  }

  componentDidUpdate() {
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
    const styles = `<style>${this.cssString}</style>`
    const elementId = `gist-${this.id}-${this.file}-${this.rand}`
    const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height= (document.body.scrollHeight + 15) + 'px'"`
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
        }}
        width='100%'
        frameBorder={0}
        id={ `gist-${this.id}-${this.file}-${this.rand}`}
      />
    )
  }
}

export default Gist