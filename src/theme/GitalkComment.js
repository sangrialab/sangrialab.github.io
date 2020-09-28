import React from 'react'
import _GitalkComponent from 'gitalk/dist/gitalk-component'
import 'gitalk/dist/gitalk.css'



const GitalkComponent = _GitalkComponent

const GitalkComment = ({ id, title }) => (
    <GitalkComponent
        options={{
            clientID: 'dcb650363b71dcedaa77',
            clientSecret: '4d8eac83bd7ae53ce90562ee68f90c4deb1203d3',
            repo: 'sangrialab.github.io',
            owner: 'sangrialab',
            admin: ['sangrialab'],
            id,
            title,
        }}
    />
)

export default GitalkComment
