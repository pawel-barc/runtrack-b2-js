document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form-add-student');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const formData = new FormData(form);

        fetch('request.php', {
            method: 'POST',
            body: formData 
        })
        .then(response => response.text())
        .then(result => {
            if (result.includes('Student registered successfully')) {
                alert('Student registered successfully');
            } else {
                alert(result); 
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
