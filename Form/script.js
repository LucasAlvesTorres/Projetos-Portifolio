let validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        validator.clearErrors();


        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            if (check !== true) {
                send = false;
                validator.showError(input, check);

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
                        if (input.value.length < rDetais[1]) {
                            return 'Campo tem que ter pelo menos ' + rDetais[1] + ' digitos';
                        }
                        break;
                    case 'email':
                        if (input.value !== '') {
                            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                            if (!regex.test(input.value.toLowerCase())) {
                                return 'e-mail digitado inválido!'

                            }
                        }
                        break;
                }

            }

        }
        return true;
    },

    showError: (input, error) => {
        input.style.borderColor = '#FF0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);

    },

    clearErrors: () => {
        let inputs = form.querySelectorAll('input');
        for (i = 0; i < inputs.length; i++) {
            inputs[i].style = '';
        }

        let errorElements = document.querySelectorAll('.error');
        for (i = 0; i < errorElements.length; i++) {
            errorElements[i].remove();
            console.log('entrou');

        }

    },
};


let form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);