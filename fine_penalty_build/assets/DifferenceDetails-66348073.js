import{u as b,r as o,j as a}from"./index-09fb20e5.js";import{A as N}from"./AxiosInterceptors-c9687ad8.js";import{B as S}from"./BottomErrorCard-1cad5fbc.js";import{S as E}from"./ShimmerEffectInline-81eae6df.js";import{n as r,c as y}from"./PowerupFunctions-972dbaa1.js";import{A}from"./ApiHeader-6d683756.js";import{P as v}from"./ProjectApiList-38ebe721.js";import"./index-966ba417.js";import"./index-387d7a00.js";const T=()=>{const{id:x}=b(),{api_compData:f}=v(),[s,g]=o.useState([]),[c,e]=o.useState(!1),[h,l]=o.useState(!1),[j,m]=o.useState(""),n=(t,i)=>{l(t),m(i)},u=()=>{e(!0),N.post(f,{applicationId:x},A()).then(t=>{var i,d,p;console.log("getting comparision chart response => ",t),(i=t==null?void 0:t.data)!=null&&i.status?g((d=t==null?void 0:t.data)==null?void 0:d.data):n(!0,y((p=t==null?void 0:t.data)==null?void 0:p.message))}).catch(t=>{console.log("error getting comp chart => ",t),n(!0,"Server Error, Please try again later !!!")}).finally(()=>{e(!1),l(!1)})};return o.useEffect(()=>{u()},[]),a.jsxs(a.Fragment,{children:[h&&a.jsx(S,{activateBottomErrorCard:n,errorTitle:j}),a.jsxs("div",{className:"w-full flex flex-col gap-5  p-4 md:p-6 transition-all duration-200",children:[a.jsx("h1",{className:"text-2xl font-semibold uppercase text-center text-gray-700 border-b border-gray-400 mb-4 pb-1 tracking-widest",children:"Comparision Chart"}),c&&a.jsx(E,{}),!c&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"bg-white p-4",children:a.jsxs("table",{className:"w-full grid grid-cols-12",children:[a.jsxs("tr",{className:"col-span-12 grid grid-cols-12 items-center bg-slate-200 p-2 text-slate-600 text-lg gap-x-4",children:[a.jsx("th",{className:"col-span-4 text-start font-bold ",children:"#"}),a.jsx("th",{className:"col-span-4 text-start font-bold ",children:"Apply Data"}),a.jsx("th",{className:"col-span-4 text-start font-bold ",children:"Approved Data"})]}),(s==null?void 0:s.length)>0?a.jsx(a.Fragment,{children:s==null?void 0:s.map(t=>a.jsx(a.Fragment,{children:a.jsxs("tr",{className:"col-span-12 grid grid-cols-12 items-center px-2 py-1.5 border-b gap-x-4",children:[a.jsx("td",{className:"col-span-4 font-semibold",children:t==null?void 0:t.displayString}),a.jsx("td",{className:`col-span-4 ${r(t==null?void 0:t.final)!=r(t==null?void 0:t.applied)&&" text-red-500"}`,children:r(t==null?void 0:t.applied)}),a.jsx("td",{className:`col-span-4 ${r(t==null?void 0:t.final)!=r(t==null?void 0:t.applied)&&" text-green-600"}`,children:r(t==null?void 0:t.final)})]})}))}):a.jsx("tr",{className:"col-span-12 mt-4 w-full border border-red-200 bg-red-100 text-center text-red-500 py-2 text-lg",children:a.jsx("td",{colSpan:3,className:"flex justify-center",children:"Oops! No Comparision Data available."})})]})})})]})]})};export{T as default};
