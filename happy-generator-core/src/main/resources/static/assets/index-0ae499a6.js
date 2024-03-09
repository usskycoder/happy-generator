import{d as q,r as P,a as h,b as d,o as U,c as N,w as l,e,f as g,g as R,E as H,j as O,u as C,k as K}from"./index-ffc0e89f.js";import{s as $,u as A}from"./index-954ad8b2.js";const z=_=>$.get("/gen/project/"+_),F=_=>_.id?$.put("/gen/project",_):$.post("/gen/project",_),B=_=>{location.href="http://localhost:8088/gen/project/download/"+_},E=q({__name:"add-or-update",emits:["refreshDataList"],setup(_,{expose:s,emit:j}){const V=j,a=P(!1),y=P(),u=h({id:"",projectName:"",projectCode:"",projectPackage:"",projectPath:""}),x=n=>{a.value=!0,u.id="",y.value&&y.value.resetFields(),n&&k(n)},k=n=>{z(n).then(t=>{Object.assign(u,t.data)})},f=P({projectName:[{required:!0,message:"必填项不能为空",trigger:"blur"}],projectCode:[{required:!0,message:"必填项不能为空",trigger:"blur"}],projectPackage:[{required:!0,message:"必填项不能为空",trigger:"blur"}],projectPath:[{required:!0,message:"必填项不能为空",trigger:"blur"}]}),o=()=>{y.value.validate(n=>{if(!n)return!1;F(u).then(()=>{H.success({message:"操作成功",duration:500,onClose:()=>{a.value=!1,V("refreshDataList")}})})})};return s({init:x}),(n,t)=>{const p=d("el-input"),m=d("el-form-item"),b=d("el-form"),w=d("el-button"),c=d("el-drawer");return U(),N(c,{modelValue:a.value,"onUpdate:modelValue":t[7]||(t[7]=i=>a.value=i),size:"40%",title:u.id?"修改":"新增","close-on-click-modal":!1},{footer:l(()=>[e(w,{onClick:t[5]||(t[5]=i=>a.value=!1)},{default:l(()=>[g("取消")]),_:1}),e(w,{type:"primary",onClick:t[6]||(t[6]=i=>o())},{default:l(()=>[g("确定")]),_:1})]),default:l(()=>[e(b,{ref_key:"dataFormRef",ref:y,model:u,rules:f.value,"label-width":"100px",onKeyup:t[4]||(t[4]=R(i=>o(),["enter"]))},{default:l(()=>[e(m,{label:"项目名",prop:"projectName"},{default:l(()=>[e(p,{modelValue:u.projectName,"onUpdate:modelValue":t[0]||(t[0]=i=>u.projectName=i),placeholder:"项目名"},null,8,["modelValue"])]),_:1}),e(m,{label:"项目标识",prop:"projectCode"},{default:l(()=>[e(p,{modelValue:u.projectCode,"onUpdate:modelValue":t[1]||(t[1]=i=>u.projectCode=i),placeholder:"项目标识"},null,8,["modelValue"])]),_:1}),e(m,{label:"项目包名",prop:"projectPackage"},{default:l(()=>[e(p,{modelValue:u.projectPackage,"onUpdate:modelValue":t[2]||(t[2]=i=>u.projectPackage=i),placeholder:"项目包名"},null,8,["modelValue"])]),_:1}),e(m,{label:"项目路径",prop:"projectPath"},{default:l(()=>[e(p,{modelValue:u.projectPath,"onUpdate:modelValue":t[3]||(t[3]=i=>u.projectPath=i),placeholder:"项目路径"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),M=q({__name:"download",setup(_,{expose:s}){const j=P(!1),V=P(),a=h({id:"",projectName:"",projectCode:"",projectPackage:"",projectPath:"",modifyProjectName:"",modifyProjectCode:"",modifyProjectPackage:"",exclusions:"",modifySuffix:""}),y=f=>{j.value=!0,a.id="",V.value&&V.value.resetFields(),f&&u(f)},u=f=>{z(f).then(o=>{Object.assign(a,o.data)})},x=P({modifyProjectName:[{required:!0,message:"必填项不能为空",trigger:"blur"}],modifyProjectCode:[{required:!0,message:"必填项不能为空",trigger:"blur"}],modifyProjectPackage:[{required:!0,message:"必填项不能为空",trigger:"blur"}],exclusions:[{required:!0,message:"必填项不能为空",trigger:"blur"}],modifySuffix:[{required:!0,message:"必填项不能为空",trigger:"blur"}]}),k=()=>{V.value.validate(async f=>{if(!f)return!1;await F(a),B(a.id),j.value=!1})};return s({init:y}),(f,o)=>{const n=d("el-input"),t=d("el-form-item"),p=d("el-col"),m=d("el-row"),b=d("el-divider"),w=d("el-form"),c=d("el-button"),i=d("el-drawer");return U(),N(i,{size:"60%",modelValue:j.value,"onUpdate:modelValue":o[12]||(o[12]=r=>j.value=r),title:"源码下载","close-on-click-modal":!1},{footer:l(()=>[e(c,{onClick:o[10]||(o[10]=r=>j.value=!1)},{default:l(()=>[g("取消")]),_:1}),e(c,{type:"primary",onClick:o[11]||(o[11]=r=>k())},{default:l(()=>[g("下载")]),_:1})]),default:l(()=>[e(w,{ref_key:"dataFormRef",ref:V,model:a,rules:x.value,"label-width":"100px",onKeyup:o[9]||(o[9]=R(r=>k(),["enter"]))},{default:l(()=>[e(m,null,{default:l(()=>[e(p,{span:12},{default:l(()=>[e(t,{label:"项目名",prop:"projectName"},{default:l(()=>[e(n,{modelValue:a.projectName,"onUpdate:modelValue":o[0]||(o[0]=r=>a.projectName=r),placeholder:"项目名",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:l(()=>[e(t,{label:"项目路径",prop:"projectPath"},{default:l(()=>[e(n,{modelValue:a.projectPath,"onUpdate:modelValue":o[1]||(o[1]=r=>a.projectPath=r),placeholder:"项目路径",disabled:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(p,{span:12},{default:l(()=>[e(t,{label:"项目标识",prop:"projectCode"},{default:l(()=>[e(n,{modelValue:a.projectCode,"onUpdate:modelValue":o[2]||(o[2]=r=>a.projectCode=r),placeholder:"项目标识",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:l(()=>[e(t,{label:"项目包名",prop:"projectPackage"},{default:l(()=>[e(n,{modelValue:a.projectPackage,"onUpdate:modelValue":o[3]||(o[3]=r=>a.projectPackage=r),placeholder:"项目包名",disabled:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(b,null,{default:l(()=>[g(" 变更后的信息 ")]),_:1}),e(t,{label:"项目名",prop:"modifyProjectName"},{default:l(()=>[e(n,{modelValue:a.modifyProjectName,"onUpdate:modelValue":o[4]||(o[4]=r=>a.modifyProjectName=r),placeholder:"项目名"},null,8,["modelValue"])]),_:1}),e(m,null,{default:l(()=>[e(p,{span:12},{default:l(()=>[e(t,{label:"项目标识",prop:"modifyProjectCode"},{default:l(()=>[e(n,{modelValue:a.modifyProjectCode,"onUpdate:modelValue":o[5]||(o[5]=r=>a.modifyProjectCode=r),placeholder:"项目标识"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:l(()=>[e(t,{label:"项目包名",prop:"modifyProjectPackage"},{default:l(()=>[e(n,{modelValue:a.modifyProjectPackage,"onUpdate:modelValue":o[6]||(o[6]=r=>a.modifyProjectPackage=r),placeholder:"项目包名"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(p,{span:12},{default:l(()=>[e(t,{label:"排除文件",prop:"exclusions"},{default:l(()=>[e(n,{modelValue:a.exclusions,"onUpdate:modelValue":o[7]||(o[7]=r=>a.exclusions=r),placeholder:"排除文件"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:l(()=>[e(t,{label:"变更文件",prop:"modifySuffix"},{default:l(()=>[e(n,{modelValue:a.modifySuffix,"onUpdate:modelValue":o[8]||(o[8]=r=>a.modifySuffix=r),placeholder:"变更文件"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}}),I=q({__name:"index",setup(_){const s=h({dataListUrl:"/gen/project/page",deleteUrl:"/gen/project",queryForm:{projectName:""}}),j=P(),V=n=>{j.value.init(n)},a=P(),y=n=>{a.value.init(n)},{getDataList:u,selectionChangeHandle:x,sizeChangeHandle:k,currentChangeHandle:f,deleteBatchHandle:o}=A(s);return(n,t)=>{const p=d("el-input"),m=d("el-form-item"),b=d("el-button"),w=d("el-form"),c=d("el-table-column"),i=d("el-table"),r=d("el-pagination"),L=d("el-card"),D=O("loading");return U(),N(L,null,{default:l(()=>[e(w,{inline:!0,model:s.queryForm,onKeyup:t[4]||(t[4]=R(v=>C(u)(),["enter"]))},{default:l(()=>[e(m,null,{default:l(()=>[e(p,{modelValue:s.queryForm.projectName,"onUpdate:modelValue":t[0]||(t[0]=v=>s.queryForm.projectName=v),placeholder:"项目名"},null,8,["modelValue"])]),_:1}),e(m,null,{default:l(()=>[e(b,{onClick:t[1]||(t[1]=v=>C(u)())},{default:l(()=>[g("查询")]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(b,{type:"primary",onClick:t[2]||(t[2]=v=>V())},{default:l(()=>[g("新增")]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(b,{type:"danger",onClick:t[3]||(t[3]=v=>C(o)())},{default:l(()=>[g("删除")]),_:1})]),_:1})]),_:1},8,["model"]),K((U(),N(i,{data:s.dataList,border:"",style:{width:"100%"},onSelectionChange:C(x)},{default:l(()=>[e(c,{type:"selection","header-align":"center",align:"center",width:"50"}),e(c,{prop:"projectName",label:"项目名","header-align":"center",align:"center"}),e(c,{prop:"projectCode",label:"项目标识","header-align":"center",align:"center"}),e(c,{prop:"projectPackage",label:"项目包名","show-overflow-tooltip":"","header-align":"center",align:"center"}),e(c,{prop:"projectPath",label:"项目路径","show-overflow-tooltip":"","header-align":"center",align:"center"}),e(c,{label:"操作",fixed:"right","header-align":"center",align:"center",width:"180"},{default:l(v=>[e(b,{type:"primary",link:"",onClick:S=>V(v.row.id)},{default:l(()=>[g("修改")]),_:2},1032,["onClick"]),e(b,{type:"primary",link:"",onClick:S=>y(v.row.id)},{default:l(()=>[g("源码下载")]),_:2},1032,["onClick"]),e(b,{type:"primary",link:"",onClick:S=>C(o)(v.row.id)},{default:l(()=>[g("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[D,s.dataListLoading]]),e(r,{"current-page":s.page,"page-sizes":s.pageSizes,"page-size":s.limit,total:s.total,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:C(k),onCurrentChange:C(f)},null,8,["current-page","page-sizes","page-size","total","onSizeChange","onCurrentChange"]),e(E,{ref_key:"addOrUpdateRef",ref:j,onRefreshDataList:C(u)},null,8,["onRefreshDataList"]),e(M,{ref_key:"downloadRef",ref:a},null,512)]),_:1})}}});export{I as default};
