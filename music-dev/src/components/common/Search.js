import { SearchBar} from 'antd-mobile';
import React from 'react';

class Search extends React.Component {
    state = {
        value: '搜索',
    };

    onChange= (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };

    render() {
        return (<div>
            <SearchBar
                value={this.state.value}
                placeholder="Search"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                showCancelButton
                onChange={this.onChange}
            />
        </div>);
    }
}
export default Search;




