webpackJsonp([6],{dIqY:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"App",components:{NavBar:s("g2+m").a},data:function(){return{username:"",password:""}},mounted:function(){var t=this;this.$store.getters.activeStatus&&this.$router.push({path:"/user"});var e=this.$refs.register.$el;new TencentCaptcha(e,"2034355957",function(e){0===e.ret&&t.doRegister(e.ticket,e.randstr)},null)},computed:{activeUser:function(){return this.$store.state.activeUser},registerButtonStatus:function(){return!(this.username.length>=3&&this.username.length<=12&&this.password.length>=6&&this.password.length<=16)}},methods:{doRegister:function(t,e){var s=this;this.username.length>=3&&this.username.length<=12?this.password.length>=6&&this.password.length<=16?this.$http({url:"/regist",data:{username:this.username.trim(),password:this.password.trim(),ticket:t,randstr:e}}).then(function(t){var e=t.data;200===e.status?s.$alert("注册成功","提示",{confirmButtonText:"立即登录",callback:function(t){s.$router.push({path:"/login"})}}):500===e.status&&(s.$message.error(t.data.msg),s.username="")}):this.$alert("密码长度应该在6-16位之间","警告",{confirmButtonText:"确定"}):this.$alert("用户名长度应该在3-12位之间","警告",{confirmButtonText:"确定"})}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{margin:"5px"},attrs:{id:"app"}},[s("el-row",[s("el-col",{attrs:{span:10,offset:6}},[s("el-card",{staticStyle:{"padding-bottom":"50px"},attrs:{shadow:"never"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("h2",[t._v("账号注册")]),t._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"注册账号",placement:"right"}},[s("i",{staticClass:"el-icon-question"})])],1),t._v(" "),s("el-form",{attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{attrs:{placeholder:"请输入3到12位用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{attrs:{placeholder:"请输入6到16位密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("el-form-item",[s("el-button",{ref:"register",attrs:{type:"primary",size:"medium",disabled:t.registerButtonStatus},on:{click:t.doRegister}},[t._v("注册")]),t._v(" "),s("el-button",{attrs:{size:"medium"},on:{click:function(e){t.$router.push({path:"/login"})}}},[t._v("登录")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var n=s("VU/8")(r,a,!1,function(t){s("oQsL")},"data-v-b237538c",null);e.default=n.exports},oQsL:function(t,e){}});
//# sourceMappingURL=6.f6706b10edd3939c38ad.js.map