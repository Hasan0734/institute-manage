import React from 'react';
import Events from '../Events/Events';
import Notice from '../Notice/Notice';

const EventWithNotice = () => {
    return (
        <section className="py-5" style={{ background: '#eee' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="section-heading">
                            <h2 className="text-center bottom-bg">Recent and Upcoming Events</h2>
                        </div>
                        <Events></Events>
                        <div className="text-center">
                            <button className="btn btn-warning px-4 py-2"><strong>View All Events</strong></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="section-heading">
                            <h2 className="text-center bottom-bg">Notice</h2>
                        </div>
                        <Notice></Notice>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventWithNotice;