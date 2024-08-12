import React, {Component} from "react";

export default class FirstComponent extends Component {

    // componentWillReceiveProps(nextProps,nextContext){
    //   alert ('worked)
    // }

    componentWillUnmount() {
        alert('unmount')
    }
    
    render() {

        return(
            <div className="row" aria-disabled ={true}>
                <div className="col-md-4 offset-4 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Adipisci,
                                consequuntur facere facilis illum impedit non perferendis praesentium
                                quod ratione tenetur velit vero.Accusamus,amet delectus dolor incidunt 
                                necessitatibus sunt temporibus
                            </p>
                        </div>
                        <div className="card-footer">
                            <p className={'text-end'}>
                                <a href="#">Next</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}