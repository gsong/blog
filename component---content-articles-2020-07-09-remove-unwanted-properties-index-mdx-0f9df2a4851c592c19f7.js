(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{LZCA:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return N}));t("7N0O"),t("aZfW"),t("T1yd"),t("9D3/"),t("lIT4"),t("DaAx");var n=t("Im8V"),c=t("rrKU"),o=t("7oih"),s=t("nndF"),r=t("473U");function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var b={},m={_frontmatter:b},l=function(e){var a=e.children,t=function(e,a){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["children"]),n=t.pageContext.frontmatter,p=n.date,b=n.title,m=new Date(p).toLocaleDateString(void 0,{dateStyle:"long"});return Object(r.b)(o.a,t,Object(r.b)("article",null,Object(r.b)("h1",null,b),Object(r.b)("p",{css:Object(c.a)({fontSize:s.a.base,marginBottom:s.c[8]})},m),a))};function N(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["components"]);return Object(n.b)(l,p({},m,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Use Case"),Object(n.b)("p",null,"You have a JavaScript object that you got from somewhere (e.g. retrieved from\nAPI):"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," restaurant ",Object(n.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  name",Object(n.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",p({parentName:"code"},{className:"token string"}),'"Nong\'s Khao Man Gai"'),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n  address",Object(n.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",p({parentName:"code"},{className:"token string"}),'"609 SE Ankeny St"'),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n  phone",Object(n.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",p({parentName:"code"},{className:"token string"}),'"503-740-2907"'),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n  secretKeyLocation",Object(n.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",p({parentName:"code"},{className:"token string"}),'"somewhere"'),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"However, you want to remove ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"secretKeyLocation")," before passing the object onto\nthe next part of the workflow."),Object(n.b)("h2",null,"Solution: Destructure/Rest Syntax"),Object(n.b)("p",null,"The combination of ",Object(n.b)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring"}),"object destructuring")," and ",Object(n.b)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals"}),"object literal\nspread/rest syntax")," to the rescue ⛑."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{")," secretKeyLocation",Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",p({parentName:"code"},{className:"token operator"}),"..."),"rest ",Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," restaurant",Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",p({parentName:"code"},{className:"token function"}),"doSomethingWith"),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"rest",Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"With this, you now have three variables:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"secretKeyLocation")," with the value of ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),'"somewhere"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"rest"),", a new object with the ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"secretKeyLocation")," property removed:"),Object(n.b)("div",p({parentName:"li"},{className:"gatsby-highlight","data-language":"js"}),Object(n.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  name",Object(n.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",p({parentName:"code"},{className:"token string"}),'"Nong\'s Khao Man Gai"'),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n  address",Object(n.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",p({parentName:"code"},{className:"token string"}),'"609 SE Ankeny St"'),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n  phone",Object(n.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",p({parentName:"code"},{className:"token string"}),'"503-740-2907"'),Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"restaurant"),", which is untouched and retains its original value. Immutability\nFTW 🙌!"))))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-articles-2020-07-09-remove-unwanted-properties-index-mdx-0f9df2a4851c592c19f7.js.map