let a = "Hello";
let b = "o";

function findChar(str, case_sensitive, char = "a") {
    let index = -1;

    if (!case_sensitive) { str = str.toLowerCase() }

    for(let i =  0; i < str.length; i++ )
    {
        if(str[i] == char) 
        {
            index = i;
            break
        }
    }

    document.write(index)
}

findChar("Waris Ali Ali", true, "r")

findChar(a, true, b)

let c = "Urdu";
let d = "y";
let e = true;

findChar(c, d, e)