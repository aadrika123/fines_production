import{r as s,a as K,j as a}from"./index-09fb20e5.js";import{L as Q}from"./ListTableConnect-14d57a66.js";import{c as X,a as Y,u as Z}from"./formik.esm-e2b7289d.js";import{R as tt}from"./index.esm-2628dbe5.js";import{R as ot}from"./Hourglass-04fbe6a1.js";import{P as at}from"./ProjectApiList-38ebe721.js";import{g as w,n as c,d as it}from"./PowerupFunctions-972dbaa1.js";import{u as et}from"./useSetTitle-dc668ca5.js";import{A as f}from"./AxiosInterceptors-c9687ad8.js";import{A as x}from"./ApiHeader-6d683756.js";import"./index-dabe3372.js";import"./index-387d7a00.js";import"./index.esm-b5c33ff4.js";import"./iconBase-808696e5.js";import"./index.esm-e200767b.js";import"./ShimmerEffectInline-81eae6df.js";const jt=()=>{var v;et("Violation Wise Report");const{api_ViolationWiseReport:y,api_getViolationList:j,api_getSectionList:S,api_listDepartment:N,api_violationMasterList:nt}=at(),[d,_]=s.useState([]),[D,L]=s.useState([]),[C,V]=s.useState([]),k=K(),A=[{Header:"Sl.No.",Cell:({row:t})=>a.jsx("div",{children:(t==null?void 0:t.index)+1})},{Header:"Name",accessor:"full_name",Cell:({cell:t})=>{var o;return c((o=t.row.original)==null?void 0:o.full_name)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:t})=>{var o;return c((o=t.row.original)==null?void 0:o.mobile)}},{Header:"Challan No",accessor:"challan_no",Cell:({cell:t})=>{var o;return a.jsx("div",{className:"underline cursor-pointer",onClick:()=>{var i,n,r,u;return((n=(i=t==null?void 0:t.row)==null?void 0:i.original)==null?void 0:n.challan_id)&&k(`/challan/${(u=(r=t==null?void 0:t.row)==null?void 0:r.original)==null?void 0:u.challan_id}`)},children:c((o=t.row.original)==null?void 0:o.challan_no)})}},{Header:"Violation Made",accessor:"violation_name",Cell:({cell:t})=>{var o;return c((o=t.row.original)==null?void 0:o.violation_name)}},{Header:"Violation Section",accessor:"violation_section",Cell:({cell:t})=>{var o;return c((o=t.row.original)==null?void 0:o.violation_section)}},{Header:"Violation Place",accessor:"violation_place",Cell:({cell:t})=>{var o;return c((o=t.row.original)==null?void 0:o.violation_place)}},{Header:"Penalty Amount",accessor:"total_amount",Cell:({cell:t})=>{var o;return it((o=t.row.original)==null?void 0:o.total_amount)}}],[m,R]=s.useState({}),[F,M]=s.useState(0),[H,z]=s.useState(!1),[q,l]=s.useState(!1),E="text-gray-800 text-sm",g="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",p=[{title:"From Date",key:"fromDate",width:"md:w-[20%] w-full",type:"date",hint:"",required:!0,options:"",okey:"",ovalue:""},{title:"Upto Date",key:"uptoDate",width:"md:w-[20%] w-full",type:"date",hint:"",required:!0,options:"",okey:"",ovalue:""},{title:"Department",key:"department",width:"md:w-[20%] w-full",type:"select",hint:"Enter your name",options:C,okey:"id",ovalue:"department_name"},{title:"Violation Section",key:"violationSection",width:"md:w-[20%] w-full",type:"select",hint:"Enter your name",options:D,okey:"id",ovalue:"violation_section"},{title:"Violation Made",key:"violationMade",width:"md:w-[20%] w-full",type:"select",hint:"Enter your name",options:d,okey:"id",ovalue:"violation_name"}],P=(t,o="",i,n="",r="",u=!1,h=[],G="",J="")=>a.jsxs("div",{className:`flex flex-col ${n} `,children:[o!=""&&a.jsxs("label",{htmlFor:t,className:E,children:[o," ",u&&a.jsx("span",{className:"text-red-500 text-xs font-bold",children:"*"})," : "]}),i!="select"&&i!="file"&&a.jsx("input",{...e.getFieldProps(t),type:i,className:g+` ${e.touched[t]&&e.errors[t]?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:t,id:"",placeholder:r}),i=="select"&&a.jsx("select",{...e.getFieldProps(t),className:g+` ${e.touched[t]&&e.errors[t]?" border-red-200 placeholder:text-red-400 text-red-400":" focus:border-zinc-300 border-zinc-200 "}`,children:q?a.jsx("option",{children:"Loading..."}):a.jsxs(a.Fragment,{children:[a.jsx("option",{value:"",children:"All"}),h==null?void 0:h.map(b=>a.jsx("option",{className:"",value:b[G],children:b[J]}))]})})]}),$=X().shape([...p].reduce((t,o)=>(o!=null&&o.required&&(t[o.key]=Y().required(o==null?void 0:o.hint)),t),{})),I={fromDate:w(),uptoDate:w(),department:"",violationMade:"",violationSection:""},e=Z({initialValues:I,enableReinitialize:!0,validationSchema:$,onSubmit:t=>{W(t)}}),W=t=>{R({fromDate:t==null?void 0:t.fromDate,uptoDate:t==null?void 0:t.uptoDate,violationId:t==null?void 0:t.violationMade}),M(o=>o+1)},B=()=>{l(!0),f.post(N,{},x()).then(t=>{var o,i;(o=t==null?void 0:t.data)!=null&&o.status&&V((i=t==null?void 0:t.data)==null?void 0:i.data),console.log("fp department list response => ",t)}).catch(t=>{console.log("error fp department list => ",t)}).finally(()=>{l(!1)})},T=t=>{console.log(t),l(!0),f.post(S,{departmentId:t},x()).then(o=>{var i,n;(i=o==null?void 0:o.data)!=null&&i.status&&L((n=o==null?void 0:o.data)==null?void 0:n.data),console.log("fp violation section list response => ",o)}).catch(o=>{console.log("error fp violation section list => ",o)}).finally(()=>{l(!1)})},O=t=>{l(!0);let o={sectionId:t,departmentId:e.values.department};f.post(j,o,x()).then(i=>{var n,r;(n=i==null?void 0:i.data)!=null&&n.status&&_((r=i==null?void 0:i.data)==null?void 0:r.data),console.log("fp violation list response => ",i)}).catch(i=>{console.log("error fp violation list => ",i)}).finally(()=>{l(!1)})},U=t=>{const o=t.target.name,i=t.target.value;o=="violationSection"&&O(i),o=="department"&&T(i)};return s.useEffect(()=>{B()},[]),a.jsxs(a.Fragment,{children:[a.jsxs("form",{onChange:t=>(e.handleChange(t),U(t)),onSubmit:e.handleSubmit,className:"w-full h-full p-4 mb-6 border border-zinc-200 bg-zinc-50",children:[a.jsx("h1",{className:"text-xl font-semibold uppercase text-center text-gray-700 border-b border-gray-400 mb-4 pb-1",children:"Violation Wise Report"}),a.jsxs("section",{className:"flex gap-4 flex-wrap my-6",children:[p==null?void 0:p.map(t=>P(t==null?void 0:t.key,t==null?void 0:t.title,t==null?void 0:t.type,t==null?void 0:t.width,t==null?void 0:t.hint,t==null?void 0:t.required,t==null?void 0:t.options,t==null?void 0:t.okey,t==null?void 0:t.ovalue)),((v=e.values)==null?void 0:v.violationMade)!=""&&a.jsxs("div",{className:"flex flex-wrap gap-2 text-sm w-full",children:[a.jsx("span",{className:"block w-full md:w-[10%]",children:"Violation Made :"}),Array.isArray(d)&&(d==null?void 0:d.map(t=>a.jsx(a.Fragment,{children:e.values.violationMade==(t==null?void 0:t.id)&&a.jsx("span",{className:"block w-full md:w-[85%] font-semibold",children:t==null?void 0:t.violation_name})})))]}),a.jsx("div",{className:"mt-4 w-full md:w-[30%] flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:mt-4",children:a.jsx("div",{className:" ",children:H?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-center",children:a.jsx(ot,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:" flex items-center border border-green-600 bg-green-500 hover:bg-green-600 text-white shadow-md rounded-sm  text-sm px-5 py-1",children:[a.jsx("span",{className:"",children:a.jsx(tt,{fontSize:""})}),a.jsx("span",{children:"Search Record"})]})})})]})]}),Object.keys(m).length!==0&&a.jsx(Q,{api:y,columns:A,requestBody:m,changeData:F,search:!1,loader:t=>z(t)})]})};export{jt as default};
