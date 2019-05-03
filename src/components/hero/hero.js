import React, {Component} from 'react';

export default class Hero extends Component {
    render(){
        return(
            <section class="hero is-medium is-warning is-bold">
                <div class="hero-body">
                    <div class="container has-text-centered ">
                    <h1 class="title is-1">
                        Welcome to CondorMarket
                    </h1>
                    <h2 class="subtitle is-italic has-text-grey">
                        Enjoy your shopping; your joy is our compromise.
                    </h2>
                    </div>
                </div>
            </section>
        )
    }
}