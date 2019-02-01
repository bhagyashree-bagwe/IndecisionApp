var app ={
    title : 'Indecision App',
    subtitle : 'First React app',
    options : []
};

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.optionText.value;
    if(option){
        app.options.push(option);
        event.target.elements.optionText.value='';
        renderTemplate();
    }
};

const removeAllOptions = () => {
    app.options =[];
    renderTemplate();
};

const onMakeSelection = () => {
    const selection = Math.floor(Math.random() * app.options.length);
    const selectedOption  = app.options[selection];
    alert(selectedOption);
};

const renderTemplate = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length >0 ? "Here are your options" : "No options"}
            <ol>
            {
                app.options.map((opt) => {
                    return <li key={opt}>{opt}</li>;
                })
            }
            </ol>
            <button disabled={app.options.length === 0} onClick={onMakeSelection}>What should I do?</button>
            <button onClick = {removeAllOptions}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type ="text" name="optionText"></input>
                <button>Submit</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

const appRoot = document.getElementById("app");

renderTemplate();
