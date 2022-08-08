const Progress_bar = document.querySelector(".progress-bar")
let h1_el = document.querySelector(".h1-cls")


h1_el.setAttribute('class','h1-color-green')
Progress_bar.style.width = '0%'


let pro_val = 0
let width_ = 0
let onetime = true
setInterval(function(){
    if(pro_val <=10)
    {
        pro.innerText   = (pro_val /10 * 100) + "%"
        Progress_bar.style.width = pro.innerText
        pro_val += 1

    }else
    {
        if(onetime){
            h1_el.setAttribute('class','h1-color-white')
            h1_el.innerText = "[Done]"
            onetime = false
        }
        
    }
},1000);
