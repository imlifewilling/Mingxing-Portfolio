export default{
    name:'certifications',
    title:'Certifications',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Title',
            type:'string'
        },
        {
            name:'issuecompany',
            title:'IssueCompany',
            type:'string'
        },
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name: 'certificationLink',
            title: 'Certification Link',
            type: 'string',
          },
          {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
    ]
}