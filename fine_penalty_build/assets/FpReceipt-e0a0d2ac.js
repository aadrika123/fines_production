import{u as g,r as d,j as s}from"./index-09fb20e5.js";import{r as w,s as y}from"./swachhBharat-5aff38be.js";import{a as _,P as k}from"./ProjectApiList-38ebe721.js";import{B as E}from"./BarLoader-dc753c36.js";import{c as S,n as r,i as t}from"./PowerupFunctions-972dbaa1.js";import{A}from"./index.esm-b5c33ff4.js";import{B as P}from"./BottomErrorCard-1cad5fbc.js";import{u as B}from"./useSetTitle-dc668ca5.js";import{A as C}from"./ApiHeader-6d683756.js";import{Q as F}from"./QrCode-31a0614c.js";import"./iconBase-808696e5.js";import"./index-966ba417.js";import"./index-387d7a00.js";const O=()=>{var c;B("Receipt");const{tranNo:h}=g(),f=decodeURIComponent(h),{api_FpReceipt:j}=k(),[e,b]=d.useState(null),[v,i]=d.useState(!1),[p,u]=d.useState(""),[N,l]=d.useState(!1),o=(a,n)=>{u(n),i(a)};return d.useEffect(()=>{i(!1),l(!0),_.post(j,{transactionNo:f},C()).then(a=>{var n,m,x;console.log("getting challan 2 details => ",a),l(!1),(n=a==null?void 0:a.data)!=null&&n.status?b((m=a==null?void 0:a.data)==null?void 0:m.data):o(!0,S((x=a==null?void 0:a.data)==null?void 0:x.message))}).catch(a=>{console.log("getting challan 2 error => ",a),l(!1),o(!0,"Some error occured! Please try again later!!!")})},[]),s.jsxs(s.Fragment,{children:[v&&s.jsx(P,{activateBottomErrorCard:o,errorTitle:p}),N&&s.jsx(E,{}),s.jsx("div",{className:"fixed bottom-10 text-center  justify-center items-center  w-screen z-40",children:s.jsxs("button",{onClick:()=>window.print(),className:"ml-4 font-bold px-6 py-1 bg-indigo-500 text-white  text-xs md:text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:[s.jsx(A,{className:"inline text-lg"}),"Print"]})}),s.jsx("div",{className:"mx-auto print:block flex justify-center print:w-[98vw] print:drop-shadow-none print:shadow-none print:appearance-none",id:"printableArea",children:s.jsxs("div",{className:"md:w-[70%] print:w-auto overflow-x-hidden border-2 border-dashed border-black py-4 px-2 md:px-3 relative h-[80vh] print:h-full print:border-2 print:border-black font-semibold",children:[s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"flex flex-col justify-center items-center gap-x-4 md:absolute print:top-[4%] top-[5%] left-[25%] print:left-[5%]",children:[s.jsx("img",{src:w,alt:"Logo",srcset:"",className:"h-16 w-16 appearance-none mix-blend-darken"}),s.jsx("span",{className:"text-3xl font-bold uppercase",children:(c=e==null?void 0:e.ulbDetails)==null?void 0:c.ulb_name})]}),s.jsx("div",{className:"w-full flex justify-center",children:s.jsx("div",{className:"w-full flex justify-center mt-2",children:s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:" text-xl md:text-2xl underline font-bold px-2 md:px-8 ",children:"कार्यालय : राँची नगर निगम, राँची"}),s.jsx("div",{className:" font-bold px-2 md:px-8 text-base mt-2",children:"कचहरी रोड, राँची, पिन नo- 834001"}),s.jsx("div",{className:" font- px-2 md:px-8 text-sm",children:"E-mail ID- support@ranchimunicipal.com"}),s.jsx("div",{className:" font- px-2 md:px-8 text-sm font-normal",children:"Toll Free Number: 1800 890 4115"})]})})})]}),s.jsxs("div",{className:"grid grid-cols-12 items-center text-xs md:text-sm mt-8 gap-y-2 ",children:[s.jsxs("div",{className:"col-span-12 md:col-span-8 flex gap-2",children:[s.jsx("div",{className:"",children:"रसीद क्रमांक:- "}),s.jsx("div",{className:"font-normal",children:r(e==null?void 0:e.tran_no)})]}),s.jsxs("div",{className:"col-span-12 md:col-span-4 flex gap-2",children:[s.jsx("div",{className:"",children:"प्राप्ति दिनांक:- "}),s.jsx("div",{className:"font-normal",children:t(e==null?void 0:e.tran_date)})]}),s.jsxs("div",{className:"col-span-12 md:col-span-8 flex gap-2",children:[s.jsx("div",{className:"",children:"प्राप्त चालान क्रमांक:- "}),s.jsx("div",{className:"font-normal",children:r(e==null?void 0:e.challan_no)})]}),s.jsxs("div",{className:"col-span-12 md:col-span-4 flex gap-2",children:[s.jsx("div",{className:"",children:"चालान दिनांक:- "}),s.jsx("div",{className:"font-normal",children:t(e==null?void 0:e.challan_date)})]}),s.jsxs("div",{className:"col-span-12 flex gap-2",children:[s.jsx("div",{className:"",children:"विभाग:- "}),s.jsx("div",{className:"font-normal",children:r(e==null?void 0:e.department)})]}),s.jsxs("div",{className:"col-span-12 flex gap-2",children:[s.jsx("div",{className:"w-full md:w-[10%] print:w-[15%]",children:"कृत का विवरण:- "}),s.jsx("div",{className:"font-normal",children:r(e==null?void 0:e.violation_name)})]})]}),s.jsx("div",{className:"flex justify-between mb-2 pt-4 gap-2 mt-6",children:s.jsxs("div",{className:"text-start text-xs md:text-sm w-full flex flex-wrap gap-y-2 ",children:[s.jsxs("div",{className:"w-full flex gap-2 flex-wrap",children:[s.jsx("div",{className:"",children:" श्रीमान/श्रीमती "}),s.jsx("div",{className:"w-[45%] border-dashed border-b-2 border-gray-500 font-normal ",children:r(e==null?void 0:e.full_name)}),s.jsx("div",{children:"से प्राप्त रुपये"}),s.jsx("div",{className:"w-[25%] border-dashed border-b-2 border-gray-500 font-normal ",children:r(e==null?void 0:e.amount)}),s.jsx("div",{children:"की राशि "}),s.jsx("div",{className:"w-[45%] border-dashed border-b-2 border-gray-500 font-normal ",children:r(e==null?void 0:e.amount_in_words)}),s.jsx("div",{children:"(शब्दों में)। नकद/चेक/डिमांड ड्राफ्ट/बैंकर्स चेक संख्या द्वारा "}),s.jsx("div",{className:"w-[25%] border-dashed border-b-2 border-gray-500 font-normal ",children:r(e==null?void 0:e.payment_mode)}),s.jsx("div",{children:"की ओर "}),s.jsx("div",{className:"w-[25%] border-dashed border-b-2 border-gray-500 font-normal ",children:t(e==null?void 0:e.tran_date)}),s.jsx("div",{children:"दिनांक पर अंकित "}),s.jsx("div",{className:"w-[25%] border-dashed border-b-2 border-gray-500 font-normal ",children:r(e==null?void 0:e.bank_name)}),s.jsx("div",{children:"बैंक,"}),s.jsx("div",{className:"w-[25%] border-dashed border-b-2 border-gray-500 font-normal ",children:r(e==null?void 0:e.branch_name)}),s.jsx("div",{children:"बैंक का स्थान।"}),s.jsx("div",{children:"रु."}),s.jsx("div",{className:"w-[25%] border-dashed border-b-2 border-gray-500 font-normal ",children:r(e==null?void 0:e.amount)}),s.jsx("div",{children:"(आकृति में)"}),s.jsxs("div",{className:"w-[45%] border-dashed border-b-2 border-gray-500 font-normal ",children:[r(e==null?void 0:e.amount_in_words)," ।"]})]}),s.jsxs("div",{className:"w-full mt-16 flex justify-between items-center",children:[s.jsx("div",{className:"w-[30%]",children:s.jsx(F,{url:window.location.href+"/direct",size:90})}),s.jsxs("div",{className:"w-[40%] flex flex-col gap-2 ",children:[s.jsx("div",{className:"flex gap-1 w-full",children:s.jsx("div",{className:"w-full border-b-2 border-dashed border-gray-500"})}),s.jsx("div",{children:"प्राधिकृत अधिकारी/ कर्मचारी का हस्ताक्षर"})]})]})]})}),s.jsx("div",{className:"pt-1 mt-4 text-xs md:text-sm font-normal",children:"Note  :- Payment by cheque is subject to clearance."}),s.jsx("div",{className:"flex justify-start items-center mt-6 font-normal text-xs",children:"अधिक जानकारी के लिए संपर्क करे : udhd.jharkhand.gov.in, 1800 890 4115 or 0651-3500700"}),s.jsx("div",{className:"flex justify-center items-center mt-4",children:s.jsx("img",{src:y,alt:"",className:"h-10 opacity-70"})}),s.jsx("div",{className:"flex justify-center items-center mt-4 text-xs font-normal",children:"यह रसीद कंप्यूटर द्वारा बनाई गई है और इसमें हस्ताक्षर की आवश्यकता नहीं है।"})]})})]})};export{O as default};
