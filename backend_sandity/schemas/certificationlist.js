export default{
    name:'certificationlist',
    title:'Certificationlist',
    type: 'document',
    fields:[
        {
            name:'num',
            title:'Num',
            type:'number'
        },
        {
            name:'certifications',
            title:'Certifications',
            type:'array',
            of:[{ type:'certifications'}]
        },
    ]
}