import{j as e,B as d,u,r as p,C as f,a as c,b as x,c as g}from"./index-hOLj3u5G.js";import{L as t}from"./index-BJKAmvW0.js";import{r as h}from"./index-wpAmvEo0.js";const j=()=>{const{pending:s}=h.useFormStatus();return e.jsx(d,{disabled:s,className:"py-6",themeColor:"primary",variant:"solid",children:"Next"})},S=({address:s,city:r,email:l,state:i,name:n,profession:a,...o})=>e.jsxs("form",{...o,className:["relative","pt-5","flex","flex-col","px-6","gap-4","shrink-0","left-[4rem]","w-[calc(100vw-4rem)]",o.className??""].join(" "),children:[e.jsx(t,{label:"Full Name",inputId:"full-name",placeholder:"John Doe",name:"full-name",defaultValue:n}),e.jsx(t,{label:"Email",placeholder:"Johndoe@gmail.com",inputId:"email",name:"email",defaultValue:l}),e.jsx(t,{label:"Profession",placeholder:"E.g Software Engineer",inputId:"profession",name:"profession",defaultValue:a}),e.jsx(t,{label:"Address",placeholder:"123, Main Street, Lagos",inputId:"address",name:"address",defaultValue:s}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx(t,{label:"City",className:"w-[calc(50%-1rem)]",placeholder:"Orlando",inputId:"city",name:"city",defaultValue:r}),e.jsx(t,{label:"State",className:"w-[50%]",placeholder:"Florida",inputId:"state",name:"state",defaultValue:i})]}),e.jsx(j,{})]}),y=()=>{var n;const s=u(),r=x(),l=p.use(f),i=async a=>{var m;const o={name:String(a.get("full-name")),address:String(a.get("address")),city:String(a.get("city")),email:String(a.get("email")),profession:String(a.get("profession")),state:String(a.get("state"))};(m=l.getElement(c.PersonalInfo))==null||m.fromData(o),r(c.PersonalInfo),await s({to:"/experience"})};return e.jsx("main",{children:e.jsx(S,{action:i,...(n=l.getElement(c.PersonalInfo))==null?void 0:n.toJSON()})})},E=g("/personal-info/")({component:y});export{E as Route};
