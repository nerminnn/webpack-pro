import {handleSubmit} from './js/formHandler';
import {checkForURL} from './js/checkURL';

// include your scss file here
import './styles/style.scss';

window.addEventListener('DOMContentLoaded', () => { /// wait till html file loads
    const submit = document.getElementById('btn-submit')
    submit.addEventListener("click",handleSubmit)
});

export { handleSubmit,checkForURL}

