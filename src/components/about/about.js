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
                                <img className="" src="https://bit.ly/2VheS2t"/>
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