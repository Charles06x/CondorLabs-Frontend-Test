import React, {Component} from 'react'

export default class About extends Component{

    render(){
        return (    
            <div className="container content">
                <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child box">
                            <p className="title">Charles Acevedo Díaz</p>
                            <figure className="image is-rounded">
                                <img className="" src="https://lh3.googleusercontent.com/6kzMGwB0uzmiqJsh6HEvX01yH42YoupmTvWELULHrEnkRcO5GmUKnaSkseWTlderC1mHk_YuJdTJ-nGzIsDgWuWxFZmIcsvoP692VnySqpHcyjdMw7GOMklzMIdq5ZLMAkUXEZgXb4yWMuRL81sTst27YlPrHz2RxJvY9vUWW4dIEcBQNt-MQrfvWqgjgdsQq6v956Dsf4kdF6ytev12gqIaVMJqJk3dXPqlOWHU-TOET9nfXPeZgfSwkjQT4hjEWHx8mM_P1Y3924a6JAD7_S27pGrDtZnHJPy2Wvjx6F0uLk2pQ4TKxnjUa7CCkMwyCy4sU7VAdSxRmby01HoSN4ypdVuzLzzCOcyYFh3_YE7AKDwGghyP-MZpDDaJe-4E2mfHTcDFmlt1s4qRmMbm7V38EZCGzWEFJ269M067UFERzB3m1lTcBCjBV1NJ16WUF0ix56on0TPcaTJCnhX7bk4pIf9GgN40D-48Q2OWwLHkcKcHfdED17jGPpyNx0bmcjGxyn1Uy_gC3cQ6DCRIODz4T7PPsRQulKY7HqEA8OOZDqSUPGGVmo0JuYjH4OT8yReaBOlv02JgQ7rsWMK8_za8AS8xl_a6flMs2gmvCbfMpl49IA5nyKJ1Rc_jCXBlyG8FFrveuajRsP0ptoKx5bY1yl4spf7a=w695-h969-no"/>
                            </figure>
                            
                        </div>


                        <div className="tile is-child box">
                            <p className="title">Information</p>
                            <p className="has-text-weight-semibold is-italic">System Engineer Student</p>
                            <p>Went to the university <span className="is-italic">Tecnológica de Bolívar</span>, started the System Engineer career.</p>
                            <p>Currently, I'm in my last academic semester.</p>
                            <p className="is-italic has-text-success is-family-sans-serif">"If you are going to challenge someone, challenge yourself!"</p>
                        </div>
                    </div>


                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title is-3 is-italic">Professional Profile</p>
                            <p className="has-text-justified is-size-4">System Engineer student, with knowledge in web and mobiles application development, cms (drupal), and programming languages such as C++, python, kotlin and Javascript; knowledge in HTML, CSS for web development, as well as frameworks like flask, Angular, react, and additionally, react-native for multi-platform applications.
Knowledge in API development and database management using modules like flask, and sql-alchemy, also management of qr-code for generating qr and barcodes in python and the zxing library for reading barcodes and qr for android applications. Currently, learning Grails.
</p>
                            <ul className="boxedlist">
                                <p>Preferences</p>
                                <section className="box boxedlist">
                                    <li>Python</li>
                                    <li>NodeJS</li>
                                    <li>Angular</li>
                                    <li>React</li>
                                </section>
                                
                            </ul>
                            </div>
                    </div>
                </div>
        </div>
          
        );
      }
    
}