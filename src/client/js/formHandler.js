const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        //configurations
        method: 'POST',
        credentials: 'same-origin',  // include, *same-origin, omit
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header 
    })
    try {
        return await response.json();
        
    } catch (error) {
        // appropriately handle the error
        console.log(error)
    }
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const url = document.getElementById('article-url').value //catch the URL

    if (Client.checkForURL(url)) {  //check text in the form field
           post('http://localhost:8081/add-url', {url}).then(data =>{
         
            console.log(data)
            document.getElementById('agreement').innerHTML    = `Agreement:'${data.agreement}'`
            document.getElementById('subjectivity').innerHTML = `Subjectivity:'${data.subjectivity}'`
            document.getElementById('confidence').innerHTML   = `Confidence:'${data.confidence}'`
            document.getElementById('irony').innerHTML        = `Irony:'${data.irony}'`
            document.getElementById('score_tag').innerHTML    = `Score Tag:'${data.score_tag}'`
        })                 
              
    } else {
        alert('Please, Enter a valid URL')
      }
};
 


 
export {handleSubmit};
