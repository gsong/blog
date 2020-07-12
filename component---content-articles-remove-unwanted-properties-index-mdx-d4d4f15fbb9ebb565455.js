(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"mc/u":function(e,a,t){"use strict";var n=t("rrKU"),c=t("P53a"),s=(t("DaAx"),t("7oih")),b=t("Al62"),p=t("InJ6"),r=t("473U");a.a=function(e){var a=e.children,t=Object(c.a)(e,["children"]),o=t.pageContext.frontmatter,m=o.date,j=o.title,O=Object(b.d)(m);return Object(r.b)(s.a,t,Object(r.b)("article",null,Object(r.b)("h1",{css:Object(n.a)({color:p.b.magenta})},j),Object(r.b)("p",{css:Object(n.a)({color:p.b.gray[0],fontSize:p.c.sm})},O),a))}},qtcI:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return m}));var n=t("5RSi"),c=t("P53a"),s=(t("DaAx"),t("Im8V")),b=t("mc/u"),p=(t("473U"),{}),r={_frontmatter:p},o=b.a;function m(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(s.b)(o,Object(n.a)({},r,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h2",null,"Use Case"),Object(s.b)("p",null,"You have a JavaScript object that you got from somewhere (e.g. retrieved from\nAPI):"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",Object(n.a)({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-js line-numbers"}),Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," restaurant ",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  name",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Nong\'s Khao Man Gai"'),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  address",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"609 SE Ankeny St"'),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  phone",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"503-740-2907"'),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  secretKeyLocation",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"somewhere"'),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";")),Object(s.b)("span",Object(n.a)({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(s.b)("span",{parentName:"span"}),Object(s.b)("span",{parentName:"span"}),Object(s.b)("span",{parentName:"span"}),Object(s.b)("span",{parentName:"span"}),Object(s.b)("span",{parentName:"span"}),Object(s.b)("span",{parentName:"span"})))),Object(s.b)("p",null,"You want to remove ",Object(s.b)("code",Object(n.a)({parentName:"p"},{className:"language-text"}),"secretKeyLocation")," before passing the object onto the next\npart of the workflow."),Object(s.b)("h2",null,"Solution: Destructure/Rest Syntax"),Object(s.b)("p",null,"The combination of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring"}),"object destructuring")," and ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals"}),"object literal\nspread/rest syntax")," to the rescue ⛑."),Object(s.b)("div",{className:"gatsby-highlight has-highlighted-lines","data-language":"js"},Object(s.b)("pre",Object(n.a)({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-js line-numbers"}),Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"gatsby-highlight-code-line"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"token keyword"}),"const")," ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{")," secretKeyLocation",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"..."),"rest ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}")," ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," restaurant",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"doSomethingWith"),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),"rest",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";")),Object(s.b)("span",Object(n.a)({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(s.b)("span",{parentName:"span"}),Object(s.b)("span",{parentName:"span"})))),Object(s.b)("p",null,"With this, you now have three variables:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"p"},{className:"language-text"}),"secretKeyLocation")," with the value of ",Object(s.b)("code",Object(n.a)({parentName:"p"},{className:"language-text"}),'"somewhere"'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"p"},{className:"language-text"}),"rest"),", a new object with the ",Object(s.b)("code",Object(n.a)({parentName:"p"},{className:"language-text"}),"secretKeyLocation")," property removed:"),Object(s.b)("div",Object(n.a)({parentName:"li"},{className:"gatsby-highlight","data-language":"js"}),Object(s.b)("pre",Object(n.a)({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-js line-numbers"}),Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  name",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Nong\'s Khao Man Gai"'),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  address",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"609 SE Ankeny St"'),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  phone",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"503-740-2907"'),Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(s.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")),Object(s.b)("span",Object(n.a)({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(s.b)("span",{parentName:"span"}),Object(s.b)("span",{parentName:"span"}),Object(s.b)("span",{parentName:"span"}),Object(s.b)("span",{parentName:"span"}),Object(s.b)("span",{parentName:"span"})))),Object(s.b)("p",{parentName:"li"},"It’s worth noting that ",Object(s.b)("code",Object(n.a)({parentName:"p"},{className:"language-text"}),"rest")," can be whatever variable name you want, there’s\nnothing special about the name ",Object(s.b)("code",Object(n.a)({parentName:"p"},{className:"language-text"}),"rest"),".")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"p"},{className:"language-text"}),"restaurant")," remains untouched and retains its original value. Immutability\nFTW 🙌!"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-articles-remove-unwanted-properties-index-mdx-d4d4f15fbb9ebb565455.js.map