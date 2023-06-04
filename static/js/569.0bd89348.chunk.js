"use strict";(self.webpackChunkgoit_team_project_03=self.webpackChunkgoit_team_project_03||[]).push([[569],{666:function(e,o,t){t.d(o,{t:function(){return i},v:function(){return l}});var r=t(4942),n=t(6934),a=t(890),i=(0,n.ZP)("form")((function(e){var o=e.theme;return(0,r.Z)({display:"flex",flexDirection:"column",gap:"24px",width:"280px",margin:"50px auto 0",boxShadow:" 3px 8px 14px rgba(136, 198, 253, 0.19)",backgroundColor:"#fff",padding:"40px 20px",borderRadius:"20px"},o.breakpoints.up("tablet"),{padding:"60px 75px",width:"608px",margin:"82px auto 0"})})),l=(0,n.ZP)(a.Z)((function(e){var o,t=e.theme;return o={letterSpacing:"0.04em",margin:"0 0 15px 0"},(0,r.Z)(o,t.breakpoints.down("tablet"),{fontSize:"24px",fontWeight:t.typography.fontWeightMedium}),(0,r.Z)(o,t.breakpoints.up("tablet"),{fontSize:"36px",fontWeight:t.typography.fontWeightMedium}),o}))},2569:function(e,o,t){t.r(o),t.d(o,{default:function(){return z}});var r=t(9439),n=t(2791),a=t(3827),i=t(3466),l=t(3400),s=t(890),c=t(3746),d=t(165),u=t(1087),p=t(5705),m=t(6727),g=t(666),h=t(4942),f=t(6934),v=t(6151),Z=(0,f.ZP)(v.Z)((function(e){var o,t=e.theme;return o={},(0,h.Z)(o,t.breakpoints.down("tablet"),{margin:"70px 0 0 0"}),(0,h.Z)(o,t.breakpoints.up("tablet"),{margin:"55px 0 0 0"}),(0,h.Z)(o,t.breakpoints.up("desktop"),{margin:"50px 0 0 0"}),o})),b=t(9273),x=t(8687),w=t(4217),y=t(184),S=m.Ry({email:m.Z_("Enter your email").email("Enter a valide email").required("Email is required"),password:m.Z_("Enter your password").required("Password is required")}),k=function(){var e=(0,n.useState)(!1),o=(0,r.Z)(e,2),t=o[0],m=o[1],h=(0,x.useDispatch)(),f=(0,x.useSelector)(w.selectIsLoading),v=(0,p.TA)({initialValues:{email:"",password:""},validationSchema:S,onSubmit:function(e,o){var t=o.resetForm;h((0,b.x4)(e)),t()}});return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(g.t,{onSubmit:v.handleSubmit,component:"form",children:[(0,y.jsx)(g.v,{component:"h2",sx:{textAlign:"center"},children:"Login"}),(0,y.jsx)(a.Z,{fullWidth:!0,id:"email",name:"email",label:"Email",value:v.values.email,onChange:v.handleChange,error:v.touched.email&&Boolean(v.errors.email),helperText:v.touched.email&&v.errors.email}),(0,y.jsx)(a.Z,{fullWidth:!0,id:"password",name:"password",label:"Password",type:t?"text":"password",value:v.values.password,onChange:v.handleChange,error:v.touched.password&&Boolean(v.errors.password),helperText:v.touched.password&&v.errors.password,InputProps:{endAdornment:(0,y.jsx)(i.Z,{position:"end",children:(0,y.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:function(){return m((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:t?(0,y.jsx)(d.Z,{}):(0,y.jsx)(c.Z,{})})})}}),(0,y.jsx)(Z,{type:"submit",variant:"contained",disabled:f,"aria-label":"login",children:"Login"}),(0,y.jsxs)(s.Z,{component:"p",sx:{textAlign:"center",mt:"15px",fontSize:"12px"},children:["If you don't have an account. ",(0,y.jsx)(u.NavLink,{to:"/register",children:"Register"})]})]})})},z=function(){return(0,n.useEffect)((function(){document.title="YourPet | Login"})),(0,y.jsx)(k,{})}},3400:function(e,o,t){t.d(o,{Z:function(){return w}});var r=t(5987),n=t(4942),a=t(1413),i=t(2791),l=t(8182),s=t(4419),c=t(2065),d=t(6934),u=t(1402),p=t(3701),m=t(4036),g=t(5878),h=t(1217);function f(e){return(0,h.Z)("MuiIconButton",e)}var v=(0,g.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Z=t(184),b=["edge","children","className","color","disabled","disableFocusRipple","size"],x=(0,d.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,"default"!==t.color&&o["color".concat((0,m.Z)(t.color))],t.edge&&o["edge".concat((0,m.Z)(t.edge))],o["size".concat((0,m.Z)(t.size))]]}})((function(e){var o=e.theme,t=e.ownerState;return(0,a.Z)((0,a.Z)((0,a.Z)({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.activeChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12}),"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(e){var o,t=e.theme,r=e.ownerState,i=null==(o=(t.vars||t).palette)?void 0:o[r.color];return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"inherit"===r.color&&{color:"inherit"}),"inherit"!==r.color&&"default"!==r.color&&(0,a.Z)({color:null==i?void 0:i.main},!r.disableRipple&&{"&:hover":(0,a.Z)((0,a.Z)({},i&&{backgroundColor:t.vars?"rgba(".concat(i.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(i.main,t.palette.action.hoverOpacity)}),{},{"@media (hover: none)":{backgroundColor:"transparent"}})})),"small"===r.size&&{padding:5,fontSize:t.typography.pxToRem(18)}),"large"===r.size&&{padding:12,fontSize:t.typography.pxToRem(28)}),{},(0,n.Z)({},"&.".concat(v.disabled),{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}))})),w=i.forwardRef((function(e,o){var t=(0,u.Z)({props:e,name:"MuiIconButton"}),n=t.edge,i=void 0!==n&&n,c=t.children,d=t.className,p=t.color,g=void 0===p?"default":p,h=t.disabled,v=void 0!==h&&h,w=t.disableFocusRipple,y=void 0!==w&&w,S=t.size,k=void 0===S?"medium":S,z=(0,r.Z)(t,b),R=(0,a.Z)((0,a.Z)({},t),{},{edge:i,color:g,disabled:v,disableFocusRipple:y,size:k}),j=function(e){var o=e.classes,t=e.disabled,r=e.color,n=e.edge,a=e.size,i={root:["root",t&&"disabled","default"!==r&&"color".concat((0,m.Z)(r)),n&&"edge".concat((0,m.Z)(n)),"size".concat((0,m.Z)(a))]};return(0,s.Z)(i,f,o)}(R);return(0,Z.jsx)(x,(0,a.Z)((0,a.Z)({className:(0,l.Z)(j.root,d),centerRipple:!0,focusRipple:!y,disabled:v,ref:o,ownerState:R},z),{},{children:c}))}))}}]);
//# sourceMappingURL=569.0bd89348.chunk.js.map