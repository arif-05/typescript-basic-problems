{
    function  processValue(value: string | number): number{
        if(typeof value === "string"){
            return value.length;
        } else {
            return value*2;
        }
    }

    console.log(processValue("hello")); // Output: 5
    console.log(processValue(10));

    // 

}