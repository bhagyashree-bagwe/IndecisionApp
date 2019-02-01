class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility : false
        }
        
    }

    handleVisibility(prevState){
        this.setState((prevState) => {
            return{
                visibility : !prevState.visibility
            }
        });
    };

    render(){
    return(
    <div>
         <button onClick={this.handleVisibility}>{this.state.visibility ? 'Hide Content' : 'Show Content'}</button>
         {this.state.visibility && <p>Content is here</p>}
     </div>
    )
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// const makeVisible = () => {
//     visibility = !visibility;
//     renderTemplate();
// };
// let visibility = false;

// const renderTemplate = () => {
//     var template = (
//     <div>
//         <button onClick={makeVisible}>{visibility ? 'Hide Content' : 'Show Content'}</button>
//         {visibility && <p>Content ishere</p>}
//         }
//     </div>
//     );
//     ReactDOM.render(template,appRoot);
// };

// const appRoot = document.getElementById("app");

// renderTemplate();