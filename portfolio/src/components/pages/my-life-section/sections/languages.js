import React from "react";

const languages = () => {
    return(
        <div className="languages">
            {/* Programming Language Lists */}

            <div className='programming-languages-grid' data-aos="fade-up">
                <div>
                    <div className='programming-language-list-1'>
                        <div>
                            <ul><span data-aos="fade-up" data-aos-delay="300">Languages</span>
                                <li data-aos="fade-up" data-aos-delay="600">Java</li>
                                <li data-aos="fade-up" data-aos-delay="650">C</li>
                                <li data-aos="fade-up" data-aos-delay="650">C#</li>
                                <li data-aos="fade-up" data-aos-delay="700">Python</li>
                                <li data-aos="fade-up" data-aos-delay="750">HTML</li>
                                <li data-aos="fade-up" data-aos-delay="800">CSS</li>
                                <li data-aos="fade-up" data-aos-delay="850">JavaScript/JSX</li>
                                <li data-aos="fade-up" data-aos-delay="900">PHP</li>
                                <li data-aos="fade-up" data-aos-delay="950">R</li>
                                <li data-aos="fade-up" data-aos-delay="950">Haskell</li>
                            </ul>
                        </div>
                    </div>

                    <div className='programming-language-list-2'>
                        <div>
                            <ul><p></p><span data-aos="fade-up" data-aos-delay="600">Version Control</span>
                                <li data-aos="fade-up" data-aos-delay="900">GitHub</li>
                                <li data-aos="fade-up" data-aos-delay="950">GitLab</li>
                            </ul>
                        </div>
                    </div>

                    <div className='programming-language-list-3'>
                        <div>
                            <ul><p></p><span data-aos="fade-up" data-aos-delay="500">Databases</span>
                                <li data-aos="fade-up" data-aos-delay="800">SQL</li>
                            </ul>
                        </div>
                    </div>

                    <div className='programming-language-list-6'>
                        <div>
                            <ul><p></p><span data-aos="fade-up" data-aos-delay="600">Game Engine</span>
                                <li data-aos="fade-up" data-aos-delay="1050">Unity</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='programming-language-list-4'>
                        <div>
                            <ul><span data-aos="fade-up" data-aos-delay="400">IDEs</span>
                                <li data-aos="fade-up" data-aos-delay="700">Itellij</li>
                                <li data-aos="fade-up" data-aos-delay="700">CLion</li>
                                <li data-aos="fade-up" data-aos-delay="700">PyCharm</li>
                                <li data-aos="fade-up" data-aos-delay="750">VSCode</li>
                                <li data-aos="fade-up" data-aos-delay="800">Jupiter Notebook</li>
                                <li data-aos="fade-up" data-aos-delay="1050">RStudio</li>
                                <li data-aos="fade-up" data-aos-delay="850">Vim if that counts ;)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className='programming-language-list-5'>
                        <div>
                            <ul><p></p><span data-aos="fade-up" data-aos-delay="600">Frameworks</span>
                                <li data-aos="fade-up" data-aos-delay="900">ReactJS</li>
                                <li data-aos="fade-up" data-aos-delay="950">NodeJS</li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className='programming-language-list-6'>
                        <div>
                            <ul><p></p><span data-aos="fade-up" data-aos-delay="600">UI Libraries</span>
                                <li data-aos="fade-up" data-aos-delay="1050">Material UI</li>
                                <li data-aos="fade-up" data-aos-delay="1050">Bootstrap</li>
                                <li data-aos="fade-up" data-aos-delay="1050">Tailwind CSS</li>
                            </ul>
                        </div>
                    </div>

                    <div className='programming-language-list-6'>
                        <div>
                            <ul><p></p><span data-aos="fade-up" data-aos-delay="600">Deployment Tools</span>
                                <li data-aos="fade-up" data-aos-delay="1050">AWS</li>
                                <li data-aos="fade-up" data-aos-delay="1050">Vercel</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default languages;