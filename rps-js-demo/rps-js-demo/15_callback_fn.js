function display(){
    console.log("hello world");
}

function func(myCallBack){
    myCallBack();
}

func(display);
func(()=> console.log("hello world"));