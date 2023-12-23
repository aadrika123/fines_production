import{a as y,r as x,j as s,n as p}from"./index-907a7e20.js";import{c as N,a as l,b as P,u as j}from"./formik.esm-62e66448.js";/* empty css              */import{P as v}from"./ProjectApiList-8b41c281.js";import{R as S}from"./Hourglass-c55758fd.js";import{a as C}from"./PowerupFunctions-c23fc72c.js";import{A}from"./ApiHeader-6d683756.js";import{A as E}from"./AxiosInterceptors-7e47d69c.js";import{u as F}from"./useSetTitle-518c2c6e.js";const _=()=>{const{api_changePassword:w,api_forgotPassword:k}=v(),u=y(),[d,r]=x.useState(!1),[h,i]=x.useState();F("Change Password");const f=N().shape({oldPassword:l().required("Enter old password"),newPassword:l().min(6,"Minimum six character !").max(50,"Too Long!").required("Enter new password !").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,"Password Must Contains (Capital, Smail, Number, Special) eg - Abc123#."),matchNewPassword:l().required("Confirm your new password").oneOf([P("newPassword"),null],"Password not match")}),e=j({initialValues:{oldPassword:"",newPassword:"",matchNewPassword:""},validationSchema:f,onSubmit:a=>{console.log("post data",a),g(a)}}),g=a=>{let o={password:a.oldPassword,newPassword:a.newPassword};console.log("request body before hit api => ",o),r(!0),E.post(w,o,A()).then(t=>{var n,c,m;((n=t==null?void 0:t.data)==null?void 0:n.status)==!0&&(console.log("successfully changed => ",t),p.success("Password changed successfully !!!"),u("/home")),((c=t==null?void 0:t.data)==null?void 0:c.status)==!1&&(p.error("Please try after sometime !!!"),i((m=t==null?void 0:t.data)==null?void 0:m.message)),r(!1)}).catch(t=>{console.log("change pwd error  => ",t),r(!1),i("Server Error !!!")})},b=a=>{let o=a.target.name,t=a.target.value;o=="mobile"&&e.setFieldValue("mobile",C(t,e.values.mobile,10))};return s.jsx(s.Fragment,{children:s.jsx("div",{className:"flex justify-center items-center mt-10",children:s.jsx("form",{onChange:b,className:"w-[30rem] px-8 rounded-lg bg-white shadow-xl mx-4 md:mx-0",children:s.jsx("div",{className:"grid grid-cols-12  md:px-0 ",children:s.jsx("div",{className:"w-full col-span-12 md:col-span-12 md:shadow-none py-10",children:s.jsxs("div",{className:"w-full  py-6  text-gray-700",children:[s.jsx("h1",{className:"text-center font-semibold my-1 flex justify-center",children:s.jsx("span",{className:"px-1 text-indigo-500 text-semibold text-2xl poppins uppercase",children:"Change Password"})}),s.jsxs("div",{className:"my-3 relative text-sm",children:[s.jsx("div",{className:"text-gray-600 static mb-1 font-semibold text-left poppins",children:"Old Password"}),s.jsxs("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-2",children:[s.jsx("input",{type:"password",...e.getFieldProps("oldPassword"),className:"form-control px-3 text-xs 2xl:text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md poppins w-full",placeholder:"Enter Your Old Password"}),s.jsx("div",{className:"w-full text-start",children:s.jsx("span",{className:"text-red-600 text-xs poppins text-start",children:e.touched.oldPassword&&e.errors.oldPassword?e.errors.oldPassword:null})})," "]})]}),s.jsxs("div",{className:"my-3 relative text-sm",children:[s.jsx("div",{className:"text-gray-600 static mb-1 font-semibold text-left poppins",children:"New Password"}),s.jsxs("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-2",children:[s.jsx("input",{type:"password",...e.getFieldProps("newPassword"),className:"form-control px-3 text-xs 2xl:text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md poppins w-full",placeholder:"Enter Your New Password"}),s.jsx("div",{className:"w-full text-start",children:s.jsx("span",{className:"text-red-600 text-xs poppins text-start",children:e.touched.newPassword&&e.errors.newPassword?e.errors.newPassword:null})})," "]})]}),s.jsxs("div",{className:"my-3 relative text-sm",children:[s.jsx("div",{className:"text-gray-600 static mb-1 font-semibold text-left poppins",children:"Confirm New Password"}),s.jsxs("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-2",children:[s.jsx("input",{type:"password",...e.getFieldProps("matchNewPassword"),className:"form-control px-3 text-xs 2xl:text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md poppins w-full",placeholder:"Confirm your new password"}),s.jsx("div",{className:"w-full text-start",children:s.jsx("span",{className:"text-red-600 text-xs poppins text-start",children:e.touched.matchNewPassword&&e.errors.matchNewPassword?e.errors.matchNewPassword:null})})," "]})]}),s.jsx("div",{className:" my-10"}),s.jsx("div",{className:"text-center mt-3 text-xs"}),s.jsxs("div",{className:"my-5 relative",children:[s.jsxs("div",{className:"text-red-600 text-sm font-semibold my-3 ",children:[" ",s.jsxs("span",{className:"",children:[" ",h]})]}),d?s.jsx("div",{className:"flex w-full justify-center",children:s.jsx(S,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}):s.jsx("button",{type:"submit",onClick:e.handleSubmit,disabled:d,className:" bg-indigo-500 hover:bg-indigo-700 px-5 shadow-xl py-2 w-full  rounded-md text-white text-lg font-semibold",children:"Submit"})]})]})})})})})})};export{_ as default};
