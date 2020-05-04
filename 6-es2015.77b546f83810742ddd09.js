(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{AAub:function(e,t,n){"use strict";n.r(t);var r,i=n("wj3C"),a=n.n(i),o=n("S+S0"),s=n("mrSG"),c=n("zVF4"),u=n("nbvr"),f=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),l=new c.ErrorFactory("installations","Installations",f);function d(e){return e instanceof c.FirebaseError&&e.code.includes("request-failed")}function p(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function _(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function g(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),[2,l.create("request-failed",{requestName:e,serverCode:(r=n.error).code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function h(e){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey})}function v(e,t){var n=t.refreshToken,r=h(e);return r.append("Authorization",function(e){return"FIS_v2 "+e}(n)),r}function b(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function w(e,t){var n=t.fid;return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,r,i,a,o;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return t=p(e),r=h(e),i={method:"POST",headers:r,body:JSON.stringify({fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.4.8"})},[4,b((function(){return fetch(t,i)}))];case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3];case 2:return[2,{fid:(o=s.sent()).fid||n,registrationStatus:2,refreshToken:o.refreshToken,authToken:_(o.authToken)}];case 3:return[4,g("Create Installation",a)];case 4:throw s.sent()}}))}))}function m(e){return new Promise((function(t){setTimeout(t,e)}))}var y=/^[cdef][\w-]{21}$/;function O(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa(String.fromCharCode.apply(String,Object(s.__spread)(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return y.test(t)?t:""}catch(n){return""}}function I(e){return e.appName+"!"+e.appId}var E=new Map;function j(e,t){var n=I(e);C(n,t),function(e,t){var n=T();n&&n.postMessage({key:e,fid:t}),N()}(n,t)}function C(e,t){var n,r,i=E.get(e);if(i)try{for(var a=Object(s.__values)(i),o=a.next();!o.done;o=a.next())(0,o.value)(t)}catch(c){n={error:c}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}var S=null;function T(){return!S&&"BroadcastChannel"in self&&((S=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){C(e.data.key,e.data.fid)}),S}function N(){0===E.size&&S&&(S.close(),S=null)}var A,P="firebase-installations-store",D=null;function k(){return D||(D=Object(u.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(P)}}))),D}function x(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,a,o;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return n=I(e),[4,k()];case 1:return r=s.sent(),i=r.transaction(P,"readwrite"),[4,(a=i.objectStore(P)).get(n)];case 2:return o=s.sent(),[4,a.put(t,n)];case 3:return s.sent(),[4,i.complete];case 4:return s.sent(),o&&o.fid===t.fid||j(e,t.fid),[2,t]}}))}))}function q(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return t=I(e),[4,k()];case 1:return n=i.sent(),[4,(r=n.transaction(P,"readwrite")).objectStore(P).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function F(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,a,o,c;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return n=I(e),[4,k()];case 1:return r=s.sent(),i=r.transaction(P,"readwrite"),[4,(a=i.objectStore(P)).get(n)];case 2:return o=s.sent(),void 0!==(c=t(o))?[3,4]:[4,a.delete(n)];case 3:return s.sent(),[3,6];case 4:return[4,a.put(c,n)];case 5:s.sent(),s.label=6;case 6:return[4,i.complete];case 7:return s.sent(),!c||o&&o.fid===c.fid||j(e,c.fid),[2,c]}}))}))}function L(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,F(e,(function(n){var r=function(e){return G(e||{fid:O(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(l.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,w(e,t)];case 1:return n=i.sent(),[2,x(e,n)];case 2:return d(r=i.sent())&&409===r.serverCode?[4,q(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,x(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,n)}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:V(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function V(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,i;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return[4,R(e)];case 1:t=a.sent(),a.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,m(100)];case 3:return a.sent(),[4,R(e)];case 4:return t=a.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,L(e)];case 6:return n=a.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}}))}))}function R(e){return F(e,(function(e){if(!e)throw l.create("installation-not-found");return G(e)}))}function G(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function B(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,i,a,o,c;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return e=function(e,t){var n=t.fid;return p(e)+"/"+n+"/authTokens:generate"}(n,t),i=v(n,t),(a=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",a.getPlatformInfoString()),o={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:"w:0.4.8"}})},[4,b((function(){return fetch(e,o)}))];case 1:return(c=s.sent()).ok?[4,c.json()]:[3,3];case 2:return[2,_(s.sent())];case 3:return[4,g("Generate Auth Token",c)];case 4:throw s.sent()}}))}))}function M(e,t){return void 0===t&&(t=!1),Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return[4,F(e.appConfig,(function(r){if(!U(r))throw l.create("not-registered");var i,a=r.authToken;if(!t&&2===(i=a).requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===a.requestStatus)return n=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,K(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,m(100)];case 3:return i.sent(),[4,K(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,M(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw l.create("app-offline");var o=function(e){var t={requestStatus:1,requestTime:Date.now()};return Object(s.__assign)(Object(s.__assign)({},e),{authToken:t})}(r);return n=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,8]),[4,B(e,t)];case 1:return n=a.sent(),i=Object(s.__assign)(Object(s.__assign)({},t),{authToken:n}),[4,x(e.appConfig,i)];case 2:return a.sent(),[2,n];case 3:return!d(r=a.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,q(e.appConfig)];case 4:return a.sent(),[3,7];case 5:return i=Object(s.__assign)(Object(s.__assign)({},t),{authToken:{requestStatus:0}}),[4,x(e.appConfig,i)];case 6:a.sent(),a.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,o),o}))];case 1:return r=a.sent(),n?[4,n]:[3,3];case 2:return i=a.sent(),[3,4];case 3:i=r.authToken,a.label=4;case 4:return[2,i]}}))}))}function K(e){return F(e,(function(e){if(!U(e))throw l.create("not-registered");var t;return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object(s.__assign)(Object(s.__assign)({},e),{authToken:{requestStatus:0}}):e}))}function U(e){return void 0!==e&&2===e.registrationStatus}function H(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,L(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function z(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,a;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return n=function(e,t){var n=t.fid;return p(e)+"/"+n}(e,t),r=v(e,t),i={method:"DELETE",headers:r},[4,b((function(){return fetch(n,i)}))];case 1:return(a=o.sent()).ok?[3,3]:[4,g("Delete Installation",a)];case 2:throw o.sent();case 3:return[2]}}))}))}function W(e){return l.create("missing-app-config-values",{valueName:e})}(A=a.a).INTERNAL.registerComponent(new o.Component("installations",(function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw W("App Configuration");if(!e.name)throw W("App Name");try{for(var r=Object(s.__values)(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var a=i.value;if(!e.options[a])throw W(a)}}catch(o){t={error:o}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,L(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):M(e).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,H(e.appConfig)];case 1:return n.sent(),[4,M(e,t)];case 2:return[2,n.sent().token]}}))}))}(n,e)},delete:function(){return function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,F(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw l.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw l.create("app-offline");case 3:return[4,z(t,n)];case 4:return r.sent(),[4,q(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(e){return function(e,t){var n=e.appConfig;return function(e,t){T();var n=I(e),r=E.get(n);r||(r=new Set,E.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=I(e),r=E.get(n);r&&(r.delete(t),0===r.size&&E.delete(n),N())}(n,t)}}(n,e)}}}),"PUBLIC")),A.registerVersion("@firebase/installations","0.4.8");var $,J,X,Y=n("q/0M"),Q="https://www.googletagmanager.com/gtag/js",Z=function(e){return e.EVENT="event",e.SET="set",e.CONFIG="config",e}({}),ee=function(e){return e.ADD_SHIPPING_INFO="add_shipping_info",e.ADD_PAYMENT_INFO="add_payment_info",e.ADD_TO_CART="add_to_cart",e.ADD_TO_WISHLIST="add_to_wishlist",e.BEGIN_CHECKOUT="begin_checkout",e.CHECKOUT_PROGRESS="checkout_progress",e.EXCEPTION="exception",e.GENERATE_LEAD="generate_lead",e.LOGIN="login",e.PAGE_VIEW="page_view",e.PURCHASE="purchase",e.REFUND="refund",e.REMOVE_FROM_CART="remove_from_cart",e.SCREEN_VIEW="screen_view",e.SEARCH="search",e.SELECT_CONTENT="select_content",e.SELECT_ITEM="select_item",e.SELECT_PROMOTION="select_promotion",e.SET_CHECKOUT_OPTION="set_checkout_option",e.SHARE="share",e.SIGN_UP="sign_up",e.TIMING_COMPLETE="timing_complete",e.VIEW_CART="view_cart",e.VIEW_ITEM="view_item",e.VIEW_ITEM_LIST="view_item_list",e.VIEW_PROMOTION="view_promotion",e.VIEW_SEARCH_RESULTS="view_search_results",e}({}),te=new Y.Logger("@firebase/analytics"),ne=(($={})["no-ga-id"]='"measurementId" field is empty in Firebase config. Firebase Analytics requires this field to contain a valid measurement ID.',$["already-exists"]="A Firebase Analytics instance with the measurement ID ${id}  already exists. Only one Firebase Analytics instance can be created for each measurement ID.",$["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",$["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate",$),re=new c.ErrorFactory("analytics","Analytics",ne),ie={},ae="dataLayer",oe="gtag",se=!1;function ce(e){if(se)throw re.create("already-initialized");e.dataLayerName&&(ae=e.dataLayerName),e.gtagName&&(oe=e.gtagName)}!function(e){e.INTERNAL.registerComponent(new o.Component("analytics",(function(e){return function(e,t){var n=e.options.measurementId;if(!n)throw re.create("no-ga-id");if(null!=ie[n])throw re.create("already-exists",{id:n});if(!se){(function(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(Q))return r}return null})()||function(e){var t=document.createElement("script");t.src=Q+"?l="+e,t.async=!0,document.head.appendChild(t)}(ae),function(e){var t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(ae);var r=function(e,t,n){var r=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];window[t].push(arguments)};return window[n]&&"function"==typeof window[n]&&(r=window[n]),window[n]=function(e,t){return function(n,r,i){if(n===Z.EVENT){var a=[];if(i&&i.send_to){var o=i.send_to;Array.isArray(o)||(o=[o]);for(var s=0,c=o;s<c.length;s++){var u=t[c[s]];if(!u){a=[];break}a.push(u)}}if(0===a.length)for(var f=0,l=Object.values(t);f<l.length;f++)a.push(l[f]);Promise.all(a).then((function(){return e(Z.EVENT,r,i||{})})).catch((function(e){return te.error(e)}))}else n===Z.CONFIG?(t[r]||Promise.resolve()).then((function(){e(Z.CONFIG,r,i)})).catch((function(e){return te.error(e)})):e(Z.SET,r)}}(r,e),{gtagCore:r,wrappedGtag:window[n]}}(ie,ae,oe);X=r.wrappedGtag,J=r.gtagCore,se=!0}return ie[n]=function(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,i;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return[4,t.getId()];case 1:return r=a.sent(),n("js",new Date),n(Z.CONFIG,e.options.measurementId,((i={}).firebase_id=r,i.origin="firebase",i.update=!0,i)),[2]}}))}))}(e,t,J),{app:e,logEvent:function(e,t,r){return function(e,t,n,r,i){var a=r||{};i&&i.global||(a=Object(s.__assign)(Object(s.__assign)({},r),{send_to:t})),e(Z.EVENT,n,a||{})}(X,n,e,t,r)},setCurrentScreen:function(e,t){return function(e,t,n,r){r&&r.global?e(Z.SET,{screen_name:n}):e(Z.CONFIG,t,{update:!0,screen_name:n})}(X,n,e,t)},setUserId:function(e,t){return function(e,t,n,r){r&&r.global?e(Z.SET,{user_id:n}):e(Z.CONFIG,t,{update:!0,user_id:n})}(X,n,e,t)},setUserProperties:function(e,t){return function(e,t,n,r){if(r&&r.global){for(var i={},a=0,o=Object.keys(n);a<o.length;a++){var s=o[a];i["user_properties."+s]=n[s]}e(Z.SET,i)}else e(Z.CONFIG,t,{update:!0,user_properties:n})}(X,n,e,t)},setAnalyticsCollectionEnabled:function(e){return function(e,t){window["ga-disable-"+e]=!t}(n,e)}}}(e.getProvider("app").getImmediate(),e.getProvider("installations").getImmediate())}),"PUBLIC").setServiceProps({settings:ce,EventName:ee})),e.INTERNAL.registerComponent(new o.Component("analytics-internal",(function(e){try{return{logEvent:e.getProvider("analytics").getImmediate().logEvent}}catch(t){throw re.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),e.registerVersion("@firebase/analytics","0.3.3")}(a.a)},nbvr:function(e,t,n){!function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,a=new Promise((function(a,o){n(i=e[t].apply(e,r)).then(a,o)}));return a.request=i,a}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new f(e,i.request)}))}function a(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function u(e){this._index=e}function f(e,t){this._cursor=e,this._request=t}function l(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function p(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function _(e){this._db=e}a(u,"_index",["name","keyPath","multiEntry","unique"]),o(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),a(f,"_cursor",["direction","key","primaryKey","value"]),o(f,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(f.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new f(e,t._request)}))}))})})),l.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},a(l,"_store",["name","keyPath","indexNames","autoIncrement"]),o(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(l,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},a(d,"_tx",["objectStoreNames","mode"]),s(d,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},a(p,"_db",["name","version","objectStoreNames"]),s(p,"_db",IDBDatabase,["deleteObjectStore","close"]),_.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},a(_,"_db",["name","version","objectStoreNames"]),s(_,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[l,u].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,a=i[e].apply(i,n.slice(0,-1));a.onsuccess=function(){r(a.result)}})}))})),[u,l].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=function(e,t,n){var i=r(indexedDB,"open",[e,t]),a=i.request;return a&&(a.onupgradeneeded=function(e){n&&n(new p(a.result,e.oldVersion,a.transaction))}),i.then((function(e){return new _(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);