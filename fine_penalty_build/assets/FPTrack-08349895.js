import{a as A,g as F,r as l,j as r}from"./index-907a7e20.js";import{c as B,a as b,u as H}from"./formik.esm-62e66448.js";import{P}from"./ProjectApiList-8b41c281.js";import{L as R}from"./ListTableConnect-c0a63d23.js";import{R as E}from"./Hourglass-c55758fd.js";import{R as L}from"./index.esm-bba16dca.js";import{n,i as $,d as T}from"./PowerupFunctions-c23fc72c.js";import{u as V}from"./useSetTitle-518c2c6e.js";import{F as f}from"./index.esm-a53eed8e.js";import{B as q}from"./index.esm-35fb02c6.js";import"./index-bfc0b3f7.js";import"./index-387d7a00.js";import"./index.esm-fd3237ba.js";import"./iconBase-cbbe9087.js";import"./index.esm-699b7b11.js";import"./ApiHeader-6d683756.js";import"./ShimmerEffectInline-88efb4eb.js";const se=()=>{V("Search Challan");const{api_FPTrack:w}=P(),d=A(),i=F("userDetails"),y=[{Header:"Sl.No.",Cell:({row:e})=>r.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Name",accessor:"full_name",Cell:({cell:e})=>{var a;return n((a=e.row.original)==null?void 0:a.full_name)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:e})=>{var a;return n((a=e.row.original)==null?void 0:a.mobile)}},{Header:"Application No",accessor:"application_no",Cell:({cell:e})=>{var a;return n((a=e.row.original)==null?void 0:a.application_no)}},{Header:"Challan No",accessor:"challan_no",Cell:({cell:e})=>{var a;return n((a=e.row.original)==null?void 0:a.challan_no)}},{Header:"Challan Date",accessor:"challan_date",Cell:({cell:e})=>{var a;return $((a=e.row.original)==null?void 0:a.challan_date)},className:"w-[7%]"},{Header:"Violation Name",accessor:"violation_name",Cell:({cell:e})=>{var a;return n((a=e.row.original)==null?void 0:a.violation_name)}},{Header:"Penalty Amount",accessor:"total_amount",Cell:({cell:e})=>{var a;return T((a=e.row.original)==null?void 0:a.total_amount)}},{Header:"Has Expired",accessor:"hasExpired",Cell:({cell:e})=>{var a;return n((a=e.row.original)==null?void 0:a.has_expired)}},{Header:"Action",Cell:({cell:e})=>{var a,x,u,g;return r.jsxs("div",{className:"flex items-center flex-wrap md:flex-nowrap flex-row gap-2 ",children:[r.jsxs("button",{onClick:()=>{var s,o;d(`/challan/${(o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.id}`)},className:`border border-sky-700 text-sky-700 w-24 py-1 rounded-sm shadow-md hover:shadow-xl hover:bg-sky-700 \r
                    hover:text-white flex items-center justify-center gap-1 `,children:[r.jsx(f,{})," Challan"]}),(i==null?void 0:i.user_type)=="JSK"&&!((x=(a=e==null?void 0:e.row)==null?void 0:a.original)!=null&&x.payment_status)&&r.jsxs("button",{onClick:()=>{var s,o;d(`/fp-pay/${(o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.id}`)},className:`border border-orange-600 text-orange-500 w-24 py-1 rounded-sm shadow-md hover:shadow-xl hover:bg-orange-600 \r
                            hover:text-white flex items-center justify-center gap-1 `,children:[r.jsx(q,{})," Pay"]}),(i==null?void 0:i.user_type)=="JSK"&&((g=(u=e==null?void 0:e.row)==null?void 0:u.original)==null?void 0:g.payment_status)&&r.jsxs("button",{onClick:()=>{var s,o;d(`/fp-receipt/${(o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.transaction_no}`)},className:`border border-green-600 text-green-600 w-24 py-1 rounded-sm shadow-md hover:shadow-xl hover:bg-green-600 \r
                    hover:text-white flex items-center justify-center gap-1 `,children:[r.jsx(f,{})," Receipt"]})]})}}],[j,c]=l.useState({}),[N,m]=l.useState(0),[h,v]=l.useState(!1),[C,p]=l.useState(!1),S=B({searchBy:b().required("Select filter type"),entry:b().required("Enter the parameter")}),t=H({initialValues:{searchBy:"",entry:""},validationSchema:S,onSubmit:e=>{k(e)}}),_=()=>{t.setFieldValue("searchBy",""),t.setFieldValue("entry",""),c({}),p(!1),m(e=>e+1)},k=e=>{p(!0),c({[e==null?void 0:e.searchBy]:e==null?void 0:e.entry}),m(a=>a+1)};return r.jsx(r.Fragment,{children:r.jsxs("div",{className:"w-full flex flex-col gap-5 justify-center items-center p-4 md:p-6 transition-all duration-200",children:[r.jsx("aside",{className:" w-full bg-slate-50 shadow-md h-max",children:r.jsxs("form",{onSubmit:t.handleSubmit,onChange:t.handleChange,className:"bg-white poppins p-4",children:[r.jsx("h1",{className:"text-xl font-semibold uppercase text-center text-gray-700 border-b border-gray-400 mb-4 pb-1",children:"Search Challan"}),r.jsxs("div",{className:"flex flex-row flex-wrap gap-x-4 items-center gap-y-2 pb-4 mb-2 border-b",children:[r.jsxs("div",{className:"w-full md:w-[25%]",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Search By",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...t.getFieldProps("searchBy"),className:`${t.errors.searchBy?"text-red-400 font-semibold border border-solid border-red-400 placeholder-red-300 shadow-red-100 ":"text-gray-700 font-normal border border-solid border-gray-400 placeholder-gray-400 "} cursor-pointer w-full px-3 py-1 text-sm  bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-sm`,children:[r.jsx("option",{value:"",children:"Select"}),r.jsx("option",{value:"applicationNo",children:"Application Number"}),r.jsx("option",{value:"mobile",children:"Mobile Number"}),r.jsx("option",{value:"challanNo",children:"Challan Number"})]})]}),r.jsxs("div",{className:"w-full md:w-[25%] ",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Parameter",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsx("input",{type:"text",...t.getFieldProps("entry"),placeholder:"Enter the parameter",className:" w-full px-3 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-400 shadow-md"})]}),r.jsxs("div",{className:"mt-4 w-full md:w-[30%] flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:mt-6",children:[r.jsx("div",{className:" ",children:h?r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex justify-center",children:r.jsx(E,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):r.jsxs("button",{type:"submit",className:" flex items-center border border-green-600 bg-green-500 hover:bg-green-600 text-white shadow-md rounded-sm  text-sm px-5 py-1",children:[r.jsx("span",{className:"",children:r.jsx(L,{fontSize:""})}),r.jsx("span",{children:"Search Record"})]})}),C&&r.jsx("div",{className:"",onClick:()=>_(),children:!h&&r.jsx("div",{className:"cursor-pointer text-center w-full border border-indigo-600 bg-indigo-500 hover:bg-indigo-600 text-white shadow-md rounded-sm text-sm font-semibold px-5 py-1",children:"View All Applications"})})]})]})]})}),r.jsx("aside",{className:"w-full overflow-clip transition-all duration-300 h-full",children:r.jsx(R,{api:w,columns:y,requestBody:j,changeData:N,search:!1,loader:e=>v(e)})})]})})};export{se as default};
