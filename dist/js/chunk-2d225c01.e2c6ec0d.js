(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225c01"],{e671:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{staticClass:"breadcrumb-row",attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("借阅管理")]),r("el-breadcrumb-item",[e._v("图书借阅记录")])],1),r("el-card",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.borrowList,stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"book_id",label:"图书ID"}}),r("el-table-column",{attrs:{prop:"bookName",label:"图书名称"}}),r("el-table-column",{attrs:{prop:"bookPress",label:"图书出版社"}}),r("el-table-column",{attrs:{prop:"bookAuthor",label:"图书作者"}}),r("el-table-column",{attrs:{prop:"userName",label:"借阅人"}}),r("el-table-column",{attrs:{prop:"user_id",label:"借阅者ID"}}),r("el-table-column",{attrs:{prop:"borrow_date",label:"借出时间",sortable:"",width:"200px"}}),r("el-table-column",{attrs:{prop:"back_date",label:"归还时间",sortable:"",width:"200px"}}),r("el-table-column",{attrs:{label:"已经归还",filters:[{text:"已归还",value:"1"},{text:"未归还",value:"0"}],"filter-method":e.filterMethod,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{type:t.row.back_date?"primary":"success","disable-transitions":""}},[e._v(e._s(t.row.back_date?"已归还":"未归还"))])]}}])})],1)],1)],1)},l=[],o=(r("96cf"),r("1da1")),s=r("8daa"),n={data:function(){return{borrowList:[]}},created:function(){this.getBorrowList()},methods:{getBorrowList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["n"])();case 2:if(r=t.sent,200==r.code){t.next=5;break}return t.abrupt("return",e.$message.error(r.msg));case 5:e.borrowList=r.data;case 6:case"end":return t.stop()}}),t)})))()},filterMethod:function(e,t){return 1==e?t.back_date:!t.back_date}}},c=n,b=r("2877"),u=Object(b["a"])(c,a,l,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d225c01.e2c6ec0d.js.map