try{
    let result = func();
    console.log(result);
}catch(err){
    if(err instanceof ReferenceError){
        console.error(err.message);
        throw new Error(err.message);
    }else if(err instanceof TypeError){
        console.error(err.message);
    }
}finally{
    console.log("from finally");
}
