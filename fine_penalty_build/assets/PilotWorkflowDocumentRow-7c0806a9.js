import{r as W,j as e}from"./index-907a7e20.js";import{n as q}from"./PowerupFunctions-c23fc72c.js";import{F as z}from"./index.esm-19ce39fd.js";const B="/assets/photo-506bbc5b.png";function K(t){var l,n,h,x,m,g,L,b,j,w,_,f,u,N,y,k,v,E,F,s,D,P,R;const[i,T]=W.useState([]),a=d=>i==null?void 0:i.some(c=>c==d);return e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:(t==null?void 0:t.index)+1})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:q((l=t==null?void 0:t.docList)==null?void 0:l.document_name)})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm cursor-pointer",onClick:()=>{var d,c,A,C,I,M,S;return t.openModal((d=t==null?void 0:t.docList)==null?void 0:d.doc_path,(M=(c=t==null?void 0:t.docList)==null?void 0:c.doc_path)==null?void 0:M.split(".")[((I=(C=(A=t==null?void 0:t.docList)==null?void 0:A.doc_path)==null?void 0:C.split("."))==null?void 0:I.length)-1],a((S=t==null?void 0:t.docList)==null?void 0:S.id))},children:e.jsxs("div",{className:"flex items-center",children:[(((g=(n=t==null?void 0:t.docList)==null?void 0:n.doc_path)==null?void 0:g.split(".")[((m=(x=(h=t==null?void 0:t.docList)==null?void 0:h.doc_path)==null?void 0:x.split("."))==null?void 0:m.length)-1])=="pdf"||((_=(L=t==null?void 0:t.docList)==null?void 0:L.doc_path)==null?void 0:_.split(".")[((w=(j=(b=t==null?void 0:t.docList)==null?void 0:b.doc_path)==null?void 0:j.split("."))==null?void 0:w.length)-1])=="pdf/")&&e.jsx("div",{className:"flex-shrink-0 text-[28px]",children:e.jsx(z,{})}),((k=(f=t==null?void 0:t.docList)==null?void 0:f.doc_path)==null?void 0:k.split(".")[((y=(N=(u=t==null?void 0:t.docList)==null?void 0:u.doc_path)==null?void 0:N.split("."))==null?void 0:y.length)-1])!="pdf"&&((D=(v=t==null?void 0:t.docList)==null?void 0:v.doc_path)==null?void 0:D.split(".")[((s=(F=(E=t==null?void 0:t.docList)==null?void 0:E.doc_path)==null?void 0:F.split("."))==null?void 0:s.length)-1])!="pdf/"&&e.jsx("div",{className:"flex-shrink-0 px-1 py-2",children:e.jsx("img",{src:a((P=t==null?void 0:t.docList)==null?void 0:P.id)?B:(R=t==null?void 0:t.docList)==null?void 0:R.doc_path,onError:()=>T(d=>{var c;return[...d,(c=t==null?void 0:t.docList)==null?void 0:c.id]}),className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})]})})}export{K as P};
