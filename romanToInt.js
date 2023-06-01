let romanToInt = function(s) {
    let sum = 0;
    let arr = {'I': 1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    for (let n = 0; n<s.length; n++){
        if ( n+1<s.length && arr[s[n+1]] > arr[s[n]]){
            sum += arr[s[n+1]] - arr[s[n]];
            n++;
        } else {
            sum += arr[s[n]]
        }
    }
    return(sum)
};