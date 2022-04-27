let validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            if (check !== true) {
                send = false;
                console.log(check);

            }
        }

        if (send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let rDetais = rules[k].split('=');
                switch (rDetais[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'campo não pode estar vázio'

                        }
                        break;
                    case 'min':

                        break;
                }

            }

        }
        return true;

    }
};


let form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);