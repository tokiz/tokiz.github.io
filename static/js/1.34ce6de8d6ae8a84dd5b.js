webpackJsonp([1],{"+fla":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={props:{comment:Object},data:function(){return{dialogVisible:!1,contentText:"",fromUserId:"",fromUserNicknam:"",toUserId:"",toUserNickName:""}},computed:{faceUrl:function(){return this.$static+this.comment.faceImage}},methods:{closeDialog:function(){this.content=""},sendComment:function(){var t=this;this.dialogVisible=!1,this.$store.getters.activeStatus?this.contentText.trim().length<1?this.$alert("请输入评论内容","提示",{confirmButtonText:"确定"}):this.$http({url:"/video/saveComment?toUserId="+this.comment.fromUserId+"&fatherCommentId="+this.comment.id,data:{videoId:this.comment.videoId,comment:this.contentText,fromUserId:this.$store.state.activeUser.id}}).then(function(e){var s=e.data;200===s.status?(t.content="",t.$message("评论成功"),t.$emit("refreshComment")):500===s.status&&t.$message.error(s.msg)}):this.$alert("请登录后重试","提示",{confirmButtonText:"确定"})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",[s("el-col",{attrs:{span:24}},[s("el-col",{attrs:{offset:1,span:1}},[s("img",{staticClass:"face",staticStyle:{border:"1px solid #ccc"},attrs:{src:t.faceUrl},on:{click:function(e){t.$router.push({path:"/user/"+t.comment.fromUserId})}}})]),t._v(" "),s("el-col",{staticStyle:{"margin-left":"8px"},attrs:{span:20}},[s("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between","align-items":"center"}},[s("div",[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击回复",placement:"right"}},[s("el-button",{staticClass:"nickname",attrs:{type:"text"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("\n                        "+t._s(t.comment.nickname)+" \n                       ")])],1),t._v(" "),null!=t.comment.toUserId&&""!=t.comment.toUserId&&void 0!=t.comment.toUserId&&null!=t.comment.toNickname&&""!=t.comment.toNickname&&void 0!=t.comment.toNickname?s("span",[s("span",{staticStyle:{color:"#606266","font-size":"16px"}},[t._v(" 回复 ")]),t._v(" "),s("span",{staticClass:"toNickname",on:{click:function(e){t.$router.push({path:"/user/"+t.comment.toUserId})}}},[t._v("@"+t._s(t.comment.nickname))]),t._v(" ...\n                         ")]):t._e()],1),t._v(" "),s("span",{staticStyle:{color:"#C0C4CC","font-size":"16px","padding-right":"8px"}},[t._v(t._s(t.comment.timeAgo))])]),t._v(" "),s("p",{staticClass:"content"},[t._v("\n                      "+t._s(t.comment.comment)+"\n                  ")])])],1)],1),t._v(" "),s("el-dialog",{attrs:{title:"请输入回复内容","close-on-press-escape":!1,"close-on-click-modal":!1,visible:t.dialogVisible,width:"33%"},on:{close:t.closeDialog,"update:visible":function(e){t.dialogVisible=e}}},[s("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:10},placeholder:"@"+t.comment.nickname},model:{value:t.contentText,callback:function(e){t.contentText=e},expression:"contentText"}}),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.sendComment}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",[s("div",[s("span",{staticStyle:{color:"#606266","margin-bottom":"10px"}},[t._v("留下你的评论吧")]),t._v(" "),s("el-input",{staticStyle:{color:"#606266","margin-top":"10px"},attrs:{disabled:0==t.$store.getters.activeStatus,type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),s("div",{staticClass:"send-area",staticStyle:{"margin-top":"10px"}},[s("img",{staticClass:"face",staticStyle:{border:"1px solid #ccc"},attrs:{src:t.$static+"/akari.jpg"}}),t._v(" "),0==t.$store.getters.activeStatus?s("el-button",{attrs:{type:"primary",size:"small",round:"",disabled:""}},[t._v("发表评论(未登录)")]):s("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:t.sendComment}},[t._v("发表评论")])],1)])])],1)],1)},staticRenderFns:[]};var a={components:{CommentItem:s("VU/8")(o,i,!1,function(t){s("nkB6")},"data-v-46bad0a8",null).exports,SendComment:s("VU/8")({props:["videoId"],data:function(){return{content:""}},methods:{sendComment:function(){var t=this;this.$store.getters.activeStatus?this.content.trim().length<1?this.$alert("请输入评论内容","提示",{confirmButtonText:"确定"}):this.$http({url:"/video/saveComment",data:{videoId:this.videoId,comment:this.content,fromUserId:this.$store.state.activeUser.id}}).then(function(e){var s=e.data;200===s.status?(t.content="",t.$message("评论成功"),t.$emit("refreshComment")):500===s.status&&t.$message.error(s.msg)}):this.$alert("状态非法，请先登录","提示",{confirmButtonText:"确定"})}}},n,!1,function(t){s("IUR9")},"data-v-adb183de",null).exports},props:["id"],data:function(){return{video:{},videoPath:"",comments:[],isFollow:!1,userLikeVideo:!1,options:{invertTime:!1,i18n:{volume:"音量",speed:"速度",normal:"标准 1.0x"}}}},computed:{faceUrl:function(){return this.$static+this.video.faceImage},videoUrl:function(){return this.$static+this.videoPath},likeIconClass:function(){return 0==this.userLikeVideo?"el-icon-star-off":"el-icon-star-on"},likeIconText:function(){return 0==this.userLikeVideo?"点击收藏":"已收藏，点击取消"}},methods:{getComments:function(){var t=this;this.$http({url:"/video/getVideoComments?videoId="+this.id+"&page=1&size=99"}).then(function(e){t.comments=e.data.data.rows})},getRelation:function(){var t=this;this.$http({url:"/user/queryPublisher?videoId="+this.id+"&publishUserId="+this.video.userId}).then(function(e){var s=e.data;200===s.status&&(t.isFollow=s.data.publisher.isFollow,t.userLikeVideo=s.data.userLikeVideo)})},follow:function(){var t=this;this.$store.getters.activeStatus?this.$http({url:"/user/beyourfans?userId="+this.video.userId}).then(function(e){var s=e.data;200===s.status?(t.$message("关注成功！"),t.getRelation()):500===s.status&&t.$message.error(s.msg)}).catch(function(e){t.$message.error("未知错误！")}):this.$alert("请登录后重试","提示",{confirmButtonText:"确定"})},unFollow:function(){var t=this;this.$store.getters.activeStatus?this.$http({url:"/user/dontbeyourfans?userId="+this.video.userId}).then(function(e){var s=e.data;200===s.status?(t.$message("取消关注成功"),t.getRelation()):500===s.ststus&&t.$message.error(s.msg)}).catch(function(e){t.$message.error("未知错误！")}):this.$alert("请登录后重试","提示",{confirmButtonText:"确定"})},collectVideo:function(){var t=this;this.$store.getters.activeStatus?this.$http({url:"/video/userLike?videoId="+this.id+"&videoCreatorId="+this.video.userId}).then(function(e){var s=e.data;200===s.status?(t.$message("收藏成功"),t.getRelation()):500===s.ststus&&t.$message.error(s.msg)}):this.$alert("请登录后重试","提示",{confirmButtonText:"确定"})},collectCancelVideo:function(){var t=this;this.$store.getters.activeStatus?this.$http({url:"/video/userUnLike?videoId="+this.id+"&videoCreatorId="+this.video.userId}).then(function(e){var s=e.data;200===s.status?(t.$message("取消收藏成功"),t.getRelation()):500===s.ststus&&t.$message.error(s.msg)}):this.$alert("请登录后重试","提示",{confirmButtonText:"确定"})},collectOrDont:function(){this.userLikeVideo?this.collectCancelVideo():this.collectVideo()}},beforeMount:function(){this.getComments()},mounted:function(){var t=this;this.$http({url:"/video/"+this.id}).then(function(e){t.video=e.data.data,t.$videoUrl=e.data.data.videoPath;var s=t.$refs.player;if(t.$flv.isSupported()){var o=t.$flv.createPlayer({type:"flv",url:t.$static+t.$videoUrl,cors:!0},{lazyLoad:!1});o.attachMediaElement(s),t.$flvPlayer=o,o.load(),t.getRelation()}})}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"box"}},[s("vue-plyr",{attrs:{options:t.options}},[s("video",{ref:"player",attrs:{resource:t.videoPath,id:"videoElement",controls:""}})]),t._v(" "),s("div",{attrs:{id:"videoExtra"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:18}},[s("el-card",{attrs:{shadow:"hover"}},[s("p",{staticStyle:{"font-size":"24px","margin-bottom":"4px",color:"#303133"}},[t._v("\n                  "+t._s(t.video.videoTitle)+"\n                  "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.likeIconText,placement:"right"}},[s("i",{class:t.likeIconClass,attrs:{id:"collectIcon"},on:{click:t.collectOrDont}})])],1),t._v(" "),s("p",{staticStyle:{"font-size":"16px","margin-bottom":"20px",color:"#606266"}},[t._v("发表于："+t._s(t.video.timeAgo))]),t._v(" "),s("p",{staticStyle:{"font-size":"17px","margin-bottom":"4px",color:"#303133"}},[s("i",{staticClass:"el-icon-caret-right"}),t._v("\n                  "+t._s(t.video.videoDesc)+"\n                ")]),t._v("\n                \n                "+t._s(t.videoPath)+"\n              ")])],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-card",{attrs:{shadow:"hover"}},[s("div",{attrs:{id:"publisherInfo"}},[null!=t.video&&null!=t.video.faceImage?s("img",{staticStyle:{cursor:"pointer"},attrs:{src:t.$static+t.video.faceImage},on:{click:function(e){t.$router.push({path:"/user/"+t.video.userId})}}}):t._e(),t._v(" "),s("span",{staticStyle:{margin:"10px 0px"},attrs:{type:"text"}},[t._v(t._s(t.video.nickname))]),t._v(" "),0==t.isFollow?s("el-button",{attrs:{type:"success",size:"mini",round:""},on:{click:t.follow}},[t._v("关注")]):s("el-button",{attrs:{type:"default",size:"mini",round:""},on:{click:t.unFollow}},[t._v("已关注")])],1)])],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("el-card",{staticStyle:{"margin-top":"12px"},attrs:{shadow:"never"}},[s("send-comment",{attrs:{videoId:t.id},on:{refreshComment:t.getComments}}),t._v(" "),s("el-col",{staticStyle:{"margin-top":"20px","margin-bottom":"10px"},attrs:{span:21,offset:1}},[s("span",{staticStyle:{"border-left":"2px solid #409EFF","padding-left":"5px","font-size":"18px"}},[t._v("评论列表")]),s("br")]),t._v(" "),s("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"12px"},attrs:{span:21,offset:1}},[0==t.comments.length?s("div",[t._v("暂无评论，快来评论吧")]):t._e()]),t._v(" "),t._l(t.comments,function(e){return s("comment-item",{key:e.id,staticClass:"comment",attrs:{comment:e},on:{refreshComment:t.getComments}})})],2)],1)],1)],1)],1)},staticRenderFns:[]};var c=s("VU/8")(a,r,!1,function(t){s("8BF7")},"data-v-68972df1",null);e.default=c.exports},"8BF7":function(t,e){},IUR9:function(t,e){},nkB6:function(t,e){}});
//# sourceMappingURL=1.34ce6de8d6ae8a84dd5b.js.map