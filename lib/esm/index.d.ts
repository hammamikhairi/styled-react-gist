import React from "react";
interface Props {
    style?: string;
    styleSheetUrl?: string;
    gistId?: string;
    file: string;
    gistUrl?: string;
}
/**
* @typedef {object} MyType
* @property {string} aString
* @property {number} aNumber
* @property {Date} aDate
*/
declare class Gist extends React.PureComponent<Props, any> {
    /** @type {MyType} */
    file?: string;
    id?: string | undefined;
    styleSheetUrl?: string | undefined;
    style?: string | undefined;
    iframeRef?: any;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(_prevProps: any, _prevState: any): void;
    updateIframe(): void;
    render(): JSX.Element;
}
export default Gist;
