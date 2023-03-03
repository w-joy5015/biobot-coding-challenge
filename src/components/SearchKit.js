import React from "react";
import { Api } from "../api.js";

export class SearchKit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', foundKits:[]};
    
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = async(event) => {
        await this.setState({value: event.target.value});
        let searchResults = await Api.getKitsByIdNumber(this.state.value)
        await this.setState({foundKits: searchResults});
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Search by label id number:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {this.state.foundKits.forEach(kit => {
                        <h2>Hi</h2>
                    })
                }
                <h1>Hello</h1>
                </div>
            </div>
        )
    }
}