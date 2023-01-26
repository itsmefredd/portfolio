import React, { } from 'react';
import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import SelectedProjects from './selected-projects';


const roles = [
    { name: 'Data Science', value: 1000/3 },
    { name: 'SWE', value: 1000/3 },
    { name: 'Web Dev', value: 1000/3 },
];
const languages = [
    { name: 'R', value: 150 },
    { name: 'Python', value: 180 },
    { name: 'Java', value: 80 },
    { name: 'C/C#', value: 60 },
    { name: 'JavaScript', value: 100 },
    { name: 'HTML', value: 100 },
    { name: 'CSS', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#0088FE", "#00C49F", "#FFBB28"];
const COLORS2 = ['#4EC67E', '#4C33AE', '#9386C7', '#FF8042', "#D16934", "#038A73", "#8F9C4C"];
const COLORSdark = ['#A9FFCC', '#CBBDFF', '#FFBB28', '#FF8042', "#0088FE", "#00C49F", "#F5FFBD"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, stroke, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = (cx + radius * Math.cos(-midAngle * RADIAN))-20;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} style={{ pointerEvents: 'none' }} >
            {name}
        </text>
    );
};


const renderName = ({ cx, cy, midAngle, innerRadius, outerRadius, stroke, name }) => {
    return(name)
}

function Contact(props){
    const [openLanguage, setOpenLanguage] = useState("none");

    function changeLanguageToView(toWhat){
        if(openLanguage === "none"){
            setOpenLanguage(toWhat);
        } else if (openLanguage === toWhat){
            setOpenLanguage("none");
        } else {
            setOpenLanguage(toWhat);
        }
    }

    let languageSpecificContent = null;
    if (openLanguage === "none") {
        languageSpecificContent = null;
    } else if (openLanguage !== "none"){
        languageSpecificContent = 
        <div style={{width:"50%", height:"fit-content"}} data-aos="fade-left">
            <h1>List of {openLanguage} projects</h1>
            <SelectedProjects selectedLanguage={openLanguage} />
        </div>;
    }

    return (
        <div className='life-tools' style={{width:"100vw", minHeight: "80vh", marginLeft:"-17vw", alignItems:"center", "height": openLanguage === "none" ? "" : "fit-content"}}>
            <ResponsiveContainer width="50%" height="100%">
                <PieChart>
                    <Pie data={roles} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={200} dataKey="value" animationDuration={0}>
                        {roles.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} content={entry.name} onClick={() => changeLanguageToView(entry.name)}/>
                        ))}
                    </Pie>
                    <Pie data={languages} dataKey="value" cx="50%" cy="50%" innerRadius={230} outerRadius={250} label={renderName} labelLine={false} animationDuration={0}>
                        {languages.map((entry, index) => {
                            if(props.theme === "dark"){
                                return(<Cell key={`cell-${index}`} fill={COLORSdark[index % COLORSdark.length]} onClick={() => changeLanguageToView(entry.name)} />)
                            }else{
                                return(<Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} onClick={() => changeLanguageToView(entry.name)} />)
                            }
                        })}   
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            {languageSpecificContent}
        </div>
    )   
}

export default Contact; 