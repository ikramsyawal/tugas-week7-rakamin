const hitung = require('./luas-keliling')

const tampilkanHasil = (a = luasPersegi, b = kelilingPersegi, c = luasPersegiPanjang, d = kelilingPersegiPanjang) => {
    console.log("Luas Persegi : ", a, 'Cm')
    console.log("Keliling Persegi : ", b, 'Cm')
    console.log("Luas Persegi Panjang : ", c, 'Cm')
    console.log("Keliling Persegi Panjang : ", d, 'Cm')
}

// 
let luasPersegi = hitung.luasPersegi(4)
let kelilingPersegi = hitung.kelilingPersegi(4)
let luasPersegiPanjang = hitung.luasPersegiPanjang(1, 2)
let kelilingPersegiPanjang = hitung.kelilingPersegiPanjang(1, 2)

tampilkanHasil()