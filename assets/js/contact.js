const messageBtn = document.getElementById('snd-msg');
const inputs = document.getElementsByTagName('input');
const succesMsg = document.getElementById('successMessage-rsv')

messageBtn.addEventListener('click', () => {
    setTimeout(() => {
        succesMsg.classList.remove('initial-scale');
        succesMsg.classList.add('Rsrv-succes');
    }, 100);
    setTimeout(() => {
        succesMsg.classList.remove('Rsrv-succes');
        succesMsg.classList.add('initial-scale')
        inputs.value = '';
    }, 2000)
    
})