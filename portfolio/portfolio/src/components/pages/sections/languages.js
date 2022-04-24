import React from "react";

const languages = () => {
    return(
        <div className="languages">
            {/* Programming Language Lists */}

            <div className='programming-languages-grid' data-aos="fade-up">
                <div className='programming-language-list-1'>
                    <div>
                        <ul><span>Languages</span>
                            <li>Java</li>
                            <li>C</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript/JSX</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </div>

                <div className='programming-language-list-2'>
                    <div>
                        <ul><span>IDEs</span>
                            <li>Itellij</li>
                            <li>VSCode</li>
                            <li>Jupiter Notebook</li>
                            <li>Vim if that counts ;)</li>
                        </ul>
                    </div>
                </div>

                <div className='programming-language-list-3'>
                    <div>
                        <ul><p></p><span>Databases</span>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
                
                <div className='programming-language-list-4'>
                    <div>
                        <ul><p></p><span>Others</span>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>Git</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default languages;