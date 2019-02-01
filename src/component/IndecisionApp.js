import React from 'react';
import AddOptions from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component{
    
    state = {
        optionsArr : [],
        selectedOption : undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({optionsArr : []}))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=> ({optionsArr:prevState.optionsArr.filter((option) => {
            return optionToRemove !== option;
        })}))
    };

    handlePickOption = () => {
        const selection = Math.floor(Math.random() * this.state.optionsArr.length);
        const selectedOpt  = this.state.optionsArr[selection];
        this.setState(() => ({selectedOption:selectedOpt}));
    };

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid option'
        }
        else if(this.state.optionsArr.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState) => ({optionsArr : this.state.optionsArr.concat(option)}))
    };
    
    clearSelection = () => {
        this.setState(() => ({selectedOption : undefined}))
    };

    componentDidMount(){
        try{
        const optString = localStorage.getItem("optStore");
        const optObject = JSON.parse(optString);
        if (optObject) {
            this.setState(() => ({optionsArr:optObject}));
        }
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

    render(){
        const subtitle ="Put your life in hands of a computer";

    return (
            <div>
            <Header subtitle ={subtitle}/> 
            <div className="container">
            <Action hasOptions={this.state.optionsArr.length > 0} handlePick={this.handlePickOption}/>
            <div className="widget">
            <Options  
                optionsArr={this.state.optionsArr}
                handleDelete={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
            <OptionModal selectedOption={this.state.selectedOption} clearSelection={this.clearSelection}/>
            </div>
            </div>
        )
    }
}
