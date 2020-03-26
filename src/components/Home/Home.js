import React from "react";
import Accordion from "../../common/components/Accordion/Accordion";
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <h1>Hi there! We are glad to see you</h1>
            <div className='img-wrapper'>
                <img src='https://avatanplus.com/files/resources/original/5c433a7c08d04168669c7484.png' alt='emoji'/>
            </div>
            <Accordion title='About us'>
                <div className='text'>
                    <p>
                        People tend to think that "About Us" pages have to sound formal to gain credibility and trust.
                        But most people find it easier to trust real human beings, rather than a description that sounds
                        like it came from an automaton. Trying to sound too professional on your "About Us" page results
                        in stiff, “safe” copy and design -- the perfect way to make sure your company blends in with the
                        masses.
                        Instead, Eight Hour Day showcases the people behind the company and humanizes its brand.
                        Introducing the founders by name and featuring the photos of them on the "About Us" page drives
                        home the point that Nathan and Katie are -- as they so astutely put it -- "two individuals with
                        a passion for creativity -- creativity makes us happy."
                        When you’re designing your "About Us" page,avoid industry jargon and replace it with an
                        authentic voice -- yours -- to describe your product or service. Sure, it needs to be polished
                        and free of errors, but it should always sound friendly and real.
                    </p>
                    <p>
                        "About Us" pages might encompass the values of more than one person or entity, but they're no
                        more important to the image of a business than your personal about page. Take Joe Payton's
                        "About Me" page, below.
                        Not only does Joe's illustrative self-portrait give him a personal brand that customers will
                        remember, but it also demonstrates his expertise as a designer and animator. His website
                        visitors can learn not just what he does, but why he does it, in an easily digestible way. Being
                        able to express his values as a creative professional in such a well-organized page is something
                        to be desired by anyone creating their own about page.
                    </p>
                </div>
            </Accordion>

            <Accordion title='More information'>
                <div className='text'>
                    <p>
                        Welcome to News App, your number one source for all news. We're dedicated to giving you the very
                        best of news, with a focus on you.
                        Founded in 2020 by Yurii Kichalo, News App has come a long way from its beginnings in a Lviv.
                        When Yurii first started out, his passion drove him to action, and gave him the impetus to turn
                        hard work and inspiration into to a booming online news. We now serve customers all over
                        Ukraine, and are thrilled to be a part of the fair trade wing of the news industry.
                    </p>
                    <p>
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any
                        questions or comments, please don't hesitate to contact us.
                    </p>
                    <p>
                        Sincerely,
                        Yurii, Founder.
                    </p>
                </div>
            </Accordion>

            <Accordion title='Our contacts'>
                <div className='content'>
                    <div className="ui list">
                        <div className="item">
                            <i className="users icon"></i>
                            <div className="content">
                                News App
                            </div>
                        </div>
                        <div className="item">
                            <i className="marker icon"></i>
                            <div className="content">
                                Lviv, prospekt Svobody 16
                            </div>
                        </div>
                        <div className="item">
                            <i className="mail icon"></i>
                            <div className="content">
                                <a href="#">example@gmail.com</a>
                            </div>
                        </div>
                        <div className="item">
                            <i className="linkify icon"></i>
                            <div className="content">
                                <div>semantic-ui.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};

export default Home;