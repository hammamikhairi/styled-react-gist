"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
/**
* @typedef {object} MyType
* @property {string} aString
* @property {number} aNumber
* @property {Date} aDate
*/
var Gist = /** @class */ (function (_super) {
    __extends(Gist, _super);
    function Gist(props) {
        var _this = this;
        var _a, _b;
        _this = _super.call(this, props) || this;
        _this.id = props.gistUrl ? (_b = (_a = props.gistUrl) === null || _a === void 0 ? void 0 : _a.match(/(\.com\/.*\/)([^#]+)/)) === null || _b === void 0 ? void 0 : _b.pop() : props.gistId;
        _this.file = props.file;
        // this.file = props.gistUrl?.match(/(#)(.*?)([^#]+)/)?.pop()
        // if (this.file !== props.file && props.file) this.file = props.file
        _this.styleSheetUrl = props.styleSheetUrl;
        _this.style = props.style;
        return _this;
    }
    Gist.prototype.componentDidMount = function () {
        this.updateIframe();
    };
    Gist.prototype.componentDidUpdate = function (_prevProps, _prevState) {
        this.updateIframe();
    };
    Gist.prototype.updateIframe = function () {
        var iframe = this.iframeRef;
        var doc = iframe === null || iframe === void 0 ? void 0 : iframe.document;
        if (iframe.contentDocument)
            doc = iframe.contentDocument;
        else if (iframe.contentWindow)
            doc = iframe.contentWindow.document;
        var gistLink = "https://gist.github.com/".concat(this.id, ".js").concat(this.file ? '?file=' + this.file : '');
        var gistScript = "<script type=\"text/javascript\" src=\"".concat(gistLink, "\"></script>");
        var styles = "<style>".concat(this.style, "</style>");
        var elementId = "gist-".concat(this.id, "-").concat(this.file);
        var resizeScript = "onload=\"parent.document.getElementById('".concat(elementId, "').style.height=document.body.scrollHeight + 'px'\"");
        var styleSheet = this.styleSheetUrl
            ? "<link rel=\"stylesheet\" href=\"".concat(this.styleSheetUrl, "\">")
            : '';
        var iframeHtml = "<html><head><base target=\"_parent\">".concat(styleSheet).concat(styles, "</head><body ").concat(resizeScript, ">").concat(gistScript, "</body></html>");
        doc.open();
        doc.writeln(iframeHtml);
        doc.close();
    };
    Gist.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("iframe", { ref: function (ref) {
                _this.iframeRef = ref;
                console.log(typeof ref);
            }, width: '100%', frameBorder: 0, id: this.file ? "gist-".concat(this.id, "-").concat(this.file) : "gist-".concat(this.id) }));
    };
    return Gist;
}(react_1.default.PureComponent));
exports.default = Gist;
