(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(8),l=(a(0),a(96)),r={id:"props",title:"Props",description:"Bottom Sheet configurable props.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/props"},i={unversionedId:"props",id:"props",isDocsHomePage:!1,title:"Props",description:"Bottom Sheet configurable props.",source:"@site/docs/props.md",slug:"/props",permalink:"/react-native-bottom-sheet/props",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/master/website/docs/props.md",version:"current",sidebar:"packages",previous:{title:"Usage",permalink:"/react-native-bottom-sheet/usage"},next:{title:"Methods",permalink:"/react-native-bottom-sheet/methods"}},c=[{value:"Configuration",id:"configuration",children:[{value:"<code>index</code>",id:"index",children:[]},{value:"<code>snapPoints</code>",id:"snappoints",children:[]},{value:"<code>overDragResistanceFactor</code>",id:"overdragresistancefactor",children:[]},{value:"<code>enableContentPanningGesture</code>",id:"enablecontentpanninggesture",children:[]},{value:"<code>enableHandlePanningGesture</code>",id:"enablehandlepanninggesture",children:[]},{value:"<code>enableOverDrag</code>",id:"enableoverdrag",children:[]},{value:"<code>enableFlashScrollableIndicatorOnExpand</code>",id:"enableflashscrollableindicatoronexpand",children:[]},{value:"<code>animateOnMount</code>",id:"animateonmount",children:[]},{value:"<code>style</code>",id:"style",children:[]}]},{value:"Layout Configuration",id:"layout-configuration",children:[{value:"<code>handleHeight</code>",id:"handleheight",children:[]},{value:"<code>containerHeight</code>",id:"containerheight",children:[]},{value:"<code>topInset</code>",id:"topinset",children:[]},{value:"<code>bottomInset</code>",id:"bottominset",children:[]}]},{value:"Keyboard Configuration",id:"keyboard-configuration",children:[{value:"<code>keyboardBehavior</code>",id:"keyboardbehavior",children:[]},{value:"<code>keyboardBlurBehavior</code>",id:"keyboardblurbehavior",children:[]}]},{value:"Animation Configuration",id:"animation-configuration",children:[{value:"<code>animationConfigs</code>",id:"animationconfigs",children:[]},{value:"<code>animationDuration</code>",id:"animationduration",children:[]},{value:"<code>animationEasing</code>",id:"animationeasing",children:[]}]},{value:"Gesture Configuration",id:"gesture-configuration",children:[{value:"<code>waitFor</code>",id:"waitfor",children:[]},{value:"<code>simultaneousHandlers</code>",id:"simultaneoushandlers",children:[]},{value:"<code>activeOffsetX</code>",id:"activeoffsetx",children:[]},{value:"<code>activeOffsetY</code>",id:"activeoffsety",children:[]},{value:"<code>failOffsetX</code>",id:"failoffsetx",children:[]},{value:"<code>failOffsetY</code>",id:"failoffsety",children:[]}]},{value:"Animated Nodes",id:"animated-nodes",children:[{value:"<code>animatedIndex</code>",id:"animatedindex",children:[]},{value:"<code>animatedPosition</code>",id:"animatedposition",children:[]}]},{value:"Callbacks",id:"callbacks",children:[{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onAnimate</code>",id:"onanimate",children:[]}]},{value:"Components",id:"components",children:[{value:"<code>handleComponent</code>",id:"handlecomponent",children:[]},{value:"<code>backdropComponent</code>",id:"backdropcomponent",children:[]},{value:"<code>backgroundComponent</code>",id:"backgroundcomponent",children:[]},{value:"<code>children</code>",id:"children",children:[]}]}],o={toc:c};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)("h3",{id:"index"},Object(l.b)("inlineCode",{parentName:"h3"},"index")),Object(l.b)("p",null,"Initial snap index. You also could provide ",Object(l.b)("inlineCode",{parentName:"p"},"-1")," to initiate bottom sheet in closed state."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"snappoints"},Object(l.b)("inlineCode",{parentName:"h3"},"snapPoints")),Object(l.b)("p",null,"Points for the bottom sheet to snap to, ",Object(l.b)("strong",{parentName:"p"},"points should be sorted from bottom to top"),". It accepts array of number, string or mix."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Array<number","|","string>"),Object(l.b)("td",{parentName:"tr",align:null},"YES")))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"String values should be a percentage."))),Object(l.b)("h4",{id:"examples"},"examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"snapPoints={[200, 500]}\nsnapPoints={[200, '50%']}\nsnapPoints={[-1, '100%']}\n")),Object(l.b)("h3",{id:"overdragresistancefactor"},Object(l.b)("inlineCode",{parentName:"h3"},"overDragResistanceFactor")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,"Defines how violently sheet has to stopped while over dragging."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"2.5"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"enablecontentpanninggesture"},Object(l.b)("inlineCode",{parentName:"h3"},"enableContentPanningGesture")),Object(l.b)("p",null,"Enable content panning gesture interaction."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"enablehandlepanninggesture"},Object(l.b)("inlineCode",{parentName:"h3"},"enableHandlePanningGesture")),Object(l.b)("p",null,"Enable handle panning gesture interaction."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"enableoverdrag"},Object(l.b)("inlineCode",{parentName:"h3"},"enableOverDrag")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,"Enable over drag for the sheet."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"enableflashscrollableindicatoronexpand"},Object(l.b)("inlineCode",{parentName:"h3"},"enableFlashScrollableIndicatorOnExpand")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,"Enable flash the scrollable indicator when the sheet is expanded."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"animateonmount"},Object(l.b)("inlineCode",{parentName:"h3"},"animateOnMount")),Object(l.b)("p",null,"This will initially mount the sheet closed and when it's mounted and calculated the layout, it will snap to initial snap point index."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"style"},Object(l.b)("inlineCode",{parentName:"h3"},"style")),Object(l.b)("p",null,"View style to be applied at the sheet container, it also could be an ",Object(l.b)("inlineCode",{parentName:"p"},"AnimatedStyle"),". This is helpful to add shadow to the sheet."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ViewStyle ","|"," AnimatedStyle"),Object(l.b)("td",{parentName:"tr",align:null},"undefined"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h2",{id:"layout-configuration"},"Layout Configuration"),Object(l.b)("h3",{id:"handleheight"},Object(l.b)("inlineCode",{parentName:"h3"},"handleHeight")),Object(l.b)("p",null,"Handle height helps to calculate the internal container and sheet layouts. If ",Object(l.b)("inlineCode",{parentName:"p"},"handleComponent")," is provided, the library internally will calculate its layout, unless ",Object(l.b)("inlineCode",{parentName:"p"},"handleHeight")," is provided too."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"24"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"containerheight"},Object(l.b)("inlineCode",{parentName:"h3"},"containerHeight")),Object(l.b)("p",null,"Container height helps to calculate the internal sheet layouts. If ",Object(l.b)("inlineCode",{parentName:"p"},"containerHeight")," not provided, the library internally will calculate it, however this will cause an extra re-rendering."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"topinset"},Object(l.b)("inlineCode",{parentName:"h3"},"topInset")),Object(l.b)("p",null,"Top inset to be added to the bottom sheet container, usually it comes from ",Object(l.b)("inlineCode",{parentName:"p"},"@react-navigation/stack")," hook ",Object(l.b)("inlineCode",{parentName:"p"},"useHeaderHeight")," or from ",Object(l.b)("inlineCode",{parentName:"p"},"react-native-safe-area-context")," hook ",Object(l.b)("inlineCode",{parentName:"p"},"useSafeArea"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"bottominset"},Object(l.b)("inlineCode",{parentName:"h3"},"bottomInset")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v2, for now."))),Object(l.b)("p",null,"Bottom inset to be added to the bottom sheet container."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h2",{id:"keyboard-configuration"},"Keyboard Configuration"),Object(l.b)("h3",{id:"keyboardbehavior"},Object(l.b)("inlineCode",{parentName:"h3"},"keyboardBehavior")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,"Defines the keyboard appearance behavior."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"none"),": do nothing."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"extend"),": extend the sheet to its maximum snap point."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fullScreen"),": extend the sheet to full screen."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"interactive"),": offset the sheet by the size of the keyboard.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"'none' ","|"," 'extend' ","|"," 'fullScreen' ","|"," 'interactive'"),Object(l.b)("td",{parentName:"tr",align:null},"'none'"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"keyboardblurbehavior"},Object(l.b)("inlineCode",{parentName:"h3"},"keyboardBlurBehavior")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,"Defines the keyboard blur behavior."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"none"),": do nothing."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restore"),": restore sheet position.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"'none' ","|"," 'restore'"),Object(l.b)("td",{parentName:"tr",align:null},"'none'"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h2",{id:"animation-configuration"},"Animation Configuration"),Object(l.b)("h3",{id:"animationconfigs"},Object(l.b)("inlineCode",{parentName:"h3"},"animationConfigs")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,"Animation configs, this could be created by:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"useBottomSheetSpringConfigs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"useBottomSheetTimingConfigs"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"type animationConfigs = (\n  point: number,\n  velocity: number,\n  callback: () => void\n) => number;\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"undefined"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"animationduration"},Object(l.b)("inlineCode",{parentName:"h3"},"animationDuration")),Object(l.b)("p",null,"Snapping animation duration."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"500"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"animationeasing"},Object(l.b)("inlineCode",{parentName:"h3"},"animationEasing")),Object(l.b)("p",null,"Snapping animation easing function."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"EasingFunction")),Object(l.b)("td",{parentName:"tr",align:null},"@TODO"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h2",{id:"gesture-configuration"},"Gesture Configuration"),Object(l.b)("h3",{id:"waitfor"},Object(l.b)("inlineCode",{parentName:"h3"},"waitFor")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/handler-common#waitfor"},"Read about ",Object(l.b)("inlineCode",{parentName:"a"},"waitFor")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"React.Ref ","|"," React.Ref[]"),Object(l.b)("td",{parentName:"tr",align:null},"[]"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"simultaneoushandlers"},Object(l.b)("inlineCode",{parentName:"h3"},"simultaneousHandlers")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/handler-common#simultaneoushandlers"},"Read about ",Object(l.b)("inlineCode",{parentName:"a"},"simultaneousHandlers")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"React.Ref ","|"," React.Ref[]"),Object(l.b)("td",{parentName:"tr",align:null},"[]"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"activeoffsetx"},Object(l.b)("inlineCode",{parentName:"h3"},"activeOffsetX")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/handler-pan#activeoffsetx"},"Read about ",Object(l.b)("inlineCode",{parentName:"a"},"activeOffsetX")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number[]"),Object(l.b)("td",{parentName:"tr",align:null},"undefined"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"activeoffsety"},Object(l.b)("inlineCode",{parentName:"h3"},"activeOffsetY")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/handler-pan#activeoffsety"},"Read about ",Object(l.b)("inlineCode",{parentName:"a"},"activeOffsetY")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number[]"),Object(l.b)("td",{parentName:"tr",align:null},"undefined"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"failoffsetx"},Object(l.b)("inlineCode",{parentName:"h3"},"failOffsetX")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/handler-pan/#failoffsetx"},"Read about ",Object(l.b)("inlineCode",{parentName:"a"},"failOffsetX")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number[]"),Object(l.b)("td",{parentName:"tr",align:null},"undefined"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"failoffsety"},Object(l.b)("inlineCode",{parentName:"h3"},"failOffsetY")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Available only on v3, for now."))),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/handler-pan/#failoffsety"},"Read about ",Object(l.b)("inlineCode",{parentName:"a"},"failOffsetY")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number[]"),Object(l.b)("td",{parentName:"tr",align:null},"undefined"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h2",{id:"animated-nodes"},"Animated Nodes"),Object(l.b)("h3",{id:"animatedindex"},Object(l.b)("inlineCode",{parentName:"h3"},"animatedIndex")),Object(l.b)("p",null,"Animated value to be used as a callback for the index node internally."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AnimatedValue<number",">"),Object(l.b)("td",{parentName:"tr",align:null},"null"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"animatedposition"},Object(l.b)("inlineCode",{parentName:"h3"},"animatedPosition")),Object(l.b)("p",null,"Animated value to be used as a callback for the position node internally."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AnimatedValue<number",">"),Object(l.b)("td",{parentName:"tr",align:null},"null"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h2",{id:"callbacks"},"Callbacks"),Object(l.b)("h3",{id:"onchange"},Object(l.b)("inlineCode",{parentName:"h3"},"onChange")),Object(l.b)("p",null,"Callback when the sheet position changed."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"type onChange = (index: number) => void;\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"null"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"onanimate"},Object(l.b)("inlineCode",{parentName:"h3"},"onAnimate")),Object(l.b)("p",null,"Callback when the sheet about to animate to a new position."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"type onAnimate = (fromIndex: number, toIndex: number) => void;\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"null"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h2",{id:"components"},"Components"),Object(l.b)("h3",{id:"handlecomponent"},Object(l.b)("inlineCode",{parentName:"h3"},"handleComponent")),Object(l.b)("p",null,"Component to be placed as a sheet handle."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"React.FC<BottomSheetHandleProps>")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"BottomSheetHandle")),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"backdropcomponent"},Object(l.b)("inlineCode",{parentName:"h3"},"backdropComponent")),Object(l.b)("p",null,"Component to be placed as a sheet backdrop, by default is set to ",Object(l.b)("inlineCode",{parentName:"p"},"null"),", however the library also provide a default implementation ",Object(l.b)("inlineCode",{parentName:"p"},"BottomSheetBackdrop")," of a backdrop but you will need to provide it manually."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"React.FC<BottomSheetBackgroundProps>")),Object(l.b)("td",{parentName:"tr",align:null},"null"),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"backgroundcomponent"},Object(l.b)("inlineCode",{parentName:"h3"},"backgroundComponent")),Object(l.b)("p",null,"Component to be placed as a sheet background."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"React.FC<BottomSheetBackgroundProps>")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"BottomSheetBackground")),Object(l.b)("td",{parentName:"tr",align:null},"NO")))),Object(l.b)("h3",{id:"children"},Object(l.b)("inlineCode",{parentName:"h3"},"children")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Scrollable")," node or react node to be places as a sheet content."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"() => React.ReactNode ","|"," React.ReactNode[] ","|"," React.ReactNode"),Object(l.b)("td",{parentName:"tr",align:null},"null"),Object(l.b)("td",{parentName:"tr",align:null},"YES")))))}d.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),b=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,u=p["".concat(r,".").concat(O)]||p[O]||m[O]||l;return a?b.a.createElement(u,i(i({ref:t},o),{},{components:a})):b.a.createElement(u,i({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var o=2;o<l;o++)r[o]=a[o];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);