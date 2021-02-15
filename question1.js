function indexA (arr, a) {
    let search = arr.find((item) => {       
        for (i = 0; i < arr.length; i++) {       
            if(item === a - arr[i]) {
                return true
            }
        }
    })
   return arr.indexOf(search) === -1 ? "Index não encontrado" : [arr.indexOf(search), arr.indexOf(a - search)]
}