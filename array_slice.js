function slice(element, start = 1 , end = 2 ) {
    let new_array = []
    for( let i = start; i < end; i++)
    {
       new_array.push(element[i])
    }
    document.write(new_array);
}

slice(["Lahore", "Faislabad", "Quetta"], 0, 1)