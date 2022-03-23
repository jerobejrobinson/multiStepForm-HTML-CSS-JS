// multi step form logic
const proccessFormData = (form, steps, tracker) => {
    // get index for the last step in the steps array
    const lastStep = steps.length - 1

    // check to see if form element exists
    if(form) {
        // find the step that matches the tracker
        // check to see if the tracker is on the last step
        steps.map((step, index) => {
            if(index == tracker && lastStep) {
                // add the .active class to matched steps
                step.classList.add('active')
                // remove the .hidden class to matched step
                step.classList.remove('hidden')
            }
            else if(index == tracker) {
                // add the .active class to matched step
                step.classList.add('active')
                // remove the .hidden class to matched step
                step.classList.remove('hidden')
            }
            else {
                // add the .hidden class to unmatched steps
                step.classList.add('hidden')
                // remove the .active class to matched step
                step.classList.remove('active')
            }
        })

        console.log(steps)
    }else {
        console.log('form does not yet exist')
    }
}

// created an iife function to protect varibles from global scope
((proccesFormData) => {
    /* 
    this varible keeps track of which step the form is on will always start at 0.
    **Note probaly better to store this number in localStorage in case the user leaves the page.
    better suited for longer forms */
    let tracker = 0;

    // stores the data in to an array
    const data = [];

    // get elements from the DOM

    // getting form element
    const form = document.querySelector('form')

    // getting all steps and converting it into an array
    const steps = Array.from(document.querySelectorAll('.step'))

    // getting the next btn
    const next = document.querySelector('#nextBtn')

    // getting the submit btn
    const submit = document.querySelector('#submitBtn')

    //logic
    proccesFormData(form, steps, tracker)

    next.addEventListener('click', e => {
        e.preventDefault();

        const stepData = []

        const active = steps.find(step => step.classList.contains('active'))
        
        stepData.push(active.lastElementChild.id)
        stepData.push(active.lastElementChild.value)

        data.push(stepData)
        
        tracker++;

        proccessFormData(form, steps, tracker)
    })

    submit.addEventListener('click', e => {
        e.preventDefault();

        console.log(data)
    })
})(proccessFormData);