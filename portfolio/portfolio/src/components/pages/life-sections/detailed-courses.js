import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Link } from "react-router-dom"
import 'react-vertical-timeline-component/style.min.css';

import Icon from "../../img/favicon.ico"

// Importing CSS Files
import "./detailed-courses.css"
// Importing JS Files

// Returning Function
function DetailedCourses() {
  return (
    <div className="DetailedCourses">

        <div className='back-to-life-course' data-aos="fade-right">
            <Link to="/home/life" className='back-to-life-link-course'>Back</Link>
        </div>

        <h1 className='DetailedCourses-heading'>Detailed Version of Courses I Have Taken @ Dalhousie University</h1>

        <table className='courses'>
            <tr data-aos="fade-up" data-aos-delay="500" className='course'>
                <td className='course-code'>CSCI 1105</td>
                <td className='course-desc'>
                    <p>Introduction to Computer Programming I</p>
                    <p>This course provides a general introduction to computer programming. The main focus is on programming skills and how to apply these skills in solving a variety of problems. Procedural programming concepts are stressed.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1110</td>
                <td className='course-desc'>
                    <p>Introduction to Computer Programming II</p>
                    <p>This course provides a general introduction to computer science and the hardware and software of computers. The main focus is on programming skills and how to apply these skills in solving a variety of problems. Algorithmic concepts, linear data structures are emphasized.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1120</td>
                <td className='course-desc'>
                    <p>Introduction to Computer Systems</p>
                    <p>This course introduces some key concepts in computer systems. Students will learn fundamental systems concepts and apply them to explain how the hardware and software environment affects program behaviour. Topics include data and program representation, program translation, operating systems, software engineering, and networking.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1170</td>
                <td className='course-desc'>
                    <p>Introduction to Web Design and Development</p>
                    <p>This course introduces students to key web concepts and skills for designing, implementing, and maintaining web content. Topics include introduction to the Web, UI and UX best practices, hypertext markup languages such as HTML, style sheets, client side programming, multimedia foundations, dynamic content and web content organization and maintenance.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1300</td>
                <td className='course-desc'>
                    <p>Calculus in Computer Science</p>
                    <p>This course is an introduction to calculus with a focus on applications to computer science. Students will be exposed to examples from graphics, machine learning, robotics, simulation, and other areas of computer science. Topics covered will include single variable limits, derivatives, integrals, differential equations, and Fourier series.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1315</td>
                <td className='course-desc'>
                    <p>Discrete Math for Computer Science</p>
                    <p>This course is an introduction to formal reasoning and discrete mathematics with applications to computer science. Students will be introduced to formal notation and reasoning about problems and algorithms. Topics include: sets, sequences, and summations, simple proof techniques, elementary number theory, back-of-the-envelope approximations, combinatorial objects. Applications and relevance of these concepts in computer science will be emphasized.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1800</td>
                <td className='course-desc'>
                    <p>Computing and Society in History</p>
                    <p>This course introduces students to the history of computing from early mechanical devices to the internet. Students will learn to read, write, and discuss scholarly arguments about how computing has shaped society, and how society has shaped computing, over time.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1801</td>
                <td className='course-desc'>
                    <p>Case Studies in Computing and Society</p>
                    <p>This course introduces students to specific topics in the history of computing. Topics may include algorithms, automation, or information. Students will learn to read, write, and discuss scholarly arguments about how computing has shaped society, and how society has shaped computing, over time.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2100</td>
                <td className='course-desc'>
                    <p>Workplace Communications for Computer Science</p>
                    <p>This course helps students communicate effectively and with confidence in a variety of workplace settings. Students learn to understand their audience and to deliver accurate, effective messages. Written assignments and oral presentations allow for the development of these skills through practice.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2110</td>
                <td className='course-desc'>
                    <p>Data Structures & Algorithms</p>
                    <p>This course provides a comprehensive introduction to data structures and algorithms, including their design, analysis, and implementation. In discussing design and analysis there is a strong emphasis on abstraction. In discussing implementation, general approaches that are applicable in a wide range of procedural programming language are emphasized, in addition to a focus on the details of implementations. Topics include an introduction to asymptotic analysis and a review of basic data structures (stacks, queues, lists, vectors), trees, priority queues, dictionaries, hashing, search trees, sorting (MergeSort, QuickSort, RadixSort) and sets, and graphs (traversals, spanning trees, shortest paths).</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2115</td>
                <td className='course-desc'>
                    <p>Theory of Computer Science</p>
                    <p>This course introduces students to fundamental ideas in computer science. The first part of the course is an introduction to finite state machines and automata theory and its applications. Students will be introduced to finite automata, push-down automata, Turing machines, and other models of computation, with particular emphasis on finite automata. The second part of the course introduces students to asymptotic notation, complexity, and culminates with an introduction to NP-completeness.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2122</td>
                <td className='course-desc'>
                    <p>Systems Programming</p>
                    <p>This course presents tools, techniques, and concepts for systems programming. Students will be exposed to assembly and will be introduced to the C programming language. The course also discusses memory hierarchies, performance measurement, exception control flow, and performance related issues. Students will be involved in significant amount of low-level programming.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2134</td>
                <td className='course-desc'>
                    <p>Software Development</p>
                    <p>This course presents techniques and methodologies for software development with modern tools. It introduces students to the software development life cycle and best practices for source code management, testing, debugging, and building. Particular focus will be on building individual skills in the development and testing phases of the life cycle. Students will be expected to work with existing medium-size code-bases that are implemented in different programming languages. Students will be exposed to a variety of software tools and will be expected to use them throughout the course.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2141</td>
                <td className='course-desc'>
                    <p>Introduction to Database Systems</p>
                    <p>This course introduces students to the concepts of database management systems and database design. Topics include: Database (DB) components, DB design using entity-relationship (relational and object oriented), SQL, and transactional properties and techniques to support them. The concepts will be reinforced using one or more Database Management Systems.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2170</td>
                <td className='course-desc'>
                    <p>Introduction to Server Side Scripting</p>
                    <p>A server side scripting language is used to create web pages with dynamic content. The course provides the technology necessary for connecting client web pages to web servers and processing and storing information obtained using forms during web sessions.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 3151</td>
                <td className='course-desc'>
                    <p>Foundations of Machine Learning</p>
                    <p>This course aims to introduce the machine learning, deep networks, natural language processing, the process and practice of data science, data mining and data warehousing. The following topics will be introduced: linear regression, optimization by gradient descent, support vector machines, decision tree classifiers, naive Bayes classifiers, multilayer neural networks, clustering, evaluation of classification and clustering algorithms, cross-validation, avoiding overfitting. Students will use a standard machine learning library to apply algorithms to various datasets.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 3171</td>
                <td className='course-desc'>
                    <p>Network Computing</p>
                    <p>This course gives students a foundation in computer networks. It presents a top-down view of the layered architectural elements of communication systems, focusing on the Internet and TCP/IP. Topics include client/server systems, packet switching, protocol stacks, queuing theory, application protocols, socket programming, remote service calls, reliable transport, UDP, TCP, and security.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>MATH 1010</td>
                <td className='course-desc'>
                    <p>Differential and Integral Calculus II</p>
                    <p>A continuation of the study of calculus with topics including: Riemann sums, techniques of integration, elementary differential equations and applications, parametric equations and polar coordinates, sequences and series, Taylor series.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>MATH 1030</td>
                <td className='course-desc'>
                    <p>Matrix Theory and Linear Algebra I</p>
                    <p>This course is a self-contained introduction to Matrix Theory and Linear Algebra. Topics include: systems of linear equations, vectors in R^n, matrices, spans, linear independence, bases, dimension, linear transformations in R^n, determinants, eigenvalues and eigenvectors, diagonalization, applications.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>STAT 2060</td>
                <td className='course-desc'>
                    <p>Introduction to Probability and Statistics</p>
                    <p>Rigorous introduction to probability and statistical theory. Topics covered include elementary probability, random variables, distributions, estimation and hypothesis testing. Estimation and testing are introduced using maximum likelihood and the generalized likelihood ratio. Natural sequels for this course are STAT 2080.03 and 3360.03</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>ECON 1101</td>
                <td className='course-desc'>
                    <p>Principles of Microeconomics</p>
                    <p>How do you decide whether or not to go to university? Why does the price of pizza change so much less than the price of oil? What will better help prevent climate change: a carbon tax, or a cap-and-trade system? Microeconomic analysis, which considers the behaviour of individuals and businesses, can answer questions like these.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>PHYC 1280</td>
                <td className='course-desc'>
                    <p>Introduction to Physics I</p>
                    <p>This course concentrates on mechanics (forces and motion). Primarily for students interested in Physical Sciences and Engineering. Students entering this course must be familiar with algebra, graphs, and trigonometry, and should be taking calculus concurrently. Ideas are introduced through in-class demonstrations enabling students to relate physical theory to events in the real world. Students explore many concepts via hands-on labs.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>PHYC 1290</td>
                <td className='course-desc'>
                    <p>Introduction To Physics II</p>
                    <p>This course concentrates on oscillations and waves, optics, electricity and magnetism. Primarily for students interested in Physical Sciences and Engineering. This course is required for all Engineering programs. Students entering this course must be familiar with algebra, graphs, and trigonometry, and should be taking calculus concurrently.Ideas are introduced through in-class demonstrations enabling students to relate physical theory to events in the real world. Students explore many concepts via hands-on labs.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>PHIL 2991</td>
                <td className='course-desc'>
                    <p>NA</p>
                </td>
            </tr>

        </table>

    </div>
  );
}

export default DetailedCourses;