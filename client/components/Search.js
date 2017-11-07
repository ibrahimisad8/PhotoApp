import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <div className="search" style={{ margin: '20px auto', textAlign: 'center' }}>
                <input type="text"/>
            </div>
        );
    }
}