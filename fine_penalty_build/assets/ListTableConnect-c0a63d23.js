import{j as t,r as d}from"./index-907a7e20.js";import{r as L,a as $}from"./index-bfc0b3f7.js";import{c as _,d as z,e as p}from"./index.esm-fd3237ba.js";import{c as ee}from"./index.esm-699b7b11.js";import{A as J}from"./ApiHeader-6d683756.js";import{a as K}from"./ProjectApiList-8b41c281.js";import{S as te}from"./ShimmerEffectInline-88efb4eb.js";function ae({filter:e,setFilter:r}){return t.jsxs(t.Fragment,{children:["Search : "," ",t.jsx("input",{className:"border-2 border-gray-600 px-2 bg-gray-200",type:"text",value:e||"",onChange:x=>r(x.target.value)})]})}function ne(e){const[r,x]=d.useState("hidden"),k=d.useMemo(()=>e.columns,[]),u=d.useMemo(()=>e.dataList,[e.dataList,e==null?void 0:e.totalCount]),[h,A]=d.useState(10),[o,D]=d.useState(0);d.useEffect(()=>{D(0)},[e==null?void 0:e.totalCount]),d.useEffect(()=>{let l=(e==null?void 0:e.totalCount)/(e==null?void 0:e.perPage);(e==null?void 0:e.totalCount)%(e==null?void 0:e.perPage)!=0?I(parseInt(l)+1):I(parseInt(l))},[e==null?void 0:e.totalCount,h]);const{getTableBodyProps:m,headerGroups:N,prepareRow:E,setPageSize:I,state:H,rows:O,setGlobalFilter:M}=L.useTable({columns:k,data:u,initialState:{pageIndex:0}},L.useGlobalFilter,L.useSortBy,L.usePagination),{globalFilter:j,pageSize:w}=H,R=()=>{if(parseInt(o)>0&&parseInt(o)<=parseInt(e==null?void 0:e.lastPage))e==null||e.gotoPage(parseInt(o));else return!1},C=()=>{(e==null?void 0:e.lastPage)!=(e==null?void 0:e.currentPage)&&e.nextPage()},b=()=>{(e==null?void 0:e.currentPage)!=1&&e.prevPage()};return t.jsxs(t.Fragment,{children:[(e==null?void 0:e.exportStatus)!==!1&&((e==null?void 0:e.search)==!1?t.jsxs("div",{className:"absolute -mt-[1vh] right-[3.3vw] flex items-center gap-2",children:[t.jsx("div",{className:"flex-initial ml-2",children:t.jsxs("button",{className:"text-sm hover:bg-slate-500 px-3 pr-3  shadow-lg rounded py-0.5 border border-slate-500 text-slate-500 hover:text-white hover:shadow-2xl  text-center relative",onMouseEnter:()=>x(""),onMouseLeave:()=>x("hidden"),onClick:()=>e==null?void 0:e.exportDataF("csv"),children:["CSV",t.jsx("div",{className:r+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:t.jsx(_,{})})]})}),t.jsx("button",{onClick:()=>e==null?void 0:e.exportDataF("excel"),className:"text-sm hover:bg-slate-500 px-3 pr-3  shadow-lg rounded py-0.5 border border-slate-500 text-slate-500 hover:text-white hover:shadow-2xl text-center relative",children:"Excel"})]}):t.jsxs("div",{className:"flex mb-2 pb-2",children:[t.jsx("div",{className:"flex-initial opacity-50",children:t.jsx(ae,{filter:j,setFilter:M})}),t.jsx("div",{className:"flex-initial ml-2",children:t.jsxs("button",{className:"text-sm hover:bg-slate-500 px-3 pr-3  shadow-lg rounded py-1 border border-slate-500 text-slate-500 hover:text-white hover:shadow-2xl text-center relative",onMouseEnter:()=>x(""),onMouseLeave:()=>x("hidden"),onClick:()=>e==null?void 0:e.exportDataF("csv"),children:["Export",t.jsx("div",{className:r+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:t.jsx(_,{})})]})}),t.jsx("div",{className:"flex-1",children:e.children})]})),t.jsx("div",{className:"flex w-full",children:t.jsxs("div",{className:"flex-1",children:[t.jsx("span",{className:"opacity-50",children:"Total Result : "}),t.jsx("span",{className:"font-semibold",children:e==null?void 0:e.totalCount})," "]})}),(e==null?void 0:e.feedback)!=null&&t.jsx("div",{children:t.jsxs("span",{className:"text-xs bg-gray-200 opacity-50 pr-2 pl-1 py-1 rounded-sm",children:[t.jsx(ee,{className:"inline text-xs text-gray-400 mr-2"}),e.feedback]})}),t.jsx("div",{className:" p-2 overflow-x-auto bg-white",children:t.jsxs("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:[t.jsxs("table",{...m,className:"min-w-full leading-normal",children:[t.jsx("thead",{className:"font-bold text-left text-sm bg-sky-50",children:N==null?void 0:N.map(l=>t.jsx("tr",{...l.getHeaderGroupProps(),children:l.headers.map(s=>t.jsxs("th",{...s.getHeaderProps(s.getSortByToggleProps()),className:(s==null?void 0:s.className)+" notranslate px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase ",children:[s.render("Header"),t.jsx("span",{children:s.isSorted?s.isSortedDesc?"⬆️":"⬇️":""})]}))}))}),t.jsxs("tbody",{...m(),className:"text-sm",children:[O.map((l,s)=>{var T;return E(l),t.jsx("tr",{...l.getRowProps(),className:"bg-white shadow-lg border-b border-gray-200",children:(T=l==null?void 0:l.cells)==null?void 0:T.map((B,G)=>t.jsx("td",{...B.getCellProps(),className:"notranslate px-2 py-2 text-sm text-left",children:B.render("Cell")}))})}),t.jsx("tr",{children:t.jsx("td",{})})]})]}),t.jsxs("div",{className:"mt-3 grid grid-cols-12 items-center",children:[t.jsxs("div",{className:"sm:col-span-2 col-span-3 flex w-full ml-1 pr-10",children:[t.jsx("span",{children:t.jsx("input",{className:"h-10 w-[90%] placeholder:text-gray-600 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 ",type:"number",onChange:l=>{D(l.target.value)},placeholder:"Go to page..."})}),t.jsxs("abbr",{className:"cursor-pointer flex items-center w-[15%] no-underline",title:"Go",onClick:()=>R(),children:[" ",t.jsx("span",{className:"font-bold bg-green-300 text-xl px-2 pb-1 rounded-full hover:text-white hover:bg-green-500",children:"⇨"})," "]})]}),t.jsxs("div",{className:"col-span-2",children:["  ",t.jsx("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",value:h,onChange:l=>{A(Number(l.target.value)),e.perPageC(Number(l.target.value))},children:[5,10,25,50].map(l=>t.jsxs("option",{selected:l===10,value:l,children:["show ",l]},l))})]}),t.jsxs("div",{className:"col-span-3 sm:col-span-4 text-center sm:col-start-5 col-start-7",children:["   ",t.jsxs("span",{children:["page ","",t.jsxs("strong",{children:[e==null?void 0:e.currentPage," of ",e==null?void 0:e.lastPage]}),""]})]}),t.jsxs("div",{className:"col-span-3 sm:col-span-4 text-right",children:[t.jsx("abbr",{title:"First Page",children:t.jsxs("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>e==null?void 0:e.goFirst(),disabled:(e==null?void 0:e.currentPage)==1&&!0,children:[t.jsx(z,{})," "]})}),t.jsx("abbr",{title:"Previous Page",children:t.jsx("button",{className:((e==null?void 0:e.currentPage)==1?"opacity-50":"opacity-100")+" text-xl hover:bg-sky-300 hover:text-white cursor-pointer",onClick:()=>b(),disabled:(e==null?void 0:e.currentPage)==1&&!0,children:"⬅️"})}),t.jsx("abbr",{title:"Next Page",children:t.jsx("button",{className:((e==null?void 0:e.currentPage)==(e==null?void 0:e.lastPage)?"opacity-50":"opacity-100")+" text-xl hover:bg-sky-300 hover:text-white cursor-pointer",onClick:()=>C(),disabled:(e==null?void 0:e.currentPage)==(e==null?void 0:e.lastPage)&&!0,children:"➡️"})}),t.jsx("abbr",{title:"Last Page",children:t.jsxs("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>e==null?void 0:e.goLast(),disabled:(e==null?void 0:e.currentPage)==(e==null?void 0:e.lastPage)&&!0,children:["  ",t.jsx(p,{})]})})]})]})]})})]})}const ge=e=>{const[r,x]=d.useState(10),[k,u]=d.useState(1),[h,A]=d.useState(0),[o,D]=d.useState(0),[m,N]=d.useState(0),[E,I]=d.useState(),[H,O]=d.useState(!1),[M,j]=d.useState(!1),[w,R]=d.useState([]),[C,b]=d.useState(!1),l=()=>{j(!1),b(!0),Object.keys(e==null?void 0:e.requestBody).length!==0&&typeof e.loader=="function"&&e.loader(!0),K.post(e==null?void 0:e.api,{...e==null?void 0:e.requestBody,perPage:r,page:k},J()).then(a=>{var i,c,v,P,f,n,y,g,F,S;((i=a==null?void 0:a.data)==null?void 0:i.status)==!0?(console.log("success getting list => ",a),e!=null&&e.getData&&(e==null||e.allData((c=a==null?void 0:a.data)==null?void 0:c.data)),R((P=(v=a==null?void 0:a.data)==null?void 0:v.data)==null?void 0:P.data),N((n=(f=a==null?void 0:a.data)==null?void 0:f.data)==null?void 0:n.total),A((g=(y=a==null?void 0:a.data)==null?void 0:y.data)==null?void 0:g.current_page),D((S=(F=a==null?void 0:a.data)==null?void 0:F.data)==null?void 0:S.last_page),j(!1)):(console.log("false error while getting list => ",a),j(!0))}).catch(a=>(console.log("error while getting list => ",a),j(!0))).finally(()=>{b(!1),Object.keys(e==null?void 0:e.requestBody).length!==0&&typeof e.loader=="function"&&e.loader(!1),j(!1)})},s=()=>{u(h+1)},T=()=>{u(h-1)},B=a=>{let i=parseInt(m/a),c=parseInt(m%a);if(c==0){i<h&&u(i),x(a);return}if(c!=0){i+1<h&&u(i+1),x(a);return}},G=()=>{u(1)},Q=()=>{u(o)},U=a=>{u(a)},q=a=>a==null?void 0:a.map((c,v)=>{var f;const P=(f=e==null?void 0:e.columns)==null?void 0:f.map((n,y)=>{var F,S;var g=c[n==null?void 0:n.accessor];if(n!=null&&n.option&&((F=n==null?void 0:n.option)==null?void 0:F.length)>0){const V=(S=n==null?void 0:n.option)==null?void 0:S.find(Z=>Z.hasOwnProperty(c[n==null?void 0:n.accessor]));V?g=V[c[n==null?void 0:n.accessor]]:g=c[n==null?void 0:n.accessor]}return(n==null?void 0:n.Header.toLowerCase())!="action"&&{[n==null?void 0:n.Header]:n!=null&&n.accessor?g:v+1}});return Object.assign({},...P)}),W=a=>{},X=a=>{b(!0),O(!1),K.post(e==null?void 0:e.api,{...e==null?void 0:e.requestBody,perPage:m},J()).then(i=>{var c,v,P,f,n,y,g;((c=i==null?void 0:i.data)==null?void 0:c.status)==!0&&(a=="csv"&&(I(q((P=(v=i==null?void 0:i.data)==null?void 0:v.data)==null?void 0:P.data)),Y()),a=="excel"&&W(q((n=(f=i==null?void 0:i.data)==null?void 0:f.data)==null?void 0:n.data)),a=="pdf"&&exportToPDF(q((g=(y=i==null?void 0:i.data)==null?void 0:y.data)==null?void 0:g.data))),b(!1)}).catch(i=>{b(!1)})},Y=()=>{O(!0)};return d.useEffect(()=>{(e==null?void 0:e.requestBody)!=null&&(u(1),x(10),l())},[e==null?void 0:e.changeData]),d.useEffect(()=>{b(!0),l()},[k,r]),t.jsxs(t.Fragment,{children:[M&&t.jsxs("div",{className:"bg-red-100 border border-red-400 text-red-700 pl-4 pr-16 py-3 rounded relative text-center",role:"alert",children:[t.jsx("strong",{className:"font-bold",children:"Sorry! "}),t.jsx("span",{className:"block sm:inline",children:"Some error occured while fetching list. Please try again later."}),t.jsx("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3"})]}),H&&t.jsx($,{data:E}),C&&t.jsx(te,{}),!C&&(w==null?void 0:w.length)>0?t.jsx(t.Fragment,{children:t.jsx(ne,{search:e==null?void 0:e.search,currentPage:h,lastPage:o,goFirst:G,goLast:Q,count1:m,columns:e==null?void 0:e.columns,dataList:w,exportStatus:e==null?void 0:e.exportStatus,perPage:r,perPageC:B,totalCount:m,nextPage:s,prevPage:T,exportDataF:X,exportData:E,gotoPage:a=>U(a)})}):t.jsx(t.Fragment,{children:!C&&t.jsxs("div",{className:"bg-red-100 border border-red-400 text-red-700 pl-4 pr-16 py-3 rounded relative text-center",role:"alert",children:[t.jsx("span",{className:"block sm:inline",children:"Oops! No data available."}),t.jsx("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3"})]})})]})};export{ge as L};
