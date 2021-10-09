import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stageOne: "C1",
            stageTwo: "M1",
            stageThree: "F1"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Stage One:
                    <input
                        name="stageOne"
                        type="text"
                        value={this.state.stageOne}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Stage Two:
                    <input
                        name="stageTwo"
                        type="text"
                        value={this.state.stageTwo}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Stage Three:
                    <input
                        name="stageThree"
                        type="text"
                        value={this.state.stageThree}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default Form;