let inputEl = document.getElementById("input-el")
let convert = document.getElementById("convert")
let mtof = document.getElementById("mtof")
let ltog = document.getElementById("ltog")
let ktop = document.getElementById("ktop")

mtof.innerHTML = `0 meters = 0 feet | 0 feet = 0 meters`
ltog.innerHTML = `0 liters = 0 gallons | 0 gallons = 0 liters`
ktop.innerHTML = `0 kilos = 0 pounds | 0 pounds = 0 kilos`

convert.addEventListener("click", function conUnit() {
    let inpVal = inputEl.value 
    let m = inpVal
    let f = inpVal * 3.28
    let roundf = f.toFixed(3)
    let m2 = inpVal * 0.30
    let roundm2 = m2.toFixed(3)
    let f2 = inpVal
    mtof.innerHTML = `${m} meters = ${roundf} feet | ${f2} feet = ${roundm2} meters`

    let l = inpVal
    let g = inpVal * 0.264
    let roundg = g.toFixed(3)
    let g2 = inpVal
    let l2 = inpVal * 3.785
    let roundl2 = l2.toFixed(3)
    ltog.innerHTML = `${l} liters = ${roundg} gallons | ${g2} gallons = ${roundl2} liters`

    let k = inpVal
    let p = inpVal * 2.2046
    let roundp = p.toFixed(3)
    let p2 = inpVal
    let k2 = inpVal * 0.454
    let roundk2 = k2.toFixed(3)
    ktop.innerHTML = `${k} kilos = ${roundp} pounds | ${p2} pounds = ${roundk2} kilos`
})
