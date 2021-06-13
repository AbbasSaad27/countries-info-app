import React from 'react';
import ThemeChanger from './themeChanger/themeChanger.component';
import './topbar.component.styles.css';

const Topbar = (props) => {
    return ( 
        <div className={`topbar ${props.themeSwitched ? 'darkEl' :'whiteEl'}`}>
            <h3 className={`topbar--header ${props.themeSwitched ? 'darkTxt' : 'whiteTxt'}`}>
                Where in the world?
            </h3>
            <ThemeChanger changeTheme={props.changeTheme} themeSwitched={props.themeSwitched}/>
        </div>
    );
}
 
export default Topbar;