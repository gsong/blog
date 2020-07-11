(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+bhB":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return j}));var n=t("5RSi"),c=t("P53a"),o=(t("DaAx"),t("Im8V")),b=t("mc/u"),s=t("ipew"),r=t("yb9u"),p=(t("473U"),{}),l={_frontmatter:p},m=b.a;function j(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Do you automatically reach for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://momentjs.com"}),"Moment.js")," when you need to format dates? Or\nperhaps you prefer ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://date-fns.org"}),"date-fns"),"? But if you have basic formatting needs, don’t\ndiscount the built-in JavaScript tools."),Object(o.b)("h2",null,"Use Case"),Object(o.b)("p",null,"I’m displaying a date with each article on this site. The source of the date is\nan ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO date string"),", which looks like ",Object(o.b)(r.ISODate,{mdxType:"ISODate"}),". This is a typical\nformat you’ll receive as part of an API response, for example."),Object(o.b)("p",null,"While the ISO format is explicit and great for cross-boundary data exchange,\nit’s not display-friendly. Let’s show a localized date string instead."),Object(o.b)(r.LocaleDate,{mdxType:"LocaleDate"}),Object(o.b)("h2",null,"Solution"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#Timestamp_string"}),"Parse the ISO date string")),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"gatsby-highlight has-highlighted-lines","data-language":"js"}),Object(o.b)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," isoDateString ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"2020-07-10T14:16:40.463Z"'),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"gatsby-highlight-code-line"}),Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"token keyword"}),"const")," date ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"token keyword"}),"new")," ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"token class-name"}),"Date"),Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),"isoDateString",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language"}),"Get the browser locale")),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"gatsby-highlight","data-language":"js"}),Object(o.b)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," locale ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"typeof")," window ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"===")," ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"undefined"')," ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"?")," ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"en"')," ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," navigator",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),"language",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";")))),Object(o.b)("p",{parentName:"li"},"If we’re not in a browser environment (",Object(o.b)("code",Object(n.a)({parentName:"p"},{className:"language-text"}),'window === "undefined"'),"), default to\nEnglish.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"}),"Format the date")),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"gatsby-highlight","data-language":"js"}),Object(o.b)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," formattedDate ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," date",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"toLocaleDateString"),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),"locale",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  year",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"numeric"'),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  month",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"long"'),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  day",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"numeric"'),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(o.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";")))),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#Parameters"}),"See the ",Object(o.b)("code",Object(n.a)({parentName:"a"},{className:"language-text"}),"Intl.DateTimeFormat()")," constructor")," for details on the\nparameters."))),Object(o.b)("p",null,"It’s a bit more code than using one of the libraries, but your users will thank\nyou for the smaller bundle size."),Object(o.b)("p",null,"OK, they probably won’t—but you’ll have the satisfaction of knowing you’ve done\nyour part to improve their experience."),Object(o.b)("h2",null,"Try It Out for Yourself"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://codesandbox.io/s/tolocaledatestring-mn3ug"}),"Play with the live code at CodeSandbox"),"."),Object(o.b)(s.a,{sandbox:"tolocaledatestring-mn3ug",title:"demo of toLocaleDateString",style:{height:"min(30vh, 200px)"},mdxType:"CodeSandbox"}))}j.isMDXComponent=!0},"mc/u":function(e,a,t){"use strict";var n=t("rrKU"),c=t("P53a"),o=(t("DaAx"),t("7oih")),b=t("Al62"),s=t("InJ6"),r=t("473U");a.a=function(e){var a=e.children,t=Object(c.a)(e,["children"]),p=t.pageContext.frontmatter,l=p.date,m=p.title,j=Object(b.b)(l);return Object(r.b)(o.a,t,Object(r.b)("article",null,Object(r.b)("h1",{css:Object(n.a)({color:s.c.magenta})},m),Object(r.b)("p",{css:Object(n.a)({color:s.c.gray[0],fontSize:s.d.sm})},j),a))}}}]);
//# sourceMappingURL=component---content-articles-to-locale-date-string-index-mdx-15ac3159b3419ae7fff2.js.map