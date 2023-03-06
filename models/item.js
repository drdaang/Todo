const path=require('path');
const fs = require('fs');

const p=path.join(path.dirname(require.main.filename),'data','item.json');
const getItemsFromFile=(cb)=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            // console.log(err);
            cb([]);
        }
        else{
            cb(JSON.parse(fileContent));
        }
    })
}
module.exports = class Item{
    constructor(id,t,n){
        this.id=id;
        this.title=t;
        this.text=n;
    }
    save(){
        this.id=Math.random().toString();
        getItemsFromFile(items=>{
            console.log(items);
            items.push(new Item(this.id,this.title, this.text));
            fs.writeFile(p,JSON.stringify(items),(err)=>{
                console.log("ye hi error h");
                console.log(err);
                console.log("upar");
            });
        })
    }
    static deleteById(itemId){
        console.log("hi");
        getItemsFromFile(items=>{
            
            const updatedItems=items.filter(item=>item.id!==itemId);
            fs.writeFile(p,JSON.stringify(updatedItems),(err)=>{
                console.log(err);
            });
        });
        
    }

    static fetchAll(cb){
        getItemsFromFile(cb);
    }
}