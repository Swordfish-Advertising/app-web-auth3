webpackJsonp([1],{"7zck":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),t("v-app",[t("v-content",[t("v-container",[t("img",{attrs:{src:r("ymUC")}}),this._v(" "),t("router-view")],1)],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("head",[t("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",rel:"stylesheet"}})])}]};var a=r("VU/8")({name:"App",data:function(){return{title:"App-web-auth3"}}},n,!1,function(e){r("nE+f")},null,null).exports,i=r("/ocq"),o=r("Xxa5"),u=r.n(o),c=r("exGp"),l=r.n(c),p={props:{confirmation:{type:Boolean,default:!1},value:{type:String,default:""}},data:function(){return{visiblePass:!1,repass:"",rules:{required:function(e){return!!e||"Password is required."}}}},computed:{matchPassword:function(){return this.value===this.repass||"Password confirmation does not match."}}},h={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-text-field",{attrs:{id:"password",value:e.value,appendIcon:e.visiblePass?"lock_open":"lock",type:e.visiblePass?"text":"password",rules:[e.rules.required],label:"Password"},on:{input:function(t){e.$emit("input",t)},"click:append":function(){return e.visiblePass=!e.visiblePass}}}),e._v(" "),e.confirmation?r("v-text-field",{attrs:{id:"passConfirmation",type:e.visiblePass?"text":"password",rules:[e.matchPassword],label:"Password confirmation"},model:{value:e.repass,callback:function(t){e.repass=t},expression:"repass"}}):e._e()],1)},staticRenderFns:[]},v=r("VU/8")(p,h,!1,null,null,null).exports,d={props:{errorMsg:{type:String,default:""},successMsg:{type:String,default:""}},computed:{alertMsg:function(){return this.successMsg.length>0?this.successMsg:this.errorMsg.length>0?this.errorMsg:""},alertType:function(){return this.successMsg.length>0?"success":"error"}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-divider",{staticClass:"mt-3 mb-2"}),this._v(" "),t("v-alert",{attrs:{value:this.alertMsg,type:this.alertType,transition:"scale-transition"}},[t("span",{domProps:{innerHTML:this._s(this.alertMsg)}})])],1)},staticRenderFns:[]},m=r("VU/8")(d,f,!1,null,null,null).exports,g=r("Zrlr"),k=r.n(g),w=r("wxAW"),b=r.n(w),y=r("mtWM"),x=r.n(y),A=function(){function e(t){var r=this;k()(this,e),this.selection=[];var s=t.regions;Object.keys(s).forEach(function(e){var t=s[e],n=t.zones;Object.keys(n).forEach(function(e){var s=n[e],a=s.hostings;Object.keys(a).forEach(function(e){var n=a[e];r.selection.push({value:e,text:n.name+" ("+t.name+" - "+s.name+")",description:n.description})})})})}return b()(e,[{key:"getSelection",value:function(){return this.selection}}]),e}(),E=function(){function e(t,r,s){k()(this,e),this.core=function(e){return"https://"+e+"."+t},this.register="https://reg."+t,this.appId=r,this.origin=s}return b()(e,[{key:"poll",value:function(){var e=l()(u.a.mark(function e(t){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(this.register+"/access/"+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateAuthState",value:function(){var e=l()(u.a.mark(function e(t,r){var s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(this.register+"/access/"+t,r.body);case 2:return s=e.sent,e.abrupt("return",s.status);case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=l()(u.a.mark(function e(t,r){var s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(this.core(t)+"/auth/login",{username:t,password:r,appId:this.appId});case 2:return s=e.sent,e.abrupt("return",s.data.token);case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"checkAppAccess",value:function(){var e=l()(u.a.mark(function e(t,r,s,n){var a,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(this.core(t)+"/accesses/check-app",{requestingAppId:this.appId,requestedPermissions:r,deviceName:n},{headers:{Authorization:s}});case 2:return a=e.sent,i=a.data,e.abrupt("return",{permissions:i.checkedPermissions,match:i.matchingAccess,mismatch:i.mismatchingAccess});case 5:case"end":return e.stop()}},e,this)}));return function(t,r,s,n){return e.apply(this,arguments)}}()},{key:"createAppAccess",value:function(){var e=l()(u.a.mark(function e(t,r,s,n,a){var i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(this.core(t)+"/accesses",{name:this.appId,type:"app",permissions:r,token:n,expireAfter:a},{headers:{Authorization:s}});case 2:return i=e.sent,e.abrupt("return",i.data.access);case 4:case"end":return e.stop()}},e,this)}));return function(t,r,s,n,a){return e.apply(this,arguments)}}()},{key:"getAvailableHostings",value:function(){var e=l()(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(this.register+"/hostings");case 2:return t=e.sent,e.abrupt("return",new A(t.data));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=l()(u.a.mark(function e(t,r,s,n,a,i,o){var c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(this.register+"/user",{appid:this.appId,username:t,password:r,email:s,hosting:n,languageCode:a||"en",invitationtoken:i||"enjoy",referer:o});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}},e,this)}));return function(t,r,s,n,a,i,o){return e.apply(this,arguments)}}()},{key:"checkUsernameExistence",value:function(){var e=l()(u.a.mark(function e(t){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(this.register+"/"+t+"/server");case 2:return r=e.sent,e.abrupt("return",r.status);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getUsernameForEmail",value:function(){var e=l()(u.a.mark(function e(t){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.search("@")<0)){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,x.a.get(this.register+"/"+t+"/uid");case 4:return r=e.sent,e.abrupt("return",r.data.uid);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"requestPasswordReset",value:function(){var e=l()(u.a.mark(function e(t){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(this.core(t)+"/account/request-password-reset",{appId:this.appId,username:t},{headers:{Origin:this.origin}});case 2:return r=e.sent,e.abrupt("return",r.status);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"changePassword",value:function(){var e=l()(u.a.mark(function e(t,r,s){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(this.core(t)+"/account/reset-password",{username:t,newPassword:r,appId:this.appId,resetToken:s},{headers:{Origin:this.origin}});case 2:return n=e.sent,e.abrupt("return",n.status);case 4:case"end":return e.stop()}},e,this)}));return function(t,r,s){return e.apply(this,arguments)}}()},{key:"getServiceInfo",value:function(){var e=l()(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(this.register+"/service/infos");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),I=function(){function e(t){k()(this,e),this.list="string"==typeof t?JSON.parse(t):t}return b()(e,[{key:"updateList",value:function(e){return this.list=e,this.list}}]),e}();var S,_=function(){function e(){throw k()(this,e),new Error("Impossible to instantiate static Context!")}return b()(e,null,[{key:"init",value:function(e){var t=location.hostname.split(".").slice(1).join(".")||e.domain||"pryv.me",r=e.requestingAppId||"pryv-app-web-auth-3";this.language=e.lang||"en",this.appId=r,this.returnURL=e.returnURL,this.oauthState=e.oauthState,this.permissions=new I(e.requestedPermissions),this.pollKey=e.key,this.pryv=new E(t,r)}}]),e}(),U=function(){function e(t){k()(this,e),this.msg=this.parseError(t)}return b()(e,[{key:"parseError",value:function(e){if("string"==typeof e)return"<b>"+e+"</b>";if(null==e||null==e.response||null==e.response.data)return"<b>"+this.unexpectedError()+"</b>";var t=e.response.data,r=t.error,s="<b>"+this.parseErrorData(r||t)+"</b>",n=r?r.data:t.errors;return s+=this.parseSubErrors(n)}},{key:"parseSubErrors",value:function(e){var t=this,r="";return null!=e&&Array.isArray(e)&&e.forEach(function(e){r+="<br/>"+t.parseErrorData(e)}),r}},{key:"parseErrorData",value:function(e){return e.detail||e.message||this.unexpectedError()}},{key:"unexpectedError",value:function(){return"Unexpected error"}}]),e}(),P={components:{Password:v,Alerts:m},data:function(){return{username:"",password:"",email:"",hosting:"",hostingsSelection:[],newUser:null,error:"",success:"",rules:{required:function(e){return!!e||"This field is required."},email:function(e){return/.+@.+/.test(e)||"E-mail must be valid."}},validForm:!1}},created:function(){var e=l()(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.pryv.getAvailableHostings();case 3:t=e.sent,this.hostingsSelection=t.getSelection(),this.hostingsSelection.length>0&&(this.hosting=this.hostingsSelection[0].value),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.throwError(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),methods:{submit:function(){var e=l()(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()){e.next=12;break}return e.prev=1,e.next=4,_.pryv.createUser(this.username,this.password,this.email,this.hosting);case 4:t=e.sent,this.success="New user successfully created: "+t.username+".",null==_.permissions.list&&(location.href=_.pryv.core(t.username)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),this.throwError(e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(){return e.apply(this,arguments)}}(),clear:function(){this.$refs.form.reset()},throwError:function(e){this.error=new U(e).msg}}},F={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Register a new user")]),e._v(" "),null==e.newUser?r("v-form",{ref:"form",attrs:{id:"registerForm"},model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[r("v-text-field",{attrs:{id:"email",rules:[e.rules.required,e.rules.email],label:"E-mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-text-field",{attrs:{id:"username",rules:[e.rules.required],label:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),r("Password",{attrs:{confirmation:!0},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-autocomplete",{attrs:{id:"hosting",items:e.hostingsSelection,rules:[e.rules.required],placeholder:"Choose hosting...",label:"Hosting"},model:{value:e.hosting,callback:function(t){e.hosting=t},expression:"hosting"}}),e._v(" "),r("v-btn",{attrs:{id:"submitButton",disabled:!e.validForm},on:{click:e.submit}},[e._v("Create")]),e._v(" "),r("v-btn",{attrs:{id:"clearButton"},on:{click:e.clear}},[e._v("Clear")]),e._v(" "),r("div",[e._v("\n      By registering you agree with our\n      "),r("a",{attrs:{target:"_blank",href:"https://pryv.com/terms-of-use/"}},[e._v("\n      terms of use")]),e._v(".\n    ")])],1):e._e(),e._v(" "),r("v-divider",{staticClass:"mt-3 mb-2"}),e._v(" "),r("router-link",{attrs:{to:{name:"Authorization"}}},[r("h3",[e._v("Go back to Sign in")])]),e._v(" "),r("Alerts",{attrs:{successMsg:e.success,errorMsg:e.error}})],1)},staticRenderFns:[]},R=r("VU/8")(P,F,!1,null,null,null).exports,M={components:{Password:v,Alerts:m},props:{resetToken:{type:String,default:null}},data:function(){return{username:"",password:"",error:"",success:"",resetStatus:null,changeStatus:null,rules:{required:function(e){return!!e||"This field is required."}},validForm:!1}},computed:{pageTitle:function(){return this.resetToken?"Set a new password":"Reset password"},buttonText:function(){return this.resetToken?"Change password":"Request password reset"}},methods:{submit:function(){var e=l()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.$refs.form.validate()){e.next=18;break}return e.next=4,_.pryv.getUsernameForEmail(this.username);case 4:return this.username=e.sent,e.next=7,_.pryv.checkUsernameExistence(this.username);case 7:if(null!=this.resetToken){e.next=14;break}return e.next=10,_.pryv.requestPasswordReset(this.username);case 10:this.resetStatus=e.sent,200===this.resetStatus&&(this.success="We have sent password reset instructions to your e-mail address."),e.next=18;break;case 14:return e.next=16,_.pryv.changePassword(this.username,this.password,this.resetToken);case 16:this.changeStatus=e.sent,200===this.changeStatus&&(this.success="Your password have been successfully changed.");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),this.throwError(e.t0);case 23:case"end":return e.stop()}},e,this,[[0,20]])}));return function(){return e.apply(this,arguments)}}(),throwError:function(e){this.error=new U(e).msg}}},D={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.pageTitle))]),e._v(" "),200!==e.resetStatus&&200!==e.changeStatus?r("v-form",{ref:"form",model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[r("v-text-field",{attrs:{id:"usernameOrEmail",rules:[e.rules.required],label:"Username or email"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),null!=e.resetToken?r("Password",{attrs:{confirmation:!0},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):e._e(),e._v(" "),r("v-btn",{attrs:{id:"submitButton",disabled:!e.validForm},on:{click:e.submit}},[e._v(e._s(e.buttonText))])],1):e._e(),e._v(" "),r("v-divider",{staticClass:"mt-3 mb-2"}),e._v(" "),r("router-link",{attrs:{to:{name:"Authorization"}}},[r("h3",[e._v("Go back to Sign in")])]),e._v(" "),r("Alerts",{attrs:{successMsg:e.success,errorMsg:e.error}})],1)},staticRenderFns:[]},L=r("VU/8")(M,D,!1,null,null,null).exports,B=r("d7EF"),G=r.n(B),Q={props:{permissionsList:{type:Array,default:function(){return[]}},appId:{type:String,default:""}},data:function(){return{dialog:!0}},methods:{closeDialog:function(e){this.dialog=!1,this.$emit(e)}}},T={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{width:"600",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{id:"appIdText"}},[r("span",[e._v("App "),r("b",[e._v(e._s(e.appId))]),e._v(" is requesting : ")])]),e._v(" "),r("v-card-text",[r("ul",e._l(e.permissionsList,function(t,s){return r("li",{key:s},[e._v("\n          A permission on stream "),r("b",[e._v(e._s(t.streamId))]),e._v(" with level "),r("b",[e._v(e._s(t.level))])])}))]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{id:"refusePermissions"},on:{click:function(t){e.closeDialog("refused")}}},[e._v("Reject")]),e._v(" "),r("v-btn",{attrs:{id:"acceptPermissions"},on:{click:function(t){e.closeDialog("accepted")}}},[e._v("Accept")])],1)],1)],1)},staticRenderFns:[]},Z=r("VU/8")(Q,T,!1,null,null,null).exports,Y=(S=l()(u.a.mark(function e(t,r){var s,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.pryv.getUsernameForEmail(t);case 2:return s=e.sent,e.next=5,_.pryv.checkUsernameExistence(s);case 5:return e.next=7,_.pryv.login(s,r);case 7:return n=e.sent,e.abrupt("return",[s,n]);case 9:case"end":return e.stop()}},e,this)})),function(e,t){return S.apply(this,arguments)}),j=function e(t,r){k()(this,e),this.body={status:"ACCEPTED",username:t,token:r}},N=function e(t,r){k()(this,e),this.body={status:"REFUSED",reasonId:t||"REFUSED_BY_USER",message:r||"The user refused to give access to the requested permissions"}};var C=function(e){var t=_.returnURL;null==t||"false"===t?window.close():(_.oauthState?t+="?state="+_.oauthState+"&code="+_.pollKey:(t+="?prYvkey="+_.pollKey,Object.keys(e.body).forEach(function(r){t+="&prYv"+r+"="+e.body[r]})),location.href=t)},z=function(){var e=l()(u.a.mark(function e(t,r,s){var n,a,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.pryv.checkAppAccess(t,_.permissions.list,r);case 2:if(!(n=e.sent).mismatch){e.next=5;break}throw new Error("Mismatching access already exists: "+JSON.stringify(n.mismatch));case 5:if(!n.match){e.next=10;break}return a=new j(t,n.match.token),e.next=9,_.pryv.updateAuthState(_.pollKey,a);case 9:return e.abrupt("return",C(a));case 10:if(!n.permissions){e.next=13;break}return i=_.permissions.updateList(n.permissions),e.abrupt("return",s(i));case 13:case"end":return e.stop()}},e,this)}));return function(t,r,s){return e.apply(this,arguments)}}(),H=function(){var e=l()(u.a.mark(function e(t,r,s){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.pryv.createAppAccess(t,r,s);case 2:return n=e.sent,a=new j(t,n.token),e.next=6,_.pryv.updateAuthState(_.pollKey,a);case 6:C(a);case 7:case"end":return e.stop()}},e,this)}));return function(t,r,s){return e.apply(this,arguments)}}(),V=function(){var e=l()(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new N,e.prev=1,e.next=4,_.pryv.updateAuthState(_.pollKey,t);case 4:return e.prev=4,C(t),e.finish(4);case 7:case"end":return e.stop()}},e,this,[[1,,4,7]])}));return function(){return e.apply(this,arguments)}}(),W={components:{Password:v,Permissions:Z,Alerts:m},data:function(){return{username:"",password:"",personalToken:"",appId:_.appId,error:"",permissionsList:null,serviceInfos:{},rules:{required:function(e){return!!e||"This field is required."},email:function(e){return/.+@.+/.test(e)||"E-mail must be valid"}},validForm:!1}},created:function(){var e=l()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.pryv.getServiceInfo();case 3:this.serviceInfos=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.throwError(e.t0);case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),methods:{submit:function(){var e=l()(u.a.mark(function e(){var t,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()){e.next=15;break}return e.prev=1,e.next=4,Y(this.username,this.password);case 4:return t=e.sent,r=G()(t,2),this.username=r[0],this.personalToken=r[1],e.next=10,z(this.username,this.personalToken,this.showPermissions);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),this.throwError(e.t0);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(){return e.apply(this,arguments)}}(),showPermissions:function(e){this.permissionsList=e},accept:function(){var e=l()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(this.username,this.permissionsList,this.personalToken);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.throwError(e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}(),refuse:function(){var e=l()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),throwError:function(e){this.error=new U(e).msg}}},q={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Sign in")]),e._v(" "),null!=e.permissionsList?r("Permissions",{attrs:{appId:e.appId,permissionsList:e.permissionsList},on:{accepted:e.accept,refused:e.refuse}}):e._e(),e._v(" "),r("v-form",{ref:"form",model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[r("v-text-field",{attrs:{id:"usernameOrEmail",rules:[e.rules.required],label:"Username or email"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),r("Password",{model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-btn",{attrs:{id:"submitButton",disabled:!e.validForm},on:{click:e.submit}},[e._v("Sign In")]),e._v(" "),r("v-btn",{on:{click:e.refuse}},[e._v("Cancel")]),e._v(" "),e.serviceInfos.support?r("div",[e._v("\n      Feel free to reach our\n      "),r("a",{attrs:{href:e.serviceInfos.support,target:"_blank"}},[e._v("\n        helpdesk")]),e._v("\n      if you have questions.\n    ")]):e._e()],1),e._v(" "),r("v-divider",{staticClass:"mt-3 mb-2"}),e._v(" "),r("router-link",{attrs:{to:{name:"RegisterUser"}}},[r("h3",[e._v("Create an account")])]),e._v(" "),r("router-link",{attrs:{to:{name:"ResetPassword"}}},[r("h3",[e._v("Forgot password")])]),e._v(" "),r("Alerts",{attrs:{errorMsg:e.error}})],1)},staticRenderFns:[]},O=r("VU/8")(W,q,!1,null,null,null).exports,J={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("404 - Page not found")]),this._v("\n  The page you are looking for is like time in quantum gravity theories, it does not exist.\n")])}]},K=r("VU/8")(null,J,!1,null,null,null).exports;s.default.use(i.a);var X=new i.a({mode:"history",base:"access",routes:[{path:"/",redirect:{name:"Authorization"}},{path:"/auth",name:"Authorization",component:O,alias:"/access.html"},{path:"/register",name:"RegisterUser",component:R,alias:"/register.html"},{path:"/reset",name:"ResetPassword",component:L,props:function(e){return{resetToken:e.query.resetToken}},alias:"/reset-password.html"},{path:"*",component:K}]});X.beforeEach(function(e,t,r){null==t.name&&_.init(e.query),r()});var $=X,ee=r("3EgV"),te=r.n(ee);r("7zck");s.default.use(te.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:$,components:{App:a},template:"<App/>"})},"nE+f":function(e,t){},ymUC:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAIAAAC1eHXNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0FFQTU4M0Q4NUQ5MTFFMzhBQUJBRDQ4MDI4ODg5NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FFQTU4M0U4NUQ5MTFFMzhBQUJBRDQ4MDI4ODg5NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQUVBNTgzQjg1RDkxMUUzOEFBQkFENDgwMjg4ODk2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQUVBNTgzQzg1RDkxMUUzOEFBQkFENDgwMjg4ODk2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppc+5zgAAAbdSURBVHja7Fi7j1ZFFL/nzHxr3AR8xEcAkRhkxWjDX2BhrIxB8EWhoiERiYUFjY0xWmuUGJQYBKMmGgsLX7E0xITGsPHBklhQAFK4FoaABbt3jucxZ+7cu3dhIRYW3EzuN9/MmfP7nce8Lnyxqvk/PNg013hc47HsEy/dTYP/UNGH8QFpmfFwFTxIx/FIgE4BQLMSrVhhE/UI2V+gS/MAfxcGxgZ6AnBZ0wpqBVkzkDpJnSqHxYwEHY+awfY/e+R/f3//b6+/nNnCGB0ii8v9r+2b2fNS3fPlbZAZOBX0Cr8jBgVFjwV4DOqQ+COqEY+/sXechHvtvlffnNm9Z0nAAjTEXPgZUGHfIDOAIInHFUQADBgihEmDEwhTS2EYYHr9PU2Y4l6I1/UKy4ep6TtmRkgwP+7FSRMmol9QEJiYgCr0AB4wijQalfEs3rz3FcAs3CvcEibcu0wCRyPKBdkGjMge4hLQeIQmaxQHmCioHIQ4f/To38ePDxRueOKp69dvbOLEy1Spczv3DuRZA+tRnaHYiUKaCUWtCycxpTgDghaWDuLDH5/Z/sOjD83te3ugeuOu3SIgDKacipT1j+8YSPJY1sB6mhA6iKhxVw+ZL9G9Oinw6iGRlnqIhOHkp4cvnjtXa79z22PxhptBVHclrr7p7p3P12I8iseSOD8b1mhyZOzQBRQbY2BNwQIWMxVEVsHmLlw4f2L/uzXAZPXqu3buojChOJVLmHALt9diPIrHsgbKhgXDkrkTPb34r+YIZ6nAN1qsIkIyTPlxFoVw8rOP/zl7theap5+FGDt/xLhh67ZagOVPfv6JYINlYUVCUNBMFXTOj0ZIIFjqgtISUZ1MKtcoIdYyd+C9GmZq1ap1j2wn7eU316fXru1lBsvbcDEdFR4LG8FSfqBE0Ug0mYG5BI0v5LiKKAfo1HdfDVyy+YUXuZeC2Cr1vjNYXjPDPWGeBkNBZZbt50pFolRkaQMNGzQq3WQ3hrmDH9Rg02vWrHt4K8XJ7Q88yPWeM1hSDZCxrEexlQeAwymiPYhek4UcOpqYe52WRgpOf//t/LFjvSx5cgdjyLt6WIYlGZWyfnRTTWGGM2jdTbS1NImc7Ss6TH+8Vy0ggBOHDtaQN27aNPPcrlu2bOlNk8MfFmOsglAedIQOGllqZL8C55lfkHc1HTP/y+z87Gwtfm9/zeDev34+RvWBzzdF9wTm443VFQVp/MClpwfww4bukLIzapnru2S4gB46SJ1FqKcQMhL5GEIJDEG0Jdt5sWjPRbdmAdaiB71kJMgEUpqf/enMkSOjJLide1lG5HlgasFPPq42mVrb/YvNqLYaRnK+DNaaItHIj2jkekupTW1LbTv7zlujPLidR5HILGaFYoa8Se3JxphhrJAyP+R/1qeorQyQ8WIK/zV480rTtlKUyoUzp05+8/WABLdc+OM0LS4ICRPmQsrAbCv6zSplKQRSi8q0Ve6pUDH61kXKIKkMZe2LjPTrgf0DHtyiJESG3H9KPal7iNQM45SdrSS4ErlTjvrcJ6uKVdRxtv5IerE54OnN8c3n3/NnTg14cIuFnOykrWooJ4TdKVKXAGa2+oY5RHGa5GSQk6NtK3JilH8ymwzbJk2pLL3X2MN+somWZfQ0Ws7vhqrzhTQ5wJKhEULMY1EOqGDYXEllDZU7Eb9lmWmSH6A10TWzYXgXZLeDXwxKBY2KTwKQNM6zyRjoJGF/tAuESYB5LJKEgJPXeCgSNeaShqC6xcntox3yWFwADQq6S8wBZFPSPaFBaW0hkKzQRvWHXXnE7lzxewMmXYCScSIBTtnnMBoX80Hy+xDjs8k2J9V7hUeyiSsJK3kj+aGMZOkLzA6MUF59wRZc0n0i5fsmag7277E5Lot59df0JFlNybAB7OKS8gqWFsnXU8vcmJLmn/lQM5EJpQY8RTQcjGo7AOhVqBkhof5YSB4Rw02SHyn7ztJCFnXKi1ZjWaL3OQkQZP1GiAohfWsr+jTBakbAUh7gl1abIeCVMk1sW8m563IMGElNsBlP+V5JysnVKQ/qtONyU5fai6R+AP/+4DKp7CZ2i+yR0ErM92JLUShUxBbI7ezKtrrKt+XLxEe3Bqo26nKP9nmb6SL5iuLXfHKzypU/Lv0+QdAxy29tLD4g7zf3QmkBX0yp85ZldDfbafT7zuh3GCorhNtULU8lQGnJN5/kn7lyArl8+QoCV/1dys9Bzik1xQFQ4QH0PuT4MSon82U/26yIR//EmDmhL1bU9EhgyRW4IsUr5gFVCNBDQH0B6H+BXKEnLs+jS8CqovnZ+QPGPoPakjrICfiv4lLPC6MyesYuEbmiyPwrwACDVkknkOYxrgAAAABJRU5ErkJggg=="}},["NHnr"]);
//# sourceMappingURL=app.7edb394593352f0da6f6.js.map