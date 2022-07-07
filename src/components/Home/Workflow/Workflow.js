import React from 'react';
import './Workflow.css';
import avatar from '../../../images/avatar.png'

const Workflow = () => {
    return (
        <div className='workflow-section'>
            <div className='workflow-heading'>
                <h1><span className='workflow-underline'>Workflow</span></h1>
            </div>
            <div className='workflow'>
                <div className='workflow-topics'>
                    <div className='workflow-sub'>
                        <div className='border'>
                            <h4>1. Defining Goal</h4>
                            <p>Project analysis, defining project requirements and objectives <br />based on client needs, cost and effort estimation, creating <br /> value and process planning</p>
                        </div>
                        <div className='prod-design'>
                            <h4>2. Product Design</h4>
                            <h4>3. Development</h4>
                            <h4>4. Testing </h4>
                            <h4>5. Product Release</h4>
                            <h4>6. Maintenance Support</h4>
                        </div>
                    </div>
                </div>
                <div className='workflow-image'>
                    <img src={avatar} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Workflow;