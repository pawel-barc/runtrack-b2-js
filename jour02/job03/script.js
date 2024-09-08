function myDisplayText(){
    const inputText = document.getElementById('text-input').value;
    document.getElementById('text-field').textContent = inputText;
}

function myTurnBold(){
    document.getElementById('text-field').style.fontWeight = 'bold';
}
function turnTextItalic(){
    document.getElementById('text-field').style.fontStyle = 'italic';
}
function myClearText(){
    const textField = document.getElementById('text-field');
    textField.style.fontWeight = 'normal';
    textField.style.fontStyle = 'normal';
    textField.textContent = '';
}

document.getElementById('text-input').addEventListener('input', myDisplayText);

document.getElementById('turn-text-bold').addEventListener('click', myTurnBold);
document.getElementById('turn-text-italic').addEventListener('click',turnTextItalic);
document.getElementById('clear-text').addEventListener('click',myClearText);