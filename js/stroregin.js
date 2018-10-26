function setInfo(obj){
    var userInfo = {
        id:obj.id,
        username:obj.username,
        pwd:obj.pwd,
    }
    localStorage.setItem('loginInfo',JSON.stringify(userInfo));
}

function getInfo(){
    try{
       var data;
       return  data = localStorage.getItem(json.parse('loginInfo'));
    }catch(e){
        return null;
    }
}
//获取用户id
function getId(){
   var data=getInfo();
   return data!=null?data.id:null;
}
function getUser(){
    var data = getInfo();
    return data != null ? data.username:null;
}
function getPwd(){
    var data = getInfo();
    return data != null ? data.pwd:null;
}
