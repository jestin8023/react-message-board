var Content = React.createClass({
    getInitialState:function(){
        return {
            inputText:''
        }
    },

    handleSelect:function(event){
        this.setState({inputText:event.target.value});
    },
    handleSubmit:function(){
        console.log("reply To:" + this.props.selectName+ "\n"+this.state.inputText);
    },
    render : function(){
        return <div>
            <textarea onChange={this.handleSelect} placeholder="please enter something..."></textarea>
            <button onClick = {this.handleSubmit}>submit</button>
        </div>;
    }
});
var Comment = React.createClass({
    getInitialState:function(){
        return{
            names:["Tim","John","Hank"],
            selectName:'Tim'
        };
    },
    handleSelect:function(event){
        this.setState({selectName:event.target.value});
    },
    render : function(){
        var options = [];
        for(var option in this.state.names){
            options.push(<option value={this.state.names[option]}>{this.state.names[option]}</option>)
        }
        return  <div>
            <select onChange={this.handleSelect}>
            {options}
            </select>
            <Content selectName={this.state.selectName}></Content>
        </div>
    }
});
React.render(<Comment></Comment>,document.body);