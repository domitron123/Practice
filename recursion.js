function countDown(startNumber) {
    if(startNumber < 1) {
        return 1
    }
    // before recursion startNumber = 10
    console.log("Before recursion startNumber " + startNumber)
    countDown(startNumber - 1)
    // after recursion startNumber = 1 
    console.log("After recursion startNumber " + startNumber)
    
}

countDown(10)