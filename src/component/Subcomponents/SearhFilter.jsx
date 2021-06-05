import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import { NavLink } from 'react-router-dom'
import '../../styleSheets/TopHeader.css'


class SearhFilter extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: '',
        }
    }



    filterOptions = createFilterOptions({
        matchFrom: "start",
        stringify: (option) => option.title
    });


    handleChange = () => {
        let search = this.state.value
        // console.log('input value==>', this.state.value, `/${search}`)
        return search
    }

    render() {
        let { value } = this.state
        let search = this.handleChange()
        return (
            <div>
                <form className='filter_search_form'>
                    <Autocomplete

                        id="filter-demo"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        filterOptions={this.filterOptions}
                        className='filter_searchbar'
                        renderInput={(params) => (
                            <TextField {...params} value={value}
                                onSelect={e => this.setState({ value: e.target.value })}
                                onChange={e => this.setState({ value: e.target.value })}
                                className='search_textField'
                                placeholder="Finds Cars,Mobile Phones and more..."
                                style={
                                    {
                                        padding: '10px',
                                        paddingBottom: '0',
                                        border: 'none',
                                        color: '#002f34'

                                    }}
                            />
                        )}
                    />

                    <button type='button' onClick={this.handleChange} className='search_btn' ><NavLink to={`/${search}`}><i className="fa fa-search searchIcon" style={{color: 'white'}} aria-hidden="true"></i></NavLink></button>
                </form>
            </div>
        );
    }
}

export default SearhFilter;

const top100Films = [
    { title: 'Cars' },
    { title: 'house' },
    { title: 'land-and-plots' },
    { title: 'mobilephones' },                      
    { title: 'motercycle' },                      
    { title: 'tablets' },                      
    { title: 'tv-audia-video' }                     
]