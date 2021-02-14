import * as React from 'react';
import {useState} from "react";
import {useHistory} from "react-router-dom";

import './BottomTabNavigator.scss';

interface Props {

}

export const BottomTabNavigator: React.FC<Props> = (props) => {
    const [activeTab, setActiveTab] = useState<'quizz' | 'edit'>('quizz');
    const history = useHistory();

    return (
        <div className={"component_BottomTabNavigator"}>
            <span
                className={activeTab === 'quizz' ? "component_BottomTabNavigator__item__active" : "component_BottomTabNavigator__item"}
                onClick={() => {
                    setActiveTab('quizz');
                    history.push('/quizz');
                }}
            >
                Quizz
            </span>
            <span
                className={activeTab === 'edit' ? "component_BottomTabNavigator__item__active" : "component_BottomTabNavigator__item"}
                onClick={() => {
                    setActiveTab('edit');
                    history.push('/edit-themes');
                }}
            >
                Edit
            </span>
        </div>
    )
}