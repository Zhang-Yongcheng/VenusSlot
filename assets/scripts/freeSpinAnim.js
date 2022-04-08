import co from './co.cc';
export default function* freeSpinAnim(){
    const {type} = cc.store.gameResult;
    console.log(type);
    if(type==2){
        yield co.waitForSeconds(5);
    }else{
        yield
    }

    

}