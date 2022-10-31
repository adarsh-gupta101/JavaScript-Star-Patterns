for (let  i = 5; i > 0; i -= 1) {
    let pattern = "";

    for (let j = 0; j < i; j += 1) {
        pattern += "*";
    }

    let spaces = "";

    for (let j = 5; j >= 1; j += 1) {
        spaces += " ";
    }

    console.log(spaces + pattern);
}