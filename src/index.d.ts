import { PureComponent } from "react";

export declare interface Props {
  style ?: string
  styleSheetUrl ?: string
  gistId ?: string
  file : string
  gistUrl ?: string
}

declare class Gist extends PureComponent<Props, any> {}

export default Gist;