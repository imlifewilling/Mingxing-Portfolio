import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// import {defineConfig} from "sanity";
// import {deskTool} from "sanity/desk";
// import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
// import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'mingxing_portfolio',

  projectId: '0p6dfkv7',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

//   plugins: [
//     deskTool({
//         structure: (S, context) => { 
//             return  S.list()
//                 .title('Certifications')
//                 .items([
//                     // Minimum required configuration
//                     orderableDocumentListDeskItem({type: 'certifications', S, context}),

//                     // Optional configuration
//                     orderableDocumentListDeskItem({
//                         type: 'document',
//                         title: 'Certifications',
//                         // icon: Paint,
//                         // Required if using multiple lists of the same 'type'
//                         id: 'orderable-en-certifications',
//                         // See notes on adding a `filter` below
//                         filter: `__i18n_lang == $lang`,
//                         params: {
//                             lang: 'en_US'
//                         },
//                         // pass from the structure callback params above
//                         S, 
//                         context
//                     }),
//             ])
//         },
//     }),
// ],

// schema: {
//   types: (previousTypes) => {
//       return [
//           ...previousTypes, 
//           {
//               name: "certifications",
//               title: "Certifications",
//               type: "document",
//               // Optional: The plugin also exports a set of 'orderings' for use in other Document Lists
//               // https://www.sanity.io/docs/sort-orders
//               orderings: [orderRankOrdering],
//               fields: [
//                   // Minimum required configuration
//                   orderRankField({ type: "category" }),

//                   // OR you can override _some_ of the field settings
//                   // orderRankField({ type: 'certifications', hidden: false }),

//                   // ...all other fields
//               ],
//           },
//       ]
//   }
// }
})
