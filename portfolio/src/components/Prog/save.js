<Fragment>
<div style={{height:'300px', width: '100%', paddingTop: '100px'}}>
    <button onClick={() => this.setState({ percentage: this.state.percentage + 1 })} >Increase</button>
    {/* moet uiteindelijk de 'start' knop worden */}
    <button onClick={() => this.setState({ percentage: this.state.percentage - 10 })} >Decrease</button>
    {/* moet uiteindelijk de 'reset' knop worden */}
    <ProgBar percentage={this.state.percentage} />
</div>
</Fragment>