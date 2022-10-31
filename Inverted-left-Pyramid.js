for (let  i = 5; i > 0; i -= 1) {
    let pattern = "";

    for (let j = 0; j < i; j += 1) {
        pattern += "* ";
    }

    console.log(pattern);
}