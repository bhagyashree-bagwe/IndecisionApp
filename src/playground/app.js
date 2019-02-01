class IndecisionApp extends React.Component{

    
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            optionsArr : []
        }
    }

    componentDidMount(){
        try{
        const optString = localStorage.getItem("optStore");
        const optObject = JSON.parse(optString);
        this.setState(() => ({optionsArr:optObject}));
    }catch(e){
        //Do nothing, default to empty array
    }
    }
    componentWillUnmount(){}

    componentDidUpdate(prevProps, prevState){
        if(prevState.optionsArr.length !== this.state.optionsArr.length)
        {
            const json = JSON.stringify(this.state.optionsArr);
            localStorage.setItem('optStore',json);
        }
    }

    handleDeleteOptions(){
        this.setState(() => ({optionsArr : []}))
    };

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=> ({optionsArr:prevState.optionsArr.filter((option) => {
            return optionToRemove !== option;
        })}))
    };

    handlePickOption(){
        const selection = Math.floor(Math.random() * this.state.optionsArr.length);
        const selectedOption  = this.state.optionsArr[selection];
        alert(selectedOption);
    };

    handleAddOption(option){
        if(!option){
            return 'Enter valid option'
        }
        else if(this.state.optionsArr.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState) => ({optionsArr : this.state.optionsArr.concat(option)}))
    };

    render(){
        const subtitle ="Put your life in hands of a computer";
        

    return (
            <div>
            <Header subtitle ={subtitle}/>
            <Action hasOptions={this.state.optionsArr.length > 0} handlePick={this.handlePickOption}/>
            <Options  
                optionsArr={this.state.optionsArr}
                handleDelete={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}


const Header = (props) => {
    return (
        <div>
           <h1>{props.title}</h1>
           <h3>{props.subtitle}</h3>
        </div>
    )
};

Header.defaultProps = {
    title: 'Default Title!'
}

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                <h1>{this.props.title}</h1>
//                <h3>{this.props.subtitle}</h3>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return(
        <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    )
};

// class Action extends React.Component {
//     render(){
//         return(
//             <div>
//             <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
//             </div>
//         )
//     }
// }


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDelete}>Remove All</button>
            {props.optionsArr.length === 0 && <p>Please add options to get started!</p>}
             {
                props.optionsArr.map((opt) => (
                <Option
                    key={opt}
                    optText={opt}
                    handleDeleteOption={props.handleDeleteOption}
                />
                ))
             }
        </div>
    )
};
// class Options extends React.Component {

//     constructor(props){
//         super(props);
//     }

//     render(){
        
//         return (
//             <div>
//                 <button onClick={this.props.handleDelete}>Remove All</button>
//                  {this.props.optionsArr.map((opt) => {
//                      return <p key={opt}>{opt}</p>
//                  })}
//                <Option/>
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
        <div>
           {props.optText}
           <button
            onClick={(e)=>{
            props.handleDeleteOption(props.optText);
            }}
           >
            Remove
           </button>
        </div>
    )
};
// class Option extends React.Component {
//     render(){
//         return (
//             <div>
               
//             </div>
//         )
//     }
// }

class AddOptions extends React.Component {

    constructor(props){
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            error :undefined
        }
    }

    handleOnSubmit(event){
        event.preventDefault();
        const option  = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}))

        if(!error){
            event.target.elements.option.value='';
        }
    };

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOnSubmit}>
                    <input type ="text" name="option"></input>
                    <button name="addOption">Add</button>
                </form>
            </div>
        )
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name : {props.name}</p>
//             <p>Age : {props.age}</p>
//         </div>
//     );
// };

const appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp/>, appRoot);