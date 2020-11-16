---
id: material
title: 素材
---

import {part1,part2,part3,part4} from './material'; 

export const ListContainer = ({list}) => {
    const {title, data} = list;
    return (
        <>
            <h3>{title}</h3>
            {
                data.map(item => {
                    const {url,description,img} = item;
                    return (
                        <div style={{display:'flex',flexDirection:'row',backgroundColor:'rgba(0,0,0,5%)',marginBottom:10}}>
                            <div style={{width:120,display:'flex',justifyContent:'center',alignItems:'center',background:'transparent'}}>
                                <img style={{width:60,height:60,background:'transparent',borderRadius:'50%'}} src={img}/>
                            </div>
                            <div style={{display:'flex',flex:1,minHeight:100,flexDirection:'column',justifyContent:'center',alignItems:'flex-start',marginRight:10}}>
                                <span style={{letterSpacing: 1,wordWrap:'break-word',wordBreak:'break-all',marginBottom:5,marginTop:10}}><a href={url}>{url}</a></span>
                                <span style={{marginBottom:10,marginTop:5}}>{description}</span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

<ListContainer list={part1}/>
<ListContainer list={part2}/>
<ListContainer list={part3}/>
<ListContainer list={part4}/>
