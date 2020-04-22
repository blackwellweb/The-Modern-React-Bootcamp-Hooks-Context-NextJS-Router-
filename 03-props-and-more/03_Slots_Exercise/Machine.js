class Machine extends React.Component {

    render() {

        let msg;
        const s1 = this.props.s1;
        const s2 = this.props.s2;
        const s3 = this.props.s3;

        if (s1 === s2 && s1 === s3) {
            msg =
                <div>
                    <p>You Win!</p>
                </div>
        } else {
            msg =
                <div>
                    <p>You Lose!</p>
                </div>
        }
        return (
            <div>
                <p>{s1}</p>
                <p>{s2}</p>
                <p>{s3}</p>
                <div>{msg}</div>
            </div>
        );
    }
}