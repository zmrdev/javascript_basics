class parent{
    bike(){
        console.log("passion plus");
    }
}

class child extends parent{
    bike(){
        console.log("hornet");
    }
}
var ch=new child()
ch.bike()