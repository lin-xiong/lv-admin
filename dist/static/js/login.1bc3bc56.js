(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0290":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-wrap"},[r("div",{staticClass:"ms-login"},[r("div",{staticClass:"ms-title"},[t._v("后台管理系统")]),r("el-form",{ref:"login",staticClass:"ms-content",attrs:{model:t.param,rules:t.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"username"},model:{value:t.param.username,callback:function(e){t.$set(t.param,"username",e)},expression:"param.username"}},[r("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-people"},slot:"prepend"})],1)],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm()}},model:{value:t.param.password,callback:function(e){t.$set(t.param,"password",e)},expression:"param.password"}},[r("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),r("div",{staticClass:"login-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("登录")])],1),r("p",{staticClass:"login-tips"},[t._v("Tips : 用户名和密码随便填。")])],1)],1)])},a=[],s=(r("9a33"),r("365c")),o={data:function(){return{query:{login:"",ps:""},param:{username:"JDthd",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(){var t=this;this.$refs.login.validate((function(e){if(!e)return t.$message.error("请输入账号和密码"),console.log("error submit!!"),!1;var r={login:t.param.username,ps:t.param.password};Object(s["s"])(r).then((function(e){if(console.log(e),!e.code)return t.$message.error("请输入正确的账号和密码"),console.log("error submit!!"),!1;localStorage.setItem("ms_username",t.param.username),localStorage.setItem("ms_ps",e.user.ps);var r=e.user.path.split(";");localStorage.setItem("ms_paths",r),t.$message.success("登录成功"),t.$router.push(r[0])}))}))}}},l=o,i=(r("6d2f"),r("4023")),u=Object(i["a"])(l,n,a,!1,null,"05f22da9",null);e["default"]=u.exports},"53f3":function(t,e,r){},"6d2f":function(t,e,r){"use strict";var n=r("53f3"),a=r.n(n);a.a},7512:function(t,e,r){"use strict";r.r(e);r("2b45"),r("70da"),r("9a33"),r("6491");var n=r("b775"),a=function(t){return Object(n["a"])({url:"./level3.json",method:"get",params:t})},s=function(t){return Object(n["a"])({url:"./level4.txt",method:"get",params:t})},o=function(t){return Object(n["a"])({url:"/cc/json/mobile_tel_segment.htm",method:"get",params:t})},l=function(t){var e=Math.floor(Math.random()*t);return e},i=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},u=function(t){var e=t.length||0;return t[l(e)]},c=function(){var t=["鼎","金","惠","和","凯","雅","盛","豪","隆","汇","悦","福","茗","格","馨","华","君","洲","北","逸","缘"],e=["聚源","佳福","驿乐","源达","华邦","凯撒","同阳","美乐","华尔顿","天胜","金豪","鹏晖","金雅","雅盛","菲特","协邦","龙桦","麦豪","盛达","荣盛","格林","汇都","七福","富臣","名豪","裕福","元一","宏福","世尊","京华","城轩","永嘉","诚尔","梦泰","富华","尔乐","银都","顺生","金角","领立","鑫荣","友荣","鼎盛","国鼎","双屿","富丽","温沙","亿凯","鸿华","星辉","宏达","博亿","乐从","客轩","金锐","天都","君悦","赢天","熙和","派高","博玛","润新","东蒙","利来","国聚","艺诺","诚悦","杰宏","文华","美特","锐恒","泰唐","裕通","永新","兴源","金旺","舒雅","正阳","荣兴","云天","喜象","天龙","银马","诚达","鑫汉","玛格","中诺","锦都","晟丰","凯豪","柏菲","华龙","伟艺","菲斯","金跃","顺冠","铭科","洲泰","简艺","诺信","优嘉","名鸿","江恒","蓝图","诚栋","家家顺","新家园","银地","华瑞","汇德","易安居","金航","创元","宏轩","兴扬","新瑞","融居","捷辰","家客多","优置客","华瑞","香河永成","优享逸栈","元诚","凯丽","世豫","宜安家","松鹤","鑫鸿","湖镇","兴海","银兴","阳光沙滩","温尚居","盈盛","兴盛","迅杰","金典","兴凯","吉星","东佳","安厦","隆志达","江山大地","玉溪北苑","博源","锦裕达","和诚","水源丰","境胜","爱家立业","华杰","盛世恒业","泰源","华冠","大溪地","天地","信地","三得益","房信","东方","派拉蒙","深淼","河源","富园","金源","百大","兴达","恩宝","玖月","嘉锦鹏","益民","光怡","德信","八达","富中","国正","奥新","安青","巴人","东镜","丰泽","丰力","峰岩","飞扬","伟峰","城铭","村田","大富","大商","星渊","信拓","协和","缘通","元凌","远志","金地","玉鸣","西欧","锄禾","创坛","住达","众合","永恒","朝河源","馨园","鑫诚","颐豪","亿华","驿鑫","普瑞","强锐","福地","长城","神剑","瑞贝卡","日盛达","瑞邦","三盛","荣城","深化","松鹤","随缘","思维","圣田","盛和","天昊","天晟","万方","万邦","图腾","泰龙","桃园","腾飞","天创","开源","奎世","君意","聚缘居","鲲鹏","蓝石","华美","百家兴","京御幸福","同心","中佳","地球村","居佳","鼎盛居","方大","纵横","青商","文振","豫建","金居","吉星","南洋","天地恒","广龙","纬凌特","欧佳","天地中","万赢","广通达","玉山","同富康","恒威","永辉"],r=["酒店","华庭","苑","湾","府","国际公寓","海岸","园","堡"],n="";n=i(0,10)>5?t[i(0,t.length-1)]+t[i(0,t.length-1)]:e[i(0,e.length-1)];var a=r[i(0,r.length-1)],s=n+a;return s},p=r("0261");new p["default"]({el:"#app",telQuery:{},render:function(t){return this.$set(this.telQuery,"tel",this.$route.query.tel),console.log(this.telQuery),t("div","123")}});var m,d,f={name:"addr",data:function(){return{query:{},telQuery:{tel:""},tableData:[],Level3:[],Level4:[],addr:""}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$set(this.telQuery,"tel",this.$route.query.tel);var e="北京";o(this.telQuery).then((function(r){e=r.substr(r.indexOf("province")+10,2),a().then((function(r){var n=r.filter((function(t){return t.region.startsWith(e)})),a=u(n[0].regionEntitys),o=a.code.substr(0,a.code.length-1);s().then((function(e){var r=e.split("\n");r=r.map((function(t){return t.split(",")})),r=r.filter((function(t){return t[0].startsWith(o)}));var s=u(r);console.log(s);var i=(l(800)+1).toString().padStart(3,"0"),p=(l(200)+1).toString(),m=l(8)+1+"0"+l(9);t.addr="".concat(n[0].region).concat(a.region).concat(s[1]).concat(i,"号").concat(c()).concat(p,"栋").concat(m,"室"),console.log(t.addr)}))}))}))}},render:function(t){return t("h1","sss")}},g=f,h=r("4023"),v=r("7c3a"),b=r.n(v),y=Object(h["a"])(g,m,d,!1,null,null,null);"function"===typeof b.a&&b()(y);e["default"]=y.exports},"7c3a":function(t,e){}}]);