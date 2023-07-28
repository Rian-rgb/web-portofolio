function onSubmit(e){

    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if(!$(email).val()){
        alert("Email Is Required")
    } else if(!$(subject).val()){
        alert("Subject Is Required")
    } else {
        $(email).val("")
        $(subject).val("")
        alert("Submit Success")
    }
}

function toggleDropdown(e){

    const target = $(e.target)
    const item = $(target).parents(".dropdown")
    const detail = $(item).find(".about-exp-item-header")
    
    console.log()
    detail.slideToggle()

    // if($(target).hasClass("active")){
    //     $(target).html("More Info").removeClass("active")
    // } else {
    //     $(target).html("Less Info").addClass("active")
    // }

    // const item = $(target).parents(".about-exp-item")
    // const detail = $(item).children(".about-exp-item-detail")
    
    // detail.slideToggle()
}

function toggleDetail(e){
    const target = $(e.target)

    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    console.log($(item).children(".about-exp-item-detail"))
    
    detail.slideToggle()
}