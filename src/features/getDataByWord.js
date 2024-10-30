export function getDataByWord(word, data){
    const result = data.filter(item=>{
        const reg = new RegExp(word,"gi");
        return  item.name.match(reg)
    });
    return result;
}