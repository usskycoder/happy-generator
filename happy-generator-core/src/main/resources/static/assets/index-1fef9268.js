import{d as Q,r as S,a as T,b as n,o as h,c as D,w as a,e,f as g,g as q,h as $,i as H,E as x,j as M,u as _,k as P,l as j,t as A}from"./index-ffc0e89f.js";import{u as B,a as K,b as E}from"./datasource-76096b35.js";import{u as G}from"./index-954ad8b2.js";const I=Q({__name:"add-or-update",emits:["refreshDataList"],setup(z,{expose:r,emit:V}){const y=V,m=S(!1),c=S(),t=T({id:"",dbType:"",connName:"",connUrl:"",username:"",password:""}),L=s=>{m.value=!0,t.id="",c.value&&c.value.resetFields(),s&&U(s)},U=s=>{B(s).then(l=>{l.data.password=$(l.data.password),Object.assign(t,l.data)})},v=S({dbType:[{required:!0,message:"必填项不能为空",trigger:"blur"}],connName:[{required:!0,message:"必填项不能为空",trigger:"blur"}],connUrl:[{required:!0,message:"必填项不能为空",trigger:"blur"}],username:[{required:!0,message:"必填项不能为空",trigger:"blur"}],password:[{required:!0,message:"必填项不能为空",trigger:"blur"}]}),w=()=>{c.value.validate(s=>{if(!s)return!1;K({...t,password:H(t.password)}).then(()=>{x.success({message:"操作成功",duration:500,onClose:()=>{m.value=!1,y("refreshDataList")}})})})};return r({init:L}),(s,l)=>{const b=n("el-input"),u=n("el-form-item"),i=n("el-option"),k=n("el-select"),f=n("el-form"),C=n("el-button"),p=n("el-drawer");return h(),D(p,{modelValue:m.value,"onUpdate:modelValue":l[8]||(l[8]=o=>m.value=o),size:"60%",title:t.id?"修改":"新增","close-on-click-modal":!1},{footer:a(()=>[e(C,{onClick:l[6]||(l[6]=o=>m.value=!1)},{default:a(()=>[g("取消")]),_:1}),e(C,{type:"primary",onClick:l[7]||(l[7]=o=>w())},{default:a(()=>[g("确定")]),_:1})]),default:a(()=>[e(f,{ref_key:"dataFormRef",ref:c,model:t,rules:v.value,"label-width":"120px",onKeyup:l[5]||(l[5]=q(o=>w(),["enter"]))},{default:a(()=>[e(u,{label:"名称",prop:"connName"},{default:a(()=>[e(b,{modelValue:t.connName,"onUpdate:modelValue":l[0]||(l[0]=o=>t.connName=o),placeholder:"连接名"},null,8,["modelValue"])]),_:1}),e(u,{prop:"dbType",label:"类型"},{default:a(()=>[e(k,{modelValue:t.dbType,"onUpdate:modelValue":l[1]||(l[1]=o=>t.dbType=o),clearable:"",placeholder:"数据库类型",style:{width:"100%"}},{default:a(()=>[e(i,{value:"MySQL",label:"MySQL"}),e(i,{value:"Oracle",label:"Oracle"}),e(i,{value:"PostgreSQL",label:"PostgreSQL"}),e(i,{value:"SQLServer",label:"SQLServer"})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"URL",prop:"connUrl"},{default:a(()=>[e(b,{modelValue:t.connUrl,"onUpdate:modelValue":l[2]||(l[2]=o=>t.connUrl=o),placeholder:"数据库URL"},null,8,["modelValue"])]),_:1}),e(u,{label:"账号",prop:"username"},{default:a(()=>[e(b,{modelValue:t.username,"onUpdate:modelValue":l[3]||(l[3]=o=>t.username=o),placeholder:"数据库账号"},null,8,["modelValue"])]),_:1}),e(u,{label:"密码",prop:"password"},{default:a(()=>[e(b,{modelValue:t.password,"onUpdate:modelValue":l[4]||(l[4]=o=>t.password=o),autocomplete:"off",type:"password",placeholder:"密码"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),Y=Q({__name:"index",setup(z){const r=T({dataListUrl:"/gen/datasource/page",deleteUrl:"/gen/datasource",queryForm:{connName:"",dbType:""}}),V=s=>{E(s).then(l=>{x.success(l.data)})},y=S(),m=s=>{y.value.init(s)},{getDataList:c,selectionChangeHandle:t,sizeChangeHandle:L,currentChangeHandle:U,deleteBatchHandle:v}=G(r),w=s=>Array($(s).length).fill("•").join("");return(s,l)=>{const b=n("el-input"),u=n("el-form-item"),i=n("el-option"),k=n("el-select"),f=n("el-button"),C=n("el-form"),p=n("el-table-column"),o=n("el-table"),F=n("el-pagination"),R=n("el-card"),O=M("loading");return h(),D(R,null,{default:a(()=>[e(C,{inline:!0,model:r.queryForm,onKeyup:l[5]||(l[5]=q(d=>_(c)(),["enter"]))},{default:a(()=>[e(u,null,{default:a(()=>[e(b,{modelValue:r.queryForm.connName,"onUpdate:modelValue":l[0]||(l[0]=d=>r.queryForm.connName=d),placeholder:"连接名"},null,8,["modelValue"])]),_:1}),e(u,{prop:"dbType"},{default:a(()=>[e(k,{modelValue:r.queryForm.dbType,"onUpdate:modelValue":l[1]||(l[1]=d=>r.queryForm.dbType=d),clearable:"",placeholder:"数据库类型"},{default:a(()=>[e(i,{value:"MySQL",label:"MySQL"}),e(i,{value:"Oracle",label:"Oracle"}),e(i,{value:"PostgreSQL",label:"PostgreSQL"}),e(i,{value:"SQLServer",label:"SQLServer"})]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:a(()=>[e(f,{onClick:l[2]||(l[2]=d=>_(c)())},{default:a(()=>[g("查询")]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(f,{type:"primary",onClick:l[3]||(l[3]=d=>m())},{default:a(()=>[g("新增")]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(f,{type:"danger",onClick:l[4]||(l[4]=d=>_(v)())},{default:a(()=>[g("删除")]),_:1})]),_:1})]),_:1},8,["model"]),P((h(),D(o,{data:r.dataList,border:"",style:{width:"100%"},onSelectionChange:_(t)},{default:a(()=>[e(p,{type:"selection","header-align":"center",align:"center",width:"50"}),e(p,{prop:"connName",label:"连接名","header-align":"center",align:"center"}),e(p,{prop:"dbType",label:"数据库类型","header-align":"center",align:"center"}),e(p,{prop:"connUrl",label:"数据库URL","show-overflow-tooltip":"","header-align":"center",align:"center"}),e(p,{prop:"username",label:"用户名","header-align":"center",align:"center"}),e(p,{label:"密码","header-align":"center",align:"center"},{default:a(d=>[j("span",null,A(w(d.row.password)),1)]),_:1}),e(p,{label:"操作",fixed:"right","header-align":"center",align:"center",width:"170"},{default:a(d=>[e(f,{type:"primary",link:"",onClick:N=>V(d.row.id)},{default:a(()=>[g("测试")]),_:2},1032,["onClick"]),e(f,{type:"primary",link:"",onClick:N=>m(d.row.id)},{default:a(()=>[g("编辑")]),_:2},1032,["onClick"]),e(f,{type:"primary",link:"",onClick:N=>_(v)(d.row.id)},{default:a(()=>[g("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[O,r.dataListLoading]]),e(F,{"current-page":r.page,"page-sizes":r.pageSizes,"page-size":r.limit,total:r.total,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:_(L),onCurrentChange:_(U)},null,8,["current-page","page-sizes","page-size","total","onSizeChange","onCurrentChange"]),e(I,{ref_key:"addOrUpdateRef",ref:y,onRefreshDataList:_(c)},null,8,["onRefreshDataList"])]),_:1})}}});export{Y as default};