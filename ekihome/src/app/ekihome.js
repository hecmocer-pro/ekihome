import React from 'react';
import './ekihome.css';

function App() {
    return (
        <div>
            <header>
                <h1>Codemotion Madrid 2025</h1>
                <nav>
                    <ul>
                        <li><a href="#tickets">Tickets</a></li>
                        <li><a href="#sponsor">Become a Sponsor</a></li>
                        <li><a href="#speakers">Call for Speakers</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="intro">
                    <h2>Explore the latest trends</h2>
                    <p>Join us for two thrilling days of talks, keynotes, and panels!</p>
                </section>
                <section id="tickets">
                    <h2>Get your tickets</h2>
                    <p>Buy tickets now and assign them to attendees later.</p>
                    <ul>
                        <li>Early Ticket: 89€ + VAT</li>
                        <li>Final Price: 189€ + VAT</li>
                        <li>Group Ticket: 76€ + VAT (3 or more tickets)</li>
                        <li>Student Ticket: 69€ + VAT (Student ID required)</li>
                    </ul>
                </section>
                <section id="sponsor">
                    <h2>Become a Sponsor</h2>
                    <p>Connect with talents from all over the world and get to know speakers, tech leaders, and innovative companies.</p>
                </section>
                <section id="speakers">
                    <h2>Call for Speakers</h2>
                    <p>Share your knowledge and shape the future with us.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2025 Codemotion. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
