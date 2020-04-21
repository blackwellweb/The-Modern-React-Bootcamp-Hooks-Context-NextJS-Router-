class Machine extends React.Component {

    render() {
        if(this.props.s1 === this.props.s2){
            console.log("You Win");
        }
        return (
            <div>
                <p>{this.props.s1}</p>
                <p>{this.props.s2}</p>
                <p>{this.props.s3}</p>
            </div>
        );
    }
}