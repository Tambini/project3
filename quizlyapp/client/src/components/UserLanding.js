import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import TriviaForm from './TriviaForm';

class UserLanding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

  componentDidMount = () => {
    let tempCategoryList = this.props.categoryList.slice(0);
    tempCategoryList.push({ category: 'All Categories' });
    tempCategoryList.push({ category: 'Only Difficult Questions' });
    this.setState({
      categories: tempCategoryList
    })
  }

  render() {
    return (
      <div>
        <h3>Click on any of the categories to enter the game:</h3>
        <div className="button-wrapper">
          {this.state.categories.map((category, key) => (
            <div key={key}>
              <Link to='/gameboard'>
                <button className={`button${key + 1}`} onClick={(e) => {
                  this.props.setCategory(category.category)
                }
                }>{category.category}</button>
              </Link>
            </div>
          ))}
        </div>
        <TriviaForm
          apiCall="post"
          admin={false}
        />
      </div >
    )
  }
}

export default UserLanding;