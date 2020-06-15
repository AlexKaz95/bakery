import React from 'react';
import menuJSON from './menu.json'

class Menu extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            filteredMenu: menuJSON
        }
    }

    filter (param, value) {
        return menuJSON.filter((pos, i) => {
            return pos[param].indexOf(value) !== -1
        })
    }

    handling () {
        const nav = document.querySelector('.main-nav');
        nav.addEventListener('click', (event) => {
            event.preventDefault();
            this.setState({
                filteredMenu: this.filter('category', event.target.id)
            })
        });
    }

    componentDidMount () {
        this.handling();
    }

    componentWillUnmount () {
        const nav = document.querySelector('.main-nav');
        nav.addEventListener('click', (event) => {
            this.setState({
                filteredMenu: this.filter('category', event.target.id)
            })
        }) 
    }

    render () {
        const filtered = this.state.filteredMenu;
        const items = filtered.map((value) => {
            return (
                <div key={value['id']} className="menu__item">
                    <div className="menu__image">
                        <img src={value['picture']} alt="" />
                    </div>
                    <div className="menu__title">
                        <p>{value['name']}</p>
                    </div>
                    <div className="menu__descr">
                        <p>{value['description']}</p>
                    </div>
                    <div className="menu__price">
                        <p>Цена:  <span>{value['price']}</span> руб.</p>
                    </div>
                    <div className="menu__bucket">Добавить в заказ</div>
                </div>
            );
        })

        return(
            <div className="wrapper">
                <div className="menu">
                   { items }
                </div>
            </div>
        )
    }
}

export default Menu