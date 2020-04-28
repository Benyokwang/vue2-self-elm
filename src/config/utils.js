// 设置本地储存
export const setStorage = (name,content)=>{
    if(!name)return;
    if(typeof content !== 'string') content=JSON.stringify(content)
    window.localStorage.setItem(name,content);
}
// 取出本地储存
export const getStorage = (name)=>{
    if(!name)return;
    return JSON.parse(window.localStorage.getItem(name))
}
// 移除本地储存
export const removeStorage = name=>{
    if(!name)return;
    window.localStorage.removeItem(name)
}