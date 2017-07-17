function abc() {

    throw new Error('')

}

function a() {
    abc()
}

function b() {
    a()
}

b();