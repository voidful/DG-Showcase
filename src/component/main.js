import React from 'react';
import '../App.css';

class MAIN extends React.Component {

    constructor(props) {
        super(props);
        const {selected_id} = this.props
        this.state = {
            selected_id:selected_id,
            isLoading: true
        }
    }

    getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }

    componentDidMount() {
        if (this.getQueryVariable('id') !== false)
            this.setState({selected_id:this.getQueryVariable('id')})
        this.setState({isLoading: true});
        fetch(process.env.PUBLIC_URL + '/distractors/' + this.state.selected_id + '.json')
            .then(response => response.json())
            .then(data => this.setState({data: data, isLoading: false}))
    }

    render() {

        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <div id="main">
                <article className="post">
                    <header>
                        <div className="title">
                            <h2>ID: {this.state.selected_id}</h2>
                        </div>

                    </header>

                    <div className="mini-posts">
                        <div>
                            <h2>Context</h2>
                            <p>{this.state.data.article} </p>
                        </div>
                        <div>
                            <h2>Question</h2>
                            <h3>{this.state.data.questions}</h3>
                            <h2>Model generate result</h2>
                            <ul>
                                {this.state.data.options.model.map((key, index) => (
                                    <li key={key + index}
                                        style={{color: index === this.state.data.answer.model ? "crimson" : "black"}}>
                                        {key}
                                    </li>
                                ))}
                            </ul>
                            <br/>
                            <h2>Human generate result</h2>
                            <ul>
                                {this.state.data.options.human.map((key, index) => (
                                    <li key={key + index}
                                        style={{color: index === this.state.data.answer.human ? "crimson" : "black"}}>
                                        {key}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </article>
            </div>
        );
    }
}

export default MAIN;
