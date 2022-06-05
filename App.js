var $9WItx$reactjsxruntime = require("react/jsx-runtime");
var $9WItx$reactdomclient = require("react-dom/client");
require("react");
var $9WItx$reactrouterdom = require("react-router-dom");






const $7fbf18b631ed0349$var$Home = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "home-container",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                className: "banner-image",
                src: "https://i.ibb.co/pnYLC8f/dogs-Running.jpg",
                alt: "two brown and white dogs running on dirt road"
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                children: "Home Section"
            })
        ]
    });
};
var $7fbf18b631ed0349$export$2e2bcd8739ae039 = $7fbf18b631ed0349$var$Home;




const $ab23a8823c8b40ba$var$Header = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("nav", {
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Link), {
                to: "/",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    src: "https://i.ibb.co/CnYh8YW/light-Mode-Logo.png",
                    alt: ""
                })
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                children: "Light/Dark Mode"
            })
        ]
    });
};
var $ab23a8823c8b40ba$export$2e2bcd8739ae039 = $ab23a8823c8b40ba$var$Header;


const $da11a1101b2a894a$var$App = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactrouterdom.BrowserRouter), {
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $ab23a8823c8b40ba$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Routes), {
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Route), {
                    path: "/",
                    element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $7fbf18b631ed0349$export$2e2bcd8739ae039), {})
                })
            })
        ]
    });
};
const $da11a1101b2a894a$var$root = (0, $9WItx$reactdomclient.createRoot)(document.getElementById("root"));
$da11a1101b2a894a$var$root.render(/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)($da11a1101b2a894a$var$App, {}));


//# sourceMappingURL=App.js.map
