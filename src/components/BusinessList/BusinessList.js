import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(b => (<Business key={b.id} business={b}/>))
                }
            </div>
        );
    }
}

export default BusinessList;