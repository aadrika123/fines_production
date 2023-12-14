import{r as a,j as s,n as Q}from"./index-0e0a28cb.js";import{L as W}from"./ListTable-b081b4fb.js";import{C as X}from"./index.esm-940f871c.js";import{A}from"./ApiHeader-6d683756.js";import{u as Fe}from"./useSetTitle-7bd31174.js";import{A as F}from"./AxiosInterceptors-0714ba55.js";import{P as Ee}from"./ProjectApiList-593559e4.js";import{n as x,i as Z,c as z,a as Re,b as v}from"./PowerupFunctions-f3fc3734.js";import{S as ee}from"./ShimmerEffectInline-30463533.js";import{B as $e}from"./BarLoader-9fd6407e.js";import{B as ze}from"./BottomErrorCard-431f6405.js";import{R as He}from"./index.esm-1306c213.js";import{c as Me,a as Ve,u as Ie}from"./formik.esm-0d40760e.js";import{F as qe}from"./index.esm-d66d4994.js";import{A as Pe}from"./ApiHeader2-b363f7b8.js";import"./index-ce8f0289.js";import"./index-387d7a00.js";import"./index.esm-eda44f95.js";import"./iconBase-93eb2035.js";import"./index-c123df7b.js";const lr=()=>{Fe("Violation Master");const{api_addRole:re,api_updateRole:se,api_deletedRole:te,api_listRole:H,api_addUser:oe,api_updateUser:ie,api_deletedUser:le,api_listUser:ne,api_assignRole:ae}=Ee(),h=a.useRef(),[b,N]=a.useState(!1),[de,M]=a.useState(!1),[ce,me]=a.useState(""),[pe,xe]=a.useState(!1),[c,he]=a.useState(""),[E,V]=a.useState(null),[w,j]=a.useState([]),[m,fe]=a.useState([]),[d,R]=a.useState(null),[ge,I]=a.useState(!1),[t,q]=a.useState("role"),[y,P]=a.useState(null),[C,U]=a.useState(null),[B,k]=a.useState(null),L="border border-sky-800 text-sky-800 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white",ue="border border-amber-700 text-amber-700 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-amber-700 hover:text-white",T="border border-red-400 text-red-400 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-red-800 hover:text-white",D="float-right bg-[#1A4D8C] px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-[#113766] hover:text-white text-white flex items-center",be="text-gray-800 text-sm",O="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",we="block w-full border focus:outline-none drop-shadow-sm focus:drop-shadow-md p-1 text-sm text-slate-500 file:mr-4 file:py-1 file:px-4 file:rounded-sm file:border file:text-xs file:font-semibold file:bg-zinc-100 hover:file:bg-zinc-200",Ne=e=>`px-4 py-1 text-sm bg-${e}-500 hover:bg-${e}-600 select-none rounded-sm hover:drop-shadow-md text-white`,Y=e=>`border border-slate-700 ${e?"bg-slate-700 text-white":"text-slate-700 shadow-2xl shadow-slate-700"} mx-1 px-3 py-1 rounded-sm hover:bg-slate-700 hover:text-white text-sm`,f=(e,r)=>{xe(e),me(r)},g=(e,r=null)=>{switch(he(e),console.log(e,":::::::::",t,r),e){case"add":break;case"edit":R(r),t=="role"&&l.setFieldValue("role",r==null?void 0:r.role_name),t=="user"&&(l.setFieldValue("firstName",(r==null?void 0:r.first_name)||""),l.setFieldValue("middleName",(r==null?void 0:r.middle_name)||""),l.setFieldValue("lastName",(r==null?void 0:r.last_name)||""),l.setFieldValue("mobileNo",r==null?void 0:r.mobile),l.setFieldValue("email",r==null?void 0:r.email),l.setFieldValue("designation",r==null?void 0:r.designation),l.setFieldValue("employeeCode",r==null?void 0:r.employee_code),l.setFieldValue("address",r==null?void 0:r.address),l.setFieldValue("signature",r==null?void 0:r.signature),l.setFieldValue("profile",r==null?void 0:r.profile_image));break;case"delete":V(r);break;case"assign":R(r),V(r==null?void 0:r.id),k((r==null?void 0:r.wf_role_id)||"");break}h.current.showModal()},je=[{Header:"#",Cell:({row:e})=>s.jsx("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Roles",accessor:"role_name",Cell:({cell:e})=>{var r;return x((r=e.row.original)==null?void 0:r.role_name)}},{Header:"Created At",accessor:"date",Cell:({cell:e})=>{var r;return Z((r=e.row.original)==null?void 0:r.date)}},{Header:"Action",accessor:"id",Cell:({cell:e})=>s.jsxs("div",{className:"flex flex-row flex-wrap gap-2",children:[s.jsx("button",{onClick:()=>{var r;return g("edit",(r=e==null?void 0:e.row)==null?void 0:r.original)},className:L,children:"Edit"}),s.jsx("button",{onClick:()=>{var r,o;return g("delete",(o=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:o.id)},className:T,children:"Delete"})]})}],ye=[{Header:"#",Cell:({row:e})=>s.jsx("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Profile",accessor:"profile",Cell:({cell:e})=>{var r,o;return s.jsx(s.Fragment,{children:(r=e.row.original)!=null&&r.profile_image?s.jsx("img",{className:"border drop-shadow-lg h-8 rounded-sm",src:(o=e.row.original)==null?void 0:o.profile_image,alt:"profile",srcset:""}):"N/A"})}},{Header:"Name",accessor:"user_name",Cell:({cell:e})=>{var r;return x((r=e.row.original)==null?void 0:r.user_name)}},{Header:"Role",accessor:"role_name",Cell:({cell:e})=>{var r;return x((r=e.row.original)==null?void 0:r.role_name)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:e})=>{var r;return x((r=e.row.original)==null?void 0:r.mobile)}},{Header:"E-mail",accessor:"email",Cell:({cell:e})=>{var r;return x((r=e.row.original)==null?void 0:r.email)}},{Header:"Employee Code",accessor:"employee_code",Cell:({cell:e})=>{var r;return x((r=e.row.original)==null?void 0:r.employee_code)}},{Header:"Designation",accessor:"designation",Cell:({cell:e})=>{var r;return x((r=e.row.original)==null?void 0:r.designation)}},{Header:"Address",accessor:"address",Cell:({cell:e})=>{var r;return x((r=e.row.original)==null?void 0:r.address)}},{Header:"Signature",accessor:"signature",Cell:({cell:e})=>{var r,o;return s.jsx(s.Fragment,{children:(r=e.row.original)!=null&&r.signature?s.jsx("img",{className:"border drop-shadow-lg h-8 rounded-sm",src:(o=e.row.original)==null?void 0:o.signature,alt:"signature",srcset:""}):"N/A"})}},{Header:"Created At",accessor:"date",Cell:({cell:e})=>{var r;return Z((r=e.row.original)==null?void 0:r.date)}},{Header:"Action",accessor:"id",Cell:({cell:e})=>s.jsxs("div",{className:"flex items-center flex-wrap flex-row gap-1",children:[s.jsx("button",{onClick:()=>{var r;return g("edit",(r=e==null?void 0:e.row)==null?void 0:r.original)},className:L,children:"Edit"}),s.jsx("button",{onClick:()=>{var r,o;return g("delete",(o=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:o.id)},className:T,children:"Delete"}),s.jsx("button",{onClick:()=>{var r;return g("assign",(r=e==null?void 0:e.row)==null?void 0:r.original)},className:ue,children:"Assign Role"})]})}],_=[{title:"Role",key:"role",width:` w-full ${t=="role"?"block ":"hidden "}`,type:t=="role"?"text":"select",hint:"Enter role",required:!0,options:m,okey:"id",ovalue:"role_name",required:t=="role"&&!0},{title:"First Name",key:"firstName",width:`md:w-[31%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter first name",required:t=="user"&&!0},{title:"Middle Name",key:"middleName",width:`md:w-[31%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter middle name",required:!1},{title:"Last Name",key:"lastName",width:`md:w-[31%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter last name",required:t=="user"&&!0},{title:"Mobile No.",key:"mobileNo",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter mobile no.",required:t=="user"&&!0},{title:"E-Mail",key:"email",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"email",hint:"Enter email",required:t=="user"&&!0},{title:"Employee Code",key:"employeeCode",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter employee code",required:t=="user"&&!0},{title:"Designation",key:"designation",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter designation",required:t=="user"&&!0},{title:"Upload Profile Picture",key:"profile",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"file",hint:"Enter employee code",required:!1},{title:"Upload Signature",key:"signature",width:`md:w-[48%] w-full ${t=="user"?"block ":"hidden "}`,type:"file",hint:"Enter employee code",required:!1},{title:"Address",key:"address",width:` w-full ${t=="user"?"block ":"hidden "}`,type:"text",hint:"Enter address",required:t=="user"&&!0}],Ce=Me().shape([..._].reduce((e,r)=>(r!=null&&r.required&&(e[r.key]=Ve().required(r==null?void 0:r.hint)),e),{})),l=Ie({initialValues:{role:"",firstName:"",middleName:"",lastName:"",mobileNo:"",email:"",designation:"",employeeCode:"",address:"",signature:"",profile:""},enableReinitialize:!0,validationSchema:Ce,onSubmit:e=>{G(e)}}),$=()=>{j([]),N(!0);let e;t=="role"&&(e=H),t=="user"&&(e=ne),F.post(e,{},A()).then(r=>{var o,i,n;(o=r==null?void 0:r.data)!=null&&o.status?j((i=r==null?void 0:r.data)==null?void 0:i.data):(f(!0,z((n=r==null?void 0:r.data)==null?void 0:n.message)),j([])),console.log("user role list response => ",r)}).catch(r=>{f(!0,"Server Error! Please try again later."),j([]),console.log("error user role list => ",r)}).finally(()=>{N(!1),R(null),P(null),U(null),k(null),h.current.close()})},ke=(e,r="",o,i="",n="",p=!1,u=[],S="",Ae="")=>s.jsxs("div",{className:`flex flex-col ${i} `,children:[r!=""&&s.jsxs("label",{htmlFor:e,className:be,children:[r," ",p&&s.jsx("span",{className:"text-red-500 text-xs font-bold",children:"*"})," : "]}),o!="select"&&o!="file"&&s.jsx("input",{...l.getFieldProps(e),type:o,className:O+` ${l.touched[e]&&l.errors[e]?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:e,id:"",placeholder:n}),o=="file"&&s.jsx("input",{type:"file",className:we+`${l.touched[e]&&l.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400 file:border-red-200 file:text-red-400":" focus:border-zinc-300 border-zinc-200 file:border-zinc-300 file:text-gray-600"}`,name:e,id:"",placeholder:n,accept:".jpg, .jpeg, .png"}),o=="select"&&s.jsx("select",{...l.getFieldProps(e),className:O+` ${l.touched[e]&&l.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400":" focus:border-zinc-300 border-zinc-200 "}`,children:ge?s.jsx("option",{children:"Loading..."}):s.jsxs(s.Fragment,{children:[s.jsx("option",{value:null,children:"Select"}),typeof u=="object"&&(u==null?void 0:u.map(K=>s.jsx("option",{className:"",value:K[S],children:K[Ae]})))]})})]}),G=e=>{M(!0),h.current.close();let r,o,i=new FormData;switch(c){case"add":t=="role"&&(r={roleName:e==null?void 0:e.role},o=re),t=="user"&&(i.append("firstName",e==null?void 0:e.firstName),i.append("middleName",e==null?void 0:e.middleName),i.append("lastName",e==null?void 0:e.lastName),i.append("mobileNo",e==null?void 0:e.mobileNo),i.append("email",e==null?void 0:e.email),i.append("designation",e==null?void 0:e.designation),i.append("employeeCode",e==null?void 0:e.employeeCode),i.append("address",e==null?void 0:e.address),y&&i.append("signature",y),C&&i.append("profile",C),o=oe);break;case"edit":t=="role"&&(r={roleId:d==null?void 0:d.id,roleName:e==null?void 0:e.role},o=se),t=="user"&&(i.append("userId",d==null?void 0:d.id),i.append("firstName",e==null?void 0:e.firstName),i.append("middleName",e==null?void 0:e.middleName),i.append("lastName",e==null?void 0:e.lastName),i.append("mobileNo",e==null?void 0:e.mobileNo),i.append("email",e==null?void 0:e.email),i.append("designation",e==null?void 0:e.designation),i.append("employeeCode",e==null?void 0:e.employeeCode),i.append("address",e==null?void 0:e.address),y&&i.append("signature",y),C&&i.append("profile",C),o=ie);break;case"delete":t=="role"&&(o=te,r={roleId:E}),t=="user"&&(o=le,i.append("userId",E));break}F.post(o,t=="user"?i:r,t=="user"?Pe():A()).then(n=>{var p,u,S;(p=n==null?void 0:n.data)!=null&&p.status?(Q.success((u=n==null?void 0:n.data)==null?void 0:u.message),$()):f(!0,z((S=n==null?void 0:n.data)==null?void 0:S.message)),console.log("fp violation response => ",n)}).catch(n=>{f(!0,"Server Error! Please try again later."),console.log("error violation list => ",n)}).finally(()=>{M(!1),l.resetForm()})},_e=()=>{I(!0),F.post(H,{},A()).then(e=>{var r,o;(r=e==null?void 0:e.data)!=null&&r.status&&fe((o=e==null?void 0:e.data)==null?void 0:o.data),console.log("fp department list response => ",e)}).catch(e=>{console.log("error fp department list => ",e)}).finally(()=>{I(!1)})},J=e=>{var i,n;const r=e.target.name,o=e.target.value;if(r=="mobileNo"&&l.setFieldValue("mobileNo",Re(o,l.values.mobileNo,10)),r=="signature"){let p=(i=e==null?void 0:e.target)==null?void 0:i.files[0];if(!v(p)){l.setFieldValue("signature","");return}P(p)}if(r=="profile"){let p=(n=e==null?void 0:e.target)==null?void 0:n.files[0];if(!v(p)){l.setFieldValue("profile","");return}U(p)}r=="roleAssign"&&k(o)},Se=()=>{N(!0);let e={userId:E,roleId:B};F.post(ae,e,A()).then(r=>{var o,i;(o=r==null?void 0:r.data)!=null&&o.status?(Q.success("Role Assigned Successfully !!!"),$()):f(!0,z((i=r==null?void 0:r.data)==null?void 0:i.message)),console.log("fp role assign response => ",r)}).catch(r=>{f(!0,"Server Error! Please try again later."),console.log("error fp role assign => ",r)}).finally(()=>{N(!1),h.current.close()})};return a.useEffect(()=>{t!="department"&&_e(),$()},[t]),s.jsxs(s.Fragment,{children:[de&&s.jsx($e,{}),pe&&s.jsx(ze,{activateBottomErrorCard:f,errorTitle:ce}),s.jsxs("div",{className:"poppins p-4 px-6",children:[s.jsx("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-[0.5rem]",children:"User Role Master"}),s.jsx("div",{className:"w-full h-[0.15rem] bg-gray-400 mb-6"}),s.jsxs("div",{className:"flex gap-1 w-full flex-wrap my-6",children:[s.jsx("button",{onClick:()=>q("role"),className:Y(t=="role"),children:"Role Master"}),s.jsx("button",{onClick:()=>q("user"),className:Y(t=="user"),children:"User Master"})]}),b&&s.jsx(ee,{}),!b&&s.jsx(s.Fragment,{children:(w==null?void 0:w.length)>0?s.jsxs(s.Fragment,{children:[s.jsxs("button",{onClick:()=>g("add"),className:D+"capitalize flex gap-1 items-center",children:[s.jsx(X,{})," Add ",s.jsx("span",{className:"capitalize",children:t})]}),t=="role"&&s.jsx(W,{columns:je,dataList:w}),t=="user"&&s.jsx(W,{columns:ye,dataList:w})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"flex justify-end mb-2",children:s.jsxs("button",{onClick:()=>g("add"),className:D+"capitalize flex gap-1 items-center",children:[s.jsx(X,{})," Add ",s.jsx("span",{className:"capitalize",children:t})]})}),s.jsx("div",{className:"bg-red-100 text-red-500 py-2 text-lg font-semibold text-center border border-red-500 drop-shadow-sm",children:"Oops! No Data Found."})]})})]}),s.jsxs("dialog",{ref:h,className:`relative overflow-clip animate__animated animate__zoomIn animate__faster w-full ${t=="role"&&"md:w-[21rem]"} ${t=="user"&&c!="delete"&&"md:w-[50rem]"} ${c=="delete"&&"md:w-[21rem]"} ${c=="assign"&&"md:w-[40rem]"}`,children:[c!="delete"&&s.jsx("span",{onClick:()=>(h.current.close(),l.resetForm(),k(null)),className:"block p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2",children:s.jsx(He,{})}),c!="delete"&&c!="assign"&&s.jsxs("form",{onChange:e=>(l.handleChange(e),J(e)),onSubmit:l.handleSubmit,className:"p-4 px-8 py-6 shadow-lg",children:[s.jsxs("section",{className:"flex flex-row justify-between gap-4 flex-wrap",children:[s.jsxs("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 text-center",children:[c," ",t]}),c=="edit"&&t=="user"&&s.jsx(s.Fragment,{children:s.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-4 mb-4 mt-2",children:[s.jsxs("div",{className:"md:col-span-6 col-span-12 flex gap-2 items-center flex-wrap text-sm",children:["Profile Image : ",s.jsx("img",{src:(d==null?void 0:d.profile_image)||"",className:"ml-4 h-20 border drop-shadow-md rounded-sm p-1",alt:"Profile",srcset:""})]}),s.jsxs("div",{className:"md:col-span-6 col-span-12 flex gap-2 items-center flex-wrap text-sm",children:["Signature : ",s.jsx("img",{src:(d==null?void 0:d.signature)||"",className:"ml-4 h-20 border drop-shadow-md rounded-sm p-1",alt:"Signature",srcset:""})]})]})}),_==null?void 0:_.map(e=>ke(e==null?void 0:e.key,e==null?void 0:e.title,e==null?void 0:e.type,e==null?void 0:e.width,e==null?void 0:e.hint,e==null?void 0:e.required,e==null?void 0:e.options,e==null?void 0:e.okey,e==null?void 0:e.ovalue))]}),s.jsx("footer",{className:"mt-4 flex justify-center",children:s.jsxs("button",{type:"submit",className:Ne("green"),children:[c=="add"&&"Add",c=="edit"&&"Update"]})})]}),c=="delete"&&s.jsx(s.Fragment,{children:s.jsxs("div",{className:" z-50 px-6 py-4 flex flex-col gap-4 ",children:[s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx("span",{className:"text-red-500 bg-red-100 p-2 block rounded-full drop-shadow-md shadow-red-300",children:s.jsx(qe,{size:25})}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("span",{className:"text-xl font-semibold border-b pb-1",children:"Confirmation"}),s.jsx("span",{className:"text-base",children:"Are you sure want to delete ?"})]})]}),s.jsxs("div",{className:"flex justify-end gap-2",children:[s.jsx("button",{className:"text-white bg-slate-400 hover:bg-slate-500 px-4 py-1 text-sm ",onClick:()=>h.current.close(),children:"No"}),s.jsx("button",{className:"text-white bg-red-500 hover:bg-red-600 px-4 py-1 text-sm ",onClick:()=>G(),children:"Yes"})]})]})}),c=="assign"&&s.jsx(s.Fragment,{children:s.jsxs("div",{className:"p-4 px-8 py-6 shadow-lg",children:[s.jsxs("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 mt-4 text-center",children:["Assign Role to ",s.jsx("span",{className:"text-amber-600",children:d==null?void 0:d.user_name})]}),!b&&Array.isArray(m)&&(m==null?void 0:m.length)>0&&s.jsx("div",{className:" mt-4 animate__animated animate__fadeIn animate__faster",children:s.jsx("button",{onClick:()=>Se(),className:"float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-600 hover:text-white text-white flex items-center mb-1",children:"Assign"})}),s.jsxs("div",{className:"flex flex-col h-[40vh] w-full overflow-y-auto md:overflow-x-hidden mt-6",children:[s.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-500 text-white font-semibold border border-slate-200 px-4 py-2",children:[s.jsx("div",{className:"col-span-3",children:"Sl. No."}),s.jsx("div",{className:"col-span-6",children:"Role Name"}),s.jsx("div",{className:"col-span-3 text-end",children:s.jsx("span",{children:"Action"})})]}),b&&s.jsx(ee,{}),!b&&Array.isArray(m)&&(m==null?void 0:m.map((e,r)=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-100 border-b hover:bg-white pb-1 p-4 animate__animated animate__fadeIn animate__faster",children:[s.jsx("div",{className:"col-span-1",children:r+1}),s.jsx("div",{className:"col-span-10",children:e==null?void 0:e.role_name}),s.jsx("div",{className:"col-span-1",children:s.jsx("label",{class:"inline-flex items-center px-4",children:s.jsx("input",{type:"radio",name:"roleAssign",checked:B==(e==null?void 0:e.id)||"",value:e==null?void 0:e.id,onChange:J,class:"cursor-pointer form-radio h-5 w-5 text-slate-800"})})})]},r)}))),!b&&Array.isArray(m)&&(m==null?void 0:m.length)==0&&s.jsx("div",{className:"w-full text-center text-red-400 font-semibold pb-1 p-4",children:"No Roles Available"})]})]})})]})]})};export{lr as default};