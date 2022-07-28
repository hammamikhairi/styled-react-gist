import { PureComponent } from "react";

export declare interface Props {
  cssString ?: string
  styleSheetUrl ?: string
  gistId ?: string
  file : string
  gistUrl ?: string
}

declare class Gist extends PureComponent<Props, any> {}

export default Gist;