"use strict";(self.webpackChunk_adobe_react_spectrum_charts=self.webpackChunk_adobe_react_spectrum_charts||[]).push([[6966],{"./src/stories/components/Bar/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Av:()=>generateMockDataForTrellis,C7:()=>barData,J9:()=>barSeriesData,JQ:()=>barSubSeriesData,RD:()=>barDataLongLabels,qP:()=>negativeBarSeriesData});const barData=[{browser:"Chrome",downloads:27e3,percentLabel:"53.1%"},{browser:"Firefox",downloads:8e3,percentLabel:"15.7%"},{browser:"Safari",downloads:7750,percentLabel:"15.2%"},{browser:"Edge",downloads:7600,percentLabel:"14.9%"},{browser:"Explorer",downloads:500,percentLabel:"1.0%"}],barDataLongLabels=[{browser:"Google Chrome",downloads:27e3},{browser:"Mozilla Firefox",downloads:8e3},{browser:"Mac Safari",downloads:7750},{browser:"Microsoft Edge",downloads:7600},{browser:"Microsoft Explorer",downloads:500}],barSeriesData=[{browser:"Chrome",value:5,operatingSystem:"Windows",order:2,percentLabel:"50%"},{browser:"Chrome",value:3,operatingSystem:"Mac",order:1,percentLabel:"30%"},{browser:"Chrome",value:2,operatingSystem:"Other",order:0,percentLabel:"20%"},{browser:"Firefox",value:3,operatingSystem:"Windows",order:2,percentLabel:"42.6%"},{browser:"Firefox",value:3,operatingSystem:"Mac",order:1,percentLabel:"42.6%"},{browser:"Firefox",value:1,operatingSystem:"Other",order:0,percentLabel:"14.3%"},{browser:"Safari",value:3,operatingSystem:"Windows",order:2,percentLabel:"75%"},{browser:"Safari",value:0,operatingSystem:"Mac",order:1},{browser:"Safari",value:1,operatingSystem:"Other",order:0,percentLabel:"25%"}],negativeBarSeriesData=[{browser:"Chrome",value:-5,operatingSystem:"Windows",order:2,percentLabel:"50%"},{browser:"Chrome",value:-3,operatingSystem:"Mac",order:1,percentLabel:"30%"},{browser:"Chrome",value:-2,operatingSystem:"Other",order:0,percentLabel:"20%"},{browser:"Firefox",value:-3,operatingSystem:"Windows",order:2,percentLabel:"42.6%"},{browser:"Firefox",value:-3,operatingSystem:"Mac",order:1,percentLabel:"42.6%"},{browser:"Firefox",value:-1,operatingSystem:"Other",order:0,percentLabel:"14.3%"},{browser:"Safari",value:-3,operatingSystem:"Windows",order:2,percentLabel:"75%"},{browser:"Safari",value:0,operatingSystem:"Mac",order:1},{browser:"Safari",value:-1,operatingSystem:"Other",order:0,percentLabel:"25%"}],barSubSeriesData=[{browser:"Chrome",value:5,operatingSystem:"Windows",version:"Current",order:2,percentLabel:"71.4%"},{browser:"Chrome",value:3,operatingSystem:"Mac",version:"Current",order:1,percentLabel:"42.9%"},{browser:"Chrome",value:2,operatingSystem:"Linux",version:"Current",order:0,percentLabel:"28.6%"},{browser:"Firefox",value:3,operatingSystem:"Windows",version:"Current",order:2,percentLabel:"30%"},{browser:"Firefox",value:3,operatingSystem:"Mac",version:"Current",order:1,percentLabel:"75%"},{browser:"Firefox",value:1,operatingSystem:"Linux",version:"Current",order:0,percentLabel:"25%"},{browser:"Safari",value:3,operatingSystem:"Windows",version:"Current",order:2,percentLabel:"27.3%"},{browser:"Safari",value:1,operatingSystem:"Mac",version:"Current",order:1,percentLabel:"50%"},{browser:"Safari",value:1,operatingSystem:"Linux",version:"Current",order:0,percentLabel:"25%"},{browser:"Chrome",value:2,operatingSystem:"Windows",version:"Previous",order:2,percentLabel:"28.6%"},{browser:"Chrome",value:4,operatingSystem:"Mac",version:"Previous",order:1,percentLabel:"57.1%"},{browser:"Chrome",value:5,operatingSystem:"Linux",version:"Previous",order:0,percentLabel:"71.4%"},{browser:"Firefox",value:7,operatingSystem:"Windows",version:"Previous",order:2,percentLabel:"70%"},{browser:"Firefox",value:1,operatingSystem:"Mac",version:"Previous",order:1,percentLabel:"25%"},{browser:"Firefox",value:3,operatingSystem:"Linux",version:"Previous",order:0,percentLabel:"75%"},{browser:"Safari",value:8,operatingSystem:"Windows",version:"Previous",order:2,percentLabel:"72.7%"},{browser:"Safari",value:1,operatingSystem:"Mac",version:"Previous",order:1,percentLabel:"50%"},{browser:"Safari",value:3,operatingSystem:"Linux",version:"Previous",order:0,percentLabel:"75%"}],generateMockDataForTrellis=({property1,property2,property3,propertyNames,orderBy,maxValue=1e4,randomizeSteps=!0})=>{const[property1Name,property2Name,property3Name]=propertyNames,data=[];let order=-1;for(let p1i=0;p1i<property1.length;p1i++){const p1=property1[p1i];orderBy===property1Name&&(order=p1i);for(let p2i=0;p2i<property2.length;p2i++){const p2=property2[p2i];orderBy===property2Name&&(order=p2i);for(let p3i=0;p3i<property3.length;p3i++){const p3=property3[p3i];let value;orderBy===property3Name&&(order=p3i),value=randomizeSteps?Math.max(0,Math.floor(Math.random()*maxValue)):Math.max(0,maxValue-(p1i+p2i+p3i)*(maxValue/10)),data.push({order,value,[property1Name]:p1,[property2Name]:p2,[property3Name]:p3})}}}return data}},"./src/stories/data/marioKartData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>characterData});const characterData=[{weightClass:"light",character:["Baby Peach","Baby Daisy"],speedNormal:2.25,speedAntigravity:2,speedWater:2.5,speedAir:2.75,acceleration:4,weight:2,handlingNormal:5,handlingAntigravity:5,handlingWater:4.5,handlingAir:5,grip:4.25,miniTurbo:4},{weightClass:"light",character:["Baby Rosalina","Lemmy"],speedNormal:2.25,speedAntigravity:2,speedWater:2.5,speedAir:2.75,acceleration:4.25,weight:2,handlingNormal:4.75,handlingAntigravity:4.75,handlingWater:4.25,handlingAir:4.75,grip:3.75,miniTurbo:4},{weightClass:"light",character:["Baby Mario","Baby Luigi","Dry Bones","Light Mii"],speedNormal:2.5,speedAntigravity:2.25,speedWater:2.75,speedAir:3,acceleration:4.25,weight:2.25,handlingNormal:4.5,handlingAntigravity:4.5,handlingWater:4,handlingAir:4.5,grip:4,miniTurbo:3.75},{weightClass:"light",character:["Koopa Troopa","Lakitu","Bowser Jr."],speedNormal:2.75,speedAntigravity:2.5,speedWater:3,speedAir:3.25,acceleration:4,weight:2.5,handlingNormal:4.5,handlingAntigravity:4.5,handlingWater:4,handlingAir:4.5,grip:4.25,miniTurbo:3.75},{weightClass:"light",character:["Toadette","Wendy","Isabelle"],speedNormal:2.75,speedAntigravity:2.5,speedWater:3,speedAir:3.25,acceleration:4.25,weight:2.5,handlingNormal:4.25,handlingAntigravity:4.25,handlingWater:3.75,handlingAir:4.25,grip:3.5,miniTurbo:3.75},{weightClass:"light",character:["Toad","Shy Guy","Larry"],speedNormal:3,speedAntigravity:2.75,speedWater:3.25,speedAir:3.5,acceleration:4,weight:2.75,handlingNormal:4.25,handlingAntigravity:4.25,handlingWater:3.75,handlingAir:4.25,grip:4,miniTurbo:3.5},{weightClass:"medium",character:["Cat Peach","Inkling Girl","Female Villager"],speedNormal:3.25,speedAntigravity:3,speedWater:3.5,speedAir:3.75,acceleration:4,weight:2.75,handlingNormal:4,handlingAntigravity:4,handlingWater:3.5,handlingAir:4,grip:3.75,miniTurbo:3.5},{weightClass:"medium",character:["Peach","Daisy","Yoshi"],speedNormal:3.5,speedAntigravity:3.25,speedWater:3.75,speedAir:4,acceleration:3.75,weight:3,handlingNormal:3.75,handlingAntigravity:3.75,handlingWater:3.25,handlingAir:3.75,grip:3.75,miniTurbo:3.5},{weightClass:"medium",character:["Tanooki Mario","Inkling Boy","Male Villager"],speedNormal:3.5,speedAntigravity:3.25,speedWater:3.75,speedAir:4,acceleration:3.75,weight:3.25,handlingNormal:3.75,handlingAntigravity:3.75,handlingWater:3.25,handlingAir:3.75,grip:3.25,miniTurbo:3.5},{weightClass:"medium",character:["Luigi","Iggy"],speedNormal:3.75,speedAntigravity:3.5,speedWater:4,speedAir:4.25,acceleration:3.5,weight:3.5,handlingNormal:3.75,handlingAntigravity:3.75,handlingWater:3.25,handlingAir:3.75,grip:3.25,miniTurbo:3.25},{weightClass:"medium",character:["Mario","Ludwig","Medium Mii"],speedNormal:3.75,speedAntigravity:3.5,speedWater:4,speedAir:4.25,acceleration:3.5,weight:3.5,handlingNormal:3.5,handlingAntigravity:3.5,handlingWater:3,handlingAir:3.5,grip:3.5,miniTurbo:3.25},{weightClass:"heavy",character:["Rosalina","King Boo","Link"],speedNormal:4,speedAntigravity:3.75,speedWater:4.25,speedAir:4.5,acceleration:3.25,weight:3.75,handlingNormal:3.25,handlingAntigravity:3.25,handlingWater:2.75,handlingAir:3.25,grip:3.75,miniTurbo:3.25},{weightClass:"heavy",character:["Metal Mario","Gold Mario","Pink Gold Peach"],speedNormal:4.25,speedAntigravity:4,speedWater:4.5,speedAir:4.75,acceleration:3.25,weight:4.5,handlingNormal:3.25,handlingAntigravity:3.25,handlingWater:2.75,handlingAir:3.25,grip:3,miniTurbo:3},{weightClass:"heavy",character:["Waluigi","Donkey Kong","Roy"],speedNormal:4.5,speedAntigravity:4.25,speedWater:4.75,speedAir:5,acceleration:3.25,weight:4,handlingNormal:3,handlingAntigravity:3,handlingWater:2.5,handlingAir:3,grip:3,miniTurbo:3},{weightClass:"heavy",character:["Wario","Dry Bowser"],speedNormal:4.75,speedAntigravity:4.5,speedWater:5,speedAir:5.25,acceleration:3,weight:4.25,handlingNormal:2.75,handlingAntigravity:2.75,handlingWater:2.25,handlingAir:2.75,grip:3.25,miniTurbo:2.75},{weightClass:"heavy",character:["Bowser","Morton","Heavy Mii"],speedNormal:4.75,speedAntigravity:4.5,speedWater:5,speedAir:5.25,acceleration:3,weight:4.5,handlingNormal:2.5,handlingAntigravity:2.5,handlingWater:2,handlingAir:2.5,grip:3,miniTurbo:2.75}]},"./src/test-utils/bindWithProps.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function bindWithProps(template){return template.bind({})}__webpack_require__.d(__webpack_exports__,{O:()=>bindWithProps})},"./src/test-utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OK:()=>bindWithProps.O});var react_esm=__webpack_require__("./node_modules/@testing-library/react/dist/@testing-library/react.esm.js");const[queryMarksByGroupName,getAllMarksByGroupName,getMarksByGroupName,findAllMarksByGroupName,findMarksByGroupName]=(0,react_esm.H5)(((container,markName,tagName="path")=>[...container.querySelectorAll(`g.${markName} > ${tagName}`)]),((_c,markName)=>`Found multiple marks under the group name ${markName}`),((_c,markName)=>`Unable to find any marks under the group name ${markName}`)),[queryLegendEntries,getAllLegendEntries,getLegendEntries,findAllLegendEntries,findLegendEntries]=(0,react_esm.H5)((container=>[...container.querySelectorAll("g.role-legend-entry g.role-scope > g > path.foreground")]),(()=>"Found multiple legend entries"),(()=>"Unable to find any legend entries")),[queryLegendSymbols,getAllLegendSymbols,getLegendSymbols,findAllLegendSymbols,findLegendSymbols]=(0,react_esm.H5)((container=>[...container.querySelectorAll("g.role-legend-entry g.role-legend-symbol > path")]),(()=>"Found multiple legend symbols"),(()=>"Unable to find any legend symbols")),[queryAxisLabels,getAllAxisLabels,getAxisLabels,findAllAxisLabels,findAxisLabels]=(0,react_esm.H5)((container=>[...container.querySelectorAll("g.role-axis-label > text")]),(()=>"Found multiple legend entries"),(()=>"Unable to find any legend entries"));__webpack_require__("./node_modules/@testing-library/user-event/dist/esm/index.js");__webpack_require__("./src/constants.ts"),__webpack_require__("./node_modules/react/jsx-runtime.js");var bindWithProps=__webpack_require__("./src/test-utils/bindWithProps.tsx")},"./src/stories/components/Animations/AnimationsOpacity.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AreaPopover:()=>AreaPopover,BarPopover:()=>BarPopover,LineChart:()=>LineChart,ScatterPopover:()=>ScatterPopover,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@react-spectrum/view/dist/import.mjs"),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@react-spectrum/layout/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_stories_data_marioKartData__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/data/marioKartData.ts"),_rsc__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants.ts"),_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useChartProps.tsx"),_stories_data_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/data/data.ts"),_test_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/test-utils/index.ts"),_stories_components_Bar_data__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/stories/components/Bar/data.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"RSC/Animations/Opacity"},defaultChartProps={data:[],minWidth:400,maxWidth:800,height:400},dialogContent=datum=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_9__.UC,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{children:["Operating system: ",datum.series]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{children:["Browser: ",datum.category]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{children:["Users: ",datum.value]})]}),dialog=item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_9__.UC,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_10__.so,{direction:"column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:{fontWeight:"bold"},children:item.character.join(", ")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{children:[marioKeyTitle.speedNormal,": ",item.speedNormal]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{children:[marioKeyTitle.handlingNormal,": ",item.handlingNormal]})]})}),marioKeyTitle={weightClass:"Weight class",speedNormal:"Speed (normal)",speedAntigravity:"Speed (antigravity)",speedWater:"Speed (water)",speedAir:"Speed (air)",acceleration:"Acceleration",weight:"Weight",handlingNormal:"Handling (normal)",handlingAntigravity:"Handling (antigravity)",handlingWater:"Handling (water)",handlingAir:"Handling (air)",grip:"Grip",miniTurbo:"Mini-turbo"},areaStoryData=[{browser:"Chrome",value:5,operatingSystem:"Windows",order:2},{browser:"Chrome",value:3,operatingSystem:"Mac",order:1},{browser:"Chrome",value:2,operatingSystem:"Other",order:0},{browser:"Firefox",value:3,operatingSystem:"Windows",order:2},{browser:"Firefox",value:3,operatingSystem:"Mac",order:1},{browser:"Firefox",value:1,operatingSystem:"Other",order:0},{browser:"Safari",value:3,operatingSystem:"Windows",order:2},{browser:"Safari",value:0,operatingSystem:"Mac",order:1},{browser:"Safari",value:1,operatingSystem:"Other",order:0}],AreaPopover=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)((args=>{const chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_4__.A)({data:areaStoryData,minWidth:400,maxWidth:800,height:400});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_2__.t1,{...chartProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__._0,{position:"bottom",baseline:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__._0,{position:"left",grid:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_2__.Gk,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.II,{children:dialogContent}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.kZ,{children:dialogContent})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.s$,{highlight:!0})]})}));AreaPopover.args={dimension:"browser",color:"operatingSystem",scaleType:"point"};const BarPopover=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)((args=>{const chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_4__.A)({data:_stories_components_Bar_data__WEBPACK_IMPORTED_MODULE_7__.J9,width:800,height:600});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_2__.t1,{...chartProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__._0,{position:"horizontal"===args.orientation?"left":"bottom",baseline:!0,title:"Browser"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__._0,{position:"horizontal"===args.orientation?"bottom":"left",grid:!0,title:"Downloads"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_2__.yP,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.II,{children:dialogContent}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.kZ,{width:200,children:dialogContent})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.s$,{title:"Operating system",highlight:!0})]})}));BarPopover.args={type:"dodged",dimension:"browser",order:"order",color:"operatingSystem"};const LineChart=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)((args=>{const chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_4__.A)({...defaultChartProps,data:_stories_data_data__WEBPACK_IMPORTED_MODULE_5__.pH});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_2__.t1,{...chartProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__._0,{position:"bottom",baseline:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__._0,{position:"left",grid:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_2__.N1,{scaleType:"point",dimension:"category",color:"series",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.II,{children:dialogContent}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.kZ,{...args})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.s$,{highlight:!0})]})}));LineChart.args={children:dialogContent};const ScatterPopover=(0,_test_utils__WEBPACK_IMPORTED_MODULE_6__.OK)((args=>{const colors="linear"===args.colorScaleType?"sequentialViridis5":"categorical16",chartProps=(0,_hooks_useChartProps__WEBPACK_IMPORTED_MODULE_4__.A)({data:_stories_data_marioKartData__WEBPACK_IMPORTED_MODULE_1__.m,height:500,width:500,lineWidths:[1,2,3],colors}),legendProps=(args=>{const facets=[_constants__WEBPACK_IMPORTED_MODULE_3__.Tj,_constants__WEBPACK_IMPORTED_MODULE_3__.Ze,_constants__WEBPACK_IMPORTED_MODULE_3__.$M,"size"],legendKey=args[facets.find((key=>void 0!==args[key]))??_constants__WEBPACK_IMPORTED_MODULE_3__.Tj],legendProps={position:"right",title:marioKeyTitle[legendKey]};return"object"==typeof args.opacity&&(legendProps.opacity=args.opacity),legendProps})(args);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_rsc__WEBPACK_IMPORTED_MODULE_2__.t1,{...chartProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__._0,{position:"bottom",grid:!0,ticks:!0,baseline:!0,title:marioKeyTitle[args.dimension]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__._0,{position:"left",grid:!0,ticks:!0,baseline:!0,title:marioKeyTitle[args.metric]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.Xl,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.s$,{...legendProps,highlight:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rsc__WEBPACK_IMPORTED_MODULE_2__.hE,{text:"Mario Kart 8 Character Data"})]})}));ScatterPopover.args={color:"weightClass",dimension:"speedNormal",metric:"handlingNormal",children:[(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_rsc__WEBPACK_IMPORTED_MODULE_2__.II,{},dialog),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_rsc__WEBPACK_IMPORTED_MODULE_2__.kZ,{width:200},dialog)]}}}]);