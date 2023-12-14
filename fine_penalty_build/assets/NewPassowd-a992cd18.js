import{u as b,r as w,a as j,j as e,n as l}from"./index-09fb20e5.js";import{c as N,a as c,b as y,u as v}from"./formik.esm-e2b7289d.js";/* empty css              */import{R as k}from"./Hourglass-04fbe6a1.js";import{a as P,P as S}from"./ProjectApiList-38ebe721.js";import{i as F}from"./fp-d98bddc3.js";import{u as A}from"./DynamicData-89ec0084.js";function _(){var o;const{api_setPassword:n}=S(),{token:m,id:x}=b(),u=N().shape({password:c().min(6,"Minimum six character !").max(50,"Too Long!").required("Password required").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,"Password Must Contains (Capital, Smail, Number, Special) eg - Abc123#."),cpassword:c().label("confirm password").required().oneOf([y("password"),null],"Passwords must match")}),[g,t]=w.useState(!1),s=v({initialValues:{password:"",cpassword:""},validationSchema:u,onSubmit:a=>{f(a)}}),h=j(),p={timeout:6e4,headers:{Authorization:`Bearer ${m}`,Accept:"application/json","Content-Type":"application/json","API-KEY":"eff41ef6-d430-4887-aa55-9fcf46c72c99"}},f=a=>{t(!0);let d={id:x,password:a==null?void 0:a.password};console.log("--1--before login send...",d),P.post(n,d,p).then(function(r){var i;console.log("set password response => ",r.data),r.data.status==!0?(l.success("Password created successfully !!!"),h("/")):(console.log("false..."),t(!1),l.error((i=r==null?void 0:r.data)==null?void 0:i.message))}).catch(function(r){t(!1),console.log("set password error => ",r),l.error("Server Error")})};return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:" border-b border-gray-200 bg-white darks:bg-gray-800 darks:border-gray-800",children:e.jsx("div",{className:"container mx-auto xl:max-w-6xl ",children:e.jsx("nav",{className:"flex flex-row flex-nowrap items-center justify-center mt-0 py-4 px-6 ",id:"desktop-menu",children:e.jsx("a",{className:"flex items-center py-2 ltr:mr-4 rtl:ml-4 text-xl cursor-default",children:e.jsxs("div",{className:"flex gap-2",children:[" ",e.jsx("span",{className:"w-7",children:e.jsx("img",{src:(o=A())==null?void 0:o.ulb_logo,alt:"",srcset:""})})," ",e.jsx("span",{className:"font-bold text-xl",children:"Ranchi Nagar Nigam, Ranchi"})]})})})})}),e.jsx("main",{className:" bg-gray-100 flex justify-center items-center md:h-[80vh]",children:e.jsx("div",{className:"py-8 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-40",children:e.jsx("div",{className:"mx-auto px-4 ",children:e.jsxs("div",{className:"flex flex-wrap flex-row justify-center gap-2 items-center",children:[e.jsx("div",{className:" px-4 w-full md:w-[30%]",children:e.jsx("div",{className:"max-w-full w-full px-2 sm:px-12 lg:pr-20 mb-12 lg:mb-0",children:e.jsx("div",{className:"relative",children:e.jsx("div",{className:"p-6 sm:py-8 sm:px-12 rounded-lg bg-white darks:bg-gray-800 shadow-xl",children:e.jsxs("form",{onSubmit:s.handleSubmit,onChange:s.handleChange,children:[e.jsx("div",{className:"text-center",children:e.jsx("h1",{className:"text-2xl leading-normal mb-3 font-bold text-gray-800 darks:text-gray-300 text-center",children:"Set Your New Password"})}),e.jsx("hr",{className:"block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700"}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("label",{htmlFor:"inputemail",className:"inline-block mb-2",children:["New Password ",e.jsx("span",{className:"font-semibold text-red-500",children:"*"})]}),e.jsx("input",{...s.getFieldProps("password"),className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600",defaultValue:!0,"aria-label":"password",type:"password",required:!0}),e.jsx("span",{className:"text-red-600 text-xs",children:s.touched.password&&s.errors.password?s.errors.password:null})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"flex flex-wrap flex-row",children:e.jsx("div",{className:"flex-shrink max-w-full w-1/2",children:e.jsxs("label",{htmlFor:"inputpass",className:"inline-block mb-2",children:["Confirm Password ",e.jsx("span",{className:"font-semibold text-red-500",children:"*"})]})})}),e.jsx("input",{...s.getFieldProps("cpassword"),className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600","aria-label":"password",type:"password",defaultValue:!0,required:!0}),e.jsx("span",{className:"text-red-600 text-xs",children:s.touched.cpassword&&s.errors.cpassword?s.errors.cpassword:null})]}),e.jsx("div",{className:"grid mb-4",children:g?e.jsx("div",{className:"flex justify-center",children:e.jsx(k,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}):e.jsx("button",{type:"submit",className:"py-2 px-4 inline-block text-center rounded leading-normal text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:"Set Password"})})]})})})})}),e.jsx("div",{className:"px-4 w-full md:w-[45%]",children:e.jsxs("div",{className:"text-center mt-6 lg:mt-0",children:[e.jsx("img",{src:F,alt:"welcome",className:"w-[60%] h-auto mx-auto hue-rotate-[90deg]"}),e.jsx("div",{className:"px-4 mt-12",children:e.jsx("h1",{className:"text-bold text-4xl mb-2",children:"Fines & Penalties Admin Portal"})})]})})]})})})}),e.jsx("footer",{className:" bg-white py-6 border-t border-gray-200 darks:bg-gray-800 darks:border-gray-800",children:e.jsx("div",{className:"container mx-auto px-4 xl:max-w-6xl ",children:e.jsx("div",{className:"mx-auto px-4",children:e.jsxs("div",{className:"flex flex-wrap flex-row -mx-4",children:[e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-left md:rtl:text-right"}),e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-right md:rtl:text-left"})]})})})})]})}export{_ as default};
