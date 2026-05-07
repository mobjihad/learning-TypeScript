class counter{

    static count : number = 0 ;


    increment(){
        return counter.count +=1;
    }

   static decrement(){
        return counter.count -=1;
    }
}

const ob1 = new counter(); 
const ob2 = new counter();

console.log(ob1.increment());
console.log(ob1.increment());
console.log(ob1.increment());
console.log(counter.decrement());
console.log(ob2.increment());
console.log(counter.decrement());