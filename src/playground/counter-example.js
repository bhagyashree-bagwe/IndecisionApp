class Counter extends React.Component {
    
    constructor(props){
        super(props);
        this.onPlusOne = this.onPlusOne.bind(this);
        this.onMinusOne = this.onMinusOne.bind(this);        
        this.onReset = this.onReset.bind(this);

        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'));
        if(!isNaN(count)){
            this.setState(() => ({count}));
        }
        
    };

    componentDidUpdate(prevProps, prevState){
        localStorage.setItem("count", this.state.count);
    };

    onPlusOne(){
        this.setState((prevState) => {
            return{
                count : prevState.count + 1
            }
        });
    };

    onMinusOne(){
         this.setState((prevState) => {
            return{
                count : prevState.count - 1
            }
        });
    };

    onReset(){
        this.setState(() => {
            return{
                count : 0
            }
        });
    };

    render(){
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.onPlusOne}>+1</button>
                <button onClick={this.onMinusOne}>-1</button>
                <button onClick={this.onReset}>reset</button>
            </div>
        )
    };
}

ReactDOM.render(<Counter count={11}/>, document.getElementById("app"));


// let count=0;
// const plusOne = () => {
//     count++;
//     renderCounter();
//     console.log("plus one");
// }

// const minusOne = () => {
//     count--;
//     renderCounter();
//     console.log("minus One");
// }

// const reset = () => 
// {
//     count =0;
//     renderCounter();
//     console.log("reset");
// }

// var approot = document.getElementById('app');

// const renderCounter = () => {
//     const template3 = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick = {plusOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>reset</button>    
//         </div>
//         );
//     ReactDOM.render(template3,approot);
// };

// renderCounter();