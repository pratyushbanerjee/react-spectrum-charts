"use strict";(self.webpackChunk_adobe_react_spectrum_charts=self.webpackChunk_adobe_react_spectrum_charts||[]).push([[949],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/stories/storyUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>formatTimestamp});const formatTimestamp=timestamp=>{const date=new Date(timestamp);return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][date.getMonth()]} ${date.getDate()}`}},"./src/test-utils/bindWithProps.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function bindWithProps(template){return template.bind({})}__webpack_require__.d(__webpack_exports__,{O:()=>bindWithProps})},"./src/test-utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OK:()=>bindWithProps.O,Dx:()=>manipulateData});var react_esm=__webpack_require__("./node_modules/@testing-library/react/dist/@testing-library/react.esm.js");const[queryMarksByGroupName,getAllMarksByGroupName,getMarksByGroupName,findAllMarksByGroupName,findMarksByGroupName]=(0,react_esm.H5)(((container,markName,tagName="path")=>[...container.querySelectorAll(`g.${markName} > ${tagName}`)]),((_c,markName)=>`Found multiple marks under the group name ${markName}`),((_c,markName)=>`Unable to find any marks under the group name ${markName}`)),[queryLegendEntries,getAllLegendEntries,getLegendEntries,findAllLegendEntries,findLegendEntries]=(0,react_esm.H5)((container=>[...container.querySelectorAll("g.role-legend-entry g.role-scope > g > path.foreground")]),(()=>"Found multiple legend entries"),(()=>"Unable to find any legend entries")),[queryLegendSymbols,getAllLegendSymbols,getLegendSymbols,findAllLegendSymbols,findLegendSymbols]=(0,react_esm.H5)((container=>[...container.querySelectorAll("g.role-legend-entry g.role-legend-symbol > path")]),(()=>"Found multiple legend symbols"),(()=>"Unable to find any legend symbols")),[queryAxisLabels,getAllAxisLabels,getAxisLabels,findAllAxisLabels,findAxisLabels]=(0,react_esm.H5)((container=>[...container.querySelectorAll("g.role-axis-label > text")]),(()=>"Found multiple legend entries"),(()=>"Unable to find any legend entries"));__webpack_require__("./node_modules/@testing-library/user-event/dist/esm/index.js");const manipulateData=data=>{const result=data*(Math.random()*(1.15-.85)+.85);return Math.round(result)};__webpack_require__("./src/constants.ts"),__webpack_require__("./node_modules/react/jsx-runtime.js");var bindWithProps=__webpack_require__("./src/test-utils/bindWithProps.tsx")},"./src/stories/components/Line/Line.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,HistoricalCompare:()=>HistoricalCompare,LineType:()=>LineType,LineWithAxisAndLegend:()=>LineWithAxisAndLegend,LinearTrendScale:()=>LinearTrendScale,Opacity:()=>Opacity,SingleLine:()=>SingleLine,Tooltip:()=>Tooltip,TrendScale:()=>TrendScale,WithStaticPoints:()=>WithStaticPoints,WithStaticPointsAndDialogs:()=>WithStaticPointsAndDialogs,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_ReferenceLine__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ReferenceLine/index.ts"),_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useChartProps.tsx"),_rsc__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/index.ts"),_stories_data_data__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/data/data.ts"),_stories_storyUtils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/stories/storyUtils.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_test_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/test-utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"RSC/Line",component:_rsc__WEBPACK_IMPORTED_MODULE_3__.N1},historicalCompareData=[{datetime:16678908e5,users:147,series:"Add Fallout",period:"Last month"},{datetime:16678908e5,users:477,series:"Add Fallout",period:"Current"},{datetime:16679772e5,users:148,series:"Add Fallout",period:"Last month"},{datetime:16679772e5,users:481,series:"Add Fallout",period:"Current"},{datetime:16680636e5,users:148,series:"Add Fallout",period:"Last month"},{datetime:16680636e5,users:483,series:"Add Fallout",period:"Current"},{datetime:166815e7,users:131,series:"Add Fallout",period:"Last month"},{datetime:166815e7,users:310,series:"Add Fallout",period:"Current"},{datetime:16682364e5,users:11,series:"Add Fallout",period:"Last month"},{datetime:16682364e5,users:18,series:"Add Fallout",period:"Current"},{datetime:16683228e5,users:17,series:"Add Fallout",period:"Last month"},{datetime:16683228e5,users:70,series:"Add Fallout",period:"Current"},{datetime:16684092e5,users:143,series:"Add Fallout",period:"Last month"},{datetime:16684092e5,users:438,series:"Add Fallout",period:"Current"},{datetime:16678908e5,users:1525,series:"Add Freeform table",period:"Last month"},{datetime:16678908e5,users:5253,series:"Add Freeform table",period:"Current"},{datetime:16679772e5,users:1510,series:"Add Freeform table",period:"Last month"},{datetime:16679772e5,users:5103,series:"Add Freeform table",period:"Current"},{datetime:16680636e5,users:1504,series:"Add Freeform table",period:"Last month"},{datetime:16680636e5,users:5047,series:"Add Freeform table",period:"Current"},{datetime:166815e7,users:1338,series:"Add Freeform table",period:"Last month"},{datetime:166815e7,users:3386,series:"Add Freeform table",period:"Current"},{datetime:16682364e5,users:120,series:"Add Freeform table",period:"Last month"},{datetime:16682364e5,users:205,series:"Add Freeform table",period:"Current"},{datetime:16683228e5,users:179,series:"Add Freeform table",period:"Last month"},{datetime:16683228e5,users:790,series:"Add Freeform table",period:"Current"},{datetime:16684092e5,users:1491,series:"Add Freeform table",period:"Last month"},{datetime:16684092e5,users:4913,series:"Add Freeform table",period:"Current"}],defaultChartProps={data:_stories_data_data__WEBPACK_IMPORTED_MODULE_4__.U_,minWidth:400,maxWidth:800,height:400},singleLineChartProps={data:_stories_data_data__WEBPACK_IMPORTED_MODULE_4__.vL,minWidth:400,maxWidth:800,height:40},BasicLineStory=args=>{const chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_2__.A)(defaultChartProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_3__.t1,{...chartProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.N1,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.s$,{lineWidth:{value:0}})]})},LineWithVisiblePointsStory=args=>{const chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_2__.A)({...defaultChartProps,data:_stories_data_data__WEBPACK_IMPORTED_MODULE_4__.VR});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_3__.t1,{...chartProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__._0,{position:"left",grid:!0,title:"Users"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__._0,{position:"bottom",labelFormat:"time",baseline:!0,ticks:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.N1,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.s$,{highlight:!0})]})},Basic=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)(BasicLineStory);Basic.args={color:"series",dimension:"datetime",metric:"value",name:"line0",scaleType:"time"};const LineWithAxisAndLegend=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)((args=>{const chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_2__.A)(defaultChartProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_3__.t1,{...chartProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__._0,{position:"left",grid:!0,title:"Users"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__._0,{position:"bottom",labelFormat:"time",baseline:!0,ticks:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.N1,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.s$,{highlight:!0})]})}));LineWithAxisAndLegend.args={color:"series",dimension:"datetime",metric:"users",name:"line0",scaleType:"time"};const LineType=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)(BasicLineStory);LineType.args={color:"series",lineType:"series"};const Opacity=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)(BasicLineStory);Opacity.args={color:"series",opacity:{value:.6}};const TrendScale=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)((args=>{const chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_2__.A)(defaultChartProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_3__.t1,{...chartProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__._0,{position:"left",grid:!0,title:"Users"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__._0,{position:"bottom",labelFormat:"time",baseline:!0,ticks:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.yP,{dimension:"datetime",metric:"users",opacity:{value:.75}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.N1,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.s$,{highlight:!0})]})}));TrendScale.args={color:"series",scaleType:"point"};const LinearTrendScale=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)((args=>{const chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_2__.A)(defaultChartProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_3__.t1,{...chartProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__._0,{position:"left",grid:!0,title:"Users"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__._0,{position:"bottom",labelFormat:"linear",baseline:!0,ticks:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_ReferenceLine__WEBPACK_IMPORTED_MODULE_1__.e,{value:13})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.N1,{...args})]})}));LinearTrendScale.args={color:"series",dimension:"point",scaleType:"linear"};const HistoricalCompare=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)((args=>{const chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_2__.A)({...defaultChartProps,data:historicalCompareData,width:600,opacities:[.5,1],lineTypes:["dotted","solid"]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_3__.t1,{...chartProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__._0,{position:"left",grid:!0,title:"Users"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__._0,{position:"bottom",labelFormat:"time",baseline:!0,ticks:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.N1,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.s$,{highlight:!0,opacity:"period"})]})}));HistoricalCompare.args={color:"series",dimension:"datetime",lineType:"period",metric:"users",scaleType:"time"};const Tooltip=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)(BasicLineStory);Tooltip.args={color:"series",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.II,{children:datum=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"bar-tooltip",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{children:(0,_stories_storyUtils__WEBPACK_IMPORTED_MODULE_8__.E)(datum.datetime)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{children:["Event: ",datum.series]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{children:["Users: ",Number(datum.value).toLocaleString()]})]})})};const WithStaticPoints=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)(LineWithVisiblePointsStory);WithStaticPoints.args={color:"series",dimension:"datetime",metric:"value",name:"line0",scaleType:"time",staticPoint:"staticPoint"};const generateCallback=variant=>{const actionName={popover:"ChartPopover",tooltip:"ChartTooltip"};return datum=>((0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.XI)(`${actionName[variant]}:callback`)(datum),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"bar-tooltip",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{children:(0,_stories_storyUtils__WEBPACK_IMPORTED_MODULE_8__.E)(datum.datetime)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{children:["Event: ",datum.series]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{children:["Users: ",Number(datum.value).toLocaleString()]})]}))},WithStaticPointsAndDialogs=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)(LineWithVisiblePointsStory);WithStaticPointsAndDialogs.args={color:"series",dimension:"datetime",metric:"value",name:"line0",scaleType:"time",staticPoint:"staticPoint",children:[(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_rsc__WEBPACK_IMPORTED_MODULE_3__.II,{},generateCallback("tooltip")),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_rsc__WEBPACK_IMPORTED_MODULE_3__.kZ,{},generateCallback("popover"))]};const SingleLine=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)((args=>{const chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_2__.A)(singleLineChartProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.t1,{...chartProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_3__.N1,{...args})})}));SingleLine.args={dimension:"x",metric:"y",scaleType:"linear"}}}]);