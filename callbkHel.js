function a(){
    console.log('a--')
}
function b(){
    console.log('b--')
}
function c(){
    console.log('c--')
}
function d(){
    console.log('d--')
}
function e(){
    console.log('e--')
}

a(function(){
    b(function(){
        c(function(){
            d(function(){
                e()
            })
        })
    })
})