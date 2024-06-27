import React from 'react'
import '../styles/help.scss'

const Help = () => {
    return (
        <div style={{background:'white', height:'100vh', overflow:'hidden'}}>
            <div className="container">
                <h1>CodeGeni AI Tool Helpline</h1>
                <p>
                    Welcome to CodeGeni's AI Tool helpline. If you need assistance or have any questions regarding our AI tool, feel free to reach out to us via email.
                </p>
                <div className="contact-info">
                    <p><a href="mailto:codegeni@gmai.com">codegeni@gamil.com</a></p>
                </div>
                <div className="more-info">
                    <h2>About CodeGeni AI Tool</h2>
                    <p>
                        CodeGeni AI Tool represents the pinnacle of artificial intelligence technology, designed to empower individuals and businesses with unparalleled capabilities and insights.
                    </p>
                    <p>
                        Leveraging cutting-edge machine learning algorithms and natural language processing techniques, our AI tool enables users to automate tasks, analyze data, and derive meaningful insights with unprecedented accuracy and efficiency.
                    </p>
                    <p>
                        Whether you're a developer, data scientist, marketer, or entrepreneur, CodeGeni AI Tool offers a versatile suite of features tailored to your specific needs and objectives. From sentiment analysis and image recognition to predictive modeling and decision optimization, our AI tool equips you with the tools you need to drive innovation and achieve your goals.
                    </p>
                    <p>
                        Beyond its technical capabilities, CodeGeni AI Tool is designed for ease of use and accessibility, allowing users of all skill levels to harness the power of artificial intelligence without the need for extensive training or expertise. With intuitive interfaces and comprehensive documentation, getting started with CodeGeni AI Tool is quick and effortless.
                    </p>
                    <p>
                        Join the ranks of leading innovators and visionaries who have embraced the future with CodeGeni AI Tool. Experience the transformative potential of artificial intelligence and unlock new opportunities for growth, efficiency, and success.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Help
