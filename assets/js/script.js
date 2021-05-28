class Multimedia {
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (url) => _url=url;
    }
    get url(){
        return this.getUrl();
    }
    set url(url){
        this.setUrl(url);
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        let _id = id;
        this.getId = () => _id;
        this.setId = (id) => _id=id;

    }
    get id(){
        return this.getId();
    }
    set id(id){
        this.setId(id);
    }
    
}
let r1 = new Reproductor('url1', 'a1');
console.log(r1.url);
r1.url('ok');
console.log(r1.url);
